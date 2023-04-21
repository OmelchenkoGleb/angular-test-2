import {Component, Inject, Renderer2} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {test} from "../Model/test";
import {Teachers} from "../Model/teachers";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {All_data} from "../Model/all_data";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  uploadFormGroup = new FormGroup({
    file: new FormControl(null, [Validators.required, Validators.pattern("[^ ]+\.xls")]),
    semestr11: new FormControl("", [Validators.pattern("^[1-9]*[.,]?[0-9]+$"), Validators.required]),
    semestr12: new FormControl("", [Validators.pattern("^[1-9]*[.,]?[0-9]+$"), Validators.required]),
    semestr21: new FormControl("", [Validators.pattern("^[1-9]*[.,]?[0-9]+$"), Validators.required]),
    semestr22: new FormControl("", [Validators.pattern("^[1-9]*[.,]?[0-9]+$"), Validators.required])
  });
  uploadFormGroup2 = new FormGroup({
    file: new FormControl(null, [Validators.required, Validators.pattern("[^ ]+\.xls")])
  });
  hid1 = true
  hid2 = true;
  data = true;

  constructor(private renderer2: Renderer2,
              @Inject(DOCUMENT) private document: Document,
              private http: HttpClient
  ) {
  }


  teachers: Teachers[] = []


  all_dataSemestr1: All_data[] = []

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


    // викладачі
    this.http.get<Teachers[]>("http://localhost:8080/getteachers").subscribe({
      next: ((response: any) => {
        console.log(response)
        this.teachers = response
      }),
      error: (error => {
        console.log(error)
      })
    })



    // усі предмети
    this.http.get<All_data[]>("http://localhost:8080/getall_dataSemestr1").subscribe({
      next: ((response: any) => {
        console.log("!")
        console.log(response)
        this.all_dataSemestr1 = response
      }),
      error: (error => {
        console.log(error)
      })
    })
  }


  fileToUploadd: File | undefined;

  handleFileInput2(event: Event) {
    // @ts-ignore
    this.fileToUploadd = <File>event.target.files[0];
  }


  uploadThing() {
    if (this.uploadFormGroup.controls["file"].valid) {
      const formdata = new FormData()
      // @ts-ignore
      formdata.append("file", this.fileToUploadd, this.fileToUploadd?.name)
      // @ts-ignore
      formdata.append("semestr11", this.uploadFormGroup.controls["semestr11"].value)
      // @ts-ignore
      formdata.append("semestr12", this.uploadFormGroup.controls["semestr12"].value)
      // @ts-ignore
      formdata.append("semestr21", this.uploadFormGroup.controls["semestr21"].value)
      // @ts-ignore
      formdata.append("semestr22", this.uploadFormGroup.controls["semestr22"].value)
      this.http.post<Teachers[]>("http://localhost:8080/loadthings", formdata, {
        observe: 'response',
      }).subscribe({
        next: ((response: any) => {
          this.hid1 = false
          setInterval(() => {
            this.hid1 = true;
          }, 5000);
        }),
        error: (error => {
          this.hid2 = false
          setInterval(() => {
            this.hid2 = true;
          }, 9000);
        })
      })
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

  fileToUpload: File | undefined;

  handleFileInput1(event: Event) {
    // @ts-ignore
    this.fileToUpload = <File>event.target.files[0];
  }


  uploadTeachers() {


    if (this.uploadFormGroup2.controls["file"].valid) {
      const formdata = new FormData()
      // @ts-ignore
      formdata.set("file", this.fileToUpload, this.fileToUpload?.name)
      this.http.post<any>("http://localhost:8080/loadteachers", formdata, {
        observe: 'response',
      }).subscribe({
        next: ((response: any) => {
          this.hid1 = false
          setInterval(() => {
            this.hid1 = true;
          }, 5000);
          this.teachers = response.body
        }),
        error: (error => {
          this.hid2 = false
          setInterval(() => {
            this.hid2 = true;
          }, 9000);
        })
      })
    }

  }


  name = "";

  dropThing(name: string) {
    this.name = name
  }

  uploadThingFormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    semestr: new FormControl("", [Validators.required]),
    LL: new FormControl("", [Validators.required]),
    PP: new FormControl("", [Validators.required]),
    L: new FormControl("", [Validators.required]),
    I: new FormControl("", [Validators.required]),
    E: new FormControl("", [Validators.required]),
    Z: new FormControl("", [Validators.required]),
    M: new FormControl("", [Validators.required]),
    Q: new FormControl("", [Validators.required]),
    G: new FormControl("", [Validators.required]),
    R: new FormControl("", [Validators.required]),
    D: new FormControl("", [Validators.required]),
    F: new FormControl("", [Validators.required]),
    GG: new FormControl("", [Validators.required]),
    GGPP: new FormControl("", [Validators.required]),
    GGL: new FormControl("", [Validators.required]),
    GGk: new FormControl("", [Validators.required]),
    GGKPP: new FormControl("", [Validators.required]),
    GGKL: new FormControl("", [Validators.required]),
    BB: new FormControl("", [Validators.required]),
    K: new FormControl("", [Validators.required]),
    BBk: new FormControl("", [Validators.required]),
    KK: new FormControl("", [Validators.required]),
    P: new FormControl("", [Validators.required]),
    PK: new FormControl("", [Validators.required]),
    obsyag: new FormControl("", [Validators.required]),
    type: new FormControl("", [Validators.required]),
    choose: new FormControl("", [Validators.required])
  });

  uploadThingg(arg?: test) {
    if (arg != null) {
      // @ts-ignore
      this.uploadThingFormGroup = new FormGroup({
        name: new FormControl(arg.name, [Validators.required]),
        semestr: new FormControl("", [Validators.required]),
        LL: new FormControl("", [Validators.required]),
        PP: new FormControl("", [Validators.required]),
        L: new FormControl("", [Validators.required]),
        I: new FormControl("", [Validators.required]),
        E: new FormControl("", [Validators.required]),
        Z: new FormControl("", [Validators.required]),
        M: new FormControl("", [Validators.required]),
        Q: new FormControl("", [Validators.required]),
        G: new FormControl("", [Validators.required]),
        R: new FormControl("", [Validators.required]),
        D: new FormControl("", [Validators.required]),
        F: new FormControl("", [Validators.required]),
        GG: new FormControl("", [Validators.required]),
        GGPP: new FormControl("", [Validators.required]),
        GGL: new FormControl("", [Validators.required]),
        GGk: new FormControl("", [Validators.required]),
        GGKPP: new FormControl("", [Validators.required]),
        GGKL: new FormControl("", [Validators.required]),
        BB: new FormControl("", [Validators.required]),
        K: new FormControl("", [Validators.required]),
        BBk: new FormControl("", [Validators.required]),
        KK: new FormControl("", [Validators.required]),
        P: new FormControl("", [Validators.required]),
        PK: new FormControl("", [Validators.required]),
        obsyag: new FormControl("", [Validators.required]),
        type: new FormControl("", [Validators.required]),
        choose: new FormControl("", [Validators.required])
      });

    } else {
      // @ts-ignore
      this.uploadThingFormGroup = new FormGroup({
        name: new FormControl("", [Validators.required]),
        semestr: new FormControl("", [Validators.required]),
        LL: new FormControl("", [Validators.required]),
        PP: new FormControl("", [Validators.required]),
        L: new FormControl("", [Validators.required]),
        I: new FormControl("", [Validators.required]),
        E: new FormControl("", [Validators.required]),
        Z: new FormControl("", [Validators.required]),
        M: new FormControl("", [Validators.required]),
        Q: new FormControl("", [Validators.required]),
        G: new FormControl("", [Validators.required]),
        R: new FormControl("", [Validators.required]),
        D: new FormControl("", [Validators.required]),
        F: new FormControl("", [Validators.required]),
        GG: new FormControl("", [Validators.required]),
        GGPP: new FormControl("", [Validators.required]),
        GGL: new FormControl("", [Validators.required]),
        GGk: new FormControl("", [Validators.required]),
        GGKPP: new FormControl("", [Validators.required]),
        GGKL: new FormControl("", [Validators.required]),
        BB: new FormControl("", [Validators.required]),
        K: new FormControl("", [Validators.required]),
        BBk: new FormControl("", [Validators.required]),
        KK: new FormControl("", [Validators.required]),
        P: new FormControl("", [Validators.required]),
        PK: new FormControl("", [Validators.required]),
        obsyag: new FormControl("", [Validators.required]),
        type: new FormControl("", [Validators.required]),
        choose: new FormControl("", [Validators.required])
      });
    }
  }

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

  // используется два раза так что будут разные данные и разные для них свапы . Не забыть !
  data2: test[] = [
    {name: "name1"},
    {name: "name2"},
    {name: "name3"}
  ];
  textSumbitSwapSemestr = "Другий семестр"

  swapSemestr() {
    console.log(this.teachers)

    if (this.textSumbitSwapSemestr == "Другий семестр") {
      this.data2 = [
        {name: "name4"},
        {name: "name5"},
        {name: "name6"}
      ];
      this.textSumbitSwapSemestr = "Перший семестр"
    } else {
      this.data2 = [
        {name: "name1"},
        {name: "name2"},
        {name: "name3"}
      ];
      this.textSumbitSwapSemestr = "Другий семестр"
    }
  }

  chooseTeacherFormGroup = new FormGroup({
    choose: new FormControl("", [Validators.required])
  })

  chooseTeacher() {
    console.log(this.choose)
    console.log(this.chooseTeacherFormGroup)
  }

  choose = ""

  chooseTeacherr(arg: test) {
    this.choose = arg.name
  }

  checkChoose() {
    let boolean = true
    if (this.chooseTeacherFormGroup.controls["choose"].valid) boolean = false
    return boolean
  }


  deleteThings() {
    this.http.get<any>("http://localhost:8080/deletethings").subscribe({
      next: ((response: any) => {
        this.hid1 = false
        setInterval(() => {
          this.hid1 = true;
        }, 5000);
      }),
      error: (error => {
        this.hid2 = false
        setInterval(() => {
          this.hid2 = true;
        }, 9000);
      })
    })
  }


  deleteTeachers() {
    this.http.get<Teachers[]>("http://localhost:8080/deleteteachers").subscribe({
      next: ((response: any) => {
        this.hid1 = false
        setInterval(() => {
          this.hid1 = true;
        }, 5000);
        this.teachers = response.body
      }),
      error: (error => {
        this.hid2 = false
        setInterval(() => {
          this.hid2 = true;
        }, 9000);
      })
    })
  }


  nameTeacher: any;
  idTeacher: any;


  dropTeacher(teacher: Teachers) {
    this.idTeacher = teacher.id
    this.nameTeacher = teacher.name
  }


  deleteTeacher() {
    let formdata = new FormData()
    // @ts-ignore
    formdata.append("id", this.idTeacher)
    this.http.post<Teachers[]>("http://localhost:8080/deleteteacher", formdata, {
      observe: 'response',
    }).subscribe({
      next: ((response: any) => {
        this.teachers = response.body
        this.hid1 = false
        setInterval(() => {
          this.hid1 = true;
        }, 5000);
      }),
      error: (error => {
        alert("Видалення пройшло не успішно")
        this.hid2 = false
        setInterval(() => {
          this.hid2 = true;
        }, 9000);
      })
    })

    // this.http.get<Teachers[]>("http://localhost:8080/getteachers").subscribe({
    //   next : ((response: any) => {
    //     console.log(response)
    //     this.teachers = response
    //   }),
    //   error : (error => {
    //     console.log(error)
    //   })
    // })
  }


  updateFormGroupTeacher = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.required]),
    jobtitle: new FormControl("", [Validators.required]),
    bid: new FormControl("", [Validators.required])
  });

  updateTeacher() {
    console.log(this.teacher.id)
    this.teacher.name = this.updateFormGroupTeacher.controls["name"].value
    this.teacher.email = this.updateFormGroupTeacher.controls["email"].value
    this.teacher.jobtitle = this.updateFormGroupTeacher.controls["jobtitle"].value
    this.teacher.bid = Number(this.updateFormGroupTeacher.controls["bid"].value)
    this.http.post<Teachers>("http://localhost:8080/addteacher", this.teacher, {
      observe: 'response',
    }).subscribe({
      next: ((response: any) => {
        this.teachers = response.body
        this.hid1 = false
        setInterval(() => {
          this.hid1 = true;
        }, 5000);
      }),
      error: (error => {
        alert("Додавання пройшло не успішно")
        this.hid2 = false
        setInterval(() => {
          this.hid2 = true;
        }, 9000);
      })
    })
  }

  nameTeacherControl() {
    let boolean = true
    if (this.updateFormGroupTeacher.controls["name"].valid) boolean = false
    return boolean
  }

  emailTeacherControl() {
    let boolean = true
    if (this.updateFormGroupTeacher.controls["email"].valid) boolean = false
    return boolean
  }

  jobtitleTeacherControl() {
    let boolean = true
    if (this.updateFormGroupTeacher.controls["jobtitle"].valid) boolean = false
    return boolean
  }

  bidTeacherControl() {
    let boolean = true
    if (this.updateFormGroupTeacher.controls["bid"].valid) boolean = false
    return boolean
  }

  disabledUpdateTeacher() {
    let boolean = false
    Object.keys(this.updateFormGroupTeacher.controls).forEach(key => {
      // @ts-ignore
      if (!this.updateFormGroupTeacher.get(key)?.valid) boolean = true;
    });
    return boolean;
  }

  teacher = new Teachers(0,"","","",0)
  updateFormGroupTeacherr = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.required]),
    jobtitle: new FormControl("", [Validators.required]),
    bid: new FormControl("", [Validators.required])
  });
  nameTeacherControll() {
    let boolean = true
    if (this.updateFormGroupTeacherr.controls["name"].valid) boolean = false
    return boolean
  }

  emailTeacherControll() {
    let boolean = true
    if (this.updateFormGroupTeacherr.controls["email"].valid) boolean = false
    return boolean
  }

  jobtitleTeacherControll() {
    let boolean = true
    if (this.updateFormGroupTeacherr.controls["jobtitle"].valid) boolean = false
    return boolean
  }

  bidTeacherControll() {
    let boolean = true
    if (this.updateFormGroupTeacherr.controls["bid"].valid) boolean = false
    return boolean
  }

  disabledUpdateTeacherr() {
    let boolean = false
    Object.keys(this.updateFormGroupTeacherr.controls).forEach(key => {
      // @ts-ignore
      if (!this.updateFormGroupTeacherr.get(key)?.valid) boolean = true;
    });
    return boolean;
  }
  uploadTeacher(arg?: Teachers) {
    if (arg) {
      this.teacher = arg
    } else {
      this.teacher = new Teachers(0,"","","",0)
    }
  }

  updateTeacherr() {
    this.teacher.name = this.updateFormGroupTeacherr.controls["name"].value
    this.teacher.email = this.updateFormGroupTeacherr.controls["email"].value
    this.teacher.jobtitle = this.updateFormGroupTeacherr.controls["jobtitle"].value
    this.teacher.bid = Number(this.updateFormGroupTeacherr.controls["bid"].value)
    this.http.post<Teachers>("http://localhost:8080/addteacher", this.teacher, {
      observe: 'response',
    }).subscribe({
      next: ((response: any) => {
        this.teachers = response.body
        this.hid1 = false
        setInterval(() => {
          this.hid1 = true;
        }, 5000);
      }),
      error: (error => {
        alert("Додавання пройшло не успішно")
        this.hid2 = false
        setInterval(() => {
          this.hid2 = true;
        }, 9000);
      })
    })
  }
}
