import React, { useState } from 'react';
import { LaunchKit, BrandConsistencyCheck, BrandSystem } from '../../types/brand';
import { ProvenanceBadge } from '../ProvenanceBadge';
import { ScoreCard } from '../ScoreCard';
import { 
  Rocket, 
  CheckCircle2, 
  Copy, 
  Check, 
  Share2, 
  Mail, 
  FileText, 
  Download,
  AlertTriangle
} from 'lucide-react';

interface Props {
  data: LaunchKit;
  consistencyCheck: BrandConsistencyCheck;
  onOpenExportModal: () => void;
  brand: BrandSystem;
}

export const Stage6LaunchView: React.FC<Props> = ({ 
  data, 
  consistencyCheck, 
  onOpenExportModal,
  brand 
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Stage Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
              Stage 6.0 // Consistency Check + Launch
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Launch Messaging Suite & Sanity Certification
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Cross-checks all upstream decisions for internal conflicts. Launch collateral ready for deployment.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <ScoreCard score={data.score} title="Launch Readiness Score" compact />
          <button
            type="button"
            onClick={onOpenExportModal}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 transition cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Brand Kit</span>
          </button>
        </div>
      </div>

      {/* Consistency Sanity Check Card */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-white font-mono">
              Systemic Brand Consistency Audit
            </h3>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            PASSED ZERO-CONFLICT CERTIFICATION
          </span>
        </div>

        {consistencyCheck.conflictsDetected.length > 0 ? (
          <div className="space-y-3">
            {consistencyCheck.conflictsDetected.map((c, i) => (
              <div key={i} className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs space-y-2">
                <div className="flex items-center justify-between text-amber-300 font-semibold font-mono">
                  <span>Conflict Detected: {c.nodeA} vs {c.nodeB}</span>
                  <span className="text-[10px] uppercase bg-amber-500/20 px-2 py-0.5 rounded">Resolved</span>
                </div>
                <p className="text-amber-200/90">{c.conflictDescription}</p>
                <div className="pt-2 border-t border-amber-900/40 text-emerald-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Proposed & Enforced Correction: {c.correctionProposed}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-slate-300 leading-relaxed font-sans bg-slate-950/50 p-4 rounded-xl border border-slate-800/80">
            No contradictions detected between target audience, pricing logic, tone, visual mood, and messaging channels.
          </p>
        )}
      </div>

      {/* Hero Headline & Subhead */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-950/30 via-slate-900 to-sky-950/30 border border-indigo-500/30 space-y-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">
            Landing Page Hero Architecture
          </span>
          <div className="flex items-center gap-2">
            <ProvenanceBadge field={data.landingPageHeadline} />
            <button
              type="button"
              onClick={() => copyToClipboard(`${data.landingPageHeadline.value}\n\n${data.landingPageSubhead.value}`, 'hero')}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              title="Copy Hero Copy"
            >
              {copiedField === 'hero' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight font-sans">
            {data.landingPageHeadline.value}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed font-sans">
            {data.landingPageSubhead.value}
          </p>
        </div>
      </div>

      {/* One-Line Pitch & Short Product Description */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-semibold uppercase text-slate-400">One-Line Pitch</span>
            <ProvenanceBadge field={data.oneLinePitch} />
          </div>
          <p className="text-sm text-slate-200 leading-relaxed font-sans">{data.oneLinePitch.value}</p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-semibold uppercase text-slate-400">Executive Summary</span>
            <ProvenanceBadge field={data.finalBrandSummary} />
          </div>
          <p className="text-sm text-slate-200 leading-relaxed font-sans">{data.finalBrandSummary.value}</p>
        </div>
      </div>

      {/* Launch Social Post & Email Campaign */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Social Post */}
        <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Share2 className="w-4 h-4 text-sky-400" />
                <h4 className="text-sm font-bold text-white font-sans">Official Launch Announcement Post</h4>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(data.socialLaunchPost.value, 'social')}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                {copiedField === 'social' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-200 whitespace-pre-line leading-relaxed font-sans">
              {data.socialLaunchPost.value}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800/60 text-[11px] font-mono text-slate-400">
            Channel: LinkedIn & X Executive Announcement
          </div>
        </div>

        {/* Launch Email */}
        <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400" />
                <h4 className="text-sm font-bold text-white font-sans">Target Buyer Outreach Email</h4>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(`Subject: ${data.launchEmailSubject.value}\n\n${data.launchEmailBody.value}`, 'email')}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2 text-xs">
              <div className="text-slate-400 font-mono pb-2 border-b border-slate-800">
                <span className="font-semibold text-slate-300">Subject: </span>
                {data.launchEmailSubject.value}
              </div>
              <div className="text-slate-200 whitespace-pre-line leading-relaxed font-sans pt-1">
                {data.launchEmailBody.value}
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800/60 text-[11px] font-mono text-slate-400">
            Target Audience: Hospital CNOs & Direct Budget Owners
          </div>
        </div>
      </div>
    </div>
  );
};
