import type { ReactNode } from "react";
import {
  Camera,
  ChevronDown,
  ChevronRight,
  Cpu,
  Database,
  Gauge,
  GraduationCap,
  HardDrive,
  Handshake,
  KeyRound,
  MapPin,
  MonitorSmartphone,
  Printer,
  QrCode,
  ScanSearch,
  Server,
  Smartphone,
  Store,
  Timer,
  Users,
  Wallet,
  Workflow,
} from "lucide-react";
import {
  siDocker,
  siFastapi,
  siFlutter,
  siMediapipe,
  siNextdotjs,
  siNginx,
  siNvidia,
  siPostgresql,
  siRabbitmq,
  siRedis,
  siYolo,
} from "simple-icons";
import { Node, Panel } from "./frame";

type Mark = { title: string; path: string };

function Logo({ icon, label }: { icon: Mark; label?: string }) {
  return (
    <div className="flex w-16 flex-col items-center gap-1">
      <span className="grid size-11 place-items-center rounded-lg border-2 border-ink bg-paper text-ink">
        <svg viewBox="0 0 24 24" className="size-6" aria-hidden>
          <path d={icon.path} fill="currentColor" />
        </svg>
      </span>
      <span className="text-center text-xs font-semibold leading-tight">{label ?? icon.title}</span>
    </div>
  );
}

function Glyph({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
}) {
  return (
    <div className="flex w-16 flex-col items-center gap-1">
      <span className="grid size-11 place-items-center rounded-lg border-2 border-ink bg-paper text-maroon">
        <Icon className="size-5" strokeWidth={1.75} />
      </span>
      <span className="text-center text-xs font-semibold leading-tight">{label}</span>
    </div>
  );
}

function Down() {
  return (
    <div className="flex justify-center text-maroon" aria-hidden>
      <ChevronDown className="size-4" />
    </div>
  );
}

function Right() {
  return <ChevronRight className="hidden size-4 shrink-0 text-maroon sm:block" aria-hidden />;
}

const services = ["PostgreSQL", "Redis", "RabbitMQ", "AI CUDA", "API", "Worker", "Web", "Nginx"];

export function OverviewSlide() {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="grid gap-2 lg:grid-cols-3">
        <Panel label="Client">
          <Node icon={MonitorSmartphone} title="Web kiosk" detail="Next.js, C-Comic UI, chỉ theme sáng" />
          <Node icon={Smartphone} title="Mobile" detail="Flutter, dùng chung token với web" />
        </Panel>
        <Panel label="Cổng vào">
          <Node icon={Server} title="Nginx" detail="Proxy /booth và toàn bộ /api" />
          <Node icon={Workflow} title="Product API" detail="FastAPI · /api/v1 và route pose cũ" />
        </Panel>
        <Panel label="Bảo mật">
          <Node icon={KeyRound} title="JWT" detail="Một hệ token cho kiosk và app" />
          <Node icon={QrCode} title="QR chia sẻ" detail="Chỉ đọc, thu hồi được, không public tunnel" />
        </Panel>
      </div>

      <p className="rounded-md border-2 border-ink bg-card px-3 py-2 text-center text-xs font-medium text-ink/80">
        Client vào Nginx → API gọi AI runtime → JWT phủ cả hai client → Worker nghe RabbitMQ
      </p>

      <div className="grid gap-2 lg:grid-cols-3">
        <Panel label="AI runtime">
          <Node icon={ScanSearch} title="YOLOv8 + MediaPipe" detail="Phát hiện và chấm pose, không random" />
          <Node icon={Cpu} title="Process CUDA riêng" detail="Weights local, không upload để train" />
        </Panel>
        <Panel label="Data layer">
          <Node icon={Database} title="PostgreSQL + Redis" detail="Phiên, gallery, rate limit" />
          <Node icon={HardDrive} title="Volume assets" detail="Ảnh nằm trong Docker volume" />
        </Panel>
        <Panel label="Việc nền">
          <Node icon={Workflow} title="RabbitMQ 4.2" detail="Outbox từ API sang worker" />
          <Node icon={Timer} title="Worker" detail="Thumbnail và dọn gallery quá hạn" />
        </Panel>
      </div>

      <Panel label="Runtime triển khai" className="mt-auto">
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
          {services.map((name) => (
            <li
              key={name}
              className="rounded-md border-2 border-ink bg-paper px-2 py-1.5 text-center text-xs font-semibold"
            >
              {name}
            </li>
          ))}
        </ul>
        <p className="text-center text-xs text-ink/70">Docker Compose · local-first · không train trên kiosk</p>
      </Panel>
    </div>
  );
}

