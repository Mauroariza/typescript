import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string='Ironman';
  public age:number=45;


  get capitalizedName():string{
    return this.name.toUpperCase();
  }

}
