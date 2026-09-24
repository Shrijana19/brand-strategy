import React, { useState } from 'react';
import { BrandSystem, DnaNode, DnaNodeType } from '../../types/brand';
import { propagateDnaChange, getDownstreamNodes } from '../../services/brandEngine';
import { 
  GitFork, 
  ArrowRight, 
  ArrowDown, 
  AlertCircle, 
  RefreshCw, 
  Edit3, 
  CheckCircle, 
  History, 
  Layers,
  Sparkles
} from 'lucide-react';

interface Props {
  brand: BrandSystem;
  onUpdateBrand: (updated: BrandSystem) => void;
}

export const Stage35GraphView: React.FC<Props> = ({ brand, onUpdateBrand }) => {
  const [selectedNodeId, setSelectedNodeId] = useState<DnaNodeType>('positioning');
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState('');
  const [editReason, setEditReason] = useState('');

  const selectedNode = brand.stage35Graph.find(n => n.id === selectedNodeId) || brand.stage35Graph[0];
  const downstreamAffected = getDownstreamNodes(selectedNodeId, brand.stage35Graph);

  const startEdit = () => {
    setEditValue(selectedNode.summary);
    setEditReason(`User requested adjustment to ${selectedNode.label} based on updated requirements.`);
    setIsEditing(true);
  };

  const handleApplyChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editValue.trim()) return;

    const { updatedBrand } = propagateDnaChange(
      brand,
      selectedNodeId,
      editValue.trim(),
      editReason.trim() || 'Direct manual strategic adjustment.'
    );

    onUpdateBrand(updatedBrand);
    setIsEditing(false);
  };

  const getStatusBadge = (status: DnaNode['status']) => {
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
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
              Stage 3.5 // Brand DNA Graph
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Connected System DAG & Change Propagation Engine
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Brands are connected systems, not isolated decisions. Changing any node recalculates its downstream dependencies with a full causal diff.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono">
          <span className="text-slate-400">Total Graph Nodes:</span>
          <span className="text-sky-400 font-bold">{brand.stage35Graph.length}</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">Causal History:</span>
          <span className="text-emerald-400 font-bold">{brand.causalDiffHistory.length}</span>
        </div>
      </div>

      {/* Interactive DAG Topological Flow Grid */}
      <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <GitFork className="w-4 h-4 text-indigo-400" />
            Topological Dependency Chain (Click Node to Inspect & Propagate)
          </h3>
          <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
            Interactive Node State
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 pt-2">
          {brand.stage35Graph.map((node, index) => {
            const isSelected = selectedNodeId === node.id;
            const isDownstream = downstreamAffected.includes(node.id);

            return (
              <button
                key={node.id}
                type="button"
                onClick={() => {
                  setSelectedNodeId(node.id);
                  setIsEditing(false);
                }}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-indigo-600/20 border-indigo-400 shadow-lg shadow-indigo-500/20 ring-1 ring-indigo-400'
                    : isDownstream
                    ? 'bg-amber-950/20 border-amber-500/40 hover:border-amber-400'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono text-slate-500 font-semibold">
                      0{index + 1}
                    </span>
                    <span className={`text-[9px] font-mono px-1 rounded border ${getStatusBadge(node.status)}`}>
                      {node.status}
                    </span>
                  </div>
                  <h4 className={`text-xs font-bold font-sans line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                    {node.label}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-snug">
                    {node.summary}
                  </p>
                </div>

                {isDownstream && (
                  <div className="mt-2 pt-1 border-t border-amber-500/20 text-[9px] font-mono text-amber-400 flex items-center gap-1">
                    <RefreshCw className="w-2.5 h-2.5" />
                    <span>Downstream</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Node Inspector & Change Propagation Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Node Inspector Detail */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold border ${getStatusBadge(selectedNode.status)}`}>
                  {selectedNode.status}
                </span>
                <span className="text-xs font-mono text-slate-400">Node ID: {selectedNode.id}</span>
              </div>
              <h3 className="text-xl font-bold text-white mt-1 font-sans">
                {selectedNode.label}
              </h3>
            </div>

            {!isEditing && (
              <button
                type="button"
                onClick={startEdit}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Simulate Node Change</span>
              </button>
            )}
          </div>

          {/* Edit Form or Read-Only Summary */}
          {isEditing ? (
            <form onSubmit={handleApplyChange} className="space-y-4 p-4 rounded-xl bg-slate-950 border border-indigo-500/40">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-indigo-400 font-bold uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Live Change Propagation Tool
                </span>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="text-xs text-slate-500 hover:text-slate-300"
                >
                  Cancel
                </button>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  New Value for {selectedNode.label}:
                </label>
                <textarea
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-indigo-400"
                  placeholder="Enter adjusted node definition..."
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Change Rationale / Explanation:
                </label>
                <input
                  type="text"
                  value={editReason}
                  onChange={(e) => setEditReason(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-indigo-400"
                  placeholder="Reason for change..."
                />
              </div>

              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
                <span className="font-semibold text-amber-300">Downstream Impact Notice:</span>
                <p className="mt-1 text-[11px] leading-relaxed">
                  Saving this change will automatically flag {downstreamAffected.length} downstream nodes as requiring calibration and create a permanent Causal Diff entry.
                </p>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white"
                >
                  Discard
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition"
                >
                  Propagate Change & Recalculate
                </button>
              </div>
            </form>
          ) : (
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-slate-400">Current Node Content:</span>
              <p className="text-sm text-slate-200 leading-relaxed font-sans font-medium">
                {selectedNode.summary}
              </p>
            </div>
          )}

          {/* Dependencies Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800 space-y-2">
              <span className="font-mono text-slate-400 font-semibold flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5 text-sky-400 rotate-180" />
                Upstream Dependencies ({selectedNode.upstreamDependencies.length}):
              </span>
              {selectedNode.upstreamDependencies.length === 0 ? (
                <p className="text-slate-500 italic">None (Root source node)</p>
              ) : (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedNode.upstreamDependencies.map(dep => (
                    <span key={dep} className="px-2 py-0.5 rounded bg-slate-800 text-sky-300 font-mono text-[11px]">
                      {dep}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800 space-y-2">
              <span className="font-mono text-slate-400 font-semibold flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                Downstream Dependencies ({selectedNode.downstreamDependencies.length}):
              </span>
              {selectedNode.downstreamDependencies.length === 0 ? (
                <p className="text-slate-500 italic">None (Terminal leaf node)</p>
              ) : (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedNode.downstreamDependencies.map(dep => (
                    <span key={dep} className="px-2 py-0.5 rounded bg-slate-800 text-emerald-300 font-mono text-[11px]">
                      {dep}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Contradiction Risks */}
          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-2">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-400" />
              <h4 className="text-xs font-mono font-bold uppercase text-rose-300">
                Contradiction Risks Guarded By This Node:
              </h4>
            </div>
            <ul className="space-y-1 text-xs text-rose-200/90 pl-6 list-disc">
              {selectedNode.contradictionRisks.map((risk, i) => (
                <li key={i}>{risk}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Causal Diff History Trail */}
        <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-800">
              <History className="w-4 h-4 text-indigo-400" />
              <h4 className="text-sm font-bold text-white font-sans">
                Causal Diff Trail ({brand.causalDiffHistory.length})
              </h4>
            </div>

            <p className="text-xs text-slate-400 mb-3">
              Every meaningful change preserves an audit trail of downstream regenerations:
            </p>

            <div className="space-y-3 overflow-y-auto max-h-[380px] pr-1">
              {brand.causalDiffHistory.map((diff, index) => (
                <div key={index} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                    <span className="text-indigo-400 font-bold uppercase">CHANGE: {diff.changedNode}</span>
                    <span>{new Date(diff.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>

                  <div className="text-slate-300 font-sans">
                    <span className="text-slate-500 line-through mr-1.5">{diff.previousValue}</span>
                    <span className="text-emerald-400 font-medium">→ {diff.newValue}</span>
                  </div>

                  <div className="pt-2 border-t border-slate-800/60">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                      Downstream Effects:
                    </span>
                    <ul className="space-y-1 text-[11px] text-slate-400 list-disc pl-4">
                      {diff.downstreamEffects.map((effect, i) => (
                        <li key={i}>{effect}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-500 text-center">
            Rule 10: Never silently regenerate anything.
          </div>
        </div>
      </div>
    </div>
  );
};
