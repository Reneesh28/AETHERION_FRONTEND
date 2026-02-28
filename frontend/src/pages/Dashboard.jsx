import { useEffect, useState } from "react";
import { TrendingUp, AlertTriangle, Activity } from "lucide-react";
import clsx from "clsx";
import { useAuth } from "../App";
import {
    fetchRegime,
    fetchStrategy,
    fetchMarketSnapshot,
} from "../api/systemApi";

// Reusable Card
const Card = ({ title, children, className, accentColor = "cyan" }) => {
    const borderColors = {
        cyan: "border-t-signal-cyan/50",
        amber: "border-t-alert-amber/50",
        emerald: "border-t-positive-emerald/50",
        crimson: "border-t-risk-crimson/50",
    };

    return (
        <div
            className={clsx(
                "bg-soft-slate/40 backdrop-blur-sm border border-white/5 p-4 rounded-lg relative overflow-hidden group hover:border-white/10 transition-colors",
                className
            )}
        >
            <div
                className={clsx(
                    "absolute top-0 left-0 right-0 h-[2px]",
                    borderColors[accentColor] || "bg-white/10"
                )}
            ></div>

            {title && (
                <div className="flex items-center justify-between mb-4 relative z-10">
                    <h3 className="text-xs font-medium tracking-wider text-gray-400 uppercase">
                        {title}
                    </h3>
                </div>
            )}

            <div className="relative z-10">{children}</div>
        </div>
    );
};

const Dashboard = () => {
    const { token } = useAuth();

    const [regime, setRegime] = useState(null);
    const [strategy, setStrategy] = useState(null);
    const [market, setMarket] = useState(null);

    useEffect(() => {
        if (!token) return;

        // Load initial data once
        const loadInitialData = async () => {
            try {
                const regimeData = await fetchRegime(token);
                const strategyData = await fetchStrategy(token);
                const marketData = await fetchMarketSnapshot(token);

                setRegime(regimeData);
                setStrategy(strategyData);
                setMarket(marketData);
            } catch (err) {
                console.error("Initial load error:", err.message);
            }
        };

        loadInitialData();

        // 🔥 WebSocket Connection
        const socket = new WebSocket(
            `ws://127.0.0.1:8001/ws/live/?token=${token}`
        );

        socket.onopen = () => {
            console.log("🟢 WebSocket Connected");
        };

        socket.onmessage = (event) => {
            try {
                const message = JSON.parse(event.data);

                if (message.channel === "regime") {
                    setRegime(message.data);
                }

                if (message.channel === "strategy") {
                    setStrategy(message.data);
                }

                if (message.channel === "market") {
                    setMarket(message.data.snapshot);
                }

            } catch (err) {
                console.error("WebSocket parse error:", err);
            }
        };

        socket.onerror = (err) => {
            console.error("WebSocket error:", err);
        };

        socket.onclose = () => {
            console.log("🔴 WebSocket Disconnected");
        };

        // Cleanup on unmount
        return () => {
            socket.close();
        };

    }, [token]);

    const regime1m = regime?.regimes?.["1m"];
    const currentStrategy = strategy?.strategy || strategy?.decision || "—";

    return (
        <div className="grid grid-cols-12 gap-4 h-full">
            {/* Row 1: Dynamic Metrics */}
            <div className="col-span-12 grid grid-cols-4 gap-4">

                <Card title="CURRENT REGIME" accentColor="cyan">
                    <div className="text-2xl font-mono text-white mb-1">
                        {regime1m?.regime || "Loading..."}
                    </div>
                    <div className="text-xs text-gray-400">
                        Confidence: {regime1m?.confidence ?? "—"}
                    </div>
                </Card>

                <Card title="ACTIVE STRATEGY" accentColor="amber">
                    <div className="text-2xl font-mono text-white mb-1">
                        {currentStrategy}
                    </div>
                    <div className="text-xs text-gray-400">
                        Auto-Switched
                    </div>
                </Card>

                <Card title="MARKET STATUS" accentColor="emerald">
                    <div className="text-2xl font-mono text-white mb-1">
                        {market ? "LIVE" : "—"}
                    </div>
                    <div className="text-xs text-positive-emerald flex items-center gap-1">
                        <TrendingUp size={12} />
                        <span>Streaming Active</span>
                    </div>
                </Card>

                <Card title="SYSTEM HEALTH" accentColor="emerald">
                    <div className="text-2xl font-mono text-white mb-1">
                        ONLINE
                    </div>
                    <div className="text-xs text-gray-400">
                        All Engines Operational
                    </div>
                </Card>

            </div>

            {/* Row 2: Chart Placeholder */}
            <div className="col-span-8 row-span-2">
                <Card className="h-full flex flex-col" title="MARKET STRUCTURE ANALYSIS">
                    <div className="flex-1 flex items-center justify-center border border-dashed border-white/10 rounded bg-black/20">
                        <div className="text-center">
                            <Activity className="mx-auto text-gray-600 mb-2" size={32} />
                            <span className="text-xs text-gray-500 uppercase tracking-wider">
                                Visualization Module Loading...
                            </span>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Row 2: Live Feed Placeholder */}
            <div className="col-span-4 row-span-2">
                <Card className="h-full" title="LIVE INSTITUTIONAL FLOW">
                    <div className="space-y-1 font-mono text-xs">
                        <div className="text-gray-400">
                            Real-time streaming integration next step...
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;