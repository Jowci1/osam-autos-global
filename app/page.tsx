"use client";
import React, { useState } from 'react';

// ==========================================
// 1. CAR INVENTORY DATA
// ==========================================
const CAR_DATA = [
  { id: "1", name: "Toyota Avalon", details: "2013–2015 • V6 3.5L • Midnight Black" },
  { id: "2", name: "Mercedes-Benz GLC 300", details: "2016–2019 • Luxury SUV • X253" },
  { id: "3", name: "Toyota Camry", details: "2018–2020 • LE/XLE • Midnight Black" },
  { id: "4", name: "Lexus RX 350", details: "2016–2022 • 3.5L V6 • Luxury Trim" },
  { id: "5", name: "Chevrolet Spark", details: "2013–2015 • 1.2L 4-Cylinder • Victory Red" },
  { id: "6", name: "Toyota Camry SE/XSE", details: "2021–2024 • Two-Tone White/Black Roof" },
  { id: "7", name: "Mercedes-Benz GLA 250", details: "2014–2017 • 4MATIC • Mountain Grey" },
  { id: "8", name: "Mercedes-Benz C 300", details: "2015–2018 • Polar White • Premium" },
  { id: "9", name: "Range Rover Velar", details: "2017–Present • Charente Grey • Luxury" },
  { id: "10", name: "Toyota Camry SE", details: "2015–2017 • Blue Streak Metallic • 2.5L" },
  { id: "11", name: "Toyota Corolla Cross", details: "2022–2024 • Barcelona Red • Modern" },
  { id: "12", name: "Toyota RAV4", details: "2013–2015 • Magnetic Gray Metallic" },
  { id: "13", name: "Range Rover Velar", details: "2018–2023 • Silicon Silver • P250/P300" },
];

export default function Home() {
  const [showInventory, setShowInventory] = useState(false);
  const whatsappNumber = "2348020527864"; // <--- UPDATE TO YOUR REAL NUMBER

  // This finds the images you uploaded to public/cars/
  const getCarImages = (id: string) => [
    `/cars/${id}-front.jpg`,
    `/cars/${id}-back.jpg`,
    `/cars/${id}-dashboard.jpg`,
    `/cars/${id}-interior-1.jpg`,
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* RESTORED LOGO & NAV */}
      <nav className="fixed top-0 z-50 w-full backdrop-blur-lg bg-black/60 border-b border-white/10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="OSAM" className="h-8 w-auto brightness-200" />
            <span className="font-bold tracking-[0.4em] text-[10px] uppercase">OSAM AUTOS GLOBAL</span>
          </div>
          <button 
            onClick={() => setShowInventory(false)} 
            className="text-[10px] font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition"
          >
            Home
          </button>
        </div>
      </nav>

      {!showInventory ? (
        /* --- LANDING: THE 3 FUNCTIONS --- */
        <section className="pt-48 px-6 max-w-7xl mx-auto min-h-screen">
          <div className="mb-24">
            <h1 className="text-6xl md:text-9xl font-extralight tracking-tighter mb-6 italic">Sales. Repairs. <br/>Global Sourcing.</h1>
            <p className="text-blue-500 text-[10px] uppercase tracking-[0.5em] font-black">Professional Automotive Hub</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* CAR SALES */}
            <div onClick={() => setShowInventory(true)} className="group cursor-pointer border border-white/10 p-12 rounded-[3rem] hover:bg-white hover:text-black transition-all duration-700">
              <h2 className="text-4xl font-light mb-6">Car Sales</h2>
              <p className="text-xs opacity-50 group-hover:opacity-100 mb-8 leading-relaxed">Direct Foreign & Nigerian Used inventory. Inspected for quality.</p>
              <span className="text-[10px] font-black uppercase tracking-widest border-b border-current pb-1">View Inventory</span>
            </div>

            {/* REPAIRS */}
            <a href={`https://wa.me/${whatsappNumber}?text=Inquiry: Mechanical Repairs`} className="group border border-white/10 p-12 rounded-[3rem] hover:bg-blue-600 transition-all duration-700">
              <h2 className="text-4xl font-light mb-6">Repair Hub</h2>
              <p className="text-xs opacity-50 group-hover:opacity-100 mb-8 leading-relaxed">Expert mechanical diagnostics and maintenance for all luxury brands.</p>
              <span className="text-[10px] font-black uppercase tracking-widest border-b border-current pb-1">Book Diagnostic</span>
            </a>

            {/* SPARE PARTS */}
            <a href={`https://wa.me/${whatsappNumber}?text=Inquiry: Spare Parts Sourcing`} className="group border border-white/10 p-12 rounded-[3rem] hover:bg-zinc-800 transition-all duration-700">
              <h2 className="text-4xl font-light mb-6">Spare Sourcing</h2>
              <p className="text-xs opacity-50 group-hover:opacity-100 mb-8 leading-relaxed">Sourcing genuine engines, body parts, and accessories globally.</p>
              <span className="text-[10px] font-black uppercase tracking-widest border-b border-current pb-1">Request Part</span>
            </a>
          </div>
        </section>
      ) : (
        /* --- HIDDEN INVENTORY: ONLY SHOWS ON CLICK --- */
        <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-10">
            <div>
              <h2 className="text-6xl font-extralight tracking-tighter italic">The Collection</h2>
              <p className="text-[10px] uppercase tracking-[0.4em] opacity-40 mt-4">Inventory List</p>
            </div>
            <button onClick={() => setShowInventory(false)} className="text-[10px] font-black uppercase tracking-widest bg-white/10 px-6 py-3 rounded-full hover:bg-white hover:text-black transition">Close Collection</button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {CAR_DATA.map((car) => (
              <div key={car.id} className="group flex flex-col">
                {/* 360 PHOTO SWIPER */}
                <div className="relative aspect-[16/10] bg-zinc-900 rounded-[3rem] overflow-hidden mb-8 border border-white/5">
                  <div className="flex overflow-x-auto snap-x h-full scrollbar-hide">
                    {getCarImages(car.id).map((img, i) => (
                      <div key={i} className="w-full h-full flex-shrink-0 snap-center relative">
                        <img 
                          src={img} 
                          className="w-full h-full object-cover" 
                          alt="OSAM Inventory" 
                          onError={(e) => { e.currentTarget.parentElement?.remove(); }}
                        />
                        <div className="absolute bottom-10 left-10 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-[8px] uppercase tracking-widest font-black">
                          Angle {i + 1}
                        </div>
                      </div>
                    ))}
                    {/* If no images match, this shows */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 text-[9px] uppercase tracking-[0.5em]">
                      Awaiting Media #{car.id}
                    </div>
                  </div>
                </div>

                <div className="px-4">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-4xl font-light tracking-tight mb-2">{car.name}</h3>
                      <p className="text-[10px] opacity-40 uppercase tracking-[0.4em] font-black">{car.details}</p>
                    </div>
                  </div>

                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Interested in " + car.name + " (#" + car.id + ")")}`}
                    target="_blank"
                    className="inline-block px-12 py-5 text-[10px] font-black uppercase tracking-[0.5em] bg-white text-black rounded-full hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-xl"
                  >
                    Request Pricing
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
