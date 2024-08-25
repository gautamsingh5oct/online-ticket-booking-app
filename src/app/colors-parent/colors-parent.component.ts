import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-colors-parent',
  templateUrl: './colors-parent.component.html',
  styleUrl: './colors-parent.component.css'
})
export class ColorsParentComponent implements OnInit{
 
  constructor(){}
   ngOnInit(): void {
     
   }
 
  myMovie: string="Avengers";
  allColors:string[]=["Red","Blue","Green"];

  removeColor(color:string ){
  console.log(color);   
  this.allColors.splice(this.allColors.indexOf(color),1);

  }


}
