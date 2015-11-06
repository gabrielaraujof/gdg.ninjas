var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var angular2_2 = require('angular2/angular2');
var header_1 = require('./components/header/header');
var GDGApp = (function () {
    function GDGApp() {
        this.siteName = 'GDG Aracaju';
    }
    GDGApp = __decorate([
        angular2_2.Component({
            selector: 'gdg-app'
        }),
        angular2_2.View({
            directives: [header_1.GDGHeader],
            templateUrl: './app/app.html'
        }), 
        __metadata('design:paramtypes', [])
    ], GDGApp);
    return GDGApp;
})();
exports.GDGApp = GDGApp;
angular2_1.bootstrap(GDGApp);
