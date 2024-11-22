import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDemoComponent } from './client-demo.component';

describe('ClientDemoComponent', () => {
  let component: ClientDemoComponent;
  let fixture: ComponentFixture<ClientDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
