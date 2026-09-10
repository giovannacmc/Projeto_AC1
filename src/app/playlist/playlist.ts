import { Component } from '@angular/core';

@Component({
  selector: 'app-playlist',
  imports: [],
  templateUrl: './playlist.html',
  styleUrl: './playlist.css',
})
export class Playlist {
  musica: string []= ["Exile - Taylor Swift", "Hit Up - Tupac", "Espresso - Sabrina Carpenter", "Midnight Sun - Zara Larsson", "Psychossocial - Slipknot"];
  selecionada ='';
  nome: string = "Snoopy";
  novaMusica: string[] = [];
          adicionarMusica(event: any) {
          this.musica.push(event.target.value);
event.target.value = '';
}
Curtidas: number = 0;
incrementar() { this.Curtidas++; }

  
}
