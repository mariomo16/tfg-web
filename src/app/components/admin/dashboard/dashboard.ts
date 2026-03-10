import { Component, computed, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { RouterLink } from "@angular/router";
import { ComputerService } from "../../../core/services/computer.service";
import { ZoneService } from "../../../core/services/zone.service";
import { DashboardIcons, LoadingIcon } from "../../../shared/icons/icons";
import { SafeHtmlPipe } from "../../../shared/pipes/safe-html.pipe";

@Component({
	selector: "app-dashboard",
	imports: [RouterLink, SafeHtmlPipe],
	templateUrl: "./dashboard.html",
})
export class Dashboard {
	private readonly zoneService = inject(ZoneService);
	private readonly computerService = inject(ComputerService);

	protected readonly zoneResponse = toSignal(this.zoneService.getAll());
	protected readonly computersResponse = toSignal(
		this.computerService.getAll(),
	);

	protected readonly totalZones = computed(() => this.zoneResponse()?.length);
	protected readonly totalComputers = computed(
		() => this.computersResponse()?.length,
	);

	protected readonly availableComputers = computed(
		() =>
			this.computersResponse()?.filter(
				(computer) => computer.status === "available",
			).length,
	);
	protected readonly inMaintenanceComputers = computed(
		() =>
			this.computersResponse()?.filter(
				(computer) => computer.status === "maintenance",
			).length,
	);

	protected readonly dashboardIcons = {
		zones: DashboardIcons.zones,
		computers: DashboardIcons.computers,
		timeslots: DashboardIcons.timeslots,
		users: DashboardIcons.users,
		plus: DashboardIcons.plus,
	};

	protected readonly loadingIcon = LoadingIcon;
}
