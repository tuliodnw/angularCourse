import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetaillsComponent } from './book-detaills.component';

describe('BookDetaillsComponent', () => {
  let component: BookDetaillsComponent;
  let fixture: ComponentFixture<BookDetaillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDetaillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookDetaillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
