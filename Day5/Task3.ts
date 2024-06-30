class calculation {
  private _calculationLine: String;

  public setterCalculationLine(value) {
    this._calculationLine = value;
  }
  public setLastSymbolCalculationLine(char) {
    this._calculationLine += char;
  }
  public gettercalCulationLine() {
    return this._calculationLine;
  }
  public lastSymbol() {
    return this._calculationLine[this._calculationLine.length - 1];
  }
  public deleteLastSymbol() {
    this._calculationLine = this._calculationLine.slice(
      0,
      this._calculationLine.length - 1,
    );
  }
}

let calc = new calculation();
calc.setterCalculationLine("Tomsk");

console.log(calc.gettercalCulationLine());
console.log(calc.lastSymbol());

calc.setLastSymbolCalculationLine("a");
console.log(calc.gettercalCulationLine());

calc.deleteLastSymbol();
console.log(calc.gettercalCulationLine());
