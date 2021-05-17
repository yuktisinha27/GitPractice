import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employ } from '../employ';
import { EmployService } from '../employ.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-employ',
  templateUrl: './employ.component.html',
  styleUrls: ['./employ.component.css']
})
export class EmployComponent implements OnInit {
  employ : Observable<Employ[]>;
  constructor(private _employService: EmployService) {
    this.employ =this._employService.showEmploy();
   }

  ngOnInit(): void {
  }

}
