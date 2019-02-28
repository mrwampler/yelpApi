import { Component, OnInit, Input } from '@angular/core';
import {APIService} from "./yelp.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private eats = [];
  private monEats = [];
  private dinner = {location:{}, image_url:"", transactions: [], rating: 0};
  private dinnerDone: boolean;
  private transaction: string;
  private ratingView;


  private ratings = [
    {value: 1, view: '🌟'},
    {value: 2, view: '🌟🌟'},
    {value: 3, view: '🌟🌟🌟'},
    {value: 4, view: '🌟🌟🌟🌟'},
    {value: 5, view: '🌟🌟🌟🌟🌟'}
  ]

  constructor(private apiService: APIService) { }

  ngOnInit() {}
  
  sendFetch(input: string, price: string){
    event.preventDefault();
    this.dinnerDone = false;
    this.transaction = "";
    this.apiService.sendFetchService(input).subscribe(data =>{
      this.eats = data.businesses;
      console.log(this.eats);
      this.sortArr(price);
    })
  }

  sortArr(price){
    for(let res of this.eats){
      if(res.price == price && res.is_closed == false){
        this.monEats.push(res);
      }
    }
    console.log(this.monEats);
    this.displayRes();
  }

  displayRes(){
    this.dinner = this.monEats[Math.floor(Math.random() * this.monEats.length)]
    this.dinnerDone = true;
    console.log(this.dinner);
    for(let tran of this.dinner.transactions){
      if(tran == "delivery"){
        this.transaction = tran;
      }
    }

    for(let star of this.ratings){
      if(star.value == Math.round(this.dinner.rating)){
        this.ratingView = star.view
      }
    }
    this.eats = [];
    this.monEats = [];
  }
}