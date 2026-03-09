import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { APP } from "../../../core/constants/app.constants";

@Component({
	selector: "app-navbar",
	templateUrl: "./navbar.html",
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink],
})
export class Navbar {
	readonly appName = APP.name;
}
