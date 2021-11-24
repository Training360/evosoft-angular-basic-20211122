var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeter = (function () {
    function Greeter(name) {
        if (name === void 0) { name = ''; }
        this.name = '';
        this.name = name;
    }
    Greeter.prototype.greet = function () {
        return "Hi, my name is ".concat(this.name, "!");
    };
    return Greeter;
}());
var myGreet = new Greeter('Joe');
console.log(myGreet.greet());
var names = [
    'Orsi',
    'Peti',
    'Józsi',
];
var users = [
    {
        name: 'Kiss Géza',
        age: 44
    },
    {
        name: 'Nagy Péter'
    },
];
console.log(users[1].age);
var newOrder = [3, 'hűtő', false];
var order;
order = [1, 'vasaló', true];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var Status;
(function (Status) {
    Status[Status["Active"] = 5] = "Active";
    Status[Status["Disabled"] = 6] = "Disabled";
    Status[Status["Terminated"] = 10] = "Terminated";
})(Status || (Status = {}));
;
console.log(Status.Disabled);
var test = 5;
console.log(test.toPrecision(2));
var calculator = function (a) {
    console.log(Math.pow(a, 2));
};
var value1 = 'this is a string';
var strLength = value1.length;
function printLabel(labelObject) {
    console.log(labelObject.label);
}
var myObj = {
    size: 40,
    label: 'Size'
};
printLabel(myObj);
var p1 = { x: 10, y: 20 };
var conf = {
    color: 'red',
    width: 200
};
conf.color;
conf['maci'];
var Leader = (function () {
    function Leader() {
    }
    return Leader;
}());
var Employee = (function () {
    function Employee() {
        this.height = 180;
        this.weigth = 100;
        this.eyecolor = 'brown';
    }
    return Employee;
}());
var Boss = (function (_super) {
    __extends(Boss, _super);
    function Boss() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Boss;
}(Employee));
//# sourceMappingURL=basic.js.map