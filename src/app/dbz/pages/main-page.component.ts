import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbsService } from '../services/dbz.service';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private DbsService : DbsService) {}

  get characters() : Character[] {
    return [...this.DbsService.characters];
  }

  onDeleteCharacter(id : string) : void {

    this.DbsService.deleteCharacterById(id);
  }

  onNewChatacter (characters :Character) {
    this.DbsService.addCharacter(characters);
  }



  }


