import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./Gifs/Pages/dashboard-page/dashboard-page.component'),
    children: [
      {
        path: 'trending',
        loadComponent: () => import('./Gifs/Pages/trending-page/trending-page.component'),

      },
      {
        path: 'search',
        loadComponent: () => import('./Gifs/Pages/search-page/search-page.component'),

      },
      {
        path: '**',
        redirectTo: 'trending'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
