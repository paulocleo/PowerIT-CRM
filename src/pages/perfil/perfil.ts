import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService } from '../../services/storage.service';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  emailLogado: string

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storageService: StorageService) {
  }

  ionViewDidLoad() {

    let localUser = this.storageService.getLocalUser();
    console.log(localUser);
    
    if(localUser && localUser.email){
      this.emailLogado = localUser.email;
    }

    console.log('ionViewDidLoad PerfilPage');
  }

}
