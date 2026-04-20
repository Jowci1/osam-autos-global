"use client";
import React, { useState } from 'react';

// ==========================================
// 1. THE OSAM INVENTORY (Your 13 Units)
// ==========================================
const CAR_DATA = [
  { id: "1", name: "Toyota Avalon", details: "2013–2015 • V6 3.5L • Midnight Black", outlook: "https://illustrations.popsy.co/gray/car-service.svg" },
  { id: "2", name: "Mercedes-Benz GLC 300", details: "2016–2019 • Luxury SUV • X253", outlook: "https://illustrations.popsy.co/gray/delivery.svg" },
  { id: "3", name: "Toyota Camry", details: "2018–2020 • LE/XLE • Midnight Black", outlook: "https://illustrations.popsy.co/gray/racing.svg" },
  { id: "4", name: "Lexus RX 350", details: "2016–2022 • 3.5L V6 • Luxury Trim", outlook: "https://illustrations.popsy.co/gray/adventure.svg" },
  { id: "5", name: "Chevrolet Spark", details: "2013–2015 • 1.2L 4-Cylinder • Victory Red", outlook: "https://illustrations.popsy.co/gray/city-driver.svg" },
  { id: "6", name: "Toyota Camry SE/XSE", details: "2021–2024 • Two-Tone White/Black Roof", outlook: "https://illustrations.popsy.co/gray/fuel-station.svg" },
  { id: "7", name: "Mercedes-Benz GLA 250", details: "2014–2017 • 4MATIC • Mountain Grey", outlook: "https://illustrations.popsy.co/gray/car.svg" },
  { id: "8", name: "Mercedes-Benz C 300", details: "2015–2018 • Polar White • Premium", outlook: "https://illustrations.popsy.co/gray/mechanic.svg" },
  { id: "9", name: "Range Rover Velar", details: "2017–Present • Charente Grey • Luxury", outlook: "https://illustrations.popsy.co/gray/home-office.svg" },
  { id: "10", name: "Toyota Camry SE", details: "2015–2017 • Blue Streak Metallic • 2.5L", outlook: "https://illustrations.popsy.co/gray/traveling.svg" },
  { id: "11", name: "Toyota Corolla Cross", details: "2022–2024 • Barcelona Red • Modern", outlook: "https://illustrations.popsy.co/gray/outdoor-party.svg" },
  { id: "12", name: "Toyota RAV4", details: "2013–2015 • Magnetic Gray Metallic", outlook: "https://illustrations.popsy.co/gray/mountain-climbing.svg" },
  { id: "13", name: "Range Rover Velar", details: "2018–2023 • Silicon Silver • P250/P300", outlook: "https://illustrations.popsy.co/gray/modern-art.svg" },
];

