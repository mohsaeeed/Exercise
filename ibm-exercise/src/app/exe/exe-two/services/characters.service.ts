import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  allCharacters: Subject<any> = new Subject();
  selectedChar: Subject<any> = new Subject();

  constructor(private _http: HttpClient) { }

  /**
   *
   * @param param search paramters to pass back to the server
   */
  getCharacters(param?): any {
    return this._http.get(`${environment.api_url}exe-2/characters`, {params: param});
  }

  /**
   *
   * @param param film url
   */
  getFilmInfo(param): any {
    return this._http.get(`${environment.api_url}exe-2/films`, {params: param});
  }

  /**
   * return back the characters subject
   */
  get characters() {
    return this.allCharacters;
  }

  /**
   * set the new characters list
   */
  set characters(chars) {
    this.allCharacters.next(chars);
  }

  /**
   * return back the selected character
   */
  get character() {
    return this.selectedChar;
  }

  /**
   * set a new selected character
   */
  set character(char) {
    this.selectedChar.next(char);
  }

}
