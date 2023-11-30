import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../shared/book';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, RatingComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  @Input() book?: Book;

  @Output() rateUp = new EventEmitter<Book>();
  @Output() rateDown = new EventEmitter<Book>();

  doRateUp() {
    this.rateUp.emit(this.book); //check what emit does
  }

  doRateDown() {
    this.rateDown.emit(this.book);
  }
}
