import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
} from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { RouterLink } from "@angular/router";
import { HealthService } from "../../core/services/health.service";

interface StatusConfig {
	dot: string;
	borderGlow: string;
	animation: string | null;
	title: string;
	message: string;
}

const STATUS_CONFIG = {
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

@Component({
	selector: "app-health",
	imports: [RouterLink],
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./health.html",
})
export class Health {
	private readonly healthService = inject(HealthService);
	private readonly healthStatus = toSignal(this.healthService.checkStatus());

	readonly statusConfig = computed(() => {
		const result = this.healthStatus();

		if (!result) return STATUS_CONFIG.loading;
		if (result.status === "down") return STATUS_CONFIG.down;

		return {
			...STATUS_CONFIG.up,
			message: `Tiempo de respuesta: ${result.time}ms`,
		};
	});
}
