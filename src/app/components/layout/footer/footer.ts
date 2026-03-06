import { ChangeDetectionStrategy, Component } from "@angular/core";
import { APP } from "../../../core/constants/app.constants";

@Component({
	selector: "app-footer",
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./footer.html",
})
export class Footer {
	readonly appName = APP.name;
	readonly appVersion = APP.version;
}
