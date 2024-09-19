import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent {
  scheduleId: number = 0;
  scheduleData: any = {};
  seatArray: number[] = []; //bcz total seats is just 28 which is an number so we can't apply ngloop & all! so , we are using this method , here we run loop a/c to the total seats ....so that we can show that number of seats using some box's
  bookedSeatsArray:number[]=[];//for this it is already coming(response) in array so, no need to loop it again 
  userSelectedSeatArray:number[]=[];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private masterService: MasterService
  ) {
    activatedRoute.params.subscribe((data) => {
      this.scheduleId = data['id'];
    });

    this.getScheduleDataById();
  }
//After constructor -------------------------------------------
  getScheduleDataById() {
    this.masterService.getScheduleById(this.scheduleId).subscribe((data) => {
      debugger;
      this.scheduleData = data;
      for (let index = 0; index < this.scheduleData.length; index++) {
        this.seatArray.push(index);
      }
    });
  }
getBookedSeats(){
  this.masterService.getBookedSeats(this.scheduleId).subscribe(
    data=>{
      this.bookedSeatsArray=data;
    }
  )
}
checkSeatsBookedOrNot(seatsNo:number){
  return this.bookedSeatsArray.indexOf(seatsNo);
  //if it is true -> return index value !if false return -1
}

selectSeats(seatNo:number){

}
}
