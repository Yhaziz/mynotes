import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSettingComponent } from './show-setting.component';

describe('ShowSettingComponent', () => {
  let component: ShowSettingComponent;
  let fixture: ComponentFixture<ShowSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowSettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
