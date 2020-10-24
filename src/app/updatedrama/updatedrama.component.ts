
import { DramaService } from '@app/shared/services/drama/drama.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatedrama',
  templateUrl: './updatedrama.component.html',
  styleUrls: ['./updatedrama.component.css']
})
export class UpdatedramaComponent implements OnInit {
  name!: string;
   imageurl!: string;
   daytime!: string;
   channel!: string;
   review!: string;
   id!: string;

  constructor(private router: Router,private dramaService: DramaService) { 
    this.name = this.router.getCurrentNavigation()?.extras.state?.data.name
    this.imageurl = this.router.getCurrentNavigation()?.extras.state?.data.imageurl
    this.daytime = this.router.getCurrentNavigation()?.extras.state?.data.daytime
    this.channel = this.router.getCurrentNavigation()?.extras.state?.data.channel
    this.review = this.router.getCurrentNavigation()?.extras.state?.data.review
    this.id = this.router.getCurrentNavigation()?.extras.state?.data._id
  }

  ngOnInit(): void {
  }
  edit(){
   this.dramaService.editDrama(this.id,this.name,this.imageurl,this.daytime,this.channel,this.review).subscribe(res=>{
    
    this.router.navigateByUrl('/admin/admin')
  })
  }

}
