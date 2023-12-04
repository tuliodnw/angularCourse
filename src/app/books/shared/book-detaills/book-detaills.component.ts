import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookStoreService } from '../book-store.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-detaills',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './book-detaills.component.html',
  styleUrl: './book-detaills.component.scss',
})
export class BookDetaillsComponent {
  book?: Book;

  constructor(
    private route: ActivatedRoute,
    private bs: BookStoreService,
  ) {
    // PULL
    // const isbn = this.route.snapshot.paramMap.get('isbn');
    // console.log(isbn);

    // PUSH
    this.route.paramMap.subscribe((params) => {
      const isbn = params.get('isbn')!;
      // this.bs.findByISBN(isbn).subscribe((book) => {
      //  this.book = book;
      //  });
    });
  }
}
