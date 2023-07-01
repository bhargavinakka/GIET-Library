import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  public img ='../../assets/welcome2.jpg'

  constructor(private routes:Router){

  }
  onclick(){
    this.routes.navigateByUrl('login')
  }
}
