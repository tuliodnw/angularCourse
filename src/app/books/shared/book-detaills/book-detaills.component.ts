import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-detaills',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './book-detaills.component.html',
  styleUrl: './book-detaills.component.scss',
})
export class BookDetaillsComponent {
  constructor(private route: ActivatedRoute) {
    // PULL
    // const isbn = this.route.snapshot.paramMap.get('isbn');
    // console.log(isbn);

    // PUSH
    this.route.paramMap.subscribe((params) => {
      const isbn = params.get('isbn');
      console.log(isbn);
    });
  }
}
