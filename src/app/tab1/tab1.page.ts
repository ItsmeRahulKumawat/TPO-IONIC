import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  Name:any; 
  Email:any; 
  Contact:any; 
  Roll:any; 
  Passout_Year_hsc:any; 
  Per_hsc: any;
  Passout_Year_ssc:any;
  Per_ssc:any;
  Per_bach:any;
  Cgpa_bach:any;

constructor(private nav: NavController, public router:Router) {}

goToAboutPage(){
  this.nav.navigateForward(['tab3',{
    Name:this.Name,
    Email:this.Email,
    Contact:this.Contact,
    Roll:this.Roll,
    Passout_Year_hsc:this.Passout_Year_hsc,
    Per_hsc: this.Per_hsc,
    Passout_Year_ssc:this.Passout_Year_ssc,
    Per_ssc:this.Per_ssc,
    Per_bach:this.Per_bach,
    Cgpa_bach:this.Cgpa_bach
  }]);
  }
  gototab3(){
    this.router.navigate(['tab3']);
  }
  
}

