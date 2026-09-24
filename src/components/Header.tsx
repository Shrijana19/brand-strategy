import React from 'react';
import { BrandSystem } from '../types/brand';
import { PRESET_BRANDS } from '../data/presets';
import { 
  ShieldCheck, 
  Download, 
  PlusCircle, 
  Cpu, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';

interface Props {
  currentBrand: BrandSystem;
  onSelectBrand: (brand: BrandSystem) => void;
  onOpenNewBrandModal: () => void;
  onOpenExportModal: () => void;
  onToggleLock: () => void;
}

export const Header: React.FC<Props> = ({
  currentBrand,
  onSelectBrand,
  onOpenNewBrandModal,
  onOpenExportModal,
  onToggleLock
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo and Brand Engine Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-rose-500 p-0.5 shadow-lg shadow-indigo-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-indigo-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-bold tracking-tight text-white font-sans">
                AI Brand Intelligence Engine
              </h1>
              <span className="hidden md:inline-flex px-2 py-0.5 text-[10px] font-mono font-semibold rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                v2.5 Release
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              Dual-Persona Strategist vs. Skeptic Protocol
            </p>
          </div>
        </div>

        {/* Brand Selector Dropdown & Actions */}
        <div className="flex items-center gap-3">
          {/* Preset Selector */}
          <div className="relative group">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 hover:border-slate-700 transition">
              <span className="text-slate-400 hidden sm:inline">Active Brand:</span>
              <span className="font-semibold text-sky-400">{currentBrand.name}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
            </div>

            <div className="absolute right-0 mt-2 w-64 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl p-1.5 hidden group-hover:block transition-all z-50">
              <div className="px-3 py-1.5 text-[10px] font-mono uppercase text-slate-400 border-b border-slate-800 mb-1">
                Curated Battle-Tested Brands
              </div>
              {PRESET_BRANDS.map(brand => (
                <button
                  key={brand.id}
                  type="button"
                  onClick={() => onSelectBrand(brand)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition ${
                    brand.id === currentBrand.id 
                      ? 'bg-indigo-600/20 text-indigo-300 font-semibold' 
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <div>
                    <div>{brand.name}</div>
                    <div className="text-[10px] text-slate-400">{brand.industry}</div>
                  </div>
                  {brand.id === currentBrand.id && (
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  )}
                </button>
              ))}

              <div className="pt-1 mt-1 border-t border-slate-800">
                <button
                  type="button"
                  onClick={onOpenNewBrandModal}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs text-sky-400 hover:bg-sky-500/10 flex items-center gap-2 transition"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>Create Custom Brand...</span>
                </button>
              </div>
            </div>
          </div>

          {/* Brand Lock Status Badge / Button */}
          <button
            type="button"
            onClick={onToggleLock}
            className={`hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium border transition cursor-pointer ${
              currentBrand.stage65LockedDNA.isLocked
                ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/20'
                : 'bg-amber-500/10 text-amber-300 border-amber-500/30 hover:bg-amber-500/20'
            }`}
            title="Stage 6.5: Click to toggle brand DNA lock state"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{currentBrand.stage65LockedDNA.isLocked ? 'DNA LOCKED' : 'DRAFT DNA'}</span>
          </button>

          {/* Export Brand Kit */}
          <button
            type="button"
            onClick={onOpenExportModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium shadow-md shadow-indigo-600/20 transition cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Export Brand Kit</span>
            <span className="sm:hidden">Export</span>
          </button>
        </div>
      </div>
    </header>
  );
};
