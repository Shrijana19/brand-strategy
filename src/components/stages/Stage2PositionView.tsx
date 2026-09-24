import React from 'react';
import { PositioningSystem } from '../../types/brand';
import { StrategistSkepticExchange } from '../StrategistSkepticExchange';
import { ProvenanceBadge } from '../ProvenanceBadge';
import { ScoreCard } from '../ScoreCard';
import { Target, Ban, Sparkles, Compass } from 'lucide-react';

interface Props {
  data: PositioningSystem;
}

export const Stage2PositionView: React.FC<Props> = ({ data }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Stage Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
              Stage 2.0 // Position
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Category Anchor & Differentiator Defense
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Positioning must survive contact with a critic before presenting it. Do not invent competitors.
          </p>
        </div>

        <ScoreCard score={data.score} title="Positioning Score" compact />
      </div>

      {/* Dual Persona Loop */}
      <StrategistSkepticExchange 
        exchange={data.exchange} 
        stageName="Stage 2: Strategic Positioning"
      />

      {/* Official Positioning Statement Card */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-sky-950/40 border border-indigo-500/30 shadow-2xl relative overflow-hidden">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-indigo-400" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-white font-mono">
              Official Strategic Positioning Statement
            </h3>
          </div>
          <ProvenanceBadge field={data.positioningStatement} />
        </div>
        <blockquote className="text-lg md:text-xl font-medium text-slate-100 leading-relaxed font-sans italic pl-4 border-l-2 border-indigo-400">
          "{data.positioningStatement.value}"
        </blockquote>
      </div>

      {/* Positioning Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Category */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-semibold uppercase text-slate-400">Category Definition</span>
            <ProvenanceBadge field={data.category} />
          </div>
          <p className="text-sm font-semibold text-sky-400">{data.category.value}</p>
        </div>

        {/* Value Proposition */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-semibold uppercase text-slate-400">Value Proposition</span>
            <ProvenanceBadge field={data.valueProposition} />
          </div>
          <p className="text-sm text-slate-200 leading-relaxed">{data.valueProposition.value}</p>
        </div>

        {/* Differentiator */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-emerald-500/30 bg-emerald-950/10 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-semibold uppercase text-emerald-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Core Differentiator
            </span>
            <ProvenanceBadge field={data.differentiator} />
          </div>
          <p className="text-sm text-emerald-100 font-medium leading-relaxed">{data.differentiator.value}</p>
        </div>

        {/* Target Audience */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-semibold uppercase text-slate-400">Target Audience</span>
            <ProvenanceBadge field={data.targetAudience} />
          </div>
          <p className="text-sm text-slate-200 leading-relaxed">{data.targetAudience.value}</p>
        </div>

        {/* Competitive Angle */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 md:col-span-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-semibold uppercase text-slate-400 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-sky-400" />
              Competitive Contrast Angle
            </span>
            <ProvenanceBadge field={data.competitiveAngle} />
          </div>
          <p className="text-sm text-slate-200 leading-relaxed">{data.competitiveAngle.value}</p>
        </div>
      </div>

      {/* What This Brand Should NEVER Try To Be */}
      <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Ban className="w-5 h-5 text-rose-400" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-rose-300 font-mono">
              Boundary Enforcement: What This Brand Must NEVER Try To Be
            </h3>
          </div>
          <ProvenanceBadge field={data.whatThisShouldNotTryToBe} />
        </div>
        <p className="text-xs text-rose-200/80">
          Sharp boundaries prevent positioning dilution and mission drift.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {data.whatThisShouldNotTryToBe.value.map((rule, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-rose-500/30 text-xs text-slate-200 leading-relaxed flex items-start gap-2.5">
              <span className="text-rose-400 font-bold">✕</span>
              <span>{rule}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
