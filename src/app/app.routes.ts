import { Routes } from '@angular/router';

const NAME = 'Giorgi Meshveliani';

export const routes: Routes = [
  { path: '', title: `${NAME} — Angular / .NET Developer`, loadComponent: () => import('./pages/home').then(m => m.Home) },
  { path: 'projects', title: `Projects — ${NAME}`, loadComponent: () => import('./pages/projects').then(m => m.Projects) },
  { path: 'projects/:slug', loadComponent: () => import('./pages/project-detail').then(m => m.ProjectDetail) },
  { path: 'about', title: `About — ${NAME}`, loadComponent: () => import('./pages/about').then(m => m.About) },
  { path: 'contact', title: `Contact — ${NAME}`, loadComponent: () => import('./pages/contact').then(m => m.Contact) },
  { path: '**', title: `Not found — ${NAME}`, loadComponent: () => import('./pages/not-found').then(m => m.NotFound) },
];
