import {Component, Inject, Renderer2} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {test} from "../Model/test";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  uploadFormGroup = new FormGroup({
    file: new FormControl(null, [Validators.required, Validators.pattern("[^ ]+\.xls")]),
    semestr11 : new FormControl("", [Validators.pattern("^[1-9]*[.,]?[0-9]+$"), Validators.required]),
    semestr12 : new FormControl("", [Validators.pattern("^[1-9]*[.,]?[0-9]+$"), Validators.required]),
    semestr21 : new FormControl("", [Validators.pattern("^[1-9]*[.,]?[0-9]+$"), Validators.required]),
    semestr22 : new FormControl("", [Validators.pattern("^[1-9]*[.,]?[0-9]+$"), Validators.required])});
  uploadFormGroup2 = new FormGroup({
    file: new FormControl(null, [Validators.required, Validators.pattern("[^ ]+\.xls")])});
  hid1 = true
  hid2 = true;
  data = true;
  constructor(private renderer2: Renderer2,
              @Inject(DOCUMENT) private document: Document) {
  }
  ngOnInit(): void {
    const textScript = this.renderer2.createElement('script');
    textScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js';
    this.renderer2.appendChild(this.document.body, textScript);
    const srcScript = this.renderer2.createElement('script');
    srcScript.type = 'text/javascript';
    srcScript.text = `
    (function() {
      console.log('Hello from Siberia!')
    }());
  `;
    this.renderer2.appendChild(this.document.body, srcScript);
    console.log(this);
  }

  // $(document).ready(function(){
  //   $("#Input1").on("keyup", function() {
  //     var value = $(this).val().toLowerCase();
  //     $("#Table1 tr").filter(function() {
  //       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  //     });
  //   });
  // });





  uploadThing() {
    console.log(this.uploadFormGroup)
    console.log(this.uploadFormGroup.controls["semestr11"].value)
    try {
      this.hid1 = false
      setInterval(() => {
        this.hid1 = true;
      }, 5000);
    } catch (e) {
      this.hid2 = false
      setInterval(() => {
        this.hid2 = true;
      }, 9000);
    }
  }
  dis() {
    let boolean = false
    Object.keys(this.uploadFormGroup.controls).forEach(key => {
      // @ts-ignore
      if (!this.uploadFormGroup.get(key)?.valid) boolean = true;
    });
    return boolean;
  }
  fileControl() {
    let boolean = true
    if (this.uploadFormGroup.controls["file"].valid) boolean = false
    return boolean
  }
  semestr22Control() {
    let boolean = true
    if (this.uploadFormGroup.controls["semestr22"].valid) boolean = false
    return boolean
  }
  semestr21Control() {
    let boolean = true
    if (this.uploadFormGroup.controls["semestr21"].valid) boolean = false
    return boolean
  }
  semestr12Control() {
    let boolean = true
    if (this.uploadFormGroup.controls["semestr12"].valid) boolean = false
    return boolean
  }
  semestr11Control() {
    let boolean = true
    if (this.uploadFormGroup.controls["semestr11"].valid) boolean = false
    return boolean
  }
  dis2() {
    let boolean = true
    if (this.uploadFormGroup2.controls["file"].valid) boolean = false
    return boolean
  }
  uploadTeachers() {
    console.log(this.uploadFormGroup2)
  }





  // ети методи нужно перенести в другой компонент !!!
  data2: test[] = [
    {name: "name1"},
    {name: "name2"},
    {name: "name3"}
  ];
  name = "";
  dropThing(name: string) {
      this.name = name
  }

  uploadThingg(name: string) {
    
  }
}
