import React, { useState } from 'react';
import { VisualSystem } from '../../types/brand';
import { StrategistSkepticExchange } from '../StrategistSkepticExchange';
import { ProvenanceBadge } from '../ProvenanceBadge';
import { ScoreCard } from '../ScoreCard';
import { 
  Palette, 
  Type, 
  Ban, 
  Download, 
  Eye, 
  Sun, 
  Moon, 
  Sparkles,
  Layers
} from 'lucide-react';

interface Props {
  data: VisualSystem;
}

export const Stage4VisualizeView: React.FC<Props> = ({ data }) => {
  const [previewTheme, setPreviewTheme] = useState<'dark' | 'light'>('dark');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const downloadSvg = () => {
    const element = document.createElement("a");
    const file = new Blob([data.svgLogoCode], { type: 'image/svg+xml' });
    element.href = URL.createObjectURL(file);
    element.download = "brand-mark.svg";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Stage Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
              Stage 4.0 // Visualize
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Visual Identity System & Dynamic SVG Mockups
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Actual visual output, not prose only. Every aesthetic decision justified against audience, positioning, and personality.
          </p>
        </div>

        <ScoreCard score={data.score} title="Visual System Score" compact />
      </div>

      {/* Dual Persona Loop */}
      <StrategistSkepticExchange 
        exchange={data.exchange} 
        stageName="Stage 4: Visual System Stress-Test"
      />

      {/* Visual Identity Hero: Logo & Wordmark Visualizer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* SVG Logo Display Container */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <h3 className="text-sm font-bold text-white font-sans">
                Rendered SVG Brand Mark
              </h3>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPreviewTheme(previewTheme === 'dark' ? 'light' : 'dark')}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition cursor-pointer"
                title="Toggle background tone"
              >
                {previewTheme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              </button>

              <button
                type="button"
                onClick={downloadSvg}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition cursor-pointer"
                title="Download SVG Mark"
              >
                <Download className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Canvas Box */}
          <div className={`w-full aspect-square max-w-[280px] mx-auto rounded-2xl flex items-center justify-center p-8 transition-colors border shadow-inner ${
            previewTheme === 'dark'
              ? 'bg-[#080c16] border-slate-800'
              : 'bg-slate-100 border-slate-300'
          }`}>
            <div 
              className="w-full h-full flex items-center justify-center"
              dangerouslySetInnerHTML={{ __html: data.svgLogoCode }} 
            />
          </div>

          <div className="text-center pt-2">
            <span className="text-xs font-mono text-slate-400">
              Vector Asset // Scalable SVG Architecture
            </span>
          </div>
        </div>

        {/* Direction & Specifications */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-slate-200">Logo Symbolic Rationale</h4>
              <ProvenanceBadge field={data.logoDirection} />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              {data.logoDirection.value}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-slate-200">Wordmark Typographic Treatment</h4>
              <ProvenanceBadge field={data.wordmarkStyle} />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              {data.wordmarkStyle.value}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <span className="text-xs font-mono font-semibold uppercase text-slate-400">Imagery Style</span>
              <p className="text-xs text-slate-300 leading-relaxed">{data.imageryStyle.value}</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <span className="text-xs font-mono font-semibold uppercase text-slate-400">Composition & Layout</span>
              <p className="text-xs text-slate-300 leading-relaxed">{data.compositionLayout.value}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Color Palette Mood Board */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-indigo-400" />
            <h3 className="text-lg font-bold text-white font-sans">
              Calibrated Color Tokens & Contrast Matrix
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400">
            WCAG AA/AAA Compliant Ratios
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {data.colorPalette.map((color, idx) => (
            <div 
              key={idx} 
              className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between space-y-4 group hover:border-slate-700 transition"
            >
              <div>
                {/* Color Swatch */}
                <div 
                  className="w-full h-24 rounded-xl shadow-lg mb-3 flex items-end p-2 cursor-pointer transition transform group-hover:scale-[1.02]"
                  style={{ backgroundColor: color.hex }}
                  onClick={() => copyHex(color.hex)}
                  title="Click to copy hex code"
                >
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-slate-950/80 text-white backdrop-blur-sm">
                    {copiedHex === color.hex ? 'COPIED!' : color.hex}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white">{color.name}</h4>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                    {color.role}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {color.mood}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-slate-500">
                Contrast: {color.contrastRatio}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Typography Hierarchy */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Type className="w-5 h-5 text-sky-400" />
          <h3 className="text-lg font-bold text-white font-sans">
            Typography System (Google Fonts Hierarchy)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.typography.map((t, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-sky-400 font-bold">{t.role} Typography</span>
                <span className="text-xs font-mono text-slate-400">{t.weight}</span>
              </div>

              <div>
                <span className="text-sm font-bold text-slate-300 block mb-2">{t.fontFamily}</span>
                <p 
                  className={`p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 leading-relaxed ${
                    t.role === 'heading' 
                      ? 'text-lg font-bold text-white' 
                      : t.role === 'accent' 
                      ? 'text-xs font-mono text-sky-300' 
                      : 'text-sm text-slate-300'
                  }`}
                  style={{ fontFamily: t.fontFamily }}
                >
                  "{t.sampleText}"
                </p>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-800/60">
                {t.usageNotes}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Elements to Avoid (Skeptic Anti-Cliché Checklist) */}
      <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Ban className="w-5 h-5 text-rose-400" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-rose-300 font-mono">
              Prohibited Visual Defaults (Skeptic Anti-Trope Defense)
            </h3>
          </div>
          <ProvenanceBadge field={data.elementsToAvoid} />
        </div>
        <p className="text-xs text-rose-200/80">
          The SKEPTIC strictly bans generic AI/tech defaults (purple glow blobs, mesh gradients, smiling doctor clipboards, circuit lines) unless explicitly justified.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
          {data.elementsToAvoid.value.map((avoidItem, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-rose-500/20 text-xs text-slate-200 flex items-start gap-2.5">
              <span className="text-rose-400 font-bold">🚫</span>
              <span className="leading-relaxed">{avoidItem}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
