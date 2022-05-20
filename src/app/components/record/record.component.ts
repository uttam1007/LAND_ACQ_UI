import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  constructor() { }

  values_1 = [{date: "",bigha:"",biswa:"",biwansi:"",hectare:""}];
  values_2 = [{date: "",bigha:"",biswa:"",biwansi:"",hectare:""}];
  values_3 = [{date: "",bigha:"",biswa:"",biwansi:"",hectare:""}];
  values_4 = [{}];
  values_5 = [{date: "",viwaran:""}];
  values_6 = [{}];
  values_7 = [{}]
  values_8 = [{}]
  values_9 = [{}]
  values_10 = [{}]
  values_11 = [{}]
  values_12 = [{}]
  values_13 = [{}]
  values_14 = [{}]
  values_15 = [{}]

  ngOnInit(): void {
 
  }

  removevalue_1(i: number){
    this.values_1.splice(i,1);
  }
  addvalue_1(){
    this.values_1.push({date: "",bigha:"",biswa:"",biwansi:"",hectare:""});
  }

  removevalue_2(i: number){
    this.values_2.splice(i,1);
  }
  addvalue_2(){
    this.values_2.push({date: "",bigha:"",biswa:"",biwansi:"",hectare:""});
  }

  removevalue_3(i: number){
    this.values_3.splice(i,1);
  }
  addvalue_3(){
    this.values_3.push({date: "",bigha:"",biswa:"",biwansi:"",hectare:""});
  }

  removevalue_4(i: number){
    this.values_4.splice(i,1);
  }
  addvalue_4(){
    this.values_4.push({});
  }

  removevalue_5(i: number){
    this.values_5.splice(i,1);
  }
  addvalue_5(){
    this.values_5.push({date: "",viwaran:""});
  }

  removevalue_6(i: number){
    this.values_6.splice(i,1);
  }
  addvalue_6(){
    this.values_6.push({});
  }

  removevalue_7(i: number){
    this.values_7.splice(i,1);
  }
  addvalue_7(){
    this.values_7.push({});
  }

  removevalue_8(i: number){
    this.values_8.splice(i,1);
  }
  addvalue_8(){
    this.values_8.push({});
  }

  removevalue_9(i: number){
    this.values_9.splice(i,1);
  }
  addvalue_9(){
    this.values_9.push({});
  }

  removevalue_10(i: number){
    this.values_10.splice(i,1);
  }
  addvalue_10(){
    this.values_10.push({});
  }

  removevalue_11(i: number){
    this.values_11.splice(i,1);
  }
  addvalue_11(){
    this.values_11.push({});
  }

  removevalue_12(i: number){
    this.values_12.splice(i,1);
  }
  addvalue_12(){
    this.values_12.push({});
  }

  removevalue_13(i: number){
    this.values_13.splice(i,1);
  }
  addvalue_13(){
    this.values_13.push({});
  }

  removevalue_14(i: number){
    this.values_14.splice(i,1);
  }
  addvalue_14(){
    this.values_14.push({});
  }

  removevalue_15(i: number){
    this.values_15.splice(i,1);
  }
  addvalue_15(){
    this.values_15.push({});
  }

}