import {Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-yojana',
  templateUrl: './yojana.component.html',
  styleUrls: ['./yojana.component.css']
})
export class YojanaComponent implements OnInit {

  private paginator: MatPaginator | undefined;
  private sort: MatSort | undefined;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }


  dataSource:any = [
    {Sno: 1, ID: '4756', name:'abc',pdf_1:'first.pdf',pdf_2:'second.pdf',pdf_3:'third.pdf'},
    {Sno: 2, ID: '7896', name:'xyz', pdf_1:'first.pdf',pdf_2:'second.pdf',pdf_3:'third.pdf'},
    {Sno: 3, ID: '5623', name:'ada',pdf_1:'first.pdf',pdf_2:'second.pdf',pdf_3:'third.pdf'},
  ];
   
  displayedColumns: string[] = ['Sno', 'ID', 'Yojana Name','pdf_1','pdf_2','pdf_3','action'];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.dataSource)
  }

  displayList = false

  openCreate(){
    this.displayList = false
  }

  gotoList(){
    this.displayList = true
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // if (this.paginator && this.sort) {
    //   this.applyFilter("");
    // }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
