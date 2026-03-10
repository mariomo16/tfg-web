import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { APP } from "../../../core/constants/app.constants";
import { Icons } from "../../../shared/icons/icons";
import { SafeHtmlPipe } from "../../../shared/pipes/safe-html.pipe";

@Component({
	selector: "app-navbar",
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink, SafeHtmlPipe],
	templateUrl: "./navbar.html",
})
export class Navbar {
	readonly appName = APP.name;
	protected readonly settingsIcon = Icons.settings;
}
