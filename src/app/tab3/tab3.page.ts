import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

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

  constructor(public route: ActivatedRoute, private platform:Platform, private nav : NavController, private document: DocumentViewer, private file:File, private transfer: FileTransfer){
    
    this.Name = this.route.snapshot.params['Name']
    this.Email = this.route.snapshot.params['Email']
    this.Contact = this.route.snapshot.params['Contact']
    this.Roll = this.route.snapshot.params['Roll']
    this.Passout_Year_hsc = this.route.snapshot.params['Passout_Year_hsc']
    this.Per_hsc = this.route.snapshot.params['Per_hsc']
    this.Passout_Year_ssc = this.route.snapshot.params['Passout_Year_ssc']
    this.Per_ssc = this.route.snapshot.params['Per_ssc']
    this.Per_bach = this.route.snapshot.params['Per_bach']
    this.Cgpa_bach = this.route.snapshot.params['Cgpa_bach']
    }

    openLocalPdf(){
      let path = null;

      if(this.platform.is('ios')){
        path = this.file.documentsDirectory;
      }
      else{
        path = this.file.dataDirectory;
      }
  
      const transfer =this.transfer.create();
      transfer.download('https://drive.google.com/file/d/1wNX3K5sR18McFKgm7L0BCOez5QgK-A8U/view?usp=sharing', path + 'myfile.pdf').then(entry =>{
        let url = entry.toURL();
        this.document.viewDocument(url, 'application/pdf',{});
      })
    }
  ngOnInit() {
  }
}
