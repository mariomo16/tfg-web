export interface HealthCheckResult {
  status: 'up' | 'down';
  time: number;
}