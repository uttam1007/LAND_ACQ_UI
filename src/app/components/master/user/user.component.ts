import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiServiceService } from '../../../service/api-service.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements AfterViewInit {

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

  dataSource: any
  Obj = {}

  displayedColumns: string[] = ['Sno', 'name', 'username', 'email', 'number', 'action'];

  constructor(private service: ApiServiceService) {

  }

  readData: any

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {

    this.getAlldata();

  }

  save() {
    if (this.Obj['name'] == null || this.Obj['username'] == null || this.Obj['email'] == null || this.Obj['password'] == null || this.Obj['number'] == null) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Plz fill all field !'
      })
    } else {
      if (this.ValidateEmail(this.Obj['email']) == true && this.ValidatePassword(this.Obj['password'])) {
        this.service.createData(this.Obj).subscribe(() => {
          Swal.fire({
            icon: 'success',
            title: 'success',
            text: 'Successfully Submited'
          })
        })
      } else {
        if (this.ValidateEmail(this.Obj['email']) == false) {
          Swal.fire({
            icon: 'info',
            title: 'Error',
            text: "You have entered an invalid email address!"
          })
        } else {
          Swal.fire({
            icon: 'info',
            title: 'Error',
            text: "Conform Password does not match with Password"
          })
        }
      }
    }
  }

  // function to validate email
  ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
      return true;
    }
    else {
      return false;
    }
  }

  // function to compare password
  ValidatePassword(pass){
    if(this.Obj['conPassword'] == pass){
      return true
    }else{
      return false
    }
  }

  // getAll data
  getAlldata() {
    this.service.getAllData().subscribe((res) => {
      this.readData = res
      this.dataSource = new MatTableDataSource(this.readData)
    })
  }

  passwordDisplay = false

  togglePassDisplay() {
    this.passwordDisplay = !this.passwordDisplay
  }

  ConPasswordDisplay = false

  toggleConPassDisplay() {
    this.ConPasswordDisplay = !this.ConPasswordDisplay
  }

  displayList = false

  goToList() {
    this.displayList = false
  }

  openCreate() {
    this.displayList = true
  }


  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // if (this.paginator && this.sort) {
    //   this.applyFilter('');
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