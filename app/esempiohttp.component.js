"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var esempiohttp_service_1 = require('../app/service/esempiohttp.service');
var core_1 = require('@angular/core');
var EsempioHttpComponent = (function () {
    function EsempioHttpComponent(_esempio) {
        this._esempio = _esempio;
    }
    EsempioHttpComponent.prototype.ngOnInit = function () {
        this.getPostsComponent();
    };
    EsempioHttpComponent.prototype.getPostsComponent = function () {
        var _this = this;
        this._esempio.getPosts().subscribe(function (result) {
            _this.articoli = result;
        }, function (error) {
            _this.messaggioerrore = error;
            if (_this.messaggioerrore !== null) {
                console.log(_this.messaggioerrore);
            }
        });
    };
    EsempioHttpComponent.prototype.pubblicaPost = function (titolo, corpo) {
        this._esempio.pubblicaPost(titolo, corpo).subscribe(function (response) { console.log('OK'); }, function (error) { console.log('ERROR'); });
    };
    EsempioHttpComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/view/esempiohttp.html',
            providers: [esempiohttp_service_1.EsempioHttpService]
        }), 
        __metadata('design:paramtypes', [esempiohttp_service_1.EsempioHttpService])
    ], EsempioHttpComponent);
    return EsempioHttpComponent;
}());
exports.EsempioHttpComponent = EsempioHttpComponent;
//# sourceMappingURL=esempiohttp.component.js.map