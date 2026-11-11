import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MARQUEE, PROFILE, PROJECTS } from '../data/portfolio';
import { Reveal } from '../shared/reveal';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Reveal],
  template: `
    <section class="hero wrap">
      <p class="eyebrow">{{ profile.location }} · {{ profile.role }}</p>
      <h1 class="hero__title">
        <span>Giorgi</span>
        <span class="hero__outline">Meshveliani</span>
      </h1>
      <p class="hero__lead">{{ profile.intro }}</p>
      <div class="hero__cta">
        <a routerLink="/projects" class="btn">See my projects →</a>
        <a [href]="profile.github" target="_blank" rel="noopener" class="btn btn--ghost">GitHub ↗</a>
      </div>
    </section>

    <div class="marquee" aria-hidden="true">
      <div class="marquee__track">
        @for (i of loop; track $index) { <span>{{ i }}</span> }
      </div>
    </div>

    <section class="wrap section">
      <header class="section__head" reveal>
        <p class="eyebrow">Selected work</p>
        <h2>Things I designed, built and shipped.</h2>
      </header>

      <div class="cards">
        @for (p of featured; track p.slug; let i = $index) {
          <a class="card" reveal [routerLink]="['/projects', p.slug]">
            <span class="card__index">0{{ i + 1 }}</span>
            <span class="card__status">{{ p.status }}</span>
            <h3>{{ p.title }}</h3>
            <p>{{ p.tagline }}</p>
            <ul class="chips">
              @for (s of p.stack.slice(0, 4); track s) { <li>{{ s }}</li> }
            </ul>
            <span class="card__arrow">→</span>
          </a>
        }
      </div>
      <p class="section__more"><a routerLink="/projects" class="link">All projects →</a></p>
    </section>

    <section class="wrap section">
      <div class="steps">
        <article reveal>
          <span class="steps__n">1</span>
          <h3>Design</h3>
          <p>REST APIs, database schema and authentication planned before a single component exists.</p>
        </article>
        <article reveal>
          <span class="steps__n">2</span>
          <h3>Build</h3>
          <p>Angular with Signals and RxJS on the front, ASP.NET Core and EF Core on the back, SCSS written in BEM.</p>
        </article>
        <article reveal>
          <span class="steps__n">3</span>
          <h3>Ship</h3>
          <p>Every project is deployed and live — frontend and backend as separate services on Render.</p>
        </article>
      </div>
    </section>

    <section class="wrap section">
      <div class="cta" reveal>
        <h2>Have a role or a project in mind?</h2>
        <a routerLink="/contact" class="btn">Get in touch →</a>
      </div>
    </section>
  `,
})
export class Home {
  protected readonly profile = PROFILE;
  protected readonly featured = PROJECTS.slice(0, 3);
  protected readonly loop = [...MARQUEE, ...MARQUEE];
}
