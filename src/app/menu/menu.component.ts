import {Component, Inject, Renderer2} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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

  }

  uploadThing() {
    console.log(this.uploadFormGroup)
    console.log(this.uploadFormGroup.controls["semestr11"].value)
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
}
