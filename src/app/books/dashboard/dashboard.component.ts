import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../shared/book';
import { BookComponent } from '../book/book.component';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  date = new Date();
  timer: any;
  sub: Subscription | undefined;

  constructor(
    private rs: BookRatingService,
    private bs: BookStoreService,
  ) {
    this.bs.getAll().subscribe((books) => {
      this.books = books;
    });
  }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.date = new Date();
      console.log(this.date);
    }, 1000);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
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
