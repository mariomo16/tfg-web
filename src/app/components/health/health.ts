import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HealthService } from '../../core/services/health.service';

@Component({
  selector: 'app-health',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './health.html',
})
export class Health {
  private readonly healthService = inject(HealthService);
  public readonly healthResult = toSignal(this.healthService.checkStatus());
}
