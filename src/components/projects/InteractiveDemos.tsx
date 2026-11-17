import React, { useState } from 'react';
import { CheckCircle2, Play, RefreshCw, Cpu, AlertCircle } from 'lucide-react';

export const ASTSimulator: React.FC = () => {
  const [stage, setStage] = useState<'idle' | 'llm' | 'ast'>('idle');

  const runSimulation = () => {
    setStage('llm');
    setTimeout(() => {
      setStage('ast');
    }, 1100);
  };

  const reset = () => setStage('idle');

  return (
    <div className="p-4 rounded-lg bg-[#0F172A] border border-[#334155] font-mono text-xs">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#334155]">
        <span className="text-[#06B6D4] font-semibold flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5" />
          INTERACTIVE DEMO: PYTHON AST ARITHMETIC VERIFICATION
        </span>
        {stage === 'idle' ? (
          <button
            onClick={runSimulation}
            className="px-3 py-1 rounded bg-[#3B82F6] text-white font-semibold text-[11px] flex items-center gap-1 hover:bg-[#2563EB] transition-colors shadow-sm"
          >
            <Play className="w-3 h-3 fill-current" />
            RUN VERIFICATION
          </button>
        ) : (
          <button
            onClick={reset}
            className="px-2.5 py-0.5 rounded bg-[#1E293B] text-[#9CA3AF] text-[10px] flex items-center gap-1 hover:text-[#E5E7EB] border border-[#334155]"
          >
            <RefreshCw className="w-3 h-3" />
            RESET
          </button>
        )}
      </div>

      <div className="space-y-3">
        {/* Step 1: Input Expression */}
        <div className="p-3 rounded bg-[#1E293B]/70 border border-[#334155]">
          <span className="text-[#64748B] text-[10px] block mb-1 font-semibold">
            INPUT FINANCIAL TABLE STATEMENT (Multi-Page PDF):
          </span>
          <code className="text-[#E5E7EB]">
            Revenue = $482.35M | Operating Expenses = ($291.10M + $48.25M)
          </code>
        </div>

        {/* Step 2: Probabilistic Output */}
        <div
          className={`p-3 rounded border transition-all ${
            stage === 'llm' || stage === 'ast'
              ? 'bg-amber-950/20 border-amber-500/40'
              : 'bg-[#1E293B]/40 border-[#334155] opacity-50'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-amber-400 font-semibold flex items-center gap-1 text-[11px]">
              <AlertCircle className="w-3.5 h-3.5" />
              1. Unverified Model Extraction (Raw Output):
            </span>
            {stage === 'ast' && (
              <span className="text-[10px] text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-600/40">
                Arithmetic Drift Detected (-$0.80M)
              </span>
            )}
          </div>
          <code className="text-[#9CA3AF] block">
            Extracted Expense Total: <span className="text-amber-300 font-bold">$340.15M</span> (Rounding error in generative calculation)
          </code>
        </div>

        {/* Step 3: Deterministic AST Execution */}
        <div
          className={`p-3 rounded border transition-all ${
            stage === 'ast'
              ? 'bg-[#06B6D4]/10 border-[#06B6D4]/50'
              : 'bg-[#1E293B]/40 border-[#334155] opacity-30'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[#06B6D4] font-semibold flex items-center gap-1 text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              2. My Python AST Visitor Intercept (Safe Sandbox):
            </span>
            {stage === 'ast' && (
              <span className="text-[10px] text-[#06B6D4] bg-[#06B6D4]/20 px-2 py-0.5 rounded font-bold border border-[#06B6D4]/40">
                Deterministic Pass
              </span>
            )}
          </div>
          <code className="text-[#E5E7EB] block">
            Parsed Expression: <span className="text-[#06B6D4]">ast.BinOp(left=291.10, op=Add(), right=48.25)</span>
            <br />
            Verified Exact Sum: <span className="text-white font-bold">$339.35M</span>
            <span className="text-[#06B6D4] ml-2">✓ Corrected & Proven</span>
          </code>
        </div>
      </div>
    </div>
  );
};

export const RedisLuaVisualizer: React.FC = () => {
  const [tokens, setTokens] = useState(5);
  const [burstCount, setBurstCount] = useState(0);

  const simulateBurst = () => {
    setBurstCount((prev) => prev + 1);
    setTokens((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const refill = () => {
    setTokens(5);
  };

  return (
    <div className="p-4 rounded-lg bg-[#0F172A] border border-[#334155] font-mono text-xs">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#334155]">
        <span className="text-[#06B6D4] font-semibold">
          INTERACTIVE DEMO: ATOMIC REDIS LUA TOKEN BUCKET
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={simulateBurst}
            className="px-3 py-1 rounded bg-[#3B82F6] text-white font-semibold text-[11px] hover:bg-[#2563EB] transition-colors"
          >
            SEND REQUEST BURST
          </button>
          <button
            onClick={refill}
            className="px-2.5 py-0.5 rounded bg-[#1E293B] text-[#9CA3AF] text-[10px] hover:text-[#E5E7EB] border border-[#334155]"
          >
            REFILL (5)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="p-3 rounded bg-[#1E293B]/70 border border-[#334155]">
          <span className="text-[#64748B] text-[10px] block mb-1 font-semibold">TOKEN CAPACITY IN RAM:</span>
          <div className="flex gap-1.5 mt-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`h-4 flex-1 rounded-sm transition-colors ${
                  i <= tokens ? 'bg-[#06B6D4]' : 'bg-[#334155]'
                }`}
              />
            ))}
          </div>
          <span className="text-[#E5E7EB] text-[11px] mt-2 block font-medium">
            {tokens > 0 ? `${tokens} Tokens Remaining` : 'Rate Limited (HTTP 429)'}
          </span>
        </div>

        <div className="p-3 rounded bg-[#1E293B]/70 border border-[#334155]">
          <span className="text-[#64748B] text-[10px] block mb-1 font-semibold">ATOMIC EXECUTION GUARANTEE:</span>
          <span className="text-[#E5E7EB] font-medium text-[11px] block mt-1">
            {tokens > 0 ? '✓ Evaluated and decremented in 1 Redis round-trip' : '✕ Blocked in Redis before touching PostgreSQL'}
          </span>
          <span className="text-[#64748B] text-[10px] block mt-2">
            Total Simulated Requests: {burstCount}
          </span>
        </div>
      </div>
    </div>
  );
};
