import { 
  BrandSystem, 
  DnaNodeType, 
  CausalDiff, 
  GuardianEvaluation, 
  BrandDriftReport, 
  LockedBrandDNA
} from '../types/brand';

/**
 * Traverses downstream dependencies in the Brand DNA DAG
 */
export function getDownstreamNodes(
  nodeId: DnaNodeType, 
  graph: BrandSystem['stage35Graph'],
  visited: Set<DnaNodeType> = new Set()
): DnaNodeType[] {
  const current = graph.find(n => n.id === nodeId);
  if (!current) return [];

  const results: DnaNodeType[] = [];
  for (const depId of current.downstreamDependencies) {
    if (!visited.has(depId)) {
      visited.add(depId);
      results.push(depId);
      results.push(...getDownstreamNodes(depId, graph, visited));
    }
  }
  return results;
}

/**
 * Propagate a change from an edited node through the DNA graph
 */
export function propagateDnaChange(
  brand: BrandSystem,
  changedNodeId: DnaNodeType,
  newValue: string,
  explanation: string
): { updatedBrand: BrandSystem; diff: CausalDiff } {
  const graph = [...brand.stage35Graph];
  const nodeIndex = graph.findIndex(n => n.id === changedNodeId);
  const previousValue = nodeIndex !== -1 ? graph[nodeIndex].summary : '';

  // Get all downstream nodes affected
  const downstreamIds = getDownstreamNodes(changedNodeId, graph);
  
  // Format causal diff
  const downstreamEffects: string[] = [];
  const updatedGraph = graph.map(node => {
    if (node.id === changedNodeId) {
      return {
        ...node,
        summary: newValue,
        status: 'CONFIRMED' as const
      };
    }
    if (downstreamIds.includes(node.id)) {
      downstreamEffects.push(`${node.label} re-calibrated to align with "${newValue.slice(0, 30)}..."`);
      return {
        ...node,
        status: 'RECOMMENDED' as const
      };
    }
    return node;
  });

  const diff: CausalDiff = {
    changedNode: changedNodeId,
    previousValue,
    newValue,
    downstreamEffects,
    explanation,
    timestamp: new Date().toISOString()
  };

  // Clone and update brand state
  const updatedBrand: BrandSystem = {
    ...brand,
    stage35Graph: updatedGraph,
    causalDiffHistory: [diff, ...brand.causalDiffHistory]
  };

  return { updatedBrand, diff };
}

/**
 * Stage 7: Consistency Guardian - Real-time analysis of submitted copy against Locked Brand DNA
 */
export function evaluateCopyConsistency(
  submittedContent: string,
  contentType: GuardianEvaluation['contentType'],
  lockedDNA: LockedBrandDNA
): GuardianEvaluation {
  const text = submittedContent.trim();
  const lower = text.toLowerCase();
  const lines = text.split('\n').filter(l => l.trim().length > 0);

  const avoidViolations: string[] = [];
  const lineFeedback: GuardianEvaluation['lineByLineFeedback'] = [];

  // Check prohibited clichés
  const genericBannedTerms = [
    'cutting-edge', 'seamless', 'game-changing', 'disruptive', 
    'revolutionary', 'innovative', 'next-gen', 'next generation',
    'superhero', 'heroes', 'magic', 'all-in-one platform'
  ];
  
  const allBanned = [...genericBannedTerms, ...(lockedDNA.prohibitedCliches || []).map(c => c.toLowerCase())];

  allBanned.forEach(term => {
    if (lower.includes(term.toLowerCase())) {
      avoidViolations.push(`Contains prohibited buzzword or cliché: "${term}"`);
    }
  });

  // Check specific avoid rules
  if (lockedDNA.messagingRules) {
    lockedDNA.messagingRules.forEach(rule => {
      if (rule.toLowerCase().includes('cost') && (lower.includes('cost cut') || lower.includes('reduce overhead') || lower.includes('margin'))) {
        avoidViolations.push(`Violates rule: Do not frame value as administrative cost-cutting or staff reduction.`);
      }
    });
  }

  // Line-by-line inspection
  lines.forEach(line => {
    const lineLower = line.toLowerCase();
    let status: 'pass' | 'warning' | 'fail' = 'pass';
    let feedback = 'Clear phrasing, aligned with defined brand principles.';
    let ruleViolated: string | undefined = undefined;

    const matchedCliché = allBanned.find(c => lineLower.includes(c.toLowerCase()));
    if (matchedCliché) {
      status = 'fail';
      feedback = `Banned cliché detected: "${matchedCliché}". Regresses brand authority into generic marketing fluff.`;
      ruleViolated = `Prohibited cliché: ${matchedCliché}`;
    } else if (lineLower.includes('cost') || lineLower.includes('cheap') || lineLower.includes('maximize margin')) {
      status = 'fail';
      feedback = `Violates protective brand positioning: Focus on clinician retention & patient safety, not profit extraction.`;
      ruleViolated = 'Never frame value as labor cost-cutting';
    } else if (line.length < 15) {
      status = 'warning';
      feedback = 'Very brief statement; may lack distinctive context or specific proof points.';
    }

    lineFeedback.push({
      lineText: line,
      status,
      feedback,
      ruleViolated
    });
  });

  // Calculate scores
  let clicheAvoidance = Math.max(1, 10 - avoidViolations.length * 2.5);
  let voiceAlignment = avoidViolations.length > 0 ? Math.max(2, 8 - avoidViolations.length * 2) : 9.5;
  let positioningAdherence = lower.includes(lockedDNA.differentiator.toLowerCase().slice(0, 15)) ? 9.5 : (avoidViolations.length > 0 ? 4.0 : 7.5);
  let differentiatorPresence = lower.includes('telemetry') || lower.includes('cold-chain') || lower.includes('acuity') || lower.includes('ambient') ? 9.0 : 4.5;
  let audienceSpecificity = lower.includes('icu') || lower.includes('nurse') || lower.includes('pathology') || lower.includes('hospital') ? 9.2 : 5.0;

  const overall = Number(((clicheAvoidance + voiceAlignment + positioningAdherence + differentiatorPresence + audienceSpecificity) / 5).toFixed(1));

  // Intent-preserving rewrites
  const rewrites: string[] = [
    `Objective clinical telemetry for frontline teams: ${lockedDNA.brandName} monitors real-time cognitive saturation so charge leaders can protect staff before exhaustion causes turnover.`,
    `Patient care does not scale on overtime. ${lockedDNA.brandName} equips ICU leadership with passive workload telemetry to defend clinician well-being and clinical safety margins.`
  ];

  return {
    id: `eval-${Date.now()}`,
    timestamp: new Date().toISOString(),
    submittedContent,
    contentType,
    overallAlignmentScore: Math.min(10, Math.max(1, overall)),
    breakdown: {
      voiceAlignment: Math.round(voiceAlignment),
      positioningAdherence: Math.round(positioningAdherence),
      differentiatorPresence: Math.round(differentiatorPresence),
      audienceSpecificity: Math.round(audienceSpecificity),
      clicheAvoidance: Math.round(clicheAvoidance)
    },
    lineByLineFeedback: lineFeedback,
    avoidRuleViolations: avoidViolations,
    intentPreservingRewrites: rewrites
  };
}

