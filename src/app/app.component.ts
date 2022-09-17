import { Component, OnInit } from '@angular/core';
import { Anime } from './anime';
import { GetDetailsService } from './get-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SearchResult';

  Animes!: Anime ;
  topAnimes !: any[];
  firstName !: any;
  totalCount!: number;
  p: number = 1;


  constructor(private getDetailsService: GetDetailsService) {

  }

  ngOnInit(): void{
    this.getDetailsService.getTop15Character().subscribe((response) => {
      this.Animes = response;
      this.topAnimes = this.Animes.data;
      this.totalCount = this.Animes.pagination.items.total;
      console.log(this.topAnimes);
    })
  }

  Search() {
    if(this.firstName == ""){
      this.ngOnInit();
    }
    else{
      // console.log(this.firstName);
      this.getDetailsService.getNameMatchingCharacter(this.firstName, this.p).subscribe((response) => {
        this.Animes = response;
        this.topAnimes = this.Animes.data;
        this.totalCount = this.Animes.pagination.items.total;
        //console.log(this.topAnimes);
        console.log(this.topAnimes);
      })
    }
  }

  goToLink(url: any) {
    window.open(url, "_blank");
  }

}
