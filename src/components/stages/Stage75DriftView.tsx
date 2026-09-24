import React from 'react';
import { BrandSystem, GuardianEvaluation } from '../../types/brand';
import { calculateBrandDrift } from '../../services/brandEngine';
import { 
  Activity, 
  AlertTriangle, 
  ShieldCheck, 
  TrendingDown, 
  TrendingUp, 
  Clock, 
  Info,
  Database,
  ArrowRight
} from 'lucide-react';

interface Props {
  brand: BrandSystem;
  onUpdateBrand: (updated: BrandSystem) => void;
  onNavigateToGuardian: () => void;
}

export const Stage75DriftView: React.FC<Props> = ({ 
  brand, 
  onUpdateBrand,
  onNavigateToGuardian
}) => {
  const evaluations = brand.evaluationsHistory;
  const driftReport = brand.driftReport;

  // Seeder for demoing with limited time (labeled explicitly per prompt rule)
  const handleSeedSampleData = () => {
    const seedEvaluations: GuardianEvaluation[] = [
      {
        id: 'seed-1',
        timestamp: '2026-09-24T10:00:00Z',
        submittedContent: 'In high-acuity ICUs, cognitive debt compounds with every emergency alarm. Kora gives charge nurses ambient telemetry to rebalance assignments before clinicians break.',
        contentType: 'ad_copy',
        overallAlignmentScore: 9.4,
        breakdown: {
          voiceAlignment: 9,
          positioningAdherence: 9,
          differentiatorPresence: 9,
          audienceSpecificity: 10,
          clicheAvoidance: 10
        },
        lineByLineFeedback: [
          {
            lineText: 'In high-acuity ICUs, cognitive debt compounds with every alarm...',
            status: 'pass',
            feedback: 'Clinically grounded, precise target audience.'
          }
        ],
        avoidRuleViolations: [],
        intentPreservingRewrites: []
      },
      {
        id: 'seed-2',
        timestamp: '2026-09-24T11:30:00Z',
        submittedContent: 'Our smart shift software optimizes clinical hospital workflows and manages nurse shifts.',
        contentType: 'social_post',
        overallAlignmentScore: 5.6,
        breakdown: {
          voiceAlignment: 5,
          positioningAdherence: 5,
          differentiatorPresence: 4,
          audienceSpecificity: 6,
          clicheAvoidance: 7
        },
        lineByLineFeedback: [
          {
            lineText: 'Our smart shift software optimizes clinical hospital workflows...',
            status: 'warning',
            feedback: 'Loss of passive telemetry differentiator. Generic software framing.'
          }
        ],
        avoidRuleViolations: ['Vague optimization buzzword without clinical telemetry proof'],
        intentPreservingRewrites: []
      },
      {
        id: 'seed-3',
        timestamp: '2026-09-24T13:45:00Z',
        submittedContent: 'Empower healthcare heroes with next-gen AI to slash nurse overhead costs and maximize hospital margins!',
        contentType: 'pitch_line',
        overallAlignmentScore: 2.4,
        breakdown: {
          voiceAlignment: 2,
          positioningAdherence: 2,
          differentiatorPresence: 1,
          audienceSpecificity: 3,
          clicheAvoidance: 2
        },
        lineByLineFeedback: [
          {
            lineText: 'Empower healthcare heroes with next-gen AI...',
            status: 'fail',
            feedback: 'Banned clichés: "healthcare heroes", "next-gen AI". Toxic labor cost-cutting framing.'
          }
        ],
        avoidRuleViolations: [
          'Used prohibited term: "healthcare heroes"',
          'Used prohibited term: "next-gen"',
          'Cost-cutting framing violating Communication Principle #2'
        ],
        intentPreservingRewrites: []
      }
    ];

    const updatedDrift = calculateBrandDrift(seedEvaluations);

    onUpdateBrand({
      ...brand,
      evaluationsHistory: seedEvaluations,
      driftReport: updatedDrift
    });
  };

  const handleResetData = () => {
    const updatedHistory: GuardianEvaluation[] = [];
    const updatedDrift = calculateBrandDrift(updatedHistory);

    onUpdateBrand({
      ...brand,
      evaluationsHistory: updatedHistory,
      driftReport: updatedDrift
    });
  };

  const hasSufficientData = evaluations.length >= 3;

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Stage Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
              Stage 7.5 // Brand Drift Detector
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Multi-Submission Drift Telemetry & Trend Analysis
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Monitors systemic brand degradation across time: rising corporate language, cliché creep, and differentiator dilution.
          </p>
        </div>

        {/* Data Honesty Seeder Controls */}
        <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800 text-xs">
          <span className="text-slate-400 px-2 font-mono">Evaluations: {evaluations.length}</span>
          {!hasSufficientData ? (
            <button
              type="button"
              onClick={handleSeedSampleData}
              className="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition cursor-pointer flex items-center gap-1.5"
            >
              <Database className="w-3.5 h-3.5" />
              <span>Load 3 Sample Historical Posts</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleResetData}
              className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition cursor-pointer"
            >
              Reset to 0 Submissions
            </button>
          )}
        </div>
      </div>

      {/* Strict Data Honesty Guardrail */}
      {!hasSufficientData ? (
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6 text-center max-w-2xl mx-auto my-8">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
            <Activity className="w-7 h-7" />
          </div>

          <div className="space-y-3">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/30">
              Data Honesty Protocol Active
            </span>
            <blockquote className="text-lg font-mono font-bold text-slate-100 bg-slate-950 p-4 rounded-xl border border-slate-800">
              Insufficient historical data to establish a drift pattern.<br />
              <span className="text-sm font-normal text-slate-400">
                (Requires at least 3 prior evaluated submissions.)
              </span>
            </blockquote>
            <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-md mx-auto">
              The engine will never fabricate or hallucinate a trend from 1 or 2 data points. Submit content through the Consistency Guardian or click below to load explicitly-labeled sample posts for demo testing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleSeedSampleData}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition"
            >
              <Database className="w-3.5 h-3.5" />
              <span>Seed 3 Sample Posts (Clearly Labeled Demo)</span>
            </button>

            <button
              type="button"
              onClick={onNavigateToGuardian}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition"
            >
              <span>Go to Consistency Guardian</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : (
        /* Multi-Submission Drift Report */
        <div className="space-y-6">
          {/* Diagnostic Notice */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-sky-400" />
              <span>
                Diagnostic Status: Diagnostic check against locked brand rules. Not a prediction of market or business performance.
              </span>
            </div>
            {driftReport.sampleDataNotice && (
              <span className="text-amber-400 hidden sm:inline">
                [{driftReport.sampleDataNotice}]
              </span>
            )}
          </div>

          {/* Drift Status Banner */}
          <div className={`p-6 rounded-2xl border flex flex-col md:flex-row md:items-center justify-between gap-6 ${
            driftReport.status === 'drift_detected'
              ? 'bg-rose-950/20 border-rose-500/40 text-rose-100'
              : 'bg-emerald-950/20 border-emerald-500/40 text-emerald-100'
          }`}>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono uppercase font-bold border ${
                  driftReport.status === 'drift_detected'
                    ? 'bg-rose-500/20 text-rose-300 border-rose-500/30'
                    : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                }`}>
                  {driftReport.direction?.replace('_', ' ').toUpperCase()} // SEVERITY: {driftReport.severity?.toUpperCase()}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white font-sans">
                {driftReport.message}
              </h3>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <div className="text-[10px] font-mono text-slate-400">Sample History</div>
                <div className="text-lg font-bold text-white font-mono">{evaluations.length} Posts</div>
              </div>
            </div>
          </div>

          {/* Forensic Evidence & Recommended Correction */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-white font-sans flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span>Forensic Drift Evidence Detected</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {driftReport.evidence?.map((item, idx) => (
                  <li key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-2.5 leading-relaxed">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 space-y-4">
              <h4 className="text-sm font-bold text-white font-sans flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                <span>Recommended System Correction</span>
              </h4>
              <div className="p-4 rounded-xl bg-slate-950/70 border border-indigo-500/20 text-xs text-slate-200 leading-relaxed font-sans">
                {driftReport.recommendedCorrection}
              </div>
              <div className="pt-2 text-[11px] font-mono text-slate-400">
                Action: Update campaign briefing document to require validation prior to launch.
              </div>
            </div>
          </div>

          {/* Brand Health History Chart (Interactive Adherence Graph) */}
          {driftReport.trendScores && (
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-2">
                <div>
                  <h4 className="text-sm font-bold text-white font-sans">
                    Brand Health History (Multi-Submission Adherence Trend)
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Measures adherence to defined brand system, not business success.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                  <span className="flex items-center gap-1 text-indigo-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" /> Alignment
                  </span>
                  <span className="flex items-center gap-1 text-sky-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-500" /> Voice
                  </span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Differentiator
                  </span>
                </div>
              </div>

              {/* Visual Multi-Point Sparklines */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {evaluations.map((evalItem, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">Submission 0{idx + 1}</span>
                      <span className={`px-2 py-0.5 rounded font-bold ${
                        evalItem.overallAlignmentScore >= 8 
                          ? 'bg-emerald-500/20 text-emerald-400' 
                          : evalItem.overallAlignmentScore >= 6 
                          ? 'bg-amber-500/20 text-amber-400' 
                          : 'bg-rose-500/20 text-rose-400'
                      }`}>
                        {evalItem.overallAlignmentScore}/10
                      </span>
                    </div>

                    <div className="space-y-1.5 text-[11px]">
                      <div className="flex justify-between text-slate-400">
                        <span>Voice:</span>
                        <span className="font-mono text-slate-200">{evalItem.breakdown.voiceAlignment}/10</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Positioning:</span>
                        <span className="font-mono text-slate-200">{evalItem.breakdown.positioningAdherence}/10</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Differentiator:</span>
                        <span className="font-mono text-slate-200">{evalItem.breakdown.differentiatorPresence}/10</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-500 truncate">
                      "{evalItem.submittedContent}"
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
