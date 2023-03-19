import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EditableElementComponent } from '../editable-element/editable-element.component';

import { PockemonCardComponent } from './pockemon-card.component';
import { Pokemon } from './pockemon.model';

fdescribe('PockemonCardComponent', () => {
  let component: PockemonCardComponent;
  let fixture: ComponentFixture<PockemonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [PockemonCardComponent, EditableElementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PockemonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit captured event', () => {
    const pokemon: Pokemon = {
      id: 1,
      name: 'Pikachu',
      attack: 10,
      defense: 10,
      hasEvolution: true,
      description: '',
      lastSeen: '',
      types: [],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.png',
    };
    const captureSpy = spyOn(component.capture, 'emit');
    component.pokemon = pokemon;

    const captureButton = fixture.nativeElement.querySelector(
      'button[data-testid="capture-btn"]'
    );
    captureButton.click();
    fixture.detectChanges();

    expect(captureSpy).toHaveBeenCalledWith(pokemon);
  });
});
