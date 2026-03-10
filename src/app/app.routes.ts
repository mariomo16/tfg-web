import type { Routes } from "@angular/router";
import { AdminLayout } from "./components/admin/admin-layout/admin-layout";
import { ComputerForm } from "./components/admin/computers/computer-form/computer-form";
import { ComputerList } from "./components/admin/computers/computer-list/computer-list";
import { Dashboard } from "./components/admin/dashboard/dashboard";
import { TimeslotForm } from "./components/admin/timeslots/timeslot-form/timeslot-form";
import { TimeslotList } from "./components/admin/timeslots/timeslot-list/timeslot-list";
import { UserForm } from "./components/admin/users/user-form/user-form";
import { UserList } from "./components/admin/users/user-list/user-list";
import { ZoneForm } from "./components/admin/zones/zone-form/zone-form";
import { ZoneList } from "./components/admin/zones/zone-list/zone-list";
import { Login } from "./components/auth/login/login";
import { Register } from "./components/auth/register/register";
import { NotFound } from "./components/errors/not-found/not-found";
import { Health } from "./components/pages/health/health";
import { Home } from "./components/pages/home/home";

export const routes: Routes = [
	{
		path: "",
		component: Home,
		title: "Inicio",
	},
	{
		path: "status",
		component: Health,
		title: "Estado del sistema",
	},
	{
		path: "login",
		component: Login,
		title: "Iniciar sesión",
	},
	{
		path: "register",
		component: Register,
		title: "¡Registrate!",
	},
	{
		path: "admin",
		component: AdminLayout,
		children: [
			{ path: "", redirectTo: "dashboard", pathMatch: "full" },
			{
				path: "dashboard",
				component: Dashboard,
				title: "Panel de administración",
			},
			{ path: "zones", component: ZoneList, title: "Zonas" },
			{ path: "zones/new", component: ZoneForm, title: "Nueva zona" },
			{
				path: "zones/:id/edit",
				component: ZoneForm,
				title: "Editar zona",
			},
			{
				path: "computers",
				component: ComputerList,
				title: "Ordenadores",
			},
			{
				path: "computers/new",
				component: ComputerForm,
				title: "Nuevo ordenador",
			},
			{
				path: "computers/:id/edit",
				component: ComputerForm,
				title: "Editar ordenador",
			},
			{
				path: "timeslots",
				component: TimeslotList,
				title: "Franjas horarias",
			},
			{
				path: "timeslots/new",
				component: TimeslotForm,
				title: "Nueva franja",
			},
			{
				path: "timeslots/:id/edit",
				component: TimeslotForm,
				title: "Editar franja",
			},
			{ path: "users", component: UserList, title: "Usuarios" },
			{
				path: "users/new",
				component: UserForm,
				title: "Nuevo usuario",
			},
			{
				path: "users/:id/edit",
				component: UserForm,
				title: "Editar usuario",
			},
		],
	},
	{
		path: "**",
		component: NotFound,
		title: "Página no encontrada",
	},
];
