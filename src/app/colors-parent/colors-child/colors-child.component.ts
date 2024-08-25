import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-colors-child',
  templateUrl: './colors-child.component.html',
  styleUrl: './colors-child.component.css'
})
export class ColorsChildComponent implements OnInit{

  @Input()
  printColor:string="";

  @Output() 
  deleteEventEmitter=new EventEmitter();

  constructor(){
    console.log("ColorsChildComponent constructor");
  }

  ngOnInit(): void {
    console.log("ngOnInit :: ");
  }

  ngOnChanges(): void {
    console.log("ngOnChanges :: ");
  }


  deleteColor(color:string){
     this.deleteEventEmitter.emit(color);     
  }

}
