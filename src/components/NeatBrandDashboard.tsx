import React, { useState } from 'react';
import { BrandSystem } from '../types/brand';
import { 
  Sparkles, 
  Target, 
  Palette, 
  Rocket, 
  ShieldCheck, 
  Copy, 
  Check, 
  Download, 
  ArrowRight,
  Compass,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  Share2,
  Mail,
  Eye,
  GitFork
} from 'lucide-react';
import { Stage35GraphView } from './stages/Stage35GraphView';
import { Stage7GuardianView } from './stages/Stage7GuardianView';
import { Stage75DriftView } from './stages/Stage75DriftView';

interface Props {
  brand: BrandSystem;
  onUpdateBrand: (updated: BrandSystem) => void;
  onOpenExportModal: () => void;
}

export type NeatTab = 'overview' | 'stress_test' | 'visuals' | 'launch_kit' | 'guardian' | 'dna_map';

export const NeatBrandDashboard: React.FC<Props> = ({ 
  brand, 
  onUpdateBrand,
  onOpenExportModal 
}) => {
  const [activeTab, setActiveTab] = useState<NeatTab>('overview');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const tabs = [
    { id: 'overview' as NeatTab, label: '1. Brand Overview', icon: Target, desc: 'Positioning & Audience' },
    { id: 'stress_test' as NeatTab, label: '2. What the AI Fixed', icon: Compass, desc: 'Clichés Removed' },
    { id: 'visuals' as NeatTab, label: '3. Visual Identity', icon: Palette, desc: 'Logo & Colors' },
    { id: 'launch_kit' as NeatTab, label: '4. Ready-to-Post Copy', icon: Rocket, desc: 'Website, Posts & Email' },
    { id: 'guardian' as NeatTab, label: '5. Brand Guardian', icon: ShieldCheck, desc: 'Live Post Auditor' },
    { id: 'dna_map' as NeatTab, label: '6. System DNA Graph', icon: GitFork, desc: 'Node Dependencies' }
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* 1. TOP BRAND HERO CARD - CLEAN, CONCISE WHITE & BLUE */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-md shadow-slate-200/50 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                {brand.industry}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Launch Ready Brand
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
              {brand.name}
            </h1>

            <p className="text-lg sm:text-xl text-blue-600 font-semibold italic">
              "{brand.stage3Shape.messaging.selectedTagline.value}"
            </p>

            <p className="text-sm text-slate-600 leading-relaxed font-sans">
              {brand.stage2Position.valueProposition.value}
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
            <button
              type="button"
              onClick={onOpenExportModal}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-sm transition cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Brand Kit</span>
            </button>

            <button
              type="button"
              onClick={() => copyText(brand.stage3Shape.messaging.selectedTagline.value, 'hero-tagline')}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition cursor-pointer"
            >
              {copiedKey === 'hero-tagline' ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Tagline Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>Copy Tagline</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 2. NEAT STEP-BY-STEP TAB NAVIGATION */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-500 px-1 font-medium">
          <span>Brand Sections:</span>
          <span>Click to view details</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-blue-50 border-blue-400 text-blue-900 shadow-sm ring-1 ring-blue-300'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span className="font-bold text-xs font-sans line-clamp-1">{tab.label}</span>
                </div>
                <span className="text-[11px] text-slate-500 line-clamp-1">{tab.desc}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. TAB 1: BRAND OVERVIEW (CLEAN, NEAT, CONCISE) */}
      {activeTab === 'overview' && (
        <div className="space-y-5 animate-in fade-in duration-200">
          <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200/80 text-xs text-blue-900 flex items-center gap-2.5">
            <Lightbulb className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              <b>Quick Summary:</b> Your brand foundation. Clear positioning, target customer, and what sets you apart from competitors.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* The One-Line Pitch */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Elevator Pitch
                </span>
                <button
                  type="button"
                  onClick={() => copyText(brand.stage3Shape.messaging.oneLinePitch.value, 'one-line')}
                  className="p-1 rounded text-slate-400 hover:text-slate-700"
                  title="Copy pitch"
                >
                  {copiedKey === 'one-line' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <p className="text-sm text-slate-800 font-medium leading-relaxed font-sans">
                "{brand.stage3Shape.messaging.oneLinePitch.value}"
              </p>
            </div>

            {/* Core Differentiator */}
            <div className="p-5 rounded-2xl bg-white border border-blue-200 bg-blue-50/20 space-y-2 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  What Makes You Unique
                </span>
              </div>
              <p className="text-sm text-slate-800 font-medium leading-relaxed font-sans">
                {brand.stage2Position.differentiator.value}
              </p>
            </div>
          </div>

          {/* Problem & Audience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <div>
                <span className="text-xs text-slate-500 uppercase font-semibold block mb-0.5">
                  Who Buys This (Target Audience)
                </span>
                <p className="text-sm text-slate-800 font-medium">
                  {brand.stage1Discover.targetUser.value}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs text-slate-500 uppercase font-semibold block mb-0.5">
                  Problem Solved
                </span>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  {brand.stage1Discover.problem.value}
                </p>
              </div>
            </div>

            {/* Personality / Tone */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
              <span className="text-xs text-slate-500 uppercase font-semibold block mb-1">
                Tone of Voice
              </span>
              <div className="space-y-2">
                {brand.stage3Shape.personality.value.map((trait, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs">
                    <div className="font-bold text-blue-700">{trait.trait}</div>
                    <div className="text-slate-600 mt-0.5">{trait.howItShowsUp}</div>
                    <div className="text-[11px] text-rose-600 mt-0.5 italic">
                      Avoid: {trait.adjacentTraitToAvoid}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rules: What NOT to Sound Like */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-slate-800">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span>Boundary Rules: What This Brand Must NEVER Sound Like</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-slate-700">
              {brand.stage2Position.whatThisShouldNotTryToBe.value.map((rule, idx) => (
                <div key={idx} className="p-2 rounded-lg bg-white border border-slate-200 text-xs flex items-start gap-1.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 4. TAB 2: WHAT THE AI FIXED (CRISP BEFORE & AFTER) */}
      {activeTab === 'stress_test' && (
        <div className="space-y-5 animate-in fade-in duration-200">
          <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200/80 text-xs text-blue-900 flex items-center gap-2.5">
            <Lightbulb className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              <b>Before & After:</b> How the Skeptic AI attacked generic startup clichés to sharpen your message.
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Initial Proposal */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 uppercase flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-blue-600" /> 1. Initial Draft
                </span>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                  Too Vague
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-sans pt-1">
                {brand.stage2Position.exchange.strategistProposal}
              </p>
            </div>

            {/* Skeptic Attack */}
            <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-2 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-rose-800 uppercase flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-600" /> 2. The Fluff Attacked
                </span>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-rose-100 text-rose-700">
                  Clichés Flagged
                </span>
              </div>
              <p className="text-xs text-rose-900 leading-relaxed font-sans pt-1">
                "{brand.stage2Position.exchange.skepticCritique}"
              </p>
            </div>

            {/* Refined Final Version */}
            <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-2 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-800 uppercase flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-blue-600" /> 3. Refined Final Version
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700">
                  Score: 9.3/10
                </span>
              </div>
              <p className="text-xs text-slate-800 font-medium leading-relaxed font-sans pt-1">
                {brand.stage2Position.exchange.strategistRevision}
              </p>
            </div>
          </div>

          {/* Prohibited Clichés List */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Words Banned From Your Marketing Copy:
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              {brand.stage65LockedDNA.prohibitedCliches.map((cliche, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 border border-rose-200 text-xs font-medium">
                  🚫 {cliche}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 5. TAB 3: VISUAL IDENTITY (LOGO & BLUE/WHITE PALETTE) */}
      {activeTab === 'visuals' && (
        <div className="space-y-5 animate-in fade-in duration-200">
          <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200/80 text-xs text-blue-900 flex items-center gap-2.5">
            <Lightbulb className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              <b>Visual Identity:</b> Download your brand logo in SVG format and copy your hex codes directly.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Logo Viewer */}
            <div className="md:col-span-5 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col items-center justify-between text-center space-y-4 shadow-xs">
              <span className="text-xs font-bold text-slate-700 uppercase">SVG Logo Mark</span>

              <div className="w-44 h-44 rounded-2xl flex items-center justify-center p-6 border border-slate-200 bg-slate-50">
                <div 
                  className="w-full h-full flex items-center justify-center"
                  dangerouslySetInnerHTML={{ __html: brand.stage4Visualize.svgLogoCode }} 
                />
              </div>

              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-900 font-sans">{brand.name} Icon</h4>
                <p className="text-xs text-slate-500 max-w-xs">{brand.stage4Visualize.logoDirection.value}</p>
              </div>
            </div>

            {/* Colors & Typography */}
            <div className="md:col-span-7 space-y-4">
              {/* Color Swatches */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
                <span className="text-xs font-bold text-slate-700 uppercase block">
                  Color Palette (Click to Copy Hex)
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {brand.stage4Visualize.colorPalette.map((color, idx) => (
                    <div 
                      key={idx}
                      onClick={() => copyText(color.hex, `color-${idx}`)}
                      className="p-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 cursor-pointer transition space-y-1.5"
                    >
                      <div className="w-full h-8 rounded-lg shadow-2xs border border-black/5" style={{ backgroundColor: color.hex }} />
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-800 font-medium truncate">{color.name}</span>
                        <span className="font-mono text-[11px] text-slate-500">
                          {copiedKey === `color-${idx}` ? 'Copied' : color.hex}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
                <span className="text-xs font-bold text-slate-700 uppercase block mb-1">
                  Google Fonts Pairing
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {brand.stage4Visualize.typography.map((font, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <div className="text-blue-700 font-semibold text-[11px] uppercase">{font.role}</div>
                      <div className="text-slate-900 font-bold text-sm my-0.5">{font.fontFamily}</div>
                      <div className="text-slate-500 text-[11px]">{font.usageNotes}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. TAB 4: READY-TO-POST LAUNCH COPY (CONCISE & USABLE) */}
      {activeTab === 'launch_kit' && (
        <div className="space-y-5 animate-in fade-in duration-200">
          <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200/80 text-xs text-blue-900 flex items-center gap-2.5">
            <Lightbulb className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              <b>Launch Collateral:</b> Copy ready-to-use headlines, social announcement posts, and outreach emails.
            </span>
          </div>

          {/* Website Hero Card Mockup */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
              <span className="text-blue-700 font-bold uppercase flex items-center gap-1.5">
                <Eye className="w-4 h-4" /> Website Landing Page Hero
              </span>
              <button
                type="button"
                onClick={() => copyText(`${brand.stage6Launch.landingPageHeadline.value}\n\n${brand.stage6Launch.landingPageSubhead.value}`, 'web-hero')}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-medium cursor-pointer"
              >
                {copiedKey === 'web-hero' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'web-hero' ? 'Copied' : 'Copy Hero Copy'}</span>
              </button>
            </div>

            <div className="space-y-2 max-w-2xl py-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {brand.stage6Launch.landingPageHeadline.value}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {brand.stage6Launch.landingPageSubhead.value}
              </p>
              <div className="pt-2 flex items-center gap-2">
                <span className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold text-xs shadow-xs">
                  Get Started Free
                </span>
                <span className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-medium text-xs">
                  Book Demo
                </span>
              </div>
            </div>
          </div>

          {/* Social Post & Email Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Social Announcement */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase text-blue-700 flex items-center gap-1.5">
                    <Share2 className="w-3.5 h-3.5" /> Social Announcement (X & LinkedIn)
                  </span>
                  <button
                    type="button"
                    onClick={() => copyText(brand.stage6Launch.socialLaunchPost.value, 'social-post')}
                    className="p-1 rounded text-slate-400 hover:text-slate-700"
                  >
                    {copiedKey === 'social-post' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 whitespace-pre-line leading-relaxed font-sans">
                  {brand.stage6Launch.socialLaunchPost.value}
                </div>
              </div>
            </div>

            {/* Direct Outreach Email */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase text-blue-700 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" /> Buyer Outreach Email
                  </span>
                  <button
                    type="button"
                    onClick={() => copyText(`Subject: ${brand.stage6Launch.launchEmailSubject.value}\n\n${brand.stage6Launch.launchEmailBody.value}`, 'email-post')}
                    className="p-1 rounded text-slate-400 hover:text-slate-700"
                  >
                    {copiedKey === 'email-post' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs text-slate-800">
                  <div className="text-slate-600 pb-1 border-b border-slate-200 font-medium">
                    <b>Subject:</b> {brand.stage6Launch.launchEmailSubject.value}
                  </div>
                  <div className="whitespace-pre-line leading-relaxed font-sans pt-1">
                    {brand.stage6Launch.launchEmailBody.value}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. TAB 5: BRAND GUARDIAN (LIVE POST AUDITOR) */}
      {activeTab === 'guardian' && (
        <div className="space-y-5 animate-in fade-in duration-200">
          <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200/80 text-xs text-blue-900 flex items-center gap-2.5">
            <Lightbulb className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              <b>Live Brand Checker:</b> Paste any future ad, tweet, or email below to check if it matches your brand rules and get automatic rewrites.
            </span>
          </div>

          <Stage7GuardianView brand={brand} onUpdateBrand={onUpdateBrand} />
          <Stage75DriftView brand={brand} onUpdateBrand={onUpdateBrand} onNavigateToGuardian={() => {}} />
        </div>
      )}

      {/* 8. TAB 6: ADVANCED DNA GRAPH */}
      {activeTab === 'dna_map' && (
        <div className="space-y-5 animate-in fade-in duration-200">
          <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200/80 text-xs text-blue-900 flex items-center gap-2.5">
            <Lightbulb className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              <b>System DNA:</b> View how decisions connect. If you edit any node, affected downstream marketing copy updates automatically.
            </span>
          </div>

          <Stage35GraphView brand={brand} onUpdateBrand={onUpdateBrand} />
        </div>
      )}
    </div>
  );
};
