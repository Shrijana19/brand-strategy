import React from 'react';
import { 
  Search, 
  Target, 
  Radar, 
  Layers, 
  GitFork, 
  Palette, 
  AlertOctagon, 
  Rocket, 
  Lock, 
  ShieldCheck, 
  Activity
} from 'lucide-react';

export type StageId = 
  | 'stage1' 
  | 'stage2' 
  | 'stage25' 
  | 'stage3' 
  | 'stage35' 
  | 'stage4' 
  | 'stage5' 
  | 'stage6' 
  | 'stage65' 
  | 'stage7' 
  | 'stage75';

interface Props {
  currentStage: StageId;
  onSelectStage: (stage: StageId) => void;
  brandLocked: boolean;
  driftStatus?: string;
}

export const StageNavigation: React.FC<Props> = ({
  currentStage,
  onSelectStage,
  brandLocked,
  driftStatus
}) => {
  const stages: { id: StageId; number: string; title: string; icon: React.ElementType; badge?: string }[] = [
    { id: 'stage1', number: '1.0', title: 'Discover', icon: Search },
    { id: 'stage2', number: '2.0', title: 'Position', icon: Target },
    { id: 'stage25', number: '2.5', title: 'Market Scan', icon: Radar },
    { id: 'stage3', number: '3.0', title: 'Shape Brand', icon: Layers },
    { id: 'stage35', number: '3.5', title: 'DNA Graph', icon: GitFork },
    { id: 'stage4', number: '4.0', title: 'Visualize', icon: Palette },
    { id: 'stage5', number: '5.0', title: 'Challenge', icon: AlertOctagon },
    { id: 'stage6', number: '6.0', title: 'Launch Kit', icon: Rocket },
    { id: 'stage65', number: '6.5', title: 'Brand Lock', icon: Lock, badge: brandLocked ? 'LOCKED' : undefined },
    { id: 'stage7', number: '7.0', title: 'Guardian', icon: ShieldCheck, badge: 'LIVE' },
    { id: 'stage75', number: '7.5', title: 'Drift Detector', icon: Activity, badge: driftStatus === 'drift_detected' ? 'ALERT' : undefined }
  ];

  return (
    <div className="w-full bg-slate-950/60 border-b border-slate-800/80 sticky top-16 z-30 backdrop-blur-md overflow-x-auto scrollbar-none py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center space-x-1 min-w-max">
        {stages.map(stage => {
          const Icon = stage.icon;
          const isActive = currentStage === stage.id;
          
          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => onSelectStage(stage.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition cursor-pointer relative ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/80'
              }`}
            >
              <span className={`text-[10px] font-mono px-1 rounded ${isActive ? 'bg-indigo-700/60 text-indigo-100' : 'text-slate-500'}`}>
                {stage.number}
              </span>
              <Icon className="w-3.5 h-3.5" />
              <span>{stage.title}</span>

              {stage.badge && (
                <span className={`text-[9px] font-mono uppercase px-1 rounded font-bold ${
                  stage.badge === 'LIVE' 
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                    : stage.badge === 'ALERT'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    : 'bg-indigo-500/30 text-indigo-200'
                }`}>
                  {stage.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
