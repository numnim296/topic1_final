import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedramaComponent } from './updatedrama.component';

describe('UpdatedramaComponent', () => {
  let component: UpdatedramaComponent;
  let fixture: ComponentFixture<UpdatedramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
