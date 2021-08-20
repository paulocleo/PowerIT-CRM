import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataDTO } from '../../models/data.dto';
import { FuncionariosExemploDTO } from '../../models/funcionarioexemplo.dto';
import { FuncionariosDTO } from '../../models/funcionarios.dto';
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

  //listFuncionarios: Array<FuncionariosDTO> = [];

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

      var loader_e = document.getElementById('loader1');
      loader_e.classList.add('hidden');

      var loader_e2 = document.getElementById('loader2');
      loader_e2.classList.add('hidden');

      console.log(response);
    },
    error => {});

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

  AbrirTodosFuncionarios() {
    this.navCtrl.setRoot('FuncionariosPage');
  }


}
