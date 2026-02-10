import { LayoutDashboard, LineChart, Cpu, FlaskConical, Bell, Settings, Search } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { useState } from 'react';

const NavItem = ({ icon: Icon, to, label }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <NavLink
                to={to}
                className={({ isActive }) => clsx(
                    "w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-200 group relative z-10",
                    isActive
                        ? "text-signal-cyan bg-signal-cyan/10"
                        : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                )}
            >
                {({ isActive }) => (
                    <>
                        <Icon size={20} strokeWidth={1.5} />
                        {isActive && (
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-signal-cyan shadow-[0_0_8px_rgba(0,191,165,0.5)]" />
                        )}
                    </>
                )}
            </NavLink>

            {/* Institutional Tooltip */}
            <div className={clsx(
                "absolute left-full ml-4 px-3 py-1.5 bg-deep-charcoal border border-white/10 text-xs font-medium text-gray-200 tracking-wider whitespace-nowrap z-50 pointer-events-none transition-all duration-200 ease-out shadow-xl",
                isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
            )}>
                {label}
                {/* Connector Line */}
                <div className="absolute left-0 top-1/2 -translate-x-full -ml-[1px] w-4 h-px bg-white/10"></div>
            </div>
        </div>
    );
};

const Sidebar = () => {
    return (
        <aside className="w-16 h-full border-r border-panel-border bg-soft-slate flex flex-col items-center py-4 z-20">
            {/* Brand Icon / Logo */}
            <div className="mb-8 w-10 h-10 bg-deep-charcoal border border-panel-border rounded flex items-center justify-center group cursor-pointer hover:border-signal-cyan/50 transition-colors">
                <div className="w-4 h-4 bg-signal-cyan rotate-45 shadow-[0_0_10px_rgba(0,191,165,0.3)] group-hover:shadow-[0_0_15px_rgba(0,191,165,0.6)] transition-all"></div>
            </div>

            {/* Main Navigation */}
            <nav className="flex-1 flex flex-col gap-2 w-full items-center">
                <NavItem icon={LayoutDashboard} to="/" label="MARKET OVERVIEW" />
                <NavItem icon={LineChart} to="/analytics" label="ANALYTICS" />
                <NavItem icon={Cpu} to="/models" label="AI MODELS" />
                <NavItem icon={FlaskConical} to="/research" label="RESEARCH LAB" />

                <div className="h-px w-8 bg-white/5 my-2"></div>

                {/* Placeholder for Search - not a link usually but keeping structure */}
                <button className="w-12 h-12 flex items-center justify-center rounded-lg text-gray-500 hover:text-gray-300 hover:bg-white/5 transition-all relative group">
                    <Search size={20} strokeWidth={1.5} />
                    {/* Simple tooltip for non-links just for consistency if needed, keeping simple for now */}
                </button>
            </nav>

            {/* Bottom Actions */}
            <div className="flex flex-col gap-2 mb-2 w-full items-center">
                <button className="w-12 h-12 flex items-center justify-center rounded-lg text-gray-500 hover:text-gray-300 hover:bg-white/5 transition-all">
                    <Bell size={20} strokeWidth={1.5} />
                </button>
                <button className="w-12 h-12 flex items-center justify-center rounded-lg text-gray-500 hover:text-gray-300 hover:bg-white/5 transition-all">
                    <Settings size={20} strokeWidth={1.5} />
                </button>
                {/* User Avatar Placeholder */}
                <div className="w-10 h-10 mt-2 rounded bg-white/5 border border-white/10 hover:border-white/20 cursor-pointer transition-colors"></div>
            </div>
        </aside>
    );
};

export default Sidebar;
