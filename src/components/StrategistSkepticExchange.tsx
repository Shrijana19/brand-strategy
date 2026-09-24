import React, { useState } from 'react';
import { PersonaExchange } from '../types/brand';
import { Compass, AlertTriangle, Sparkles, CheckCircle2, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

interface Props {
  exchange: PersonaExchange;
  stageName?: string;
}

export const StrategistSkepticExchange: React.FC<Props> = ({ exchange, stageName = 'Stage Protocol' }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 overflow-hidden shadow-2xl backdrop-blur-md mb-8">
      {/* Header bar */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-6 py-4 bg-slate-900/80 border-b border-slate-800/80 cursor-pointer select-none hover:bg-slate-900 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <span className="w-7 h-7 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400 text-xs font-bold shadow-sm">
              S
            </span>
            <span className="w-7 h-7 rounded-full bg-rose-500/20 border border-rose-400/40 flex items-center justify-center text-rose-400 text-xs font-bold shadow-sm">
              K
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400">
                Cooperating Personas Loop
              </span>
              <span className="text-xs text-slate-500">•</span>
              <span className="text-xs text-slate-400 font-mono">
                STRATEGIST → SKEPTIC → STRATEGIST REVISION
              </span>
            </div>
            <h3 className="text-sm font-semibold text-slate-200">
              {stageName}: Creative Stress-Test Protocol
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono">
            <span className="text-slate-400">Before:</span>
            <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">
              {exchange.beforeScore.overall}
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-slate-400">After:</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
              {exchange.afterScore.overall}
            </span>
          </div>

          <button 
            type="button" 
            className="p-1 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition"
          >
            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Expandable Body */}
      {isOpen && (
        <div className="p-6 space-y-6">
          {/* Timeline Score Flow Banner */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-slate-400 font-medium">Protocol Audit Trail:</span>
              <span className="font-mono text-slate-300">
                Score {exchange.beforeScore.overall} (Initial)
              </span>
              <span className="text-slate-600">→</span>
              <span className="font-mono text-rose-300">
                Skeptic Challenge
              </span>
              <span className="text-slate-600">→</span>
              <span className="font-mono text-emerald-300">
                Refined Score {exchange.afterScore.overall} (+{(exchange.afterScore.overall - exchange.beforeScore.overall).toFixed(1)})
              </span>
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              Cap: Max 2 revision cycles per stage enforced
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* 1. STRATEGIST PROPOSAL */}
            <div className="p-5 rounded-xl border border-sky-500/30 bg-sky-950/20 flex flex-col justify-between relative group hover:border-sky-500/50 transition">
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/30 font-bold">
                1. Initial Proposal
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Compass className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-300 font-mono">
                    STRATEGIST
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {exchange.strategistProposal}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-sky-900/40 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Distinctiveness:</span>
                <span className="font-bold text-sky-400">{exchange.beforeScore.overall} / 10</span>
              </div>
            </div>

            {/* 2. SKEPTIC CRITIQUE */}
            <div className="p-5 rounded-xl border border-rose-500/30 bg-rose-950/20 flex flex-col justify-between relative group hover:border-rose-500/50 transition">
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-rose-500/10 text-rose-400 border border-rose-500/30 font-bold">
                2. Red Team Attack
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-300 font-mono">
                    SKEPTIC
                  </span>
                </div>
                {exchange.skepticCertifiedNoWeakness ? (
                  <div className="flex items-center gap-2 text-xs text-emerald-400 py-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>No material weaknesses found.</span>
                  </div>
                ) : (
                  <p className="text-xs text-rose-200/90 leading-relaxed font-sans">
                    {exchange.skepticCritique}
                  </p>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-rose-900/40 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Targets Tested:</span>
                <span className="font-bold text-rose-400">Clichés, Audience, Contrast</span>
              </div>
            </div>

            {/* 3. STRATEGIST REVISION */}
            <div className="p-5 rounded-xl border border-emerald-500/30 bg-emerald-950/20 flex flex-col justify-between relative group hover:border-emerald-500/50 transition">
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
                3. Battle-Tested Revision
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 font-mono">
                    STRATEGIST REVISION
                  </span>
                </div>
                <p className="text-xs text-emerald-100/95 leading-relaxed font-sans">
                  {exchange.strategistRevision}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-emerald-900/40 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Refined Score:</span>
                <span className="font-bold text-emerald-400">{exchange.afterScore.overall} / 10</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
