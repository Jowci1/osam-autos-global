"use client";

import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 z-50 w-full glass border-b p-4 md:p-6 transition-all">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* BRAND LOGO */}
            <img 
              src="/logo.png" 
              alt="OSAM" 
              className="h-8 md:h-10 w-auto object-contain dark:invert"
              onError={(e) => { 
                const target = e.currentTarget;
                target.style.display = 'none'; 
              }} 
            />
            <span className="font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase whitespace-nowrap">OSAM AUTOS LTD</span>
          </div>
          
          <div className="hidden md:flex gap-10 text-[9px] uppercase tracking-[0.3em] font-medium opacity-70">
            <a href="#inventory" className="hover:text-blue-600 transition">Inventory</a>
            <a href="#repairs" className="hover:text-blue-600 transition">Repairs</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
          <h2 className="text-6xl font-light tracking-tighter">Inventory</h2>
          <p className="text-[9px] uppercase tracking-[0.4em] opacity-40 mt-4 md:mt-0 font-bold text-blue-600">DIRECT FOREIGN & NIGERIAN USED</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="glass rounded-[3rem] overflow-hidden group border transition-all duration-700 hover:shadow-2xl">
            <div className="aspect-[16/10] bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center relative border-b border-inherit">
               <span className="text-[9px] uppercase tracking-[0.4em] opacity-20 font-bold italic">Outlook vs Real</span>
            </div>
            
            <div className="p-12">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <h3 className="text-3xl font-light tracking-tight mb-2 text-foreground">Premium Selection</h3>
                  <div className="flex gap-4">
                    <span className="text-[9px] border border-inherit px-2 py-1 opacity-50 rounded uppercase tracking-tighter">Verified Unit</span>
                  </div>
                </div>
              </div>
              
              <button 
                className="w-full py-6 text-[10px] font-black uppercase tracking-[0.4em] shadow-xl hover:scale-[0.99] active:scale-95 transition-all"
                style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)' }}
              >
                WhatsApp Concierge
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