function Stage({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="flex flex-1 flex-col justify-center rounded-lg border-2 border-ink bg-card px-2 py-2">
      <h3 className="text-center text-xs font-bold tracking-widest text-maroon uppercase">{label}</h3>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3">{children}</div>
    </section>
  );
}

export function FlowSlide() {
  return (
    <div className="flex flex-1 flex-col gap-1">
      <Stage label="1 · Khách mở kiosk">
        <Logo icon={siNextdotjs} label="Next.js" />
        <Right />
        <Logo icon={siFlutter} label="Flutter" />
      </Stage>
      <Down />
      <Stage label="2 · Vào cổng">
        <Logo icon={siNginx} label="Nginx" />
        <Right />
        <Logo icon={siFastapi} label="FastAPI" />
      </Stage>
      <Down />
      <Stage label="3 · Chấm dáng">
        <Logo icon={siYolo} label="YOLOv8" />
        <Right />
        <Logo icon={siMediapipe} label="MediaPipe" />
        <Right />
        <Logo icon={siNvidia} label="CUDA" />
      </Stage>
      <Down />
      <Stage label="4 · Giữ ảnh · trả QR">
        <Logo icon={siPostgresql} label="Postgres" />
        <Logo icon={siRedis} label="Redis" />
        <Logo icon={siRabbitmq} label="RabbitMQ" />
        <Right />
        <Glyph icon={QrCode} label="QR 24h" />
      </Stage>
    </div>
  );
}

const pilot = ["init-pilot", "Compose lên", "Mở /booth"];
const linux = ["Next.js", "Uvicorn", "Nginx", "HTTPS"];

export function DeploySlide() {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="grid flex-1 gap-2 lg:grid-cols-2">
        <Panel label="Pilot · một máy">
          <div className="flex flex-1 flex-col justify-center gap-2">
            {pilot.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <span className="grid size-8 shrink-0 place-items-center rounded-full border-2 border-ink bg-maroon text-xs font-bold text-card">
                  {index + 1}
                </span>
                {index < pilot.length - 1 ? <span className="hidden" /> : null}
                <span className="flex-1 rounded-md border-2 border-ink bg-paper px-3 py-2 text-sm font-semibold">
                  {step}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-2 flex items-center justify-center gap-3">
            <Logo icon={siDocker} label="Compose" />
            <Logo icon={siNvidia} label="GPU riêng" />
          </div>
        </Panel>
        <Panel label="Server Linux">
          <div className="flex flex-1 items-center justify-center gap-1 sm:gap-2">
            {linux.map((step, index) => (
              <div key={step} className="flex items-center gap-1 sm:gap-2">
                <div className="flex w-16 flex-col items-center gap-1">
                  <span className="grid size-11 place-items-center rounded-lg border-2 border-ink bg-paper text-sm font-bold text-maroon">
                    {index + 1}
                  </span>
                  <span className="text-center text-xs font-semibold leading-tight">{step}</span>
                </div>
                {index < linux.length - 1 ? <Right /> : null}
              </div>
            ))}
          </div>
          <div className="mt-2 flex items-center justify-center gap-3">
            <Logo icon={siNextdotjs} label="Web" />
            <Logo icon={siNginx} label="Proxy" />
            <Logo icon={siFastapi} label="API" />
          </div>
        </Panel>
      </div>
      <p className="rounded-md border-2 border-ink bg-sun px-3 py-2 text-center text-xs font-semibold">
        Compose cho pilot. systemd + Nginx khi có máy chủ. Không mở tunnel thay HTTPS.
      </p>
    </div>
  );
}

