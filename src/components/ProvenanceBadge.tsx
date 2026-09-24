import React, { useState } from 'react';
import { ProvenanceField, ProvenanceSource } from '../types/brand';
import { Info, User, Sparkles, BrainCircuit, ExternalLink } from 'lucide-react';

interface Props {
  field?: ProvenanceField<any>;
  source?: ProvenanceSource;
  confidence?: 'high' | 'medium' | 'low';
  rationale?: string;
  inline?: boolean;
}

export const ProvenanceBadge: React.FC<Props> = ({
  field,
  source: explicitSource,
  confidence: explicitConfidence,
  rationale: explicitRationale,
  inline = false
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const source = field?.source || explicitSource || 'ai_recommendation';
  const confidence = field?.confidence || explicitConfidence || 'medium';
  const rationale = field?.rationale || explicitRationale || 'Derived from brand system rules.';

  const sourceConfigs = {
    user_provided: {
      label: 'User Provided',
      icon: User,
      bg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/20',
      dot: 'bg-emerald-400'
    },
    ai_assumption: {
      label: 'AI Assumption',
      icon: BrainCircuit,
      bg: 'bg-amber-500/10 text-amber-300 border-amber-500/30 hover:bg-amber-500/20',
      dot: 'bg-amber-400'
    },
    ai_recommendation: {
      label: 'AI Recommendation',
      icon: Sparkles,
      bg: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30 hover:bg-indigo-500/20',
      dot: 'bg-indigo-400'
    },
    unverified_external: {
      label: 'Unverified External',
      icon: ExternalLink,
      bg: 'bg-rose-500/10 text-rose-300 border-rose-500/30 hover:bg-rose-500/20',
      dot: 'bg-rose-400'
    }
  };

  const config = sourceConfigs[source];
  const IconComponent = config.icon;

  const confidenceColors = {
    high: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
    medium: 'text-amber-400 border-amber-500/40 bg-amber-500/10',
    low: 'text-rose-400 border-rose-500/40 bg-rose-500/10'
  };

  return (
    <div className={`relative inline-flex items-center ${inline ? 'ml-2' : ''}`}>
      <button
        type="button"
        onClick={() => setShowTooltip(!showTooltip)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-mono font-medium border transition-all cursor-pointer ${config.bg}`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
        <IconComponent className="w-3 h-3" />
        <span>{config.label}</span>
      </button>

      {showTooltip && (
        <div className="absolute z-50 bottom-full left-0 mb-2 w-72 p-3 rounded-xl bg-slate-900/95 border border-slate-700/80 shadow-2xl backdrop-blur-md text-xs text-slate-200 pointer-events-none transform animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
            <span className="font-semibold text-slate-300 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-indigo-400" />
              Provenance Schema
            </span>
            <span className={`px-1.5 py-0.5 rounded font-mono text-[10px] uppercase font-bold border ${confidenceColors[confidence]}`}>
              {confidence} confidence
            </span>
          </div>
          <p className="text-slate-300 leading-relaxed font-sans">
            <span className="text-slate-400 font-medium">Rationale: </span>
            {rationale}
          </p>
        </div>
      )}
    </div>
  );
};
