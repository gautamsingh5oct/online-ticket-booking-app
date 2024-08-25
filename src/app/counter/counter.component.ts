import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit{
 counter=0;
 constructor(){}
  ngOnInit(): void {
    
  }

  decrement(){
    this.counter--;
  }
  increment(){
    console.log("increment "+this.increment);
    this.counter++;
  }


}
