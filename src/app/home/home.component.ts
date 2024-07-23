import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  filmName:string=""
  filmList:any=[]
  


  constructor(private data:DataServiceService){}

  ngOnInit(): void {
    this.data.getFilms().subscribe((data:any)=>{
      this.filmList=data.films
      console.log(this.filmList);
      
    })
    
  }

}
