import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <section class="wrap page-head">
      <p class="eyebrow">404</p>
      <h1>This page doesn't exist.</h1>
      <a routerLink="/" class="btn">Back home</a>
    </section>
  `,
})
export class NotFound {}
