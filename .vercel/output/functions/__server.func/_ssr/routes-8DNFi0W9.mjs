import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Server, c as MonitorSmartphone, d as Gauge, f as Database, g as ChevronDown, h as ChevronLeft, i as Smartphone, l as KeyRound, m as ChevronRight, o as ScanSearch, p as Cpu, r as Timer, s as QrCode, t as Workflow, u as HardDrive } from "../_libs/lucide-react.mjs";
import { a as siNextdotjs, c as siPostgresql, d as siYolo, i as siMediapipe, l as siRabbitmq, n as siFastapi, o as siNginx, r as siFlutter, s as siNvidia, t as siDocker, u as siRedis } from "../_libs/simple-icons.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-8DNFi0W9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SlideFrame({ kicker, title, page, total, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "relative flex h-full min-h-0 flex-col overflow-hidden bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -left-20 -top-16 size-72 rounded-full bg-wash",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -right-16 bottom-0 size-56 rounded-full bg-wash",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "pointer-events-none absolute -bottom-3 -left-2 size-24 text-leaf" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "pointer-events-none absolute -right-3 -bottom-6 size-20 -scale-x-100 text-leaf opacity-80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "relative z-10 bg-maroon text-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 px-3 py-2 sm:gap-3 sm:px-5 sm:py-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 rounded-full bg-card px-3 py-1 text-xs font-bold tracking-widest text-maroon uppercase",
							children: kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "line-clamp-2 min-w-0 flex-1 text-xs font-semibold tracking-wide uppercase sm:text-sm md:text-base",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "shrink-0 text-xs font-semibold tracking-widest tabular-nums",
							children: [String(page).padStart(2, "0"), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-card/70",
								children: [" / ", String(total).padStart(2, "0")]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 flex min-h-0 flex-1 flex-col overflow-y-auto p-3 sm:p-4",
				children
			})
		]
	});
}
function Leaf({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 80 80",
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M18 68c18-6 30-26 26-50 2 8 10 22 22 28-14 6-28 16-48 22z"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			opacity: "0.55",
			d: "M34 70c6-14 18-24 36-26-10 8-22 16-36 26z"
		})]
	});
}
function Panel({ label, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `flex flex-col gap-1.5 rounded-lg border-2 border-ink bg-card p-2.5 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "text-center text-xs font-bold tracking-widest text-maroon uppercase",
			children: label
		}), children]
	});
}
function Node({ icon: Icon, title, detail }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-2 rounded-md border-2 border-ink bg-paper px-2 py-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid size-8 shrink-0 place-items-center rounded-md border-2 border-ink bg-card text-maroon",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "size-4",
				strokeWidth: 1.75
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-sm font-semibold leading-tight",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 block text-xs leading-snug text-ink/70",
				children: detail
			})]
		})]
	});
}
function Logo({ icon, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex w-16 flex-col items-center gap-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid size-11 place-items-center rounded-lg border-2 border-ink bg-paper text-ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 24 24",
				className: "size-6",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: icon.path,
					fill: "currentColor"
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-center text-xs font-semibold leading-tight",
			children: label ?? icon.title
		})]
	});
}
function Glyph({ icon: Icon, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex w-16 flex-col items-center gap-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid size-11 place-items-center rounded-lg border-2 border-ink bg-paper text-maroon",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "size-5",
				strokeWidth: 1.75
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-center text-xs font-semibold leading-tight",
			children: label
		})]
	});
}
function Down() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex justify-center text-maroon",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" })
	});
}
function Right() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
		className: "hidden size-4 shrink-0 text-maroon sm:block",
		"aria-hidden": true
	});
}
var services = [
	"PostgreSQL",
	"Redis",
	"RabbitMQ",
	"AI CUDA",
	"API",
	"Worker",
	"Web",
	"Nginx"
];
function OverviewSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						label: "Client",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
							icon: MonitorSmartphone,
							title: "Web kiosk",
							detail: "Next.js, C-Comic UI, chỉ theme sáng"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
							icon: Smartphone,
							title: "Mobile",
							detail: "Flutter, dùng chung token với web"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						label: "Cổng vào",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
							icon: Server,
							title: "Nginx",
							detail: "Proxy /booth và toàn bộ /api"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
							icon: Workflow,
							title: "Product API",
							detail: "FastAPI · /api/v1 và route pose cũ"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						label: "Bảo mật",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
							icon: KeyRound,
							title: "JWT",
							detail: "Một hệ token cho kiosk và app"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
							icon: QrCode,
							title: "QR chia sẻ",
							detail: "Chỉ đọc, thu hồi được, không public tunnel"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-md border-2 border-ink bg-card px-3 py-2 text-center text-xs font-medium text-ink/80",
				children: "Client vào Nginx → API gọi AI runtime → JWT phủ cả hai client → Worker nghe RabbitMQ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						label: "AI runtime",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
							icon: ScanSearch,
							title: "YOLOv8 + MediaPipe",
							detail: "Phát hiện và chấm pose, không random"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
							icon: Cpu,
							title: "Process CUDA riêng",
							detail: "Weights local, không upload để train"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						label: "Data layer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
							icon: Database,
							title: "PostgreSQL + Redis",
							detail: "Phiên, gallery, rate limit"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
							icon: HardDrive,
							title: "Volume assets",
							detail: "Ảnh nằm trong Docker volume"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						label: "Việc nền",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
							icon: Workflow,
							title: "RabbitMQ 4.2",
							detail: "Outbox từ API sang worker"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
							icon: Timer,
							title: "Worker",
							detail: "Thumbnail và dọn gallery quá hạn"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				label: "Runtime triển khai",
				className: "mt-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8",
					children: services.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-md border-2 border-ink bg-paper px-2 py-1.5 text-center text-xs font-semibold",
						children: name
					}, name))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs text-ink/70",
					children: "Docker Compose · local-first · không train trên kiosk"
				})]
			})
		]
	});
}
function Stage({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-1 flex-col justify-center rounded-lg border-2 border-ink bg-card px-2 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "text-center text-xs font-bold tracking-widest text-maroon uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3",
			children
		})]
	});
}
function FlowSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col gap-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stage, {
				label: "1 · Khách mở kiosk",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
						icon: siNextdotjs,
						label: "Next.js"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Right, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
						icon: siFlutter,
						label: "Flutter"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Down, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stage, {
				label: "2 · Vào cổng",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
						icon: siNginx,
						label: "Nginx"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Right, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
						icon: siFastapi,
						label: "FastAPI"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Down, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stage, {
				label: "3 · Chấm dáng",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
						icon: siYolo,
						label: "YOLOv8"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Right, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
						icon: siMediapipe,
						label: "MediaPipe"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Right, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
						icon: siNvidia,
						label: "CUDA"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Down, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stage, {
				label: "4 · Giữ ảnh · trả QR",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
						icon: siPostgresql,
						label: "Postgres"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
						icon: siRedis,
						label: "Redis"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
						icon: siRabbitmq,
						label: "RabbitMQ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Right, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glyph, {
						icon: QrCode,
						label: "QR 24h"
					})
				]
			})
		]
	});
}
var pilot = [
	"init-pilot",
	"Compose lên",
	"Mở /booth"
];
var linux = [
	"Next.js",
	"Uvicorn",
	"Nginx",
	"HTTPS"
];
function DeploySlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid flex-1 gap-2 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				label: "Pilot · một máy",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-1 flex-col justify-center gap-2",
					children: pilot.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-8 shrink-0 place-items-center rounded-full border-2 border-ink bg-maroon text-xs font-bold text-card",
								children: index + 1
							}),
							index < pilot.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden" }) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 rounded-md border-2 border-ink bg-paper px-3 py-2 text-sm font-semibold",
								children: step
							})
						]
					}, step))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex items-center justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
						icon: siDocker,
						label: "Compose"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
						icon: siNvidia,
						label: "GPU riêng"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				label: "Server Linux",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-1 items-center justify-center gap-1 sm:gap-2",
					children: linux.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 sm:gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex w-16 flex-col items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-11 place-items-center rounded-lg border-2 border-ink bg-paper text-sm font-bold text-maroon",
								children: index + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-center text-xs font-semibold leading-tight",
								children: step
							})]
						}), index < linux.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Right, {}) : null]
					}, step))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex items-center justify-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
							icon: siNextdotjs,
							label: "Web"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
							icon: siNginx,
							label: "Proxy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
							icon: siFastapi,
							label: "API"
						})
					]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "rounded-md border-2 border-ink bg-sun px-3 py-2 text-center text-xs font-semibold",
			children: "Compose cho pilot. systemd + Nginx khi có máy chủ. Không mở tunnel thay HTTPS."
		})]
	});
}
function OpsSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid flex-1 gap-2 lg:grid-cols-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				label: "Trước giờ mở",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 flex-col items-center justify-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glyph, {
							icon: Gauge,
							label: "/health"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 text-maroon" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glyph, {
							icon: Cpu,
							label: "engine_ready"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs font-medium text-ink/70",
					children: "200 chưa đủ. Xem thêm fp16."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				label: "Đang chạy",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 flex-wrap items-center justify-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
							icon: siRedis,
							label: "Chặn spam"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
							icon: siRabbitmq,
							label: "Outbox"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glyph, {
							icon: Timer,
							label: "Dọn 24h"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				label: "Không làm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-1 flex-col justify-center gap-2",
					children: [
						"Không train cạnh kiosk",
						"Không chia GPU cho Uvicorn",
						"Không né TLS bằng tunnel"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-md border-2 border-maroon bg-paper px-3 py-2 text-center text-sm font-semibold",
						children: item
					}, item))
				})
			})
		]
	});
}
var path = [
	{
		n: "01",
		title: "Pilot cục bộ"
	},
	{
		n: "02",
		title: "TLS trên LAN"
	},
	{
		n: "03",
		title: "Nhiều camera"
	},
	{
		n: "04",
		title: "Admin & model"
	}
];
var checked = [
	"Test AI",
	"Smoke pilot",
	"Test camera",
	"Notebook dry-run"
];
var open = [
	"3 camera",
	"TLS LAN",
	"Admin UI",
	"OpenAPI type"
];
function ScaleSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "grid flex-1 gap-2 sm:grid-cols-4",
			children: path.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "relative flex flex-col justify-center rounded-lg border-2 border-ink bg-card p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xl font-bold text-maroon",
						children: item.n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm font-semibold",
						children: item.title
					}),
					index < path.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "absolute top-3 right-2 hidden size-4 text-maroon sm:block" }) : null
				]
			}, item.n))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-2 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				label: "Đã kiểm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-cols-2 gap-2",
					children: checked.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-md border-2 border-ink bg-wash px-2 py-2 text-center text-xs font-semibold",
						children: item
					}, item))
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				label: "Chưa nghiệm thu",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-cols-2 gap-2",
					children: open.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-md border-2 border-maroon bg-card px-2 py-2 text-center text-xs font-semibold",
						children: item
					}, item))
				})
			})]
		})]
	});
}
function vnd(value) {
	return `${new Intl.NumberFormat("vi-VN").format(value)} đ`;
}
function Ledger({ title, rows }) {
	const total = rows.reduce((sum, row) => sum + row.amount, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-lg border-2 border-ink bg-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "bg-maroon px-3 py-1.5 text-xs font-bold text-card",
				children: title
			}),
			rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[1fr_auto] items-center gap-3 border-t-2 border-ink px-3 py-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-xs font-semibold sm:text-sm",
					children: row.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-xs text-ink/70",
					children: row.hint
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-bold tabular-nums sm:text-sm",
					children: vnd(row.amount)
				})]
			}, row.label)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[1fr_auto] gap-3 border-t-2 border-ink bg-sun px-3 py-2 text-sm font-bold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cộng" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular-nums",
					children: vnd(total)
				})]
			})
		]
	});
}
var marketSteps = [
	"CLB",
	"Điểm chụp",
	"Ảnh thật",
	"Quảng cáo"
];
var marketSpend = [
	{
		label: "Poster, standee",
		hint: "Một lần, trong campus",
		amount: 15e5
	},
	{
		label: "Suất mở cho CLB",
		hint: "20 suất giấy ảnh",
		amount: 1e6
	},
	{
		label: "Quảng cáo mạng xã hội",
		hint: "8 tháng × 1.000.000",
		amount: 8e6
	}
];
function MarketingSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-md border-2 border-ink bg-sun px-3 py-2 text-center text-xs font-semibold sm:text-sm",
				children: "Số kế hoạch · một campus · chưa chạy quảng cáo thật"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
				children: marketSteps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-2 rounded-lg border-2 border-ink bg-card px-2 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-7 shrink-0 place-items-center rounded-full bg-maroon text-xs font-bold text-card",
						children: index + 1
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-semibold",
						children: step
					})]
				}, step))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
				title: "Ngân sách marketing 12 tháng",
				rows: marketSpend
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-auto text-center text-xs text-ink/70",
				children: "Nội dung TikTok và Instagram nhóm tự quay tại booth. Chỉ trả tiền khi đã có ảnh khách chọn."
			})
		]
	});
}
var pricesPlan = [
	{
		label: "Thuê sự kiện",
		price: "2,5 triệu",
		unit: "buổi 3 giờ"
	},
	{
		label: "Phiên tại điểm",
		price: "50.000",
		unit: "một bộ in"
	},
	{
		label: "In thêm",
		price: "15.000",
		unit: "một tờ"
	}
];
var revenueRows = [
	{
		label: "Thuê sự kiện",
		hint: "8 buổi × 2.500.000",
		amount: 2e7
	},
	{
		label: "Phiên tại điểm",
		hint: "200 phiên × 50.000",
		amount: 1e7
	},
	{
		label: "In thêm",
		hint: "60 tờ × 15.000",
		amount: 9e5
	}
];
function RevenuePlanSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-3 gap-2",
				children: pricesPlan.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border-2 border-ink bg-card px-2 py-2 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold tracking-wide text-maroon uppercase",
							children: item.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg font-bold tabular-nums",
							children: item.price
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-ink/70",
							children: item.unit
						})
					]
				}, item.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
				title: "Khi chạy đều · một tháng",
				rows: revenueRows
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto grid gap-2 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "rounded-md border-2 border-ink bg-paper px-3 py-2 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: "3 tháng đầu. "
					}), "Khoảng 3 buổi thử, 7,5 triệu. Chưa bù máy."]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "rounded-md border-2 border-ink bg-wash px-3 py-2 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: "Giá campus. "
					}), "Life4cuts tham khảo 70–100k / 2 ảnh."]
				})]
			})
		]
	});
}
var capex = [
	{
		label: "Máy tính GPU",
		hint: "Một kiosk",
		amount: 18e6
	},
	{
		label: "Màn hình + webcam",
		hint: "Một bộ",
		amount: 8e6
	},
	{
		label: "Máy in + giấy mở máy",
		hint: "Một bộ",
		amount: 6e6
	},
	{
		label: "Khung booth + đèn",
		hint: "Một điểm",
		amount: 6e6
	}
];
var monthly = [
	{
		label: "Điện, mạng",
		hint: "Điểm đặt",
		amount: 8e5
	},
	{
		label: "Giấy, mực",
		hint: "Khoảng 400 bản",
		amount: 12e5
	},
	{
		label: "Người trực",
		hint: "8 buổi × 500.000",
		amount: 4e6
	},
	{
		label: "Bảo trì",
		hint: "Dự phòng",
		amount: 5e5
	}
];
var year = [
	{
		label: "Vốn máy",
		amount: 38e6
	},
	{
		label: "Vận hành 12 tháng",
		amount: 78e6
	},
	{
		label: "Marketing",
		amount: 105e5
	}
];
function BudgetSlide() {
	const yearTotal = year.reduce((sum, row) => sum + row.amount, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2 lg:grid-cols-4",
				children: [year.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border-2 border-ink bg-card px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-ink/70",
						children: row.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold tabular-nums",
						children: vnd(row.amount)
					})]
				}, row.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border-2 border-ink bg-sun px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium",
						children: "Tổng dự trù"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold tabular-nums",
						children: vnd(yearTotal)
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
					title: "Chi một lần",
					rows: capex
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
					title: "Mỗi tháng",
					rows: monthly
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-xs text-ink/70",
				children: "Nếu người trực là thành viên nhóm, bớt 4 triệu mỗi tháng. Chưa tính thuế."
			})
		]
	});
}
var original = [
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
	["cam-on", "Cảm ơn"]
].map(([id, nav], index) => ({
	id,
	nav,
	src: `/deck/${String(index + 1).padStart(2, "0")}.jpg`,
	alt: nav
}));
var web = [
	{
		id: "overview",
		nav: "Hạ tầng",
		kicker: "Infrastructure",
		title: "Hạ tầng hệ thống triển khai — Pose-Booth",
		body: OverviewSlide,
		group: "web"
	},
	{
		id: "flow",
		nav: "Luồng",
		kicker: "Flow",
		title: "Luồng một phiên chụp",
		body: FlowSlide,
		group: "web"
	},
	{
		id: "deploy",
		nav: "Triển khai",
		kicker: "Deploy",
		title: "Hai đường đưa kiosk lên",
		body: DeploySlide,
		group: "web"
	},
	{
		id: "ops",
		nav: "Vận hành",
		kicker: "Ops",
		title: "Trước giờ mở và khi đang chạy",
		body: OpsSlide,
		group: "web"
	},
	{
		id: "scale",
		nav: "Mở rộng",
		kicker: "Scale",
		title: "Từ pilot đến khi nghiệm thu",
		body: ScaleSlide,
		group: "web"
	}
];
var plans = [
	{
		id: "marketing",
		nav: "Marketing",
		kicker: "Marketing",
		title: "Kế hoạch marketing — một campus",
		body: MarketingSlide,
		group: "plan"
	},
	{
		id: "revenue-plan",
		nav: "Doanh thu",
		kicker: "Revenue",
		title: "Doanh thu kế hoạch",
		body: RevenuePlanSlide,
		group: "plan"
	},
	{
		id: "budget",
		nav: "Dự trù",
		kicker: "Budget",
		title: "Dự trù chi tiêu một kiosk",
		body: BudgetSlide,
		group: "plan"
	}
];
var thanks = original[original.length - 1];
var slides = [
	...original.slice(0, -1),
	...web,
	...plans,
	thanks
];
function WebFrame({ slide, page, total }) {
	const Body = slide.body;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideFrame, {
		kicker: slide.kicker,
		title: slide.title,
		page,
		total,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {})
	});
}
function Deck() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const count = slides.length;
	const navRef = (0, import_react.useRef)(null);
	const go = (0, import_react.useCallback)((next) => {
		setIndex((next + count) % count);
	}, [count]);
	(0, import_react.useEffect)(() => {
		function onKey(event) {
			const target = event.target;
			if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
			if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
				event.preventDefault();
				go(index + 1);
			} else if (event.key === "ArrowLeft" || event.key === "PageUp") {
				event.preventDefault();
				go(index - 1);
			} else if (event.key === "Home") go(0);
			else if (event.key === "End") go(count - 1);
			else if (/^[0-9]$/.test(event.key)) {
				const n = event.key === "0" ? 9 : Number(event.key) - 1;
				if (n < count) go(n);
			}
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		count,
		go,
		index
	]);
	(0, import_react.useEffect)(() => {
		const root = navRef.current;
		const active = root?.querySelector("[aria-current='true']");
		if (!root || !active) return;
		root.scrollTo({
			left: active.offsetLeft - root.clientWidth / 2 + active.clientWidth / 2,
			behavior: "smooth"
		});
	}, [index]);
	const slide = slides[index];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh flex-col bg-desk text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3 px-4 pt-3 pb-2 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold tracking-widest text-maroon uppercase",
					children: "Pose-Booth AI"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-ink/70 tabular-nums",
					children: [
						"src" in slide ? slide.id === "cam-on" ? "Kết" : "Slide gốc" : slide.group === "web" ? "Hạ tầng web" : "Kế hoạch",
						" ",
						"· ",
						String(index + 1).padStart(2, "0"),
						"/",
						String(count).padStart(2, "0")
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-h-0 flex-1 px-3 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "slide-enter mx-auto h-full max-w-6xl overflow-hidden rounded-2xl border-2 border-ink",
					children: "src" in slide ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-full w-full items-center justify-center bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: slide.src,
							alt: slide.alt,
							className: "max-h-full max-w-full object-contain"
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WebFrame, {
						slide,
						page: index + 1,
						total: count
					})
				}, slide.id)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex items-center gap-2 px-3 py-3 sm:px-6",
				"aria-label": "Điều hướng slide",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-11 shrink-0 place-items-center rounded-full border-2 border-ink bg-card",
						onClick: () => go(index - 1),
						"aria-label": "Slide trước",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: navRef,
						className: "flex min-w-0 flex-1 gap-1.5 overflow-x-auto",
						children: slides.map((item, itemIndex) => {
							const active = itemIndex === index;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => go(itemIndex),
								"aria-current": active ? "true" : void 0,
								className: active ? "shrink-0 rounded-full border-2 border-ink bg-maroon px-3 py-2 text-xs font-semibold text-card" : "shrink-0 rounded-full border-2 border-ink bg-card px-3 py-2 text-xs font-semibold",
								children: item.nav
							}, item.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-11 shrink-0 place-items-center rounded-full border-2 border-ink bg-card",
						onClick: () => go(index + 1),
						"aria-label": "Slide sau",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
					})
				]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Deck, {});
}
//#endregion
export { Home as component };
