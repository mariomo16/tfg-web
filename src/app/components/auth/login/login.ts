import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { SocialIcons } from "../../../shared/icons/icons";
import { SafeHtmlPipe } from "../../../shared/pipes/safe-html.pipe";

@Component({
	selector: "app-login",
	imports: [RouterLink, SafeHtmlPipe],
	templateUrl: "./login.html",
})
export class Login {
	readonly githubIcon = SocialIcons.github;
	readonly googleIcon = SocialIcons.google;
}
