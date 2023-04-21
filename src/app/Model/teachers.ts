export class Teachers{
  id: number;
  name: string | null;
  email: string | null;
  jobtitle: string | null;
  bid: number;

  constructor(id: number,name: string,email: string,jobtitle: string,bid: number) {
    this.id = id
    this.name = name
    this.email = email
    this.jobtitle = jobtitle
    this.bid = bid
  }
}


