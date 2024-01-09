import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-prime-user',
  templateUrl: './prime-user.component.html',
  styleUrls: ['./prime-user.component.scss']
})
export class PrimeUserComponent implements OnInit {
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  close(){
    this.router.navigate([''])
  }
}
