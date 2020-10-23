import { Component, OnInit } from '@angular/core';
import { StudentService } from './../shared/services/student/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
   firstname!: string;
   lastname!: string;
   ssid!: string;
  constructor(private router: Router, private studentService: StudentService) { }

  ngOnInit(): void {
  }

  getALLStudent(){
    this.studentService.getStudent().subscribe(res=>{console.log("all students",res)})
  }

  insertData(){
    this.studentService.insertData(this.firstname,this.lastname,this.ssid).subscribe(res=>{
      console.log('insert complete ',res)
    })
  }

  deleteStudent(){
    this.studentService.deleteStudent(this.ssid).subscribe(res=>{
      console.log('delete complete ',res)
    })
  }
}
