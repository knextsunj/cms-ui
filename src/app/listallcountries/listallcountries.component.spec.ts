import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListallcountriesComponent } from './listallcountries.component';

describe('ListallcountriesComponent', () => {
  let component: ListallcountriesComponent;
  let fixture: ComponentFixture<ListallcountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListallcountriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListallcountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
