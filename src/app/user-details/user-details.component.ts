import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  details; 

  constructor(
    private service: UserService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    let userId = this.route.snapshot.paramMap.get('user-id');
    this.service.getUserDetails(userId)
    .subscribe( res => {
      this.details = res;
      console.log(this.details);
    })
  }

}
