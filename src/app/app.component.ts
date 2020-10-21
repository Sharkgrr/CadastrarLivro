import { Component } from '@angular/core';
import { Livro } from './clientes/cliente.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean';
  livros: Livro[] = [];
  onLivroAdicionado(livros) {
  this.livros = [...this.livros, livros];
    }
}
