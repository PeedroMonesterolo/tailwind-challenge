import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionsProfileComponent } from './descriptions-profile.component';

describe('DescriptionsProfileComponent', () => {
  let component: DescriptionsProfileComponent;
  let fixture: ComponentFixture<DescriptionsProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionsProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
