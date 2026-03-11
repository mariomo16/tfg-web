import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
	resource,
} from "@angular/core";
import { RouterLink } from "@angular/router";
import { firstValueFrom } from "rxjs";
import { STATUS_CONFIG } from "./health.constants";
import { HealthService } from "./health.service";

@Component({
	selector: "app-health",
	imports: [RouterLink],
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./health.html",
})
export class Health {
	readonly #healthService = inject(HealthService);
	readonly #healthResource = resource({
		loader: () => firstValueFrom(this.#healthService.checkStatus()),
	});

	protected readonly statusConfig = computed(() => {
		if (this.#healthResource.isLoading()) return STATUS_CONFIG.loading;
		if (this.#healthResource.error()) return STATUS_CONFIG.down;

		const result = this.#healthResource.value();
		if (!result || result.status === "down") return STATUS_CONFIG.down;

		return {
			...STATUS_CONFIG.up,
			message: `Tiempo de respuesta: ${result.time}ms`,
		};
	});
}
