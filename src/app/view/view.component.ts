import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{

  id:any=""
  viewFilm:any={}
    constructor(private data:DataServiceService,private rout:ActivatedRoute){
  
    }
    ngOnInit(): void {
  
      this.rout.params.subscribe((data:any)=>{
        this.id=data.id
        this.data.getFilms().subscribe((response:any)=>{
          this.viewFilm=response.films.find((i:any)=>i.Id==this.id)
          console.log(this.viewFilm);
          
          
          
        })        
        
      })
  
    }

}
