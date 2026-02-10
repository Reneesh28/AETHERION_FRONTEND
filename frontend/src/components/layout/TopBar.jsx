import { Wifi, Activity, Database, Clock, ChevronDown } from 'lucide-react';

const StatusIndicator = ({ label, value, status = 'neutral' }) => {
    const statusColors = {
        good: 'text-positive-emerald',
        warning: 'text-alert-amber',
        danger: 'text-risk-crimson',
        neutral: 'text-gray-400'
    };

    return (
        <div className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 border-r border-panel-border last:border-0">
            <span className="text-gray-500 uppercase tracking-wider text-[10px]">{label}</span>
            <span className={`font-medium ${statusColors[status]}`}>{value}</span>
        </div>
    );
};

const TopBar = () => {
    return (
        <header className="h-12 border-b border-panel-border bg-soft-slate/50 backdrop-blur-md flex items-center justify-between px-4 sticky top-0 z-10">

            {/* System Status - Left Side */}
            <div className="flex items-center h-full">
                <div className="flex items-center gap-2 mr-6">
                    <span className="w-2 h-2 rounded-full bg-positive-emerald animate-pulse"></span>
                    <span className="text-xs font-medium tracking-wide text-gray-300">AETHERION v2.4</span>
                </div>

                <div className="hidden md:flex h-full items-center border-l border-panel-border">
                    <StatusIndicator label="LATENCY" value="12ms" status="good" />
                    <StatusIndicator label="DATA STREAM" value="LIVE" status="good" />
                    <StatusIndicator label="REGIME" value="VOLATILE" status="warning" />
                </div>
            </div>

            {/* Context / Actions - Right Side */}
            <div className="flex items-center gap-4">

                {/* Active Dataset Selector */}
                <button className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/5 rounded hover:bg-white/10 transition-colors text-xs text-gray-300">
                    <Database size={14} className="text-signal-cyan" />
                    <span>N-Q FUTURES (1MIN)</span>
                    <ChevronDown size={12} className="opacity-50" />
                </button>

                {/* Time Window */}
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                    <Clock size={14} />
                    <span>NY SESSION: 10:42:15</span>
                </div>
            </div>
        </header>
    );
};

export default TopBar;
