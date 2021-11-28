import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'; 
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { NavController, Platform } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public alertCtrl: AlertController, public router:Router,public route: ActivatedRoute, private platform:Platform, private document: DocumentViewer, private file:File, private transfer: FileTransfer) {}

  async showAlert() {  
    const alert = await this.alertCtrl.create({  
      header: 'Success',  
      // subHeader: 'Confirmation',  
      message: 'Applied Successfully',  
      buttons: ['OK']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);  
  }  

  ms()
  {
    let path = null;

    if(this.platform.is('ios')){
      path = this.file.documentsDirectory;
    }
    else{
      path = this.file.dataDirectory;
    }

    const transfer =this.transfer.create();
    transfer.download('https://www.morganstanley.com/im/publication/insights/articles/article_thetoptentendsof2021_a4.pdf', path + 'myfile.pdf').then(entry =>{
      let url = entry.toURL();
      this.document.viewDocument(url, 'application/pdf',{});
    })
  }


}
