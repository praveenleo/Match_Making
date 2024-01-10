import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListingMatchesService } from 'src/app/services/listing-matches.service';
import { IProfileList, ProfileInfo } from 'src/app/Interface/listing-matches';
declare var $: any;



@Component({
  selector: 'app-listing-matches',
  templateUrl: './listing-matches.component.html',
  styleUrls: ['./listing-matches.component.scss'],
})
export class ListingMatchesComponent implements OnInit {
  profileList: ProfileInfo[] = [];
  profileMatchingInfo!: IProfileList;
  activeItem: string = '';
  imgCount = 50;
  activeButton: string = 'yetToView';
  constructor(
    private router: Router,
    private service: ListingMatchesService
  ) {}

  ngOnInit(): void {
    this.getProfileList('allMatcheslist');
    $(window).scroll(() => {
      if ($(this).scrollTop() > 300) {
        $('.header_bg').addClass('scroll_page');
      } else {
        $('.header_bg').removeClass('scroll_page');
      }
    });
  }

  getProfileList(action: string) {
    this.service.getProfileInfo().subscribe(
      (result: IProfileList) => {
        this.profileMatchingInfo = result;
        this.profileList = result.data[action];
        this.imgCount++;
        this.activeItem = action;
      },
      (err) => {
      }
    );
  }

  redirectToPrime() {
    this.router.navigate(['primeUser']);
  }

  setActiveButton(button: string) {
    this.activeButton = button;
  }
}
