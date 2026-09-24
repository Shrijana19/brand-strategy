import React, { useState } from 'react';
import { BrandSystem, GuardianEvaluation } from '../../types/brand';
import { evaluateCopyConsistency, calculateBrandDrift } from '../../services/brandEngine';
import { 
  ShieldCheck, 
  Sparkles, 
  Send, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Copy, 
  Check, 
  History,
  RotateCcw
} from 'lucide-react';

interface Props {
  brand: BrandSystem;
  onUpdateBrand: (updated: BrandSystem) => void;
}

export const Stage7GuardianView: React.FC<Props> = ({ brand, onUpdateBrand }) => {
  const [contentInput, setContentInput] = useState('');
  const [contentType, setContentType] = useState<GuardianEvaluation['contentType']>('social_post');
  const [latestEvaluation, setLatestEvaluation] = useState<GuardianEvaluation | null>(
    brand.evaluationsHistory[0] || null
  );
  const [isAuditing, setIsAuditing] = useState(false);
  const [copiedRewriteIndex, setCopiedRewriteIndex] = useState<number | null>(null);

  const samplePresets = [
    {
      label: 'Sample Bad Copy (High Clichés)',
      type: 'social_post' as const,
      text: 'Empowering healthcare heroes with cutting-edge AI to seamlessly optimize shift management and reduce hospital staffing overhead!'
    },
    {
      label: 'Sample Aligned Copy (High Score)',
      type: 'ad_copy' as const,
      text: 'In high-acuity ICUs, cognitive debt compounds with every emergency alarm. Kora provides charge nurses with ambient telemetry to rebalance assignments before clinicians break.'
    },
    {
      label: 'Sample Cost-Cutting Drift',
      type: 'pitch_line' as const,
      text: 'Our smart scheduling algorithm automatically reorganizes hospital nurse shifts to maximize operational hospital margins.'
    }
  ];

  const handleAudit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!contentInput.trim()) return;

    setIsAuditing(true);
    setTimeout(() => {
      const evaluation = evaluateCopyConsistency(
        contentInput,
        contentType,
        brand.stage65LockedDNA
      );

      const updatedHistory = [evaluation, ...brand.evaluationsHistory];
      const updatedDrift = calculateBrandDrift(updatedHistory);

      onUpdateBrand({
        ...brand,
        evaluationsHistory: updatedHistory,
        driftReport: updatedDrift
      });

      setLatestEvaluation(evaluation);
      setIsAuditing(false);
    }, 300);
  };

  const handleCopyRewrite = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedRewriteIndex(idx);
    setTimeout(() => setCopiedRewriteIndex(null), 2000);
  };

  const getScoreColor = (val: number) => {
    if (val >= 8) return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
    if (val >= 6) return 'text-sky-400 border-sky-500/30 bg-sky-500/10';
    if (val >= 4) return 'text-amber-400 border-amber-500/30 bg-amber-500/10';
    return 'text-rose-400 border-rose-500/30 bg-rose-500/10';
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Stage Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
              Stage 7.0 // Consistency Guardian
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              LIVE AUDIT ACTIVE
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Live Brand Alignment Auditor & Intent-Preserving Rewrites
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Audit any proposed ad, email, social post, or pitch line against the LOCKED BRAND DNA. Real-time line-by-line feedback.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono">
          <span className="text-slate-400">Locked Reference:</span>
          <span className="text-emerald-400 font-bold">{brand.stage65LockedDNA.brandName}</span>
        </div>
      </div>

      {/* Input Console */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-indigo-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Audit Outbound Content Submission
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400">Content Type:</span>
            <select
              value={contentType}
              onChange={(e) => setContentType(e.target.value as any)}
              className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-400"
            >
              <option value="social_post">Social Post</option>
              <option value="ad_copy">Paid Ad Copy</option>
              <option value="landing_page">Landing Page Section</option>
              <option value="email">Campaign Email</option>
              <option value="pitch_line">Pitch Line / Slogan</option>
              <option value="other">Other Material</option>
            </select>
          </div>
        </div>

        {/* Quick Sample Fill Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
          <span className="text-slate-500 font-mono text-[11px]">Quick Tests:</span>
          {samplePresets.map((preset, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setContentInput(preset.text);
                setContentType(preset.type);
              }}
              className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 transition text-[11px]"
            >
              {preset.label}
            </button>
          ))}
        </div>

        <form onSubmit={handleAudit} className="space-y-4 pt-2">
          <textarea
            value={contentInput}
            onChange={(e) => setContentInput(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 leading-relaxed font-sans"
            placeholder="Paste your proposed marketing copy, social post, ad headline, or email draft to audit against the locked brand system..."
          />

          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-500">
              Evaluates against voice guardrails, avoid-rules, positioning, and prohibited clichés.
            </span>

            <button
              type="submit"
              disabled={isAuditing || !contentInput.trim()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold text-xs transition cursor-pointer shadow-lg shadow-indigo-600/20"
            >
              {isAuditing ? (
                <>
                  <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                  <span>Auditing Copy...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Run Consistency Audit</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Latest Evaluation Results */}
      {latestEvaluation && (
        <div className="space-y-6">
          {/* Alignment Score & Dimension Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Overall Score Badge */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col items-center justify-center text-center space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Brand Alignment Score
              </span>
              <div className={`w-28 h-28 rounded-full border-4 flex flex-col items-center justify-center font-mono ${getScoreColor(latestEvaluation.overallAlignmentScore)}`}>
                <span className="text-3xl font-extrabold">{latestEvaluation.overallAlignmentScore}</span>
                <span className="text-[10px] text-slate-400">OUT OF 10</span>
              </div>
              <div className="text-xs font-semibold text-slate-300">
                {latestEvaluation.overallAlignmentScore >= 8 
                  ? 'Strong Adherence to Locked DNA' 
                  : latestEvaluation.overallAlignmentScore >= 6 
                  ? 'Moderate Alignment — Minor Adjustments Needed' 
                  : 'Critical Brand Violations Detected'}
              </div>
            </div>

            {/* Score Breakdown Bars */}
            <div className="lg:col-span-8 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <h4 className="text-sm font-bold text-white font-sans">
                  Evaluation Dimension Breakdown
                </h4>
                <span className="text-xs font-mono text-slate-500">
                  {new Date(latestEvaluation.timestamp).toLocaleTimeString()}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300">Voice Alignment</span>
                    <span className="font-mono font-bold">{latestEvaluation.breakdown.voiceAlignment}/10</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: `${latestEvaluation.breakdown.voiceAlignment * 10}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300">Positioning Adherence</span>
                    <span className="font-mono font-bold">{latestEvaluation.breakdown.positioningAdherence}/10</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-sky-500 h-1.5 rounded-full" style={{ width: `${latestEvaluation.breakdown.positioningAdherence * 10}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300">Differentiator Presence</span>
                    <span className="font-mono font-bold">{latestEvaluation.breakdown.differentiatorPresence}/10</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: `${latestEvaluation.breakdown.differentiatorPresence * 10}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300">Audience Specificity</span>
                    <span className="font-mono font-bold">{latestEvaluation.breakdown.audienceSpecificity}/10</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-teal-500 h-1.5 rounded-full" style={{ width: `${latestEvaluation.breakdown.audienceSpecificity * 10}%` }} />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300">Cliché Avoidance (Higher = Cleaner Language)</span>
                    <span className="font-mono font-bold">{latestEvaluation.breakdown.clicheAvoidance}/10</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-rose-500 h-1.5 rounded-full" style={{ width: `${latestEvaluation.breakdown.clicheAvoidance * 10}%` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Line-by-Line Feedback */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <h4 className="text-sm font-bold text-white font-sans flex items-center gap-2">
              <span>Line-by-Line Forensic Analysis</span>
              <span className="text-xs font-mono text-slate-500">({latestEvaluation.lineByLineFeedback.length} lines analyzed)</span>
            </h4>

            <div className="space-y-3">
              {latestEvaluation.lineByLineFeedback.map((line, idx) => (
                <div 
                  key={idx}
                  className={`p-4 rounded-xl border text-xs space-y-1.5 ${
                    line.status === 'fail'
                      ? 'bg-rose-950/20 border-rose-500/30 text-rose-200'
                      : line.status === 'warning'
                      ? 'bg-amber-950/20 border-amber-500/30 text-amber-200'
                      : 'bg-emerald-950/20 border-emerald-500/30 text-emerald-200'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono">
                    <div className="flex items-center gap-2">
                      {line.status === 'fail' ? (
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      ) : line.status === 'warning' ? (
                        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                      ) : (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      )}
                      <span className="font-bold uppercase tracking-wider">Line 0{idx + 1} // [{line.status}]</span>
                    </div>

                    {line.ruleViolated && (
                      <span className="text-[10px] text-rose-300 bg-rose-500/20 px-2 py-0.5 rounded">
                        Violates: {line.ruleViolated}
                      </span>
                    )}
                  </div>

                  <p className="text-slate-100 font-sans pl-6 italic">
                    "{line.lineText}"
                  </p>

                  <p className="text-slate-300 pl-6 leading-relaxed">
                    <span className="font-semibold text-slate-400">Diagnosis: </span>
                    {line.feedback}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Intent-Preserving Rewrites */}
          <div className="p-6 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <div>
                <h4 className="text-sm font-bold text-white font-sans">
                  Intent-Preserving Rewrites (Engine Calibrated)
                </h4>
                <p className="text-xs text-indigo-200/80">
                  Preserves the author’s message intent while strictly enforcing Locked Brand DNA guardrails:
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {latestEvaluation.intentPreservingRewrites.map((rewrite, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/90 border border-indigo-500/20 flex items-start justify-between gap-4 text-xs text-slate-100 leading-relaxed font-sans"
                >
                  <p>{rewrite}</p>
                  <button
                    type="button"
                    onClick={() => handleCopyRewrite(rewrite, idx)}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition shrink-0"
                    title="Copy rewrite"
                  >
                    {copiedRewriteIndex === idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
