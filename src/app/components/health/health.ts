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
				title: "Checking status...",
				message: "Waiting for server response.",
			};

		return result.status === "up"
			? {
					dot: "bg-green-400",
					animation: "animate-ping",
					title: "Application up",
					message: `HTTP request received. Response rendered in ${result.time}ms.`,
				}
			: {
					dot: "bg-red-600",
					animation: "animate-ping",
					title: "Application down",
					message: "Server is unreachable or returned an error.",
				};
	});
}
