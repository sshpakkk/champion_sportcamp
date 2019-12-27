import { Component, OnInit } from '@angular/core';
import { ReservationItem } from 'src/models/ReservationItem';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor() { }
  table: Array<ReservationItem> = [
    { id: 0, part: "1-ая(июнь)", theme: "игры с мячом", squad: "баскетбол, футбол, большой теннис,гандбол, крикет", AllPlaces: 150, CountOfVacancies: 143 },
    { id: 1, part: "1-ая(июнь)", theme: "игры с мячом", squad: "баскетбол, футбол, большой теннис,гандбол, крикет", AllPlaces: 150, CountOfVacancies: 143 },
    { id: 2, part: "1-ая(июнь)", theme: "игры с мячом", squad: "баскетбол, футбол, большой теннис,гандбол, крикет", AllPlaces: 150, CountOfVacancies: 143 },
    { id: 3, part: "1-ая(июнь)", theme: "игры с мячом", squad: "баскетбол, футбол, большой теннис,гандбол, крикет", AllPlaces: 150, CountOfVacancies: 143 },
  ];
  toBook(id: number) {
    console.log(id);

    this.table.find(el => el.id == id).CountOfVacancies--;
  }
  ngOnInit() {
  }

}
