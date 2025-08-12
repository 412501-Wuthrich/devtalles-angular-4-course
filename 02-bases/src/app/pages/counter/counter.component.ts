import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter = 10;
  //Signal = guardan estado , se invocan como una funcion "Derivar", y se usan con un effect()
  counterSignal = signal(10)

  increaseBy(value: number){
    this.counter += value;
    this.counterSignal.update(current => current + value)
  }
  resetCounter() {
    this.counterSignal.set(0) //Con set pisamos los valores que traia antes la signal
  }
}
