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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUtJLGNBQVksSUFBWSxFQUFFLEdBQVcsRUFBRSxVQUFnQjtRQUNuRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQTtRQUNkLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFBO0lBQ2hDLENBQUM7SUFFRCx1QkFBUSxHQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLDJCQUEyQixHQUFDLElBQUksQ0FBQyxVQUFVLENBQUE7SUFDdEYsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQWRZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFVzZXJ7XG4gICAgbmFtZTogU3RyaW5nXG4gICAgYWdlOiBudW1iZXJcbiAgICByZWdpc3RlcmVkOiBEYXRlXG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBTdHJpbmcsIGFnZTogbnVtYmVyLCByZWdpc3RlcmVkOiBEYXRlKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLmFnZSA9IGFnZVxuICAgICAgICB0aGlzLnJlZ2lzdGVyZWQgPSByZWdpc3RlcmVkXG4gICAgfVxuICAgIFxuICAgIHRvU3RyaW5nKCkgOiBTdHJpbmd7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgKyBcIiBpcyBcIiArIHRoaXMuYWdlICsgXCIgeWVhcnMgb2xkIC0gcmVnaXN0ZXJlZDogXCIrdGhpcy5yZWdpc3RlcmVkXG4gICAgfVxufSJdfQ==