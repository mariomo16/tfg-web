import { ChangeDetectionStrategy, Component } from "@angular/core";
import { APP } from "../../../core/constants/app.constants";

@Component({
	selector: "app-navbar",
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./navbar.html",
})
export class Navbar {
	readonly appName = APP.name;
}
