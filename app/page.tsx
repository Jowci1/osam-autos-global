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
  const whatsappNumber = "2348020527864"; 

  // This handles the Case Sensitivity issue by checking BOTH .jpeg and .JPEG
  const getCarImages = (id: string) => {
    const angles = ['front', 'back', 'left', 'right', 'dashboard', 'interior-1', 'interior-2'];
    let paths: string[] = [];
    angles.forEach(angle => {
      // It adds both versions to the search list
      paths.push(`/cars/${id}-${angle}.jpeg`);
      paths.push(`/cars/${id}-${angle}.JPEG`);
    });
    return paths;
  };

  return (
    <main className="min-h-screen bg-[#020202] text-white">
      
      {/* NAV */}
      <nav className="fixed top-0 z-50 w-full backdrop-blur-3xl bg-black/60 border-b border-white/5 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => setView("home")}>
            <img src="/logo.png" alt="Logo" className="h-7 w-auto" />
            <span className="font-bold tracking-[0.5em] text-[9px] uppercase">OSAM AUTOS GLOBAL</span>
          </div>
          <div className="flex gap-8 text-[9px] font-black uppercase tracking-widest">
             <button onClick={() => setView("inventory")} className={view === "inventory" ? "text-blue-500" : "opacity-40"}>Inventory</button>
             <button onClick={() => setView("home")} className={view === "home" ? "text-blue-500" : "opacity-40"}>Services</button>
          </div>
        </div>
      </nav>

      {view === "home" ? (
        /* --- TILES --- */
        <section className="pt-40 px-6 max-w-7xl mx-auto flex flex-col justify-center min-h-[90vh]">
          <div className="grid md:grid-cols-3 gap-8">
            <div onClick={() => setView("inventory")} className="group p-12 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl hover:bg-white/[0.07] transition-all cursor-pointer">
              <h2 className="text-4xl font-light mb-4 tracking-tighter">Inventory</h2>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30 group-hover:opacity-100">Premium Car Sales</p>
            </div>
            <a href={`https://wa.me/${whatsappNumber}`} className="group p-12 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl hover:bg-blue-600/20 transition-all">
              <h2 className="text-4xl font-light mb-4 tracking-tighter">Repair Hub</h2>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30 group-hover:opacity-100">Diagnostics & Care</p>
            </a>
            <a href={`https://wa.me/${whatsappNumber}`} className="group p-12 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl hover:bg-zinc-800 transition-all">
              <h2 className="text-4xl font-light mb-4 tracking-tighter">Global Parts</h2>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30 group-hover:opacity-100">Spare Sourcing</p>
            </a>
          </div>
        </section>
      ) : (
        /* --- INVENTORY --- */
        <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            {CAR_DATA.map((car) => (
              <div key={car.id} className="group">
                <div className="relative aspect-[16/10] bg-zinc-900/40 rounded-[3.5rem] overflow-hidden mb-10 border border-white/5 shadow-2xl">
                  <div className="flex overflow-x-auto snap-x h-full scrollbar-hide">
                    {getCarImages(car.id).map((img, i) => (
                      <div key={i} className="w-full h-full flex-shrink-0 snap-center relative">
                        <img 
                          src={img} 
                          className="w-full h-full object-cover" 
                          alt="" 
                          onError={(e) => { e.currentTarget.parentElement?.remove(); }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 pointer-events-none flex flex-col justify-end p-10">
                     <div className="flex justify-center">
                        <div className="bg-black/50 backdrop-blur-2xl px-6 py-3 rounded-full text-[7px] font-black uppercase tracking-[0.5em] border border-white/10">
                          Slide to Inspect
                        </div>
                     </div>
                  </div>
                </div>
                <div className="px-6">
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="text-4xl font-light tracking-tight">{car.name}</h3>
                    <span className="text-[10px] font-mono opacity-20 italic">#{car.id}</span>
                  </div>
                  <p className="text-[10px] opacity-40 uppercase tracking-[0.4em] font-black mb-12">{car.details}</p>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=Inquiry: ${car.name}`}
                    target="_blank"
                    className="inline-block px-14 py-6 text-[9px] font-black uppercase tracking-[0.6em] bg-white text-black rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-2xl active:scale-95"
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
