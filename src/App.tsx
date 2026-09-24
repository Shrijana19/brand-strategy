import React, { useState } from 'react';
import { BrandSystem } from './types/brand';
import { PRESET_BRANDS } from './data/presets';
import { HeroIdeaInput } from './components/HeroIdeaInput';
import { NeatBrandDashboard } from './components/NeatBrandDashboard';
import { ExportModal } from './components/modals/ExportModal';
import { NewBrandModal } from './components/modals/NewBrandModal';
import { 
  Cpu, 
  Download, 
  Lock, 
  Unlock, 
  ChevronDown, 
  Sparkles,
  HelpCircle
} from 'lucide-react';

export const App: React.FC = () => {
  const [currentBrand, setCurrentBrand] = useState<BrandSystem>(PRESET_BRANDS[0]);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isNewBrandOpen, setIsNewBrandOpen] = useState(false);

  const handleProposeIdea = (idea: { title: string; problem: string; audience: string; category: string }) => {
    const brandId = idea.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const customBrand: BrandSystem = {
      ...PRESET_BRANDS[0],
      id: brandId,
      name: idea.title,
      industry: idea.category,
      stage1Discover: {
        ...PRESET_BRANDS[0].stage1Discover,
        problem: {
          value: idea.problem,
          source: 'user_provided',
          confidence: 'high',
          rationale: 'Supplied directly in user prompt.'
        },
        targetUser: {
          value: idea.audience,
          source: 'user_provided',
          confidence: 'high',
          rationale: 'Primary target customer segment.'
        }
      },
      stage2Position: {
        ...PRESET_BRANDS[0].stage2Position,
        problem: {
          value: idea.problem,
          source: 'user_provided',
          confidence: 'high',
          rationale: 'Core pain point.'
        },
        targetAudience: {
          value: idea.audience,
          source: 'user_provided',
          confidence: 'high',
          rationale: 'Target buyer.'
        },
        valueProposition: {
          value: `The dedicated platform built to eliminate ${idea.problem.slice(0, 45)}... with zero unnecessary overhead.`,
          source: 'ai_recommendation',
          confidence: 'high',
          rationale: 'Direct outcome statement.'
        },
        positioningStatement: {
          value: `For ${idea.audience}, ${idea.title} is the dedicated solution that solves ${idea.problem.slice(0, 45)}... unlike legacy alternatives that add more friction than they solve.`,
          source: 'ai_recommendation',
          confidence: 'high',
          rationale: 'Structured positioning blueprint.'
        }
      },
      stage3Shape: {
        ...PRESET_BRANDS[0].stage3Shape,
        selectedName: {
          value: idea.title,
          source: 'user_provided',
          confidence: 'high',
          rationale: 'Proposed brand name.'
        },
        messaging: {
          ...PRESET_BRANDS[0].stage3Shape.messaging,
          selectedTagline: {
            value: `Engineered for ${idea.audience.slice(0, 30)}. Ready for scale.`,
            source: 'ai_recommendation',
            confidence: 'high',
            rationale: 'Audience-grounded tagline.'
          },
          oneLinePitch: {
            value: `${idea.title} solves ${idea.problem.slice(0, 50)} for ${idea.audience}.`,
            source: 'ai_recommendation',
            confidence: 'high',
            rationale: 'Crisp elevator pitch.'
          }
        }
      },
      stage6Launch: {
        ...PRESET_BRANDS[0].stage6Launch,
        landingPageHeadline: {
          value: `The end of ${idea.problem.slice(0, 35)}.`,
          source: 'ai_recommendation',
          confidence: 'high',
          rationale: 'High-contrast benefit headline.'
        },
        landingPageSubhead: {
          value: `${idea.title} gives ${idea.audience} the dedicated platform to eliminate friction and scale results.`,
          source: 'ai_recommendation',
          confidence: 'high',
          rationale: 'Clear customer-facing subhead.'
        },
        socialLaunchPost: {
          value: `Most tools in ${idea.category} are bloated, slow, and full of friction.\n\nToday we are announcing ${idea.title}.\n\nBuilt specifically for ${idea.audience} to eliminate ${idea.problem.slice(0, 35)}.\n\nExplore the system: ${brandId}.io`,
          source: 'ai_recommendation',
          confidence: 'high',
          rationale: 'Launch announcement copy.'
        }
      },
      stage65LockedDNA: {
        ...PRESET_BRANDS[0].stage65LockedDNA,
        brandName: idea.title,
        confirmedAudience: idea.audience,
        problem: idea.problem,
        tagline: `Engineered for ${idea.audience.slice(0, 30)}. Ready for scale.`
      }
    };

    setCurrentBrand(customBrand);
    // Smooth scroll down to the neat dashboard
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const handleSelectPreset = (brandId: string) => {
    const found = PRESET_BRANDS.find(b => b.id === brandId);
    if (found) {
      setCurrentBrand(found);
      window.scrollTo({ top: 380, behavior: 'smooth' });
    }
  };

  const handleToggleLock = () => {
    const updatedLockedDna = {
      ...currentBrand.stage65LockedDNA,
      isLocked: !currentBrand.stage65LockedDNA.isLocked,
      lockedAt: !currentBrand.stage65LockedDNA.isLocked ? new Date().toISOString() : undefined
    };
    setCurrentBrand({
      ...currentBrand,
      stage65LockedDNA: updatedLockedDna
    });
  };

  return (
    <div className="min-h-screen bg-[#080c16] text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Sleek Top Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-rose-500 p-0.5 shadow-md shadow-indigo-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Cpu className="w-4 h-4 text-indigo-400" />
              </div>
            </div>
            <div>
              <span className="text-sm sm:text-base font-bold tracking-tight text-white font-sans">
                BrandEngine
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                AI Brand System
              </span>
            </div>
          </div>

          {/* Right Header Controls */}
          <div className="flex items-center gap-3">
            {/* Preset Showcase Dropdown */}
            <div className="relative group">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 hover:border-slate-700 transition cursor-pointer">
                <span className="text-slate-400 hidden md:inline">Example:</span>
                <span className="font-semibold text-sky-400">{currentBrand.name}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              </div>

              <div className="absolute right-0 mt-2 w-64 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl p-1.5 hidden group-hover:block transition-all z-50">
                <div className="px-3 py-1.5 text-[10px] font-mono uppercase text-slate-400 border-b border-slate-800 mb-1">
                  Ready-Made Examples
                </div>
                {PRESET_BRANDS.map(b => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => handleSelectPreset(b.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition cursor-pointer ${
                      b.id === currentBrand.id 
                        ? 'bg-indigo-600/20 text-indigo-300 font-semibold' 
                        : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <div>
                      <div>{b.name}</div>
                      <div className="text-[10px] text-slate-400">{b.industry}</div>
                    </div>
                    {b.id === currentBrand.id && (
                      <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Lock DNA Toggle */}
            <button
              type="button"
              onClick={handleToggleLock}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium border transition cursor-pointer ${
                currentBrand.stage65LockedDNA.isLocked
                  ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                  : 'bg-amber-500/10 text-amber-300 border-amber-500/30'
              }`}
              title="Lock Brand DNA as fixed reference"
            >
              {currentBrand.stage65LockedDNA.isLocked ? (
                <>
                  <Lock className="w-3.5 h-3.5" />
                  <span>Locked</span>
                </>
              ) : (
                <>
                  <Unlock className="w-3.5 h-3.5" />
                  <span>Draft</span>
                </>
              )}
            </button>

            {/* Export Kit */}
            <button
              type="button"
              onClick={() => setIsExportOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 transition cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Kit</span>
            </button>
          </div>
        </div>
      </header>

      {/* PROMINENT HERO WITH IDEA PROPOSE BAR */}
      <HeroIdeaInput 
        onProposeIdea={handleProposeIdea} 
        onSelectPreset={handleSelectPreset}
        currentBrandName={currentBrand.name}
      />

      {/* NEAT, INTUITIVE BRAND DASHBOARD (ORGANIZED IN 5 CLEAR STEPS) */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
        <NeatBrandDashboard
          brand={currentBrand}
          onUpdateBrand={setCurrentBrand}
          onOpenExportModal={() => setIsExportOpen(true)}
        />
      </main>

      {/* Clean Everyday Footer */}
      <footer className="w-full border-t border-slate-900 bg-slate-950 py-8 text-center text-xs text-slate-500 font-mono">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>AI Brand Intelligence Engine // Neat, Battle-Tested Brand Systems</span>
          </div>
          <div className="text-slate-400">
            Active: <b className="text-white">{currentBrand.name}</b> ({currentBrand.industry})
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        brand={currentBrand}
      />

      <NewBrandModal
        isOpen={isNewBrandOpen}
        onClose={() => setIsNewBrandOpen(false)}
        onCreateBrand={(newBrand) => {
          setCurrentBrand(newBrand);
          window.scrollTo({ top: 380, behavior: 'smooth' });
        }}
      />
    </div>
  );
};

export default App;
