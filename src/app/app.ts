import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PROFILE } from './data/portfolio';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly profile = PROFILE;
  protected readonly menuOpen = signal(false);
  protected readonly year = new Date().getFullYear();

  protected toggle(): void { this.menuOpen.update(v => !v); }
  protected close(): void { this.menuOpen.set(false); }
}
