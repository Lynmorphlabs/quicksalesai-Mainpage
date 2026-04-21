import viuLogo from "@/assets/logos/viu.png";
import huaweiLogo from "@/assets/logos/huawei.png";
import antGroupLogo from "@/assets/logos/ant-group.png";
import deadPoetsLogo from "@/assets/logos/dead-poets.png";

const logos = [
  { src: viuLogo, alt: "Viu", className: "h-12 sm:h-14" },
  { src: huaweiLogo, alt: "Huawei", className: "h-8 sm:h-10" },
  { src: antGroupLogo, alt: "Ant Group", className: "h-12 sm:h-14" },
  { src: deadPoetsLogo, alt: "The Dead Poets Society Bar", className: "h-16 sm:h-20" },
];

export const LogoCloud = () => (
  <section className="py-14 border-y border-border/40 bg-card/40">
    <div className="container">
      <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-10">
        Trusted By Global Industry Leaders
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-items-center gap-x-8 gap-y-10">
        {logos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className={`${logo.className} w-auto object-contain opacity-70 hover:opacity-100 transition-opacity`}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  </section>
);
