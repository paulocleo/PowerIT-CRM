import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FuncionariosService } from '../../services/domain/funcionarios.service';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public funcionarioService: FuncionariosService) {
  }

  ionViewDidLoad() {
       
    console.log(this.funcionarioService.findAllFuncionarios());
    
    /*
    this.funcionarioService.findAll()
    .subscribe(response => {
      console.log(response);
    },
    error => {
      console.log(error);
    }    
    
    );*/
  }


}
