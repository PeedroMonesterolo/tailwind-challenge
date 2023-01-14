import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCarruselComponent } from './profile-carrusel.component';

describe('ProfileCarruselComponent', () => {
  let component: ProfileCarruselComponent;
  let fixture: ComponentFixture<ProfileCarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCarruselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
