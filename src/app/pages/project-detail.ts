import { Component, computed, effect, inject, input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../data/portfolio';
import { Reveal } from '../shared/reveal';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, Reveal],
  template: `
    @if (project(); as p) {
      <article class="wrap detail">
        <a routerLink="/projects" class="link">← All projects</a>

        <header class="detail__head">
          <p class="eyebrow">{{ p.kind }} · {{ p.status }}</p>
          <h1>{{ p.title }}</h1>
          <p class="detail__lead">{{ p.tagline }}</p>
          <div class="hero__cta">
            @if (p.liveUrl) { <a class="btn" [href]="p.liveUrl" target="_blank" rel="noopener">Open live site ↗</a> }
            <a class="btn btn--ghost" [href]="p.repoUrl" target="_blank" rel="noopener">View on GitHub ↗</a>
          </div>
        </header>

        <div class="detail__grid">
          <section reveal>
            <h2>Overview</h2>
            <p>{{ p.overview }}</p>

            <h2>Highlights</h2>
            <ul class="ticks">
              @for (h of p.highlights; track h) { <li>{{ h }}</li> }
            </ul>
          </section>

          <aside reveal>
            <h2>Stack</h2>
            <ul class="chips">
              @for (s of p.stack; track s) { <li>{{ s }}</li> }
            </ul>
          </aside>
        </div>

        <section class="detail__sections">
          @for (s of p.sections; track s.title; let i = $index) {
            <div class="detail__block" reveal>
              <span class="row__index">0{{ i + 1 }}</span>
              <div>
                <h3>{{ s.title }}</h3>
                <p>{{ s.text }}</p>
              </div>
            </div>
          }
        </section>

        <nav class="detail__next" aria-label="More projects">
          @if (prev(); as pr) { <a [routerLink]="['/projects', pr.slug]">← {{ pr.title }}</a> }
          @if (next(); as nx) { <a [routerLink]="['/projects', nx.slug]">{{ nx.title }} →</a> }
        </nav>
      </article>
    } @else {
      <section class="wrap page-head">
        <h1>Project not found</h1>
        <a routerLink="/projects" class="btn">Back to projects</a>
      </section>
    }
  `,
})
export class ProjectDetail {
  readonly slug = input.required<string>();

  private readonly title = inject(Title);
  protected readonly index = computed(() => PROJECTS.findIndex(p => p.slug === this.slug()));
  protected readonly project = computed(() => PROJECTS[this.index()]);
  protected readonly prev = computed(() => (this.index() > 0 ? PROJECTS[this.index() - 1] : undefined));
  protected readonly next = computed(() =>
    this.index() >= 0 && this.index() < PROJECTS.length - 1 ? PROJECTS[this.index() + 1] : undefined,
  );

  constructor() {
    effect(() => {
      const p = this.project();
      this.title.setTitle(p ? `${p.title} — Giorgi Meshveliani` : 'Project not found');
    });
  }
}
