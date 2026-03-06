import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import type { HealthCheckResult } from '../models/health.model';

@Injectable({
  providedIn: 'root',
})
export class HealthService {
  private readonly http = inject(HttpClient);
  private readonly healthUrl = `${environment.api.baseUrl}/up`;

  checkStatus(): Observable<HealthCheckResult> {
    const start = performance.now();

    return this.http.get(this.healthUrl, { responseType: 'text' }).pipe(
      map(() => ({
        status: 'up' as const,
        time: Math.round(performance.now() - start),
      })),
      catchError((error) => {
        console.error('Health check failed:', error);
        return of({
          status: 'down' as const,
          time: Math.round(performance.now() - start),
        });
      }),
    );
  }
}
