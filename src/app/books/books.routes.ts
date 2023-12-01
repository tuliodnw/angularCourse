import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetaillsComponent } from './shared/book-detaills/book-detaills.component';

export const bookRoutes: Routes = [
  { path: 'books', component: DashboardComponent },
  { path: 'books/:isbn', component: BookDetaillsComponent },
];
