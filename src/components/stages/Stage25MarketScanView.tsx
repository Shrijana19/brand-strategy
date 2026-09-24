import React, { useState } from 'react';
import { CompetitorScan } from '../../types/brand';
import { ProvenanceBadge } from '../ProvenanceBadge';
import { Radar, AlertTriangle, ShieldCheck, CheckCircle2, RefreshCw } from 'lucide-react';

interface Props {
  data: CompetitorScan;
}

export const Stage25MarketScanView: React.FC<Props> = ({ data }) => {
  const [scanStatus, setScanStatus] = useState<'completed' | 'unavailable'>(data.scanStatus);

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Stage Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
              Stage 2.5 // Competitor & Market Scanner
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Market Overlap & Category Pattern Audit
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Diagnostic verification: Paraphrase competitor patterns. Tag all external findings unverified. Degrade gracefully if unavailable.
          </p>
        </div>

        {/* Live / Degraded State Toggle for Demonstration & Production Reliability */}
        <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800 text-xs">
          <span className="text-slate-400 px-2 font-mono">Scanner Mode:</span>
          <button
            type="button"
            onClick={() => setScanStatus('completed')}
            className={`px-3 py-1 rounded-lg font-medium transition cursor-pointer ${
              scanStatus === 'completed'
                ? 'bg-emerald-600 text-white font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Completed (Live)
          </button>
          <button
            type="button"
            onClick={() => setScanStatus('unavailable')}
            className={`px-3 py-1 rounded-lg font-medium transition cursor-pointer ${
              scanStatus === 'unavailable'
                ? 'bg-amber-600 text-white font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Unavailable (Degraded)
          </button>
        </div>
      </div>

      {/* Graceful Degradation View (Strictly following prompt specification) */}
      {scanStatus === 'unavailable' ? (
        <div className="p-8 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-6 h-6 text-amber-400" />
            </div>
            <div className="space-y-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                Graceful Degradation Protocol Active
              </span>
              <h3 className="text-lg font-bold text-amber-100">
                Market scan unavailable this run — proceeding without external verification.
              </h3>
              <p className="text-sm text-amber-200/90 leading-relaxed font-sans bg-amber-950/40 p-4 rounded-xl border border-amber-500/20">
                Positioning below is based on stated information only and has not been checked against real competitors.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-amber-900/40 text-xs text-amber-300/80 font-mono">
            <span>Stage 2.5 is diagnostic, never a blocking gate.</span>
            <span>Degrade honestly, never silently.</span>
          </div>
        </div>
      ) : (
        /* Completed Scan View */
        <div className="space-y-6">
          {/* Skeptic Challenge on Competitor Survivability */}
          {data.skepticChallenge && (
            <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-300 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                  Skeptic Market Survivability Challenge
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/30">
                  Critical Attack
                </span>
              </div>
              <p className="text-sm text-rose-100/95 leading-relaxed font-sans">
                "{data.skepticChallenge}"
              </p>
            </div>
          )}

          {/* Observed Patterns & Potential Gaps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-200">Observed Category Patterns</h3>
                <ProvenanceBadge field={data.observedPatterns} />
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {data.observedPatterns.value.map((pattern, idx) => (
                  <li key={idx} className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 flex items-start gap-2.5 leading-relaxed">
                    <span className="text-sky-400 font-bold">•</span>
                    <span>{pattern}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-950/15 border border-emerald-500/30 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-emerald-300">Uncontested Strategic Gaps</h3>
                <ProvenanceBadge field={data.potentialGaps} />
              </div>
              <ul className="space-y-2.5 text-xs text-emerald-100">
                {data.potentialGaps.value.map((gap, idx) => (
                  <li key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-emerald-500/30 flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{gap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Overlap Matrix (Paraphrased Competitor Copy) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold uppercase text-slate-400">Positioning Overlap</span>
                <ProvenanceBadge field={data.positioningOverlap} />
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                {data.positioningOverlap.value.map((p, i) => (
                  <p key={i} className="text-slate-300 leading-relaxed font-sans">• {p}</p>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold uppercase text-slate-400">Naming Overlap</span>
                <ProvenanceBadge field={data.namingOverlap} />
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                {data.namingOverlap.value.map((p, i) => (
                  <p key={i} className="text-slate-300 leading-relaxed font-sans">• {p}</p>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold uppercase text-slate-400">Messaging Overlap</span>
                <ProvenanceBadge field={data.messagingOverlap} />
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                {data.messagingOverlap.value.map((p, i) => (
                  <p key={i} className="text-slate-300 leading-relaxed font-sans">• {p}</p>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold uppercase text-slate-400">Visual Overlap</span>
                <ProvenanceBadge field={data.visualOverlap} />
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                {data.visualOverlap.value.map((p, i) => (
                  <p key={i} className="text-slate-300 leading-relaxed font-sans">• {p}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Verification Needed */}
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 text-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0" />
              <div>
                <span className="font-semibold text-slate-200">Legal & Regulatory Verification Checklist:</span>
                <p className="text-slate-400 mt-0.5">
                  {data.verificationNeeded.value.join(' | ')}
                </p>
              </div>
            </div>
            <ProvenanceBadge field={data.verificationNeeded} />
          </div>
        </div>
      )}
    </div>
  );
};
