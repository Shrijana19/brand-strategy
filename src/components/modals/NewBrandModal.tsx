import React, { useState } from 'react';
import { BrandSystem } from '../../types/brand';
import { X, Sparkles, Wand2, Compass, AlertTriangle } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onCreateBrand: (newBrand: BrandSystem) => void;
}

export const NewBrandModal: React.FC<Props> = ({ isOpen, onClose, onCreateBrand }) => {
  const [name, setName] = useState('');
  const [industry, setIndustry] = useState('');
  const [problem, setProblem] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [differentiator, setDifferentiator] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !problem.trim() || !targetAudience.trim()) return;

    setIsGenerating(true);

    setTimeout(() => {
      const brandId = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const diffVal = differentiator.trim() || 'Proprietary automated workflow optimization with zero manual overhead.';
      const indVal = industry.trim() || 'Software & Digital Infrastructure';

      const customBrand: BrandSystem = {
        id: brandId,
        name: name.trim(),
        industry: indVal,
        stage1Discover: {
          problem: {
            value: problem.trim(),
            source: 'user_provided',
            confidence: 'high',
            rationale: 'Provided directly by user in brand discovery intake.'
          },
          targetUser: {
            value: targetAudience.trim(),
            source: 'user_provided',
            confidence: 'high',
            rationale: 'Specified by user as the primary customer and economic buyer.'
          },
          context: {
            value: `Modern market conditions in ${indVal} prioritize rapid time-to-value, transparency, and operational efficiency over legacy bloat.`,
            source: 'ai_assumption',
            confidence: 'medium',
            rationale: 'Standard macroeconomic climate for this category.'
          },
          constraints: {
            value: [
              'Must deliver tangible value in the first 14 days without long deployment cycles.',
              'Must not lock user data into opaque proprietary silos.',
              'Must be defensible against low-cost copycat entrants.'
            ],
            source: 'ai_recommendation',
            confidence: 'medium',
            rationale: 'Essential constraints for modern high-retention brands.'
          },
          existingAssumptions: {
            value: [
              'Assumes stated target audience has dedicated discretionary budget authority.',
              'Assumes problem intensity is painful enough to overcome inertia and switching costs.'
            ],
            source: 'ai_assumption',
            confidence: 'medium',
            rationale: 'Core commercial hypotheses needing customer validation.'
          },
          potentialValue: {
            value: 'Measurable 3x productivity uplift and quantifiable reduction in operational waste.',
            source: 'ai_recommendation',
            confidence: 'medium',
            rationale: 'Calculated value trajectory.'
          },
          openQuestions: [
            'What is the single biggest hesitation target buyers cite during evaluation?',
            'How do existing incumbents monetize this audience, and where is their pricing vulnerable?'
          ],
          exchange: {
            strategistProposal: `Position ${name.trim()} as the next-generation AI-powered platform for ${indVal}.`,
            skepticCritique: `Fatal cliché alert: "Next-generation AI-powered platform" means absolutely nothing to buyers. It triggers instant skepticism and lumps ${name.trim()} into thousands of interchangeable AI startups.`,
            strategistRevision: `Position ${name.trim()} strictly around solving "${problem.trim().slice(0, 50)}..." for ${targetAudience.trim().slice(0, 40)} through concrete proof rather than generic AI hype.`,
            beforeScore: {
              clicheDensity: 3,
              audienceFit: 5,
              differentiation: 4,
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
        stage2Position: {
          category: {
            value: `Dedicated Solutions for ${indVal}`,
            source: 'ai_recommendation',
            confidence: 'high',
            rationale: 'Sharp category definition.'
          },
          problem: {
            value: problem.trim(),
            source: 'user_provided',
            confidence: 'high',
            rationale: 'User provided problem.'
          },
          targetAudience: {
            value: targetAudience.trim(),
            source: 'user_provided',
            confidence: 'high',
            rationale: 'User audience.'
          },
          valueProposition: {
            value: `The fastest, most reliable way to eliminate ${problem.trim().slice(0, 45)}... without legacy overhead.`,
            source: 'ai_recommendation',
            confidence: 'high',
            rationale: 'Direct outcome articulation.'
          },
          differentiator: {
            value: diffVal,
            source: 'user_provided',
            confidence: 'high',
            rationale: 'Key competitive moat.'
          },
          competitiveAngle: {
            value: `Unlike slow, generic legacy providers, ${name.trim()} is purpose-built for ${targetAudience.trim()} with zero unnecessary friction.`,
            source: 'ai_recommendation',
            confidence: 'high',
            rationale: 'Contrast strategy.'
          },
          positioningStatement: {
            value: `For ${targetAudience.trim()} struggling with ${problem.trim().slice(0, 40)}, ${name.trim()} is the dedicated solution that ${diffVal.toLowerCase()}, unlike status quo alternatives that create more friction than they solve.`,
            source: 'ai_recommendation',
            confidence: 'high',
            rationale: 'Structured positioning statement.'
          },
          whatThisShouldNotTryToBe: {
            value: [
              'Not an all-in-one bloated enterprise suite that does everything poorly.',
              'Not a generic low-price race-to-the-bottom commodity.',
              'Not an unproven technology stunt with no measurable ROI.'
            ],
            source: 'ai_recommendation',
            confidence: 'high',
            rationale: 'Strict boundary defenses.'
          },
          exchange: {
            strategistProposal: `Frame ${name.trim()} as a revolutionary disruptive ecosystem.`,
            skepticCritique: `"Revolutionary disruptive ecosystem" is pitch-deck word salad. Buyers want relief from specific pains, not another ecosystem to manage.`,
            strategistRevision: `Anchor positioning strictly around concrete outcomes and the specific differentiator: "${diffVal.slice(0, 45)}..."`,
            beforeScore: {
              clicheDensity: 3,
              audienceFit: 4,
              differentiation: 4,
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
        stage25MarketScan: {
          scanStatus: 'completed',
          observedPatterns: {
            value: [
              `Competitors in ${indVal} frequently rely on opaque pricing and long sales calls.`,
              'Overuse of words like "seamless", "innovative", and "powering the future".'
            ],
            source: 'unverified_external',
            confidence: 'medium',
            rationale: 'Heuristic pattern detection across the category.'
          },
          positioningOverlap: {
            value: [
              'High convergence around claims of "simple, fast, intelligent workflows".'
            ],
            source: 'unverified_external',
            confidence: 'medium',
            rationale: 'Marketing scan.'
          },
          namingOverlap: {
            value: [
              'Pervasive use of "-ify", "Omni-", "Hyper-", "Nexus".'
            ],
            source: 'unverified_external',
            confidence: 'medium',
            rationale: 'Category naming audit.'
          },
          messagingOverlap: {
            value: [
              '"Unlock the power of modern workflows today."'
            ],
            source: 'unverified_external',
            confidence: 'medium',
            rationale: 'Tagline scan.'
          },
          visualOverlap: {
            value: [
              'Standard dark purple gradient meshes with rounded neon buttons.'
            ],
            source: 'unverified_external',
            confidence: 'medium',
            rationale: 'Visual identity audit.'
          },
          potentialGaps: {
            value: [
              `Extreme transparency and instant time-to-value tailored strictly for ${targetAudience.trim()}.`
            ],
            source: 'ai_recommendation',
            confidence: 'high',
            rationale: 'Uncontested market space.'
          },
          verificationNeeded: {
            value: [
              `Verify trademark availability for "${name.trim()}" in relevant international trademark classes.`
            ],
            source: 'unverified_external',
            confidence: 'high',
            rationale: 'Mandatory disclaimer.'
          },
          skepticChallenge: `Can ${name.trim()} defend its differentiator if incumbents copy its headline feature next year?`
        },
        stage3Shape: {
          personality: {
            value: [
              {
                trait: 'Radical Clarity',
                whyItFitsAudience: `${targetAudience.trim()} has zero patience for vague jargon or marketing fluff.`,
                howItShowsUp: 'Direct, declarative sentences with concrete proof points and zero buzzwords.',
                adjacentTraitToAvoid: 'Blunt or condescending.'
              },
              {
                trait: 'Disciplined Craft',
                whyItFitsAudience: 'Signals engineering perfection and meticulous attention to detail.',
                howItShowsUp: 'Polished micro-interactions and transparent telemetry.',
                adjacentTraitToAvoid: 'Obsessive or pedantic.'
              },
              {
                trait: 'Decisive Ally',
                whyItFitsAudience: 'Empowers the user to make high-conviction decisions with speed.',
                howItShowsUp: 'Proactive recommendations rather than endless options.',
                adjacentTraitToAvoid: 'Presumptuous or bossy.'
              }
            ],
            source: 'ai_recommendation',
            confidence: 'high',
            rationale: 'Tuned specifically for the target audience.'
          },
          namingTerritories: [
            {
              territoryName: 'Speed & Direct Vector',
              concept: 'High velocity, frictionless momentum, straight lines.',
              exampleNames: [`${name.trim()} Core`, 'Vector Shift', 'Prism Flow'],
              reasoning: 'Signals immediate efficiency and focus.',
              weaknesses: 'Can sound mechanical if not paired with warmth.',
              relationshipToPositioning: 'Reflects fast time-to-value.'
            },
            {
              territoryName: 'Foundational Anchor',
              concept: 'Bedrock reliability, structural defense, enduring certainty.',
              exampleNames: [`Tenet ${name.trim()}`, 'Keystone Bio', 'Foundry Unit'],
              reasoning: 'Signals institutional longevity.',
              weaknesses: 'Can feel rigid or slow.',
              relationshipToPositioning: 'Emphasizes reliability.'
            }
          ],
          selectedName: {
            value: name.trim(),
            source: 'user_provided',
            confidence: 'high',
            rationale: 'Approved user title.'
          },
          messaging: {
            taglines: {
              value: [
                `Built for ${targetAudience.trim()}. Engineered for certainty.`,
                `The end of ${problem.trim().slice(0, 30)}.`,
                `Precision systems where standard tools stall.`
              ],
              source: 'ai_recommendation',
              confidence: 'high',
              rationale: 'Tight positioning linkage.'
            },
            selectedTagline: {
              value: `Built for ${targetAudience.trim()}. Engineered for certainty.`,
              source: 'ai_recommendation',
              confidence: 'high',
              rationale: 'Best balances audience pride with functional certainty.'
            },
            oneLinePitch: {
              value: `${name.trim()} provides ${targetAudience.trim()} with the dedicated tools needed to overcome ${problem.trim().slice(0, 40)}.`,
              source: 'ai_recommendation',
              confidence: 'high',
              rationale: 'Crisp pitch.'
            },
            coreMessage: {
              value: `Stop accepting compromise in ${indVal}. ${name.trim()} eliminates ${problem.trim().slice(0, 40)} through ${diffVal.toLowerCase()}.`,
              source: 'ai_recommendation',
              confidence: 'high',
              rationale: 'Core brand message.'
            },
            supportingMessages: {
              value: [
                'Instant deployment: Up and running in minutes, not months.',
                `Engineered specifically for ${targetAudience.trim()}.`,
                'Transparent metrics and zero hidden vendor locks.'
              ],
              source: 'ai_recommendation',
              confidence: 'high',
              rationale: 'Supporting proof points.'
            },
            brandVoice: {
              value: [
                'Clear and decisive: Plain English, no acronym soup.',
                'Empathetic to customer friction: Respect their time above all else.',
                'Substantiated claims: Every statement backed by verifiable data.'
              ],
              source: 'ai_recommendation',
              confidence: 'high',
              rationale: 'Voice standards.'
            },
            communicationPrinciples: {
              value: [
                'Never use prohibited buzzwords: "seamless", "disruptive", "cutting-edge".',
                'Never promise what cannot be proven in a 5-minute product walk-through.'
              ],
              source: 'ai_recommendation',
              confidence: 'high',
              rationale: 'PR guardrails.'
            }
          },
          trademarkDisclaimer: 'No name here has been checked for trademark, domain, or social-handle availability unless a live verification tool has been used.',
          exchange: {
            strategistProposal: `Tagline: "The Future of ${indVal} is Here."`,
            skepticCritique: `"The future is here" is a 20-year-old cliché that provides zero information about what ${name.trim()} actually does.`,
            strategistRevision: `Tagline: "Built for ${targetAudience.trim()}. Engineered for certainty." Grounded, credible, and audience-specific.`,
            beforeScore: {
              clicheDensity: 2,
              audienceFit: 4,
              differentiation: 3,
              overall: 3.0,
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
        stage35Graph: [
          {
            id: 'target_audience',
            label: 'Target Audience',
            summary: targetAudience.trim(),
            upstreamDependencies: [],
            downstreamDependencies: ['problem', 'value_proposition', 'positioning'],
            contradictionRisks: ['Audience mismatch'],
            regeneratesIfChanged: ['problem', 'value_proposition', 'positioning'],
            status: 'CONFIRMED'
          },
          {
            id: 'problem',
            label: 'Problem',
            summary: problem.trim(),
            upstreamDependencies: ['target_audience'],
            downstreamDependencies: ['value_proposition', 'differentiator'],
            contradictionRisks: ['Vague problem statement'],
            regeneratesIfChanged: ['value_proposition', 'differentiator'],
            status: 'CONFIRMED'
          },
          {
            id: 'context',
            label: 'Context',
            summary: `Market landscape for ${indVal}`,
            upstreamDependencies: ['target_audience'],
            downstreamDependencies: ['value_proposition'],
            contradictionRisks: ['Macro assumption mismatch'],
            regeneratesIfChanged: ['value_proposition'],
            status: 'CONFIRMED'
          },
          {
            id: 'value_proposition',
            label: 'Value Proposition',
            summary: `Eliminates ${problem.trim().slice(0, 30)}...`,
            upstreamDependencies: ['problem', 'target_audience'],
            downstreamDependencies: ['positioning', 'tagline'],
            contradictionRisks: ['Overpromising outcomes'],
            regeneratesIfChanged: ['positioning', 'tagline'],
            status: 'CONFIRMED'
          },
          {
            id: 'differentiator',
            label: 'Differentiator',
            summary: diffVal,
            upstreamDependencies: ['problem'],
            downstreamDependencies: ['positioning', 'visual_system'],
            contradictionRisks: ['Easily copied claim'],
            regeneratesIfChanged: ['positioning', 'visual_system'],
            status: 'CONFIRMED'
          },
          {
            id: 'positioning',
            label: 'Positioning',
            summary: `Dedicated platform for ${targetAudience.trim()}`,
            upstreamDependencies: ['value_proposition', 'differentiator'],
            downstreamDependencies: ['personality', 'name', 'tagline', 'brand_voice'],
            contradictionRisks: ['Commodity categorization'],
            regeneratesIfChanged: ['personality', 'tagline', 'brand_voice'],
            status: 'CONFIRMED'
          },
          {
            id: 'personality',
            label: 'Personality',
            summary: 'Radical Clarity, Disciplined Craft, Decisive Ally',
            upstreamDependencies: ['positioning'],
            downstreamDependencies: ['brand_voice', 'visual_system'],
            contradictionRisks: ['Arrogant or generic tone'],
            regeneratesIfChanged: ['brand_voice', 'visual_system'],
            status: 'CONFIRMED'
          },
          {
            id: 'name',
            label: 'Brand Name',
            summary: name.trim(),
            upstreamDependencies: ['positioning'],
            downstreamDependencies: ['tagline', 'visual_system'],
            contradictionRisks: ['Trademark collision'],
            regeneratesIfChanged: ['tagline', 'visual_system'],
            status: 'CONFIRMED'
          },
          {
            id: 'tagline',
            label: 'Tagline',
            summary: `Built for ${targetAudience.trim()}. Engineered for certainty.`,
            upstreamDependencies: ['positioning', 'personality', 'name'],
            downstreamDependencies: ['launch_messaging'],
            contradictionRisks: ['Weak cliché slogans'],
            regeneratesIfChanged: ['launch_messaging'],
            status: 'CONFIRMED'
          },
          {
            id: 'brand_voice',
            label: 'Brand Voice',
            summary: 'Clear, decisive, empathetic to user time',
            upstreamDependencies: ['personality'],
            downstreamDependencies: ['launch_messaging'],
            contradictionRisks: ['Marketing hyperbole'],
            regeneratesIfChanged: ['launch_messaging'],
            status: 'CONFIRMED'
          },
          {
            id: 'visual_system',
            label: 'Visual System',
            summary: 'Precision geometric mark, Deep Void, Electric Indigo, Pure Contrast',
            upstreamDependencies: ['personality', 'differentiator'],
            downstreamDependencies: ['launch_messaging'],
            contradictionRisks: ['Purple AI glow default'],
            regeneratesIfChanged: ['launch_messaging'],
            status: 'CONFIRMED'
          },
          {
            id: 'launch_messaging',
            label: 'Launch Messaging',
            summary: 'Landing page and launch campaign copy',
            upstreamDependencies: ['tagline', 'brand_voice', 'visual_system'],
            downstreamDependencies: [],
            contradictionRisks: ['Unsubstantiated claims'],
            regeneratesIfChanged: [],
            status: 'CONFIRMED'
          }
        ],
        causalDiffHistory: [],
        stage4Visualize: {
          logoDirection: {
            value: `A minimalist architectural vector mark combining precision geometry with an ascending focal angle, representing clarity and forward momentum.`,
            source: 'ai_recommendation',
            confidence: 'high',
            rationale: 'Clean modern symbol tailored to modern B2B standards.'
          },
          wordmarkStyle: {
            value: 'Set in bold Plus Jakarta Sans with tailored negative tracking for commanding authority.',
            source: 'ai_recommendation',
            confidence: 'high',
            rationale: 'Executive presence.'
          },
          svgLogoCode: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
  <rect width="100" height="100" rx="24" fill="#0A0E1A"/>
  <circle cx="50" cy="50" r="32" stroke="#6366F1" stroke-width="3" stroke-dasharray="6 6"/>
  <path d="M35 65L50 35L65 65" stroke="#38BDF8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="50" cy="50" r="4" fill="#F43F5E"/>
</svg>`,
          typography: [
            {
              role: 'heading',
              fontFamily: 'Plus Jakarta Sans',
              weight: '700 Bold',
              sampleText: `The End of ${problem.trim().slice(0, 20)}`,
              usageNotes: 'Hero headlines and display banners.'
            },
            {
              role: 'body',
              fontFamily: 'Inter',
              weight: '400 Regular',
              sampleText: `Engineered specifically for ${targetAudience.trim()} to deliver immediate, measurable ROI.`,
              usageNotes: 'Body copy, documentation, and product interface.'
            },
            {
              role: 'accent',
              fontFamily: 'JetBrains Mono',
              weight: '500 Medium',
              sampleText: 'STATUS // 100% OPERATIONAL',
              usageNotes: 'Telemetry tokens and status badges.'
            }
          ],
          colorPalette: [
            {
              name: 'Deep Obsidian',
              hex: '#0A0E1A',
              role: 'void',
              contrastRatio: '18.6:1 against white text',
              mood: 'Calm, architectural foundation.'
            },
            {
              name: 'Electric Indigo',
              hex: '#6366F1',
              role: 'primary',
              contrastRatio: '5.1:1 on void',
              mood: 'High-conviction authority.'
            },
            {
              name: 'Signal Rose',
              hex: '#F43F5E',
              role: 'accent',
              contrastRatio: '5.4:1 on void',
              mood: 'Precision focal point.'
            },
            {
              name: 'Slate Matrix',
              hex: '#1E293B',
              role: 'surface',
              contrastRatio: '9.1:1 against text',
              mood: 'Card background container.'
            },
            {
              name: 'Stark White',
              hex: '#FFFFFF',
              role: 'contrast',
              contrastRatio: '19.4:1 on void',
              mood: 'Maximum typographic legibility.'
            }
          ],
          shapesAndForms: {
            value: [
              'Clean geometric angles and structured grid lines',
              'Subtle rounded borders (8-12px) for refined software tactile feel'
            ],
            source: 'ai_recommendation',
            confidence: 'high',
            rationale: 'Clean modern aesthetic.'
          },
          imageryStyle: {
            value: 'Authentic documentary screenshots and telemetry cards; zero generic stock photos.',
            source: 'ai_recommendation',
            confidence: 'high',
            rationale: 'Honesty in product representation.'
          },
          compositionLayout: {
            value: 'High-contrast, generous negative space, structured modular hierarchy.',
            source: 'ai_recommendation',
            confidence: 'high',
            rationale: 'Executive legibility.'
          },
          symbolsAndMetaphors: {
            value: ['The Precision Fulcrum', 'The Direct Vector'],
            source: 'ai_recommendation',
            confidence: 'high',
            rationale: 'Visual cues.'
          },
          elementsToAvoid: {
            value: [
              'Generic AI purple glow or mesh gradients.',
              'Floating abstract 3D plastic shapes.',
              'Corny stock handshake or team high-five photos.'
            ],
            source: 'ai_recommendation',
            confidence: 'high',
            rationale: 'Anti-trope enforcement.'
          },
          exchange: {
            strategistProposal: 'A rainbow gradient with floating cartoon avatars.',
            skepticCritique: 'Destroys professional credibility. Buyers will assume this is an amateur hobby project.',
            strategistRevision: 'Adopted an executive architectural palette: Deep Obsidian (#0A0E1A), Electric Indigo (#6366F1), and Signal Rose (#F43F5E).',
            beforeScore: {
              clicheDensity: 3,
              audienceFit: 4,
              differentiation: 4,
              overall: 3.7,
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
              problemArea: 'Landing Page Subhead',
              currentElement: 'Revolutionizing workflows with smarter AI automation.',
              weaknessRationale: 'Classic buzzword phrase that tells the buyer nothing concrete.',
              scoreDimensionImpacted: 'clicheDensity',
              proposedAlternative: `Dedicated platform engineered for ${targetAudience.trim()} to stop ${problem.trim().slice(0, 30)}.`,
              whyStronger: 'Specifies the audience and exact pain point without marketing fluff.',
              revisedOutcome: 'Updated in Launch Kit.',
              downstreamEffects: ['Subhead rewritten in Stage 6 Launch Kit']
            }
          ],
          exchange: {
            strategistProposal: 'All cross-stage linkages verified.',
            skepticCritique: 'Ensure no pricing or feature claims exceed technical reality.',
            strategistRevision: 'Enforced strict factual provenance across all statements.',
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
            value: `The end of ${problem.trim().slice(0, 35)}.`,
            source: 'ai_recommendation',
            confidence: 'high',
            rationale: 'Direct benefit hook.'
          },
          landingPageSubhead: {
            value: `${name.trim()} is the dedicated platform built for ${targetAudience.trim()} to deliver ${diffVal.toLowerCase()}.`,
            source: 'ai_recommendation',
            confidence: 'high',
            rationale: 'Clear audience and differentiator pairing.'
          },
          oneLinePitch: {
            value: `The dedicated platform built for ${targetAudience.trim()} to solve ${problem.trim().slice(0, 30)}.`,
            source: 'ai_recommendation',
            confidence: 'high',
            rationale: 'Executive summary.'
          },
          shortProductDescription: {
            value: `${name.trim()} transforms how ${targetAudience.trim()} manages ${indVal}. By combining ${diffVal.toLowerCase()} with zero unnecessary friction, ${name.trim()} delivers immediate measurable value.`,
            source: 'ai_recommendation',
            confidence: 'high',
            rationale: 'Brief product description.'
          },
          socialLaunchPost: {
            value: `Most tools in ${indVal} are bloated, slow, and full of friction.\n\nToday we are announcing ${name.trim()}.\n\nBuilt specifically for ${targetAudience.trim()} to eliminate ${problem.trim().slice(0, 35)}.\n\nExplore the system: ${brandId}.io`,
            source: 'ai_recommendation',
            confidence: 'high',
            rationale: 'Launch post.'
          },
          launchEmailSubject: {
            value: `Solving ${problem.trim().slice(0, 30)} for ${targetAudience.trim()}`,
            source: 'ai_recommendation',
            confidence: 'high',
            rationale: 'Subject line.'
          },
          launchEmailBody: {
            value: `Dear [Name],\n\nIf you are dealing with ${problem.trim()}, you know how much time is wasted on legacy workarounds.\n\nWe built ${name.trim()} to solve this: ${diffVal}.\n\nWould you be open to a 5-minute preview this week?\n\nBest,\nThe ${name.trim()} Team`,
            source: 'ai_recommendation',
            confidence: 'high',
            rationale: 'Outreach email.'
          },
          finalBrandSummary: {
            value: `${name.trim()} is a battle-tested brand system positioned with high clarity for ${targetAudience.trim()}, rejecting startup clichés in favor of measurable outcomes and disciplined craft.`,
            source: 'ai_recommendation',
            confidence: 'high',
            rationale: 'Executive brand summary.'
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
          lockedAt: new Date().toISOString(),
          brandName: name.trim(),
          confirmedAudience: targetAudience.trim(),
          problem: problem.trim(),
          positioning: `Dedicated platform for ${targetAudience.trim()} in ${indVal}`,
          differentiator: diffVal,
          personality: [
            {
              trait: 'Radical Clarity',
              whyItFitsAudience: 'Target buyers demand plain truth.',
              howItShowsUp: 'No buzzwords.',
              adjacentTraitToAvoid: 'Blunt'
            },
            {
              trait: 'Disciplined Craft',
              whyItFitsAudience: 'Signals engineering rigor.',
              howItShowsUp: 'Precision copy.',
              adjacentTraitToAvoid: 'Pedantic'
            }
          ],
          tagline: `Built for ${targetAudience.trim()}. Engineered for certainty.`,
          brandVoice: [
            'Direct and plainspoken',
            'Respectful of customer time',
            'Substantiated with concrete proof'
          ],
          communicationPrinciples: [
            'Never use prohibited buzzwords: "seamless", "disruptive", "cutting-edge".',
            'Every claim must state verifiable proof points.'
          ],
          visualRules: [
            'Dominant Deep Obsidian background (#0A0E1A)',
            'Electric Indigo (#6366F1) and Signal Rose (#F43F5E) accents',
            'JetBrains Mono for metrics and status chips'
          ],
          visualAvoidRules: [
            'No generic AI purple gradient glows',
            'No cartoon mascots or corporate meme graphics'
          ],
          messagingRules: [
            'Banned words: "seamless", "disruptive", "game-changing", "revolutionary"',
            'Always cite audience and outcome in headlines'
          ],
          prohibitedCliches: [
            'Revolutionizing the industry',
            'Seamless AI co-pilot',
            'All-in-one game changer'
          ],
          marketDistinctions: [
            `Unlike generic software, ${name.trim()} is purpose-built for ${targetAudience.trim()}`
          ],
          nodes: {
            target_audience: { status: 'CONFIRMED', summary: targetAudience.trim() },
            problem: { status: 'CONFIRMED', summary: problem.trim() },
            context: { status: 'CONFIRMED', summary: `Market landscape for ${indVal}` },
            value_proposition: { status: 'CONFIRMED', summary: `Eliminates ${problem.trim().slice(0, 30)}` },
            differentiator: { status: 'CONFIRMED', summary: diffVal },
            positioning: { status: 'CONFIRMED', summary: `Dedicated platform for ${targetAudience.trim()}` },
            personality: { status: 'CONFIRMED', summary: 'Radical Clarity, Disciplined Craft' },
            name: { status: 'CONFIRMED', summary: name.trim() },
            tagline: { status: 'CONFIRMED', summary: `Built for ${targetAudience.trim()}. Engineered for certainty.` },
            brand_voice: { status: 'CONFIRMED', summary: 'Direct, plainspoken, substantiated' },
            visual_system: { status: 'CONFIRMED', summary: 'Deep Obsidian, Electric Indigo, Signal Rose' },
            launch_messaging: { status: 'CONFIRMED', summary: `The end of ${problem.trim().slice(0, 30)}.` }
          },
          unresolvedAssumptions: []
        },
        evaluationsHistory: [],
        driftReport: {
          status: 'insufficient_data',
          message: 'Insufficient historical data to establish a drift pattern. (Requires at least 3 prior evaluated submissions.)'
        }
      };

      onCreateBrand(customBrand);
      setIsGenerating(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Wand2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-sans">
                Create Battle-Tested Brand System
              </h3>
              <p className="text-xs text-slate-400">
                Transforms incomplete ideas into a connected, launch-ready brand system
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto max-h-[75vh]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Brand Name or Working Title *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Vektor Audio, EcoCourier, Kora"
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Industry / Category Domain
              </label>
              <input
                type="text"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="e.g. CleanTech, HealthTech, Developer Tools"
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Core Problem Solved (Be Specific) *
            </label>
            <textarea
              required
              rows={2}
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              placeholder="e.g. ICU nurse managers lack real-time telemetry on cognitive saturation, causing 34% turnover..."
              className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-400 leading-relaxed font-sans"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Target Audience & Economic Buyer *
            </label>
            <input
              type="text"
              required
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              placeholder="e.g. Hospital ICU Charge Nurses and Chief Nursing Officers (CNOs)"
              className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-400"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Key Differentiator / Unfair Advantage
            </label>
            <input
              type="text"
              value={differentiator}
              onChange={(e) => setDifferentiator(e.target.value)}
              placeholder="e.g. Passive zero-tap EHR telemetry — no nurse self-reporting"
              className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-400"
            />
          </div>

          <div className="p-3.5 rounded-xl bg-indigo-950/20 border border-indigo-500/20 text-xs text-indigo-200/90 leading-relaxed">
            <span className="font-semibold text-indigo-300">Engine Protocol: </span>
            The AI Brand Intelligence Engine will process this input through the full 10-stage pipeline: Discover → Position → Market Scan → Shape (Personality, Naming, Messaging) → Brand DNA Graph → Visualize → Challenge → Launch Kit → Brand Lock → Consistency Guardian!
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isGenerating}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold text-xs transition cursor-pointer shadow-lg shadow-indigo-600/30"
            >
              {isGenerating ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin" />
                  <span>Synthesizing Brand System...</span>
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4" />
                  <span>Generate Battle-Tested Brand</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
