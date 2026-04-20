"use client";
import React, { useState } from 'react';

const CAR_DATA = [
  { id: "1", name: "Toyota Avalon", details: "2013–2015 • V6 3.5L • Midnight Black" },
  { id: "2", name: "Mercedes-Benz GLC 300", details: "2016–2019 • Luxury SUV • X253" },
  { id: "3", name: "Toyota Camry", details: "2018–2020 • LE/XLE • Midnight Black" },
  { id: "4", name: "Lexus RX 350", details: "2016–2022 • 3.5L V6 • Luxury SUV" },
  { id: "5", name: "Chevrolet Spark", details: "2013–2015 • 1.2L 4-Cylinder • Victory Red" },
  { id: "6", name: "Toyota Camry SE/XSE", details: "2021–2024 • Two-Tone White/Black Roof" },
  { id: "7", name: "Mercedes-Benz GLA 250", details: "2014–2017 • 4MATIC • Mountain Grey" },
  { id: "8", name: "Mercedes-Benz C 300", details: "2015–2018 • Polar White • Premium Sedan" },
  { id: "9", name: "Range Rover Velar", details: "2017–Present • Charente Grey • Luxury" },
  { id: "10", name: "Toyota Camry SE", details: "2015–2017 • Blue Streak Metallic • 2.5L" },
  { id: "11", name: "Toyota Corolla Cross", details: "2022–2024 • Barcelona Red • Modern" },
  { id: "12", name: "Toyota RAV4", details: "2013–2015 • Magnetic Gray Metallic" },
  { id: "13", name: "Range Rover Velar", details: "2018–2023 • Silicon Silver • P250/P300" },
];

export default function Home() {
  const [view, setView] = useState("home");
  const whatsappNumber = "2348020527864"; // <--- CHANGE TO YOUR NUMBER

  // We list every possible photo name you might have used
  const getCarImages = (id: string) => [
    `/cars/${id}-front.jpg`,
    `/cars/${id}-back.jpg`,
    `/cars/${id}-left.jpg`,
    `/cars/${id}-right.jpg`,
    `/cars/${id}-dashboard.jpg`,
    `/cars/${id}-interior-1.jpg`,
    `/cars/${id}-interior-2.jpg`,
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-600">
      
      {/* GLASS NAV */}
      <nav className="fixed top-0 z-50 w-full backdrop-blur-2xl bg-black/40 border-b border-white/5 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => setView("home")}>
            <img src="/logo.png" alt="" className="h-7 w-auto brightness-125 transition-transform group-hover:scale-110" />
            <span className="font-bold tracking-[0.5em] text-[9px] uppercase hidden sm:block">OSAM AUTOS GLOBAL</span>
          </div>
          <div className="flex gap-8 text-[9px] font-black uppercase tracking-widest opacity-40">
             <button onClick={() => setView("inventory")} className={view === "inventory" ? "text-blue-500 opacity-100" : ""}>Sales</button>
             <button onClick={() => setView("home")} className={view === "home" ? "text-blue-500 opacity-100" : ""}>Services</button>
          </div>
        </div>
      </nav>

      {view === "home" ? (
        /* --- MINIMALIST GLASS PORTAL --- */
        <section className="pt-40 px-6 max-w-7xl mx-auto flex flex-col justify-center min-h-[90vh]">
          <div className="grid md:grid-cols-3 gap-8">
            {/* CAR SALES CARD */}
            <div onClick={() => setView("inventory")} className="group relative overflow-hidden p-12 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-700 cursor-pointer">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-600/20 blur-[80px] group-hover:bg-blue-600/40 transition-all" />
              <h2 className="text-4xl font-light mb-4 tracking-tighter">Inventory</h2>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30 mb-10 group-hover:opacity-100 transition-opacity">Premium Vehicle Sales</p>
              <div className="w-12 h-[1px] bg-white/20 group-hover:w-full transition-all duration-700" />
            </div>

            {/* REPAIRS CARD */}
            <a href={`https://wa.me/${whatsappNumber}?text=Inquiry: Mechanical Repair Service`} className="group relative overflow-hidden p-12 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-blue-600/20 transition-all duration-700">
              <h2 className="text-4xl font-light mb-4 tracking-tighter">Repair Hub</h2>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30 mb-10 group-hover:opacity-100 transition-opacity">Expert Diagnostics</p>
              <div className="w-12 h-[1px] bg-white/20 group-hover:w-full transition-all duration-700" />
            </a>

            {/* PARTS CARD */}
            <a href={`https://wa.me/${whatsappNumber}?text=Inquiry: Spare Parts Sourcing`} className="group relative overflow-hidden p-12 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-zinc-800/50 transition-all duration-700">
              <h2 className="text-4xl font-light mb-4 tracking-tighter">Global Parts</h2>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30 mb-10 group-hover:opacity-100 transition-opacity">Direct Foreign Sourcing</p>
              <div className="w-12 h-[1px] bg-white/20 group-hover:w-full transition-all duration-700" />
            </a>
          </div>
        </section>
      ) : (
        /* --- INTERACTIVE INVENTORY --- */
        <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto animate-in fade-in duration-1000">
          <div className="grid md:grid-cols-2 gap-16">
            {CAR_DATA.map((car) => (
              <div key={car.id} className="group">
                {/* 360 INTERACTIVE GALLERY */}
                <div className="relative aspect-[16/10] bg-zinc-900 rounded-[3rem] overflow-hidden mb-8 border border-white/5 hover:border-white/20 transition-colors shadow-2xl">
                  <div className="flex overflow-x-auto snap-x h-full scrollbar-hide">
                    {getCarImages(car.id).map((img, i) => (
                      <div key={i} className="w-full h-full flex-shrink-0 snap-center relative">
                        <img 
                          src={img} 
                          className="w-full h-full object-cover" 
                          alt="Vehicle View" 
                          onError={(e) => e.currentTarget.parentElement?.remove()}
                        />
                      </div>
                    ))}
                  </div>
                  {/* Floating Indicator */}
                  <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center pointer-events-none">
                     <div className="bg-black/60 backdrop-blur-xl px-4 py-2 rounded-full text-[7px] font-black uppercase tracking-[0.3em]">Swipe to Inspect</div>
                     <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-mono opacity-40 italic">#{car.id}</div>
                  </div>
                </div>

                <div className="px-4">
                  <h3 className="text-4xl font-light tracking-tight mb-3">{car.name}</h3>
                  <p className="text-[10px] opacity-40 uppercase tracking-[0.4em] font-black mb-10">{car.details}</p>

                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Inquiry: " + car.name + " (#" + car.id + ")")}`}
                    target="_blank"
                    className="inline-block px-14 py-6 text-[9px] font-black uppercase tracking-[0.6em] bg-white text-black rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)] active:scale-95"
                  >
                    Get Price Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer className="py-20 text-center text-[7px] uppercase tracking-[0.6em] opacity-20">
        OSAM AUTOS GLOBAL • Engineering Luxury
      </footer>
    </main>
  );
}
