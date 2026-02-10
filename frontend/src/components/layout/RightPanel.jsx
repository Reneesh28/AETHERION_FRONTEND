import { Sliders, HelpCircle, FileText, X } from 'lucide-react';
import clsx from 'clsx';
import { useState } from 'react';

const PanelHeader = ({ title }) => (
    <div className="h-10 border-b border-panel-border flex items-center justify-between px-4 bg-white/5">
        <span className="text-xs font-medium tracking-widest uppercase text-gray-400">{title}</span>
    </div>
);

const ParameterRow = ({ label, value }) => (
    <div className="flex justify-between items-center py-2 border-b border-panel-border/50 text-xs">
        <span className="text-gray-500">{label}</span>
        <span className="font-mono text-signal-cyan">{value}</span>
    </div>
);

const RightPanel = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <aside className={clsx(
            "h-full border-l border-panel-border bg-soft-slate transition-all duration-300 flex flex-col z-20",
            isOpen ? "w-80" : "w-0 overflow-hidden" // Collapsible logic
        )}>
            {isOpen && (
                <>
                    <div className="p-4 border-b border-panel-border">
                        <h2 className="text-sm font-semibold text-white flex items-center gap-2">
                            <Sliders size={16} className="text-signal-cyan" />
                            MODEL PARAMETERS
                        </h2>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-6">

                        {/* Section 1 */}
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-wider text-gray-500 font-bold block mb-2">Alpha Signal Config</label>
                            <ParameterRow label="Lookback Period" value="200" />
                            <ParameterRow label="Volatility Window" value="14" />
                            <ParameterRow label="Decay Factor" value="0.94" />
                            <ParameterRow label="Confidence Threshold" value="85%" />
                        </div>

                        {/* Section 2 */}
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-wider text-gray-500 font-bold block mb-2">Execution Logic</label>
                            <ParameterRow label="Max Position" value="$2.5M" />
                            <ParameterRow label="Slippage Tolerance" value="2 bps" />
                            <ParameterRow label="Algo Strategy" value="TWAP" />
                        </div>

                        {/* Explanation Box */}
                        <div className="bg-white/5 p-3 rounded border border-white/5 mt-4">
                            <div className="flex items-center gap-2 mb-2 text-alert-amber">
                                <HelpCircle size={14} />
                                <span className="text-xs font-bold">INSIGHT NOTE</span>
                            </div>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                Current regime suggests mean reversion strategies are outperforming trend following due to choppy sideways action in N-Q futures.
                            </p>
                        </div>

                    </div>

                    {/* Footer */}
                    <div className="h-10 border-t border-panel-border flex items-center justify-between px-4 bg-deep-charcoal">
                        <button className="text-xs text-gray-500 hover:text-white flex items-center gap-1 transition-colors">
                            <FileText size={12} />
                            <span>VIEW LOGS</span>
                        </button>
                        <span className="text-[10px] text-gray-600 font-mono">ID: 8X-992A</span>
                    </div>
                </>
            )}
        </aside>
    );
};

export default RightPanel;
