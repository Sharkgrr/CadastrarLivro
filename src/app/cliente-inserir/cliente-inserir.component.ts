import { Component, EventEmitter, Output } from '@angular/core';
import { Livro } from '../clientes/cliente.model';
@Component({
selector: 'app-cliente-inserir',
templateUrl: './cliente-inserir.component.html',
styleUrls: ['./cliente-inserir.component.css'],
})
export class ClienteInserirComponent {
@Output() livroAdicionado = new EventEmitter<Livro>();

id: string;
titulo: string;
autor: string;
paginas: Int16Array;

onAdicionarCLiente() {
const livro: Livro = {
id: this.id,
titulo: this.titulo,
autor: this.autor,
paginas: this.paginas
};
this.livroAdicionado.emit(livro);
}
}