import React from 'react';
import { LockedBrandDNA } from '../../types/brand';
import { 
  Lock, 
  Unlock, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle,
  FileCode,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface Props {
  lockedDna: LockedBrandDNA;
  onToggleLock: () => void;
  onNavigateToGuardian: () => void;
}

export const Stage65LockView: React.FC<Props> = ({ 
  lockedDna, 
  onToggleLock,
  onNavigateToGuardian
}) => {
  const triggerConfettiAndLock = () => {
    if (!lockedDna.isLocked) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
    onToggleLock();
  };

  const getStatusBadge = (status: 'CONFIRMED' | 'RECOMMENDED' | 'UNVERIFIED') => {
    switch (status) {
      case 'CONFIRMED':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'RECOMMENDED':
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30';
      case 'UNVERIFIED':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Stage Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
              Stage 6.5 // Brand Lock
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Cryptographic Brand DNA Lock & Reference Vault
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Freezes approved brand decisions into the immutable reference standard for Stage 7 (Consistency Guardian).
          </p>
        </div>

        <button
          type="button"
          onClick={triggerConfettiAndLock}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider font-mono shadow-xl transition cursor-pointer ${
            lockedDna.isLocked
              ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30'
              : 'bg-amber-600 hover:bg-amber-500 text-white shadow-amber-600/30'
          }`}
        >
          {lockedDna.isLocked ? (
            <>
              <Lock className="w-4 h-4" />
              <span>DNA Locked (Active Reference)</span>
            </>
          ) : (
            <>
              <Unlock className="w-4 h-4" />
              <span>Click to Lock Brand DNA</span>
            </>
          )}
        </button>
      </div>

      {/* Lock Status Banner */}
      <div className={`p-6 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
        lockedDna.isLocked
          ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-100'
          : 'bg-amber-950/20 border-amber-500/40 text-amber-100'
      }`}>
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${
            lockedDna.isLocked
              ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
              : 'bg-amber-500/20 border-amber-500/40 text-amber-400'
          }`}>
            {lockedDna.isLocked ? <Lock className="w-6 h-6" /> : <Unlock className="w-6 h-6" />}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider">
                {lockedDna.isLocked ? 'ACTIVE REFERENCE STANDARD' : 'DRAFT STATE PENDING USER LOCK'}
              </span>
              {lockedDna.lockedAt && (
                <span className="text-xs text-slate-400 font-mono">
                  • Locked at {new Date(lockedDna.lockedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              )}
            </div>
            <h3 className="text-lg font-bold text-white mt-0.5">
              {lockedDna.brandName} Reference Vault
            </h3>
          </div>
        </div>

        {lockedDna.isLocked && (
          <button
            type="button"
            onClick={onNavigateToGuardian}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition"
          >
            <span>Proceed to Stage 7 (Guardian)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Locked Elements with CONFIRMED, RECOMMENDED, UNVERIFIED status chips */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Confirmed Audience */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400 uppercase font-semibold">Target Audience</span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold border ${getStatusBadge('CONFIRMED')}`}>
              CONFIRMED
            </span>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed font-sans">{lockedDna.confirmedAudience}</p>
        </div>

        {/* Positioning */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400 uppercase font-semibold">Positioning Core</span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold border ${getStatusBadge('CONFIRMED')}`}>
              CONFIRMED
            </span>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed font-sans">{lockedDna.positioning}</p>
        </div>

        {/* Differentiator */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400 uppercase font-semibold">Differentiator Defense</span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold border ${getStatusBadge('CONFIRMED')}`}>
              CONFIRMED
            </span>
          </div>
          <p className="text-sm text-emerald-300 font-medium leading-relaxed font-sans">{lockedDna.differentiator}</p>
        </div>

        {/* Tagline */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400 uppercase font-semibold">Approved Tagline</span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold border ${getStatusBadge('CONFIRMED')}`}>
              CONFIRMED
            </span>
          </div>
          <p className="text-sm text-white font-bold italic leading-relaxed">"{lockedDna.tagline}"</p>
        </div>

        {/* Brand Voice Rules */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400 uppercase font-semibold">Voice Guardrails</span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold border ${getStatusBadge('CONFIRMED')}`}>
              CONFIRMED
            </span>
          </div>
          <ul className="text-xs text-slate-300 space-y-1 list-disc pl-4">
            {lockedDna.brandVoice.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ul>
        </div>

        {/* Prohibited Clichés */}
        <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-rose-300 uppercase font-semibold">Prohibited Clichés</span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold border ${getStatusBadge('CONFIRMED')}`}>
              ENFORCED
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {lockedDna.prohibitedCliches.map((c, i) => (
              <span key={i} className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/30 text-[11px] font-mono">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Unresolved Assumptions Warning */}
      {lockedDna.unresolvedAssumptions.length > 0 && (
        <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <h4 className="text-xs font-mono font-bold uppercase text-amber-300">
                Unresolved Operational Assumptions (Flagged for Field Verification)
              </h4>
            </div>
            <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold border ${getStatusBadge('UNVERIFIED')}`}>
              UNVERIFIED
            </span>
          </div>
          <ul className="text-xs text-amber-200/90 space-y-1 list-disc pl-5">
            {lockedDna.unresolvedAssumptions.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
