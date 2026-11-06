import type { ReactNode } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SlideFrame } from "./frame";
import { BudgetSlide, DeploySlide, FlowSlide, MarketingSlide, OpsSlide, OverviewSlide, RevenuePlanSlide, ScaleSlide } from "./slides";

const source = [
  ["bia", "Bìa"],
  ["nhom", "Nhóm"],
  ["muc-luc", "Mục lục"],
  ["quy-mo", "Quy mô"],
  ["xu-huong", "Xu hướng"],
  ["gia", "Giá"],
  ["van-de", "Vấn đề"],
  ["khao-sat", "Khảo sát"],
  ["minh", "Chuyên gia"],
  ["anh", "Nhiếp ảnh"],
  ["phan-khuc", "Phân khúc"],
  ["hanh-trinh", "Hành trình"],
  ["doi-thu", "Đối thủ"],
  ["huawei", "Huawei"],
  ["oppo", "OPPO"],
  ["booth", "Booth"],
  ["khac-biet", "Khác biệt"],
  ["gia-tri", "Giá trị"],
  ["gia-thuyet", "Giả thuyết"],
  ["chien-luoc", "Chiến lược"],
  ["canvas", "Canvas"],
  ["mo-hinh", "Mô hình"],
  ["khach", "Khách"],
  ["nguon-luc", "Nguồn lực"],
  ["kinh-te", "Kinh tế"],
  ["cam-on", "Cảm ơn"],
] as const;

type SourceSlide = { id: string; nav: string; src: string; alt: string };
type WebSlide = {
  id: string;
  nav: string;
  kicker: string;
  title: string;
  body: () => ReactNode;
  group: "web" | "plan";
};

const original: SourceSlide[] = source.map(([id, nav], index) => ({
  id,
  nav,
  src: `/deck/${String(index + 1).padStart(2, "0")}.jpg`,
  alt: nav,
}));

const web: WebSlide[] = [
  {
    id: "overview",
    nav: "Hạ tầng",
    kicker: "Infrastructure",
    title: "Hạ tầng hệ thống triển khai — Pose-Booth",
    body: OverviewSlide,
    group: "web",
  },
  {
    id: "flow",
    nav: "Luồng",
    kicker: "Flow",
    title: "Luồng một phiên chụp",
    body: FlowSlide,
    group: "web",
  },
  {
    id: "deploy",
    nav: "Triển khai",
    kicker: "Deploy",
    title: "Hai đường đưa kiosk lên",
    body: DeploySlide,
    group: "web",
  },
  {
    id: "ops",
    nav: "Vận hành",
    kicker: "Ops",
    title: "Trước giờ mở và khi đang chạy",
    body: OpsSlide,
    group: "web",
  },
  {
    id: "scale",
    nav: "Mở rộng",
    kicker: "Scale",
    title: "Từ pilot đến khi nghiệm thu",
    body: ScaleSlide,
    group: "web",
  },
];

const plans: WebSlide[] = [
  {
    id: "marketing",
    nav: "Marketing",
    kicker: "Marketing",
    title: "Kế hoạch marketing — một campus",
    body: MarketingSlide,
    group: "plan",
  },
  {
    id: "revenue-plan",
    nav: "Doanh thu",
    kicker: "Revenue",
    title: "Doanh thu kế hoạch",
    body: RevenuePlanSlide,
    group: "plan",
  },
  {
    id: "budget",
    nav: "Dự trù",
    kicker: "Budget",
    title: "Dự trù chi tiêu một kiosk",
    body: BudgetSlide,
    group: "plan",
  },
];

const thanks = original[original.length - 1];
const story = original.slice(0, -1);
const slides: Array<SourceSlide | WebSlide> = [...story, ...web, ...plans, thanks];

function WebFrame({ slide, page, total }: { slide: WebSlide; page: number; total: number }) {
  const Body = slide.body;
  return (
    <SlideFrame kicker={slide.kicker} title={slide.title} page={page} total={total}>
      <Body />
    </SlideFrame>
  );
}

export function Deck() {
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const navRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (next: number) => {
      setIndex((next + count) % count);
    },
    [count],
  );

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
      if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
        event.preventDefault();
        go(index + 1);
      } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        go(index - 1);
      } else if (event.key === "Home") {
        go(0);
      } else if (event.key === "End") {
        go(count - 1);
      } else if (/^[0-9]$/.test(event.key)) {
        const n = event.key === "0" ? 9 : Number(event.key) - 1;
        if (n < count) go(n);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count, go, index]);

  useEffect(() => {
    const root = navRef.current;
    const active = root?.querySelector<HTMLElement>("[aria-current='true']");
    if (!root || !active) return;
    root.scrollTo({ left: active.offsetLeft - root.clientWidth / 2 + active.clientWidth / 2, behavior: "smooth" });
  }, [index]);

  const slide = slides[index];

  return (
    <div className="flex h-dvh flex-col bg-desk text-ink">
      <div className="flex items-center justify-between gap-3 px-4 pt-3 pb-2 sm:px-6">
        <p className="text-xs font-bold tracking-widest text-maroon uppercase">Pose-Booth AI</p>
        <p className="text-xs text-ink/70 tabular-nums">
          {"src" in slide
            ? slide.id === "cam-on"
              ? "Kết"
              : "Slide gốc"
            : slide.group === "web"
              ? "Hạ tầng web"
              : "Kế hoạch"}{" "}
          · {String(index + 1).padStart(2, "0")}/
          {String(count).padStart(2, "0")}
        </p>
      </div>

      <div className="min-h-0 flex-1 px-3 sm:px-6">
        <div
          key={slide.id}
          className="slide-enter mx-auto h-full max-w-6xl overflow-hidden rounded-2xl border-2 border-ink"
        >
          {"src" in slide ? (
            <div className="flex h-full w-full items-center justify-center bg-card">
              <img src={slide.src} alt={slide.alt} className="max-h-full max-w-full object-contain" />
            </div>
          ) : (
            <WebFrame slide={slide} page={index + 1} total={count} />
          )}
        </div>
      </div>

      <nav className="flex items-center gap-2 px-3 py-3 sm:px-6" aria-label="Điều hướng slide">
        <button
          type="button"
          className="grid size-11 shrink-0 place-items-center rounded-full border-2 border-ink bg-card"
          onClick={() => go(index - 1)}
          aria-label="Slide trước"
        >
          <ChevronLeft className="size-5" />
        </button>
        <div ref={navRef} className="flex min-w-0 flex-1 gap-1.5 overflow-x-auto">
          {slides.map((item, itemIndex) => {
            const active = itemIndex === index;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => go(itemIndex)}
                aria-current={active ? "true" : undefined}
                className={
                  active
                    ? "shrink-0 rounded-full border-2 border-ink bg-maroon px-3 py-2 text-xs font-semibold text-card"
                    : "shrink-0 rounded-full border-2 border-ink bg-card px-3 py-2 text-xs font-semibold"
                }
              >
                {item.nav}
              </button>
            );
          })}
        </div>
        <button
          type="button"
          className="grid size-11 shrink-0 place-items-center rounded-full border-2 border-ink bg-card"
          onClick={() => go(index + 1)}
          aria-label="Slide sau"
        >
          <ChevronRight className="size-5" />
        </button>
      </nav>
    </div>
  );
}
