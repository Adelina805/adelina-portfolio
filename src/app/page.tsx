import Star from "lucide-react/dist/esm/icons/star";
import User from "lucide-react/dist/esm/icons/user";
import Briefcase from "lucide-react/dist/esm/icons/briefcase";
import FolderKanban from "lucide-react/dist/esm/icons/folder-kanban";
import Mail from "lucide-react/dist/esm/icons/mail";

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
      className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm hover:bg-black/5 transition"
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
        {/* Two-row grid: fixed 3rem top bar + flexible content */}
        <div className="grid h-full grid-rows-[3rem_1fr]">
          <header className="h-12 flex items-center justify-between px-4 border-b bg-white/70 backdrop-blur-sm">
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
            {/* subtle radial background like the mock */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-6 rounded-[1rem] bg-[radial-gradient(ellipse_at_center,_#e5e5e5,_#f7f7f7_60%,_transparent_100%)]" />
            </div>

            <section className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
              <p className="text-xl sm:text-2xl font-medium">Hello! my name is</p>
              <h1 className="font-extrabold tracking-tight leading-none mt-6 text-[clamp(3rem,10vw,9rem)]">ADELINA</h1>
              <h2 className="font-bold tracking-tight leading-none text-[clamp(2.5rem,8.5vw,7rem)]">MARTINEZ</h2>
              <p className="mt-12 text-lg sm:text-xl font-semibold">Welcome to my portfolio !</p>

              <a
                href="#about"
                className="absolute bottom-6 right-6 text-sm underline-offset-4 hover:underline"
              >
                Get to know me &rarr;
              </a>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}