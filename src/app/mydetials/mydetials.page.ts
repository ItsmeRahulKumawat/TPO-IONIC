import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';



@Component({
  selector: 'app-mydetials',
  templateUrl: './mydetials.page.html',
  styleUrls: ['./mydetials.page.scss'],
})
export class MydetialsPage {
  
  constructor(private iab: InAppBrowser){}
    
    
  ngOnInit() {}

}
