import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../shared/book';
import { BookComponent } from '../book/book.component';
import { BookRatingService } from '../shared/book-rating.service';
import { findIndex } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  books: Book[] = [];

  constructor(
    private rs: BookRatingService,
    private bs: BookStoreService,
  ) {
    this.bs.getAll().subscribe((books) => {
      this.books = books;
    });
  }

  doRateUp(book: Book) {
    const ratedBook = this.rs.rateUp(book);
    this.updateBooks(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.rs.rateDown(book);
    this.updateBooks(ratedBook);
  }

  private updateBooks(ratedBook: Book) {
    this.books = [...this.books].map((b) => {
      if (ratedBook.isbn === b.isbn) {
        return ratedBook;
      } else {
        return b;
      }
    });
  }
}
