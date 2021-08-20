import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataDTO } from '../../models/data.dto';
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

  listFuncionarios : DataDTO[];
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public funcionarioService: FuncionariosService) {
  }

  ionViewDidLoad() {
    
    this.funcionarioService.fingAllExemplo()
    .subscribe(response => {
      
      this.listFuncionarios = (<any>response).data;

      var element = document.getElementById('loader');
      element.classList.add('hidden');

      console.log(response);
    },
    error => {
      //console.log(error);
    }    
    
    );

    /*this.listFuncionarios = this.funcionarioService.findAllFuncionarios();    
    console.log(this.funcionarioService.findAllFuncionarios());*/
    
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
