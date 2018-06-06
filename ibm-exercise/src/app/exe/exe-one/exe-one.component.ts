import { Component, OnInit } from '@angular/core';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-exe-one',
  templateUrl: './exe-one.component.html',
  styleUrls: ['./exe-one.component.css']
})
export class ExeOneComponent implements OnInit {

  length = 0;
  firstNum = 0;
  secondNum = 0;
  result = null;

  constructor(private service: ServiceService) { }

  ngOnInit() {
  }

  /**
   * getResults: this will call the service that will return a new formatted string
   * length: is a Number between 1...N
   * firstNum:  is a Number between 1...length
   * secondNum: is a Number between 1...length && is not equle to firstNum
   */
  getResult() {
    const param = { length: this.length, firstNum: this.firstNum, secondNum: this.secondNum };
    this.service.getResult(param).subscribe(res => {
      this.result = res.result.string;
    });
  }

}
