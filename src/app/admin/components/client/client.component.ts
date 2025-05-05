import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { admin_Service } from '../../serves.service';

@Component({
  selector: 'app-client',
  standalone: false,
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent implements OnInit {
  searchText: any = '';
  list_yes: any[] = [];       
  list_serch: any[] = [];     
  pageSize = 7;
  currentPage = 1;

  constructor(private Serves: admin_Service, private router: Router) {}

  ngOnInit(): void {
    this.Serves.get_data("users").subscribe(
      (data: any) => {
        console.log(data);

       
        this.list_yes = data.filter((user: any) => user.type === 'client');

        this.list_serch = [...this.list_yes]; 
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  list_yes_filtered() {
    if (!this.searchText) {
      this.list_serch = [...this.list_yes];
    } else {
      const search = this.searchText.toLowerCase();
      this.list_serch = this.list_yes.filter(item =>
        item.fullName?.toLowerCase().startsWith(search)
      );
    }
    this.currentPage = 1;
  }

  get paginatedList() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.list_serch.slice(start, start + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.list_serch.length / this.pageSize);
  }

  get totalPagesArray(): number[] {
    return Array(this.totalPages).fill(0).map((_, i) => i + 1);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  hoverEffect(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    target.style.transform = 'scale(1.05)';
    target.style.backgroundColor = '#fbc02d';
    target.style.boxShadow = '3px 3px 15px rgba(0, 0, 0, 0.2)';
  }
}
