import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DramaService } from '@app/shared/services/drama/drama.service';
import { find } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataDrama!: Object;

  constructor(private router: Router,private dramaService: DramaService) { 
    this.dramaService.getAllDrama().subscribe(res=>{this.dataDrama=res})
  }

  ngOnInit() {
  }

}
