export type ProvenanceSource = 
  | 'user_provided' 
  | 'ai_assumption' 
  | 'ai_recommendation' 
  | 'unverified_external';

export type ConfidenceLevel = 'high' | 'medium' | 'low';

export interface ProvenanceField<T = string> {
  value: T;
  source: ProvenanceSource;
  confidence: ConfidenceLevel;
  rationale: string;
}

export interface DistinctivenessScore {
  clicheDensity: number; // 1-10 (lower cliché = higher score)
  audienceFit: number;   // 1-10
  differentiation: number; // 1-10
  overall: number;
  revisionCycles: number;
  belowThresholdFlag?: {
    isTriggered: boolean;
    reason: string;
  };
}

export interface PersonaExchange {
  strategistProposal: string;
  skepticCritique: string;
  skepticCertifiedNoWeakness?: boolean;
  strategistRevision: string;
  beforeScore: DistinctivenessScore;
  afterScore: DistinctivenessScore;
  escapeValveFlag?: string;
}

// Stage 1
export interface IdeaUnderstanding {
  problem: ProvenanceField;
  targetUser: ProvenanceField;
  context: ProvenanceField;
  constraints: ProvenanceField<string[]>;
  existingAssumptions: ProvenanceField<string[]>;
  potentialValue: ProvenanceField;
  openQuestions: string[];
  exchange: PersonaExchange;
  score: DistinctivenessScore;
}

// Stage 2
export interface PositioningSystem {
  category: ProvenanceField;
  problem: ProvenanceField;
  targetAudience: ProvenanceField;
  valueProposition: ProvenanceField;
  differentiator: ProvenanceField;
  competitiveAngle: ProvenanceField;
  positioningStatement: ProvenanceField;
  whatThisShouldNotTryToBe: ProvenanceField<string[]>;
  exchange: PersonaExchange;
  score: DistinctivenessScore;
}

// Stage 2.5
export interface CompetitorScan {
  scanStatus: 'completed' | 'unavailable';
  observedPatterns: ProvenanceField<string[]>;
  positioningOverlap: ProvenanceField<string[]>;
  namingOverlap: ProvenanceField<string[]>;
  messagingOverlap: ProvenanceField<string[]>;
  visualOverlap: ProvenanceField<string[]>;
  potentialGaps: ProvenanceField<string[]>;
  verificationNeeded: ProvenanceField<string[]>;
  skepticChallenge?: string;
}

// Stage 3
export interface PersonalityTrait {
  trait: string;
  whyItFitsAudience: string;
  howItShowsUp: string;
  adjacentTraitToAvoid: string;
}

export interface NamingTerritory {
  territoryName: string;
  concept: string;
  exampleNames: string[];
  reasoning: string;
  weaknesses: string;
  relationshipToPositioning: string;
}

export interface MessagingSuite {
  taglines: ProvenanceField<string[]>;
  selectedTagline: ProvenanceField;
  oneLinePitch: ProvenanceField;
  coreMessage: ProvenanceField;
  supportingMessages: ProvenanceField<string[]>;
  brandVoice: ProvenanceField<string[]>;
  communicationPrinciples: ProvenanceField<string[]>;
}

export interface BrandShape {
  personality: ProvenanceField<PersonalityTrait[]>;
  namingTerritories: NamingTerritory[];
  selectedName: ProvenanceField;
  messaging: MessagingSuite;
  trademarkDisclaimer: string;
  exchange: PersonaExchange;
  score: DistinctivenessScore;
}

// Stage 3.5: Brand DNA Graph
export type DnaNodeType = 
  | 'target_audience'
  | 'problem'
  | 'context'
  | 'value_proposition'
  | 'differentiator'
  | 'positioning'
  | 'personality'
  | 'name'
  | 'tagline'
  | 'brand_voice'
  | 'visual_system'
  | 'launch_messaging';

export interface DnaNode {
  id: DnaNodeType;
  label: string;
  summary: string;
  upstreamDependencies: DnaNodeType[];
  downstreamDependencies: DnaNodeType[];
  contradictionRisks: string[];
  regeneratesIfChanged: string[];
  status: 'CONFIRMED' | 'RECOMMENDED' | 'UNVERIFIED';
}

export interface CausalDiff {
  changedNode: string;
  previousValue: string;
  newValue: string;
  downstreamEffects: string[];
  explanation: string;
  timestamp: string;
}

// Stage 4: Visual System
export interface ColorToken {
  name: string;
  hex: string;
  role: 'primary' | 'accent' | 'surface' | 'void' | 'contrast';
  contrastRatio: string;
  mood: string;
}

export interface TypographyToken {
  role: 'heading' | 'body' | 'accent';
  fontFamily: string;
  weight: string;
  sampleText: string;
  usageNotes: string;
}

