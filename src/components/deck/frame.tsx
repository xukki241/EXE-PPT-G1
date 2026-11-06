import type { ReactNode } from "react";

export function SlideFrame({
  kicker,
  title,
  page,
  total,
  children,
}: {
  kicker: string;
  title: string;
  page: number;
  total: number;
  children: ReactNode;
}) {
  return (
    <article className="relative flex h-full min-h-0 flex-col overflow-hidden bg-paper text-ink">
      <div
        className="pointer-events-none absolute -left-20 -top-16 size-72 rounded-full bg-wash"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 size-56 rounded-full bg-wash"
        aria-hidden
      />
      <Leaf className="pointer-events-none absolute -bottom-3 -left-2 size-24 text-leaf" />
      <Leaf className="pointer-events-none absolute -right-3 -bottom-6 size-20 -scale-x-100 text-leaf opacity-80" />

      <header className="relative z-10 bg-maroon text-card">
        <div className="flex items-center gap-2 px-3 py-2 sm:gap-3 sm:px-5 sm:py-2.5">
          <span className="shrink-0 rounded-full bg-card px-3 py-1 text-xs font-bold tracking-widest text-maroon uppercase">
            {kicker}
          </span>
          <h2 className="line-clamp-2 min-w-0 flex-1 text-xs font-semibold tracking-wide uppercase sm:text-sm md:text-base">
            {title}
          </h2>
          <span className="shrink-0 text-xs font-semibold tracking-widest tabular-nums">
            {String(page).padStart(2, "0")}
            <span className="text-card/70"> / {String(total).padStart(2, "0")}</span>
          </span>
        </div>
      </header>

      <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-y-auto p-3 sm:p-4">{children}</div>
    </article>
  );
}

function Leaf({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" aria-hidden>
      <path
        fill="currentColor"
        d="M18 68c18-6 30-26 26-50 2 8 10 22 22 28-14 6-28 16-48 22z"
      />
      <path
        fill="currentColor"
        opacity="0.55"
        d="M34 70c6-14 18-24 36-26-10 8-22 16-36 26z"
      />
    </svg>
  );
}

export function Panel({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`flex flex-col gap-1.5 rounded-lg border-2 border-ink bg-card p-2.5 ${className}`}>
      <h3 className="text-center text-xs font-bold tracking-widest text-maroon uppercase">{label}</h3>
      {children}
    </section>
  );
}

export function Node({
  icon: Icon,
  title,
  detail,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  detail: string;
}) {
  return (
    <div className="flex items-start gap-2 rounded-md border-2 border-ink bg-paper px-2 py-1.5">
      <span className="grid size-8 shrink-0 place-items-center rounded-md border-2 border-ink bg-card text-maroon">
        <Icon className="size-4" strokeWidth={1.75} />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold leading-tight">{title}</span>
        <span className="mt-0.5 block text-xs leading-snug text-ink/70">{detail}</span>
      </span>
    </div>
  );
}
