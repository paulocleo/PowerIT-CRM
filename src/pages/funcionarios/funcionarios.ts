import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FuncionariosResponseDTO } from '../../models/funcionariosresponse.dto';
import { FuncionariosService } from '../../services/domain/funcionarios.service';

/**
 * Generated class for the FuncionariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-funcionarios',
  templateUrl: 'funcionarios.html',
})
export class FuncionariosPage {

  listFuncionarios : FuncionariosResponseDTO[];
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public funcionarioService: FuncionariosService) {
  }

  ionViewDidLoad() {
    
    this.funcionarioService.findAll()
    .subscribe(response => {
        this.listFuncionarios = response;

        var loader_e = document.getElementById('loader');
        loader_e.classList.add('hidden');

    },
    error => {
      console.log(error);
      
    });    

  }

}
