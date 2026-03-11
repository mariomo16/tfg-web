export interface HealthResponse {
	status: "up" | "down";
	time: number;
}

export interface StatusConfig {
	dot: string;
	borderGlow: string;
	animation: string | null;
	title: string;
	message: string;
}
