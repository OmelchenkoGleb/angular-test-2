import {FormControl, Validators} from "@angular/forms";
import {Teachers} from "./teachers";

export class All_data {
  name: string
  semestr: number
  LL: number
  PP: number
  L: number
  I: number
  E: number
  Z: number
  M: number
  Q: number
  G: number
  R: number
  D: number
  F: number
  GG: number
  GGPP: number
  GGL: number
  GGk: number
  GGKPP: number
  GGKL: number
  BB: number
  K: number
  BBk: number
  KK: number
  P: number
  PK: number
  obsyag: number
  type: number
  choose: number

  teachers: Object


  constructor(
    name: string,
    semestr: number,
    LL: number,
    PP: number,
    L: number,
    I: number,
    E: number,
    Z: number,
    M: number,
    Q: number,
    G: number,
    R: number,
    D: number,
    F: number,
    GG: number,
    GGPP: number,
    GGL: number,
    GGk: number,
    GGKPP: number,
    GGKL: number,
    BB: number,
    K: number,
    BBk: number,
    KK: number,
    P: number,
    PK: number,
    obsyag: number,
    type: number,
    choose: number,
    teachers: Object
  ) {
    this.name = name
    this.semestr = semestr
    this.LL = LL
    this.PP = PP
    this.L = L
    this.I = I
    this.E = E
    this.Z = Z
    this.M = M
    this.Q = Q
    this.G = G
    this.R = R
    this.D = D
    this.F = F
    this.GG = GG
    this.GGPP = GGPP
    this.GGL = GGL
    this.GGk = GGk
    this.GGKPP = GGKPP
    this.GGKL = GGKL
    this.BB = BB
    this.K = K
    this.BBk = BBk
    this.KK = KK
    this.P = P
    this.PK = PK
    this.obsyag = obsyag
    this.type = type
    this.choose = choose
    this.teachers = teachers
  }
}
