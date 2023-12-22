import { Component } from "@angular/core";



@Component({
    selector:'app-counter',
    template:`
    <h1>{{title}} </h1>
   <p>Counter: {{counter}}</p>

<button (click)="modifyBy('increase')" >+1</button>
<button (click)="modifyBy('decrease')">-1</button>
<button (click)="resetValue()">Reset</button>

    `
})

export class CounterComponent{
   public saludo :string='hola'
   public title:string = 'Contador dos';
   public counter:number = 10;
  
  modifyBy(value:string):void{
  
    value==='increase'?this.counter+=1 : this.counter-=1;
  }
  resetValue():void{
    this.counter=10;
  }

}