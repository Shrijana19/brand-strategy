import React, { useState } from 'react';
import { BrandShape } from '../../types/brand';
import { StrategistSkepticExchange } from '../StrategistSkepticExchange';
import { ProvenanceBadge } from '../ProvenanceBadge';
import { ScoreCard } from '../ScoreCard';
import { 
  Sparkles, 
  MessageSquare, 
  ShieldAlert, 
  Layers, 
  Copy, 
  Check, 
  AlertCircle 
} from 'lucide-react';

interface Props {
  data: BrandShape;
}

export const Stage3ShapeView: React.FC<Props> = ({ data }) => {
  const [copiedTagline, setCopiedTagline] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTagline(text);
    setTimeout(() => setCopiedTagline(null), 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Stage Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
              Stage 3.0 // Shape the Brand
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Personality Architecture, Naming Territories & Messaging
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Interdependent creative triangulation: Personality, Naming, and Messaging evaluated in a unified pass.
          </p>
        </div>

        <ScoreCard score={data.score} title="Brand Shape Score" compact />
      </div>

      {/* Dual Persona Loop */}
      <StrategistSkepticExchange 
        exchange={data.exchange} 
        stageName="Stage 3: Shape Triangulation (A+B+C)"
      />

      {/* Section A: Personality Traits */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded font-mono text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
              Part A
            </span>
            <h3 className="text-lg font-bold text-white font-sans">
              Brand Personality Architecture (Non-Generic)
            </h3>
          </div>
          <ProvenanceBadge field={data.personality} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.personality.value.map((trait, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-base font-bold text-sky-300 font-sans">{trait.trait}</h4>
                  <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-slate-400 font-semibold">Why it fits audience:</span>
                    <p className="text-slate-200 mt-0.5 leading-relaxed">{trait.whyItFitsAudience}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 font-semibold">How it shows up in copy:</span>
                    <p className="text-slate-300 mt-0.5 leading-relaxed">{trait.howItShowsUp}</p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-bold block mb-1">
                  Adjacent Trait to Avoid:
                </span>
                <p className="text-xs text-rose-200/90 italic">
                  "{trait.adjacentTraitToAvoid}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section B: Naming Territories */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded font-mono text-xs font-bold bg-sky-500/10 text-sky-400 border border-sky-500/30">
              Part B
            </span>
            <h3 className="text-lg font-bold text-white font-sans">
              Strategically Distinct Naming Territories
            </h3>
          </div>
          <ProvenanceBadge field={data.selectedName} />
        </div>

        {/* Selected Approved Name Display */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-sky-950/40 via-slate-900 to-indigo-950/40 border border-sky-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-sky-400 font-bold">
              Approved Brand Name
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1 tracking-tight font-sans">
              {data.selectedName.value}
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              {data.selectedName.rationale}
            </p>
          </div>

          <div className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 max-w-xs font-mono">
            {data.trademarkDisclaimer}
          </div>
        </div>

        {/* Territories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.namingTerritories.map((t, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-mono text-slate-400 font-bold block mb-1">
                  Territory {idx + 1}
                </span>
                <h4 className="text-sm font-bold text-white font-sans mb-2">{t.territoryName}</h4>
                <p className="text-xs text-slate-300 mb-3 leading-relaxed">{t.concept}</p>

                <div className="mb-4">
                  <span className="text-[11px] font-mono text-slate-400 block mb-1.5">Candidate Names:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {t.exampleNames.map((name, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-mono text-sky-300 font-medium">
                        {name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-slate-400 font-semibold">Strategic Rationale:</span>
                    <p className="text-slate-300 mt-0.5">{t.reasoning}</p>
                  </div>
                  <div>
                    <span className="text-rose-400 font-semibold">Inherent Weaknesses:</span>
                    <p className="text-slate-300 mt-0.5">{t.weaknesses}</p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono">
                Relation: {t.relationshipToPositioning}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section C: Messaging Suite */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded font-mono text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              Part C
            </span>
            <h3 className="text-lg font-bold text-white font-sans">
              Messaging Architecture & Voice Blueprint
            </h3>
          </div>
          <ProvenanceBadge field={data.messaging.selectedTagline} />
        </div>

        {/* Selected Tagline Hero */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-emerald-500/30 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Primary Battle-Tested Tagline
            </span>
            <button
              type="button"
              onClick={() => handleCopy(data.messaging.selectedTagline.value)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              title="Copy tagline"
            >
              {copiedTagline === data.messaging.selectedTagline.value ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
          <blockquote className="text-xl md:text-2xl font-bold text-white tracking-tight italic">
            "{data.messaging.selectedTagline.value}"
          </blockquote>

          {/* Tagline Options */}
          <div className="pt-3 border-t border-slate-800">
            <span className="text-xs font-mono text-slate-400 block mb-2">Alternative Tagline Candidates:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {data.messaging.taglines.value.map((t, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between text-slate-300">
                  <span>"{t}"</span>
                  <button 
                    type="button" 
                    onClick={() => handleCopy(t)}
                    className="text-slate-500 hover:text-slate-300 ml-2"
                  >
                    {copiedTagline === t ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* One-Line Pitch & Core Message */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold uppercase text-slate-400">One-Line Pitch</span>
              <ProvenanceBadge field={data.messaging.oneLinePitch} />
            </div>
            <p className="text-sm text-slate-200 leading-relaxed font-sans">{data.messaging.oneLinePitch.value}</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold uppercase text-slate-400">Core Narrative Message</span>
              <ProvenanceBadge field={data.messaging.coreMessage} />
            </div>
            <p className="text-sm text-slate-200 leading-relaxed font-sans">{data.messaging.coreMessage.value}</p>
          </div>
        </div>

        {/* Brand Voice & Communication Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-slate-200">Brand Voice Guardrails</h4>
              <ProvenanceBadge field={data.messaging.brandVoice} />
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {data.messaging.brandVoice.value.map((v, i) => (
                <li key={i} className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 flex items-start gap-2.5 leading-relaxed">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-slate-200">Communication Principles</h4>
              <ProvenanceBadge field={data.messaging.communicationPrinciples} />
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {data.messaging.communicationPrinciples.value.map((p, i) => (
                <li key={i} className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 flex items-start gap-2.5 leading-relaxed">
                  <span className="text-amber-400 font-bold">⚠️</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
