import React, { useState } from "react";

export const BottumNavbar = () => {
    const [activeTab, setActiveTab] = useState("Lobby");

    const navItems = [
        { name: "Lobby", icon: "🎛" },
        { name: "Stake Originals", icon: "🔥" },
        { name: "Slots", icon: "🎰" },
        { name: "Live Casino", icon: "🏛" },
        { name: "Game Shows", icon: "🎁" },
        { name: "Stake Exclusives", icon: "🔖" },
        { name: "New Releases", icon: "🚀" },
    ];

    return (
        <div className="flex justify-center items-center bg-slate-900 py-1 px-4 space-y-1 rounded-full w-full max-w-5xl mx-auto mt-10">
            {navItems.map((item) => (
                <button
                    key={item.name}
                    onClick={() => setActiveTab(item.name)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                        activeTab === item.name
                            ? "bg-gray-700 text-white"
                            : "text-gray-400 hover:text-white"
                    }`}
                >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm font-medium">{item.name}</span>
                </button>
            ))}

            
        </div>

        
    );
};
