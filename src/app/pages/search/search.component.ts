import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/service/master.service';
import { Location } from 'src/app/service/models/location';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

  locationData: Location[] | undefined;
  bustList:any[]=[];

  searchObject:any={
    fromLocation:'',
    toLocation:'',
    travelDate:''
  }

  constructor(private masterService: MasterService) {}

  ngOnInit(): void {
    this.getLocation();
  }
   
  onSearch(){
    // Destructuring
    const {fromLocation,toLocation,travelDate}=this.searchObject;
    this.masterService.searchBus(fromLocation,toLocation,travelDate).subscribe(
      response=>{
     this.bustList=response;
      },err=>{
        alert(`please give valid data `)
      }
    )
  }

  getLocation() {
    this.masterService.getLocations().subscribe(
      (response) => {
        this.locationData=response;
      },
      (error) => {
        alert(error);
      }
    );
  }

}
