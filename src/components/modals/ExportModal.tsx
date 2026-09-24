import React, { useState } from 'react';
import { BrandSystem } from '../../types/brand';
import { exportBrandBookMarkdown } from '../../services/brandEngine';
import { X, Download, Copy, Check, FileText, Code2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  brand: BrandSystem;
}

export const ExportModal: React.FC<Props> = ({ isOpen, onClose, brand }) => {
  const [activeTab, setActiveTab] = useState<'markdown' | 'json'>('markdown');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const markdownContent = exportBrandBookMarkdown(brand);
  const jsonContent = JSON.stringify(brand, null, 2);

  const currentContent = activeTab === 'markdown' ? markdownContent : jsonContent;
  const currentFilename = activeTab === 'markdown' 
    ? `${brand.name.toLowerCase().replace(/\s+/g, '-')}-brand-system.md`
    : `${brand.name.toLowerCase().replace(/\s+/g, '-')}-brand-system.json`;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([currentContent], { 
      type: activeTab === 'markdown' ? 'text/markdown' : 'application/json' 
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = currentFilename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div>
            <h3 className="text-base font-bold text-white font-sans">
              Export Brand Intelligence System
            </h3>
            <p className="text-xs text-slate-400">
              Complete launch-ready specification for {brand.name}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector & Actions Bar */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-slate-800 bg-slate-900/80">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('markdown')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                activeTab === 'markdown'
                  ? 'bg-indigo-600 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Markdown (.md)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('json')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                activeTab === 'json'
                  ? 'bg-indigo-600 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Structured JSON (.json)</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </button>
          </div>
        </div>

        {/* Content Preview Box */}
        <div className="flex-1 p-6 overflow-y-auto bg-slate-950 font-mono text-xs text-slate-300 leading-relaxed whitespace-pre-wrap select-all border-b border-slate-800">
          {currentContent}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-950 text-[11px] font-mono text-slate-500 flex items-center justify-between">
          <span>Schema Provenance Tagged // {activeTab.toUpperCase()}</span>
          <span>Filename: {currentFilename}</span>
        </div>
      </div>
    </div>
  );
};
