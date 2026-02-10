import TopBar from '../components/layout/TopBar';
import Sidebar from '../components/layout/Sidebar';
import RightPanel from '../components/layout/RightPanel';

const MainLayout = ({ children }) => {
    return (
        <div className="flex h-screen w-screen bg-deep-charcoal text-gray-200 overflow-hidden font-sans selection:bg-signal-cyan selection:text-deep-charcoal">
            {/* Sidebar Rail */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex flex-1 flex-col overflow-hidden">
                <TopBar />

                <main className="flex-1 overflow-auto p-4 relative no-scrollbar">
                    {/* Grid Background overlay for that "technical" feel */}
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                    <div className="relative z-10 max-w-[1920px] mx-auto h-full">
                        {children}
                    </div>
                </main>
            </div>

            {/* Right Context Panel */}
            <RightPanel />
        </div>
    );
};

export default MainLayout;
