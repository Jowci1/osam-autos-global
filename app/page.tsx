"use client";

import React, { useState } from 'react';

// --- YOUR INVENTORY (The only part you ever need to edit) ---
const CAR_INVENTORY = [
  {
    id: "UNIT_01",
    name: "Mercedes-Benz GLE 450",
    year: "2024",
    specs: "V6 Biturbo • 4MATIC",
    status: "Direct Foreign",
    outlookImage: "https://images.unsplash.com/photo-1620216503921-9e1279a6133a?q=80&w=2000&auto=format&fit=crop", // Placeholder for web shot
    realImages: [
      "https://images.unsplash.com/photo-1620216503921-9e1279a6133a?q=80&w=1000", // Exterior Front
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1000", // Interior
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000"  // Rear
    ]
  },
  // Add more cars here by copying the block above
];

export default function Home() {
  const [activeGallery, setActiveGallery] = useState<string | null>(null);

  const handleWhatsApp = (carName: string, id: string) => {
    const msg = encodeURIComponent(`Hello Osam Autos, I'm viewing the ${carName} (${id}) on your website and I'd like to discuss the purchase.`);
    window.open(`https://wa.me/234XXXXXXXXXX?text=${msg}`, '_blank'); // Replace with your actual number
  };

  return (
    <main className="min-h-screen">
      {/* 1. PREMIUM NAV */}
      <nav className="fixed top-0 z-50 w-full glass border-b p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="OSAM" 
              className="h-8 md:h-10 w-auto object-contain dark:invert"
              onError={(e) => { e.currentTarget.style.display = 'none'; }} 
            />
            <span className="font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase">OSAM AUTOS GLOBAL</span>
          </div>
          <div className="hidden md:flex gap-10 text-[9px] uppercase tracking-[0.3em] font-medium opacity-60">
            <a href="#inventory" className="hover:text-blue-600 transition">Inventory</a>
            <a href="#repairs" className="hover:text-blue-600 transition">Repairs</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* 2. HERO / INVENTORY HEADER */}
      <section id="inventory" className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-4">
          <div>
            <h2 className="text-6xl font-light tracking-tighter">Inventory</h2>
            <div className="h-[2px] w-12 bg-blue-600 mt-4" />
          </div>
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-600">Global Sourcing • Professional Delivery</p>
        </div>

        {/* 3. DYNAMIC CAR GRID */}
        <div className="grid md:grid-cols-2 gap-16">
          {CAR_INVENTORY.map((car) => (
            <div key={car.id} className="glass rounded-[3rem] overflow-hidden group border transition-all duration-700 hover:shadow-2xl">
              
              {/* IMAGE STACK (OUTLOOK vs REAL) */}
              <div className="relative aspect-[16/10] bg-neutral-100 dark:bg-neutral-900 overflow-hidden border-b border-inherit">
                {activeGallery === car.id ? (
                  // REAL IMAGES (Slider style)
                  <div className="flex overflow-x-auto snap-x h-full scrollbar-hide">
                    {car.realImages.map((img, idx) => (
                      <img key={idx} src={img} className="w-full h-full object-cover snap-center flex-shrink-0" alt="Real View" />
                    ))}
                  </div>
                ) : (
                  // OUTLOOK IMAGE
                  <img src={car.outlookImage} className="w-full h-full object-cover" alt="Outlook View" />
                )}
                
                {/* TOGGLE BADGE */}
                <button 
                  onClick={() => setActiveGallery(activeGallery === car.id ? null : car.id)}
                  className="absolute bottom-6 right-6 px-5 py-2 bg-white/90 dark:bg-black/90 backdrop-blur-xl text-[8px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg border border-inherit transition-all active:scale-90"
                >
                  {activeGallery === car.id ? "Show Outlook" : "Reveal Real Life"}
                </button>

                <div className="absolute top-8 left-8 px-4 py-1.5 bg-blue-600 text-[8px] font-black text-white rounded-full uppercase tracking-widest shadow-lg">
                  {car.status}
                </div>
              </div>

              {/* DETAILS SECTION */}
              <div className="p-12">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-3xl font-light tracking-tight mb-2">{car.name}</h3>
                    <div className="flex gap-4">
                      <span className="text-[9px] border border-inherit px-2 py-1 opacity-50 rounded uppercase tracking-tighter">{car.year}</span>
                      <span className="text-[9px] border border-inherit px-2 py-1 opacity-50 rounded uppercase tracking-tighter">{car.specs}</span>
                    </div>
                  </div>
                  <span className="font-mono text-sm opacity-20">{car.id}</span>
                </div>
                
                <button 
                  onClick={() => handleWhatsApp(car.name, car.id)}
                  className="w-full py-6 text-[10px] font-black uppercase tracking-[0.4em] shadow-xl hover:scale-[0.99] active:scale-95 transition-all"
                  style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)' }}
                >
                  WhatsApp Concierge
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