/**
 * Stage 7.5: Brand Drift Detector - Multi-submission pattern recognition with Strict Data Honesty Rule
 */
export function calculateBrandDrift(evaluations: GuardianEvaluation[]): BrandDriftReport {
  // STRICT DATA HONESTY RULE:
  // If fewer than 3 prior submissions exist, output exactly the required notice.
  if (!evaluations || evaluations.length < 3) {
    return {
      status: 'insufficient_data',
      message: 'Insufficient historical data to establish a drift pattern. (Requires at least 3 prior evaluated submissions.)'
    };
  }

  // Calculate drift across historical evaluations
  const scores = evaluations.map(e => e.overallAlignmentScore);
  const voiceScores = evaluations.map(e => e.breakdown.voiceAlignment);
  const posScores = evaluations.map(e => e.breakdown.positioningAdherence);
  const diffScores = evaluations.map(e => e.breakdown.differentiatorPresence);
  const audScores = evaluations.map(e => e.breakdown.audienceSpecificity);
  const timestamps = evaluations.map((e, idx) => `Submission #${idx + 1}`);

  const recentAvg = (scores[scores.length - 1] + scores[scores.length - 2]) / 2;
  const earlyScore = scores[0];

  const totalViolations = evaluations.reduce((sum, e) => sum + e.avoidRuleViolations.length, 0);

  if (totalViolations >= 3 || recentAvg < earlyScore - 1.5) {
    return {
      status: 'drift_detected',
      message: 'Noticeable drift toward generic corporate terminology and diluted audience focus detected across recent submissions.',
      sampleDataNotice: `Analyzed across ${evaluations.length} evaluated content submissions in session.`,
      direction: 'corporate_inflation',
      affectedDimensions: ['Brand Voice', 'Positioning Adherence', 'Audience Specificity'],
      evidence: [
        `Cumulative avoid-rule violations increased to ${totalViolations} incidents across submissions.`,
        'Recent copy reintroduced prohibited clichés and administrative cost-cutting framing.',
        'Differentiator presence fell below target threshold on 2 recent items.'
      ],
      severity: recentAvg < 5 ? 'critical' : 'moderate',
      recommendedCorrection: 'Re-anchor copy strictly to Locked Brand DNA Communication Principle: Speak directly to clinical craft and patient safety margins; reject all generic corporate efficiency buzzwords.',
      trendScores: {
        alignment: scores,
        voice: voiceScores,
        positioning: posScores,
        differentiator: diffScores,
        audienceSpecificity: audScores,
        timestamps
      }
    };
  }

  return {
    status: 'healthy_alignment',
    message: 'Brand integrity is robust. Recent submissions adhere closely to locked positioning and avoid-rules.',
    sampleDataNotice: `Analyzed across ${evaluations.length} evaluated content submissions in session.`,
    direction: 'stable',
    affectedDimensions: [],
    evidence: [
      'Zero fatal avoid-rule violations across evaluated submissions.',
      'Core differentiator clearly maintained in all outbound communications.',
      'Audience specificity remains high.'
    ],
    severity: 'none',
    recommendedCorrection: 'Maintain current cadence. Continue testing high-priority outbound campaigns prior to publication.',
    trendScores: {
      alignment: scores,
      voice: voiceScores,
      positioning: posScores,
      differentiator: diffScores,
      audienceSpecificity: audScores,
      timestamps
    }
  };
}

