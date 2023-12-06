import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { debounceTime, of, switchMap } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';
@Component({
  selector: 'app-book-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book-search.component.html',
  styleUrl: './book-search.component.scss',
})
export class BookSearchComponent {
  searchControl = new FormControl('', { nonNullable: true });
  private bs = inject(BookStoreService);

  books$ = this.searchControl.valueChanges.pipe(
    // filter(term => term.length >= 3 || term.length === 0),
    debounceTime(500),
    switchMap((term) => {
      if (term.length >= 3) {
        return this.bs.searchBook(term);
      } else {
        return of([]);
      }
    }),
  );
}
