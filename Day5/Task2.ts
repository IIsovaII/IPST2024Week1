class MyString {
  private _value: string;
  constructor(value: string) {
    this._value = value;
  }
  get value() {
    return this._value;
  }
  set value(value: string) {
    this._value = value;
  }
  public reverse() {
    return this._value.split("").reverse().join("");
  }
  public ucFirst() {
    return this._value.charAt(0).toUpperCase() + this._value.slice(1);
  }
  public ucWords() {
    return this._value
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
}

let str = new MyString("Tom likes apples");

console.log(str.value);
str.value = "tom likes oranges";
console.log(str.value);
console.log(str.reverse());
console.log(str.ucFirst());
console.log(str.ucWords());
