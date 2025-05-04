import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Car } from '../../../models/car.model';
import { admin_Service } from '../../serves.service';

@Component({
  selector: 'app-models',
standalone:false,
  templateUrl: './models.component.html',
  styleUrl: './models.component.css'
})
export class ModelsComponent implements OnInit{
  constructor(private Serves:admin_Service) {}
  list1:any[]=[]
  list:any[]=[]
  ngOnInit(): void {
    this.Serves.get_data('cars').subscribe(
      (data: any[]) => { this.list1 = [];   this.list = []; 
        this.list1 = data;
      
  
        for (let i = 0; i < this.list1.length; i++) {
         
  
         
          const exists = this.list.some(item => item.model === this.list1[i].model);
  
          if (!exists) {
            this.list.unshift(this.list1[i]);
            console.log(this.list);
          }
        }
  
        console.log(this.list[0].model); 
  
      
      },
      (e: any) => {
        console.log(e);
      }
    );
  }
  


  currentPage = 1;
  itemsPerPage = 7;
  
  get pagedList() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.list.slice(start, start + this.itemsPerPage);
  }
  
  get totalPages() {
    return Math.ceil(this.list.length / this.itemsPerPage);
  }
  
  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }
  
  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }
  

  deleteItem(indexInPage: number) {
    const actualIndex = (this.currentPage - 1) * this.itemsPerPage + indexInPage;
    const idToDelete = this.list[actualIndex].id;
  
    this.Serves.dalete_model(idToDelete).subscribe(() => {
      this.list.splice(actualIndex, 1);
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
      }
    });
  }
  get totalPagesArray(): number[] {
    return Array(this.totalPages).fill(0).map((_, i) => i + 1);
  }
  
  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
  
}
