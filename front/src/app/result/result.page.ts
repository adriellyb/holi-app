import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DateService } from '../services/date.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  public holidayInfos = [];
  public dateInfos = [];

  constructor(  public route: Router,
                public dateService: DateService) { }

  ngOnInit() {
    this.showHoliday();
    this.showDate();
  }

  goHome(){
    this.route.navigate(['/home']).then(()=> {window.location.reload()});
  }

  showDate(){
    let id = localStorage.getItem('id');
    this.dateService.getDate(id).subscribe(
      (res) =>{
        this.dateInfos = res['date'];
        console.log(this.dateInfos);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  showHoliday(){
    let id = localStorage.getItem('id');
    this.dateService.getHoliday(id).subscribe(
      (res) =>{
        this.holidayInfos = res;
        console.log(this.holidayInfos);
        if (this.holidayInfos.length == 0) {
          document.getElementById('title').innerHTML = "Ooops!";
          document.getElementById('content').innerHTML = "There are no holidays on this date!";
        }
        else{
          this.holidayInfos = res[0];
          document.getElementById('title').innerHTML = this.holidayInfos['name'];
          document.getElementById('content').innerHTML = this.holidayInfos['description'];
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
