import { Component } from '@angular/core';
import { PROFILE } from '../data/portfolio';
import { Reveal } from '../shared/reveal';

@Component({
  selector: 'app-contact',
  imports: [Reveal],
  template: `
    <section class="wrap page-head">
      <p class="eyebrow">Contact</p>
      <h1>Let's talk.</h1>
    </section>

    <section class="wrap">
      <ul class="contact">
        <li reveal>
          <span>Email</span>
          <a [href]="'mailto:' + p.email">{{ p.email }}</a>
        </li>
        <li reveal>
          <span>Phone</span>
          <a [href]="'tel:' + phoneHref">{{ p.phone }}</a>
        </li>
        <li reveal>
          <span>GitHub</span>
          <a [href]="p.github" target="_blank" rel="noopener">github.com/giorgi179 ↗</a>
        </li>
        <li reveal>
          <span>Location</span>
          <strong>{{ p.location }}</strong>
        </li>
      </ul>
    </section>
  `,
})
export class Contact {
  protected readonly p = PROFILE;
  protected readonly phoneHref = PROFILE.phone.replace(/\s/g, '');
}
