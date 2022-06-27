import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { FileUploaderService } from 'src/app/service/file-uploader.service';
import Swal from 'sweetalert2';

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


  dataSource: any = [];

  displayedColumns: string[] = ['Sno', 'ID', 'Yojana Name', 'pdf_1', 'pdf_2', 'pdf_3', 'action'];

  constructor(private service: ApiServiceService,private fileUploadService:FileUploaderService ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.dataSource)
  }

  displayList = false

  openCreate() {
    this.displayList = false
  }

  gotoList() {
    this.displayList = true
  }

  loading:boolean = false
  document:{dhara4:any,dhara6:any,award:any}|any = {}


  setDhar4(event){
    this.document['dhara4'] = event.target.files[0]
    console.log("dhara 4 is selected")
  }
  setDhar6(event){
    this.document['dhara6'] = event.target.files[0]
    console.log("dhar 6 selected")
  }
  setAward(event){
    this.document['award'] = event.target.files[0]
    console.log("award doc selected")
  }
  onUpload(id,document,url) {
    this.loading = !this.loading;
    return this.fileUploadService.upload(document,`${url}/${id}`)
  }
    // .subscribe(
    //     (event: any) => {
    //         if (typeof (event) === 'object') {
    //             this.loading = false; // Flag variable
    //         }
    //     }
    // );

  Obj = {}
  uploadDoc4(id){
    this.onUpload(id,this.document.dhara4,"/yojana/doc4").subscribe({
      next:()=>{
        Swal.fire("Uploaded","Dhara 4 doc uploaded","success")
        this.uploadDoc6(id)
      },
      error:()=>{}
    })
  }

  uploadDoc6(id){
    this.onUpload(id,this.document.dhara6,"/yojana/doc6").subscribe({
      next:()=>{
        Swal.fire("Uploaded","Dhara 6 doc uploaded","success")
        this.uploadAwardDoc(id)
      },
      error:()=>{}
    })
  }

  uploadAwardDoc(id){
    this.onUpload(id,this.document.award,"/yojana/award-doc").subscribe({
      next:()=>{
        Swal.fire("Uploaded","Award doc uploaded","success")
      },
      error:()=>{}
    })
  }

  addYojana() {
    console.log("button clicked")
    this.service.yojanaAdd(this.Obj).subscribe({
      next: (res) => {
        Swal.fire({
          icon: 'success',
          title: 'success',
          text: 'Successfully Submited'
        })
        const id = res.data.id
        this.uploadDoc4(id)
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
