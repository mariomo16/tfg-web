import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { APP } from "../../../core/constants/app.constants";
import { DashboardIcons } from "../../../shared/icons/icons";
import { SafeHtmlPipe } from "../../../shared/pipes/safe-html.pipe";

interface Catalog {
	name: string;
	routerLink: string;
	icon: string;
}

@Component({
	selector: "app-admin-layout",
	imports: [RouterOutlet, RouterLink, RouterLinkActive, SafeHtmlPipe],
	templateUrl: "./admin-layout.html",
})
export class AdminLayout {
	protected readonly appName = APP.name;
	protected readonly navClasses: string =
		"flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-text-secondary hover:bg-surface-700/50 hover:text-text-primary transition-colors";

	protected readonly dashboardIcons = {
		dashboard: DashboardIcons.dashboard,
		users: DashboardIcons.users,
		back: DashboardIcons.back,
	};

	protected readonly catalog: Catalog[] = [
		{
			name: "Zonas",
			routerLink: "/admin/zones",
			icon: DashboardIcons.zones,
		},
		{
			name: "Ordenadores",
			routerLink: "/admin/computers",
			icon: DashboardIcons.computers,
		},
		{
			name: "Franjas horarias",
			routerLink: "/admin/timeslots",
			icon: DashboardIcons.timeslots,
		},
	];
}
