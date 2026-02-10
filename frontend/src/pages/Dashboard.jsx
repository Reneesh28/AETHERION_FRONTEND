import { TrendingUp, AlertTriangle, Activity } from 'lucide-react';
import clsx from 'clsx';

// A simple reusable Card component for now
const Card = ({ title, children, className, accentColor = "cyan" }) => {
    const borderColors = {
        cyan: "border-t-signal-cyan/50",
        amber: "border-t-alert-amber/50",
        emerald: "border-t-positive-emerald/50",
        crimson: "border-t-risk-crimson/50"
    };

    return (
        <div className={clsx(
            "bg-soft-slate/40 backdrop-blur-sm border border-white/5 p-4 rounded-lg relative overflow-hidden group hover:border-white/10 transition-colors",
            "before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity",
            className
        )}>
            {/* Top Border Accent */}
            <div className={clsx("absolute top-0 left-0 right-0 h-[2px]", borderColors[accentColor] || "bg-white/10")}></div>

            {title && (
                <div className="flex items-center justify-between mb-4 relative z-10">
                    <h3 className="text-xs font-medium tracking-wider text-gray-400 uppercase">{title}</h3>
                </div>
            )}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

const Dashboard = () => {
    return (
        <div className="grid grid-cols-12 gap-4 h-full">
            {/* Row 1: Key Metrics */}
            <div className="col-span-12 grid grid-cols-4 gap-4">
                <Card title="TOTAL P&L" accentColor="emerald">
                    <div className="text-2xl font-mono text-white mb-1">+$1,240,500</div>
                    <div className="text-xs text-positive-emerald flex items-center gap-1">
                        <TrendingUp size={12} />
                        <span>+2.4% vs Prev</span>
                    </div>
                </Card>
                <Card title="SHARPE RATIO" accentColor="cyan">
                    <div className="text-2xl font-mono text-white mb-1">3.12</div>
                    <div className="text-xs text-gray-400">Robust</div>
                </Card>
                <Card title="VAR (99%)" accentColor="crimson">
                    <div className="text-2xl font-mono text-white mb-1">$450k</div>
                    <div className="text-xs text-risk-crimson flex items-center gap-1">
                        <AlertTriangle size={12} />
                        <span>High Exposure</span>
                    </div>
                </Card>
                <Card title="ACTIVE SIGNALS" accentColor="amber">
                    <div className="text-2xl font-mono text-white mb-1">14</div>
                    <div className="text-xs text-alert-amber">3 Pending Exec</div>
                </Card>
            </div>

            {/* Row 2: Main Chart Area */}
            <div className="col-span-8 row-span-2">
                <Card className="h-full flex flex-col" title="MARKET STRUCTURE ANALYSIS">
                    <div className="flex-1 flex items-center justify-center border border-dashed border-white/10 rounded bg-black/20">
                        {/* Placeholder for chart */}
                        <div className="text-center">
                            <Activity className="mx-auto text-gray-600 mb-2" size={32} />
                            <span className="text-xs text-gray-500 uppercase tracking-wider">Visualization Module Loading...</span>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Row 2: Live Feed / Order Book */}
            <div className="col-span-4 row-span-2">
                <Card className="h-full" title="LIVE INSTITUTIONAL FLOW">
                    <div className="space-y-1 font-mono text-xs">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="flex justify-between items-center py-1 opacity-80 hover:bg-white/5 px-2 rounded cursor-pointer">
                                <span className={i % 3 === 0 ? "text-risk-crimson" : "text-positive-emerald"}>
                                    {i % 3 === 0 ? "SELL" : "BUY"}
                                </span>
                                <span className="text-gray-300">AAPL</span>
                                <span className="text-gray-400">142.50</span>
                                <span className="text-gray-500">2,400</span>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
