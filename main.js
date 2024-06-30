var Worker_ = /** @class */ (function () {
    function Worker_(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }
    Object.defineProperty(Worker_.prototype, "rate", {
        get: function () {
            return this._rate;
        },
        set: function (value) {
            this._rate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Worker_.prototype, "days", {
        get: function () {
            return this._days;
        },
        set: function (value) {
            this._days = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Worker_.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Worker_.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        enumerable: false,
        configurable: true
    });
    Worker_.prototype.getSalary = function () {
        return this._rate * this._days;
    };
    return Worker_;
}());
var worker_ = new Worker_("Tom", "Smith", 10, 31);
console.log(worker_.name);
console.log(worker_.getSalary());
console.log(worker_.rate);
worker_.rate = 90;
console.log(worker_.rate);
