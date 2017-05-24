import { Component } from '@angular/core';
import { DealershipService } from './dealershiplist/dealership.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

 constructor(private dealershipService: DealershipService) { } 
  title = 'Testing components:';
  obj = {
      id: "1",
      name: "Manage Dealerships:"
  };
    arr = ["Add/Remove components","List","Add/Remove Module"];
    isTrue = true;

   someProperty:string = '';

   ngOnInit() {

      console.log(this.dealershipService.dealershiplist);
    //  this.dealershipService.SetDealer($event);
      this.someProperty = this.dealershipService.dealerdata();
  }

}
