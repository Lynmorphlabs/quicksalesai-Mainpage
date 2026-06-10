import viuLogo from "@/assets/logos/viu.png.asset.json";
import huaweiLogo from "@/assets/logos/huawei.png.asset.json";
import antGroupLogo from "@/assets/logos/ant-group.png.asset.json";
import stEngineeringLogo from "@/assets/logos/st-engineering.png.asset.json";
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

const logos: { src: string; alt: string; className: string; wrapperClass?: string }[] = [
  { src: viuLogo.url, alt: "Viu", className: "h-20 sm:h-24" },
  { src: huaweiLogo.url, alt: "Huawei", className: "h-14 sm:h-16" },
  { src: antGroupLogo.url, alt: "Ant Group", className: "h-32 sm:h-40" },
  { src: stEngineeringLogo.url, alt: "ST Engineering", className: "h-12 sm:h-14" },
  { src: hpLogo.url, alt: "HP", className: "h-14 sm:h-16" },
  { src: pgLogo.url, alt: "P&G", className: "h-[2.75rem] sm:h-[3.75rem]", wrapperClass: "w-[8vw] min-w-[80px] -ml-6 sm:-ml-10" },
  { src: renwthLogo.url, alt: "Renwth Indonesia", className: "h-20 sm:h-24", wrapperClass: "ml-8 sm:ml-12" },
  { src: foodyLogo.url, alt: "Foody.vn", className: "h-12 sm:h-14 translate-y-2" },
  { src: lotteriaLogo.url, alt: "Lotteria", className: "h-20 sm:h-24 translate-y-2" },
  { src: shopeeLogo.url, alt: "Shopee", className: "h-20 sm:h-24 -translate-y-2" },
  { src: hiltonLogo.url, alt: "Hilton Hotels & Resorts", className: "h-14 sm:h-16" },
  { src: ongongLogo.url, alt: "Ong & Ong", className: "h-20 sm:h-24", wrapperClass: "ml-8 sm:ml-12" },
  { src: cfldLogo.url, alt: "CFLD", className: "h-14 sm:h-16" },
  { src: galaLogo.url, alt: "Gala", className: "h-8 sm:h-10 -translate-y-1" },
  { src: bitmartLogo.url, alt: "BitMart", className: "h-8 sm:h-10" },
];

export const LogoCloud = () => (
  <section className="py-14 border-y border-border/40 bg-card/40">
    <div className="container">
      <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-10">
        Trusted By Global Industry Leaders
      </p>
      <div className="relative overflow-hidden">
        <div className="flex items-center gap-x-10 sm:gap-x-16 animate-marquee w-max">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className={`flex items-center justify-center shrink-0 w-[14vw] min-w-[140px] py-4 ${logo.wrapperClass || ""}`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`${logo.className} w-auto max-w-full object-contain object-left transition-opacity`}
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
