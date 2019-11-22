import { Component, OnInit} from '@angular/core';
import { HumanService } from './human.service';
import { Human } from './human';


@Component({
  selector: 'app-weight-calculation',
  templateUrl: './weight-calculation.component.html',
  styleUrls: ['./weight-calculation.component.css'],
  providers: [HumanService]
})
export class WeightCalculationComponent implements OnInit {

  constructor(private humanService: HumanService) { }

  humans: Human[];
  public age: number;
  public height: number;
  public weight: number;

  public indexYoung = 110;
  public indexOld = 100;
  public bodyMassIndex: number;
  public showAllResults = false;
  public btnText = 'Показать все значения';
  public result: any;

  private indexYear = 40;



  ngOnInit() {
  }

  resultBodyMassIndex() {
    if (this.bodyMassIndex < this.weight) {
      this.result = 'Вес выше нормы на ' + (this.weight - this.bodyMassIndex) + ' кг';
    } else if (this.bodyMassIndex > this.weight) {
      this.result = 'Вес ниже нормы на ' + (this.weight - this.bodyMassIndex) + ' кг';
    } else {
      this.result = 'Вес в норме';
    }

    alert(this.result);
  }

  addNewHuman(age: number, height: number, weight: number) {
    this.resultBodyMassIndex();
    this.humanService.addHuman(age, height, weight, this.result);
    this.humans = this.humanService.getData();

    if (age >= this.indexYear) {
      this.bodyMassIndex = height - this.indexOld;
    } else {
      this.bodyMassIndex = height - this.indexYoung;
    }

    this.age = null;
    this.weight = null;
    this.height = null;
  }


  showAll() {
    if (this.showAllResults) {
      this.showAllResults = false;
      this.btnText = 'Показать все значения';
    } else {
      this.showAllResults = true;
      this.btnText = 'Скрыть все значения';
    }
  }

}
