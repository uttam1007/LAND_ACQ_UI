import { AfterViewInit, Component, ViewChild, Inject, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ApiServiceService } from '../../../service/api-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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

  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  dataSource: any
  Obj = {}

  displayedColumns: string[] = ['Sno', 'name', 'username', 'email', 'number', 'action'];

  constructor(private service: ApiServiceService, public dialog: MatDialog) {

  }

  readData: any

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {

    this.getAllUser();

  }

  // add user
  save() {
    if (this.Obj['name'] == null || this.Obj['userName'] == null || this.Obj['email'] == null || this.Obj['password'] == null || this.Obj['mobileNumber'] == null || this.Obj['conPassword'] == null) {
      Swal.fire({
        icon: 'info',
        title: 'info',
        text: 'Plz fill all field !'
      })
    } else {
      if (this.ValidateEmail(this.Obj['email']) == false) {
        Swal.fire({
          icon: 'info',
          title: 'info',
          text: "You have entered an invalid email address!"
        })
      } else if (this.ValidatePassword() == false) {
        Swal.fire({
          icon: 'info',
          title: 'info',
          text: "Conform Password does not match with Password"
        })
      } else if (String(this.Obj['mobileNumber']).length != 10) {
        Swal.fire({
          icon: 'info',
          title: 'info',
          text: "You have entered an invalid mobile number!"
        })
      } else {
        this.service.addUser(this.Obj).subscribe({
          next: () => {
            Swal.fire({
              icon: 'success',
              title: 'success',
              text: 'Successfully Submited'
            })
            this.getAllUser();
          },
          error: () => {
            Swal.fire({
              icon: 'error',
              title: 'error',
              text: 'Something Went Wrong !'
            })
          }
        })
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
  ValidatePassword() {
    if (this.Obj['password'] == this.Obj['conPassword']) {
      return true
    } else {
      return false
    }
  }

  // get user data
  getAllUser() {
    this.service.getAllUser().subscribe((res) => {
      this.readData = res
      this.dataSource = new MatTableDataSource(this.readData)
    })
  }

  // delete user
  deleteUser(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.service.deleteUser(id).subscribe({
          next: () => {
            this.getAllUser();
          },
          error: () => {
            Swal.fire({
              icon: 'error',
              title: 'error',
              text: 'Something Went Wrong !'
            })
          }
        })
        
        Swal.fire(
          'Deleted!',
          'Your data has been deleted.',
          'success'
        )
      }
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

  openDialog(i: any): void {
    const dialogRef = this.dialog.open(updateDialog, {
      width: '600px',
      data: this.readData[i]
    });
    dialogRef.afterClosed()
  }
}

// update-dialog-html
@Component({
  selector: 'update-dialog',
  templateUrl: './update-dialog.html',
})
export class updateDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<updateDialog>, @Inject(MAT_DIALOG_DATA) public Obj1: any, private service: ApiServiceService) { }

  ngOnInit(): void {
    this.Obj = { ...this.Obj1 }
  }

  // update user
  Obj = {}
  updateUser() {
    this.dialogRef.close();
    this.service.updateUser(this.Obj["id"], this.Obj).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'success',
          text: 'Updated Successfully'
        }).then(function () {
          location.reload()
        })
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'error',
          text: 'Something Went Wrong !'
        })
      }
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}