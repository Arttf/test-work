import { useEffect, useState } from 'react';
import heroImage from './data/shortFon.jpg';

const BACKGROUND_DELAY_MS = 450;

export function TaskSixContent() {
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsBackgroundVisible(true);
    }, BACKGROUND_DELAY_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden rounded-[28px] bg-black text-white shadow-sm">
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
          isBackgroundVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 18%, rgba(255, 232, 182, 0.42), transparent 28%), linear-gradient(180deg, rgba(7, 5, 0, 0.28) 0%, rgba(7, 5, 0, 0.18) 28%, rgba(7, 5, 0, 0.6) 100%)',
        }}
      />

      <div className="relative flex min-h-[calc(100vh-5rem)] flex-col">
        <div className="flex flex-1 items-center justify-center px-6 py-14 text-center">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.45em] text-white/70">
              Soon
            </p>
            <h1 className="text-5xl font-light tracking-[0.18em] text-white md:text-7xl">
              Pineapplepen
            </h1>
          </div>
        </div>

        <footer className="relative border-t border-white/10 bg-black/20 px-6 py-5 backdrop-blur-[2px]">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
            <p className="text-sm uppercase tracking-[0.3em] text-white/55">
              Coming Soon
            </p>
            <p className="text-base text-white/85 md:text-lg">
              Невероятный личностный опыт, восхитительное удовольствие.
            </p>
            <span className="text-lg font-medium tracking-[0.2em] text-white">
              Pineapplepen
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}
