import React from 'react';

function HeroBanner() {
  return (
    <section className="relative h-72 group overflow-hidden">
      <img src="/photo1.jpg" alt="Banner" className="w-full h-full object-cover" />
      <div className="absolute bottom-0 w-full bg-black/70 text-center p-4 transform translate-y-full group-hover:translate-y-0 duration-300">
        <p className="text-white text-xl">
          Hey, I'm <span className="text-teal-400 font-semibold">N Kashitaa</span>
        </p>
      </div>
    </section>
  );
}

export default HeroBanner;