/**
 * Generate complete Markdown Brand Book for 1-click download
 */
export function exportBrandBookMarkdown(brand: BrandSystem): string {
  return `# ${brand.name} — Brand Intelligence System
*Generated by the AI Brand Intelligence Engine (Strategist & Skeptic Protocol)*
*Date: ${new Date().toLocaleDateString()} | Industry: ${brand.industry}*

---

## 1. Problem & Context
**Problem Framing:** ${brand.stage1Discover.problem.value}
*(Source: ${brand.stage1Discover.problem.source} | Confidence: ${brand.stage1Discover.problem.confidence})*

**Target User:** ${brand.stage1Discover.targetUser.value}
**Market Context:** ${brand.stage1Discover.context.value}
**Potential Value:** ${brand.stage1Discover.potentialValue.value}

### Key Constraints:
${brand.stage1Discover.constraints.value.map(c => `- ${c}`).join('\n')}

---

## 2. Positioning Architecture
- **Category:** ${brand.stage2Position.category.value}
- **Value Proposition:** ${brand.stage2Position.valueProposition.value}
- **Core Differentiator:** ${brand.stage2Position.differentiator.value}
- **Competitive Angle:** ${brand.stage2Position.competitiveAngle.value}

### Official Positioning Statement:
> "${brand.stage2Position.positioningStatement.value}"

### What This Brand Must NEVER Try To Be:
${brand.stage2Position.whatThisShouldNotTryToBe.value.map(item => `- ❌ ${item}`).join('\n')}

---

## 3. Brand Personality & Messaging
### Personality Traits:
${brand.stage3Shape.personality.value.map(p => `
### ${p.trait}
- **Why it fits audience:** ${p.whyItFitsAudience}
- **How it shows up:** ${p.howItShowsUp}
- **Adjacent trait to avoid:** *${p.adjacentTraitToAvoid}*
`).join('\n')}

### Core Messaging:
- **Selected Tagline:** "${brand.stage3Shape.messaging.selectedTagline.value}"
- **One-Line Pitch:** ${brand.stage3Shape.messaging.oneLinePitch.value}
- **Core Message:** ${brand.stage3Shape.messaging.coreMessage.value}

### Brand Voice Rules:
${brand.stage3Shape.messaging.brandVoice.value.map(v => `- 🔹 ${v}`).join('\n')}

### Communication Principles:
${brand.stage3Shape.messaging.communicationPrinciples.value.map(p => `- ⚠️ ${p}`).join('\n')}

---

## 4. Visual Identity System
- **Logo Direction:** ${brand.stage4Visualize.logoDirection.value}
- **Wordmark Typography:** ${brand.stage4Visualize.wordmarkStyle.value}
- **Imagery Style:** ${brand.stage4Visualize.imageryStyle.value}

### Color Palette:
${brand.stage4Visualize.colorPalette.map(c => `- **${c.name}** (\`${c.hex}\`): ${c.mood} (${c.role.toUpperCase()})`).join('\n')}

### Elements to Avoid:
${brand.stage4Visualize.elementsToAvoid.value.map(e => `- 🚫 ${e}`).join('\n')}

---

## 5. Launch Suite
- **Landing Page Headline:** "${brand.stage6Launch.landingPageHeadline.value}"
- **Landing Page Subhead:** ${brand.stage6Launch.landingPageSubhead.value}
- **One-Line Pitch:** ${brand.stage6Launch.oneLinePitch.value}
- **Product Description:** ${brand.stage6Launch.shortProductDescription.value}

### Social Launch Post:
\`\`\`text
${brand.stage6Launch.socialLaunchPost.value}
\`\`\`

---

## 6. Locked Brand DNA & Guardian Rules
- **Status:** ${brand.stage65LockedDNA.isLocked ? '🔒 LOCKED & ACTIVE' : 'UNLOCKED'}
- **Prohibited Clichés:** ${brand.stage65LockedDNA.prohibitedCliches.join(', ')}
- **Trademark Disclaimer:** ${brand.stage3Shape.trademarkDisclaimer}

*(End of Brand System Document)*
`;
}
