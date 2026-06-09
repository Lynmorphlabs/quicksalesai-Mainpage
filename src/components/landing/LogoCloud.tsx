import viuLogo from "@/assets/logos/viu.png";
import huaweiLogo from "@/assets/logos/huawei.png";
import antGroupLogo from "@/assets/logos/ant-group.png";
import stEngineeringLogo from "@/assets/logos/st-engineering.png";
import hpLogo from "@/assets/logos/hp.png.asset.json";
import pgLogo from "@/assets/logos/pg.png.asset.json";
import renwthLogo from "@/assets/logos/renwth.png.asset.json";
import foodyLogo from "@/assets/logos/foody.png.asset.json";
import lotteriaLogo from "@/assets/logos/lotteria.png.asset.json";
import shopeeLogo from "@/assets/logos/shopee.png.asset.json";
import hiltonLogo from "@/assets/logos/hilton.png.asset.json";
import ongongLogo from "@/assets/logos/ongong.png.asset.json";
import cfldLogo from "@/assets/logos/cfld.png.asset.json";
import galaLogo from "@/assets/logos/gala.png.asset.json";
import bitmartLogo from "@/assets/logos/bitmart.png.asset.json";

const logos = [
  { src: viuLogo, alt: "Viu", className: "h-8 sm:h-10" },
  { src: huaweiLogo, alt: "Huawei", className: "h-9 sm:h-11" },
  { src: antGroupLogo, alt: "Ant Group", className: "h-8 sm:h-10" },
  { src: stEngineeringLogo, alt: "ST Engineering", className: "h-7 sm:h-9" },
  { src: hpLogo.url, alt: "HP", className: "h-10 sm:h-12" },
  { src: pgLogo.url, alt: "P&G", className: "h-[2.75rem] sm:h-[3.75rem]" },
  { src: renwthLogo.url, alt: "Renwth Indonesia", className: "h-20 sm:h-24" },
  { src: foodyLogo.url, alt: "Foody.vn", className: "h-12 sm:h-14" },
  { src: lotteriaLogo.url, alt: "Lotteria", className: "h-20 sm:h-24 translate-y-3" },
  { src: shopeeLogo.url, alt: "Shopee", className: "h-28 sm:h-32 translate-y-3" },
  { src: hiltonLogo.url, alt: "Hilton Hotels & Resorts", className: "h-20 sm:h-24" },
  { src: ongongLogo.url, alt: "Ong & Ong", className: "h-20 sm:h-24" },
  { src: cfldLogo.url, alt: "CFLD", className: "h-20 sm:h-24" },
  { src: galaLogo.url, alt: "Gala", className: "h-12 sm:h-14" },
  { src: bitmartLogo.url, alt: "BitMart", className: "h-20 sm:h-24" },
];

export const LogoCloud = () => (
  <section className="py-14 border-y border-border/40 bg-card/40">
    <div className="container">
      <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-10">
        Trusted By Global Industry Leaders
      </p>
      <div className="relative overflow-hidden">
        <div className="flex items-center animate-marquee w-max">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className={`flex items-center justify-center shrink-0 w-[14vw] min-w-[140px] ${logo.wrapperClass || ""}`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`${logo.className} w-auto object-contain opacity-70 hover:opacity-100 transition-opacity`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-card/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-card/80 to-transparent" />
      </div>
    </div>
  </section>
);
