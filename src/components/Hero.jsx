import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 pointer-events-none flex items-center justify-center h-full">
        <div className="max-w-3xl text-center p-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 drop-shadow-sm">
            Build social apps with playful vibes
          </h1>
          <p className="mt-4 text-gray-700 text-lg sm:text-xl">
            Prototype Instagram-style experiences in minutes. Drag, drop, and ship beautiful feeds, stories, and reactions.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#templates" className="pointer-events-auto inline-flex px-5 py-3 rounded-full bg-gray-900 text-white font-medium shadow hover:bg-black transition">Browse templates</a>
            <a href="#demo" className="pointer-events-auto inline-flex px-5 py-3 rounded-full bg-white text-gray-900 font-medium shadow border border-gray-200 hover:bg-gray-50 transition">See a demo</a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white pointer-events-none" />
    </section>
  );
}
