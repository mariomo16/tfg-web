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
	public readonly statusConfig = computed(() => {
		const result = this.healthResult();

		if (!result)
			return {
				dot: "bg-gray-400",
				animation: "animate-pulse",
				title: "Comprobando estado...",
				message: "Esperando respuesta del servidor.",
			};

		return result.status === "up"
			? {
					dot: "bg-green-400",
					animation: "animate-ping",
					title: "Aplicación activa",
					message: `Solicitud HTTP recibida. Respuesta generada en ${result.time}ms.`,
				}
			: {
					dot: "bg-red-600",
					animation: "animate-ping",
					title: "Aplicación inactiva",
					message: "El servidor no responde o ha devuelto un error.",
				};
	});
}
