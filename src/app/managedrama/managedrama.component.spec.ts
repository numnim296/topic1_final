import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedramaComponent } from './managedrama.component';

describe('ManagedramaComponent', () => {
  let component: ManagedramaComponent;
  let fixture: ComponentFixture<ManagedramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagedramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
