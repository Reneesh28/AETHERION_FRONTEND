import { FlaskConical } from 'lucide-react';

const Research = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center p-8 text-center opacity-50">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                <FlaskConical size={32} className="text-alert-amber" />
            </div>
            <h2 className="text-xl font-medium tracking-widest text-gray-400 uppercase mb-2">Research Lab</h2>
            <p className="text-sm text-gray-600 font-mono">Backtesting environment ready.</p>
        </div>
    );
};

export default Research;
