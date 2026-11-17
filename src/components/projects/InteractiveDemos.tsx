import React, { useState } from 'react';
import { CheckCircle2, Play, RefreshCw, Cpu, ShieldAlert } from 'lucide-react';

export const ASTSimulator: React.FC = () => {
  const [stage, setStage] = useState<'idle' | 'llm' | 'ast'>('idle');

  const runSimulation = () => {
    setStage('llm');
    setTimeout(() => {
      setStage('ast');
    }, 1200);
  };

  const reset = () => setStage('idle');

  return (
    <div className="p-4 rounded bg-[#0A0B09] border border-white/[0.08] font-mono text-xs">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
        <span className="text-[#B6F23A] font-semibold flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5" />
          INTERACTIVE AST ARITHMETIC ORACLE SIMULATOR
        </span>
        {stage === 'idle' ? (
          <button
            onClick={runSimulation}
            className="px-2.5 py-1 rounded bg-[#B6F23A] text-[#0E0F0C] font-bold text-[11px] flex items-center gap-1 hover:bg-[#a5e026] transition-colors"
          >
            <Play className="w-3 h-3 fill-current" />
            RUN ORACLE TEST
          </button>
        ) : (
          <button
            onClick={reset}
            className="px-2 py-0.5 rounded bg-white/[0.05] text-[#9A9E95] text-[10px] flex items-center gap-1 hover:text-white"
          >
            <RefreshCw className="w-3 h-3" />
            RESET
          </button>
        )}
      </div>

      <div className="space-y-3">
        {/* Step 1: Input Expression */}
        <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04]">
          <span className="text-[#71766D] text-[10px] block mb-1">
            INPUT MULTI-PAGE DRHP TABLE STATEMENT:
          </span>
          <code className="text-white">
            Revenue = $482.35M | Operating Expense = ($291.10M + $48.25M)
          </code>
        </div>

        {/* Step 2: LLM Probabilistic Output */}
        <div
          className={`p-2.5 rounded border transition-all ${
            stage === 'llm' || stage === 'ast'
              ? 'bg-amber-950/20 border-amber-500/40'
              : 'bg-white/[0.02] border-white/[0.04] opacity-50'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-amber-400 font-semibold flex items-center gap-1 text-[11px]">
              <ShieldAlert className="w-3.5 h-3.5" />
              1. LLM PROBABILISTIC EXTRACTION (Raw Model Output):
            </span>
            {stage === 'ast' && (
              <span className="text-[10px] text-red-400 bg-red-950/50 px-1.5 py-0.2 rounded border border-red-800/40">
                ARITHMETIC DRIFT DETECTED (-$0.80M ERROR)
              </span>
            )}
          </div>
          <code className="text-[#9A9E95] block">
            Extracted Total Operating Expense: <span className="text-amber-300 font-bold">$340.15M</span> (Hallucinated rounding error)
          </code>
        </div>

        {/* Step 3: AST Deterministic Execution */}
        <div
          className={`p-2.5 rounded border transition-all ${
            stage === 'ast'
              ? 'bg-[#B6F23A]/10 border-[#B6F23A]/50'
              : 'bg-white/[0.02] border-white/[0.04] opacity-30'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[#B6F23A] font-semibold flex items-center gap-1 text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              2. PYTHON AST SANDBOX INTERCEPT (NodeVisitor):
            </span>
            {stage === 'ast' && (
              <span className="text-[10px] text-[#B6F23A] bg-[#B6F23A]/20 px-1.5 py-0.2 rounded font-bold">
                100% DETERMINISTIC PASS
              </span>
            )}
          </div>
          <code className="text-[#F4F4F0] block">
            Parsed: <span className="text-[#B6F23A]">ast.BinOp(left=291.10, op=Add(), right=48.25)</span>
            <br />
            Deterministic Evaluated Result: <span className="text-white font-bold">$339.35M</span>
            <span className="text-[#B6F23A] ml-2 font-mono">✓ Verified by AST Engine</span>
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
    <div className="p-4 rounded bg-[#0A0B09] border border-white/[0.08] font-mono text-xs">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
        <span className="text-[#B6F23A] font-semibold">
          ATOMIC REDIS LUA TOKEN-BUCKET SIMULATOR
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={simulateBurst}
            className="px-2.5 py-1 rounded bg-[#B6F23A] text-[#0E0F0C] font-bold text-[11px] hover:bg-[#a6e228]"
          >
            SEND BURST REQ
          </button>
          <button
            onClick={refill}
            className="px-2 py-0.5 rounded bg-white/[0.05] text-[#9A9E95] text-[10px] hover:text-white"
          >
            REFILL (5)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
          <span className="text-[#71766D] text-[10px] block mb-1">IN-MEMORY TOKEN CAPACITY:</span>
          <div className="flex gap-1.5 mt-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`h-4 flex-1 rounded-xs transition-colors ${
                  i <= tokens ? 'bg-[#B6F23A]' : 'bg-white/[0.08]'
                }`}
              />
            ))}
          </div>
          <span className="text-white text-[11px] mt-1 block">
            {tokens > 0 ? `${tokens} Tokens Available` : 'Bucket Exhausted (Rate Limited 429)'}
          </span>
        </div>

        <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
          <span className="text-[#71766D] text-[10px] block mb-1">LUA EXECUTION GUARANTEE:</span>
          <span className="text-white font-medium text-[11px]">
            {tokens > 0 ? '✓ Atomic INCRBY in Redis RAM' : '✕ Rejection returned without hitting PostgreSQL'}
          </span>
          <span className="text-[#71766D] text-[10px] block mt-1">
            Total Invocations: {burstCount} requests
          </span>
        </div>
      </div>
    </div>
  );
};
