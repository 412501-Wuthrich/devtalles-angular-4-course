import {Component, inject, signal} from '@angular/core';
import {
  DragonballCharacterAddComponent
} from '../../Components/Dragonball/dragon-character-add/dragonball-character-add.component';
import {CharacterListComponent} from '../../Components/Dragonball/character-list/character-list.component';

import {DragonballService} from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [
    DragonballCharacterAddComponent,
    CharacterListComponent
  ],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css'
})
export class DragonballSuperPageComponent {
  public dragonBallService = inject(DragonballService);

}
