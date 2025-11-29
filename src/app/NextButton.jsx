import Link from "next/link";

export default function NextButton({ href, label }) {
  return (
    <Link
      href={href}
      className="
        fixed bottom-10 right-10 z-50
        bg-white/90 backdrop-blur px-5 py-3
        font-semibold text-black tracking-wide
        animate-pulse-subtle
        transition hover:scale-105
      "
    >
      {label}
    </Link>
  );
}