export default function Home() {
  const [activeCar, setActiveCar] = useState<string | null>(null);
  const whatsappNumber = "2348020527864"; // <--- CHANGE THIS TO YOUR NUMBER

  // This automatically scans for the photos you uploaded to public/cars/
  const getRealImages = (id: string) => [
    `/cars/${id}-front.jpg`,
    `/cars/${id}-back.jpg`,
    `/cars/${id}-left.jpg`,
    `/cars/${id}-right.jpg`,
    `/cars/${id}-dashboard.jpg`,
    `/cars/${id}-interior-1.jpg`,
    `/cars/${id}-interior-2.jpg`,
    `/cars/${id}-rims.jpg`,
  ];

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-black text-foreground selection:bg-blue-600">
      
      {/* PREMIUM NAVIGATION */}
      <nav className="fixed top-0 z-50 w-full backdrop-blur-xl bg-white/80 dark:bg-black/80 border-b border-neutral-200 dark:border-neutral-800 p-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
             <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black">O</div>
             <span className="font-bold tracking-[0.4em] text-[10px] uppercase">OSAM AUTOS GLOBAL</span>
          </div>
          <div className="flex gap-8 text-[9px] uppercase tracking-[0.3em] font-black opacity-60">
            <a href="#inventory" className="hover:text-blue-600 transition-colors">Inventory</a>
            <a href="#service" className="hover:text-blue-600 transition-colors">Service</a>
          </div>
        </div>
      </nav>

      {/* HEADER SECTION */}
      <section id="inventory" className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-7xl font-extralight tracking-tighter italic">The Collection</h2>
          <p className="text-blue-600 text-[10px] uppercase tracking-[0.6em] font-bold mt-4">Automotive Excellence</p>
        </div>
        
        {/* CAR GRID */}
        <div className="grid md:grid-cols-2 gap-12">
          {CAR_DATA.map((car) => (
            <div key={car.id} className="group bg-white dark:bg-neutral-900 rounded-[3rem] overflow-hidden border border-neutral-200 dark:border-neutral-800 transition-all duration-700 hover:shadow-2xl">
              
              {/* IMAGE SYSTEM */}
              <div className="relative aspect-[16/10] bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                {activeCar !== car.id ? (
                  /* STYLISTIC ARTWORK VIEW */
                  <img 
                    src={car.outlook} 
                    className="w-full h-full object-contain p-20 transition-transform duration-1000 group-hover:scale-110" 
                    alt="Stylized Car" 
                  />
                ) : (
                  /* 360 REAL VIEW GALLERY */
                  <div className="flex overflow-x-auto snap-x h-full scrollbar-hide">
                    {getRealImages(car.id).map((img, i) => (
                      <div key={i} className="w-full h-full flex-shrink-0 snap-center relative">
                        <img 
                          src={img} 
                          className="w-full h-full object-cover" 
                          alt="Real Life" 
                          onError={(e) => { e.currentTarget.parentElement?.remove(); }}
                        />
                        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-[8px] text-white uppercase tracking-widest font-bold">
                          Angle {i + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* INTERACTIVE TOGGLE */}
                <button 
                  onClick={() => setActiveCar(activeCar === car.id ? null : car.id)}
                  className="absolute bottom-6 right-6 px-6 py-3 bg-black dark:bg-white text-white dark:text-black text-[9px] font-black uppercase tracking-widest rounded-full shadow-2xl z-20 active:scale-95 transition-all"
                >
                  {activeCar === car.id ? "← Outlook" : "Reveal Real 360° →"}
                </button>
              </div>

              {/* CAR INFO */}
              <div className="p-12">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-3xl font-light tracking-tight mb-2">{car.name}</h3>
                    <p className="text-[10px] opacity-50 uppercase tracking-[0.3em] font-bold">{car.details}</p>
                  </div>
                  <span className="text-[11px] font-mono opacity-20 font-bold tracking-tighter">#{car.id.padStart(3, '0')}</span>
                </div>

                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello OSAM Autos, I am interested in the " + car.name + " (#" + car.id + "). Please provide availability.")}`}
                  target="_blank"
                  className="block w-full py-6 text-center text-[10px] font-black uppercase tracking-[0.6em] bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-all shadow-lg active:scale-95"
                >
                  Request Price
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE CENTER HUB */}
      <section id="service" className="py-32 px-6 bg-neutral-950 text-white border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-[10px] uppercase tracking-[0.8em] text-blue-500 font-black mb-6">Repair & Spares</h4>
          <h2 className="text-5xl font-light tracking-tight mb-8">Specialized Car Care</h2>
          <p className="text-neutral-400 text-sm mb-12 max-w-xl mx-auto leading-relaxed">
            Professional diagnostic services and global spare parts sourcing for all luxury vehicles. We keep your drive smooth.
          </p>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=Hello, I need help with Car Service and Repairs.`}
            className="inline-block px-14 py-6 border border-white/20 text-[10px] font-black uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all rounded-full"
          >
            Open Diagnostic Hub
          </a>
        </div>
      </section>

      <footer className="py-10 text-center text-[8px] uppercase tracking-[0.4em] opacity-30 border-t border-neutral-200 dark:border-neutral-800">
        © 2026 OSAM AUTOS GLOBAL • Luxury Refined
      </footer>
    </main>
  );
}
