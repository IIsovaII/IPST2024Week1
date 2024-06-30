class Worker_ {
  private _name: string;
  private _surname: string;
  private _rate: number;
  private _days: number;

  constructor(name, surname, rate, days) {
    this._name = name;
    this._surname = surname;
    this._rate = rate;
    this._days = days;
  }

  set rate(value: number) {
    this._rate = value;
  }
  set days(value: number) {
    this._days = value;
  }

  get name() {
    return this._name;
  }
  get surname() {
    return this._surname;
  }
  get rate() {
    return this._rate;
  }
  get days() {
    return this._days;
  }

  getSalary() {
    return this._rate * this._days;
  }
}

let worker_: Worker_ = new Worker_("Tom", "Smith", 10, 31);
console.log(worker_.name);
console.log(worker_.getSalary());

console.log(worker_.rate);
worker_.rate = 90;
console.log(worker_.rate);
