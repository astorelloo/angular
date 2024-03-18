import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGiocatoriComponent } from './lista-giocatori.component';

describe('ListaGiocatoriComponent', () => {
  let component: ListaGiocatoriComponent;
  let fixture: ComponentFixture<ListaGiocatoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaGiocatoriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaGiocatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
