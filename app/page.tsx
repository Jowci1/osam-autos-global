import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 z-50 w-full glass border-b p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="OSAM" 
              className="h-8 md:h-10 w-auto object-contain dark:brightness-200"
              onError={(e) => { e.currentTarget.style.display = 'none'; }} 
            />
            <span className="font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase whitespace-nowrap">OSAM AUTOS LTD</span>
          </div>
          <div className="hidden md:flex gap-10 text-[9px] uppercase tracking-[0.3em] font-medium opacity-70">
            <a href="#inventory">Inventory</a>
            <a href="#repairs">Repairs</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
          <h2 className="text-6xl font-light tracking-tighter">Inventory</h2>
          <p className="text-[9px] uppercase tracking-[0.4em] opacity-40 font-bold text-blue-600">DIRECT FOREIGN & NIGERIAN USED</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="glass rounded-[3rem] overflow-hidden border p-12">
             <h3 className="text-3xl font-light tracking-tight mb-8">Premium Unit</h3>
             <button 
                className="w-full py-6 text-[10px] font-black uppercase tracking-[0.4em]"
                style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)' }}
              >
                WhatsApp Concierge
              </button>
          </div>
        </div>
      </section>
    </main>
  );
}
