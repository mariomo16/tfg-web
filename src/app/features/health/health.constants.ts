import type { StatusConfig } from "./health.model";

export const STATUS_CONFIG = {
	loading: {
		dot: "bg-amber-400",
		borderGlow: "bg-amber-400",
		animation: null,
		title: "Comprobando estado...",
		message: "Probando conexión con el servidor.",
	},
	down: {
		dot: "bg-rose-500",
		borderGlow: "bg-rose-500",
		animation: null,
		title: "API no disponible",
		message: "El servidor no responde.",
	},
	up: {
		dot: "bg-emerald-500",
		borderGlow: "bg-emerald-500",
		animation: "animate-ping",
		title: "API disponible",
		message: "",
	},
} as const satisfies Record<string, StatusConfig>;
