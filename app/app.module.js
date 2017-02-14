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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
//import { RouterModule, Routes } from '@angular/router';
var home_component_1 = require('./home.component');
var app_routing_1 = require('./app.routing');
var horacio_component_1 = require('./horacio.component');
var rosanna_component_1 = require('./rosanna.component');
var alumni_component_1 = require('./alumni.component');
var events_component_1 = require('./events.component');
var admission_component_1 = require('./admission.component');
var state_select_component_1 = require('./state-select.component');
var horacio_calendar_component_1 = require('./horacio-calendar.component');
var under_construction_component_1 = require('./under-construction.component');
var test_php_component_1 = require('./test-php.component');
var http_1 = require('@angular/http');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_1.routing, http_1.HttpModule],
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, horacio_component_1.HoracioComponent, rosanna_component_1.RosannaComponent, alumni_component_1.AlumniComponent, events_component_1.EventsComponent, admission_component_1.AdmissionComponent, state_select_component_1.StateSelectComponent, horacio_calendar_component_1.HoracioCalendarComponent, under_construction_component_1.UnderConstructionComponent, test_php_component_1.TestPhpComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map