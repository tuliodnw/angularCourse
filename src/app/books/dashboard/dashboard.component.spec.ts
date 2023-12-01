import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    const ratingMock = {
      //TODO check where to use
      rateUp: (b: Book) => b,
      rateDown: (b: Book) => b,
    };

    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers: [{ provide: BookRatingService, useValue: ratingMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    // TS-Klasseninstanz
    component = fixture.componentInstance;

    // DOM-Element / Host-Element
    // fixture.nativeElement.querySelector('p')

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service.rateUp() for component rateUp().', () => {
    const rs = TestBed.inject(BookRatingService);
    const testBook = { isbn: '3213sdf5351' } as Book;
    spyOn(rs, 'rateUp').and.callThrough();

    component.doRateUp(testBook);

    expect(rs.rateUp).toHaveBeenCalledOnceWith(testBook);
  });
});
