import { Component, computed, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { RouterLink } from "@angular/router";
import { ComputerService } from "../../../core/services/computer.service";
import { DashboardIcons } from "../../../shared/icons/icons";
import { SafeHtmlPipe } from "../../../shared/pipes/safe-html.pipe";

@Component({
	selector: "app-dashboard",
	imports: [RouterLink, SafeHtmlPipe],
	templateUrl: "./dashboard.html",
})
export class Dashboard {
	private readonly computerService = inject(ComputerService);
	private readonly computersResponse = toSignal(this.computerService.getAll());
	readonly totalComputers = computed(() => this.computersResponse()?.length);
	readonly availableComputers = computed(
		() =>
			this.computersResponse()?.filter(
				(computer) => computer.status === "available",
			).length,
	);
	readonly inMaintenanceComputers = computed(
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
}
