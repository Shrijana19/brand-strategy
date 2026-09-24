import React from 'react';
import { IdeaUnderstanding } from '../../types/brand';
import { StrategistSkepticExchange } from '../StrategistSkepticExchange';
import { ProvenanceBadge } from '../ProvenanceBadge';
import { ScoreCard } from '../ScoreCard';
import { HelpCircle, AlertCircle, CheckCircle, Lightbulb } from 'lucide-react';

interface Props {
  data: IdeaUnderstanding;
}

export const Stage1DiscoverView: React.FC<Props> = ({ data }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Stage Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
              Stage 1.0 // Discover & Understand
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Problem Identification & Audience Grounding
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Understand the core problem before designing visual assets. Prove it survives contact with a critic.
          </p>
        </div>

        <ScoreCard score={data.score} title="Problem Framing Score" compact />
      </div>

      {/* Dual Persona Loop */}
      <StrategistSkepticExchange 
        exchange={data.exchange} 
        stageName="Stage 1: Problem Framing"
      />

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Core Problem */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-400" />
              Core Problem
            </h3>
            <ProvenanceBadge field={data.problem} />
          </div>
          <p className="text-sm text-slate-300 leading-relaxed font-sans bg-slate-950/50 p-4 rounded-xl border border-slate-800/80">
            {data.problem.value}
          </p>
        </div>

        {/* Target User */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Target User & Buyer
            </h3>
            <ProvenanceBadge field={data.targetUser} />
          </div>
          <p className="text-sm text-slate-300 leading-relaxed font-sans bg-slate-950/50 p-4 rounded-xl border border-slate-800/80">
            {data.targetUser.value}
          </p>
        </div>

        {/* Market Context */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-200">
              Macro & Regulatory Context
            </h3>
            <ProvenanceBadge field={data.context} />
          </div>
          <p className="text-sm text-slate-300 leading-relaxed font-sans bg-slate-950/50 p-4 rounded-xl border border-slate-800/80">
            {data.context.value}
          </p>
        </div>

        {/* Potential Economic Value */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              Potential Economic Value
            </h3>
            <ProvenanceBadge field={data.potentialValue} />
          </div>
          <p className="text-sm text-slate-300 leading-relaxed font-sans bg-slate-950/50 p-4 rounded-xl border border-slate-800/80">
            {data.potentialValue.value}
          </p>
        </div>
      </div>

      {/* Constraints & Assumptions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-200">Hard Operational Constraints</h3>
            <ProvenanceBadge field={data.constraints} />
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            {data.constraints.value.map((constraint, i) => (
              <li key={i} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/60">
                <span className="text-rose-400 font-mono font-bold">•</span>
                <span className="leading-relaxed">{constraint}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-200">Existing AI Assumptions</h3>
            <ProvenanceBadge field={data.existingAssumptions} />
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            {data.existingAssumptions.value.map((assumption, i) => (
              <li key={i} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/60">
                <span className="text-amber-400 font-mono font-bold">•</span>
                <span className="leading-relaxed">{assumption}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Open Questions (Only 3-4 High Value Questions Allowed) */}
      <div className="p-6 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 space-y-4">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-indigo-400" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
            High-Value Open Questions (Pre-Brand Validation)
          </h3>
        </div>
        <p className="text-xs text-indigo-200/80">
          The engine asks only the 3–4 highest-value questions. Naming, visual, and identity work are held until these fundamentals are understood.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {data.openQuestions.map((q, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-900/80 border border-indigo-500/20 text-xs text-slate-200 leading-relaxed flex flex-col justify-between">
              <span className="font-mono text-indigo-400 font-bold mb-2">Q0{i + 1} //</span>
              <p>{q}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