export function OpsSlide() {
  return (
    <div className="grid flex-1 gap-2 lg:grid-cols-3">
      <Panel label="Trước giờ mở">
        <div className="flex flex-1 flex-col items-center justify-center gap-3">
          <Glyph icon={Gauge} label="/health" />
          <ChevronDown className="size-4 text-maroon" />
          <Glyph icon={Cpu} label="engine_ready" />
        </div>
        <p className="text-center text-xs font-medium text-ink/70">200 chưa đủ. Xem thêm fp16.</p>
      </Panel>
      <Panel label="Đang chạy">
        <div className="flex flex-1 flex-wrap items-center justify-center gap-3">
          <Logo icon={siRedis} label="Chặn spam" />
          <Logo icon={siRabbitmq} label="Outbox" />
          <Glyph icon={Timer} label="Dọn 24h" />
        </div>
      </Panel>
      <Panel label="Không làm">
        <ul className="flex flex-1 flex-col justify-center gap-2">
          {["Không train cạnh kiosk", "Không chia GPU cho Uvicorn", "Không né TLS bằng tunnel"].map((item) => (
            <li key={item} className="rounded-md border-2 border-maroon bg-paper px-3 py-2 text-center text-sm font-semibold">
              {item}
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}

const path = [
  { n: "01", title: "Pilot cục bộ" },
  { n: "02", title: "TLS trên LAN" },
  { n: "03", title: "Nhiều camera" },
  { n: "04", title: "Admin & model" },
];

const checked = ["Test AI", "Smoke pilot", "Test camera", "Notebook dry-run"];
const open = ["3 camera", "TLS LAN", "Admin UI", "OpenAPI type"];

export function ScaleSlide() {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <ol className="grid flex-1 gap-2 sm:grid-cols-4">
        {path.map((item, index) => (
          <li key={item.n} className="relative flex flex-col justify-center rounded-lg border-2 border-ink bg-card p-3">
            <span className="text-2xl font-bold text-maroon">{item.n}</span>
            <p className="mt-1 text-sm font-semibold">{item.title}</p>
            {index < path.length - 1 ? (
              <ChevronRight className="absolute top-3 right-2 hidden size-4 text-maroon sm:block" />
            ) : null}
          </li>
        ))}
      </ol>
      <div className="grid gap-2 lg:grid-cols-2">
        <Panel label="Đã kiểm">
          <ul className="grid grid-cols-2 gap-2">
            {checked.map((item) => (
              <li key={item} className="rounded-md border-2 border-ink bg-wash px-2 py-2 text-center text-xs font-semibold">
                {item}
              </li>
            ))}
          </ul>
        </Panel>
        <Panel label="Chưa nghiệm thu">
          <ul className="grid grid-cols-2 gap-2">
            {open.map((item) => (
              <li key={item} className="rounded-md border-2 border-maroon bg-card px-2 py-2 text-center text-xs font-semibold">
                {item}
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}

const pains = [
  { q: "Tay để đâu?", pct: "80,6%", label: "Đặt tay / chân", width: "81%" },
  { q: "Cứng, gượng", pct: "76,7%", label: "Cứng / gượng", width: "77%" },
  { q: "Chọn dáng nào?", pct: "75,2%", label: "Thiếu ý dáng", width: "75%" },
];

export function ProblemSlide() {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="grid gap-2 sm:grid-cols-3">
        {pains.map((item) => (
          <div key={item.q} className="rounded-lg border-2 border-ink bg-card px-3 py-4 text-center">
            <p className="text-lg font-bold">{item.q}</p>
          </div>
        ))}
      </div>
      <Panel label="Khảo sát n = 129 · tín hiệu định hướng" className="flex-1">
        <ul className="flex flex-1 flex-col justify-center gap-3">
          {pains.map((item) => (
            <li key={item.label} className="grid grid-cols-[6.5rem_1fr_3rem] items-center gap-2">
              <span className="text-xs font-semibold">{item.label}</span>
              <span className="h-4 overflow-hidden rounded-full border-2 border-ink bg-paper">
                <span className="block h-full bg-maroon" style={{ width: item.width }} />
              </span>
              <span className="text-right text-xs font-bold tabular-nums">{item.pct}</span>
            </li>
          ))}
        </ul>
      </Panel>
      <div className="grid gap-2 lg:grid-cols-2">
        <p className="rounded-md border-2 border-ink bg-paper px-3 py-2 text-sm">
          <span className="font-semibold">Hồ Sĩ Nhật Minh · </span>
          Có bạn ngại máy, che tay.
        </p>
        <p className="rounded-md border-2 border-ink bg-paper px-3 py-2 text-sm">
          <span className="font-semibold">Nguyễn Công Anh · </span>
          Khó ở vị trí đứng và đội hình.
        </p>
      </div>
    </div>
  );
}

const prices = [
  { who: "Life4cuts", what: "70–100k", unit: "/ 2 ảnh" },
  { who: "Pik · năm", what: "$1.7", unit: "/ tháng" },
  { who: "Pik · tháng", what: "$2.0", unit: "/ tháng" },
  { who: "BeautyPlus", what: "0đ", unit: "booth web" },
];

const trend = [
  { year: "2022", h: "8%" },
  { year: "2023", h: "14%" },
  { year: "2024", h: "28%" },
  { year: "2025", h: "100%" },
];

export function MarketSlide() {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="grid gap-2 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-lg border-2 border-ink bg-card p-3">
          <div className="text-center">
            <p className="text-3xl font-bold text-maroon">2,0</p>
            <p className="text-xs font-semibold">triệu SV · 22–23</p>
          </div>
          <ChevronRight className="size-5 text-maroon" />
          <div className="text-center">
            <p className="text-3xl font-bold text-maroon">2,4</p>
            <p className="text-xs font-semibold">triệu SV · 23–24</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-lg border-2 border-ink bg-sun p-3">
          <GraduationCap className="size-8 shrink-0" />
          <div>
            <p className="text-2xl font-bold leading-none">243</p>
            <p className="mt-1 text-sm font-semibold">trường · bắt đầu 1 campus</p>
          </div>
        </div>
      </div>
      <Panel label="Trends VN · chỉ số tương đối, không phải lượt tìm" className="flex-1">
        <div className="flex h-28 items-end gap-3 px-2">
          {trend.map((item) => (
            <div key={item.year} className="flex h-full flex-1 flex-col justify-end gap-1">
              <div className="rounded-t-md border-2 border-ink bg-maroon" style={{ height: item.h }} />
              <span className="text-center text-xs font-semibold">{item.year}</span>
            </div>
          ))}
        </div>
      </Panel>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {prices.map((item) => (
          <div key={item.who} className="rounded-lg border-2 border-ink bg-card px-2 py-2 text-center">
            <p className="text-xs font-bold tracking-wide text-maroon uppercase">{item.who}</p>
            <p className="text-lg font-bold">{item.what}</p>
            <p className="text-xs text-ink/70">{item.unit}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const journey = [
  { n: "1", title: "Rủ bạn", detail: "Muốn ảnh chung" },
  { n: "2", title: "Chọn điểm", detail: "Đợi lượt" },
  { n: "3", title: "Vào khung", detail: "Tay chân đặt đâu?" },
  { n: "4", title: "Chụp lại", detail: "Chưa vừa ý" },
  { n: "5", title: "Nhận ảnh", detail: "In / chia sẻ" },
];

const who = [
  { icon: Users, k: "Ai", v: "Nhóm 2–4 sinh viên" },
  { icon: MapPin, k: "Đâu", v: "Campus / sự kiện" },
  { icon: Camera, k: "Cần", v: "Một ảnh chung" },
  { icon: Store, k: "Vào", v: "CLB và điểm chụp" },
];

export function JourneySlide() {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {who.map((item) => (
          <div key={item.k} className="flex items-center gap-2 rounded-lg border-2 border-ink bg-card px-2 py-2">
            <span className="grid size-9 shrink-0 place-items-center rounded-md border-2 border-ink bg-paper text-maroon">
              <item.icon className="size-4" />
            </span>
            <span>
              <span className="block text-xs font-bold tracking-widest text-maroon uppercase">{item.k}</span>
              <span className="block text-xs font-semibold">{item.v}</span>
            </span>
          </div>
        ))}
      </div>
      <ol className="flex flex-1 flex-col gap-2 sm:flex-row">
        {journey.map((step, index) => (
          <li key={step.n} className="flex min-w-0 flex-1 items-stretch gap-1">
            <div
              className={
                step.n === "3"
                  ? "flex flex-1 flex-col justify-center rounded-lg border-2 border-ink bg-sun p-3"
                  : "flex flex-1 flex-col justify-center rounded-lg border-2 border-ink bg-card p-3"
              }
            >
              <span className="text-xl font-bold text-maroon">{step.n}</span>
              <p className="text-sm font-semibold">{step.title}</p>
              <p className="text-xs text-ink/70">{step.detail}</p>
            </div>
            {index < journey.length - 1 ? (
              <ChevronRight className="hidden size-4 shrink-0 self-center text-maroon sm:block" />
            ) : null}
          </li>
        ))}
      </ol>
      <p className="rounded-md border-2 border-ink bg-maroon px-3 py-2 text-center text-sm font-semibold text-card">
        Nghẽn ở bước vào khung · cơ hội: hướng dẫn trước khi bấm
      </p>
    </div>
  );
}

const rivals = [
  { label: "Dáng trên camera", names: ["EZ Pose", "Pik Pose"], note: "Lớp phủ lúc ngắm" },
  { label: "Khung / hậu kỳ", names: ["Huawei", "OPPO"], note: "Sửa khung sau ảnh" },
  { label: "Phiên ảnh", names: ["BeautyPlus", "Simple Booth"], note: "Chụp rồi tải / chia sẻ" },
];

export function DiffSlide() {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="grid flex-1 gap-2 lg:grid-cols-3">
        {rivals.map((col) => (
          <Panel key={col.label} label={col.label}>
            <div className="flex flex-1 flex-col items-center justify-center gap-2">
              {col.names.map((name) => (
                <p key={name} className="w-full rounded-md border-2 border-ink bg-paper px-3 py-3 text-center text-sm font-bold">
                  {name}
                </p>
              ))}
              <p className="text-center text-xs font-medium text-ink/70">{col.note}</p>
            </div>
          </Panel>
        ))}
      </div>
      <div className="grid gap-2 lg:grid-cols-2">
        <div className="rounded-lg border-2 border-ink bg-card px-3 py-3">
          <p className="text-xs font-bold tracking-widest text-maroon uppercase">Nhóm bạn</p>
          <p className="text-base font-semibold">Dễ chọn dáng và vào khung</p>
        </div>
        <div className="rounded-lg border-2 border-ink bg-card px-3 py-3">
          <p className="text-xs font-bold tracking-widest text-maroon uppercase">Điểm chụp</p>
          <p className="text-base font-semibold">Bớt nhắc dáng lặp lại</p>
        </div>
      </div>
      <p className="rounded-md border-2 border-ink bg-sun px-3 py-2 text-center text-sm font-semibold">
        Giả thuyết: nhóm làm theo được và chọn được ảnh chung hơn. Cần đo tại điểm chụp.
      </p>
    </div>
  );
}

const canvas = [
  {
    n: "1",
    title: "Khách",
    icon: Users,
    items: ["Sinh viên 2–4", "CLB / sự kiện", "Cafe / TTTM"],
    className: "lg:col-start-5 lg:row-span-2 lg:row-start-1",
  },
  {
    n: "2",
    title: "Giá trị",
    icon: Camera,
    items: ["Gợi ý dáng lúc chụp", "Ảnh ở máy, QR 24h", "In ngay tại điểm"],
    className: "lg:col-start-3 lg:row-span-2 lg:row-start-1",
  },
  {
    n: "3",
    title: "Kênh",
    icon: QrCode,
    items: ["Campus / sự kiện", "QR · mạng xã hội"],
    className: "lg:col-start-4 lg:row-start-2",
  },
  {
    n: "4",
    title: "Quan hệ",
    icon: Handshake,
    items: ["Tự chụp tại booth", "Hỗ trợ tại chỗ"],
    className: "lg:col-start-4 lg:row-start-1",
  },
  {
    n: "5",
    title: "Doanh thu",
    icon: Wallet,
    items: ["Thuê kiosk", "Phí mỗi lượt", "Frame thương hiệu"],
    className: "lg:col-span-2 lg:col-start-4 lg:row-start-3",
    check: true,
  },
  {
    n: "6",
    title: "Nguồn lực",
    icon: Cpu,
    items: ["Edge GPU + engine", "Thư viện frame"],
    className: "lg:col-start-2 lg:row-start-2",
  },
  {
    n: "7",
    title: "Hoạt động",
    icon: Workflow,
    items: ["Dựng kiosk", "Đo và thử A/B"],
    className: "lg:col-start-2 lg:row-start-1",
  },
  {
    n: "8",
    title: "Đối tác",
    icon: Store,
    items: ["CLB", "Quán / venue", "In & thanh toán"],
    className: "lg:col-start-1 lg:row-span-2 lg:row-start-1",
  },
  {
    n: "9",
    title: "Chi phí",
    icon: Printer,
    items: ["Máy, camera, GPU", "Giấy, mực nhiệt", "Người vận hành"],
    className: "lg:col-span-3 lg:col-start-1 lg:row-start-3",
    check: true,
  },
];

export function CanvasSlide() {
  return (
    <div className="grid flex-1 gap-1.5 lg:grid-cols-5 lg:grid-rows-3">
      {canvas.map((cell) => {
        const Icon = cell.icon;
        return (
          <section key={cell.n} className={`rounded-lg border-2 border-ink bg-card p-2 ${cell.className}`}>
            <div className="flex items-center gap-1.5">
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-maroon text-xs font-bold text-card">
                {cell.n}
              </span>
              <Icon className="size-4 shrink-0 text-maroon" />
              <h3 className="text-xs font-bold tracking-wide uppercase">{cell.title}</h3>
              {cell.check ? (
                <span className="ml-auto rounded-full bg-sun px-2 py-0.5 text-xs font-bold">Kiểm chứng</span>
              ) : null}
            </div>
            <ul className="mt-1.5 space-y-0.5">
              {cell.items.map((item) => (
                <li key={item} className="text-xs font-medium leading-snug">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

const moneyIn = [
  { icon: Store, title: "Thuê kiosk", detail: "Trọn buổi / sự kiện" },
  { icon: QrCode, title: "Phí mỗi lượt", detail: "Chụp và QR" },
  { icon: Wallet, title: "Frame hiệu", detail: "Tài trợ thương hiệu" },
];

const moneyOut = [
  { icon: Cpu, title: "AI & giao diện" },
  { icon: Camera, title: "Booth & đèn" },
  { icon: Printer, title: "Giấy, mực" },
  { icon: Users, title: "Vận hành" },
];

const metrics = [
  { icon: Camera, title: "Ảnh được chọn" },
  { icon: Timer, title: "Vào khung < 50ms" },
  { icon: Wallet, title: "Sẵn lòng trả" },
  { icon: Users, title: "Lượt dùng lại" },
];

export function EconomySlide() {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <p className="rounded-md border-2 border-ink bg-sun px-3 py-2 text-center text-sm font-semibold">
        Hữu ích → dùng lại → sẵn sàng trả. Chưa chốt giá.
      </p>
      <div className="grid flex-1 gap-2 lg:grid-cols-2">
        <Panel label="Doanh thu · cần kiểm chứng">
          <ul className="grid flex-1 content-center gap-2 sm:grid-cols-3">
            {moneyIn.map((item) => (
              <li key={item.title} className="rounded-md border-2 border-ink bg-paper px-2 py-3 text-center">
                <item.icon className="mx-auto size-5 text-maroon" />
                <p className="mt-1 text-sm font-semibold">{item.title}</p>
                <p className="text-xs text-ink/70">{item.detail}</p>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel label="Chi phí · cần kiểm chứng">
          <ul className="grid flex-1 grid-cols-2 content-center gap-2">
            {moneyOut.map((item) => (
              <li key={item.title} className="flex items-center gap-2 rounded-md border-2 border-ink bg-paper px-2 py-2">
                <item.icon className="size-5 shrink-0 text-maroon" />
                <span className="text-sm font-semibold">{item.title}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {metrics.map((item) => (
          <div key={item.title} className="flex items-center gap-2 rounded-lg border-2 border-ink bg-card px-2 py-2">
            <span className="grid size-9 shrink-0 place-items-center rounded-full border-2 border-maroon text-maroon">
              <item.icon className="size-4" />
            </span>
            <span className="text-xs font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const team = [
  { name: "Nguyễn Minh Dương", src: "/team-duong.png" },
  { name: "Lê Hải An", src: "/team-an.png" },
  { name: "Lê Đức Hoàng", src: "/team-hoang.png" },
  { name: "Nguyễn Xuân Kiên", src: "/team-kien.png" },
  { name: "Nguyễn Quốc Khánh", src: "/team-khanh.png" },
  { name: "Vũ Minh Hiếu", src: "/team-hieu.png" },
];

export function TeamSlide() {
  return (
    <ul className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3">
      {team.map((person) => (
        <li key={person.name} className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-ink bg-card px-2 py-3">
          <img src={person.src} alt={person.name} className="h-28 w-full object-contain sm:h-36" />
          <p className="text-center text-sm font-semibold">{person.name}</p>
        </li>
      ))}
    </ul>
  );
}

function vnd(value: number) {
  return `${new Intl.NumberFormat("vi-VN").format(value)} đ`;
}

function Ledger({
  title,
  rows,
}: {
  title: string;
  rows: { label: string; hint: string; amount: number }[];
}) {
  const total = rows.reduce((sum, row) => sum + row.amount, 0);
  return (
    <div className="overflow-hidden rounded-lg border-2 border-ink bg-card">
      <p className="bg-maroon px-3 py-1.5 text-xs font-bold text-card">{title}</p>
      {rows.map((row) => (
        <div key={row.label} className="grid grid-cols-[1fr_auto] items-center gap-3 border-t-2 border-ink px-3 py-1.5">
          <span>
            <span className="block text-xs font-semibold sm:text-sm">{row.label}</span>
            <span className="block text-xs text-ink/70">{row.hint}</span>
          </span>
          <span className="text-xs font-bold tabular-nums sm:text-sm">{vnd(row.amount)}</span>
        </div>
      ))}
      <div className="grid grid-cols-[1fr_auto] gap-3 border-t-2 border-ink bg-sun px-3 py-2 text-sm font-bold">
        <span>Cộng</span>
        <span className="tabular-nums">{vnd(total)}</span>
      </div>
    </div>
  );
}

const marketSteps = ["CLB", "Điểm chụp", "Ảnh thật", "Quảng cáo"];

const marketSpend = [
  { label: "Poster, standee", hint: "Một lần, trong campus", amount: 1_500_000 },
  { label: "Suất mở cho CLB", hint: "20 suất giấy ảnh", amount: 1_000_000 },
  { label: "Quảng cáo mạng xã hội", hint: "8 tháng × 1.000.000", amount: 8_000_000 },
];

export function MarketingSlide() {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <p className="rounded-md border-2 border-ink bg-sun px-3 py-2 text-center text-xs font-semibold sm:text-sm">
        Số kế hoạch · một campus · chưa chạy quảng cáo thật
      </p>
      <ol className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {marketSteps.map((step, index) => (
          <li key={step} className="flex items-center gap-2 rounded-lg border-2 border-ink bg-card px-2 py-2">
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-maroon text-xs font-bold text-card">
              {index + 1}
            </span>
            <span className="text-sm font-semibold">{step}</span>
          </li>
        ))}
      </ol>
      <Ledger title="Ngân sách marketing 12 tháng" rows={marketSpend} />
      <p className="mt-auto text-center text-xs text-ink/70">
        Nội dung TikTok và Instagram nhóm tự quay tại booth. Chỉ trả tiền khi đã có ảnh khách chọn.
      </p>
    </div>
  );
}

const pricesPlan = [
  { label: "Thuê sự kiện", price: "2,5 triệu", unit: "buổi 3 giờ" },
  { label: "Phiên tại điểm", price: "50.000", unit: "một bộ in" },
  { label: "In thêm", price: "15.000", unit: "một tờ" },
];

const revenueRows = [
  { label: "Thuê sự kiện", hint: "8 buổi × 2.500.000", amount: 20_000_000 },
  { label: "Phiên tại điểm", hint: "200 phiên × 50.000", amount: 10_000_000 },
  { label: "In thêm", hint: "60 tờ × 15.000", amount: 900_000 },
];

export function RevenuePlanSlide() {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="grid grid-cols-3 gap-2">
        {pricesPlan.map((item) => (
          <div key={item.label} className="rounded-lg border-2 border-ink bg-card px-2 py-2 text-center">
            <p className="text-xs font-bold tracking-wide text-maroon uppercase">{item.label}</p>
            <p className="text-lg font-bold tabular-nums">{item.price}</p>
            <p className="text-xs text-ink/70">{item.unit}</p>
          </div>
        ))}
      </div>
      <Ledger title="Khi chạy đều · một tháng" rows={revenueRows} />
      <div className="mt-auto grid gap-2 sm:grid-cols-2">
        <p className="rounded-md border-2 border-ink bg-paper px-3 py-2 text-xs">
          <span className="font-semibold">3 tháng đầu. </span>
          Khoảng 3 buổi thử, 7,5 triệu. Chưa bù máy.
        </p>
        <p className="rounded-md border-2 border-ink bg-wash px-3 py-2 text-xs">
          <span className="font-semibold">Giá campus. </span>
          Life4cuts tham khảo 70–100k / 2 ảnh.
        </p>
      </div>
    </div>
  );
}

const capex = [
  { label: "Máy tính GPU", hint: "Một kiosk", amount: 18_000_000 },
  { label: "Màn hình + webcam", hint: "Một bộ", amount: 8_000_000 },
  { label: "Máy in + giấy mở máy", hint: "Một bộ", amount: 6_000_000 },
  { label: "Khung booth + đèn", hint: "Một điểm", amount: 6_000_000 },
];

const monthly = [
  { label: "Điện, mạng", hint: "Điểm đặt", amount: 800_000 },
  { label: "Giấy, mực", hint: "Khoảng 400 bản", amount: 1_200_000 },
  { label: "Người trực", hint: "8 buổi × 500.000", amount: 4_000_000 },
  { label: "Bảo trì", hint: "Dự phòng", amount: 500_000 },
];

const year = [
  { label: "Vốn máy", amount: 38_000_000 },
  { label: "Vận hành 12 tháng", amount: 78_000_000 },
  { label: "Marketing", amount: 10_500_000 },
];

export function BudgetSlide() {
  const yearTotal = year.reduce((sum, row) => sum + row.amount, 0);
  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {year.map((row) => (
          <div key={row.label} className="rounded-lg border-2 border-ink bg-card px-3 py-2">
            <p className="text-xs text-ink/70">{row.label}</p>
            <p className="text-sm font-bold tabular-nums">{vnd(row.amount)}</p>
          </div>
        ))}
        <div className="rounded-lg border-2 border-ink bg-sun px-3 py-2">
          <p className="text-xs font-medium">Tổng dự trù</p>
          <p className="text-sm font-bold tabular-nums">{vnd(yearTotal)}</p>
        </div>
      </div>
      <div className="grid gap-2 lg:grid-cols-2">
        <Ledger title="Chi một lần" rows={capex} />
        <Ledger title="Mỗi tháng" rows={monthly} />
      </div>
      <p className="text-center text-xs text-ink/70">
        Nếu người trực là thành viên nhóm, bớt 4 triệu mỗi tháng. Chưa tính thuế.
      </p>
    </div>
  );
}

