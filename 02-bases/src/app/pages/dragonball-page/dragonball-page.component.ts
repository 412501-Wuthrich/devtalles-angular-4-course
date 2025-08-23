import {Component, computed, signal} from '@angular/core';
import {CharacterListComponent} from '../../Components/Dragonball/character-list/character-list.component';
import {
  DragonballCharacterAddComponent
} from '../../Components/Dragonball/dragon-character-add/dragonball-character-add.component';

interface Character {
  id: number,
  name: string,
  power: number
}

@Component({
  selector: 'app-dragonball-page',
  imports: [CharacterListComponent, DragonballCharacterAddComponent],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {
  name = signal('')
  power = signal(0)
  characters = signal<Character[]>([
    {
      id:1, name:'Goku',power: 9001
    },
    {
      id:2, name:'Piccoro',power: 4500
    },
    {
      id:3, name:'Vegeta',power: 16000
    },
    {
      id:4, name:'Yamtcha',power: 500
    },
  ])

}
