import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})




export class BodyComponent implements OnInit {

  url = 'https://pokeapi.co/api/v2/pokemon/?limit=24';
  res: any;
  title = "I love pokimane";
  pokemons: any;

  data = {
    "name": "John Smith",
    "age": 35
  }
  
  constructor(private http: HttpClient) {}

  onClick(paramUrl:string):void {

   this.getPikachuDetails(paramUrl)
    
    
  }

 

  ngOnInit(): void {
    this.getPikachuDetails(this.url);
  }

  getRandom() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    return randomNumber;
  }

  

  private getPikachuDetails(url:string):void {
    this.http.get<any>(url).subscribe(data => {
      
      this.res = data; //stores all the pokemons in res and other data as well
      this.pokemons = data.results;

      
      
    });


  }

}
