import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookStoreService {
  private readonly apiUrl = 'https://api.angular.schule';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl + '/books');
  }
  finByISBN(isbn: string): Observable<Book> {
    return this.http.get<Book>(this.apiUrl + '/books/' + isbn);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl + '/books', book);
  }

  searchBook(term: string): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl + '/books/search/' + term);
  }

  deleteBook(isbn: string) {
    return this.http.delete<Book>(this.apiUrl + '/books/' + isbn);
  }

  reviewBook(isbn: string, rating: object) {
    return this.http.post<Book>(this.apiUrl + '/books/' + isbn + '/rate', {
      rating,
    });
  }
}
