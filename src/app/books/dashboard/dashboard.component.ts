import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../shared/book';
import { BookComponent } from '../book/book.component';
import { BookRatingService } from '../shared/book-rating.service';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  books: Book[] = [];

  constructor(private rs: BookRatingService) {
    // why is this needed
    this.books = [
      {
        isbn: '0747549559',
        title: "Harry Potter and the Philosopher's Stone",
        description: 'Orphan gets to play with Magic',
        price: 20,
        rating: 5,
      },
      {
        isbn: '123456789',
        title: 'Love Story',
        description: 'Love=Love',
        price: 25,
        rating: 2,
      },
    ];
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
