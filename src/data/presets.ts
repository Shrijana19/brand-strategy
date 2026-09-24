import { BrandSystem } from '../types/brand';

export const PRESET_BRANDS: BrandSystem[] = [
  {
    id: 'kora-health',
    name: 'Kora Health',
    industry: 'Critical Care HealthTech',
    stage1Discover: {
      problem: {
        value: 'ICU nurse managers lack real-time predictive telemetry on staff cognitive fatigue, leading to silent acute burnout, 34% annual turnover, and preventable medical safety errors.',
        source: 'user_provided',
        confidence: 'high',
        rationale: 'Derived directly from user founder interviews with 42 ICU charge nurses across 6 hospital networks.'
      },
      targetUser: {
        value: 'Hospital ICU Nurse Managers and Chief Nursing Officers (CNOs) in high-acuity tertiary care centers.',
        source: 'user_provided',
        confidence: 'high',
        rationale: 'Primary budget holder and frontline schedule orchestrator in high-stress clinical units.'
      },
      context: {
        value: 'Post-pandemic nurse staffing shortages have intensified hospital reliance on expensive agency travel nurses, costing average hospitals $14M annually while deteriorating shift morale.',
        source: 'ai_assumption',
        confidence: 'medium',
        rationale: 'Macroeconomic and clinical labor environment driving urgent executive procurement.'
      },
      constraints: {
        value: [
          'Must not add any manual logging burden or screen time to already exhausted nurses.',
          'Must comply strictly with HIPAA, hospital union labor agreements, and clinical telemetry privacy.',
          'Cannot be perceived as punitive surveillance or "Big Brother" productivity tracking.'
        ],
        source: 'user_provided',
        confidence: 'high',
        rationale: 'Operational and cultural red-lines defined by clinical workflow realities.'
      },
      existingAssumptions: {
        value: [
          'Assumes EHR audit logs and biometric vitals (smart badge) correlate reliably with cognitive saturation.',
          'Assumes charge nurses have schedule autonomy to redistribute patient acuity mid-shift.'
        ],
        source: 'ai_assumption',
        confidence: 'medium',
        rationale: 'Core behavioral and operational hypotheses that must be clinically validated.'
      },
      potentialValue: {
        value: '22% reduction in 12-month ICU nurse turnover and $3.8M annual savings per 500-bed hospital facility in avoided overtime and agency fees.',
        source: 'ai_recommendation',
        confidence: 'medium',
        rationale: 'Calculated from benchmarked turnover replacement costs ($92,000 per ICU nurse).'
      },
      openQuestions: [
        'How does the union contract in target state hospital systems govern wearable or ambient workload sensors?',
        'Does the hospital IT department allow read-only webhooks from Epic/Cerner for real-time acuity scoring?',
        'What is the threshold between helpful workload rebalancing and feelings of micro-management?'
      ],
      exchange: {
        strategistProposal: 'We frame this as "The AI Wellness Engine for Healthcare Heroes," focusing on empathy, mental wellness, and self-care apps for bedside nurses.',
        skepticCritique: 'Fatal cliché alert. Bedside nurses despise being called "heroes" while being handed wellness apps and pizza parties instead of staffing fixes. Furthermore, framing this as a nurse-facing wellness app completely ignores that the buyer is the CNO and ICU manager trying to stop labor bleed.',
        strategistRevision: 'Pivot framing to "Clinical Workload Defense Infrastructure." Position not as a soft wellness perk, but as an objective patient acuity and cognitive capacity rebalancing system that protects bedside teams from structural overload.',
        beforeScore: {
          clicheDensity: 4,
          audienceFit: 5,
          differentiation: 4,
          overall: 4.3,
          revisionCycles: 1
        },
        afterScore: {
          clicheDensity: 8,
          audienceFit: 9,
          differentiation: 9,
          overall: 8.7,
          revisionCycles: 1
        }
      },
      score: {
        clicheDensity: 8,
        audienceFit: 9,
        differentiation: 9,
        overall: 8.7,
        revisionCycles: 1
      }
    },
    stage2Position: {
      category: {
        value: 'Clinical Capacity & Staff Safeguard Telemetry',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Avoids the commoditized "HR Employee Wellness" and "Staff Scheduling" buckets.'
      },
      problem: {
        value: 'Static 12-hour nurse scheduling is blind to real-time clinical chaos and cognitive saturation, burning out the most skilled critical care staff.',
        source: 'user_provided',
        confidence: 'high',
        rationale: 'Synthesized core operational failure point.'
      },
      targetAudience: {
        value: 'ICU Charge Nurses and Hospital CNOs carrying 24/7 patient safety and staff retention mandates.',
        source: 'user_provided',
        confidence: 'high',
        rationale: 'Direct decision makers.'
      },
      valueProposition: {
        value: 'Live telemetry that flags cognitive saturation before catastrophic exhaustion occurs, giving charge nurses data-backed justification to flex staffing dynamically.',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Direct link between telemetry signal and management empowerment.'
      },
      differentiator: {
        value: 'Passive, zero-tap telemetry derived from ambient EHR pacing and medical device alarms — no self-reporting, no surveilling keystrokes.',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Overcomes nurse union objection by prioritizing passive clinical signals rather than punitive tracking.'
      },
      competitiveAngle: {
        value: 'Unlike legacy shift-schedulers (Kronos/UKG) that only count warm bodies on shifts, Kora measures real-time cognitive debt and clinical load intensity.',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Positions directly against incumbent legacy enterprise vendors.'
      },
      positioningStatement: {
        value: 'For critical care nurse leadership battling epidemic burnout, Kora is the ambient capacity telemetry platform that proactively rebalances intense clinical load, unlike static scheduling software that treats human clinicians like interchangeable shift slots.',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Structured positioning blueprint tying audience, category, pain, and unique contrast.'
      },
      whatThisShouldNotTryToBe: {
        value: [
          'Not an employee wellness or mindfulness app (no meditation reminders or breathing exercises).',
          'Not an employee surveillance or keystroke monitoring tool.',
          'Not a punitive productivity scorecard for hospital administrators.'
        ],
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Boundary definitions essential for winning frontline clinical trust.'
      },
      exchange: {
        strategistProposal: 'Position Kora as "The AI Staffing Co-Pilot" that automates scheduling and optimizes hospital labor budgets.',
        skepticCritique: '"AI Co-Pilot" is the single most overused buzzword in 2024-2026 tech. Calling it an "efficiency tool to optimize labor costs" makes nurses suspect it will be used to cut staffing levels and stretch them thinner.',
        strategistRevision: 'Position Kora as "Workload Safeguard Infrastructure." Explicitly frame the value as clinician protection and patient safety integrity rather than administrative headcount cost-cutting.',
        beforeScore: {
          clicheDensity: 3,
          audienceFit: 4,
          differentiation: 5,
          overall: 4.0,
          revisionCycles: 1
        },
        afterScore: {
          clicheDensity: 9,
          audienceFit: 9,
          differentiation: 9,
          overall: 9.0,
          revisionCycles: 1
        }
      },
      score: {
        clicheDensity: 9,
        audienceFit: 9,
        differentiation: 9,
        overall: 9.0,
        revisionCycles: 1
      }
    },
    stage25MarketScan: {
      scanStatus: 'completed',
      observedPatterns: {
        value: [
          'Incumbent scheduling software focuses entirely on shift filling, credential checking, and overtime payroll.',
          'Health wellness startups rely on nurse self-reported surveys (which nurses actively avoid filling out during 12-hour shifts).',
          'Hospital executive dashboards show lagging indicators (exit interviews, 30-day readmissions) rather than leading shift-level signals.'
        ],
        source: 'unverified_external',
        confidence: 'medium',
        rationale: 'Market review of healthcare workforce tools (Kronos, QGenda, Trusted Health, Aya).'
      },
      positioningOverlap: {
        value: [
          'High overlap in generic phrases like "Empowering healthcare workers" and "Smarter workforce management".',
          'Frequent claims of "Predictive AI" without explaining input data provenance or privacy safeguards.'
        ],
        source: 'unverified_external',
        confidence: 'medium',
        rationale: 'Competitor marketing analysis across 12 enterprise hospital tech vendors.'
      },
      namingOverlap: {
        value: [
          'Pervasive use of suffixes like "-ly", "Shift-", "Care-", "Nurse-", and "Nomi".',
          'Generic names: ShiftPulse, CareFlow, NurseSync, StaffLogic.'
        ],
        source: 'unverified_external',
        confidence: 'medium',
        rationale: 'Naming taxonomy scan across registered healthtech brands.'
      },
      messagingOverlap: {
        value: [
          'Stock phrases: "Do more with less", "Seamless interoperability", "Empower frontline heroes".'
        ],
        source: 'unverified_external',
        confidence: 'medium',
        rationale: 'Copy analysis of enterprise hospital tech landing pages.'
      },
      visualOverlap: {
        value: [
          'Overuse of medical cyan, stethoscopes draped on keyboards, smiling stock photos of doctors with clipboards, soft pastel gradients.'
        ],
        source: 'unverified_external',
        confidence: 'medium',
        rationale: 'Visual identity benchmarking across B2B health IT.'
      },
      potentialGaps: {
        value: [
          'No vendor treats clinical cognitive overload as an engineering telemetry problem with real-time pressure relief valves.',
          'Total absence of clinical tools built to honor the autonomy of the bedside Charge Nurse.'
        ],
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Strategic white space identified through competitive contrast.'
      },
      verificationNeeded: {
        value: [
          'Need to confirm whether Epic EHR App Orchard has recently approved rival telemetry apps with real-time writeback capability.',
          'Verify trademark uniqueness of "Kora" in Class 9 and Class 42 software.'
        ],
        source: 'unverified_external',
        confidence: 'high',
        rationale: 'Legal and technical certification requirements.'
      },
      skepticChallenge: 'Incumbents like UKG/Kronos have massive distribution. If Kora claims "predictive telemetry", what stops UKG from adding a simple fatigue calculation to their existing mobile app next quarter?'
    },
    stage3Shape: {
      personality: {
        value: [
          {
            trait: 'Clinical Rigor',
            whyItFitsAudience: 'ICU nurses and chief medical officers dismiss tech fluff; they respect peer-reviewed clinical methodology and telemetry precision.',
            howItShowsUp: 'Crisp, measured statements grounded in telemetry data, telemetry thresholds, and physiological reality.',
            adjacentTraitToAvoid: 'Sterile or bureaucratic (clinical without being cold or robotic).'
          },
          {
            trait: 'Fiercely Protective',
            whyItFitsAudience: 'Frontline staff feel abandoned by administration; Kora must feel like an unyielding shield guarding their bandwidth.',
            howItShowsUp: 'Direct defense of human limits: "Human attention does not scale indefinitely; systems must bend, not people."',
            adjacentTraitToAvoid: 'Aggressive or activist (defensive without being anti-hospital leadership).'
          },
          {
            trait: 'Uncompromisingly Honest',
            whyItFitsAudience: 'Critical care teams operate in life-or-death candor; sugarcoating or PR spin erodes trust immediately.',
            howItShowsUp: 'Calling structural staffing deficits what they are instead of masking them behind "resilience initiatives."',
            adjacentTraitToAvoid: 'Cynical or defeatist (direct without being demoralizing).'
          }
        ],
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Calibrated to win clinical credibility while resonating with hospital executive buyers.'
      },
      namingTerritories: [
        {
          territoryName: 'Shield & Safeguard (Protective Core)',
          concept: 'Evokes protective armor, vigilance, and structural guardianship for human clinicians.',
          exampleNames: ['Kora (from Cor / Heart + Core)', 'Valen Health', 'Aegis ICU', 'Tenet Shift'],
          reasoning: 'Short, commanding, human-centered yet rooted in protective engineering.',
          weaknesses: 'Can sound defensive or security-oriented if not paired with clinical warmth.',
          relationshipToPositioning: 'Directly mirrors the "Clinical Workload Defense" positioning.'
        },
        {
          territoryName: 'Telemetry & Pacing (Physiological Physics)',
          concept: 'Draws upon flow mechanics, clinical pulse, and cognitive load dynamics.',
          exampleNames: ['Strobe Clinical', 'Pacing Health', 'Cadence Ward', 'FluxICU'],
          reasoning: 'Signals objective data and scientific measurability to hospital C-suites.',
          weaknesses: 'Risk of sounding too machine-centric or detached from human care.',
          relationshipToPositioning: 'Emphasizes the passive telemetry and EHR signal processing.'
        },
        {
          territoryName: 'Autonomy & Command (Charge Nurse Empowerment)',
          concept: 'Highlights the authority and decisive coordination of clinical leaders on the unit.',
          exampleNames: ['Vanguard Care', 'Prism ICU', 'Orchestra Health', 'Apex Unit'],
          reasoning: 'Honors the charge nurse as the commander orchestrating patient safety.',
          weaknesses: 'Can feel overly hierarchical or military in medical culture.',
          relationshipToPositioning: 'Empowers the frontline decision maker.'
        }
      ],
      selectedName: {
        value: 'Kora Health',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Latin root "cor" (heart) merged with "kora" (guardian); sounds humane, memorable, and clinically credible.'
      },
      messaging: {
        taglines: {
          value: [
            'Workload telemetry for the teams who keep critical care standing.',
            'When acuity spikes, protect the clinicians.',
            'Objective telemetry for human clinical limits.',
            'Because human attention does not scale on overtime.'
          ],
          source: 'ai_recommendation',
          confidence: 'high',
          rationale: 'Tightly aligned to the workload defense positioning statement.'
        },
        selectedTagline: {
          value: 'Workload telemetry for the teams who keep critical care standing.',
          source: 'ai_recommendation',
          confidence: 'high',
          rationale: 'Combines technical credibility (telemetry) with deep respect for critical care teams.'
        },
        oneLinePitch: {
          value: 'Kora is ambient workload telemetry that monitors real-time cognitive saturation in critical care units, enabling nurse managers to rebalance acuity before burnout breaks the team.',
          source: 'ai_recommendation',
          confidence: 'high',
          rationale: 'Clear, jargon-free statement of who, what, and concrete outcome.'
        },
        coreMessage: {
          value: 'You cannot solve clinical burnout with meditation apps while assigning a nurse three unstable ECMO patients on hour eleven of a 12-hour shift. Kora measures real cognitive saturation so hospitals can defend their frontline staff.',
          source: 'ai_recommendation',
          confidence: 'high',
          rationale: 'Directly confronts the shallow status quo and articulates the moral urgency.'
        },
        supportingMessages: {
          value: [
            'Zero manual logging: Ambient signals from alarm density and EHR pacing, respecting clinician time.',
            'Defensible data for charge nurses: Gives frontline leaders objective telemetry to justify immediate float pool staffing.',
            'Retention through protection: Hospitals save $3.8M annually by keeping their most experienced critical care nurses.'
          ],
          source: 'ai_recommendation',
          confidence: 'high',
          rationale: 'Backs up the core message with proof points across workflow, leadership, and ROI.'
        },
        brandVoice: {
          value: [
            'Clinically grounded: Speak in terms of acuity, alarm fatigue, cognitive saturation, and patient safety margins.',
            'Direct and unsparing: Name systemic flaws frankly; never use empty corporate buzzwords or patronizing platitudes.',
            'Respectful of craft: Address nurses as expert diagnostic decision makers, never as cogs or "shift resources."'
          ],
          source: 'ai_recommendation',
          confidence: 'high',
          rationale: 'Guidelines ensuring all written content maintains tone integrity.'
        },
        communicationPrinciples: {
          value: [
            'Never use "heroes" or "superheroes" — it excuses systemic failures.',
            'Never promise "AI does the work for you" — Kora empowers clinical judgment, it does not replace it.',
            'Always link nurse cognitive preservation directly to patient survival rates.'
          ],
          source: 'ai_recommendation',
          confidence: 'high',
          rationale: 'Strict boundaries for marketing, sales pitches, and product copy.'
        }
      },
      trademarkDisclaimer: 'No name here has been checked for trademark, domain, or social-handle availability unless a live verification tool has been used.',
      exchange: {
        strategistProposal: 'Tagline: "Reimagining Healthcare with Compassionate AI" | Personality: Innovative, Caring, Disruptive, Smart.',
        skepticCritique: 'Textbook generic startup fluff. "Reimagining Healthcare" means nothing. "Caring and Disruptive" are direct contradictions. Every nurse on Earth will roll their eyes at "Compassionate AI." Where is the actual mechanism?',
        strategistRevision: 'Tagline: "Workload telemetry for the teams who keep critical care standing." | Personality: Clinical Rigor, Fiercely Protective, Uncompromisingly Honest. Every claim anchored in telemetry and human capacity.',
        beforeScore: {
          clicheDensity: 2,
          audienceFit: 4,
          differentiation: 3,
          overall: 3.0,
          revisionCycles: 1
        },
        afterScore: {
          clicheDensity: 9,
          audienceFit: 10,
          differentiation: 9,
          overall: 9.3,
          revisionCycles: 1
        }
      },
      score: {
        clicheDensity: 9,
        audienceFit: 10,
        differentiation: 9,
        overall: 9.3,
        revisionCycles: 1
      }
    },
    stage35Graph: [
      {
        id: 'target_audience',
        label: 'Target Audience',
        summary: 'ICU Charge Nurses & CNOs in high-acuity tertiary care centers',
        upstreamDependencies: [],
        downstreamDependencies: ['problem', 'value_proposition', 'positioning', 'personality'],
        contradictionRisks: ['Messaging sounding like hospital admin surveillance tools'],
        regeneratesIfChanged: ['problem', 'value_proposition', 'personality', 'brand_voice'],
        status: 'CONFIRMED'
      },
      {
        id: 'problem',
        label: 'Core Problem',
        summary: 'Blind 12h scheduling creates acute nurse cognitive saturation and 34% turnover',
        upstreamDependencies: ['target_audience'],
        downstreamDependencies: ['value_proposition', 'differentiator', 'positioning'],
        contradictionRisks: ['Framing problem as individual psychological weakness rather than structural clinical load'],
        regeneratesIfChanged: ['value_proposition', 'differentiator', 'positioning_statement'],
        status: 'CONFIRMED'
      },
      {
        id: 'context',
        label: 'Market Context',
        summary: 'Post-pandemic staffing crisis, $14M annual agency labor costs, union contract sensitivity',
        upstreamDependencies: ['target_audience'],
        downstreamDependencies: ['value_proposition', 'differentiator'],
        contradictionRisks: ['Ignoring nurse union collective bargaining restrictions'],
        regeneratesIfChanged: ['constraints', 'launch_messaging'],
        status: 'CONFIRMED'
      },
      {
        id: 'value_proposition',
        label: 'Value Proposition',
        summary: 'Live telemetry flagging cognitive saturation before burnout, saving $3.8M/yr',
        upstreamDependencies: ['problem', 'target_audience', 'context'],
        downstreamDependencies: ['positioning', 'tagline', 'launch_messaging'],
        contradictionRisks: ['Promising staffing cost cuts while claiming to support nurses'],
        regeneratesIfChanged: ['tagline', 'oneLinePitch', 'launch_messaging'],
        status: 'CONFIRMED'
      },
      {
        id: 'differentiator',
        label: 'Differentiator',
        summary: 'Passive, zero-tap ambient EHR and alarm telemetry — no nurse self-reporting',
        upstreamDependencies: ['problem', 'context'],
        downstreamDependencies: ['positioning', 'tagline', 'visual_system'],
        contradictionRisks: ['Products requiring nurses to enter data manually'],
        regeneratesIfChanged: ['positioning', 'messaging', 'visual_system'],
        status: 'CONFIRMED'
      },
      {
        id: 'positioning',
        label: 'Positioning Statement',
        summary: 'Clinical Workload Defense Infrastructure for high-acuity hospital leadership',
        upstreamDependencies: ['target_audience', 'problem', 'value_proposition', 'differentiator'],
        downstreamDependencies: ['personality', 'name', 'tagline', 'brand_voice'],
        contradictionRisks: ['Slipping into the generic HR wellness category'],
        regeneratesIfChanged: ['personality', 'name', 'tagline', 'brand_voice'],
        status: 'CONFIRMED'
      },
      {
        id: 'personality',
        label: 'Brand Personality',
        summary: 'Clinical Rigor, Fiercely Protective, Uncompromisingly Honest',
        upstreamDependencies: ['target_audience', 'positioning'],
        downstreamDependencies: ['brand_voice', 'visual_system', 'tagline'],
        contradictionRisks: ['Sounding playful, trendy, or patronizingly soft'],
        regeneratesIfChanged: ['brand_voice', 'visual_system', 'communication_principles'],
        status: 'CONFIRMED'
      },
      {
        id: 'name',
        label: 'Brand Name',
        summary: 'Kora Health (from Cor / Heart + Core guardian)',
        upstreamDependencies: ['positioning', 'personality'],
        downstreamDependencies: ['tagline', 'visual_system', 'launch_messaging'],
        contradictionRisks: ['Sounding like a generic consumer wellness tracker'],
        regeneratesIfChanged: ['visual_system', 'tagline', 'launch_messaging'],
        status: 'CONFIRMED'
      },
      {
        id: 'tagline',
        label: 'Tagline',
        summary: 'Workload telemetry for the teams who keep critical care standing.',
        upstreamDependencies: ['positioning', 'personality', 'name'],
        downstreamDependencies: ['launch_messaging'],
        contradictionRisks: ['Overly complex clinical jargon that obscures the human impact'],
        regeneratesIfChanged: ['launch_messaging', 'landingPageHeadline'],
        status: 'CONFIRMED'
      },
      {
        id: 'brand_voice',
        label: 'Brand Voice',
        summary: 'Clinically grounded, direct, respectful of critical care craft',
        upstreamDependencies: ['personality', 'positioning'],
        downstreamDependencies: ['launch_messaging'],
        contradictionRisks: ['Marketing hyperbole and PR buzzwords'],
        regeneratesIfChanged: ['launch_messaging', 'socialLaunchPost'],
        status: 'CONFIRMED'
      },
      {
        id: 'visual_system',
        label: 'Visual System',
        summary: 'Deep obsidian cockpit, precision arterial amber, clinical pulse geometry, technical typography',
        upstreamDependencies: ['personality', 'differentiator', 'name'],
        downstreamDependencies: ['launch_messaging'],
        contradictionRisks: ['Defaulting to baby-blue scrubs or smiling doctor stock photography'],
        regeneratesIfChanged: ['launch_messaging', 'logoDirection'],
        status: 'CONFIRMED'
      },
      {
        id: 'launch_messaging',
        label: 'Launch Messaging',
        summary: 'High-impact landing page copy and executive CNO case briefs',
        upstreamDependencies: ['value_proposition', 'tagline', 'brand_voice', 'visual_system'],
        downstreamDependencies: [],
        contradictionRisks: ['Focusing on software features instead of clinician retention and patient safety'],
        regeneratesIfChanged: [],
        status: 'CONFIRMED'
      }
    ],
    causalDiffHistory: [
      {
        changedNode: 'positioning',
        previousValue: 'AI Staffing Co-Pilot and Labor Cost Optimizer',
        newValue: 'Clinical Workload Defense Infrastructure',
        downstreamEffects: [
          'Tagline regenerated from "Smarter hospital schedules" to "Workload telemetry for the teams who keep critical care standing."',
          'Brand voice stripped of corporate efficiency jargon; retuned to clinical protection and craft respect.',
          'Visual identity shifted from generic corporate blue to high-contrast dark ICU telemetry palette.'
        ],
        explanation: 'Skeptic review flagged that "labor cost optimization" triggered deep union resistance and nurse skepticism during pilot interviews.',
        timestamp: '2026-09-24T10:14:00Z'
      }
    ],
    stage4Visualize: {
      logoDirection: {
        value: 'A minimalist geometric shield formed by two interlocking clinical pulse waves, representing the intersection of human vital limits and technical safeguard telemetry.',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Avoids medical cross and stethoscope clichés while visually conveying protection and telemetry.'
      },
      wordmarkStyle: {
        value: 'Set in custom weighted Plus Jakarta Sans with refined optical kerning, paired with a precision mono subscript.',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Balances modern authority with scientific precision.'
      },
      svgLogoCode: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
  <rect width="100" height="100" rx="24" fill="#0A0E17"/>
  <path d="M50 18L78 30V50C78 68 66 80 50 86C34 80 22 68 22 50V30L50 18Z" stroke="#38BDF8" stroke-width="3" stroke-linejoin="round" fill="none"/>
  <path d="M32 52H42L47 38L53 64L58 48L63 52H68" stroke="#F43F5E" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="50" cy="50" r="1.5" fill="#F8FAFC"/>
</svg>`,
      typography: [
        {
          role: 'heading',
          fontFamily: 'Plus Jakarta Sans',
          weight: '700 Bold',
          sampleText: 'Clinical Workload Defense',
          usageNotes: 'Used for executive headlines, data hero numbers, and primary section titles.'
        },
        {
          role: 'body',
          fontFamily: 'Inter',
          weight: '400 Regular / 500 Medium',
          sampleText: 'Real-time cognitive saturation metrics derived passively from clinical pacing.',
          usageNotes: 'Optimized for high legibility in dense data tables and telemetry readouts.'
        },
        {
          role: 'accent',
          fontFamily: 'JetBrains Mono',
          weight: '600 SemiBold',
          sampleText: 'ACUITY_INDEX // 94.2% [SATURATED]',
          usageNotes: 'Telemetry values, status chips, clinical thresholds, and provenance indicators.'
        }
      ],
      colorPalette: [
        {
          name: 'Obsidian Void',
          hex: '#0A0E17',
          role: 'void',
          contrastRatio: '18.4:1 against text',
          mood: 'Focused, calm, mimics ICU dark-mode monitors to reduce eye strain in 12h shifts.'
        },
        {
          name: 'Telemetry Cyan',
          hex: '#0284C7',
          role: 'primary',
          contrastRatio: '4.8:1 against dark void',
          mood: 'Objective diagnostic clarity, clinical data stream, stable state.'
        },
        {
          name: 'Arterial Rose',
          hex: '#E11D48',
          role: 'accent',
          contrastRatio: '5.2:1 against dark void',
          mood: 'Urgent physiological limit, saturation warning, protective boundary alert.'
        },
        {
          name: 'Surface Slate',
          hex: '#1E293B',
          role: 'surface',
          contrastRatio: '9.2:1 against light text',
          mood: 'Card containers and telemetry modules.'
        },
        {
          name: 'Clinical White',
          hex: '#F8FAFC',
          role: 'contrast',
          contrastRatio: '19.1:1 on void',
          mood: 'High-contrast typography for emergency readability.'
        }
      ],
      shapesAndForms: {
        value: [
          'Crisp rectangular telemetry cards with subtle 8px border radii',
          'Linear data grids and high-frequency wave graphics',
          'Monospaced status indicators and discrete stepped progress bars'
        ],
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Signals engineering grade reliability rather than consumer app whimsy.'
      },
      imageryStyle: {
        value: 'Documentary-style, unposed low-light photography of real clinical charge nurses conferring at nursing stations; zero stock smiles or artificial stethoscopes.',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Honors the gritty truth of critical care environments.'
      },
      compositionLayout: {
        value: 'Data-dense, cockpit-inspired widescreen layouts with high contrast ratios and clear hierarchical visual hierarchy.',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Mimics professional medical instrumentation.'
      },
      symbolsAndMetaphors: {
        value: [
          'The Vital Buffer (protective envelope around human capacity)',
          'The Telemetry Wave (rhythm of the unit vs individual saturation)',
          'The Shield (institutional defense of clinician bandwidth)'
        ],
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Visual storytelling anchors for marketing and UI.'
      },
      elementsToAvoid: {
        value: [
          'Generic AI purple glow or mesh gradients (explicitly rejected by Skeptic).',
          'Stethoscope draped over a laptop keyboard stock photos.',
          'Soft pastel "wellness app" color schemes that make nurses cringe.',
          'Robotic hands touching human hands.'
        ],
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Prohibited visual tropes that destroy clinical credibility.'
      },
      exchange: {
        strategistProposal: 'A bright turquoise and purple gradient palette with a friendly smiling nurse mascot and smooth pill-shaped buttons.',
        skepticCritique: 'Absolute disaster. A smiling mascot in an ICU software tool will be treated as an insult by nurses handling pediatric cardiac arrests. The purple AI glow looks like a junior crypto app.',
        strategistRevision: 'Pivot to an ICU telemetry cockpit aesthetic: deep obsidian background (#0A0E17), telemetry cyan (#0284C7), and arterial rose alert accents (#E11D48) with documentary photography and JetBrains Mono data tokens.',
        beforeScore: {
          clicheDensity: 2,
          audienceFit: 3,
          differentiation: 4,
          overall: 3.0,
          revisionCycles: 1
        },
        afterScore: {
          clicheDensity: 10,
          audienceFit: 10,
          differentiation: 9,
          overall: 9.7,
          revisionCycles: 1
        }
      },
      score: {
        clicheDensity: 10,
        audienceFit: 10,
        differentiation: 9,
        overall: 9.7,
        revisionCycles: 1
      }
    },
    stage5Challenge: {
      findings: [
        {
          problemArea: 'Landing Page Subhead',
          currentElement: 'Leveraging next-generation machine learning to optimize nurse workflow efficiency.',
          weaknessRationale: 'Contains 3 classic buzzwords ("leveraging", "next-generation", "optimize workflow") that trigger instant B2B buyer fatigue and nurse suspicion of speed-ups.',
          scoreDimensionImpacted: 'clicheDensity',
          proposedAlternative: 'Passive EHR telemetry that catches clinical overload before exhaustion becomes a turnover statistic.',
          whyStronger: 'Describes the concrete input (passive EHR telemetry) and the immediate human stake (turnover statistic) without jargon.',
          revisedOutcome: 'Updated in Stage 6 Launch Kit subhead.',
          downstreamEffects: ['Subhead updated in launch messaging', 'Exported pitch deck slide 1 updated']
        },
        {
          problemArea: 'Pricing & ROI Framing',
          currentElement: 'Cut nurse labor costs by 15% through smarter staffing algorithms.',
          weaknessRationale: 'Directly violates the core positioning principle. If nurse union reps see marketing touting "labor cost cuts", the software will be blacklisted across major hospital systems.',
          scoreDimensionImpacted: 'audienceFit',
          proposedAlternative: 'Save $3.8M annually by keeping your experienced bedside nurses and cutting emergency travel agency spend.',
          whyStronger: 'Positions financial savings as retention and defense against predatory agency markups, aligning management and nurse interests.',
          revisedOutcome: 'Enforced in Locked Brand DNA Messaging Rules.',
          downstreamEffects: ['ROI slide copy updated', 'Sales deck battlecard updated']
        }
      ],
      exchange: {
        strategistProposal: 'We have aligned all stages; no further cross-stage challenge needed.',
        skepticCritique: 'Nonsense. The early landing page draft still had "optimize nurse efficiency" in two places, which directly contradicts our "not an administrative speed-up tool" rule in Stage 2.',
        strategistRevision: 'Replaced all occurrences of "efficiency" and "labor optimization" with "capacity preservation" and "safeguard telemetry." Verified full consistency across the DNA Graph.',
        beforeScore: {
          clicheDensity: 7,
          audienceFit: 7,
          differentiation: 8,
          overall: 7.3,
          revisionCycles: 1
        },
        afterScore: {
          clicheDensity: 10,
          audienceFit: 10,
          differentiation: 10,
          overall: 10.0,
          revisionCycles: 1
        }
      },
      score: {
        clicheDensity: 10,
        audienceFit: 10,
        differentiation: 10,
        overall: 10.0,
        revisionCycles: 1
      }
    },
    consistencyCheck: {
      conflictsDetected: [
        {
          nodeA: 'Personality (Fiercely Protective)',
          nodeB: 'Early Sales Deck Draft ("Automated Shift Cuts")',
          conflictDescription: 'Promoting shift cuts undermines the protective persona and triggers nurse hostility.',
          correctionProposed: 'Reframe all staffing adjustments as safety rebalancing and overtime protection.'
        }
      ],
      passedSanityCheck: true
    },
    stage6Launch: {
      landingPageHeadline: {
        value: 'Human attention does not scale on overtime.',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Profoundly resonant hook that immediately separates Kora from generic HR software.'
      },
      landingPageSubhead: {
        value: 'Kora gives ICU charge nurses ambient workload telemetry to catch acute cognitive saturation before it breaks the shift and burns out the team.',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Concrete, clear, and ties directly to the charge nurse persona.'
      },
      oneLinePitch: {
        value: 'Ambient clinical capacity telemetry that stops ICU nurse burnout by measuring cognitive saturation instead of warm bodies on shifts.',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Crisp elevator pitch for healthcare investors and CNOs.'
      },
      shortProductDescription: {
        value: 'Kora Health is the first clinical workload defense platform built for critical care units. By passively synthesizing ambient EHR pacing, alarm density, and patient acuity telemetry, Kora equips charge nurses with real-time saturation indicators to rebalance assignments dynamically — protecting clinician well-being and reducing hospital nurse turnover by 22%.',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Full product overview suitable for executive summaries and press kits.'
      },
      socialLaunchPost: {
        value: 'You cannot fix ICU nurse burnout with wellness apps while assigning a clinician three unstable ECMO patients on hour eleven of a twelve-hour shift.\n\nToday we are launching Kora Health.\n\nKora is ambient workload telemetry for critical care. Zero manual logging. No employee surveillance. Just objective, real-time data on cognitive saturation so nurse leaders have the evidence they need to protect their teams before exhaustion causes a crisis.\n\nRead our clinical manifesto: korahealth.io/manifesto',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'High-contrast social hook designed for LinkedIn healthcare leadership discussions.'
      },
      launchEmailSubject: {
        value: 'Why our ICU nurses are leaving (and why wellness apps aren’t working)',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'High-open-rate subject line targeted at Chief Nursing Officers.'
      },
      launchEmailBody: {
        value: 'Dear [Name],\n\nEvery Chief Nursing Officer we speak with knows the painful arithmetic: 34% annual ICU nurse turnover and $14M in emergency travel nurse agency fees.\n\nYet hospitals continue to treat scheduling as a static puzzle of counting warm bodies on shifts — completely blind to whether those clinicians are drowning under catastrophic cognitive load.\n\nKora Health changes that. We provide passive, zero-tap workload telemetry that monitors real-time cognitive saturation, giving your charge nurses objective data to rebalance patient acuity before burnout breaks the team.\n\nCan we show you how 3 regional hospitals cut turnover by 22% in their first 90 days?\n\nWarm regards,\nThe Kora Health Team',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'High-converting B2B outreach email respecting hospital executives time.'
      },
      finalBrandSummary: {
        value: 'Kora Health is a Category-Defining Clinical Telemetry brand positioned at the intersection of critical care patient safety and clinician retention. By rejecting wellness platitudes in favor of hard telemetry and clinical respect, Kora earns the trust of bedside nurses while delivering quantifiable multi-million dollar ROI to hospital leadership.',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Executive summary of the completed brand system.'
      },
      score: {
        clicheDensity: 10,
        audienceFit: 10,
        differentiation: 10,
        overall: 10.0,
        revisionCycles: 1
      }
    },
    stage65LockedDNA: {
      isLocked: true,
      lockedAt: '2026-09-24T12:00:00Z',
      brandName: 'Kora Health',
      confirmedAudience: 'ICU Charge Nurses & Hospital CNOs in high-acuity tertiary care centers',
      problem: 'Static scheduling is blind to real-time clinical chaos and cognitive saturation, causing acute nurse burnout and $14M in turnover costs.',
      positioning: 'Clinical Workload Defense Infrastructure for critical care leadership.',
      differentiator: 'Passive, zero-tap ambient EHR and alarm telemetry — no nurse self-reporting, no keystroke surveillance.',
      personality: [
        {
          trait: 'Clinical Rigor',
          whyItFitsAudience: 'ICU clinicians demand peer-reviewed credibility.',
          howItShowsUp: 'Measured, data-grounded statements.',
          adjacentTraitToAvoid: 'Sterile or cold'
        },
        {
          trait: 'Fiercely Protective',
          whyItFitsAudience: 'Nurses need a structural shield against exploitation.',
          howItShowsUp: 'Defending human biological and cognitive limits.',
          adjacentTraitToAvoid: 'Hostile or anti-leadership'
        },
        {
          trait: 'Uncompromisingly Honest',
          whyItFitsAudience: 'Life-or-death candor builds lasting trust.',
          howItShowsUp: 'Calling out systemic failures directly.',
          adjacentTraitToAvoid: 'Defeatist'
        }
      ],
      tagline: 'Workload telemetry for the teams who keep critical care standing.',
      brandVoice: [
        'Clinically grounded: Acuity, cognitive saturation, safety margins',
        'Direct and unsparing: Name structural flaws frankly',
        'Respectful of craft: Nurses are expert decision makers'
      ],
      communicationPrinciples: [
        'Never call nurses "heroes" — it excuses systemic failure.',
        'Never frame software as cutting labor costs or replacing staff.',
        'Always anchor claims in patient safety and clinician retention.'
      ],
      visualRules: [
        'Dominant Obsidian dark cockpit backgrounds (#0A0E17)',
        'Telemetry Cyan (#0284C7) and Arterial Rose (#E11D48) accents',
        'JetBrains Mono for metrics and status chips',
        'Documentary unposed photography only'
      ],
      visualAvoidRules: [
        'No generic AI glowing purple blobs or mesh gradients',
        'No smiling stock photo doctors with clipboards',
        'No pastel mindfulness illustration styles'
      ],
      messagingRules: [
        'Prohibit words: "seamless", "disruptive", "empower heroes", "game-changing"',
        'Every claim must state provenance (measured EHR pacing vs assumed fatigue)'
      ],
      prohibitedCliches: [
        'Healthcare heroes',
        'Revolutionizing healthcare',
        'Seamless AI workflow',
        'Do more with less'
      ],
      marketDistinctions: [
        'Kronos/UKG = shift filling; Kora = cognitive load defense',
        'Wellness apps = self-reporting homework; Kora = passive ambient telemetry'
      ],
      nodes: {
        target_audience: { status: 'CONFIRMED', summary: 'ICU Charge Nurses & Hospital CNOs' },
        problem: { status: 'CONFIRMED', summary: 'Blind scheduling causes cognitive saturation and 34% turnover' },
        context: { status: 'CONFIRMED', summary: 'Post-pandemic staffing crisis and $14M agency labor burn' },
        value_proposition: { status: 'CONFIRMED', summary: 'Live telemetry flagging cognitive saturation, saving $3.8M/yr' },
        differentiator: { status: 'CONFIRMED', summary: 'Passive zero-tap ambient telemetry' },
        positioning: { status: 'CONFIRMED', summary: 'Clinical Workload Defense Infrastructure' },
        personality: { status: 'CONFIRMED', summary: 'Clinical Rigor, Fiercely Protective, Honest' },
        name: { status: 'CONFIRMED', summary: 'Kora Health' },
        tagline: { status: 'CONFIRMED', summary: 'Workload telemetry for the teams who keep critical care standing.' },
        brand_voice: { status: 'CONFIRMED', summary: 'Clinically grounded, direct, respectful' },
        visual_system: { status: 'CONFIRMED', summary: 'Obsidian void, telemetry cyan, arterial rose, mono chips' },
        launch_messaging: { status: 'CONFIRMED', summary: 'Human attention does not scale on overtime' }
      },
      unresolvedAssumptions: [
        'EHR writeback API latency under 500ms in legacy hospital IT environments'
      ]
    },
    evaluationsHistory: [
      {
        id: 'eval-1',
        timestamp: '2026-09-24T13:10:00Z',
        submittedContent: 'Empowering healthcare heroes with cutting-edge AI to seamlessly optimize shift management and reduce hospital staffing overhead!',
        contentType: 'social_post',
        overallAlignmentScore: 2.8,
        breakdown: {
          voiceAlignment: 2,
          positioningAdherence: 3,
          differentiatorPresence: 2,
          audienceSpecificity: 3,
          clicheAvoidance: 1
        },
        lineByLineFeedback: [
          {
            lineText: 'Empowering healthcare heroes',
            status: 'fail',
            feedback: 'Prohibited cliché detected: "healthcare heroes". Directly violates Communication Principle #1.',
            ruleViolated: 'Never use "heroes" — it excuses systemic failure'
          },
          {
            lineText: 'cutting-edge AI to seamlessly optimize shift management',
            status: 'fail',
            feedback: 'Contains two banned buzzwords ("cutting-edge", "seamlessly") and regresses positioning into generic shift management.',
            ruleViolated: 'Prohibited clichés: "cutting-edge", "seamless"'
          },
          {
            lineText: 'reduce hospital staffing overhead',
            status: 'fail',
            feedback: 'Violates Messaging Rule: never frame product as cutting hospital staff or overhead. Triggers nurse union resistance.',
            ruleViolated: 'Never frame software as cutting labor costs'
          }
        ],
        avoidRuleViolations: [
          'Used prohibited term: "healthcare heroes"',
          'Used prohibited term: "cutting-edge"',
          'Used prohibited term: "seamlessly"',
          'Framed value proposition as cutting staffing overhead'
        ],
        intentPreservingRewrites: [
          'Objective workload telemetry for critical care teams: Kora tracks real-time cognitive saturation so charge nurses can protect clinicians before exhaustion threatens patient safety.',
          'Staffing critical care is not about cutting overhead — it is about protecting human capacity. Kora monitors live ICU acuity to defend nurse well-being and stop costly turnover.'
        ]
      },
      {
        id: 'eval-2',
        timestamp: '2026-09-24T14:20:00Z',
        submittedContent: 'In high-acuity ICUs, cognitive debt compounds with every emergency alarm. Kora provides charge nurses with ambient telemetry to rebalance assignments before clinicians break.',
        contentType: 'ad_copy',
        overallAlignmentScore: 9.4,
        breakdown: {
          voiceAlignment: 10,
          positioningAdherence: 9,
          differentiatorPresence: 9,
          audienceSpecificity: 10,
          clicheAvoidance: 10
        },
        lineByLineFeedback: [
          {
            lineText: 'In high-acuity ICUs, cognitive debt compounds with every emergency alarm.',
            status: 'pass',
            feedback: 'Excellent clinical specificity. Grounded in physiological reality of critical care.'
          },
          {
            lineText: 'Kora provides charge nurses with ambient telemetry to rebalance assignments before clinicians break.',
            status: 'pass',
            feedback: 'Directly hits target audience (charge nurses), core differentiator (ambient telemetry), and protective outcome.'
          }
        ],
        avoidRuleViolations: [],
        intentPreservingRewrites: [
          'In high-acuity ICUs, cognitive debt compounds with every alarm. Kora gives charge nurses the telemetry needed to rebalance patient acuity before exhaustion breaks the team.'
        ]
      },
      {
        id: 'eval-3',
        timestamp: '2026-09-24T15:05:00Z',
        submittedContent: 'Our smart scheduling algorithm automatically reorganizes hospital nurse shifts to maximize operational hospital margins.',
        contentType: 'pitch_line',
        overallAlignmentScore: 3.2,
        breakdown: {
          voiceAlignment: 3,
          positioningAdherence: 3,
          differentiatorPresence: 2,
          audienceSpecificity: 3,
          clicheAvoidance: 5
        },
        lineByLineFeedback: [
          {
            lineText: 'Our smart scheduling algorithm automatically reorganizes hospital nurse shifts',
            status: 'fail',
            feedback: 'Regresses Kora into generic automated scheduling. Violates the core value of nurse autonomy.',
            ruleViolated: 'Kora empowers clinical charge nurse judgment, it does not replace it.'
          },
          {
            lineText: 'maximize operational hospital margins',
            status: 'fail',
            feedback: 'Toxic framing for frontline staff. Violates rule against cost-cutting positioning.',
            ruleViolated: 'Never frame software as cutting labor costs'
          }
        ],
        avoidRuleViolations: [
          'Framed tool as autonomous scheduler replacing charge nurse judgment',
          'Prioritized hospital profit margins over clinician capacity'
        ],
        intentPreservingRewrites: [
          'Passive telemetry that gives charge nurses the data they need to defend nurse capacity and prevent costly clinical burnout.'
        ]
      }
    ],
    driftReport: {
      status: 'drift_detected',
      message: 'Noticeable drift toward administrative cost-cutting language and generic scheduling buzzwords observed across 2 of 3 evaluated submissions.',
      sampleDataNotice: 'Analyzed from 3 real evaluated submissions in current audit log.',
      direction: 'corporate_inflation',
      affectedDimensions: ['Positioning Adherence', 'Brand Voice', 'Audience Specificity'],
      evidence: [
        'Submission #1 and #3 introduced prohibited corporate cost-cutting phrasing ("reduce hospital staffing overhead", "maximize operational hospital margins").',
        'Submission #1 reintroduced prohibited cliché "healthcare heroes" and "cutting-edge AI".',
        'Submission #3 abandoned the core differentiator ("ambient cognitive telemetry") in favor of generic "smart scheduling algorithm".'
      ],
      severity: 'moderate',
      recommendedCorrection: 'Strictly enforce Communication Principle #2: All outbound messaging must frame financial returns through nurse retention ($3.8M saved by keeping staff), never through labor budget cuts or autonomous scheduling.',
      trendScores: {
        alignment: [2.8, 9.4, 3.2],
        voice: [2.0, 10.0, 3.0],
        positioning: [3.0, 9.0, 3.0],
        differentiator: [2.0, 9.0, 2.0],
        audienceSpecificity: [3.0, 10.0, 3.0],
        timestamps: ['Shift 1 (13:10)', 'Shift 2 (14:20)', 'Shift 3 (15:05)']
      }
    }
  },
  {
    id: 'aetheria-logistics',
    name: 'Aetheria',
    industry: 'CleanTech / Urban Micro-Logistics',
    stage1Discover: {
      problem: {
        value: 'Dense metropolitan medical districts lose 18% of temperature-critical pathology specimens and radiopharmaceuticals to gridlocked street traffic and diesel van delays.',
        source: 'user_provided',
        confidence: 'high',
        rationale: 'Validated with urban hospital network lab directors.'
      },
      targetUser: {
        value: 'Hospital Pathology Directors, Bio-banking logistics chiefs, and Radiopharmacy dispatchers.',
        source: 'user_provided',
        confidence: 'high',
        rationale: 'Holders of specimen chain-of-custody compliance liability.'
      },
      context: {
        value: 'City center low-emission vehicle mandates and worsening urban gridlock make diesel courier vans increasingly illegal or delayed in downtown cores.',
        source: 'ai_assumption',
        confidence: 'high',
        rationale: 'Regulatory environment in NYC, London, Paris, and Singapore.'
      },
      constraints: {
        value: [
          'Must maintain continuous cryogenic / cold-chain telemetry (-80°C to +4°C).',
          'Must meet FAA Part 135 / Part 107 urban drone and autonomous pod safety certifications.',
          'Must interface with existing hospital pneumatic tube transfer bays.'
        ],
        source: 'user_provided',
        confidence: 'high',
        rationale: 'Regulatory and physical constraints.'
      },
      existingAssumptions: {
        value: [
          'Assumes municipal airspace rights allow rooftop-to-rooftop transit between medical centers.'
        ],
        source: 'ai_assumption',
        confidence: 'medium',
        rationale: 'Airspace corridor approval pending municipal review.'
      },
      potentialValue: {
        value: 'Reduces urgent specimen transit times from 74 minutes to 8.5 minutes while cutting urban courier transport carbon emissions by 94%.',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Direct aerial transit vs street vehicular routing.'
      },
      openQuestions: [
        'What is the wind tolerance of the cold-chain transport pods in coastal storm conditions?',
        'Does the hospital receiving dock have automated robotic transfer arm access?'
      ],
      exchange: {
        strategistProposal: 'Position as "The Green Drone Delivery Network for Everyday Deliveries."',
        skepticCritique: 'Fatal scope and category error. "Everyday deliveries" puts us in competition with Amazon, Wing, and DoorDash, which have billions in capital. Everyday retail deliveries also have zero margin and generate intense public noise complaints.',
        strategistRevision: 'Narrow positioning strictly to "Critical Urban Medical Cold-Chain Transit." High-value, life-or-death payloads (organs, biopsy specimens, radiopharmaceuticals) where minutes matter, price tolerance is high, and municipal permits are readily granted.',
        beforeScore: {
          clicheDensity: 4,
          audienceFit: 4,
          differentiation: 3,
          overall: 3.7,
          revisionCycles: 1
        },
        afterScore: {
          clicheDensity: 9,
          audienceFit: 9,
          differentiation: 9,
          overall: 9.0,
          revisionCycles: 1
        }
      },
      score: {
        clicheDensity: 9,
        audienceFit: 9,
        differentiation: 9,
        overall: 9.0,
        revisionCycles: 1
      }
    },
    stage2Position: {
      category: {
        value: 'Autonomous Medical Cold-Chain Air Transit',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Delineates from consumer drone delivery and ground courier companies.'
      },
      problem: {
        value: 'Urban street congestion spoils live biopsy specimens and delays acute cancer radiopharm treatments.',
        source: 'user_provided',
        confidence: 'high',
        rationale: 'Concrete clinical urgency.'
      },
      targetAudience: {
        value: 'Urban Health System Lab Operations and Radiopharmacy Directors.',
        source: 'user_provided',
        confidence: 'high',
        rationale: 'Direct procurement authority.'
      },
      valueProposition: {
        value: 'Guaranteed 10-minute rooftop-to-rooftop cryogenic transfer for perishable pathology specimens, bypassing street gridlock completely.',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Unmatched speed and specimen viability preservation.'
      },
      differentiator: {
        value: 'Closed-loop pneumatic dock integration with active cryogenic telemetry — specimen never touches outdoor ambient air.',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Solves the hospital handoff bottleneck that breaks competitor workflows.'
      },
      competitiveAngle: {
        value: 'Unlike road couriers stuck in traffic or consumer drone stunts dropping packages in driveways, Aetheria is a hospital-integrated clinical pipeline.',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Direct contrast with both legacy vans and gimmicky drones.'
      },
      positioningStatement: {
        value: 'For metropolitan hospital networks where minutes dictate tissue viability, Aetheria is the autonomous aerial cold-chain network that delivers critical specimens in sub-10 minutes with uninterrupted cryogenic telemetry, unlike ground couriers trapped in city gridlock.',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Comprehensive positioning anchor.'
      },
      whatThisShouldNotTryToBe: {
        value: [
          'Not a consumer retail or food delivery fleet.',
          'Not a human passenger eVTOL air taxi.',
          'Not a manual remote-controlled hobbyist drone service.'
        ],
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Guards against mission creep.'
      },
      exchange: {
        strategistProposal: 'Position as "The Hyper-Speed Sky Highway for Modern Cities."',
        skepticCritique: 'Sounds like a sci-fi fantasy pitch deck. Cities do not want sky highways buzzing over their heads. Hospital executives do not care about "modern cities," they care about specimen viability and specimen loss liabilities.',
        strategistRevision: 'Position as "Clinical Cold-Chain Arteries in the Sky." Focus exclusively on hospital pathology integrity and life-critical time compression.',
        beforeScore: {
          clicheDensity: 4,
          audienceFit: 5,
          differentiation: 5,
          overall: 4.7,
          revisionCycles: 1
        },
        afterScore: {
          clicheDensity: 9,
          audienceFit: 10,
          differentiation: 9,
          overall: 9.3,
          revisionCycles: 1
        }
      },
      score: {
        clicheDensity: 9,
        audienceFit: 10,
        differentiation: 9,
        overall: 9.3,
        revisionCycles: 1
      }
    },
    stage25MarketScan: {
      scanStatus: 'completed',
      observedPatterns: {
        value: [
          'Consumer drone startups (Zipline, Wing) focus on rural medicine drops or suburban retail.',
          'Urban couriers (Labcorp, Quest vans) are wedded to diesel vehicles and refrigerated vans.'
        ],
        source: 'unverified_external',
        confidence: 'medium',
        rationale: 'Industry market scan.'
      },
      positioningOverlap: {
        value: [
          'Overuse of "Future of logistics", "Zero-emission sky delivery".'
        ],
        source: 'unverified_external',
        confidence: 'medium',
        rationale: 'Marketing materials from 6 drone tech startups.'
      },
      namingOverlap: {
        value: [
          'Overuse of "Fly-", "Sky-", "Aero-", "Air-", "Wing-".'
        ],
        source: 'unverified_external',
        confidence: 'medium',
        rationale: 'Aerospace brand registry.'
      },
      messagingOverlap: {
        value: [
          '"Faster, greener, smarter delivery across urban skies."'
        ],
        source: 'unverified_external',
        confidence: 'medium',
        rationale: 'Competitor taglines.'
      },
      visualOverlap: {
        value: [
          'Bright lime green leaves + carbon fiber black + neon blue sky gradients.'
        ],
        source: 'unverified_external',
        confidence: 'medium',
        rationale: 'Brand visual review.'
      },
      potentialGaps: {
        value: [
          'Zero competitors provide automated pneumatic hospital tube-dock docking — all require humans to walk to a helipad in the rain.'
        ],
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Uncontested workflow advantage.'
      },
      verificationNeeded: {
        value: [
          'Confirm trademark clearance for Aetheria in Class 39 (transport) and Class 42.'
        ],
        source: 'unverified_external',
        confidence: 'high',
        rationale: 'Trademark search requirement.'
      },
      skepticChallenge: 'Can Aetheria fly during heavy icing or thunderstorm conditions in Chicago or Boston winters?'
    },
    stage3Shape: {
      personality: {
        value: [
          {
            trait: 'Aeronautical Precision',
            whyItFitsAudience: 'Pathology directors cannot tolerate lost specimens or erratic telemetry.',
            howItShowsUp: 'Exact mathematical tolerances, sub-second telemetry, flight corridor certainty.',
            adjacentTraitToAvoid: 'Cold or reckless (precise without being aloof).'
          },
          {
            trait: 'Quietly Indispensable',
            whyItFitsAudience: 'Urban hospitals want silent, reliable infrastructure, not dramatic tech spectacles.',
            howItShowsUp: 'Focus on zero noise signature and invisible pneumatic integration.',
            adjacentTraitToAvoid: 'Boring or invisible (reliable without being unnoticeable).'
          },
          {
            trait: 'Pure-Air Stewardship',
            whyItFitsAudience: 'City health networks are committed to urban respiratory health goals.',
            howItShowsUp: 'Direct linkage between zero-emission flight and community air health.',
            adjacentTraitToAvoid: 'Performative greenwashing.'
          }
        ],
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Tuned for institutional enterprise credibility.'
      },
      namingTerritories: [
        {
          territoryName: 'Atmospheric Physics & Upper Air',
          concept: 'Derived from classical ether, altitude, and clean air dynamics.',
          exampleNames: ['Aetheria', 'Strata Flight', 'Altius Medical', 'Aura Transit'],
          reasoning: 'Evokes purity, silence, and elevated speed.',
          weaknesses: 'Aetheria has high usage in fantasy/gaming; needs strict "Aetheria Transit" registration.',
          relationshipToPositioning: 'Signals zero-emission aerial transport.'
        },
        {
          territoryName: 'Pathology & Vital Link',
          concept: 'Focus on the unbroken specimen chain and clinical arterial speed.',
          exampleNames: ['Vessel Air', 'Nexus Bio', 'Artery Transit', 'Sinus Flight'],
          reasoning: 'Positions as a biological extension of the hospital.',
          weaknesses: 'Can sound anatomical or graphic.',
          relationshipToPositioning: 'Links specimen care with rapid transit.'
        }
      ],
      selectedName: {
        value: 'Aetheria',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Conveys purity, zero-emission aerial transit, and frictionless elegance.'
      },
      messaging: {
        taglines: {
          value: [
            'Minutes for medicine. Zero emissions for the city.',
            'The aerial cold-chain corridor for critical pathology.',
            'When tissue viability is measured in minutes, take to the sky.',
            'Precision aerial transit between hospital rooftops.'
          ],
          source: 'ai_recommendation',
          confidence: 'high',
          rationale: 'Tightly mapped to specimen speed and clean flight.'
        },
        selectedTagline: {
          value: 'Minutes for medicine. Zero emissions for the city.',
          source: 'ai_recommendation',
          confidence: 'high',
          rationale: 'Balances urgent healthcare outcomes with civic clean-air value.'
        },
        oneLinePitch: {
          value: 'Aetheria is an autonomous rooftop-to-rooftop aerial cold-chain network that delivers critical pathology specimens in under 10 minutes while eliminating urban courier emissions.',
          source: 'ai_recommendation',
          confidence: 'high',
          rationale: 'Direct statement of capability and outcome.'
        },
        coreMessage: {
          value: 'A patient on an operating table waiting for intraoperative biopsy results cannot wait for a diesel courier van stuck in rush-hour traffic. Aetheria moves perishable specimens above the gridlock.',
          source: 'ai_recommendation',
          confidence: 'high',
          rationale: 'Clear problem narrative with emotional urgency.'
        },
        supportingMessages: {
          value: [
            'Sub-10 minute transit across dense metropolitan medical corridors.',
            'Continuous cryogenic telemetry from pneumatic dock to automated lab receiver.',
            '94% reduction in urban courier carbon footprint.'
          ],
          source: 'ai_recommendation',
          confidence: 'high',
          rationale: 'Proof points.'
        },
        brandVoice: {
          value: [
            'Aviation grade: Measured, disciplined, safety-first.',
            'Civic ally: Respectful of urban acoustic environments and community air quality.',
            'Clinically accountable: Uncompromising focus on specimen chain-of-custody.'
          ],
          source: 'ai_recommendation',
          confidence: 'high',
          rationale: 'Tone rules.'
        },
        communicationPrinciples: {
          value: [
            'Never refer to flights as "drone stunts" — always "autonomous medical air corridors."',
            'Always report cold-chain temperature telemetry tolerances in technical specs.'
          ],
          source: 'ai_recommendation',
          confidence: 'high',
          rationale: 'PR boundaries.'
        }
      },
      trademarkDisclaimer: 'No name here has been checked for trademark, domain, or social-handle availability unless a live verification tool has been used.',
      exchange: {
        strategistProposal: 'Name: SkyZoom | Tagline: "Instant Drone Delivery for Everything."',
        skepticCritique: '"SkyZoom" sounds like a cheap plastic toy on Amazon. "Delivery for everything" destroys the medical premium pricing power.',
        strategistRevision: 'Name: Aetheria | Tagline: "Minutes for medicine. Zero emissions for the city." Personality rooted in Aeronautical Precision and Pure-Air Stewardship.',
        beforeScore: {
          clicheDensity: 2,
          audienceFit: 3,
          differentiation: 2,
          overall: 2.3,
          revisionCycles: 1
        },
        afterScore: {
          clicheDensity: 9,
          audienceFit: 10,
          differentiation: 9,
          overall: 9.3,
          revisionCycles: 1
        }
      },
      score: {
        clicheDensity: 9,
        audienceFit: 10,
        differentiation: 9,
        overall: 9.3,
        revisionCycles: 1
      }
    },
    stage35Graph: [
      {
        id: 'target_audience',
        label: 'Target Audience',
        summary: 'Metropolitan Hospital Pathology Directors & Radiopharmacy Chiefs',
        upstreamDependencies: [],
        downstreamDependencies: ['problem', 'value_proposition', 'positioning'],
        contradictionRisks: ['Consumer delivery messaging'],
        regeneratesIfChanged: ['problem', 'value_proposition', 'positioning'],
        status: 'CONFIRMED'
      },
      {
        id: 'problem',
        label: 'Core Problem',
        summary: 'Street gridlock delays perishable specimens and destroys 18% of temperature-sensitive tissue',
        upstreamDependencies: ['target_audience'],
        downstreamDependencies: ['value_proposition', 'differentiator'],
        contradictionRisks: ['Downplaying traffic variability'],
        regeneratesIfChanged: ['value_proposition', 'differentiator'],
        status: 'CONFIRMED'
      },
      {
        id: 'context',
        label: 'Context',
        summary: 'Urban clean-air zones, EV transition mandates, congested hospital street corridors',
        upstreamDependencies: ['target_audience'],
        downstreamDependencies: ['value_proposition'],
        contradictionRisks: ['Diesel vehicle reliance'],
        regeneratesIfChanged: ['value_proposition'],
        status: 'CONFIRMED'
      },
      {
        id: 'value_proposition',
        label: 'Value Proposition',
        summary: 'Sub-10 minute rooftop-to-rooftop specimen delivery with uninterrupted cold-chain telemetry',
        upstreamDependencies: ['problem', 'target_audience', 'context'],
        downstreamDependencies: ['positioning', 'tagline'],
        contradictionRisks: ['Delivery times exceeding 15 minutes'],
        regeneratesIfChanged: ['positioning', 'tagline'],
        status: 'CONFIRMED'
      },
      {
        id: 'differentiator',
        label: 'Differentiator',
        summary: 'Automated pneumatic dock handoff with real-time cryogenic telemetry',
        upstreamDependencies: ['problem'],
        downstreamDependencies: ['positioning', 'visual_system'],
        contradictionRisks: ['Manual helipad walking requirement'],
        regeneratesIfChanged: ['positioning', 'visual_system'],
        status: 'CONFIRMED'
      },
      {
        id: 'positioning',
        label: 'Positioning Statement',
        summary: 'Autonomous Medical Cold-Chain Air Transit for urban health systems',
        upstreamDependencies: ['value_proposition', 'differentiator'],
        downstreamDependencies: ['personality', 'name', 'tagline', 'brand_voice'],
        contradictionRisks: ['Consumer delivery classification'],
        regeneratesIfChanged: ['personality', 'name', 'tagline', 'brand_voice'],
        status: 'CONFIRMED'
      },
      {
        id: 'personality',
        label: 'Brand Personality',
        summary: 'Aeronautical Precision, Quietly Indispensable, Pure-Air Stewardship',
        upstreamDependencies: ['positioning'],
        downstreamDependencies: ['brand_voice', 'visual_system'],
        contradictionRisks: ['Noisy or flashy stunt branding'],
        regeneratesIfChanged: ['brand_voice', 'visual_system'],
        status: 'CONFIRMED'
      },
      {
        id: 'name',
        label: 'Brand Name',
        summary: 'Aetheria (pure upper atmosphere)',
        upstreamDependencies: ['positioning', 'personality'],
        downstreamDependencies: ['tagline', 'visual_system'],
        contradictionRisks: ['Gaming or fantasy confusion'],
        regeneratesIfChanged: ['tagline', 'visual_system'],
        status: 'CONFIRMED'
      },
      {
        id: 'tagline',
        label: 'Tagline',
        summary: 'Minutes for medicine. Zero emissions for the city.',
        upstreamDependencies: ['positioning', 'personality', 'name'],
        downstreamDependencies: ['launch_messaging'],
        contradictionRisks: ['Vague green slogans without healthcare focus'],
        regeneratesIfChanged: ['launch_messaging'],
        status: 'CONFIRMED'
      },
      {
        id: 'brand_voice',
        label: 'Brand Voice',
        summary: 'Aviation-grade, civic ally, clinically accountable',
        upstreamDependencies: ['personality'],
        downstreamDependencies: ['launch_messaging'],
        contradictionRisks: ['Startup hype and breathless enthusiasm'],
        regeneratesIfChanged: ['launch_messaging'],
        status: 'CONFIRMED'
      },
      {
        id: 'visual_system',
        label: 'Visual System',
        summary: 'Aerodynamic windlines, Stratosphere Blue (#0284C7), Clean Emerald (#10B981), Slate Carbon (#0F172A)',
        upstreamDependencies: ['personality', 'differentiator'],
        downstreamDependencies: ['launch_messaging'],
        contradictionRisks: ['Military camouflage or hobbyist drone aesthetics'],
        regeneratesIfChanged: ['launch_messaging'],
        status: 'CONFIRMED'
      },
      {
        id: 'launch_messaging',
        label: 'Launch Messaging',
        summary: 'Hospital executive briefing papers and civic clean-air coalition announcements',
        upstreamDependencies: ['tagline', 'brand_voice', 'visual_system'],
        downstreamDependencies: [],
        contradictionRisks: ['Neglecting municipal community engagement'],
        regeneratesIfChanged: [],
        status: 'CONFIRMED'
      }
    ],
    causalDiffHistory: [],
    stage4Visualize: {
      logoDirection: {
        value: 'An ultra-refined aerodynamic laminar wing foil intersecting an ascending thermodynamic updraft vector.',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Signals clean aerospace engineering and vertical transit.'
      },
      wordmarkStyle: {
        value: 'Custom extended Syne geometric typeface with subtle aeronautical chamfers.',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Modern, architectural, and premium.'
      },
      svgLogoCode: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
  <rect width="100" height="100" rx="24" fill="#0B132B"/>
  <path d="M24 74C38 74 48 64 54 48C60 32 68 24 82 24" stroke="#38BDF8" stroke-width="4" stroke-linecap="round"/>
  <path d="M36 82C48 82 56 74 62 60C68 46 74 38 88 38" stroke="#10B981" stroke-width="3" stroke-linecap="round" stroke-dasharray="4 4"/>
  <circle cx="82" cy="24" r="5" fill="#38BDF8"/>
  <circle cx="24" cy="74" r="4" fill="#F8FAFC"/>
</svg>`,
      typography: [
        {
          role: 'heading',
          fontFamily: 'Syne',
          weight: '700 Bold',
          sampleText: 'Autonomous Air Corridors',
          usageNotes: 'Hero banners and aerospace capability headers.'
        },
        {
          role: 'body',
          fontFamily: 'Inter',
          weight: '400 Regular',
          sampleText: 'Connecting hospital pathology laboratories with sub-10 minute cryogenic air transit.',
          usageNotes: 'Technical specifications, white papers, municipal filings.'
        },
        {
          role: 'accent',
          fontFamily: 'JetBrains Mono',
          weight: '500 Medium',
          sampleText: 'ALT // 120m | TEMP // -78.4°C [NOMINAL]',
          usageNotes: 'Flight telemetry data readouts and airway status indicators.'
        }
      ],
      colorPalette: [
        {
          name: 'Midnight Stratosphere',
          hex: '#0B132B',
          role: 'void',
          contrastRatio: '18.1:1 against text',
          mood: 'High-altitude stillness, clean nighttime airspace.'
        },
        {
          name: 'Atmospheric Azure',
          hex: '#0284C7',
          role: 'primary',
          contrastRatio: '4.6:1 against dark void',
          mood: 'Clear aerodynamic corridors, safety beacon.'
        },
        {
          name: 'Pure Emerald',
          hex: '#10B981',
          role: 'accent',
          contrastRatio: '5.8:1 against dark void',
          mood: 'Zero-emission verification and active specimen viability.'
        },
        {
          name: 'Carbon Slate',
          hex: '#1E293B',
          role: 'surface',
          contrastRatio: '9.4:1 against text',
          mood: 'High-tech fuselage materials.'
        },
        {
          name: 'Alpine White',
          hex: '#F8FAFC',
          role: 'contrast',
          contrastRatio: '19.0:1 on void',
          mood: 'Crisp readability.'
        }
      ],
      shapesAndForms: {
        value: [
          'Subtle laminar curves reflecting aerodynamic airflow',
          'Clean 45-degree angle vectors indicating vertical takeoff',
          'Precision waypoint nodes and route geometry'
        ],
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Clean aerodynamic visual language.'
      },
      imageryStyle: {
        value: 'Dawn-lit aerial cityscapes showing silent electric aircraft ascending from hospital rooftop tube pods into clear blue sky; clean architectural lines.',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Inspires calm confidence rather than noisy dystopian dread.'
      },
      compositionLayout: {
        value: 'Expansive horizontal widescreen layouts evoking vast, open, unobstructed skies.',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Spatial breathing room.'
      },
      symbolsAndMetaphors: {
        value: [
          'The Unbroken Airway (uninterrupted clinical link)',
          'The Cold-Chain Cocoon (cryogenic safety capsule)',
          'The Zero-Emission Vapor (clean urban breathing)'
        ],
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Storytelling symbols.'
      },
      elementsToAvoid: {
        value: [
          'Generic buzzing consumer drone photos with camera gimbals.',
          'Military tactical camouflage or aggressive attack drone silhouettes.',
          'Noisy delivery gig-economy icons.'
        ],
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Avoid public hostility toward military or annoying drone tech.'
      },
      exchange: {
        strategistProposal: 'Use neon green and carbon fiber black with an aggressive falcon claw logo.',
        skepticCritique: 'Falcon claws and aggressive carbon fiber make this look like a DARPA assassin drone. Hospitals and city councils will deny rooftop flight permits instantly.',
        strategistRevision: 'Pivot to an elegant, peaceful atmospheric aesthetic: Midnight Stratosphere (#0B132B), Atmospheric Azure (#0284C7), and Pure Emerald (#10B981) with a laminar aerodynamic wingmark.',
        beforeScore: {
          clicheDensity: 4,
          audienceFit: 4,
          differentiation: 5,
          overall: 4.3,
          revisionCycles: 1
        },
        afterScore: {
          clicheDensity: 9,
          audienceFit: 10,
          differentiation: 9,
          overall: 9.3,
          revisionCycles: 1
        }
      },
      score: {
        clicheDensity: 9,
        audienceFit: 10,
        differentiation: 9,
        overall: 9.3,
        revisionCycles: 1
      }
    },
    stage5Challenge: {
      findings: [
        {
          problemArea: 'Landing Page Hero Copy',
          currentElement: 'Disrupting urban transportation with electric sky vehicles.',
          weaknessRationale: '"Disrupting urban transportation" triggers instant alarm for municipal regulators and airport FAA authorities.',
          scoreDimensionImpacted: 'clicheDensity',
          proposedAlternative: 'Dedicated clinical air corridors connecting hospital labs above urban traffic.',
          whyStronger: 'Specifies the exact, compliant medical purpose without sounding like an unregulated tech disruption.',
          revisedOutcome: 'Updated in Launch Kit.',
          downstreamEffects: ['Hero headline aligned to regulatory compliance']
        }
      ],
      exchange: {
        strategistProposal: 'Review complete; all terms aligned.',
        skepticCritique: 'Check Municipal Airspace filings: ensure we never use the word "Unmanned Drone" in public city council materials.',
        strategistRevision: 'Adopted standard term "Autonomous Medical Air Transit Pod" throughout.',
        beforeScore: {
          clicheDensity: 8,
          audienceFit: 8,
          differentiation: 8,
          overall: 8.0,
          revisionCycles: 1
        },
        afterScore: {
          clicheDensity: 10,
          audienceFit: 10,
          differentiation: 9,
          overall: 9.7,
          revisionCycles: 1
        }
      },
      score: {
        clicheDensity: 10,
        audienceFit: 10,
        differentiation: 9,
        overall: 9.7,
        revisionCycles: 1
      }
    },
    consistencyCheck: {
      conflictsDetected: [],
      passedSanityCheck: true
    },
    stage6Launch: {
      landingPageHeadline: {
        value: 'Minutes for medicine. Zero emissions for the city.',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Balanced civic and medical value statement.'
      },
      landingPageSubhead: {
        value: 'Aetheria connects metropolitan hospital networks with autonomous aerial cold-chain transit, delivering critical pathology specimens in under 10 minutes above city gridlock.',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Clear, compelling subhead.'
      },
      oneLinePitch: {
        value: 'Autonomous rooftop-to-rooftop medical air corridors that eliminate traffic delays for urgent pathology specimens.',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Executive summary pitch.'
      },
      shortProductDescription: {
        value: 'Aetheria is the world’s first autonomous medical cold-chain air transit network designed specifically for dense metropolitan health systems. By bypassing street traffic through automated pneumatic tube rooftop docks, Aetheria cuts specimen transit times from 74 minutes to 8.5 minutes while eliminating 94% of courier carbon emissions.',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Product brief.'
      },
      socialLaunchPost: {
        value: 'When a patient is on the operating table waiting for intraoperative biopsy margins, every minute lost to street traffic is a minute of clinical risk.\n\nToday, we are announcing Aetheria: autonomous aerial cold-chain corridors for urban medicine.\n\nSub-10 minute transit. Continuous cryogenic telemetry. Zero street emissions.\n\nExplore our flight network: aetheria.aero',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'High-conviction social launch post.'
      },
      launchEmailSubject: {
        value: 'Sub-10 minute biopsy transit across [City] medical center',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Compelling B2B hospital director subject line.'
      },
      launchEmailBody: {
        value: 'Dear [Name],\n\nIn dense metropolitan centers, routine street traffic routinely stretches urgent specimen transport beyond clinical safety windows.\n\nAetheria connects hospital rooftops directly to central pathology hubs via quiet, zero-emission autonomous flight corridors.\n\nOur pods dock directly into hospital pneumatic tube stations, maintaining uninterrupted -80°C telemetry from surgical suite to lab bench.\n\nWe would welcome the opportunity to share our FAA Part 135 clinical corridor feasibility study for your hospital network.\n\nBest regards,\nThe Aetheria Airway Team',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'Professional outreach.'
      },
      finalBrandSummary: {
        value: 'Aetheria represents a masterclass in clinical aerospace positioning: taking a controversial technology (drones) and focusing it with razor precision onto an urgent, universally praised clinical need (saving lives through rapid specimen transit) while championing urban clean-air stewardship.',
        source: 'ai_recommendation',
        confidence: 'high',
        rationale: 'System summary.'
      },
      score: {
        clicheDensity: 10,
        audienceFit: 10,
        differentiation: 10,
        overall: 10.0,
        revisionCycles: 1
      }
    },
    stage65LockedDNA: {
      isLocked: true,
      lockedAt: '2026-09-24T12:00:00Z',
      brandName: 'Aetheria',
      confirmedAudience: 'Metropolitan Hospital Pathology Directors & Radiopharmacy Chiefs',
      problem: 'Street gridlock spoils live biopsy specimens and delays time-critical radiopharmaceuticals.',
      positioning: 'Autonomous Medical Cold-Chain Air Transit for urban health systems.',
      differentiator: 'Pneumatic tube automated rooftop docking with continuous cryogenic telemetry.',
      personality: [
        {
          trait: 'Aeronautical Precision',
          whyItFitsAudience: 'Pathology requires zero-tolerance certainty.',
          howItShowsUp: 'Exact mathematical tolerances.',
          adjacentTraitToAvoid: 'Cold or reckless'
        },
        {
          trait: 'Quietly Indispensable',
          whyItFitsAudience: 'Hospitals value silent, dependable infrastructure.',
          howItShowsUp: 'Invisible automated integration.',
          adjacentTraitToAvoid: 'Boring'
        },
        {
          trait: 'Pure-Air Stewardship',
          whyItFitsAudience: 'City health networks champion clean air.',
          howItShowsUp: 'Zero-emission electric transit metrics.',
          adjacentTraitToAvoid: 'Greenwashing'
        }
      ],
      tagline: 'Minutes for medicine. Zero emissions for the city.',
      brandVoice: [
        'Aviation grade: Measured, disciplined, safety-first',
        'Civic ally: Respectful of urban acoustic environments',
        'Clinically accountable: Uncompromising specimen chain-of-custody'
      ],
      communicationPrinciples: [
        'Never say "drone stunts" — always "autonomous medical air corridors."',
        'Always link flight speed directly to tissue viability and patient outcomes.'
      ],
      visualRules: [
        'Dominant Midnight Stratosphere backgrounds (#0B132B)',
        'Atmospheric Azure (#0284C7) and Pure Emerald (#10B981) accents',
        'JetBrains Mono for altitude and temperature telemetry'
      ],
      visualAvoidRules: [
        'No military or camouflage drone imagery',
        'No aggressive red or caution yellow hazard strips',
        'No gig-economy retail delivery visual language'
      ],
      messagingRules: [
        'Prohibit words: "drone delivery", "gig logistics", "hyper-fast shopping"',
        'Every claim must state cold-chain temperature tolerances'
      ],
      prohibitedCliches: [
        'Future of delivery',
        'Sky is the limit',
        'Uber for organs',
        'Drone revolution'
      ],
      marketDistinctions: [
        'Zipline = rural parachute drops; Aetheria = urban hospital pneumatic docking',
        'Ground vans = stuck in traffic; Aetheria = sub-10 minute direct aerial corridor'
      ],
      nodes: {
        target_audience: { status: 'CONFIRMED', summary: 'Hospital Pathology & Radiopharmacy Chiefs' },
        problem: { status: 'CONFIRMED', summary: 'Street traffic delays perishable tissue specimens' },
        context: { status: 'CONFIRMED', summary: 'Urban clean-air mandates and gridlock' },
        value_proposition: { status: 'CONFIRMED', summary: 'Sub-10 minute rooftop-to-rooftop specimen delivery' },
        differentiator: { status: 'CONFIRMED', summary: 'Automated pneumatic dock handoff with cryogenic telemetry' },
        positioning: { status: 'CONFIRMED', summary: 'Autonomous Medical Cold-Chain Air Transit' },
        personality: { status: 'CONFIRMED', summary: 'Aeronautical Precision, Quietly Indispensable' },
        name: { status: 'CONFIRMED', summary: 'Aetheria' },
        tagline: { status: 'CONFIRMED', summary: 'Minutes for medicine. Zero emissions for the city.' },
        brand_voice: { status: 'CONFIRMED', summary: 'Aviation-grade, civic ally, clinically accountable' },
        visual_system: { status: 'CONFIRMED', summary: 'Midnight Stratosphere, Atmospheric Azure, Pure Emerald' },
        launch_messaging: { status: 'CONFIRMED', summary: 'Minutes for medicine. Zero emissions for the city.' }
      },
      unresolvedAssumptions: []
    },
    evaluationsHistory: [
      {
        id: 'eval-aeth-1',
        timestamp: '2026-09-24T13:00:00Z',
        submittedContent: 'The coolest drone delivery startup bringing fast packages and food to your doorstep in minutes!',
        contentType: 'social_post',
        overallAlignmentScore: 2.1,
        breakdown: {
          voiceAlignment: 1,
          positioningAdherence: 2,
          differentiatorPresence: 1,
          audienceSpecificity: 1,
          clicheAvoidance: 2
        },
        lineByLineFeedback: [
          {
            lineText: 'The coolest drone delivery startup',
            status: 'fail',
            feedback: 'Prohibited terms: "drone delivery", "coolest startup". Destroys medical and aerospace credibility.',
            ruleViolated: 'Never say "drone stunts" — always "autonomous medical air corridors."'
          },
          {
            lineText: 'bringing fast packages and food to your doorstep in minutes!',
            status: 'fail',
            feedback: 'Total category departure. Aetheria is not a food or retail package delivery service.',
            ruleViolated: 'Not a consumer retail or food delivery fleet'
          }
        ],
        avoidRuleViolations: [
          'Used prohibited term: "drone delivery"',
          'Described consumer retail and food delivery',
          'Trivialized clinical medical mission'
        ],
        intentPreservingRewrites: [
          'Delivering critical pathology specimens across city hospital networks in under 10 minutes — above the gridlock, with zero urban emissions.',
          'When minutes dictate biopsy viability, Aetheria moves specimens rooftop-to-rooftop with continuous cryogenic telemetry.'
        ]
      }
    ],
    driftReport: {
      status: 'insufficient_data',
      message: 'Insufficient historical data to establish a drift pattern. (Requires at least 3 prior evaluated submissions.)'
    }
  }
];
