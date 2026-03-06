import type { Routes } from "@angular/router";
import { Health } from "./components/health/health";

export const routes: Routes = [
	{
		path: "up",
		component: Health,
		title: "Estado del sistema",
	},
];
