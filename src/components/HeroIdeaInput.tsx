import React, { useState } from 'react';
import { Sparkles, ArrowRight, Lightbulb, CheckCircle2 } from 'lucide-react';

interface Props {
  onProposeIdea: (idea: { title: string; problem: string; audience: string; category: string }) => void;
  onSelectPreset: (brandId: string) => void;
  currentBrandName: string;
}

export const HeroIdeaInput: React.FC<Props> = ({ 
  onProposeIdea, 
  onSelectPreset,
  currentBrandName 
}) => {
  const [ideaText, setIdeaText] = useState('');
  const [category, setCategory] = useState('SaaS');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const sampleIdeas = [
    {
      label: '🏥 ICU Nurse Workload Telemetry',
      id: 'kora-health',
      title: 'Kora Health',
      prompt: 'A zero-tap telemetry badge that catches ICU nurse fatigue before acute burnout occurs.',
      category: 'HealthTech'
    },
    {
      label: '🚁 Medical Cold-Chain Drone Transit',
      id: 'aetheria-logistics',
      title: 'Aetheria',
      prompt: 'Sub-10 minute rooftop drone courier for urgent hospital biopsy specimens and radiopharma.',
      category: 'CleanTech'
    },
    {
      label: '🎧 Spatial Audio Game Engine',
      id: 'custom-vektor',
      title: 'Vektor Audio',
      prompt: 'An open-source real-time spatial acoustics engine for indie Unity and Unreal developers.',
      category: 'DevTools'
    },
    {
      label: '☕ Fermented Micro-Lot Coffee',
      id: 'custom-soma',
      title: 'Soma Roast',
      prompt: 'Fermentation-forward micro-lot coffee club connecting Colombian farms directly to roasters.',
      category: 'Consumer'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ideaText.trim()) return;

    setIsAnalyzing(true);
    setTimeout(() => {
      const words = ideaText.trim().split(' ');
      const candidateTitle = words.slice(0, 2).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

      onProposeIdea({
        title: candidateTitle || 'Nova Brand',
        problem: ideaText.trim(),
        audience: 'Modern teams looking for high reliability, fast deployment, and clear results',
        category
      });
      setIsAnalyzing(false);
      setIdeaText('');
    }, 450);
  };

  const handleSelectSample = (sample: typeof sampleIdeas[0]) => {
    if (sample.id === 'kora-health' || sample.id === 'aetheria-logistics') {
      onSelectPreset(sample.id);
    } else {
      setIdeaText(sample.prompt);
      setCategory(sample.category);
    }
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-slate-200/80 bg-gradient-to-b from-blue-50/40 via-white to-slate-50/50">
      {/* Soft Ambient Blue Halo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-blue-100/40 blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-3xl mx-auto px-4 text-center space-y-6">
        {/* Simple Step Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-semibold text-blue-700 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>AI Brand Intelligence Engine</span>
          <span className="text-blue-300">•</span>
          <span className="text-emerald-700 font-bold">Launch Ready</span>
        </div>

        {/* Clear, Concise Headline */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-sans">
            Turn Any Product Idea Into a <br />
            <span className="text-blue-600">
              Battle-Tested Brand System
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Enter your idea below. The AI strips out fluffy buzzwords, tests your differentiator, and prepares a launch-ready kit with names, logos, colors, and copy.
          </p>
        </div>

        {/* PROMINENT WHITE & BLUE INPUT BOX */}
        <div className="pt-2 max-w-2xl mx-auto">
          <form 
            onSubmit={handleSubmit}
            className="p-2 sm:p-2.5 rounded-2xl bg-white border border-slate-300/80 shadow-xl shadow-blue-900/5 transition focus-within:border-blue-600 focus-within:ring-3 focus-within:ring-blue-100"
          >
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 flex items-center px-3 py-1.5">
                <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mr-3" />
                <input
                  type="text"
                  value={ideaText}
                  onChange={(e) => setIdeaText(e.target.value)}
                  placeholder="Describe your idea (e.g. AI tool that alerts ICU nurses before burnout)..."
                  className="w-full bg-transparent text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none font-sans"
                />
              </div>

              <div className="flex items-center gap-2 justify-end px-1">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="px-2.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 focus:outline-none"
                >
                  <option value="SaaS">SaaS</option>
                  <option value="HealthTech">HealthTech</option>
                  <option value="CleanTech">CleanTech</option>
                  <option value="Consumer">Consumer</option>
                  <option value="DevTools">DevTools</option>
                </select>

                <button
                  type="submit"
                  disabled={isAnalyzing || !ideaText.trim()}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:pointer-events-none text-white font-semibold text-xs sm:text-sm shadow-md shadow-blue-500/25 transition cursor-pointer shrink-0"
                >
                  {isAnalyzing ? (
                    <>
                      <Sparkles className="w-4 h-4 animate-spin" />
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <span>Generate Brand</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>

          {/* Quick Idea Sample Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3 text-xs">
            <span className="text-slate-400 font-medium text-[11px]">Instant Examples:</span>
            {sampleIdeas.map((s, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectSample(s)}
                className={`px-3 py-1 rounded-full border text-[11px] font-medium transition cursor-pointer ${
                  currentBrandName === s.title
                    ? 'bg-blue-50 border-blue-300 text-blue-700 font-semibold'
                    : 'bg-white border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Current Active Brand Status */}
        <div className="pt-1 flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
          <span>Active Brand:</span>
          <span className="px-2.5 py-0.5 rounded-md bg-white border border-slate-200 font-bold text-blue-700 shadow-xs">
            {currentBrandName}
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-emerald-600 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Launch Ready
          </span>
        </div>
      </div>
    </section>
  );
};
