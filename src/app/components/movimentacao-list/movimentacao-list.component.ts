import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { CorrentistaService } from 'src/app/services/correntista.service';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';


=======
import { MovimentacaoService } from 'src/app/services/movimentacao.service';

>>>>>>> a4f9bf7e1a502d70626b1c7d741f1168d0217d25
@Component({
  selector: 'app-movimentacao-list',
  templateUrl: './movimentacao-list.component.html',
  styleUrls: ['./movimentacao-list.component.css']
})
export class MovimentacaoListComponent implements OnInit {
  movimentacoes:any;
<<<<<<< HEAD
  correntistas:any;
  correntista:any;

  constructor(
      private movimentacaoService: MovimentacaoService,
      private correntistaService: CorrentistaService
      ) { }

  ngOnInit(): void {
    this.exibirCorrentistas();
  }
  exibirCorrentistas(): void {
    this.correntistaService.list()
      .subscribe(
        data => {
          this.correntistas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  listMovimentacoes(): void {
    this.movimentacaoService.findByIdConta(this.correntista.id)
=======

  constructor(private movimentacaoService: MovimentacaoService) { }

  ngOnInit(): void {
    this.listMovimentacoes();
  }
  listMovimentacoes(): void {
    this.movimentacaoService.list()
>>>>>>> a4f9bf7e1a502d70626b1c7d741f1168d0217d25
      .subscribe(
        data => {
          this.movimentacoes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
