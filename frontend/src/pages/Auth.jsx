import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for real authentication logic
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-deep-charcoal text-gray-200 flex items-center justify-center relative overflow-hidden font-sans selection:bg-signal-cyan selection:text-deep-charcoal">
            {/* Grid Background overlay for that "technical" feel */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Glowing Accent Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-signal-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none"></div>

            {/* Glassmorphism Container */}
            <div className="relative z-10 w-full max-w-md mx-4 perspective-1000">
                <div className="bg-soft-slate/80 backdrop-blur-xl border border-panel-border rounded-2xl shadow-2xl overflow-hidden relative w-full h-[600px]">

                    {/* Header/Logo Section - Static top */}
                    <div className="absolute top-0 w-full p-8 z-20 flex flex-col items-center">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-soft-slate to-deep-charcoal border border-panel-border flex items-center justify-center mb-4 shadow-lg shadow-black/50">
                            <Zap className="w-6 h-6 text-signal-cyan" />
                        </div>
                        <h1 className="text-2xl font-bold tracking-tight">AETHERION</h1>
                        <p className="text-xs text-gray-500 tracking-widest mt-1 uppercase">Intelligence Platform</p>
                    </div>

                    {/* Sliding Forms Container */}
                    <div
                        className={`absolute top-[140px] w-[200%] h-[calc(100%-140px)] flex transition-transform duration-700 ease-in-out ${isLogin ? 'translate-x-0' : '-translate-x-1/2'
                            }`}
                    >
                        {/* ---------------- LOGIN FORM ---------------- */}
                        <div className="w-1/2 h-full flex flex-col px-8 pb-8">
                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">Welcome Back</h2>
                                <p className="text-sm text-gray-400">Authenticate to access institutional signals.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-4">
                                <div>
                                    <label className="block text-xs font-medium text-gray-400 mb-1">Email Address</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="h-4 w-4 text-gray-500" />
                                        </div>
                                        <input
                                            type="email"
                                            className="w-full bg-deep-charcoal border border-panel-border rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-signal-cyan/50 focus:ring-1 focus:ring-signal-cyan/50 transition-colors placeholder-gray-600"
                                            placeholder="analyst@fund.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between mb-1">
                                        <label className="block text-xs font-medium text-gray-400">Password</label>
                                        <a href="#" className="text-xs text-signal-cyan hover:text-signal-cyan/80 transition-colors">Forgot?</a>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Lock className="h-4 w-4 text-gray-500" />
                                        </div>
                                        <input
                                            type="password"
                                            className="w-full bg-deep-charcoal border border-panel-border rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-signal-cyan/50 focus:ring-1 focus:ring-signal-cyan/50 transition-colors placeholder-gray-600"
                                            placeholder="••••••••"
                                            required
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="mt-6 w-full flex items-center justify-center space-x-2 bg-signal-cyan/10 hover:bg-signal-cyan/20 border border-signal-cyan/30 text-signal-cyan rounded-lg py-3 text-sm font-medium transition-all group"
                                >
                                    <span>Establish Secure Session</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>

                            <div className="mt-8 text-center">
                                <p className="text-xs text-gray-500">
                                    No clearance?{' '}
                                    <button
                                        type="button"
                                        onClick={() => setIsLogin(false)}
                                        className="text-signal-cyan hover:text-white transition-colors cursor-pointer"
                                    >
                                        Request Access
                                    </button>
                                </p>
                            </div>
                        </div>

                        {/* ---------------- REGISTER FORM ---------------- */}
                        <div className="w-1/2 h-full flex flex-col px-8 pb-8">
                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">Request Access</h2>
                                <p className="text-sm text-gray-400">Initialize a new operative profile.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-4">
                                <div>
                                    <label className="block text-xs font-medium text-gray-400 mb-1">Full Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="h-4 w-4 text-gray-500" />
                                        </div>
                                        <input
                                            type="text"
                                            className="w-full bg-deep-charcoal border border-panel-border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-signal-cyan/50 focus:ring-1 focus:ring-signal-cyan/50 transition-colors placeholder-gray-600"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-400 mb-1">Institutional Email</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="h-4 w-4 text-gray-500" />
                                        </div>
                                        <input
                                            type="email"
                                            className="w-full bg-deep-charcoal border border-panel-border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-signal-cyan/50 focus:ring-1 focus:ring-signal-cyan/50 transition-colors placeholder-gray-600"
                                            placeholder="analyst@fund.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs font-medium text-gray-400 mb-1">Password</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Lock className="h-4 w-4 text-gray-500" />
                                            </div>
                                            <input
                                                type="password"
                                                className="w-full bg-deep-charcoal border border-panel-border rounded-lg pl-10 pr-3 py-2 text-sm focus:outline-none focus:border-signal-cyan/50 focus:ring-1 focus:ring-signal-cyan/50 transition-colors placeholder-gray-600"
                                                placeholder="••••••••"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-400 mb-1">Confirm</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <ShieldCheck className="h-4 w-4 text-gray-500" />
                                            </div>
                                            <input
                                                type="password"
                                                className="w-full bg-deep-charcoal border border-panel-border rounded-lg pl-10 pr-3 py-2 text-sm focus:outline-none focus:border-signal-cyan/50 focus:ring-1 focus:ring-signal-cyan/50 transition-colors placeholder-gray-600"
                                                placeholder="••••••••"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="mt-4 w-full flex items-center justify-center space-x-2 bg-signal-cyan/10 hover:bg-signal-cyan/20 border border-signal-cyan/30 text-signal-cyan rounded-lg py-3 text-sm font-medium transition-all group"
                                >
                                    <span>Initialize Profile</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>

                            <div className="mt-6 text-center">
                                <p className="text-xs text-gray-500">
                                    Already have clearance?{' '}
                                    <button
                                        type="button"
                                        onClick={() => setIsLogin(true)}
                                        className="text-signal-cyan hover:text-white transition-colors cursor-pointer"
                                    >
                                        Sign In
                                    </button>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* System Status Footer */}
                <div className="mt-8 text-center flex items-center justify-center space-x-4 text-xs text-gray-600">
                    <div className="flex items-center space-x-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-signal-cyan animate-pulse"></div>
                        <span>Core Systems Online</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center space-x-1.5">
                        <ShieldCheck className="w-3 h-3" />
                        <span>Encrypted Connection</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
