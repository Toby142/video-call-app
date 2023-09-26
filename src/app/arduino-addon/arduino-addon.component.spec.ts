import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArduinoAddonComponent } from './arduino-addon.component';

describe('ArduinoAddonComponent', () => {
  let component: ArduinoAddonComponent;
  let fixture: ComponentFixture<ArduinoAddonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArduinoAddonComponent]
    });
    fixture = TestBed.createComponent(ArduinoAddonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
