import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
} from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { HealthService } from "../../core/services/health.service";

@Component({
	selector: "app-health",
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./health.html",
})
export class Health {
	private readonly healthService = inject(HealthService);
	private readonly healthResult = toSignal(this.healthService.checkStatus());
	readonly statusConfig = computed(() => {
		const result = this.healthResult();

		if (!result)
			return {
				dot: "bg-amber-400",
				borderGlow: "bg-amber-400",
				animation: "animate-pulse",
				title: "Comprobando estado...",
				message: "Esperando respuesta del servidor.",
			};

		return result.status === "up"
			? {
					dot: "bg-emerald-500",
					borderGlow: "bg-emerald-500",
					animation: "animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]",
					title: "Sistema en línea",
					message: `Tiempo de respuesta: ${result.time}ms`,
				}
			: {
					dot: "bg-rose-500",
					borderGlow: "bg-rose-500",
					animation: "animate-pulse",
					title: "Sistema no disponible",
					message: "No se ha podido establecer conexión con la API.",
				};
	});
}
