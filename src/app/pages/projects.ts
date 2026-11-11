import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GITHUB, PROJECTS } from '../data/portfolio';
import { Reveal } from '../shared/reveal';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, Reveal],
  template: `
    <section class="wrap page-head">
      <p class="eyebrow">Projects</p>
      <h1>Four projects. All built independently, all deployed.</h1>
    </section>

    <section class="wrap">
      <ul class="rows">
        @for (p of projects; track p.slug; let i = $index) {
          <li class="row" reveal>
            <a [routerLink]="['/projects', p.slug]" class="row__main">
              <span class="row__index">0{{ i + 1 }}</span>
              <span class="row__body">
                <strong>{{ p.title }}</strong>
                <em>{{ p.kind }}</em>
              </span>
              <ul class="chips row__chips">
                @for (s of p.stack.slice(0, 4); track s) { <li>{{ s }}</li> }
              </ul>
              <span class="row__arrow">→</span>
            </a>
            <div class="row__links">
              @if (p.liveUrl) { <a [href]="p.liveUrl" target="_blank" rel="noopener">Live ↗</a> }
              <a [href]="p.repoUrl" target="_blank" rel="noopener">GitHub ↗</a>
            </div>
          </li>
        }
      </ul>
      <p class="section__more">More code on <a class="link" [href]="github" target="_blank" rel="noopener">github.com/giorgi179 ↗</a></p>
    </section>
  `,
})
export class Projects {
  protected readonly projects = PROJECTS;
  protected readonly github = GITHUB;
}
