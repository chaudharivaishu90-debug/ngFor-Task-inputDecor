import { Component, OnInit,Input,ViewChild} from '@angular/core';
import { Imobile } from 'src/app/model/productinterface';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {
@Input()mobileObj!:Imobile
imageError: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
