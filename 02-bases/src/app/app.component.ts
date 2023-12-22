import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 public title:string = 'bases';
 public counter:number = 10;

modifyBy(value:string):void{

  value==='increase'?this.counter+=1 : this.counter-=1;
}
resetValue():void{
  this.counter=10;
}

}
