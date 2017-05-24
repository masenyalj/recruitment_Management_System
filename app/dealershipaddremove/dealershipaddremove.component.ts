import { Component, OnInit } from '@angular/core';
import { DealershipService } from '../dealershiplist/dealership.service';

@Component({
  selector: 'app-dealershipaddremove',
  templateUrl: './dealershipaddremove.component.html',
  styleUrls: ['./dealershipaddremove.component.css']
})
export class DealershipaddremoveComponent implements OnInit {

  vrb = ["Dealership","sfdsfsdf","sdfdsfsdf","fdsfsfffs"];

  constructor(private dealershipService: DealershipService) { }   //constructor(private dealershipService: DealershipService) { }
  someProperty:string = '';
  ngOnInit() {
    //  Console.log('test');
      console.log(this.dealershipService.dealershiplist)
    // this.dealershipService = this.dealershipService.dealerdata();
      this.dealershipService.SetDealer("Remove and add components");
      this.someProperty = this.dealershipService.dealerdata();
  }

}

