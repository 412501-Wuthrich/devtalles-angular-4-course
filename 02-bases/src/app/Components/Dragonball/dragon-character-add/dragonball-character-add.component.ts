import {Component, output, signal} from '@angular/core';
import {Character} from '../../../interfaces/character.interface';

@Component({
  selector: 'Dragonball-character-add',
  imports: [],
  templateUrl: './dragonball-character-add.component.html',
})
export class DragonballCharacterAddComponent {
  name = signal('')
  power = signal(0)
  newCharacter = output<Character>()
  characters = signal<Character[]>([])

  addCharacter(){
    if (!this.name() || !this.power() || this.power() <= 0){
      return
    }

    const newCharacter : Character = {
      // id : this.characters.length + 1,
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power()
    }

    this.newCharacter.emit(newCharacter)
    this.resetInput()
  }

  resetInput(){
    this.name.set('')
    this.power.set(0)
  }
}
