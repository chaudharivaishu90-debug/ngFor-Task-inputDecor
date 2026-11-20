import { Component, OnInit } from '@angular/core';
import { Imobile } from 'src/app/model/productinterface';
import{MobProduct}from 'src/app/const/productdata'
@Component({
  selector: 'app-moile-dashboard',
  templateUrl: './moile-dashboard.component.html',
  styleUrls: ['./moile-dashboard.component.scss']
})
export class MoileDashboardComponent implements OnInit {
  MobArr:Array<Imobile>=MobProduct;
  imageError: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}
