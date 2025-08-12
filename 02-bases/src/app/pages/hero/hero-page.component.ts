import {Component, computed, signal} from '@angular/core';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [
    UpperCasePipe
  ],
  templateUrl: './hero-page.component.html',
  styleUrl: 'hero-page.component.css'
})
export class HeroPageComponent {
  heroName = signal("Ironman");
  heroAge = signal(45);

  heroDescription = computed(() => {
    const description = `${this.heroName()} - ${this.heroAge()}`;
    return description
  });

  // getHeroDescription(){
  //   return `${this.heroName()} - ${this.heroAge()}`
  // }

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

  // toUpper(hero: string){
  //   return hero.toString().toUpperCase()
  // }


  // toUppercase = computed(()=>{
  //   const heroUppered = this.heroName().toString().toUpperCase()
  //   return heroUppered
  // })

}
