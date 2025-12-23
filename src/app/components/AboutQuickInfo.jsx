import {
  GraduationCap,
  Laptop,
  MapPin,
  Home,
  Headphones,
  BookOpen,
  Star,
} from "lucide-react";

export default function AboutQuickInfo({ className = "" }) {
  return (
    <div className={`leading-loose ${className}`}>
      <div className="flex items-start gap-4">
        <GraduationCap className="w-5 h-5 shrink-0 mt-2" />
        Computer Science, Web Design
      </div>

      <div className="flex items-start gap-4">
        <Laptop className="w-5 h-5 shrink-0 mt-2" />
        UX/UI Designer & Frontend Dev
      </div>

      <div className="flex items-start gap-4">
        <MapPin className="w-5 h-5 shrink-0 mt-2" />
        Currently located: San Diego, CA
      </div>

      <div className="flex items-start gap-4">
        <Home className="w-5 h-5 shrink-0 mt-2" />
        Hometown: Port Hueneme, CA
      </div>

      <div className="flex items-start gap-4">
        <Headphones className="w-5 h-5 shrink-0 mt-2" />
        Listening to: alternative, rock
      </div>

      <div className="flex items-start gap-4">
        <BookOpen className="w-5 h-5 shrink-0 mt-2" />
        Reading: most likely bell hooks
      </div>

      <div className="flex items-start gap-4">
        <Star className="w-5 h-5 shrink-0 mt-2" />
        Values: Curiosity, Innovation, Equity
      </div>
    </div>
  );
}