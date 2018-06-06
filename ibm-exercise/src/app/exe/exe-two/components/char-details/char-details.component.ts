import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-char-details',
  templateUrl: './char-details.component.html',
  styleUrls: ['./char-details.component.css']
})
export class CharDetailsComponent implements OnInit {

  charecter = null;
  films = [];

  constructor(private charService: CharactersService) { }

  ngOnInit() {
    /**
     * Observing the character Subject in the shared service to bind back any changes
     */
    this.charService.character.subscribe(char => {

      this.charecter = char;
      this.films = [];

      if (char.hasOwnProperty('films') && char['films'].length > 0) {
        char['films'].map(url => {
          this.charService.getFilmInfo({ url: url }).subscribe(film => {
            this.films.push(film);
          });
        });
      }
    });

  }

}
