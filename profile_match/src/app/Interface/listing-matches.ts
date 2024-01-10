export interface IProfileList {
  matched:number,
  viewed:number,
  yetToView:number,
  data:IAllMatchList
}

export interface IAllMatchList {
  [key: string]: Match[]
}

interface Match {
  id: number;
  name: string;
  age: number;
  height: string;
  degree: string;
  caste: string;
  city: string;
  state: string;
  isPrimeUser: boolean;
}


export interface ProfileInfo {
  id: Number;
  name: String;
  age: Number;
  height: String;
  degree: String;
  caste: String;
  city: String;
  state: String;
  isPrimeUser: Boolean;
}
