import { Star } from 'lucide-react';
import { User } from 'lucide-react';
import { Briefcase } from 'lucide-react';
import { FolderKanban } from 'lucide-react';
import { Mail } from 'lucide-react';

function NavItem({
  icon: Icon,
  href = "#",
  children,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1 rounded-2xl px-2 py-1 text-sm font-normal hover:bg-black/10 transition"
    >
      <Icon aria-hidden className="w-4 h-4" />
      <span>{children}</span>
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-dvh p-8 bg-white">
      {/* Outer frame that fills the viewport with 2rem (p-8) of screen padding */}
      <div className="h-[calc(100dvh-4rem)] w-full border-2 rounded-2xl overflow-hidden">

        {/* Two-row grid: fixed 2rem top bar + flexible content */}
        <div className="grid h-full grid-rows-[2rem_1fr]">
          <header className="h-8 flex items-center justify-between px-4 border-b-2 bg-white">

            {/* macOS-like window dots (purely decorative) */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-neutral-900" />
              <span className="w-3 h-3 rounded-full bg-neutral-900" />
              <span className="w-3 h-3 rounded-full bg-neutral-900" />
            </div>

            {/* Center nav */}
            <nav className="hidden sm:flex items-center gap-3">
              <NavItem icon={Star}>Home</NavItem>
              <NavItem icon={User}>About</NavItem>
              <NavItem icon={Briefcase}>Experience</NavItem>
              <NavItem icon={FolderKanban}>Projects</NavItem>
              <NavItem icon={Mail}>Contact</NavItem>
            </nav>

            {/* Right side placeholders (could be settings / theme toggles later) */}
            <div className="flex items-center gap-3 opacity-0 sm:opacity-100">
              <span className="w-4 h-4 rounded-sm border" />
              <span className="w-4 h-4 rounded-sm border" />
            </div>
          </header>

          <main className="relative h-full overflow-auto">
            {/* subtle radial background gradient */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-6 rounded-[1rem] bg-[radial-gradient(ellipse_at_center,_#ADADAD,_#ffffff_60%,_transparent_100%)]" />
            </div>

            <section className="relative z-10 h-full flex flex-col items-center justify-center text-center">
              <p className="font-semibold text-[clamp(1rem,2vw,2rem)]">Hello! my name is</p>
              <h1 className="font-bold tracking-tight leading-none mt-12 text-[clamp(3rem,10vw,9rem)]">ADELINA</h1>
              <h2 className="font-normal tracking-tight leading-none text-[clamp(2.7rem,9vw,8.1rem)]">MARTINEZ</h2>
              <p className="mt-12 font-semibold text-[clamp(1rem,2vw,2rem)]">Welcome to my portfolio !</p>

              <a
                href="#about"
                className="absolute bottom-8 right-8 text-sm underline-offset-4 hover:underline"
              >
                Get to know me &gt;&gt;
              </a>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}