export interface VisualSystem {
  logoDirection: ProvenanceField;
  wordmarkStyle: ProvenanceField;
  svgLogoCode: string;
  typography: TypographyToken[];
  colorPalette: ColorToken[];
  shapesAndForms: ProvenanceField<string[]>;
  imageryStyle: ProvenanceField;
  compositionLayout: ProvenanceField;
  symbolsAndMetaphors: ProvenanceField<string[]>;
  elementsToAvoid: ProvenanceField<string[]>; // e.g. generic AI glowing purple blobs
  exchange: PersonaExchange;
  score: DistinctivenessScore;
}

// Stage 5: Cross-Stage Challenge
export interface CrossStageFinding {
  problemArea: string;
  currentElement: string;
  weaknessRationale: string;
  scoreDimensionImpacted: 'clicheDensity' | 'audienceFit' | 'differentiation';
  proposedAlternative: string;
  whyStronger: string;
  revisedOutcome: string;
  downstreamEffects: string[];
}

export interface CrossStageChallenge {
  findings: CrossStageFinding[];
  exchange: PersonaExchange;
  score: DistinctivenessScore;
}

// Stage 6: Launch & Consistency Check
export interface BrandConsistencyCheck {
  conflictsDetected: {
    nodeA: string;
    nodeB: string;
    conflictDescription: string;
    correctionProposed: string;
  }[];
  passedSanityCheck: boolean;
}

export interface LaunchKit {
  landingPageHeadline: ProvenanceField;
  landingPageSubhead: ProvenanceField;
  oneLinePitch: ProvenanceField;
  shortProductDescription: ProvenanceField;
  socialLaunchPost: ProvenanceField;
  launchEmailSubject: ProvenanceField;
  launchEmailBody: ProvenanceField;
  finalBrandSummary: ProvenanceField;
  score: DistinctivenessScore;
}

// Stage 6.5: Locked Brand DNA
export interface LockedBrandDNA {
  isLocked: boolean;
  lockedAt?: string;
  brandName: string;
  confirmedAudience: string;
  problem: string;
  positioning: string;
  differentiator: string;
  personality: PersonalityTrait[];
  tagline: string;
  brandVoice: string[];
  communicationPrinciples: string[];
  visualRules: string[];
  visualAvoidRules: string[];
  messagingRules: string[];
  prohibitedCliches: string[];
  marketDistinctions: string[];
  nodes: Record<DnaNodeType, { status: 'CONFIRMED' | 'RECOMMENDED' | 'UNVERIFIED'; summary: string }>;
  unresolvedAssumptions: string[];
}

// Stage 7: Consistency Guardian
export interface GuardianEvaluation {
  id: string;
  timestamp: string;
  submittedContent: string;
  contentType: 'social_post' | 'ad_copy' | 'landing_page' | 'email' | 'pitch_line' | 'other';
  overallAlignmentScore: number; // 1-10
  breakdown: {
    voiceAlignment: number;
    positioningAdherence: number;
    differentiatorPresence: number;
    audienceSpecificity: number;
    clicheAvoidance: number;
  };
  lineByLineFeedback: {
    lineText: string;
    status: 'pass' | 'warning' | 'fail';
    feedback: string;
    ruleViolated?: string;
  }[];
  avoidRuleViolations: string[];
  intentPreservingRewrites: string[];
}

// Stage 7.5: Brand Drift Detector
export interface BrandDriftReport {
  status: 'insufficient_data' | 'drift_detected' | 'healthy_alignment';
  message: string;
  sampleDataNotice?: string;
  direction?: 'corporate_inflation' | 'differentiation_loss' | 'audience_dilution' | 'cliche_creep' | 'stable';
  affectedDimensions?: string[];
  evidence?: string[];
  severity?: 'none' | 'low' | 'moderate' | 'critical';
  recommendedCorrection?: string;
  trendScores?: {
    alignment: number[];
    voice: number[];
    positioning: number[];
    differentiator: number[];
    audienceSpecificity: number[];
    timestamps: string[];
  };
}

// Complete Brand System Bundle
export interface BrandSystem {
  id: string;
  name: string;
  industry: string;
  stage1Discover: IdeaUnderstanding;
  stage2Position: PositioningSystem;
  stage25MarketScan: CompetitorScan;
  stage3Shape: BrandShape;
  stage35Graph: DnaNode[];
  causalDiffHistory: CausalDiff[];
  stage4Visualize: VisualSystem;
  stage5Challenge: CrossStageChallenge;
  stage6Launch: LaunchKit;
  consistencyCheck: BrandConsistencyCheck;
  stage65LockedDNA: LockedBrandDNA;
  evaluationsHistory: GuardianEvaluation[];
  driftReport: BrandDriftReport;
}
