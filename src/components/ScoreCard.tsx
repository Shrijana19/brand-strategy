import React from 'react';
import { DistinctivenessScore } from '../types/brand';
import { ShieldAlert, Award, RefreshCw } from 'lucide-react';

interface Props {
  score: DistinctivenessScore;
  title?: string;
  compact?: boolean;
}

export const ScoreCard: React.FC<Props> = ({ score, title = 'Distinctiveness & Fit Score', compact = false }) => {
  const getScoreColor = (val: number) => {
    if (val >= 8) return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
    if (val >= 6) return 'text-sky-400 border-sky-500/30 bg-sky-500/10';
    if (val >= 4) return 'text-amber-400 border-amber-500/30 bg-amber-500/10';
    return 'text-rose-400 border-rose-500/30 bg-rose-500/10';
  };

  const getBarColor = (val: number) => {
    if (val >= 8) return 'bg-emerald-500';
    if (val >= 6) return 'bg-sky-500';
    if (val >= 4) return 'bg-amber-500';
    return 'bg-rose-500';
  };

  if (compact) {
    return (
      <div className="flex items-center gap-3 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs">
        <span className="text-slate-400 font-medium">Distinctiveness:</span>
        <span className={`px-2 py-0.5 rounded font-mono font-bold border ${getScoreColor(score.overall)}`}>
          {score.overall}/10
        </span>
        <span className="text-slate-500">|</span>
        <span className="text-slate-400">Cliché: <b className="text-slate-200">{score.clicheDensity}</b></span>
        <span className="text-slate-400">Fit: <b className="text-slate-200">{score.audienceFit}</b></span>
        <span className="text-slate-400">Diff: <b className="text-slate-200">{score.differentiation}</b></span>
      </div>
    );
  }

  return (
    <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 shadow-lg">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-indigo-400" />
          <h4 className="text-sm font-semibold text-slate-200">{title}</h4>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
            <RefreshCw className="w-3 h-3 text-slate-500" />
            {score.revisionCycles} {score.revisionCycles === 1 ? 'cycle' : 'cycles'}
          </span>
          <span className={`px-2.5 py-0.5 rounded-full font-mono text-xs font-bold border ${getScoreColor(score.overall)}`}>
            {score.overall} / 10
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {/* Metric 1 */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-300 font-medium">Cliché Density (Lower Jargon = Higher Score)</span>
            <span className="font-mono font-semibold text-slate-200">{score.clicheDensity}/10</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${getBarColor(score.clicheDensity)}`}
              style={{ width: `${score.clicheDensity * 10}%` }}
            />
          </div>
        </div>

        {/* Metric 2 */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-300 font-medium">Audience Fit (Target Specificity)</span>
            <span className="font-mono font-semibold text-slate-200">{score.audienceFit}/10</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${getBarColor(score.audienceFit)}`}
              style={{ width: `${score.audienceFit * 10}%` }}
            />
          </div>
        </div>

        {/* Metric 3 */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-300 font-medium">Differentiation (Category Contrast)</span>
            <span className="font-mono font-semibold text-slate-200">{score.differentiation}/10</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${getBarColor(score.differentiation)}`}
              style={{ width: `${score.differentiation * 10}%` }}
            />
          </div>
        </div>
      </div>

      {/* Escape Valve Warning Banner if applicable */}
      {score.belowThresholdFlag?.isTriggered && (
        <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-start gap-2.5 text-xs text-amber-200">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-amber-300">
              ⚠️ Below target threshold after 2 revisions
            </div>
            <div className="text-amber-200/90 mt-0.5 leading-relaxed">
              Reason: {score.belowThresholdFlag.reason}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
