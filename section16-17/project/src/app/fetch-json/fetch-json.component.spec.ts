import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchJsonComponent } from './fetch-json.component';

describe('FetchJsonComponent', () => {
  let component: FetchJsonComponent;
  let fixture: ComponentFixture<FetchJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FetchJsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
