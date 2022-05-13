import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {

    var header = document.getElementById("myDIV");
    var btns = header.getElementsByClassName("link");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
      });
    }

  }

  toggleSidebar(key: any, value: any, removeKey1: any, removeValue1: any, removeKey2: any, removeValue2: any, removeKey3: any, removeValue3: any, removeKey4: any, removeValue4: any) {
    const resSidebar = document.querySelector(key)
    resSidebar.classList.toggle(value)

    const remMenu_1 = document.querySelector(removeKey1);
    remMenu_1.classList.remove(removeValue1)

    const remMenu_2 = document.querySelector(removeKey2);
    remMenu_2.classList.remove(removeValue2)

    const remMenu_3 = document.querySelector(removeKey3);
    remMenu_3.classList.remove(removeValue3)

    const remMenu_4 = document.querySelector(removeKey4);
    remMenu_4.classList.remove(removeValue4)
  }

  /* */
  toggle_1(key1: any, value1: any, key2: any, value2: any, removeKey1: any, removeValue1: any, removeKey2: any, removeValue2: any) {
    const resMenu_1 = document.querySelector(key1)
    resMenu_1.classList.toggle(value1)

    const arrRes_1 = document.querySelector(key2);
    arrRes_1.classList.toggle(value2)

    const remMenu_1 = document.querySelector(removeKey1);
    remMenu_1.classList.remove(removeValue1)

    const remMenu_2 = document.querySelector(removeKey2);
    remMenu_2.classList.remove(removeValue2)
  }

  toggle_2(key1: any, value1: any, key2: any, value2: any, removeKey1: any, removeValue1: any, removeKey2: any, removeValue2: any) {
    const resMenu_1 = document.querySelector(key1)
    resMenu_1.classList.toggle(value1)

    const arrRes_2 = document.querySelector(key2);
    arrRes_2.classList.toggle(value2)

    const remMenu_1 = document.querySelector(removeKey1);
    remMenu_1.classList.remove(removeValue1)

    const remMenu_2 = document.querySelector(removeKey2);
    remMenu_2.classList.remove(removeValue2)
  }

}
