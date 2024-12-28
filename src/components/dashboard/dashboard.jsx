import React, { useState } from "react";
import game1 from '../../assets/images/cashino game/cashino game1.jpeg'
// import game2 from '../../assets/images/cashino game/cashino game2.jpeg'


const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("Lobby");
    const [index, setIndex] = useState(0);



    const navItems = [
        { name: "Lobby", icon: "🎛" },
        { name: "Stake Originals", icon: "🔥" },
        { name: "Slots", icon: "🎰" },
        { name: "Live Casino", icon: "🏛" },
        { name: "Game Shows", icon: "🎁" },
        { name: "Stake Exclusives", icon: "🔖" },
        { name: "New Releases", icon: "🚀" },
    ];

    const cardMap = [
        // lobby
        [
            {
                'image': game1,
                'player': '100 playing'
            },
            {
                'image': game1,
                'player': '100 playing'
            },
            {
                'image': game1,
                'player': '100 playing'
            },
            {
                'image': game1,
                'player': '100 playing'
            },
            {
                'image': game1,
                'player': '100 playing'
            },
            {
                'image': game1,
                'player': '100 playing'
            },
            {
                'image': game1,
                'player': '100 playing'
            },
            {
                'image': game1,
                'player': '100 playing'
            },
            {
                'image': game1,
                'player': '100 playing'
            },
            {
                'image': game1,
                'player': '100 playing'
            },
            {
                'image': game1,
                'player': '100 playing'
            },
            {
                'image': game1,
                'player': '100 playing'
            },
            {
                'image': game1,
                'player': '100 playing'
            },
            {
                'image': game1,
                'player': '100 playing'
            },        
        ],
        // stake originals
        [
            {
                'image': game1,
                'player': '200 playing'
            },
            {
                'image': game1,
                'player': '200 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },        
        ],
        // slots
        [
            {
                'image': game1,
                'player': '300 playing'
            },
            {
                'image': game1,
                'player': '300 playing'
            },
            {
                'image': game1,
                'player': '300 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },        
        ],
        // live casino
        [
            {
                'image': game1,
                'player': '400 playing'
            },
            {
                'image': game1,
                'player': '400 playing'
            },
            {
                'image': game1,
                'player': '400 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },        
        ],
        // game shows
        [
            {
                'image': game1,
                'player': '500 playing'
            },
            {
                'image': game1,
                'player': '500 playing'
            },
            {
                'image': game1,
                'player': '500 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },        
        ],
        // stake exclusives
        [
            {
                'image': game1,
                'player': '600 playing'
            },
            {
                'image': game1,
                'player': '600 playing'
            },
            {
                'image': game1,
                'player': '600 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },        
        ],
        // new release
        [
            {
                'image': game1,
                'player': '700 playing'
            },
            {
                'image': game1,
                'player': '700 playing'
            },
            {
                'image': game1,
                'player': '700 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },
            {
                'image': game1,
                'player': '872 playing'
            },
            {
                'image': game1,
                'player': '162 playing'
            },        
        ]
    ];

    return (
        <div className="text-white min-h-screen p-4">
            {/* Navigation Bar */}
            <div className="flex justify-center items-center bg-slate-900 py-3 px-4 rounded-full w-full max-w-5xl mx-auto mb-4">
                {navItems.map((item, index) => (
                    <button
                        key={item.name}
                        onClick={() => {
                            setActiveTab(item.name)
                            setIndex(index);
                        }}
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

            {/* Title */}
            <h2 className="text-2xl font-bold mb-4 px-2">{activeTab}</h2>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4">
                {cardMap[index].map((card, index) => (
                    <div className="">
                        <img src={card.image} alt="games"  className="h-60 w-full rounded-xl"/>
                        <div className="flex items-center space-x-2 ml-2 mt-1">
                            {/* Green Dot */}
                            <span className="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
                            {/* Player Count */}
                            <span className="text-sm font-medium text-white">{card.player}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
