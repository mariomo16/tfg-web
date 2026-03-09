import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { APP } from "../../../core/constants/app.constants";

@Component({
	selector: "app-navbar",
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink],
	templateUrl: "./navbar.html",
})
export class Navbar {
	readonly appName = APP.name;
}
