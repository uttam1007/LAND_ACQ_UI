import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  toggleSidebar(key: any, value: any) {
    const resSidebar = document.querySelector(key)
    resSidebar.classList.toggle(value)
  }


  toggleSubMenu(key: any, value: any, removeKey: any, removeValue: any) {
    const resSubmenu = document.querySelector(key)
    resSubmenu.classList.toggle(value)

    const removeMenu = document.querySelector(removeKey)
    removeMenu?.classList.remove(removeValue)
  }

  toggleInnerSubMenu(key: any, value: any){
    const resInnerMenu = document.querySelector(key)
    resInnerMenu.classList.toggle(value)
  }
}
