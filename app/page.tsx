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
  const [selectedCar, setSelectedCar] = useState<any>(null);
  const whatsappNumber = "2348020527864"; 

  const getCarImages = (id: string) => {
    const angles = ['front', 'back', 'left', 'right', 'dashboard', 'interior-1', 'interior-2'];
    let paths: string[] = [];
    angles.forEach(angle => {
      paths.push(`/cars/${id}-${angle}.jpeg`);
      paths.push(`/cars/${id}-${angle}.JPEG`);
    });
    return paths;
  };

  return (
    <main className="min-h-screen bg-white dark:bg-[#020202] text-black dark:text-white transition-colors duration-500">
      
      {/* NAV */}
      <nav className="fixed top-0 z-50 w-full backdrop-blur-3xl bg-white/70 dark:bg-black/60 border-b border-black/5 dark:border-white/5 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setView("home")}>
            <img src="/logo.png" alt="Logo" className="h-7 w-auto dark:brightness-150 transition-transform group-hover:scale-105" />
            <span className="font-bold tracking-[0.5em] text-[9px] uppercase">OSAM AUTOS GLOBAL</span>
          </div>
          <div className="flex gap-8 text-[9px] font-black uppercase tracking-widest">
             <button onClick={() => { setView("inventory"); setSelectedCar(null); }} className={view === "inventory" ? "text-blue-600 dark:text-blue-400" : "opacity-40"}>Inventory</button>
             <button onClick={() => { setView("home"); setSelectedCar(null); }} className={view === "home" ? "text-blue-600 dark:text-blue-400" : "opacity-40"}>Services</button>
          </div>
        </div>
      </nav>

      {view === "home" ? (
        <section className="pt-40 px-6 max-w-7xl mx-auto flex flex-col justify-center min-h-[90vh]">
          <div className="grid md:grid-cols-3 gap-8">
            <div onClick={() => setView("inventory")} className="group p-12 rounded-[2.5rem] border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-3xl hover:bg-black/[0.05] dark:hover:bg-white/[0.07] transition-all cursor-pointer">
              <h2 className="text-4xl font-light mb-4 tracking-tighter">Inventory</h2>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30">Premium Car Sales</p>
            </div>
            <a href={`https://wa.me/${whatsappNumber}?text=Hello Osam Autos, I'm interested in booking a professional diagnostic session.`} className="group p-12 rounded-[2.5rem] border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-3xl hover:bg-blue-600/10 dark:hover:bg-blue-600/20 transition-all">
              <h2 className="text-4xl font-light mb-4 tracking-tighter">Repair Hub</h2>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30">Professional Diagnostics</p>
            </a>
            <a href={`https://wa.me/${whatsappNumber}?text=Hello Osam Autos, I'm looking for a specific genuine spare part.`} className="group p-12 rounded-[2.5rem] border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-3xl hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all">
              <h2 className="text-4xl font-light mb-4 tracking-tighter">Global Parts</h2>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30">Genuine Spare Sourcing</p>
            </a>
          </div>
        </section>
      ) : (
        <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto animate-in fade-in duration-1000">
          <div className="grid md:grid-cols-2 gap-20">
            {CAR_DATA.map((car) => (
              <div key={car.id} className="group">
                <div 
                  onClick={() => setSelectedCar(car)}
                  className="relative aspect-[16/10] bg-zinc-200 dark:bg-zinc-800 rounded-[3.5rem] overflow-hidden mb-10 border border-black/5 dark:border-white/5 shadow-2xl cursor-zoom-in transition-transform hover:scale-[1.01]"
                >
                  <img 
                    src={`/cars/${car.id}-front.jpeg`} 
                    className="w-full h-full object-cover" 
                    alt={car.name}
                    // FIXED: RX 350 Fallback check
                    onError={(e) => { 
                        const img = e.currentTarget;
                        if (img.src.includes('.jpeg')) {
                            img.src = `/cars/${car.id}-front.JPEG`;
                        }
                    }}
                  />
                  {/* BRIGHTER GLASS HINT */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/80 dark:bg-white/20 backdrop-blur-2xl px-6 py-2 rounded-full text-[9px] uppercase tracking-[0.2em] font-black border border-white/40 shadow-xl text-black dark:text-white">
                       Click to inspect
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
                    href={`https://wa.me/${whatsappNumber}?text=Hello Osam Autos, I am highly interested in purchasing the ${car.name} (Unit ID: #${car.id}). Could you please provide the current pricing and availability?`}
                    target="_blank"
                    className="inline-block px-14 py-6 text-[9px] font-black uppercase tracking-[0.6em] bg-black text-white dark:bg-white dark:text-black rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-2xl active:scale-95"
                  >
                    Request Pricing
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FULL-SCREEN POP-OUT */}
      {selectedCar && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-3xl" onClick={() => setSelectedCar(null)} />
          
          <div className="relative w-full h-full md:h-[90vh] md:max-w-7xl md:rounded-[3rem] overflow-hidden shadow-2xl">
            <button 
              onClick={() => setSelectedCar(null)}
              className="absolute top-8 right-8 z-[110] w-12 h-12 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-md text-2xl font-light"
            >
              ×
            </button>

            <div className="flex overflow-x-auto snap-x snap-mandatory h-full scrollbar-hide">
              {getCarImages(selectedCar.id).map((img, i) => (
                <div key={i} className="w-full h-full flex-shrink-0 snap-center relative">
                  <img 
                    src={img} 
                    className="w-full h-full object-contain" 
                    alt="" 
                    onError={(e) => { e.currentTarget.parentElement?.remove(); }}
                  />
                </div>
              ))}
            </div>

            <div className="absolute bottom-10 left-0 w-full flex justify-center pointer-events-none px-6">
              <div className="bg-black/5 dark:bg-white/10 backdrop-blur-2xl px-6 py-3 rounded-full text-[7px] md:text-[9px] font-black uppercase tracking-[0.5em] border border-black/5 dark:border-white/10 text-black dark:text-white shadow-lg">
                Swipe for details
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
