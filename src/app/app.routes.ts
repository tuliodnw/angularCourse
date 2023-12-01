import { Routes } from '@angular/router';
import { bookRoutes } from './books/books.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  ...bookRoutes,
];
