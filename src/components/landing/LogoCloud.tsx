import viuLogo from "@/assets/logos/viu.png";
import huaweiLogo from "@/assets/logos/huawei.png";
import antGroupLogo from "@/assets/logos/ant-group.png";
import deadPoetsLogo from "@/assets/logos/dead-poets.png";

const logos = [
  { src: viuLogo, alt: "Viu", className: "h-10 sm:h-12" },
  { src: huaweiLogo, alt: "Huawei", className: "h-12 sm:h-14" },
  { src: antGroupLogo, alt: "Ant Group", className: "h-10 sm:h-12" },
  { src: deadPoetsLogo, alt: "The Dead Poets Society Bar", className: "h-16 sm:h-20" },
];

export const LogoCloud = () => (
  <section className="py-14 border-y border-border/40 bg-card/40">
    <div className="container">
      <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-10">
        Trusted By Global Industry Leaders
      </p>
      <div className="relative overflow-hidden">
        <div className="flex items-center gap-16 sm:gap-24 animate-marquee w-max">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={`${logo.alt}-${i}`}
              src={logo.src}
              alt={logo.alt}
              className={`${logo.className} w-auto object-contain shrink-0 opacity-70 hover:opacity-100 transition-opacity`}
              loading="lazy"
            />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-card/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-card/80 to-transparent" />
      </div>
    </div>
  </section>
);
