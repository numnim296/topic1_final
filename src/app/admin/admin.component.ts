import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DramaService } from '@app/shared/services/drama/drama.service';
import { find } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  check:number=0
  dataDrama!: Object;

  constructor(private router: Router,private dramaService: DramaService) {
    
    this.dramaService.getAllDrama().subscribe(res=>{this.dataDrama=res})
    
  }

  public ngOnInit() {
    
  }
 
  deleteDrama(id:string){
    console.log("deleteDrama",id);
    this.dramaService.deleteDrama(id).subscribe(res=>{
      // console.log('delete complete ',res)
      window.location.reload();
    })
  }
    editDrama(id:string){
    // this.router.navigateByUrl('/admin/admin/editdrama')
    let data =  this.dataDrama.find(function (res) {
        return res._id === id;
      })
    
    this.router.navigate(['/admin/admin/editdrama'], { state:{ data } })
  
  }
}


