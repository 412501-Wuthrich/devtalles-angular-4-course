import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent {
  heroName = signal("Ironman");
  heroAge = signal(45);

  getHeroDescription(){
    return `${this.heroName()} - ${this.heroAge()}`
  }

  changeHero(){
    this.heroAge.set(22);
    this.heroName.set("Spiderman")
  }
  resetForm(){
    this.heroAge.set(45);
    this.heroName.set("Ironman")
  }
  changeAge(){
    this.heroAge.set(60)
  }

  toUpper(hero: string){
    return hero.toString().toUpperCase()
  }

}
