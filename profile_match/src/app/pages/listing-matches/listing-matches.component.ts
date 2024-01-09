import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { ListingMatchesService } from 'src/app/services/listing-matches.service';
declare var $: any;

interface ProfileInfo {
  id: Number;
  name: String;
  age: Number;
  height: String,
  degree: String,
  caste: String,
  city: String,
  state: String,
  isPrimeUser: Boolean
}


@Component({
  selector: 'app-listing-matches',
  templateUrl: './listing-matches.component.html',
  styleUrls: ['./listing-matches.component.scss']
})
export class ListingMatchesComponent {
  profileList: ProfileInfo[] = [];
  profileMatchingInfo: any=[];
  activeItem: string = '';
  imgCount = 50;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ListingMatchesService
    ) { }

  ngOnInit(): void {
    this.getProfileList('allMatcheslist')
    $(window).scroll(() =>{
      if ($(this).scrollTop() > 300) {
          $('.header_bg').addClass('scroll_page');
      } else {
          $('.header_bg').removeClass('scroll_page');
      }
    });
  }

  getProfileList(action: string) {
    this.service.getProfileInfo().subscribe((result: any) => {
      this.profileMatchingInfo = result;
      this.profileList = result.data[action]
      this.imgCount++;
      this.activeItem = action;
    }, err => {
      console.log('getProfileInfo', err);
    });
  }

  redirectToPrime(){
    this.router.navigate(['primeUser'])
  }

}
