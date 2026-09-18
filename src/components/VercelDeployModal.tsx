import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Globe,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Terminal,
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';

interface VercelDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyText: (text: string, label: string) => void;
}

export function VercelDeployModal({ isOpen, onClose, onCopyText }: VercelDeployModalProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    onCopyText(text, label);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const vercelJsonContent = `{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-4 sm:my-8 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-6 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800 flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-black border border-slate-800 flex items-center justify-center text-white shadow-lg">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 76 65" fill="none">
                  <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Vercel Deployment & Custom Domain
                </h3>
                <p className="text-xs sm:text-sm text-cyan-300">
                  Step-by-step production rollout guide with included <span className="font-mono text-white">vercel.json</span>
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
            
            {/* Status Banner */}
            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-200">
                <strong className="text-white">Project Configured:</strong> A production-grade <code className="text-emerald-300 bg-emerald-950 px-1.5 py-0.5 rounded font-mono">vercel.json</code> file has already been added to the root of this project. It sets up automatic single-page rewrites and Vite bundling on Vercel's global Edge Network.
              </div>
            </div>

            {/* Step 1: Deploy to Vercel */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-bold text-xs flex items-center justify-center">
                  1
                </span>
                <h4 className="text-base font-bold text-white">
                  Push to GitHub & Import into Vercel
                </h4>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2">
                <p>1. Export or push this project code to your GitHub account (<strong>github.com/Hammad656/portfolio</strong>).</p>
                <p>2. Open <a href="https://vercel.com/new" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline font-semibold inline-flex items-center gap-1">vercel.com/new <ExternalLink className="w-3 h-3" /></a> and sign in with GitHub.</p>
                <p>3. Select your portfolio repository and click <strong>Import</strong>.</p>
                <p>4. Vercel will auto-detect Vite. Click <strong>Deploy</strong>!</p>
              </div>

              {/* CLI Alternative */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-300 overflow-x-auto">
                  <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>npx vercel --prod</span>
                </div>
                <button
                  onClick={() => handleCopy("npx vercel --prod", "cli", "CLI command copied")}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition-colors flex items-center gap-1 shrink-0"
                >
                  {copiedKey === 'cli' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'cli' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Step 2: Custom Domain Setup */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-bold text-xs flex items-center justify-center">
                  2
                </span>
                <h4 className="text-base font-bold text-white">
                  Add Your Custom Domain
                </h4>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2">
                <p>In your Vercel Project Dashboard, navigate to <strong>Settings &rarr; Domains</strong> and enter your domain (e.g., <code className="text-cyan-300 font-mono">hammadsaleem.dev</code> or <code className="text-cyan-300 font-mono">hammad.space</code>).</p>
                <p>Add the following DNS records at your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):</p>
              </div>

              {/* DNS Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-800">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                    <tr>
                      <th className="p-3">Type</th>
                      <th className="p-3">Name / Host</th>
                      <th className="p-3">Value / Target</th>
                      <th className="p-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-200 bg-slate-900/50">
                    <tr>
                      <td className="p-3 font-bold text-cyan-400">A</td>
                      <td className="p-3">@</td>
                      <td className="p-3">76.76.21.21</td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => handleCopy("76.76.21.21", "a-record", "A Record copied")}
                          className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-300"
                        >
                          {copiedKey === 'a-record' ? 'Copied' : 'Copy'}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-blue-400">CNAME</td>
                      <td className="p-3">www</td>
                      <td className="p-3">cname.vercel-dns.com</td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => handleCopy("cname.vercel-dns.com", "cname-record", "CNAME Record copied")}
                          className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-300"
                        >
                          {copiedKey === 'cname-record' ? 'Copied' : 'Copy'}
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* vercel.json preview */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  vercel.json (Included in Project)
                </span>
                <button
                  onClick={() => handleCopy(vercelJsonContent, "vjson", "vercel.json content copied")}
                  className="text-xs text-cyan-400 hover:text-cyan-300 font-mono flex items-center gap-1"
                >
                  {copiedKey === 'vjson' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'vjson' ? 'Copied JSON' : 'Copy vercel.json'}</span>
                </button>
              </div>

              <pre className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                {vercelJsonContent}
              </pre>
            </div>

          </div>

          {/* Footer */}
          <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <a
              href="https://vercel.com/new"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-white text-black font-bold text-xs flex items-center gap-2 hover:bg-slate-200 transition-colors"
            >
              <span>Go to Vercel Deploy</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
            >
              Got It
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
