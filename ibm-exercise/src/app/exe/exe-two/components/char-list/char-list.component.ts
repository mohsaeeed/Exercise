import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-char-list',
  templateUrl: './char-list.component.html',
  styleUrls: ['./char-list.component.css']
})
export class CharListComponent implements OnInit {

  characterList = [];
  characterName = '';
  showNoResultMsg = false;

  constructor(private charService: CharactersService) {
  }

  ngOnInit() {
  }

  /**
   *
   * @param char is the selected film character from the components dropdown list
   */
  setCharecter(char) {
    this.charService.character = char;
    this.characterName = char.name;
    this.characterList = [];
  }

  /**
   *
   * @param event event represents the new search string to pass back to the service
   */
  onChange(event) {
    if (event) {
      this.charService.getCharacters({ search: event }).subscribe(res => {
        this.characterList = res.results;
        if (res.results.length === 0) {
          this.showNoResultMsg = true;
        } else {
          this.showNoResultMsg = false;
        }
      });
    } else {
      this.characterList = [];
    }
  }
}
