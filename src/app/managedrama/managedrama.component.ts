import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DramaService } from '@app/shared/services/drama/drama.service';

@Component({
  selector: 'app-managedrama',
  templateUrl: './managedrama.component.html',
  styleUrls: ['./managedrama.component.css']
})
export class ManagedramaComponent implements OnInit {

  name!: string;
   imageurl!: string;
   daytime!: string;
   channel!: string;
   review!: string;

  constructor(private router: Router,private dramaService: DramaService) { 
  
  }

  ngOnInit(): void {
    
  }

  addDrama(){
    this.dramaService.insertDrama(this.name,this.imageurl,this.daytime,this.channel,this.review).subscribe(res=>{
      // console.log('insert complete ',res)
      this.router.navigateByUrl('/admin/admin')
    })
  }

}
