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
  uploadThingFormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    semestr : new FormControl("", [Validators.required]),
    LL : new FormControl("", [Validators.required]),
    PP : new FormControl("", [Validators.required]),
    L : new FormControl("", [Validators.required]),
    I: new FormControl("", [Validators.required]),
    E : new FormControl("", [Validators.required]),
    Z : new FormControl("", [Validators.required]),
    M : new FormControl("", [Validators.required]),
    Q : new FormControl("", [Validators.required]),
    G : new FormControl("", [Validators.required]),
    R : new FormControl("", [Validators.required]),
    D : new FormControl("", [Validators.required]),
    F : new FormControl("", [Validators.required]),
    GG: new FormControl("", [Validators.required]),
    GGPP : new FormControl("", [Validators.required]),
    GGL : new FormControl("", [Validators.required]),
    GGk : new FormControl("", [Validators.required]),
    GGKPP : new FormControl("", [Validators.required]),
    GGKL : new FormControl("", [Validators.required]),
    BB : new FormControl("", [Validators.required]),
    K : new FormControl("", [Validators.required]),
    BBk : new FormControl("", [Validators.required]),
    KK : new FormControl("", [Validators.required]),
    P : new FormControl("", [Validators.required]),
    PK : new FormControl("", [Validators.required]),
    obsyag: new FormControl("", [Validators.required]),
    type : new FormControl("", [Validators.required]),
    choose : new FormControl("", [Validators.required])
  });
  uploadThingg(arg: test) {
    if (arg == null){
      // @ts-ignore
      this.uploadThingFormGroup = new FormGroup({
        name: new FormControl("", [Validators.required]),
        semestr : new FormControl("", [Validators.required]),
        LL : new FormControl("", [Validators.required]),
        PP : new FormControl("", [Validators.required]),
        L : new FormControl("", [Validators.required]),
        I: new FormControl("", [Validators.required]),
        E : new FormControl("", [Validators.required]),
        Z : new FormControl("", [Validators.required]),
        M : new FormControl("", [Validators.required]),
        Q : new FormControl("", [Validators.required]),
        G : new FormControl("", [Validators.required]),
        R : new FormControl("", [Validators.required]),
        D : new FormControl("", [Validators.required]),
        F : new FormControl("", [Validators.required]),
        GG: new FormControl("", [Validators.required]),
        GGPP : new FormControl("", [Validators.required]),
        GGL : new FormControl("", [Validators.required]),
        GGk : new FormControl("", [Validators.required]),
        GGKPP : new FormControl("", [Validators.required]),
        GGKL : new FormControl("", [Validators.required]),
        BB : new FormControl("", [Validators.required]),
        K : new FormControl("", [Validators.required]),
        BBk : new FormControl("", [Validators.required]),
        KK : new FormControl("", [Validators.required]),
        P : new FormControl("", [Validators.required]),
        PK : new FormControl("", [Validators.required]),
        obsyag: new FormControl("", [Validators.required]),
        type : new FormControl("", [Validators.required]),
        choose : new FormControl("", [Validators.required])
      });

    } else {
      // @ts-ignore
      this.uploadThingFormGroup = new FormGroup({
        name: new FormControl(arg.name, [Validators.required]),
        semestr : new FormControl("", [Validators.required]),
        LL : new FormControl("", [Validators.required]),
        PP : new FormControl("", [Validators.required]),
        L : new FormControl("", [Validators.required]),
        I: new FormControl("", [Validators.required]),
        E : new FormControl("", [Validators.required]),
        Z : new FormControl("", [Validators.required]),
        M : new FormControl("", [Validators.required]),
        Q : new FormControl("", [Validators.required]),
        G : new FormControl("", [Validators.required]),
        R : new FormControl("", [Validators.required]),
        D : new FormControl("", [Validators.required]),
        F : new FormControl("", [Validators.required]),
        GG: new FormControl("", [Validators.required]),
        GGPP : new FormControl("", [Validators.required]),
        GGL : new FormControl("", [Validators.required]),
        GGk : new FormControl("", [Validators.required]),
        GGKPP : new FormControl("", [Validators.required]),
        GGKL : new FormControl("", [Validators.required]),
        BB : new FormControl("", [Validators.required]),
        K : new FormControl("", [Validators.required]),
        BBk : new FormControl("", [Validators.required]),
        KK : new FormControl("", [Validators.required]),
        P : new FormControl("", [Validators.required]),
        PK : new FormControl("", [Validators.required]),
        obsyag: new FormControl("", [Validators.required]),
        type : new FormControl("", [Validators.required]),
        choose : new FormControl("", [Validators.required])
      });
    }
  }
  // uploadThingFormGroup = new FormGroup({
  //   name: new FormControl("", [Validators.required]),
  //   semestr : new FormControl("", [Validators.required]),
  //   LL : new FormControl("", [Validators.required]),
  //   PP : new FormControl("", [Validators.required]),
  //   L : new FormControl("", [Validators.required]),
  //   I: new FormControl("", [Validators.required]),
  //   E : new FormControl("", [Validators.required]),
  //   Z : new FormControl("", [Validators.required]),
  //   M : new FormControl("", [Validators.required]),
  //   Q : new FormControl("", [Validators.required]),
  //   G : new FormControl("", [Validators.required]),
  //   R : new FormControl("", [Validators.required]),
  //   D : new FormControl("", [Validators.required]),
  //   F : new FormControl("", [Validators.required]),
  //   GG: new FormControl("", [Validators.required]),
  //   GGPP : new FormControl("", [Validators.required]),
  //   GGL : new FormControl("", [Validators.required]),
  //   GGk : new FormControl("", [Validators.required]),
  //   GGKPP : new FormControl("", [Validators.required]),
  //   GGKL : new FormControl("", [Validators.required]),
  //   BB : new FormControl("", [Validators.required]),
  //   K : new FormControl("", [Validators.required]),
  //   BBk : new FormControl("", [Validators.required]),
  //   KK : new FormControl("", [Validators.required]),
  //   P : new FormControl("", [Validators.required]),
  //   PK : new FormControl("", [Validators.required]),
  //   obsyag: new FormControl("", [Validators.required]),
  //   type : new FormControl("", [Validators.required]),
  //   choose : new FormControl("", [Validators.required])
  // });

  nameControl() {
    let boolean = true
    if (this.uploadThingFormGroup.controls["name"].valid) boolean = false
    return boolean
  }
  semestrControl() {
    let boolean = true
    if (this.uploadThingFormGroup.controls["semestr"].valid) boolean = false
    return boolean
  }
  LLControl() {
    let boolean = true
    if (this.uploadThingFormGroup.controls["LL"].valid) boolean = false
    return boolean
  }
  PPControl() {
    let boolean = true
    if (this.uploadThingFormGroup.controls["PP"].valid) boolean = false
    return boolean
  }
  LControl() {
    let boolean = true
    if (this.uploadThingFormGroup.controls["L"].valid) boolean = false
    return boolean
  }
  IControl() {
    let boolean = true
    if (this.uploadThingFormGroup.controls["I"].valid) boolean = false
    return boolean
  }
  EControl() {
    let boolean = true
    if (this.uploadThingFormGroup.controls["E"].valid) boolean = false
    return boolean
  }
  ZControl() {
    let boolean = true
    if (this.uploadThingFormGroup.controls["Z"].valid) boolean = false
    return boolean
  }
  MControl() {
    let boolean = true
    if (this.uploadThingFormGroup.controls["M"].valid) boolean = false
    return boolean
  }
  QControl() {
    let boolean = true
    if (this.uploadThingFormGroup.controls["Q"].valid) boolean = false
    return boolean
  }
  GControl() {
    let boolean = true
    if (this.uploadThingFormGroup.controls["G"].valid) boolean = false
    return boolean
  }
  RControl() {
    let boolean = true
    if (this.uploadThingFormGroup.controls["R"].valid) boolean = false
    return boolean
  }
  DControl() {
    let boolean = true
    if (this.uploadThingFormGroup.controls["D"].valid) boolean = false
    return boolean
  }
  FControl() {
    let boolean = true
    if (this.uploadThingFormGroup.controls["F"].valid) boolean = false
    return boolean
  }
  GGControl() {
    let boolean = true
    if (this.uploadThingFormGroup.controls["GG"].valid) boolean = false
    return boolean
  }
  GGPPControl() {
    let boolean = true
    if (this.uploadThingFormGroup.controls["GGPP"].valid) boolean = false
    return boolean
  }
  GGLControl() {
    let boolean = true
    if (this.uploadThingFormGroup.controls["GGL"].valid) boolean = false
    return boolean
  }
  GGkControl() {
    let boolean = true
    if (this.uploadThingFormGroup.controls["GGk"].valid) boolean = false
    return boolean
  }
  GGKPPControl() {
    let boolean = true
    if (this.uploadThingFormGroup.controls["GGKPP"].valid) boolean = false
    return boolean
  }
  GGKLControl() {
    let boolean = true
    if (this.uploadThingFormGroup.controls["GGKL"].valid) boolean = false
    return boolean
  }
  BBControl() {
    let boolean = true
    if (this.uploadThingFormGroup.controls["BB"].valid) boolean = false
    return boolean
  }
  KControl() {
    let boolean = true
    if (this.uploadThingFormGroup.controls["K"].valid) boolean = false
    return boolean
  }
  BBkControl() {
    let boolean = true
    if (this.uploadThingFormGroup.controls["BBk"].valid) boolean = false
    return boolean
  }
  KKControl() {
    let boolean = true
    if (this.uploadThingFormGroup.controls["KK"].valid) boolean = false
    return boolean
  }
  PControl() {
    let boolean = true
    if (this.uploadThingFormGroup.controls["P"].valid) boolean = false
    return boolean
  }
  PKControl() {
    let boolean = true
    if (this.uploadThingFormGroup.controls["PK"].valid) boolean = false
    return boolean
  }
  obsyagControl() {
    let boolean = true
    if (this.uploadThingFormGroup.controls["obsyag"].valid) boolean = false
    return boolean
  }
  disabled0() {
    let boolean = false
    Object.keys(this.uploadThingFormGroup.controls).forEach(key => {
      // @ts-ignore
      if (!this.uploadThingFormGroup.get(key)?.valid) boolean = true;
    });
    return boolean;
  }

  updateThing() {

    console.log(this.uploadThingFormGroup)
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
}
