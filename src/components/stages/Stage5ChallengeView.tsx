import React from 'react';
import { CrossStageChallenge } from '../../types/brand';
import { StrategistSkepticExchange } from '../StrategistSkepticExchange';
import { ScoreCard } from '../ScoreCard';
import { 
  AlertOctagon, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldAlert,
  GitBranch
} from 'lucide-react';

interface Props {
  data: CrossStageChallenge;
}

export const Stage5ChallengeView: React.FC<Props> = ({ data }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Stage Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
              Stage 5.0 // Cross-Stage Challenge
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Consolidated Multi-Stage Stress Test
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            System-wide audit: Checks for contradictions, interchangeable messaging, and broken dependency links across Stages 1 through 4.
          </p>
        </div>

        <ScoreCard score={data.score} title="Consolidated Stress Score" compact />
      </div>

      {/* Dual Persona Exchange */}
      <StrategistSkepticExchange 
        exchange={data.exchange} 
        stageName="Stage 5: Cross-Stage Challenge"
      />

      {/* Causal Chain Findings */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertOctagon className="w-5 h-5 text-rose-400" />
            <h3 className="text-lg font-bold text-white font-sans">
              Consolidated Audit Findings & Full Causal Chains
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400">
            BEFORE → PROBLEM → CHANGE → AFTER → DOWNSTREAM EFFECTS
          </span>
        </div>

        <div className="space-y-6">
          {data.findings.map((finding, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5 shadow-xl"
            >
              {/* Finding Title Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold bg-rose-500/10 text-rose-400 border border-rose-500/30">
                    Finding #{idx + 1}
                  </span>
                  <h4 className="text-base font-bold text-white font-sans">
                    {finding.problemArea}
                  </h4>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="text-slate-400">Score Dimension Impacted:</span>
                  <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/30">
                    {finding.scoreDimensionImpacted}
                  </span>
                </div>
              </div>

              {/* Full Causal Chain Visual Flow */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* BEFORE (Weak / Cliché) */}
                <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-bold block">
                    1. Before (Detected Vulnerability)
                  </span>
                  <p className="text-xs text-rose-200 line-through italic">
                    "{finding.currentElement}"
                  </p>
                  <p className="text-xs text-rose-300/90 pt-2 border-t border-rose-900/40 leading-relaxed">
                    <span className="font-semibold">Weakness Rationale: </span>
                    {finding.weaknessRationale}
                  </p>
                </div>

                {/* AFTER (Battle-Tested Revision) */}
                <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                    2. After (Defended Revision)
                  </span>
                  <p className="text-xs text-emerald-200 font-medium">
                    "{finding.proposedAlternative}"
                  </p>
                  <p className="text-xs text-emerald-300/90 pt-2 border-t border-emerald-900/40 leading-relaxed">
                    <span className="font-semibold">Why Stronger: </span>
                    {finding.whyStronger}
                  </p>
                </div>
              </div>

              {/* Downstream Effects */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-indigo-300">
                  <GitBranch className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="font-mono font-semibold">Downstream Effects:</span>
                  <span className="text-slate-300">{finding.downstreamEffects.join(' • ')}</span>
                </div>

                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 font-semibold shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {finding.revisedOutcome}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
