import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
	resource,
} from "@angular/core";
import { RouterLink } from "@angular/router";
import { firstValueFrom } from "rxjs";
import { DashboardIcons, LoadingIcons } from "../../../shared/icons/icons";
import { SafeHtmlPipe } from "../../../shared/pipes/safe-html.pipe";
import { COMPUTER_STATUS_LABELS } from "../../computers/computer.constants";
import { ComputerService } from "../../computers/computer.service";
import { ZoneService } from "../../zones/zone.service";

@Component({
	selector: "app-dashboard",
	imports: [RouterLink, SafeHtmlPipe],
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./dashboard.html",
})
export class Dashboard {
	readonly #zoneService = inject(ZoneService);
	readonly #computerService = inject(ComputerService);

  protected readonly dashboardIcons = DashboardIcons;
	protected readonly loadingIcon = LoadingIcons.spinner;

	protected readonly zonesResource = resource({
		loader: () => firstValueFrom(this.#zoneService.getAll()),
	});

	protected readonly computersResource = resource({
		loader: () => firstValueFrom(this.#computerService.getAll()),
	});

	protected readonly totalZones = computed(
		() => this.zonesResource.value()?.length ?? 0,
	);

	protected readonly totalComputers = computed(
		() => this.computersResource.value()?.length ?? 0,
	);

	protected readonly availableComputers = computed(
		() =>
			this.computersResource
				.value()
				?.filter(
					(computer) => computer.status === COMPUTER_STATUS_LABELS.available,
				).length ?? 0,
	);

	protected readonly inMaintenanceComputers = computed(
		() =>
			this.computersResource
				.value()
				?.filter(
					(computer) => computer.status === COMPUTER_STATUS_LABELS.maintenance,
				).length ?? 0,
	);
}
