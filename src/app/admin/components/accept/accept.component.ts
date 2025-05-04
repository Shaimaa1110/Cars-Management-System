import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { admin_Service } from '../../serves.service';


@Component({
  selector: 'app-accept',
  standalone: false,
  templateUrl: './accept.component.html',
  styleUrl: './accept.component.scss'
})
export class AcceptComponent implements OnInit{list:any=[];
  v1:any;
   constructor(private Serves:admin_Service,private router: Router,private http:HttpClient){}
   ngOnInit(): void {
     this.Serves.get_data('clients').subscribe((d:any)=>{this.list=d;
   
       console.log(d)},(e:any)=>{console.log(e)})
   }

 yes(i:any){let i1=0;
   i1=this.list[i].id;
   this.list[i].Aproval_Status='approved'; 
   this.Serves.post_accept({"fullName":this.list[i].fullName,"email":this.list[i].email,"password":this.list[i].email,"type":"client","id":this.list[i].id }).subscribe((d:any)=>{

   console.log(d.email)},(e:any)=>{console.log(e)})
   this.list.splice(i,1);

   
 
 }
 no(i:any){let i1=0;
   i1=this.list[i].id;
   this.Serves.dalete_users(i1).subscribe((d:any)=>{
   console.log(d)},(e:any)=>{console.log(e)})
   this.list.splice(i,1);
   
   }
   pageSize = 7; 
 currentPage = 1;
 
 get paginatedList() {
   const start = (this.currentPage - 1) * this.pageSize;
   return this.list.slice(start, start + this.pageSize);
 }
 
 get totalPages() {
   return Math.ceil(this.list.length / this.pageSize);
 }
 
 changePage(page: number) {
   if (page >= 1 && page <= this.totalPages) {
     this.currentPage = page;
   }
 }
 }
 
