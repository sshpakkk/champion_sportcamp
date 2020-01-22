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
    { id: 1, part: "2-ая(июль)", theme: "летние виды спорта", squad: "плавание, лёгкая атлетика, бег, спортивное ориентирование", AllPlaces: 125, CountOfVacancies: 119 },
    { id: 2, part: "3-яя(август)", theme: "единоборства", squad: "греко-римская борьба, бокс, кик-боксинг, армейский рукопашный бой, военно-тактические игры( страйкбол, пейнтбол )", AllPlaces: 125, CountOfVacancies: 88 },
    { id: 3, part: "4-ая(февраль)", theme: "зимние виды спорта", squad: "кёрлинг, хокей, горные лыжи, сноубординг, фигурное катание, саллом", AllPlaces: 95, CountOfVacancies: 41 },
  ];
  toBook(id: number) {
    console.log(id);

    this.table.find(el => el.id == id).CountOfVacancies--;
  }
  ngOnInit() {
  }

}
