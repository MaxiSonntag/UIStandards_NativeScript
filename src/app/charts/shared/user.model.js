"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, age, registered) {
        this.name = name;
        this.age = age;
        this.registered = registered;
    }
    User.prototype.toString = function () {
        return this.name + " is " + this.age + " years old - registered: " + this.registered;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUtJLGNBQVksSUFBWSxFQUFFLEdBQVcsRUFBRSxVQUFnQjtRQUNuRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQTtRQUNkLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFBO0lBQ2hDLENBQUM7SUFFRCx1QkFBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsMkJBQTJCLEdBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQTtJQUN0RixDQUFDO0lBQ0wsV0FBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVXNlcntcbiAgICBuYW1lOiBTdHJpbmdcbiAgICBhZ2U6IG51bWJlclxuICAgIHJlZ2lzdGVyZWQ6IERhdGVcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IFN0cmluZywgYWdlOiBudW1iZXIsIHJlZ2lzdGVyZWQ6IERhdGUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuYWdlID0gYWdlXG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZCA9IHJlZ2lzdGVyZWRcbiAgICB9XG4gICAgXG4gICAgdG9TdHJpbmcoKSA6IFN0cmluZ3tcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSArIFwiIGlzIFwiICsgdGhpcy5hZ2UgKyBcIiB5ZWFycyBvbGQgLSByZWdpc3RlcmVkOiBcIit0aGlzLnJlZ2lzdGVyZWRcbiAgICB9XG59Il19