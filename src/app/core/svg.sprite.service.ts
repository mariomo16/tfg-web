import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SvgSpriteService {
  readonly #http = inject(HttpClient);
  readonly #doc = inject(DOCUMENT);

  async load(): Promise<void> {
    const svg = await firstValueFrom(
      this.#http.get('/sprite.svg', { responseType: 'text' })
    );
    const div = this.#doc.createElement('div');
    div.style.display = 'none';
    div.innerHTML = svg;
    this.#doc.body.insertBefore(div, this.#doc.body.firstChild);
  }
}