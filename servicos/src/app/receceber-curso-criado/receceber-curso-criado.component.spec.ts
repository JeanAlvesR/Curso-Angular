import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RececeberCursoCriadoComponent } from './receceber-curso-criado.component';

describe('RececeberCursoCriadoComponent', () => {
  let component: RececeberCursoCriadoComponent;
  let fixture: ComponentFixture<RececeberCursoCriadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RececeberCursoCriadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RececeberCursoCriadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
