import { Component, OnInit } from '@angular/core';
import { DealershipService } from './dealership.service';

@Component({
  selector: 'app-dealershiplist',
  templateUrl: './dealershiplist.component.html',
  styleUrls: ['./dealershiplist.component.css']
})
export class DealershiplistComponent implements OnInit {

  constructor(private dealershipService: DealershipService) { }   //constructor(private dealershipService: DealershipService) { }
  someProperty:string = '';
  ngOnInit() {
    //  Console.log('test');
      console.log(this.dealershipService.dealershiplist)
    // this.dealershipService = this.dealershipService.dealerdata();
      this.dealershipService.SetDealer("List components");
      this.someProperty = this.dealershipService.dealerdata();
  }

}
