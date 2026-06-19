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
import { resolveAssetUrl } from "@/lib/utils";

const logos: { src: string; alt: string; className: string }[] = [
  { src: viuLogo.url, alt: "Viu", className: "h-8 sm:h-10" },
  { src: huaweiLogo.url, alt: "Huawei", className: "h-10 sm:h-12" },
  { src: antGroupLogo.url, alt: "Ant Group", className: "h-10 sm:h-12" },
  { src: stEngineeringLogo.url, alt: "ST Engineering", className: "h-10 sm:h-12" },
  { src: hpLogo.url, alt: "HP", className: "h-10 sm:h-12" },
  { src: pgLogo.url, alt: "P&G", className: "h-10 sm:h-12" },
  { src: renwthLogo.url, alt: "Renwth Indonesia", className: "h-12 sm:h-14" },
  { src: foodyLogo.url, alt: "Foody.vn", className: "h-10 sm:h-12" },
  { src: lotteriaLogo.url, alt: "Lotteria", className: "h-10 sm:h-12" },
  { src: shopeeLogo.url, alt: "Shopee", className: "h-10 sm:h-12" },
  { src: hiltonLogo.url, alt: "Hilton Hotels & Resorts", className: "h-10 sm:h-12" },
  { src: ongongLogo.url, alt: "Ong & Ong", className: "h-12 sm:h-14" },
  { src: cfldLogo.url, alt: "CFLD", className: "h-8 sm:h-10" },
  { src: galaLogo.url, alt: "Gala", className: "h-8 sm:h-10" },
  { src: bitmartLogo.url, alt: "BitMart", className: "h-8 sm:h-10" },
];

export const LogoCloud = () => (
  <section className="py-14 border-y border-border/40 bg-card/40">
    <div className="container">
      <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-10">
        Trusted By Global Industry Leaders
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12">
        {logos.map((logo) => (
          <div
            key={logo.alt}
            className={`flex items-center justify-center py-2 ${logo.wrapperClass || ""}`}
          >
            <img
              src={resolveAssetUrl(logo.src)}
              alt={logo.alt}
              className={`${logo.className} w-auto max-w-full object-contain object-left`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);
