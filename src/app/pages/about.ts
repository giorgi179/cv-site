import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EDUCATION, LANGUAGES, LEARNING, PROFILE, SKILLS } from '../data/portfolio';
import { Reveal } from '../shared/reveal';

@Component({
  selector: 'app-about',
  imports: [RouterLink, Reveal],
  template: `
    <section class="wrap page-head">
      <p class="eyebrow">About</p>
      <h1>Self-taught, project-driven, full stack.</h1>
      <p class="detail__lead">{{ profile.summary }}</p>
    </section>

    <section class="wrap section">
      <h2 class="section__title" reveal>Skills</h2>
      <div class="skills">
        @for (g of skills; track g.title) {
          <article class="skills__group" reveal>
            <h3>{{ g.title }}</h3>
            <ul class="chips">
              @for (i of g.items; track i) { <li>{{ i }}</li> }
            </ul>
          </article>
        }
        <article class="skills__group skills__group--learning" reveal>
          <h3>Currently learning</h3>
          <ul class="chips">
            @for (i of learning; track i) { <li>{{ i }}</li> }
          </ul>
        </article>
      </div>
    </section>

    <section class="wrap section two-col">
      <div reveal>
        <h2 class="section__title">Education</h2>
        <h3>{{ education.school }}</h3>
        <p>{{ education.field }} · {{ education.period }}</p>
        <ul class="ticks">
          @for (d of education.documents; track d) { <li>{{ d }}</li> }
        </ul>
      </div>
      <div reveal>
        <h2 class="section__title">Languages</h2>
        <ul class="langs">
          @for (l of languages; track l.name) {
            <li><strong>{{ l.name }}</strong><span>{{ l.level }}</span></li>
          }
        </ul>
      </div>
    </section>

    <section class="wrap section">
      <div class="cta" reveal>
        <h2>See how it all comes together.</h2>
        <a routerLink="/projects" class="btn">View projects →</a>
      </div>
    </section>
  `,
})
export class About {
  protected readonly profile = PROFILE;
  protected readonly skills = SKILLS;
  protected readonly learning = LEARNING;
  protected readonly education = EDUCATION;
  protected readonly languages = LANGUAGES;
}
