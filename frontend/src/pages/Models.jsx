import { Cpu } from 'lucide-react';

const Models = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center p-8 text-center opacity-50">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                <Cpu size={32} className="text-signal-cyan" />
            </div>
            <h2 className="text-xl font-medium tracking-widest text-gray-400 uppercase mb-2">AI Models</h2>
            <p className="text-sm text-gray-600 font-mono">Neural networks initializing...</p>
        </div>
    );
};

export default Models;
