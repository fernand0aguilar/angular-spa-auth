(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/angular-spa-auth/angular-spa-auth/src/main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_global_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/global.variables */ "5Bsy");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function HeaderComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Favorites");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_18_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(globals, authService, router) {
        this.globals = globals;
        this.authService = authService;
        this.router = router;
        this.isAuthenticated = false;
    }
    ngOnInit() {
        this.marvel = this.globals.MARVEL_URL;
        this.userSubscription = this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user;
            console.log("Authenticated: ", this.isAuthenticated, !!user);
        });
    }
    onLogout() {
        this.authService.logout();
    }
    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_global_variables__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 20, vars: 3, consts: [["routerLink", "comics", 1, "marvel"], [1, "marvel-side"], [1, "navbar"], [1, "navbar-nav"], [1, "nav-links"], [1, "nav-item"], ["routerLink", "comics", "routerLinkActive", "active", 1, "nav-link"], ["class", "nav-link", "routerLink", "favorites", "routerLinkActive", "active", 4, "ngIf"], [1, "auth"], ["class", "btn-group", 4, "ngIf", "ngIfElse"], ["logout", ""], ["routerLink", "favorites", "routerLinkActive", "active", 1, "nav-link"], [1, "btn-group"], ["routerLink", "login", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "signup", "routerLinkActive", "active", 1, "nav-item", "nav-link"], [1, "nav-item", "nav-link", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Marvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Comics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Comics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_a_15_Template, 2, 0, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HeaderComponent_div_17_Template, 7, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HeaderComponent_ng_template_18_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated)("ngIfElse", _r2);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["@font-face {\n  font-family: Marvel-Regular;\n  src: url('MarvelRegular-Dj83.ttf');\n  font-weight: normal;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Regular;\n  src: url('Roboto-Regular.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Bold;\n  src: url('Roboto-Bold.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Condensed-Regular;\n  src: url('RobotoCondensed-Regular.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Condensed-Bold;\n  src: url('RobotoCondensed-Bold.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-size: 2.25rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-size: 2rem;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-size: 1.75rem;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-size: 1.5rem;\n}\nh5[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-size: 1.25rem;\n}\nh6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-size: 1rem;\n}\nnav[_ngcontent-%COMP%], header[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #202020;\n}\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-top: 0.5rem;\n}\nheader[_ngcontent-%COMP%]   .marvel[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\nheader[_ngcontent-%COMP%]   .marvel-side[_ngcontent-%COMP%] {\n  padding: 0.35rem 0 0 0.2rem;\n}\nheader[_ngcontent-%COMP%]   .marvel-side[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-family: Marvel-Regular;\n  font-size: 2.5rem;\n  line-height: 2rem;\n  letter-spacing: 0.07rem;\n  text-transform: uppercase;\n}\nnav[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\nnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\nnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\nnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .auth[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\nnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .auth[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\nnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .auth[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #E62429;\n}\nnav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%] {\n  background: #E62429;\n  font-family: Marvel-Regular;\n  text-transform: uppercase;\n  padding: 0.1rem 0.1rem 0 0.1rem;\n  font-size: 1.8rem;\n}\nnav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active), nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover:not(.active) {\n  color: #E62429;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX2ZvbnRzLnNjc3MiLCIuLi8uLi8uLi8uLi9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL19zaXplcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fY29sb3JzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLDJCQVBZO0VBUVosa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDRCxrQ0FBQTtBQ05EO0FEU0E7RUFDRSwyQkFmZTtFQWdCZiw4QkFBQTtFQUNBLG1DQUFBO0VBQ0Qsa0NBQUE7QUNQRDtBRFVBO0VBQ0Usd0JBckJZO0VBc0JaLDJCQUFBO0VBQ0EsbUNBQUE7RUFDRCxrQ0FBQTtBQ1JEO0FEV0E7RUFDRSxxQ0EzQnlCO0VBNEJ6Qix1Q0FBQTtFQUNBLG1DQUFBO0VBQ0Qsa0NBQUE7QUNURDtBRFlBO0VBQ0Usa0NBakNzQjtFQWtDdEIsb0NBQUE7RUFDQSxtQ0FBQTtFQUNELGtDQUFBO0FDVkQ7QUN6QkU7RUFDRSxlQU5lO0VBT2Ysa0JBQUE7QUQyQko7QUM3QkU7RUFDRSxlQUdpQjtFQUZqQixlQUFBO0FEZ0NKO0FDbENFO0VBQ0UsZUFHaUI7RUFGakIsa0JBQUE7QURxQ0o7QUN2Q0U7RUFDRSxlQUdpQjtFQUZqQixpQkFBQTtBRDBDSjtBQzVDRTtFQUNFLGVBR2lCO0VBRmpCLGtCQUFBO0FEK0NKO0FDakRFO0VBQ0UsZUFHaUI7RUFGakIsZUFBQTtBRG9ESjtBQTFEQTtFQUNFLFdBQUE7RUFDQSx5QkVDWTtBRjREZDtBQTFEQTtFR3NCRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFSHRCQSxtQkFBQTtBQStERjtBQTlERTtFQUNFLGlCQUFBO0FBZ0VKO0FBOURFO0VBQ0UsMkJBQUE7QUFnRUo7QUEvREk7RUFDRSxjRVJFO0VGU0YsMkJEaEJRO0VDa0JSLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBZ0VOO0FBM0RBO0VBQ0UsYUFBQTtBQThERjtBQTdERTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtBQStESjtBQTdESTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFR05KLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VITUksU0FBQTtBQWlFTjtBQTlESTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQWdFTjtBQTlETTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBZ0VSO0FBL0RRO0VBQ0UsY0VoREc7QUZpSGI7QUEzREU7O0VBRUUsbUJFeERTO0VGeURULDJCRHhEVTtFQ3lEVix5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7QUE2REo7QUExREU7O0VBRUUsY0VqRVM7QUY2SGIiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGRpcjogJy4uLy4uL2Fzc2V0cy9mb250cy8nO1xuJG1hcnZlbC1mb250OiBNYXJ2ZWwtUmVndWxhcjtcbiRyb2JvdG8tcmVndWxhcjogUm9ib3RvLVJlZ3VsYXI7XG4kcm9ib3RvLWJvbGQ6IFJvYm90by1Cb2xkO1xuJHJvYm90by1jb25kZW5zZWQtcmVndWxhcjogUm9ib3RvLUNvbmRlbnNlZC1SZWd1bGFyO1xuJHJvYm90by1jb25kZW5zZWQtYm9sZDogUm9ib3RvLUNvbmRlbnNlZC1Cb2xkO1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICRtYXJ2ZWwtZm9udDtcbiAgc3JjOiB1cmwoJyN7JGRpcn0vTWFydmVsRm9udC9NYXJ2ZWxSZWd1bGFyLURqODMudHRmJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJHJvYm90by1yZWd1bGFyO1xuICBzcmM6IHVybCgnI3skZGlyfS9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmJyk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICRyb2JvdG8tYm9sZDtcbiAgc3JjOiB1cmwoJyN7JGRpcn0vUm9ib3RvL1JvYm90by1Cb2xkLnR0ZicpO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAkcm9ib3RvLWNvbmRlbnNlZC1yZWd1bGFyO1xuICBzcmM6IHVybCgnI3skZGlyfS9Sb2JvdG9Db25kZW5zZWQvUm9ib3RvQ29uZGVuc2VkLVJlZ3VsYXIudHRmJyk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICRyb2JvdG8tY29uZGVuc2VkLWJvbGQ7XG4gIHNyYzogdXJsKCcjeyRkaXJ9L1JvYm90b0NvbmRlbnNlZC9Sb2JvdG9Db25kZW5zZWQtQm9sZC50dGYnKTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cblxuIiwiQHVzZSAnaW5kZXgnIGFzICo7XG5cbm5hdiwgaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRtYXJ2ZWwtZ3JleTtcbn1cblxuaGVhZGVyIHtcbiAgQGluY2x1ZGUgZmxleC1jZW50ZXItY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICAubWFydmVsIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuICAubWFydmVsLXNpZGUge1xuICAgIHBhZGRpbmc6IDAuMzVyZW0gMCAwIDAuMnJlbTtcbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICBmb250LWZhbWlseTogJG1hcnZlbC1mb250O1xuXG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDdyZW07XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbiAgfVxufVxuXG5uYXYge1xuICBwYWRkaW5nOiAxcmVtO1xuICAubmF2YmFyLW5hdiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuXG4gICAgLm5hdi1saW5rcyB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIEBpbmNsdWRlIGZsZXgtY2VudGVyLWNlbnRlcjtcbiAgICAgIGdhcDogMXJlbTtcbiAgICB9XG5cbiAgICAuYXV0aCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgICAgLmJ0bi1ncm91cCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogMC41cmVtO1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogJG1hcnZlbC1yZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5uYXYtaXRlbSBhLmFjdGl2ZSxcbiAgLm5hdi1pdGVtLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogJG1hcnZlbC1yZWQ7XG4gICAgZm9udC1mYW1pbHk6ICRtYXJ2ZWwtZm9udDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHBhZGRpbmc6IDAuMXJlbSAwLjFyZW0gMCAwLjFyZW07XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gIH1cblxuICAubmF2LWl0ZW0gYTpob3Zlcjpub3QoLmFjdGl2ZSksXG4gIC5uYXYtaXRlbTpob3Zlcjpub3QoLmFjdGl2ZSkge1xuICAgIGNvbG9yOiAkbWFydmVsLXJlZDtcbiAgfVxuXG59XG5cbiIsIiRmb250LXNpemUtYmFzZSA6IDE2cHg7XG4kZm9udC1zaXplLXVwcGVyIDogMzZweDtcbiRmb250LXNpemUtZGVjIDogNHB4O1xuXG4kaGVhZGluZ3MgOiBoMSBoMiBoMyBoNCBoNSBoNjtcbkBlYWNoICRoZWFkaW5nIGluICRoZWFkaW5nc3tcbiAgI3skaGVhZGluZ30ge1xuICAgIGZvbnQtc2l6ZSA6ICRmb250LXNpemUtdXBwZXI7XG4gICAgZm9udC1zaXplIDogKCRmb250LXNpemUtdXBwZXIgLyAkZm9udC1zaXplLWJhc2UpICsgcmVtO1xuICB9XG4gICRmb250LXNpemUtdXBwZXIgOiAkZm9udC1zaXplLXVwcGVyIC0gJGZvbnQtc2l6ZS1kZWM7XG59XG4iLCIkbWFydmVsLXJlZDogI0U2MjQyOTsgLy8gRUMxRDI0XG4kbWFydmVsLXdoaXRlOiAjRENEQ0RDO1xuJG1hcnZlbC1mb250LXdoaXRlOiAjRkVGRUZFO1xuJG1hcnZlbC1ibGFjazogIzIwMjAyMDtcblxuJG1hcnZlbC1ncmV5OiAjMjAyMDIwO1xuJG1hcnZlbC1kYXJrLWdyZXk6ICMxNTE1MTU7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiIsIkB1c2UgJy4vY29sb3JzJyBhcyBjO1xuQHVzZSAnLi9mb250cycgYXMgZjtcbkB1c2UgJy4vc2l6ZXMnIGFzIHM7XG5cbkBtaXhpbiBtYXJ2ZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjLiRtYXJ2ZWwtcmVkO1xuICBwYWRkaW5nOiAwLjM1cmVtIDAuMXJlbSAwIDAuMXJlbTtcblxuICBzcGFuIHtcbiAgICBjb2xvcjogYy4kbWFydmVsLWZvbnQtd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IGYuJG1hcnZlbC1mb250O1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cblxuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5AbWl4aW4gdzEwMGgxMDAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5AbWl4aW4gZmxleC1jZW50ZXItY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbkBtaXhpbiBjYXJkLXN0eWxlIHtcbiAgcGFkZGluZzogM3JlbSAzcmVtIDNyZW0gMnJlbTtcbiAgYmFja2dyb3VuZDogYy4kd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMCAzcmVtIHJnYmEoYy4kbWFydmVsLWJsYWNrLCAwLjQ1KTtcbiAgYm9yZGVyLWxlZnQ6IDFyZW0gc29saWQgYy4kbWFydmVsLXJlZDtcbn1cblxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3JtKSB7XG4gIHRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gIC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAtbXMtdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAtby10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRkdXJhdGlvbikge1xuICB0cmFuc2l0aW9uOiAkZHVyYXRpb247XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJGR1cmF0aW9uO1xuICAtbW96LXRyYW5zaXRpb246ICRkdXJhdGlvbjtcbiAgLW1zLXRyYW5zaXRpb246ICRkdXJhdGlvbjtcbiAgLW8tdHJhbnNpdGlvbjogJGR1cmF0aW9uO1xufVxuIl19 */"] });


/***/ }),

/***/ "5Bsy":
/*!********************************************!*\
  !*** ./src/app/shared/global.variables.ts ***!
  \********************************************/
/*! exports provided: GlobalConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalConstants", function() { return GlobalConstants; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class GlobalConstants {
    constructor() {
        this.MARVEL_URL = "https://www.marvel.com/";
        this.MARVEL_DEVELOPER_URL = "https://developer.marvel.com/";
        this.MARVEL_ABOUT_URL = "https://www.marvel.com/corporate/about";
        this.GOOGLE_SIGNUP_URL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
        this.GOOGLE_VERIFY_URL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
        this.FIREBASE_DATABASE_URL = 'https://angular-spa-marvel-default-rtdb.firebaseio.com/';
        this.BREAKPOINT_TABLET = 900;
        this.BREAKPOINT_MOBILE = 520;
        this.API_REQUEST_LIMIT = 40; // max 100
    }
}
GlobalConstants.ɵfac = function GlobalConstants_Factory(t) { return new (t || GlobalConstants)(); };
GlobalConstants.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlobalConstants, factory: GlobalConstants.ɵfac });


/***/ }),

/***/ "878Y":
/*!******************************************!*\
  !*** ./src/app/model/character.model.ts ***!
  \******************************************/
/*! exports provided: Character */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return Character; });
// reference: https://developer.marvel.com/documentation/entity_types
class Character {
    constructor(id, name, resourceURI, description, thumbnail) {
        this.id = id;
        this.name = name;
        this.resourceURI = resourceURI;
        this.description = description;
        this.thumbnail = thumbnail;
    }
}


/***/ }),

/***/ "ADft":
/*!**************************************!*\
  !*** ./src/app/model/comic.model.ts ***!
  \**************************************/
/*! exports provided: Comic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comic", function() { return Comic; });
class Comic {
    constructor(id, digitalId, title, description, isbn, issn, upc, diamondCode, pageCount, printPrice, digitalPurchasePrice, saleDate, focDate, issuePreviewText, resourceURI, thumbnailURI, marvelDetailLink, creators, characters) {
        this.id = id;
        this.digitalId = digitalId;
        this.title = title;
        this.description = description;
        this.isbn = isbn;
        this.issn = issn;
        this.upc = upc;
        this.diamondCode = diamondCode;
        this.pageCount = pageCount;
        this.printPrice = printPrice;
        this.digitalPurchasePrice = digitalPurchasePrice;
        this.saleDate = saleDate;
        this.focDate = focDate;
        this.issuePreviewText = issuePreviewText;
        this.resourceURI = resourceURI;
        this.thumbnailURI = thumbnailURI;
        this.marvelDetailLink = marvelDetailLink;
        this.creators = creators;
        this.characters = characters;
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    MARVEL_BASE_URL: "https://gateway.marvel.com",
    MARVEL_API_PUBLIC_KEY: "961ed5491a9fc99083c8cc3033feecbd",
    MARVEL_API_PRIVATE_KEY: "01731978868fa44628260bfe672dcc809846a537",
    GOOGLE_API_KEY: "AIzaSyDmTJRXzY-tTlJR7dwxjx7aZrcIKBB89mM"
};


/***/ }),

/***/ "HKC/":
/*!*******************************************************************!*\
  !*** ./src/app/components/comic-detail/comic-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: ComicDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicDetailComponent", function() { return ComicDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_status_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/status.service */ "LYZi");
/* harmony import */ var src_app_service_comic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/comic.service */ "lubP");
/* harmony import */ var src_app_service_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/data-storage.service */ "is9J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ComicDetailComponent_div_0_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("| DIGITAL ID ", ctx_r1.comic.digitalId, "");
} }
function ComicDetailComponent_div_0_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.comic.description, " ");
} }
function ComicDetailComponent_div_0_div_24_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, type_r15.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r15.value.join(", "));
} }
function ComicDetailComponent_div_0_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Praise those incredible creators:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ComicDetailComponent_div_0_div_24_div_4_Template, 6, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx_r3.creatorsMap));
} }
function ComicDetailComponent_div_0_p_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "FOC-Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ctx_r4.comic.focDate, "longDate"));
} }
function ComicDetailComponent_div_0_p_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pages:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.comic.pageCount);
} }
function ComicDetailComponent_div_0_p_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Price (print):");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r6.comic.printPrice));
} }
function ComicDetailComponent_div_0_p_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Price (digital):");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.comic.digitalPurchasePrice);
} }
function ComicDetailComponent_div_0_p_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ISBN:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.comic.isbn);
} }
function ComicDetailComponent_div_0_p_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ISSN:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.comic.issn);
} }
function ComicDetailComponent_div_0_p_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "UPC:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.comic.upc);
} }
function ComicDetailComponent_div_0_p_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Diamond Code:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.comic.diamondCode);
} }
function ComicDetailComponent_div_0_a_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r12.comic.marvelDetailLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "View on Marvel.com"));
} }
function ComicDetailComponent_div_0_div_40_figure_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const character_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", character_r17.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Image of ", character_r17.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](character_r17.name);
} }
function ComicDetailComponent_div_0_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Characters of this comic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ComicDetailComponent_div_0_div_40_figure_4_Template, 4, 3, "figure", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.comic.characters);
} }
function ComicDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComicDetailComponent_div_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.favorComic(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "figure", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ComicDetailComponent_div_0_span_16_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ComicDetailComponent_div_0_p_17_Template, 2, 1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Published:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ComicDetailComponent_div_0_div_24_Template, 6, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Further information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ComicDetailComponent_div_0_p_30_Template, 5, 4, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ComicDetailComponent_div_0_p_31_Template, 4, 1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ComicDetailComponent_div_0_p_32_Template, 5, 3, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ComicDetailComponent_div_0_p_33_Template, 4, 1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ComicDetailComponent_div_0_p_35_Template, 4, 1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ComicDetailComponent_div_0_p_36_Template, 4, 1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ComicDetailComponent_div_0_p_37_Template, 4, 1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ComicDetailComponent_div_0_p_38_Template, 4, 1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ComicDetailComponent_div_0_a_39_Template, 3, 4, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ComicDetailComponent_div_0_div_40_Template, 5, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx_r0.backgroundImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.user)("ngClass", ctx_r0.isFavorite ? "favored" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u2764\uFE0F ", !ctx_r0.isFavorite ? "I LIKE THIS" : "DISLIKE", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.comic.thumbnailURI, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Cover of ", ctx_r0.comic.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.comic.marvelDetailLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.comic.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ID ", ctx_r0.comic.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.comic.digitalId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.comic.description != "" || ctx_r0.comic.description != null || ctx_r0.comic.description != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 24, ctx_r0.comic.saleDate, "longDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.comic.creators);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.comic.focDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.comic.pageCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.comic.printPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.comic.digitalPurchasePrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.comic.isbn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.comic.issn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.comic.upc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.comic.diamondCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.comic.marvelDetailLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.comic.characters && ctx_r0.comic.characters.length > 0);
} }
class ComicDetailComponent {
    constructor(statusService, comicService, dataService, router, authSerice) {
        this.statusService = statusService;
        this.comicService = comicService;
        this.dataService = dataService;
        this.router = router;
        this.authSerice = authSerice;
        this.writers = "";
        this.pencillers = "";
        this.converArtists = "";
        this.isFavorite = false;
        this.creatorsMap = new Map();
    }
    ngOnInit() {
        this.userSubscription = this.authSerice.user.subscribe(user => {
            this.user = user;
        });
        this.comicSubscription = this.statusService.getSelectedComic().subscribe((comic) => {
            if (comic.characters.length === 0) {
                this.dataService.getCharactersByComicId(comic.id);
            }
            this.comic = comic;
            this.backgroundImage = 'url(' + this.comic.thumbnailURI + ')';
            this.isFavorite = this.comicService.isFavoriteComic(this.comic.id);
            this.creatorsToMap(comic.creators);
        });
        if (this.comic === undefined) {
            this.router.navigate(["comics"]);
        }
    }
    creatorsToMap(creators) {
        this.creatorsMap.clear();
        for (const creator of creators) {
            if (!this.creatorsMap.has(creator.type)) {
                this.creatorsMap.set(creator.type, []);
            }
            this.creatorsMap.get(creator.type).push(creator.name);
        }
    }
    ngOnDestroy() {
        this.comicSubscription.unsubscribe();
        this.userSubscription.unsubscribe();
    }
    favorComic() {
        if (!this.isFavorite) {
            this.comicService.addFavorite(this.comic);
            this.isFavorite = true;
        }
        else {
            this.comicService.removeFavorite(this.comic);
            this.isFavorite = false;
        }
        this.comicService.getFavoritesSubject().subscribe(favorites => {
            this.dataService.storeFavoritesOfUser(favorites, this.user);
        }).unsubscribe();
    }
}
ComicDetailComponent.ɵfac = function ComicDetailComponent_Factory(t) { return new (t || ComicDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_status_service__WEBPACK_IMPORTED_MODULE_1__["StatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_comic_service__WEBPACK_IMPORTED_MODULE_2__["ComicService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
ComicDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComicDetailComponent, selectors: [["app-comic-detail"]], decls: 1, vars: 1, consts: [["class", "comic-detail-container", 4, "ngIf"], [1, "comic-detail-container"], [1, "bg-image"], [1, "comic-details"], [1, "main-content", "card-style"], [1, "btn", "btn-fav", 3, "disabled", "ngClass", "click"], [1, "inner-container"], [1, "thumbnail"], [3, "src", "alt"], [1, "details"], ["target", "_blank", 3, "href"], [4, "ngIf"], ["class", "section description", 4, "ngIf"], [1, "section", "published"], ["class", "section creators", 4, "ngIf"], [1, "more-details", "card-style"], [1, "general-infos"], [1, "col"], ["class", "btn btn-classic", "type", "button", "target", "_blank", 3, "href", 4, "ngIf"], ["class", "characters card-style", 4, "ngIf"], [1, "section", "description"], [1, "section", "creators"], [1, "creators-container"], ["class", "creator", 4, "ngFor", "ngForOf"], [1, "creator"], ["type", "button", "target", "_blank", 1, "btn", "btn-classic", 3, "href"], [1, "characters", "card-style"], ["class", "character", 4, "ngFor", "ngForOf"], [1, "character"]], template: function ComicDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ComicDetailComponent_div_0_Template, 41, 27, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comic);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], styles: ["@font-face {\n  font-family: Marvel-Regular;\n  src: url('MarvelRegular-Dj83.ttf');\n  font-weight: normal;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Regular;\n  src: url('Roboto-Regular.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Bold;\n  src: url('Roboto-Bold.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Condensed-Regular;\n  src: url('RobotoCondensed-Regular.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Condensed-Bold;\n  src: url('RobotoCondensed-Bold.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-size: 2.25rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-size: 2rem;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-size: 1.75rem;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-size: 1.5rem;\n}\nh5[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-size: 1.25rem;\n}\nh6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-size: 1rem;\n}\n.comic-detail-container[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 100vw;\n  overflow: hidden;\n}\n.comic-detail-container[_ngcontent-%COMP%]   .bg-image[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -99;\n  width: 100%;\n  height: 100%;\n  filter: blur(10px);\n  -webkit-filter: blur(10px);\n  transform: scale(1.1);\n  -webkit-transform: scale(1.1);\n  -moz-transform: scale(1.1);\n  -ms-transform: scale(1.1);\n  -o-transform: scale(1.1);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.comic-detail-container[_ngcontent-%COMP%]   .bg-image[_ngcontent-%COMP%]::after {\n  content: \"\\a\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: rgba(255, 255, 255, 0.6);\n  opacity: 0.8;\n}\n.comic-detail-container[_ngcontent-%COMP%]   .card-style[_ngcontent-%COMP%] {\n  padding: 3rem 3rem 3rem 2rem;\n  background: #ffffff;\n  box-shadow: 0 0 3rem rgba(32, 32, 32, 0.45);\n  border-left: 1rem solid #E62429;\n}\n.comic-detail-container[_ngcontent-%COMP%]   .comic-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  gap: 1rem;\n  padding: 1rem 15vw;\n}\n.main-content[_ngcontent-%COMP%] {\n  position: relative;\n}\n.main-content[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 2rem;\n  max-width: 100%;\n  max-height: 100%;\n}\n.main-content[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(1) {\n  flex: 1 1 40%;\n}\n.main-content[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(2) {\n  flex: 1 1 60%;\n}\n@media (max-width: 900px) {\n  .main-content[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%] {\n    flex-wrap: wrap-reverse;\n  }\n}\n.main-content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #202020;\n}\n.main-content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.main-content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .creators[_ngcontent-%COMP%]   .creators-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.5rem;\n}\n.main-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  min-width: 100px;\n  width: 50%;\n  max-width: 300px;\n  max-height: 400px;\n}\n.main-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n.more-details[_ngcontent-%COMP%]   .general-infos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2rem;\n  margin-bottom: 2rem;\n}\n.more-details[_ngcontent-%COMP%]   .general-infos[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 0.2rem;\n  font-weight: 800;\n}\n.characters[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.characters[_ngcontent-%COMP%]   .character[_ngcontent-%COMP%] {\n  min-width: 50px;\n  max-width: 180px;\n  height: 100%;\n}\n.characters[_ngcontent-%COMP%]   .character[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.btn-classic[_ngcontent-%COMP%] {\n  background: #E62429;\n  font-family: Marvel-Regular;\n  padding: 0.5rem 1rem;\n  font-size: 1.2rem;\n}\n.btn-fav[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1.5rem;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 1.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX2ZvbnRzLnNjc3MiLCIuLi8uLi8uLi8uLi9jb21pYy1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL19zaXplcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fbWl4aW5zLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLDJCQVBZO0VBUVosa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDRCxrQ0FBQTtBQ05EO0FEU0E7RUFDRSwyQkFmZTtFQWdCZiw4QkFBQTtFQUNBLG1DQUFBO0VBQ0Qsa0NBQUE7QUNQRDtBRFVBO0VBQ0Usd0JBckJZO0VBc0JaLDJCQUFBO0VBQ0EsbUNBQUE7RUFDRCxrQ0FBQTtBQ1JEO0FEV0E7RUFDRSxxQ0EzQnlCO0VBNEJ6Qix1Q0FBQTtFQUNBLG1DQUFBO0VBQ0Qsa0NBQUE7QUNURDtBRFlBO0VBQ0Usa0NBakNzQjtFQWtDdEIsb0NBQUE7RUFDQSxtQ0FBQTtFQUNELGtDQUFBO0FDVkQ7QUN6QkU7RUFDRSxlQU5lO0VBT2Ysa0JBQUE7QUQyQko7QUM3QkU7RUFDRSxlQUdpQjtFQUZqQixlQUFBO0FEZ0NKO0FDbENFO0VBQ0UsZUFHaUI7RUFGakIsa0JBQUE7QURxQ0o7QUN2Q0U7RUFDRSxlQUdpQjtFQUZqQixpQkFBQTtBRDBDSjtBQzVDRTtFQUNFLGVBR2lCO0VBRmpCLGtCQUFBO0FEK0NKO0FDakRFO0VBQ0UsZUFHaUI7RUFGakIsZUFBQTtBRG9ESjtBQTFEQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQTZERjtBQTNERTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFRWVGLFdBQUE7RUFDQSxZQUFBO0VGYkUsa0JBQUE7RUFDQSwwQkFBQTtFRTZCRixxQkYzQnFCO0VFNEJyQiw2QkY1QnFCO0VFNkJyQiwwQkY3QnFCO0VFOEJyQix5QkY5QnFCO0VFK0JyQix3QkYvQnFCO0VBRW5CLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQStESjtBQTdESTtFQUNFLGFBQUE7RUVFSixXQUFBO0VBQ0EsWUFBQTtFRkRJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7QUFnRU47QUE1REU7RUVHQSw0QkFBQTtFQUNBLG1CQzVCTTtFRDZCTiwyQ0FBQTtFQUNBLCtCQUFBO0FGNERGO0FBOURFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFFQSxrQkFBQTtBQStESjtBQTNEQTtFQUNFLGtCQUFBO0FBOERGO0FBNURFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtBQTZESjtBQTNESTtFQUNFLGFBQUE7QUE2RE47QUExREk7RUFDRSxhQUFBO0FBNEROO0FBMURJO0VBZkY7SUFnQkksdUJBQUE7RUE2REo7QUFDRjtBQXpESTtFQUNFLGNHcEVTO0FIK0hmO0FBeERJO0VBQ0UsZ0JBQUE7QUEwRE47QUF2REk7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxXQUFBO0FBeUROO0FBckRFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQXVESjtBQXJESTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQXVETjtBQWpERTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUVBLG1CQUFBO0FBbURKO0FBakRJO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtBQW1ETjtBQTdDRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQWdESjtBQTdDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUErQ0o7QUE3Q0k7RUVyR0YsV0FBQTtFQUNBLFlBQUE7QUZxSkY7QUEzQ0E7RUFDRSxtQkdwSVc7RUhxSVgsMkJEcElZO0VDcUlaLG9CQUFBO0VBRUEsaUJBQUE7QUE2Q0Y7QUExQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBRUEsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLGlCQUFBO0FBMkNGIiwiZmlsZSI6ImNvbWljLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRkaXI6ICcuLi8uLi9hc3NldHMvZm9udHMvJztcbiRtYXJ2ZWwtZm9udDogTWFydmVsLVJlZ3VsYXI7XG4kcm9ib3RvLXJlZ3VsYXI6IFJvYm90by1SZWd1bGFyO1xuJHJvYm90by1ib2xkOiBSb2JvdG8tQm9sZDtcbiRyb2JvdG8tY29uZGVuc2VkLXJlZ3VsYXI6IFJvYm90by1Db25kZW5zZWQtUmVndWxhcjtcbiRyb2JvdG8tY29uZGVuc2VkLWJvbGQ6IFJvYm90by1Db25kZW5zZWQtQm9sZDtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAkbWFydmVsLWZvbnQ7XG4gIHNyYzogdXJsKCcjeyRkaXJ9L01hcnZlbEZvbnQvTWFydmVsUmVndWxhci1EajgzLnR0ZicpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICRyb2JvdG8tcmVndWxhcjtcbiAgc3JjOiB1cmwoJyN7JGRpcn0vUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZicpO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAkcm9ib3RvLWJvbGQ7XG4gIHNyYzogdXJsKCcjeyRkaXJ9L1JvYm90by9Sb2JvdG8tQm9sZC50dGYnKTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJHJvYm90by1jb25kZW5zZWQtcmVndWxhcjtcbiAgc3JjOiB1cmwoJyN7JGRpcn0vUm9ib3RvQ29uZGVuc2VkL1JvYm90b0NvbmRlbnNlZC1SZWd1bGFyLnR0ZicpO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAkcm9ib3RvLWNvbmRlbnNlZC1ib2xkO1xuICBzcmM6IHVybCgnI3skZGlyfS9Sb2JvdG9Db25kZW5zZWQvUm9ib3RvQ29uZGVuc2VkLUJvbGQudHRmJyk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5cbiIsIkB1c2UgJ2luZGV4JyBhcyAqO1xuXG4uY29taWMtZGV0YWlsLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxMDB2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAuYmctaW1hZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtOTk7XG4gICAgQGluY2x1ZGUgdzEwMGgxMDA7XG5cbiAgICBmaWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMTBweCk7XG5cbiAgICBAaW5jbHVkZSB0cmFuc2Zvcm0oc2NhbGUoMS4xKSk7XG5cbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDonXFxBJztcbiAgICAgIEBpbmNsdWRlIHcxMDBoMTAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOjA7XG4gICAgICBsZWZ0OjA7XG4gICAgICBiYWNrZ3JvdW5kOnJnYmEoJHdoaXRlLCAwLjYpO1xuICAgICAgb3BhY2l0eTogLjg7XG4gICAgfVxuICB9XG5cbiAgLmNhcmQtc3R5bGUge1xuICAgIEBpbmNsdWRlIGNhcmQtc3R5bGU7XG4gIH1cblxuICAuY29taWMtZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDFyZW07XG5cbiAgICBwYWRkaW5nOiAxcmVtIDE1dnc7XG4gIH1cbn1cblxuLm1haW4tY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAuaW5uZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMnJlbTtcblxuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuXG4gICAgJj4qOm50aC1jaGlsZCgxKSB7XG4gICAgICBmbGV4OiAxIDEgNDAlO1xuICAgIH1cblxuICAgICY+KjpudGgtY2hpbGQoMikge1xuICAgICAgZmxleDogMSAxIDYwJTtcbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcbiAgICB9XG4gIH1cblxuICAuZGV0YWlscyB7XG4gICAgaDEgYSB7XG4gICAgICBjb2xvcjogJG1hcnZlbC1ibGFjaztcbiAgICB9XG5cbiAgICAuc2VjdGlvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIH1cblxuICAgIC5jcmVhdG9ycyAuY3JlYXRvcnMtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgZ2FwOiAwLjVyZW07XG4gICAgfVxuICB9XG5cbiAgLnRodW1ibmFpbCB7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgbWF4LWhlaWdodDogNDAwcHg7XG5cbiAgICBpbWcge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbn1cblxuLm1vcmUtZGV0YWlscyB7XG4gIC5nZW5lcmFsLWluZm9zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDJyZW07XG5cbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuXG4gICAgcCBzcGFuIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMC4ycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICB9XG4gIH1cbn1cblxuLmNoYXJhY3RlcnMge1xuICAuaW5uZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDFyZW07XG4gIH1cblxuICAuY2hhcmFjdGVyIHtcbiAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgbWF4LXdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBpbWcge1xuICAgICAgQGluY2x1ZGUgdzEwMGgxMDA7XG4gICAgfVxuICB9XG59XG5cbi5idG4tY2xhc3NpYyB7XG4gIGJhY2tncm91bmQ6ICRtYXJ2ZWwtcmVkO1xuICBmb250LWZhbWlseTogJG1hcnZlbC1mb250O1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcblxuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLmJ0bi1mYXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXJlbTtcbiAgcmlnaHQ6IDEuNXJlbTtcblxuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBmb250LXNpemU6IDEuM3JlbTtcbn1cbiIsIiRmb250LXNpemUtYmFzZSA6IDE2cHg7XG4kZm9udC1zaXplLXVwcGVyIDogMzZweDtcbiRmb250LXNpemUtZGVjIDogNHB4O1xuXG4kaGVhZGluZ3MgOiBoMSBoMiBoMyBoNCBoNSBoNjtcbkBlYWNoICRoZWFkaW5nIGluICRoZWFkaW5nc3tcbiAgI3skaGVhZGluZ30ge1xuICAgIGZvbnQtc2l6ZSA6ICRmb250LXNpemUtdXBwZXI7XG4gICAgZm9udC1zaXplIDogKCRmb250LXNpemUtdXBwZXIgLyAkZm9udC1zaXplLWJhc2UpICsgcmVtO1xuICB9XG4gICRmb250LXNpemUtdXBwZXIgOiAkZm9udC1zaXplLXVwcGVyIC0gJGZvbnQtc2l6ZS1kZWM7XG59XG4iLCJAdXNlICcuL2NvbG9ycycgYXMgYztcbkB1c2UgJy4vZm9udHMnIGFzIGY7XG5AdXNlICcuL3NpemVzJyBhcyBzO1xuXG5AbWl4aW4gbWFydmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYy4kbWFydmVsLXJlZDtcbiAgcGFkZGluZzogMC4zNXJlbSAwLjFyZW0gMCAwLjFyZW07XG5cbiAgc3BhbiB7XG4gICAgY29sb3I6IGMuJG1hcnZlbC1mb250LXdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBmLiRtYXJ2ZWwtZm9udDtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5cbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuQG1peGluIHcxMDBoMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuQG1peGluIGZsZXgtY2VudGVyLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5AbWl4aW4gY2FyZC1zdHlsZSB7XG4gIHBhZGRpbmc6IDNyZW0gM3JlbSAzcmVtIDJyZW07XG4gIGJhY2tncm91bmQ6IGMuJHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDAgM3JlbSByZ2JhKGMuJG1hcnZlbC1ibGFjaywgMC40NSk7XG4gIGJvcmRlci1sZWZ0OiAxcmVtIHNvbGlkIGMuJG1hcnZlbC1yZWQ7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybSkge1xuICB0cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gIC13ZWJraXQtdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgLW1zLXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgLW8tdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkZHVyYXRpb24pIHtcbiAgdHJhbnNpdGlvbjogJGR1cmF0aW9uO1xuICAtd2Via2l0LXRyYW5zaXRpb246ICRkdXJhdGlvbjtcbiAgLW1vei10cmFuc2l0aW9uOiAkZHVyYXRpb247XG4gIC1tcy10cmFuc2l0aW9uOiAkZHVyYXRpb247XG4gIC1vLXRyYW5zaXRpb246ICRkdXJhdGlvbjtcbn1cbiIsIiRtYXJ2ZWwtcmVkOiAjRTYyNDI5OyAvLyBFQzFEMjRcbiRtYXJ2ZWwtd2hpdGU6ICNEQ0RDREM7XG4kbWFydmVsLWZvbnQtd2hpdGU6ICNGRUZFRkU7XG4kbWFydmVsLWJsYWNrOiAjMjAyMDIwO1xuXG4kbWFydmVsLWdyZXk6ICMyMDIwMjA7XG4kbWFydmVsLWRhcmstZ3JleTogIzE1MTUxNTtcblxuJHdoaXRlOiAjZmZmZmZmO1xuIl19 */"] });


/***/ }),

/***/ "IKXF":
/*!****************************************!*\
  !*** ./src/app/model/creator.model.ts ***!
  \****************************************/
/*! exports provided: Creator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Creator", function() { return Creator; });
class Creator {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}


/***/ }),

/***/ "LS6v":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "qXBG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "bsvf");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "Qv8w");






function AuthComponent_app_login_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-login");
} }
function AuthComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sign-up");
} }
class AuthComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isLoginMode = true;
    }
    ngOnInit() {
        if (this.router.url.includes("login")) {
            this.isLoginMode = true;
        }
        else if (this.router.url.includes("signup")) {
            this.isLoginMode = false;
        }
        else {
            this.router.navigate(['home']);
        }
        this.userSubscribtion = this.authService.user.subscribe(user => {
            console.log("user: ", user);
            // this.router.navigate(['favorites'])
        });
    }
    ngOnDestroy() {
        this.userSubscribtion.unsubscribe();
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 5, vars: 2, consts: [[1, "container"], [1, "auth-card"], [4, "ngIf", "ngIfElse"], ["signup", ""]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthComponent_app_login_2_Template, 1, 0, "app-login", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AuthComponent_ng_template_3_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoginMode)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"]], styles: ["@font-face {\n  font-family: Marvel-Regular;\n  src: url('MarvelRegular-Dj83.ttf');\n  font-weight: normal;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Regular;\n  src: url('Roboto-Regular.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Bold;\n  src: url('Roboto-Bold.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Condensed-Regular;\n  src: url('RobotoCondensed-Regular.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Condensed-Bold;\n  src: url('RobotoCondensed-Bold.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-size: 2.25rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-size: 2rem;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-size: 1.75rem;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-size: 1.5rem;\n}\nh5[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-size: 1.25rem;\n}\nh6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-size: 1rem;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n}\n.container[_ngcontent-%COMP%]   .auth-card[_ngcontent-%COMP%] {\n  padding: 3rem 3rem 3rem 2rem;\n  background: #ffffff;\n  box-shadow: 0 0 3rem rgba(32, 32, 32, 0.45);\n  border-left: 1rem solid #E62429;\n}\n.form-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.form-container[_ngcontent-%COMP%]   .error-msg[_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  color: #E62429;\n  padding: 0.5rem 0 0.5rem 0.5rem;\n}\n.form-container[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 0.5rem;\n}\n.form-container[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.form-container[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  -webkit-border-radius: 0px;\n  -moz-border-radius: 0px;\n  -ms-border-radius: 0px;\n  -o-border-radius: 0px;\n  border-width: 0.1rem;\n}\n.form-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  display: flex;\n  gap: 1rem;\n}\n.form-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  text-transform: uppercase;\n  padding: 0.5rem 1rem;\n}\n.form-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  background-color: #E62429;\n  color: #FEFEFE;\n}\n.form-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:first-child) {\n  border: 0.1rem solid #202020;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX2ZvbnRzLnNjc3MiLCIuLi8uLi8uLi9hdXRoLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fc2l6ZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX21peGlucy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSwyQkFQWTtFQVFaLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0Qsa0NBQUE7QUNORDtBRFNBO0VBQ0UsMkJBZmU7RUFnQmYsOEJBQUE7RUFDQSxtQ0FBQTtFQUNELGtDQUFBO0FDUEQ7QURVQTtFQUNFLHdCQXJCWTtFQXNCWiwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Qsa0NBQUE7QUNSRDtBRFdBO0VBQ0UscUNBM0J5QjtFQTRCekIsdUNBQUE7RUFDQSxtQ0FBQTtFQUNELGtDQUFBO0FDVEQ7QURZQTtFQUNFLGtDQWpDc0I7RUFrQ3RCLG9DQUFBO0VBQ0EsbUNBQUE7RUFDRCxrQ0FBQTtBQ1ZEO0FDekJFO0VBQ0UsZUFOZTtFQU9mLGtCQUFBO0FEMkJKO0FDN0JFO0VBQ0UsZUFHaUI7RUFGakIsZUFBQTtBRGdDSjtBQ2xDRTtFQUNFLGVBR2lCO0VBRmpCLGtCQUFBO0FEcUNKO0FDdkNFO0VBQ0UsZUFHaUI7RUFGakIsaUJBQUE7QUQwQ0o7QUM1Q0U7RUFDRSxlQUdpQjtFQUZqQixrQkFBQTtBRCtDSjtBQ2pERTtFQUNFLGVBR2lCO0VBRmpCLGVBQUE7QURvREo7QUExREE7RUUyQkUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUYzQkEsYUFBQTtBQStERjtBQTdERTtFRTZCQSw0QkFBQTtFQUNBLG1CQzVCTTtFRDZCTiwyQ0FBQTtFQUNBLCtCQUFBO0FGbUNGO0FBN0RFO0VBQ0UseUJBQUE7QUFnRUo7QUE3REU7RUFDRSxjR2pCUztFSGtCVCwrQkFBQTtBQStESjtBQTNESTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBNkROO0FBM0RNO0VBQ0UsaUJBQUE7QUE2RFI7QUExRE07RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBRUEsb0JBQUE7QUEyRFI7QUF0REU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBd0RKO0FBdERJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtFQUNBLHlCQUFBO0VBRUEsb0JBQUE7QUFzRE47QUFwRE07RUFDRSx5QkcxREs7RUgyREwsY0d6RFk7QUgrR3BCO0FBbkRNO0VBQ0UsNEJBQUE7QUFxRFIiLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRkaXI6ICcuLi8uLi9hc3NldHMvZm9udHMvJztcbiRtYXJ2ZWwtZm9udDogTWFydmVsLVJlZ3VsYXI7XG4kcm9ib3RvLXJlZ3VsYXI6IFJvYm90by1SZWd1bGFyO1xuJHJvYm90by1ib2xkOiBSb2JvdG8tQm9sZDtcbiRyb2JvdG8tY29uZGVuc2VkLXJlZ3VsYXI6IFJvYm90by1Db25kZW5zZWQtUmVndWxhcjtcbiRyb2JvdG8tY29uZGVuc2VkLWJvbGQ6IFJvYm90by1Db25kZW5zZWQtQm9sZDtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAkbWFydmVsLWZvbnQ7XG4gIHNyYzogdXJsKCcjeyRkaXJ9L01hcnZlbEZvbnQvTWFydmVsUmVndWxhci1EajgzLnR0ZicpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICRyb2JvdG8tcmVndWxhcjtcbiAgc3JjOiB1cmwoJyN7JGRpcn0vUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZicpO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAkcm9ib3RvLWJvbGQ7XG4gIHNyYzogdXJsKCcjeyRkaXJ9L1JvYm90by9Sb2JvdG8tQm9sZC50dGYnKTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJHJvYm90by1jb25kZW5zZWQtcmVndWxhcjtcbiAgc3JjOiB1cmwoJyN7JGRpcn0vUm9ib3RvQ29uZGVuc2VkL1JvYm90b0NvbmRlbnNlZC1SZWd1bGFyLnR0ZicpO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAkcm9ib3RvLWNvbmRlbnNlZC1ib2xkO1xuICBzcmM6IHVybCgnI3skZGlyfS9Sb2JvdG9Db25kZW5zZWQvUm9ib3RvQ29uZGVuc2VkLUJvbGQudHRmJyk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5cbiIsIkB1c2UgJ2luZGV4JyBhcyAqO1xuXG4uY29udGFpbmVyIHtcbiAgQGluY2x1ZGUgZmxleC1jZW50ZXItY2VudGVyO1xuICBwYWRkaW5nOiAzcmVtO1xuXG4gIC5hdXRoLWNhcmQge1xuICAgIEBpbmNsdWRlIGNhcmQtc3R5bGU7XG4gIH1cbn1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgaDIge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cblxuICAuZXJyb3ItbXNnLCAuaW52YWxpZC1mZWVkYmFjayBkaXYge1xuICAgIGNvbG9yOiAkbWFydmVsLXJlZDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMCAwLjVyZW0gMC41cmVtO1xuICB9XG5cbiAgLmZvcm0tcm93IHtcbiAgICAuZm9ybS1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcblxuICAgICAgbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgLW8tYm9yZGVyLXJhZGl1czogMHB4O1xuXG4gICAgICAgIGJvcmRlci13aWR0aDogMC4xcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5idG4tZ3JvdXAge1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMXJlbTtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXJ2ZWwtcmVkO1xuICAgICAgICBjb2xvcjogJG1hcnZlbC1mb250LXdoaXRlO1xuICAgICAgfVxuXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgJG1hcnZlbC1ncmV5O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iLCIkZm9udC1zaXplLWJhc2UgOiAxNnB4O1xuJGZvbnQtc2l6ZS11cHBlciA6IDM2cHg7XG4kZm9udC1zaXplLWRlYyA6IDRweDtcblxuJGhlYWRpbmdzIDogaDEgaDIgaDMgaDQgaDUgaDY7XG5AZWFjaCAkaGVhZGluZyBpbiAkaGVhZGluZ3N7XG4gICN7JGhlYWRpbmd9IHtcbiAgICBmb250LXNpemUgOiAkZm9udC1zaXplLXVwcGVyO1xuICAgIGZvbnQtc2l6ZSA6ICgkZm9udC1zaXplLXVwcGVyIC8gJGZvbnQtc2l6ZS1iYXNlKSArIHJlbTtcbiAgfVxuICAkZm9udC1zaXplLXVwcGVyIDogJGZvbnQtc2l6ZS11cHBlciAtICRmb250LXNpemUtZGVjO1xufVxuIiwiQHVzZSAnLi9jb2xvcnMnIGFzIGM7XG5AdXNlICcuL2ZvbnRzJyBhcyBmO1xuQHVzZSAnLi9zaXplcycgYXMgcztcblxuQG1peGluIG1hcnZlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGMuJG1hcnZlbC1yZWQ7XG4gIHBhZGRpbmc6IDAuMzVyZW0gMC4xcmVtIDAgMC4xcmVtO1xuXG4gIHNwYW4ge1xuICAgIGNvbG9yOiBjLiRtYXJ2ZWwtZm9udC13aGl0ZTtcbiAgICBmb250LWZhbWlseTogZi4kbWFydmVsLWZvbnQ7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuXG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbkBtaXhpbiB3MTAwaDEwMCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbkBtaXhpbiBmbGV4LWNlbnRlci1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuQG1peGluIGNhcmQtc3R5bGUge1xuICBwYWRkaW5nOiAzcmVtIDNyZW0gM3JlbSAycmVtO1xuICBiYWNrZ3JvdW5kOiBjLiR3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDNyZW0gcmdiYShjLiRtYXJ2ZWwtYmxhY2ssIDAuNDUpO1xuICBib3JkZXItbGVmdDogMXJlbSBzb2xpZCBjLiRtYXJ2ZWwtcmVkO1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm0pIHtcbiAgdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgLW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gIC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gIC1vLXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbn1cblxuQG1peGluIHRyYW5zaXRpb24oJGR1cmF0aW9uKSB7XG4gIHRyYW5zaXRpb246ICRkdXJhdGlvbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkZHVyYXRpb247XG4gIC1tb3otdHJhbnNpdGlvbjogJGR1cmF0aW9uO1xuICAtbXMtdHJhbnNpdGlvbjogJGR1cmF0aW9uO1xuICAtby10cmFuc2l0aW9uOiAkZHVyYXRpb247XG59XG4iLCIkbWFydmVsLXJlZDogI0U2MjQyOTsgLy8gRUMxRDI0XG4kbWFydmVsLXdoaXRlOiAjRENEQ0RDO1xuJG1hcnZlbC1mb250LXdoaXRlOiAjRkVGRUZFO1xuJG1hcnZlbC1ibGFjazogIzIwMjAyMDtcblxuJG1hcnZlbC1ncmV5OiAjMjAyMDIwO1xuJG1hcnZlbC1kYXJrLWdyZXk6ICMxNTE1MTU7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiJdfQ== */"] });


/***/ }),

/***/ "LYZi":
/*!*******************************************!*\
  !*** ./src/app/service/status.service.ts ***!
  \*******************************************/
/*! exports provided: StatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusService", function() { return StatusService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StatusService {
    constructor() {
        this.searchField = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
        this.yearSelected = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](0);
        this.selectedComic = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.displayedComicList = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.isLoadingComics = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
    }
    getSelectedComic() {
        return this.selectedComic;
    }
    getSearchField() {
        return this.searchField;
    }
    getSelectedYear() {
        return this.yearSelected;
    }
    getDisplayedComicList() {
        return this.displayedComicList;
    }
    getLoadingStatus() {
        return this.isLoadingComics;
    }
    resetYearStatus(year) {
        console.warn("== StatusService: resetYearStatus");
        this.yearSelected.next(year);
    }
    resetSearchStatus(searchField) {
        console.warn("== StatusService: resetSearchStatus");
        this.searchField.next(searchField);
    }
}
StatusService.ɵfac = function StatusService_Factory(t) { return new (t || StatusService)(); };
StatusService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StatusService, factory: StatusService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_global_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/global.variables */ "5Bsy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class FooterComponent {
    constructor(globals) {
        this.globals = globals;
    }
    ngOnInit() {
        this.marvel = this.globals.MARVEL_URL;
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_global_variables__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 7, vars: 1, consts: [[1, "copyright"], ["routerLink", "comics", 1, "marvel"], ["target", "_blank", "rel", "marvel.com", 3, "href"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Marvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Data provided by Marvel. \u00A9 2021 MARVEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.marvel, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["@font-face {\n  font-family: Marvel-Regular;\n  src: url('MarvelRegular-Dj83.ttf');\n  font-weight: normal;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Regular;\n  src: url('Roboto-Regular.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Bold;\n  src: url('Roboto-Bold.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Condensed-Regular;\n  src: url('RobotoCondensed-Regular.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Condensed-Bold;\n  src: url('RobotoCondensed-Bold.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-size: 2.25rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-size: 2rem;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-size: 1.75rem;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-size: 1.5rem;\n}\nh5[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-size: 1.25rem;\n}\nh6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-size: 1rem;\n}\nfooter[_ngcontent-%COMP%] {\n  height: 6rem;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: #202020;\n  padding: 0 1rem;\n}\n.marvel[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.copyright[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem 0;\n  color: #ffffff;\n  flex-direction: column;\n  gap: 1rem;\n}\n.copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #E62429;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX2ZvbnRzLnNjc3MiLCIuLi8uLi8uLi8uLi9mb290ZXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL19zaXplcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fY29sb3JzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLDJCQVBZO0VBUVosa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDRCxrQ0FBQTtBQ05EO0FEU0E7RUFDRSwyQkFmZTtFQWdCZiw4QkFBQTtFQUNBLG1DQUFBO0VBQ0Qsa0NBQUE7QUNQRDtBRFVBO0VBQ0Usd0JBckJZO0VBc0JaLDJCQUFBO0VBQ0EsbUNBQUE7RUFDRCxrQ0FBQTtBQ1JEO0FEV0E7RUFDRSxxQ0EzQnlCO0VBNEJ6Qix1Q0FBQTtFQUNBLG1DQUFBO0VBQ0Qsa0NBQUE7QUNURDtBRFlBO0VBQ0Usa0NBakNzQjtFQWtDdEIsb0NBQUE7RUFDQSxtQ0FBQTtFQUNELGtDQUFBO0FDVkQ7QUN6QkU7RUFDRSxlQU5lO0VBT2Ysa0JBQUE7QUQyQko7QUM3QkU7RUFDRSxlQUdpQjtFQUZqQixlQUFBO0FEZ0NKO0FDbENFO0VBQ0UsZUFHaUI7RUFGakIsa0JBQUE7QURxQ0o7QUN2Q0U7RUFDRSxlQUdpQjtFQUZqQixpQkFBQTtBRDBDSjtBQzVDRTtFQUNFLGVBR2lCO0VBRmpCLGtCQUFBO0FEK0NKO0FDakRFO0VBQ0UsZUFHaUI7RUFGakIsZUFBQTtBRG9ESjtBQTFEQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBRUEseUJFSlk7RUZNWixlQUFBO0FBMERGO0FBeERBO0VBQ0UsaUJBQUE7QUEyREY7QUF4REE7RUdZRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFSFpBLGVBQUE7RUFDQSxjRVpNO0VGYU4sc0JBQUE7RUFDQSxTQUFBO0FBNkRGO0FBNURFO0VBQ0UsY0V4QlM7QUZzRmIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGRpcjogJy4uLy4uL2Fzc2V0cy9mb250cy8nO1xuJG1hcnZlbC1mb250OiBNYXJ2ZWwtUmVndWxhcjtcbiRyb2JvdG8tcmVndWxhcjogUm9ib3RvLVJlZ3VsYXI7XG4kcm9ib3RvLWJvbGQ6IFJvYm90by1Cb2xkO1xuJHJvYm90by1jb25kZW5zZWQtcmVndWxhcjogUm9ib3RvLUNvbmRlbnNlZC1SZWd1bGFyO1xuJHJvYm90by1jb25kZW5zZWQtYm9sZDogUm9ib3RvLUNvbmRlbnNlZC1Cb2xkO1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICRtYXJ2ZWwtZm9udDtcbiAgc3JjOiB1cmwoJyN7JGRpcn0vTWFydmVsRm9udC9NYXJ2ZWxSZWd1bGFyLURqODMudHRmJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJHJvYm90by1yZWd1bGFyO1xuICBzcmM6IHVybCgnI3skZGlyfS9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmJyk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICRyb2JvdG8tYm9sZDtcbiAgc3JjOiB1cmwoJyN7JGRpcn0vUm9ib3RvL1JvYm90by1Cb2xkLnR0ZicpO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAkcm9ib3RvLWNvbmRlbnNlZC1yZWd1bGFyO1xuICBzcmM6IHVybCgnI3skZGlyfS9Sb2JvdG9Db25kZW5zZWQvUm9ib3RvQ29uZGVuc2VkLVJlZ3VsYXIudHRmJyk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICRyb2JvdG8tY29uZGVuc2VkLWJvbGQ7XG4gIHNyYzogdXJsKCcjeyRkaXJ9L1JvYm90b0NvbmRlbnNlZC9Sb2JvdG9Db25kZW5zZWQtQm9sZC50dGYnKTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cblxuIiwiQHVzZSAnaW5kZXgnIGFzICo7XG5cbmZvb3RlciB7XG4gIGhlaWdodDogNnJlbTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFydmVsLWdyZXk7XG5cbiAgcGFkZGluZzogMCAxcmVtO1xufVxuLm1hcnZlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uY29weXJpZ2h0IHtcbiAgQGluY2x1ZGUgZmxleC1jZW50ZXItY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbiAgYTpob3ZlciB7XG4gICAgY29sb3I6ICRtYXJ2ZWwtcmVkO1xuICB9XG59XG4iLCIkZm9udC1zaXplLWJhc2UgOiAxNnB4O1xuJGZvbnQtc2l6ZS11cHBlciA6IDM2cHg7XG4kZm9udC1zaXplLWRlYyA6IDRweDtcblxuJGhlYWRpbmdzIDogaDEgaDIgaDMgaDQgaDUgaDY7XG5AZWFjaCAkaGVhZGluZyBpbiAkaGVhZGluZ3N7XG4gICN7JGhlYWRpbmd9IHtcbiAgICBmb250LXNpemUgOiAkZm9udC1zaXplLXVwcGVyO1xuICAgIGZvbnQtc2l6ZSA6ICgkZm9udC1zaXplLXVwcGVyIC8gJGZvbnQtc2l6ZS1iYXNlKSArIHJlbTtcbiAgfVxuICAkZm9udC1zaXplLXVwcGVyIDogJGZvbnQtc2l6ZS11cHBlciAtICRmb250LXNpemUtZGVjO1xufVxuIiwiJG1hcnZlbC1yZWQ6ICNFNjI0Mjk7IC8vIEVDMUQyNFxuJG1hcnZlbC13aGl0ZTogI0RDRENEQztcbiRtYXJ2ZWwtZm9udC13aGl0ZTogI0ZFRkVGRTtcbiRtYXJ2ZWwtYmxhY2s6ICMyMDIwMjA7XG5cbiRtYXJ2ZWwtZ3JleTogIzIwMjAyMDtcbiRtYXJ2ZWwtZGFyay1ncmV5OiAjMTUxNTE1O1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4iLCJAdXNlICcuL2NvbG9ycycgYXMgYztcbkB1c2UgJy4vZm9udHMnIGFzIGY7XG5AdXNlICcuL3NpemVzJyBhcyBzO1xuXG5AbWl4aW4gbWFydmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYy4kbWFydmVsLXJlZDtcbiAgcGFkZGluZzogMC4zNXJlbSAwLjFyZW0gMCAwLjFyZW07XG5cbiAgc3BhbiB7XG4gICAgY29sb3I6IGMuJG1hcnZlbC1mb250LXdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBmLiRtYXJ2ZWwtZm9udDtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5cbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuQG1peGluIHcxMDBoMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuQG1peGluIGZsZXgtY2VudGVyLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5AbWl4aW4gY2FyZC1zdHlsZSB7XG4gIHBhZGRpbmc6IDNyZW0gM3JlbSAzcmVtIDJyZW07XG4gIGJhY2tncm91bmQ6IGMuJHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDAgM3JlbSByZ2JhKGMuJG1hcnZlbC1ibGFjaywgMC40NSk7XG4gIGJvcmRlci1sZWZ0OiAxcmVtIHNvbGlkIGMuJG1hcnZlbC1yZWQ7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybSkge1xuICB0cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gIC13ZWJraXQtdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgLW1zLXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgLW8tdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkZHVyYXRpb24pIHtcbiAgdHJhbnNpdGlvbjogJGR1cmF0aW9uO1xuICAtd2Via2l0LXRyYW5zaXRpb246ICRkdXJhdGlvbjtcbiAgLW1vei10cmFuc2l0aW9uOiAkZHVyYXRpb247XG4gIC1tcy10cmFuc2l0aW9uOiAkZHVyYXRpb247XG4gIC1vLXRyYW5zaXRpb246ICRkdXJhdGlvbjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "P+IX":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "qXBG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, router) {
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(user => {
            const isAuth = !!user;
            if (isAuth) {
                return true;
            }
            return this.router.createUrlTree(['/auth']);
        })
        // tap(isAuth => {
        //   if (!isAuth) {
        //     this.router.navigate(['/auth']);
        //   }
        // })
        );
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Qv8w":
/*!***************************************************!*\
  !*** ./src/app/auth/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/must-match.validator */ "mzA+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "qXBG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/loader/loader.component */ "o7am");








function SignUpComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignUpComponent_ng_template_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.error, " ");
} }
function SignUpComponent_ng_template_1_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignUpComponent_ng_template_1_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter a valid Email-adress.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignUpComponent_ng_template_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SignUpComponent_ng_template_1_div_10_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SignUpComponent_ng_template_1_div_10_div_2_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.f.email.errors.email);
} }
function SignUpComponent_ng_template_1_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignUpComponent_ng_template_1_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password must contain at least 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignUpComponent_ng_template_1_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SignUpComponent_ng_template_1_div_16_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SignUpComponent_ng_template_1_div_16_div_2_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.f.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.f.password.errors.minlength);
} }
function SignUpComponent_ng_template_1_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Confirm Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignUpComponent_ng_template_1_div_21_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Passwords must match");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignUpComponent_ng_template_1_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SignUpComponent_ng_template_1_div_21_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SignUpComponent_ng_template_1_div_21_div_2_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.f.confirmPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.f.confirmPassword.errors.mustMatch);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function SignUpComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Sign up with a new account");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SignUpComponent_ng_template_1_div_3_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SignUpComponent_ng_template_1_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SignUpComponent_ng_template_1_div_10_Template, 3, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, SignUpComponent_ng_template_1_div_16_Template, 3, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, SignUpComponent_ng_template_1_div_21_Template, 3, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignUpComponent_ng_template_1_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.onSwitchMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r2.signupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, ctx_r2.submitted && ctx_r2.f.email.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.submitted && ctx_r2.f.email.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, ctx_r2.submitted && ctx_r2.f.password.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.submitted && ctx_r2.f.password.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c0, ctx_r2.submitted && ctx_r2.f.confirmPassword.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.submitted && ctx_r2.f.confirmPassword.errors);
} }
class SignUpComponent {
    constructor(authService, router, formBuilder) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.isLoading = false;
        this.error = null;
        this.submitted = false;
    }
    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        }, {
            validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_1__["MustMatch"])('password', 'confirmPassword')
        });
    }
    get f() { return this.signupForm.controls; }
    onSubmit() {
        this.submitted = true;
        if (this.signupForm.invalid) {
            return;
        }
        else {
            this.isLoading = true;
            const email = this.signupForm.value.email;
            const password = this.signupForm.value.password;
            let authObs;
            authObs = this.authService.signup(email, password);
            authObs.subscribe(resData => {
                this.isLoading = false;
                this.router.navigate(['favorites']);
            }, errorMessage => {
                console.log(errorMessage);
                this.error = errorMessage;
                this.isLoading = false;
            });
            this.signupForm.reset();
        }
    }
    onSwitchMode() {
        this.router.navigate(['login']);
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["notLoading", ""], [1, "form-container"], ["class", "error-msg", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "form-group", "col"], ["type", "text", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["type", "password", "formControlName", "confirmPassword", 1, "form-control", 3, "ngClass"], [1, "btn-group", "text-center"], [1, "btn", "btn-primary", "mr-1"], ["type", "reset", 1, "btn", "btn-secondary", 3, "click"], [1, "error-msg"], [1, "invalid-feedback"], [4, "ngIf"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SignUpComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SignUpComponent_ng_template_1_Template, 27, 14, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: ["@font-face {\n  font-family: Marvel-Regular;\n  src: url('MarvelRegular-Dj83.ttf');\n  font-weight: normal;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Regular;\n  src: url('Roboto-Regular.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Bold;\n  src: url('Roboto-Bold.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Condensed-Regular;\n  src: url('RobotoCondensed-Regular.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Condensed-Bold;\n  src: url('RobotoCondensed-Bold.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-size: 2.25rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-size: 2rem;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-size: 1.75rem;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-size: 1.5rem;\n}\nh5[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-size: 1.25rem;\n}\nh6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-size: 1rem;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n}\n.container[_ngcontent-%COMP%]   .auth-card[_ngcontent-%COMP%] {\n  padding: 3rem 3rem 3rem 2rem;\n  background: #ffffff;\n  box-shadow: 0 0 3rem rgba(32, 32, 32, 0.45);\n  border-left: 1rem solid #E62429;\n}\n.form-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.form-container[_ngcontent-%COMP%]   .error-msg[_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  color: #E62429;\n  padding: 0.5rem 0 0.5rem 0.5rem;\n}\n.form-container[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 0.5rem;\n}\n.form-container[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.form-container[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  -webkit-border-radius: 0px;\n  -moz-border-radius: 0px;\n  -ms-border-radius: 0px;\n  -o-border-radius: 0px;\n  border-width: 0.1rem;\n}\n.form-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  display: flex;\n  gap: 1rem;\n}\n.form-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  text-transform: uppercase;\n  padding: 0.5rem 1rem;\n}\n.form-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  background-color: #E62429;\n  color: #FEFEFE;\n}\n.form-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:first-child) {\n  border: 0.1rem solid #202020;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX2ZvbnRzLnNjc3MiLCIuLi8uLi8uLi9hdXRoLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fc2l6ZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX21peGlucy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSwyQkFQWTtFQVFaLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0Qsa0NBQUE7QUNORDtBRFNBO0VBQ0UsMkJBZmU7RUFnQmYsOEJBQUE7RUFDQSxtQ0FBQTtFQUNELGtDQUFBO0FDUEQ7QURVQTtFQUNFLHdCQXJCWTtFQXNCWiwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Qsa0NBQUE7QUNSRDtBRFdBO0VBQ0UscUNBM0J5QjtFQTRCekIsdUNBQUE7RUFDQSxtQ0FBQTtFQUNELGtDQUFBO0FDVEQ7QURZQTtFQUNFLGtDQWpDc0I7RUFrQ3RCLG9DQUFBO0VBQ0EsbUNBQUE7RUFDRCxrQ0FBQTtBQ1ZEO0FDekJFO0VBQ0UsZUFOZTtFQU9mLGtCQUFBO0FEMkJKO0FDN0JFO0VBQ0UsZUFHaUI7RUFGakIsZUFBQTtBRGdDSjtBQ2xDRTtFQUNFLGVBR2lCO0VBRmpCLGtCQUFBO0FEcUNKO0FDdkNFO0VBQ0UsZUFHaUI7RUFGakIsaUJBQUE7QUQwQ0o7QUM1Q0U7RUFDRSxlQUdpQjtFQUZqQixrQkFBQTtBRCtDSjtBQ2pERTtFQUNFLGVBR2lCO0VBRmpCLGVBQUE7QURvREo7QUExREE7RUUyQkUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUYzQkEsYUFBQTtBQStERjtBQTdERTtFRTZCQSw0QkFBQTtFQUNBLG1CQzVCTTtFRDZCTiwyQ0FBQTtFQUNBLCtCQUFBO0FGbUNGO0FBN0RFO0VBQ0UseUJBQUE7QUFnRUo7QUE3REU7RUFDRSxjR2pCUztFSGtCVCwrQkFBQTtBQStESjtBQTNESTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBNkROO0FBM0RNO0VBQ0UsaUJBQUE7QUE2RFI7QUExRE07RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBRUEsb0JBQUE7QUEyRFI7QUF0REU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBd0RKO0FBdERJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtFQUNBLHlCQUFBO0VBRUEsb0JBQUE7QUFzRE47QUFwRE07RUFDRSx5QkcxREs7RUgyREwsY0d6RFk7QUgrR3BCO0FBbkRNO0VBQ0UsNEJBQUE7QUFxRFIiLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRkaXI6ICcuLi8uLi9hc3NldHMvZm9udHMvJztcbiRtYXJ2ZWwtZm9udDogTWFydmVsLVJlZ3VsYXI7XG4kcm9ib3RvLXJlZ3VsYXI6IFJvYm90by1SZWd1bGFyO1xuJHJvYm90by1ib2xkOiBSb2JvdG8tQm9sZDtcbiRyb2JvdG8tY29uZGVuc2VkLXJlZ3VsYXI6IFJvYm90by1Db25kZW5zZWQtUmVndWxhcjtcbiRyb2JvdG8tY29uZGVuc2VkLWJvbGQ6IFJvYm90by1Db25kZW5zZWQtQm9sZDtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAkbWFydmVsLWZvbnQ7XG4gIHNyYzogdXJsKCcjeyRkaXJ9L01hcnZlbEZvbnQvTWFydmVsUmVndWxhci1EajgzLnR0ZicpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICRyb2JvdG8tcmVndWxhcjtcbiAgc3JjOiB1cmwoJyN7JGRpcn0vUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZicpO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAkcm9ib3RvLWJvbGQ7XG4gIHNyYzogdXJsKCcjeyRkaXJ9L1JvYm90by9Sb2JvdG8tQm9sZC50dGYnKTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJHJvYm90by1jb25kZW5zZWQtcmVndWxhcjtcbiAgc3JjOiB1cmwoJyN7JGRpcn0vUm9ib3RvQ29uZGVuc2VkL1JvYm90b0NvbmRlbnNlZC1SZWd1bGFyLnR0ZicpO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAkcm9ib3RvLWNvbmRlbnNlZC1ib2xkO1xuICBzcmM6IHVybCgnI3skZGlyfS9Sb2JvdG9Db25kZW5zZWQvUm9ib3RvQ29uZGVuc2VkLUJvbGQudHRmJyk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5cbiIsIkB1c2UgJ2luZGV4JyBhcyAqO1xuXG4uY29udGFpbmVyIHtcbiAgQGluY2x1ZGUgZmxleC1jZW50ZXItY2VudGVyO1xuICBwYWRkaW5nOiAzcmVtO1xuXG4gIC5hdXRoLWNhcmQge1xuICAgIEBpbmNsdWRlIGNhcmQtc3R5bGU7XG4gIH1cbn1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgaDIge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cblxuICAuZXJyb3ItbXNnLCAuaW52YWxpZC1mZWVkYmFjayBkaXYge1xuICAgIGNvbG9yOiAkbWFydmVsLXJlZDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMCAwLjVyZW0gMC41cmVtO1xuICB9XG5cbiAgLmZvcm0tcm93IHtcbiAgICAuZm9ybS1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcblxuICAgICAgbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgLW8tYm9yZGVyLXJhZGl1czogMHB4O1xuXG4gICAgICAgIGJvcmRlci13aWR0aDogMC4xcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5idG4tZ3JvdXAge1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMXJlbTtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXJ2ZWwtcmVkO1xuICAgICAgICBjb2xvcjogJG1hcnZlbC1mb250LXdoaXRlO1xuICAgICAgfVxuXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgJG1hcnZlbC1ncmV5O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iLCIkZm9udC1zaXplLWJhc2UgOiAxNnB4O1xuJGZvbnQtc2l6ZS11cHBlciA6IDM2cHg7XG4kZm9udC1zaXplLWRlYyA6IDRweDtcblxuJGhlYWRpbmdzIDogaDEgaDIgaDMgaDQgaDUgaDY7XG5AZWFjaCAkaGVhZGluZyBpbiAkaGVhZGluZ3N7XG4gICN7JGhlYWRpbmd9IHtcbiAgICBmb250LXNpemUgOiAkZm9udC1zaXplLXVwcGVyO1xuICAgIGZvbnQtc2l6ZSA6ICgkZm9udC1zaXplLXVwcGVyIC8gJGZvbnQtc2l6ZS1iYXNlKSArIHJlbTtcbiAgfVxuICAkZm9udC1zaXplLXVwcGVyIDogJGZvbnQtc2l6ZS11cHBlciAtICRmb250LXNpemUtZGVjO1xufVxuIiwiQHVzZSAnLi9jb2xvcnMnIGFzIGM7XG5AdXNlICcuL2ZvbnRzJyBhcyBmO1xuQHVzZSAnLi9zaXplcycgYXMgcztcblxuQG1peGluIG1hcnZlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGMuJG1hcnZlbC1yZWQ7XG4gIHBhZGRpbmc6IDAuMzVyZW0gMC4xcmVtIDAgMC4xcmVtO1xuXG4gIHNwYW4ge1xuICAgIGNvbG9yOiBjLiRtYXJ2ZWwtZm9udC13aGl0ZTtcbiAgICBmb250LWZhbWlseTogZi4kbWFydmVsLWZvbnQ7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuXG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbkBtaXhpbiB3MTAwaDEwMCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbkBtaXhpbiBmbGV4LWNlbnRlci1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuQG1peGluIGNhcmQtc3R5bGUge1xuICBwYWRkaW5nOiAzcmVtIDNyZW0gM3JlbSAycmVtO1xuICBiYWNrZ3JvdW5kOiBjLiR3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDNyZW0gcmdiYShjLiRtYXJ2ZWwtYmxhY2ssIDAuNDUpO1xuICBib3JkZXItbGVmdDogMXJlbSBzb2xpZCBjLiRtYXJ2ZWwtcmVkO1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm0pIHtcbiAgdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgLW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gIC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gIC1vLXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbn1cblxuQG1peGluIHRyYW5zaXRpb24oJGR1cmF0aW9uKSB7XG4gIHRyYW5zaXRpb246ICRkdXJhdGlvbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkZHVyYXRpb247XG4gIC1tb3otdHJhbnNpdGlvbjogJGR1cmF0aW9uO1xuICAtbXMtdHJhbnNpdGlvbjogJGR1cmF0aW9uO1xuICAtby10cmFuc2l0aW9uOiAkZHVyYXRpb247XG59XG4iLCIkbWFydmVsLXJlZDogI0U2MjQyOTsgLy8gRUMxRDI0XG4kbWFydmVsLXdoaXRlOiAjRENEQ0RDO1xuJG1hcnZlbC1mb250LXdoaXRlOiAjRkVGRUZFO1xuJG1hcnZlbC1ibGFjazogIzIwMjAyMDtcblxuJG1hcnZlbC1ncmV5OiAjMjAyMDIwO1xuJG1hcnZlbC1kYXJrLWdyZXk6ICMxNTE1MTU7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.service */ "qXBG");
/* harmony import */ var src_app_service_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/data-storage.service */ "is9J");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");






class AppComponent {
    constructor(authService, dataService) {
        this.authService = authService;
        this.dataService = dataService;
        this.title = 'angular-spa-auth';
    }
    ngOnInit() {
        this.authService.autoLogin();
        this.authService.user.subscribe(user => {
            if (user != null) {
                this.dataService.getFavoritesOfUser(user);
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [["id", "page-container"], ["id", "content-wrap"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["#page-container[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n}\n\n#content-wrap[_ngcontent-%COMP%] {\n  padding-bottom: 6rem;\n}\n\napp-footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhZ2UtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuI2NvbnRlbnQtd3JhcCB7XG4gIHBhZGRpbmctYm90dG9tOiA2cmVtO1xufVxuXG5hcHAtZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"] });


/***/ }),

/***/ "UbF0":
/*!*************************************!*\
  !*** ./src/app/model/user.model.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(email, id, _token, _tokenExpirationDate) {
        this.email = email;
        this.id = id;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
    }
    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }
}


/***/ }),

/***/ "W3fu":
/*!*************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.ts ***!
  \*************************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var src_app_service_comic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/comic.service */ "lubP");
/* harmony import */ var _comic_list_comic_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comic-list/comic-list.component */ "rQPM");




class FavoritesComponent {
    constructor(authService, comicService) {
        this.authService = authService;
        this.comicService = comicService;
        this.user = null;
        this.comics = [];
    }
    ngOnInit() {
        this.userSubscription = this.authService.user.subscribe(user => {
            this.user = user;
        });
        this.favoriteSubscription = this.comicService.getFavoritesSubject().subscribe(favs => {
            this.comics = favs;
        });
    }
    ngOnDestroy() {
        this.userSubscription.unsubscribe();
        this.favoriteSubscription.unsubscribe();
    }
}
FavoritesComponent.ɵfac = function FavoritesComponent_Factory(t) { return new (t || FavoritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_comic_service__WEBPACK_IMPORTED_MODULE_2__["ComicService"])); };
FavoritesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavoritesComponent, selectors: [["app-favorites"]], decls: 5, vars: 2, consts: [[1, "container"], [1, "intro"], [3, "comicList", "listType"]], template: function FavoritesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your favorite comics.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-comic-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comicList", ctx.comics)("listType", "favorites");
    } }, directives: [_comic_list_comic_list_component__WEBPACK_IMPORTED_MODULE_3__["ComicListComponent"]], styles: ["@font-face {\n  font-family: Marvel-Regular;\n  src: url('MarvelRegular-Dj83.ttf');\n  font-weight: normal;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Regular;\n  src: url('Roboto-Regular.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Bold;\n  src: url('Roboto-Bold.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Condensed-Regular;\n  src: url('RobotoCondensed-Regular.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Condensed-Bold;\n  src: url('RobotoCondensed-Bold.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-size: 2.25rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-size: 2rem;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-size: 1.75rem;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-size: 1.5rem;\n}\nh5[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-size: 1.25rem;\n}\nh6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-size: 1rem;\n}\n.container[_ngcontent-%COMP%] {\n  padding: 3rem;\n}\n.intro[_ngcontent-%COMP%] {\n  padding: 3rem 3rem 3rem 2rem;\n  background: #ffffff;\n  box-shadow: 0 0 3rem rgba(32, 32, 32, 0.45);\n  border-left: 1rem solid #E62429;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX2ZvbnRzLnNjc3MiLCIuLi8uLi8uLi8uLi9mYXZvcml0ZXMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL19zaXplcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fbWl4aW5zLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLDJCQVBZO0VBUVosa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDRCxrQ0FBQTtBQ05EO0FEU0E7RUFDRSwyQkFmZTtFQWdCZiw4QkFBQTtFQUNBLG1DQUFBO0VBQ0Qsa0NBQUE7QUNQRDtBRFVBO0VBQ0Usd0JBckJZO0VBc0JaLDJCQUFBO0VBQ0EsbUNBQUE7RUFDRCxrQ0FBQTtBQ1JEO0FEV0E7RUFDRSxxQ0EzQnlCO0VBNEJ6Qix1Q0FBQTtFQUNBLG1DQUFBO0VBQ0Qsa0NBQUE7QUNURDtBRFlBO0VBQ0Usa0NBakNzQjtFQWtDdEIsb0NBQUE7RUFDQSxtQ0FBQTtFQUNELGtDQUFBO0FDVkQ7QUN6QkU7RUFDRSxlQU5lO0VBT2Ysa0JBQUE7QUQyQko7QUM3QkU7RUFDRSxlQUdpQjtFQUZqQixlQUFBO0FEZ0NKO0FDbENFO0VBQ0UsZUFHaUI7RUFGakIsa0JBQUE7QURxQ0o7QUN2Q0U7RUFDRSxlQUdpQjtFQUZqQixpQkFBQTtBRDBDSjtBQzVDRTtFQUNFLGVBR2lCO0VBRmpCLGtCQUFBO0FEK0NKO0FDakRFO0VBQ0UsZUFHaUI7RUFGakIsZUFBQTtBRG9ESjtBQTFEQTtFQUNFLGFBQUE7QUE2REY7QUExREE7RUU2QkUsNEJBQUE7RUFDQSxtQkM1Qk07RUQ2Qk4sMkNBQUE7RUFDQSwrQkFBQTtBRmlDRiIsImZpbGUiOiJmYXZvcml0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZGlyOiAnLi4vLi4vYXNzZXRzL2ZvbnRzLyc7XG4kbWFydmVsLWZvbnQ6IE1hcnZlbC1SZWd1bGFyO1xuJHJvYm90by1yZWd1bGFyOiBSb2JvdG8tUmVndWxhcjtcbiRyb2JvdG8tYm9sZDogUm9ib3RvLUJvbGQ7XG4kcm9ib3RvLWNvbmRlbnNlZC1yZWd1bGFyOiBSb2JvdG8tQ29uZGVuc2VkLVJlZ3VsYXI7XG4kcm9ib3RvLWNvbmRlbnNlZC1ib2xkOiBSb2JvdG8tQ29uZGVuc2VkLUJvbGQ7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJG1hcnZlbC1mb250O1xuICBzcmM6IHVybCgnI3skZGlyfS9NYXJ2ZWxGb250L01hcnZlbFJlZ3VsYXItRGo4My50dGYnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAkcm9ib3RvLXJlZ3VsYXI7XG4gIHNyYzogdXJsKCcjeyRkaXJ9L1JvYm90by9Sb2JvdG8tUmVndWxhci50dGYnKTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJHJvYm90by1ib2xkO1xuICBzcmM6IHVybCgnI3skZGlyfS9Sb2JvdG8vUm9ib3RvLUJvbGQudHRmJyk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICRyb2JvdG8tY29uZGVuc2VkLXJlZ3VsYXI7XG4gIHNyYzogdXJsKCcjeyRkaXJ9L1JvYm90b0NvbmRlbnNlZC9Sb2JvdG9Db25kZW5zZWQtUmVndWxhci50dGYnKTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJHJvYm90by1jb25kZW5zZWQtYm9sZDtcbiAgc3JjOiB1cmwoJyN7JGRpcn0vUm9ib3RvQ29uZGVuc2VkL1JvYm90b0NvbmRlbnNlZC1Cb2xkLnR0ZicpO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuXG4iLCJAdXNlICdpbmRleCcgYXMgKjtcblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDNyZW07XG59XG5cbi5pbnRybyB7XG4gIEBpbmNsdWRlIGNhcmQtc3R5bGU7XG59XG4iLCIkZm9udC1zaXplLWJhc2UgOiAxNnB4O1xuJGZvbnQtc2l6ZS11cHBlciA6IDM2cHg7XG4kZm9udC1zaXplLWRlYyA6IDRweDtcblxuJGhlYWRpbmdzIDogaDEgaDIgaDMgaDQgaDUgaDY7XG5AZWFjaCAkaGVhZGluZyBpbiAkaGVhZGluZ3N7XG4gICN7JGhlYWRpbmd9IHtcbiAgICBmb250LXNpemUgOiAkZm9udC1zaXplLXVwcGVyO1xuICAgIGZvbnQtc2l6ZSA6ICgkZm9udC1zaXplLXVwcGVyIC8gJGZvbnQtc2l6ZS1iYXNlKSArIHJlbTtcbiAgfVxuICAkZm9udC1zaXplLXVwcGVyIDogJGZvbnQtc2l6ZS11cHBlciAtICRmb250LXNpemUtZGVjO1xufVxuIiwiQHVzZSAnLi9jb2xvcnMnIGFzIGM7XG5AdXNlICcuL2ZvbnRzJyBhcyBmO1xuQHVzZSAnLi9zaXplcycgYXMgcztcblxuQG1peGluIG1hcnZlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGMuJG1hcnZlbC1yZWQ7XG4gIHBhZGRpbmc6IDAuMzVyZW0gMC4xcmVtIDAgMC4xcmVtO1xuXG4gIHNwYW4ge1xuICAgIGNvbG9yOiBjLiRtYXJ2ZWwtZm9udC13aGl0ZTtcbiAgICBmb250LWZhbWlseTogZi4kbWFydmVsLWZvbnQ7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuXG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbkBtaXhpbiB3MTAwaDEwMCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbkBtaXhpbiBmbGV4LWNlbnRlci1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuQG1peGluIGNhcmQtc3R5bGUge1xuICBwYWRkaW5nOiAzcmVtIDNyZW0gM3JlbSAycmVtO1xuICBiYWNrZ3JvdW5kOiBjLiR3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDNyZW0gcmdiYShjLiRtYXJ2ZWwtYmxhY2ssIDAuNDUpO1xuICBib3JkZXItbGVmdDogMXJlbSBzb2xpZCBjLiRtYXJ2ZWwtcmVkO1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm0pIHtcbiAgdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgLW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gIC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gIC1vLXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbn1cblxuQG1peGluIHRyYW5zaXRpb24oJGR1cmF0aW9uKSB7XG4gIHRyYW5zaXRpb246ICRkdXJhdGlvbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkZHVyYXRpb247XG4gIC1tb3otdHJhbnNpdGlvbjogJGR1cmF0aW9uO1xuICAtbXMtdHJhbnNpdGlvbjogJGR1cmF0aW9uO1xuICAtby10cmFuc2l0aW9uOiAkZHVyYXRpb247XG59XG4iLCIkbWFydmVsLXJlZDogI0U2MjQyOTsgLy8gRUMxRDI0XG4kbWFydmVsLXdoaXRlOiAjRENEQ0RDO1xuJG1hcnZlbC1mb250LXdoaXRlOiAjRkVGRUZFO1xuJG1hcnZlbC1ibGFjazogIzIwMjAyMDtcblxuJG1hcnZlbC1ncmV5OiAjMjAyMDIwO1xuJG1hcnZlbC1kYXJrLWdyZXk6ICMxNTE1MTU7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_comic_list_comic_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/comic-list/comic-list.component */ "rQPM");
/* harmony import */ var _components_comic_detail_comic_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/comic-detail/comic-detail.component */ "HKC/");
/* harmony import */ var _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/favorites/favorites.component */ "W3fu");
/* harmony import */ var _shared_global_variables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/global.variables */ "5Bsy");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/loader/loader.component */ "o7am");
/* harmony import */ var _components_comics_comics_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/comics/comics.component */ "ovkp");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.component */ "LS6v");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/login/login.component */ "bsvf");
/* harmony import */ var _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/sign-up/sign-up.component */ "Qv8w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [_shared_global_variables__WEBPACK_IMPORTED_MODULE_10__["GlobalConstants"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _components_comic_list_comic_list_component__WEBPACK_IMPORTED_MODULE_7__["ComicListComponent"],
        _components_comic_detail_comic_detail_component__WEBPACK_IMPORTED_MODULE_8__["ComicDetailComponent"],
        _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_9__["FavoritesComponent"],
        _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__["LoaderComponent"],
        _components_comics_comics_component__WEBPACK_IMPORTED_MODULE_12__["ComicsComponent"],
        _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__["AuthComponent"],
        _auth_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
        _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_15__["SignUpComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "bsvf":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "qXBG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/loader/loader.component */ "o7am");







function LoginComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_ng_template_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.error, " ");
} }
function LoginComponent_ng_template_1_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_ng_template_1_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_ng_template_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_ng_template_1_div_10_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginComponent_ng_template_1_div_10_div_2_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.f.email.errors.email);
} }
function LoginComponent_ng_template_1_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_ng_template_1_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_ng_template_1_div_16_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.f.password.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function LoginComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sign in with an existing user");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LoginComponent_ng_template_1_div_3_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_ng_template_1_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LoginComponent_ng_template_1_div_10_Template, 3, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LoginComponent_ng_template_1_div_16_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_ng_template_1_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.onSwitchMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r2.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx_r2.submitted && ctx_r2.f.email.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.submitted && ctx_r2.f.email.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx_r2.submitted && ctx_r2.f.password.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.submitted && ctx_r2.f.password.errors);
} }
class LoginComponent {
    constructor(authService, router, formBuilder) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.isLoading = false;
        this.error = null;
        this.submitted = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
    }
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        else {
            const email = this.loginForm.value.email;
            const password = this.loginForm.value.password;
            let authObs;
            this.isLoading = true;
            authObs = this.authService.login(email, password);
            authObs.subscribe(resData => {
                this.isLoading = false;
                this.router.navigate(['favorites']);
            }, errorMessage => {
                console.log(errorMessage);
                this.error = errorMessage;
                this.isLoading = false;
            });
            this.loginForm.reset();
        }
    }
    onSwitchMode() {
        this.router.navigate(['signup']);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["notLoading", ""], [1, "form-container"], ["class", "error-msg", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "form-group", "col"], ["type", "text", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], [1, "btn-group", "text-center"], [1, "btn", "btn-primary", "mr-1"], ["type", "reset", 1, "btn", "btn-secondary", 3, "click"], [1, "error-msg"], [1, "invalid-feedback"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoginComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_ng_template_1_Template, 22, 10, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: ["@font-face {\n  font-family: Marvel-Regular;\n  src: url('MarvelRegular-Dj83.ttf');\n  font-weight: normal;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Regular;\n  src: url('Roboto-Regular.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Bold;\n  src: url('Roboto-Bold.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Condensed-Regular;\n  src: url('RobotoCondensed-Regular.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Condensed-Bold;\n  src: url('RobotoCondensed-Bold.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-size: 2.25rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-size: 2rem;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-size: 1.75rem;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-size: 1.5rem;\n}\nh5[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-size: 1.25rem;\n}\nh6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-size: 1rem;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n}\n.container[_ngcontent-%COMP%]   .auth-card[_ngcontent-%COMP%] {\n  padding: 3rem 3rem 3rem 2rem;\n  background: #ffffff;\n  box-shadow: 0 0 3rem rgba(32, 32, 32, 0.45);\n  border-left: 1rem solid #E62429;\n}\n.form-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.form-container[_ngcontent-%COMP%]   .error-msg[_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  color: #E62429;\n  padding: 0.5rem 0 0.5rem 0.5rem;\n}\n.form-container[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 0.5rem;\n}\n.form-container[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.form-container[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  -webkit-border-radius: 0px;\n  -moz-border-radius: 0px;\n  -ms-border-radius: 0px;\n  -o-border-radius: 0px;\n  border-width: 0.1rem;\n}\n.form-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  display: flex;\n  gap: 1rem;\n}\n.form-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  text-transform: uppercase;\n  padding: 0.5rem 1rem;\n}\n.form-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  background-color: #E62429;\n  color: #FEFEFE;\n}\n.form-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:first-child) {\n  border: 0.1rem solid #202020;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX2ZvbnRzLnNjc3MiLCIuLi8uLi8uLi9hdXRoLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fc2l6ZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX21peGlucy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSwyQkFQWTtFQVFaLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0Qsa0NBQUE7QUNORDtBRFNBO0VBQ0UsMkJBZmU7RUFnQmYsOEJBQUE7RUFDQSxtQ0FBQTtFQUNELGtDQUFBO0FDUEQ7QURVQTtFQUNFLHdCQXJCWTtFQXNCWiwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Qsa0NBQUE7QUNSRDtBRFdBO0VBQ0UscUNBM0J5QjtFQTRCekIsdUNBQUE7RUFDQSxtQ0FBQTtFQUNELGtDQUFBO0FDVEQ7QURZQTtFQUNFLGtDQWpDc0I7RUFrQ3RCLG9DQUFBO0VBQ0EsbUNBQUE7RUFDRCxrQ0FBQTtBQ1ZEO0FDekJFO0VBQ0UsZUFOZTtFQU9mLGtCQUFBO0FEMkJKO0FDN0JFO0VBQ0UsZUFHaUI7RUFGakIsZUFBQTtBRGdDSjtBQ2xDRTtFQUNFLGVBR2lCO0VBRmpCLGtCQUFBO0FEcUNKO0FDdkNFO0VBQ0UsZUFHaUI7RUFGakIsaUJBQUE7QUQwQ0o7QUM1Q0U7RUFDRSxlQUdpQjtFQUZqQixrQkFBQTtBRCtDSjtBQ2pERTtFQUNFLGVBR2lCO0VBRmpCLGVBQUE7QURvREo7QUExREE7RUUyQkUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUYzQkEsYUFBQTtBQStERjtBQTdERTtFRTZCQSw0QkFBQTtFQUNBLG1CQzVCTTtFRDZCTiwyQ0FBQTtFQUNBLCtCQUFBO0FGbUNGO0FBN0RFO0VBQ0UseUJBQUE7QUFnRUo7QUE3REU7RUFDRSxjR2pCUztFSGtCVCwrQkFBQTtBQStESjtBQTNESTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBNkROO0FBM0RNO0VBQ0UsaUJBQUE7QUE2RFI7QUExRE07RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBRUEsb0JBQUE7QUEyRFI7QUF0REU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBd0RKO0FBdERJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtFQUNBLHlCQUFBO0VBRUEsb0JBQUE7QUFzRE47QUFwRE07RUFDRSx5QkcxREs7RUgyREwsY0d6RFk7QUgrR3BCO0FBbkRNO0VBQ0UsNEJBQUE7QUFxRFIiLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRkaXI6ICcuLi8uLi9hc3NldHMvZm9udHMvJztcbiRtYXJ2ZWwtZm9udDogTWFydmVsLVJlZ3VsYXI7XG4kcm9ib3RvLXJlZ3VsYXI6IFJvYm90by1SZWd1bGFyO1xuJHJvYm90by1ib2xkOiBSb2JvdG8tQm9sZDtcbiRyb2JvdG8tY29uZGVuc2VkLXJlZ3VsYXI6IFJvYm90by1Db25kZW5zZWQtUmVndWxhcjtcbiRyb2JvdG8tY29uZGVuc2VkLWJvbGQ6IFJvYm90by1Db25kZW5zZWQtQm9sZDtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAkbWFydmVsLWZvbnQ7XG4gIHNyYzogdXJsKCcjeyRkaXJ9L01hcnZlbEZvbnQvTWFydmVsUmVndWxhci1EajgzLnR0ZicpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICRyb2JvdG8tcmVndWxhcjtcbiAgc3JjOiB1cmwoJyN7JGRpcn0vUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZicpO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAkcm9ib3RvLWJvbGQ7XG4gIHNyYzogdXJsKCcjeyRkaXJ9L1JvYm90by9Sb2JvdG8tQm9sZC50dGYnKTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJHJvYm90by1jb25kZW5zZWQtcmVndWxhcjtcbiAgc3JjOiB1cmwoJyN7JGRpcn0vUm9ib3RvQ29uZGVuc2VkL1JvYm90b0NvbmRlbnNlZC1SZWd1bGFyLnR0ZicpO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAkcm9ib3RvLWNvbmRlbnNlZC1ib2xkO1xuICBzcmM6IHVybCgnI3skZGlyfS9Sb2JvdG9Db25kZW5zZWQvUm9ib3RvQ29uZGVuc2VkLUJvbGQudHRmJyk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5cbiIsIkB1c2UgJ2luZGV4JyBhcyAqO1xuXG4uY29udGFpbmVyIHtcbiAgQGluY2x1ZGUgZmxleC1jZW50ZXItY2VudGVyO1xuICBwYWRkaW5nOiAzcmVtO1xuXG4gIC5hdXRoLWNhcmQge1xuICAgIEBpbmNsdWRlIGNhcmQtc3R5bGU7XG4gIH1cbn1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgaDIge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cblxuICAuZXJyb3ItbXNnLCAuaW52YWxpZC1mZWVkYmFjayBkaXYge1xuICAgIGNvbG9yOiAkbWFydmVsLXJlZDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMCAwLjVyZW0gMC41cmVtO1xuICB9XG5cbiAgLmZvcm0tcm93IHtcbiAgICAuZm9ybS1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcblxuICAgICAgbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgLW8tYm9yZGVyLXJhZGl1czogMHB4O1xuXG4gICAgICAgIGJvcmRlci13aWR0aDogMC4xcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5idG4tZ3JvdXAge1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMXJlbTtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXJ2ZWwtcmVkO1xuICAgICAgICBjb2xvcjogJG1hcnZlbC1mb250LXdoaXRlO1xuICAgICAgfVxuXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgJG1hcnZlbC1ncmV5O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iLCIkZm9udC1zaXplLWJhc2UgOiAxNnB4O1xuJGZvbnQtc2l6ZS11cHBlciA6IDM2cHg7XG4kZm9udC1zaXplLWRlYyA6IDRweDtcblxuJGhlYWRpbmdzIDogaDEgaDIgaDMgaDQgaDUgaDY7XG5AZWFjaCAkaGVhZGluZyBpbiAkaGVhZGluZ3N7XG4gICN7JGhlYWRpbmd9IHtcbiAgICBmb250LXNpemUgOiAkZm9udC1zaXplLXVwcGVyO1xuICAgIGZvbnQtc2l6ZSA6ICgkZm9udC1zaXplLXVwcGVyIC8gJGZvbnQtc2l6ZS1iYXNlKSArIHJlbTtcbiAgfVxuICAkZm9udC1zaXplLXVwcGVyIDogJGZvbnQtc2l6ZS11cHBlciAtICRmb250LXNpemUtZGVjO1xufVxuIiwiQHVzZSAnLi9jb2xvcnMnIGFzIGM7XG5AdXNlICcuL2ZvbnRzJyBhcyBmO1xuQHVzZSAnLi9zaXplcycgYXMgcztcblxuQG1peGluIG1hcnZlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGMuJG1hcnZlbC1yZWQ7XG4gIHBhZGRpbmc6IDAuMzVyZW0gMC4xcmVtIDAgMC4xcmVtO1xuXG4gIHNwYW4ge1xuICAgIGNvbG9yOiBjLiRtYXJ2ZWwtZm9udC13aGl0ZTtcbiAgICBmb250LWZhbWlseTogZi4kbWFydmVsLWZvbnQ7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuXG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbkBtaXhpbiB3MTAwaDEwMCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbkBtaXhpbiBmbGV4LWNlbnRlci1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuQG1peGluIGNhcmQtc3R5bGUge1xuICBwYWRkaW5nOiAzcmVtIDNyZW0gM3JlbSAycmVtO1xuICBiYWNrZ3JvdW5kOiBjLiR3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDNyZW0gcmdiYShjLiRtYXJ2ZWwtYmxhY2ssIDAuNDUpO1xuICBib3JkZXItbGVmdDogMXJlbSBzb2xpZCBjLiRtYXJ2ZWwtcmVkO1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm0pIHtcbiAgdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgLW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gIC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gIC1vLXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbn1cblxuQG1peGluIHRyYW5zaXRpb24oJGR1cmF0aW9uKSB7XG4gIHRyYW5zaXRpb246ICRkdXJhdGlvbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkZHVyYXRpb247XG4gIC1tb3otdHJhbnNpdGlvbjogJGR1cmF0aW9uO1xuICAtbXMtdHJhbnNpdGlvbjogJGR1cmF0aW9uO1xuICAtby10cmFuc2l0aW9uOiAkZHVyYXRpb247XG59XG4iLCIkbWFydmVsLXJlZDogI0U2MjQyOTsgLy8gRUMxRDI0XG4kbWFydmVsLXdoaXRlOiAjRENEQ0RDO1xuJG1hcnZlbC1mb250LXdoaXRlOiAjRkVGRUZFO1xuJG1hcnZlbC1ibGFjazogIzIwMjAyMDtcblxuJG1hcnZlbC1ncmV5OiAjMjAyMDIwO1xuJG1hcnZlbC1kYXJrLWdyZXk6ICMxNTE1MTU7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiJdfQ== */"] });


/***/ }),

/***/ "is9J":
/*!*************************************************!*\
  !*** ./src/app/service/data-storage.service.ts ***!
  \*************************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts-md5/dist/md5 */ "kScs");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_comic_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/comic.model */ "ADft");
/* harmony import */ var _model_creator_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/creator.model */ "IKXF");
/* harmony import */ var _model_character_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/character.model */ "878Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./status.service */ "LYZi");
/* harmony import */ var _comic_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comic.service */ "lubP");
/* harmony import */ var _shared_global_variables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/global.variables */ "5Bsy");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../auth/auth.service */ "qXBG");












class DataStorageService {
    constructor(http, statusService, comicService, globals, authService) {
        this.http = http;
        this.statusService = statusService;
        this.comicService = comicService;
        this.globals = globals;
        this.authService = authService;
        this.timestamp = "0";
    }
    getComics(title, year, page, offset) {
        console.info(`[INFO] Get comics for year=${year}, page=${page} with offset ${offset}, query by title=${title}`);
        const ENDPOINT = "/v1/public/comics";
        const params = new Map();
        params.set("limit", this.globals.API_REQUEST_LIMIT.toString());
        params.set("offset", offset.toString());
        params.set("format", "comic");
        params.set("formatType", "comic");
        params.set("noVariants", "true");
        params.set("orderBy", "title");
        if (year.toString() !== '0') {
            params.set("dateRange", `${year}-01-01,${year}-12-31`);
        }
        if (title !== '')
            params.set("titleStartsWith", title);
        this.statusService.getLoadingStatus().next(true);
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MARVEL_BASE_URL + ENDPOINT}`, this.setRequestOptions(params)).toPromise()
            .then((response) => {
            console.info("[INFO] Success in getComics", response);
            this.processResponseData(response.data.results, response.data.total, page);
            this.statusService.getLoadingStatus().next(false);
        }).catch((error) => {
            console.error("Error occured in getComics.", error);
            this.statusService.getLoadingStatus().next(false);
        });
    }
    getCharactersByComicId(id) {
        // /v1/public/comics/{comicId}/characters
        const ENDPOINT = `/v1/public/comics/${id}/characters`;
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MARVEL_BASE_URL + ENDPOINT}`, this.setRequestOptions()).toPromise()
            .then((response) => {
            console.log("Success in fetchCharactersByComicId", response);
            const resCharacters = response.data.results;
            const characters = [];
            for (const character of resCharacters) {
                let thumbnail = character.thumbnail.path + "/portrait_uncanny." + character.thumbnail.extension;
                characters.push(new _model_character_model__WEBPACK_IMPORTED_MODULE_5__["Character"](character.id, character.name, character.resourceURI, character.description, thumbnail));
            }
            this.comicService.addCharactersToComic(id, characters);
        }).catch((error) => {
            console.error("Error occured in fetchCharactersByComicId.", error);
        });
    }
    setRequestOptions(additionalParams = new Map()) {
        this.timestamp = Date.now().toString();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "Accept": "application/json",
        });
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set("apikey", _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MARVEL_API_PUBLIC_KEY)
            .set("ts", this.timestamp)
            .set("hash", this.getMd5Hash());
        for (const [key, value] of additionalParams) {
            params = params.set(key, value);
        }
        return { headers: headers, params: params };
    }
    // md5(timestamp + private_key + public_key)
    getMd5Hash() {
        const md5 = new ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__["Md5"]();
        const hash = md5
            .appendStr(this.timestamp)
            .appendStr(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MARVEL_API_PRIVATE_KEY)
            .appendStr(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MARVEL_API_PUBLIC_KEY)
            .end().toString();
        // console.log("MD5 Hash: ", hash);
        return hash;
    }
    processResponseData(responseComics, totalComics, page) {
        const comics = [];
        for (const comic of responseComics) {
            let printPrice = 0;
            let digitialPrice = 0;
            let saleDate = null;
            let focDate = null;
            let issuePreviewText = "";
            let detailLink = "";
            let thumbnail = comic.thumbnail.path + "/portrait_uncanny." + comic.thumbnail.extension;
            let creators = [];
            let characters = [];
            for (const price of comic.prices) {
                if (price.type === "printPrice")
                    printPrice = price.price;
                if (price.type === "digitalPurchasePrice")
                    digitialPrice = price.price;
            }
            for (const date of comic.dates) {
                if (date.type === "onsaleDate")
                    saleDate = new Date(date.date);
                if (date.type === "focDate")
                    focDate = new Date(date.date);
            }
            for (const textObj of comic.textObjects) {
                if (textObj.type === "issue_preview_text")
                    issuePreviewText = textObj.text;
            }
            for (const url of comic.urls) {
                if (url.type === "detail")
                    detailLink = url.url;
            }
            for (const creator of comic.creators.items) {
                creators.push(new _model_creator_model__WEBPACK_IMPORTED_MODULE_4__["Creator"](creator.name, creator.role));
            }
            comics.push(new _model_comic_model__WEBPACK_IMPORTED_MODULE_3__["Comic"](+comic.id, +comic.digitalId, comic.title, ((comic.description != null) ? comic.description : ""), comic.isbn, comic.issn, comic.upc, comic.diamondCode, +comic.pageCount, printPrice, digitialPrice, saleDate, focDate, issuePreviewText, comic.resourceURI, thumbnail, detailLink, creators, characters));
        }
        // console.info("[INFO] New comics: ", comics);
        this.comicService.addComics(comics, totalComics, page);
    }
    getFavoritesOfUser(user) {
        const url = this.globals.FIREBASE_DATABASE_URL + user.id + '.json';
        this.http.get(url).subscribe(comics => {
            if (comics != null) {
                const favs = [];
                for (const comic of comics) {
                    const creators = [];
                    const characters = [];
                    if (comic.creators) {
                        for (const creator of comic.creators) {
                            creators.push(new _model_creator_model__WEBPACK_IMPORTED_MODULE_4__["Creator"](creator.name, creator.type));
                        }
                    }
                    if (comic.characters) {
                        for (const character of comic.characters) {
                            characters.push(new _model_character_model__WEBPACK_IMPORTED_MODULE_5__["Character"](character.id, character.name, character.resourceURI, character.description, character.thumbnail));
                        }
                    }
                    const fav = new _model_comic_model__WEBPACK_IMPORTED_MODULE_3__["Comic"](comic.id, comic.digitalId, comic.title, comic.description, comic.isbn, comic.issn, comic.upc, comic.diamondCode, comic.pageCount, comic.printPrice, comic.digitalPurchasePrice, comic.saleDate, comic.focDate, comic.issuePreviewText, comic.resourceURI, comic.thumbnailURI, comic.marvelDetailLink, creators, characters);
                    favs.push(fav);
                }
                this.comicService.addFavorites(favs);
            }
        });
    }
    storeFavoritesOfUser(comics, user) {
        const url = this.globals.FIREBASE_DATABASE_URL + user.id + '.json';
        this.http
            .put(url, comics)
            .subscribe(response => {
            console.log(response);
        });
    }
}
DataStorageService.ɵfac = function DataStorageService_Factory(t) { return new (t || DataStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_status_service__WEBPACK_IMPORTED_MODULE_7__["StatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_comic_service__WEBPACK_IMPORTED_MODULE_8__["ComicService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_shared_global_variables__WEBPACK_IMPORTED_MODULE_9__["GlobalConstants"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"])); };
DataStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: DataStorageService, factory: DataStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "lubP":
/*!******************************************!*\
  !*** ./src/app/service/comic.service.ts ***!
  \******************************************/
/*! exports provided: ComicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicService", function() { return ComicService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_global_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/global.variables */ "5Bsy");



class ComicService {
    constructor(globals) {
        this.globals = globals;
        this.comicPageMapSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](new Map());
        this.comicsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.favoritesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.comics = [];
        this.comicPageMap = new Map();
        this.favorites = [];
    }
    addComics(comics, totalComics, page) {
        this.comics = this.comics.concat(comics);
        this.comicsSubject.next(this.comics.slice());
        this.addToComicPageMap(comics, totalComics, page);
    }
    addToComicPageMap(comics, totalComics, page) {
        if (this.comicPageMap.size === 0) {
            const pages = Math.ceil(totalComics / this.globals.API_REQUEST_LIMIT);
            for (let i = 1; i <= pages; i++) {
                (i == page) ? this.comicPageMap.set(i, comics) : this.comicPageMap.set(i, []);
            }
        }
        else {
            this.comicPageMap.set(page, comics);
        }
        this.comicPageMapSubject.next(this.comicPageMap);
    }
    addCharactersToComic(id, characters) {
        this.comics.find((comic) => {
            if (comic.id === id) {
                comic.characters = characters;
                this.comicsSubject.next(this.comics.slice());
            }
        });
    }
    isFavoriteComic(id) {
        return (this.favorites.find(comic => (comic.id === id)) !== undefined);
    }
    getComics() {
        return this.comics.slice();
    }
    getComicsSubject() {
        return this.comicsSubject;
    }
    getComicPageMap() {
        return this.comicPageMapSubject;
    }
    addFavorite(comic) {
        this.favorites.push(comic);
        this.favoritesSubject.next(this.favorites.slice());
        console.info("Favorite added: ", comic, this.favorites);
    }
    removeFavorite(fav) {
        this.favorites = this.favorites.filter(comic => comic.id !== fav.id);
        this.favoritesSubject.next(this.favorites.slice());
        console.info("Favorite removed: ", this.favorites);
    }
    addFavorites(comics) {
        this.favorites = comics;
        this.favoritesSubject.next(this.favorites.slice());
        console.info("Favorites: ", this.favorites);
    }
    getFavorites() {
        return this.favorites.slice();
    }
    getFavoritesSubject() {
        return this.favoritesSubject;
    }
    resetComics() {
        this.comics.length = 0;
        this.comicsSubject.next(this.comics.slice());
        this.comicPageMap = new Map();
        this.comicPageMapSubject.next(this.comicPageMap);
    }
    resetFavorites() {
        this.favorites.length = 0;
        this.favoritesSubject.next(this.favorites.slice());
    }
}
ComicService.ɵfac = function ComicService_Factory(t) { return new (t || ComicService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_global_variables__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"])); };
ComicService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ComicService, factory: ComicService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "mzA+":
/*!******************************************************!*\
  !*** ./src/app/auth/helpers/must-match.validator.ts ***!
  \******************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "o7am":
/*!***************************************************!*\
  !*** ./src/app/shared/loader/loader.component.ts ***!
  \***************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 5, vars: 0, consts: [[1, "box"], [1, "loader"], [1, "inner", "one"], [1, "inner", "two"], [1, "inner", "three"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\n  font-family: Marvel-Regular;\n  src: url('MarvelRegular-Dj83.ttf');\n  font-weight: normal;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Regular;\n  src: url('Roboto-Regular.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Bold;\n  src: url('Roboto-Bold.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Condensed-Regular;\n  src: url('RobotoCondensed-Regular.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Condensed-Bold;\n  src: url('RobotoCondensed-Bold.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-size: 2.25rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-size: 2rem;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-size: 1.75rem;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-size: 1.5rem;\n}\nh5[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-size: 1.25rem;\n}\nh6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-size: 1rem;\n}\n.box[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.loader[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  perspective: 800px;\n}\n.inner[_ngcontent-%COMP%] {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n.inner.one[_ngcontent-%COMP%] {\n  left: 0%;\n  top: 0%;\n  animation: rotate-one 1s linear infinite;\n  border-bottom: 4px solid #E62429;\n}\n.inner.two[_ngcontent-%COMP%] {\n  right: 0%;\n  top: 0%;\n  animation: rotate-two 1s linear infinite;\n  border-right: 5px solid #E62429;\n}\n.inner.three[_ngcontent-%COMP%] {\n  right: 0%;\n  bottom: 0%;\n  animation: rotate-three 1s linear infinite;\n  border-top: 6px solid #E62429;\n}\n@keyframes rotate-one {\n  0% {\n    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);\n  }\n  100% {\n    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);\n  }\n}\n@keyframes rotate-two {\n  0% {\n    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);\n  }\n  100% {\n    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);\n  }\n}\n@keyframes rotate-three {\n  0% {\n    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);\n  }\n  100% {\n    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX2ZvbnRzLnNjc3MiLCIuLi8uLi8uLi8uLi9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL19zaXplcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSwyQkFQWTtFQVFaLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0Qsa0NBQUE7QUNORDtBRFNBO0VBQ0UsMkJBZmU7RUFnQmYsOEJBQUE7RUFDQSxtQ0FBQTtFQUNELGtDQUFBO0FDUEQ7QURVQTtFQUNFLHdCQXJCWTtFQXNCWiwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Qsa0NBQUE7QUNSRDtBRFdBO0VBQ0UscUNBM0J5QjtFQTRCekIsdUNBQUE7RUFDQSxtQ0FBQTtFQUNELGtDQUFBO0FDVEQ7QURZQTtFQUNFLGtDQWpDc0I7RUFrQ3RCLG9DQUFBO0VBQ0EsbUNBQUE7RUFDRCxrQ0FBQTtBQ1ZEO0FDekJFO0VBQ0UsZUFOZTtFQU9mLGtCQUFBO0FEMkJKO0FDN0JFO0VBQ0UsZUFHaUI7RUFGakIsZUFBQTtBRGdDSjtBQ2xDRTtFQUNFLGVBR2lCO0VBRmpCLGtCQUFBO0FEcUNKO0FDdkNFO0VBQ0UsZUFHaUI7RUFGakIsaUJBQUE7QUQwQ0o7QUM1Q0U7RUFDRSxlQUdpQjtFQUZqQixrQkFBQTtBRCtDSjtBQ2pERTtFQUNFLGVBR2lCO0VBRmpCLGVBQUE7QURvREo7QUEzREE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFRTBCQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBRnFDRjtBQTdEQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQWdFRjtBQTdEQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBZ0VGO0FBN0RBO0VBQ0UsUUFBQTtFQUNBLE9BQUE7RUFDQSx3Q0FBQTtFQUNBLGdDQUFBO0FBZ0VGO0FBN0RBO0VBQ0UsU0FBQTtFQUNBLE9BQUE7RUFDQSx3Q0FBQTtFQUNBLCtCQUFBO0FBZ0VGO0FBN0RBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtFQUNBLDZCQUFBO0FBZ0VGO0FBN0RBO0VBQ0U7SUFDRSx1REFBQTtFQWdFRjtFQTlEQTtJQUNFLHlEQUFBO0VBZ0VGO0FBQ0Y7QUE3REE7RUFDRTtJQUNFLHNEQUFBO0VBK0RGO0VBN0RBO0lBQ0Usd0RBQUE7RUErREY7QUFDRjtBQTVEQTtFQUNFO0lBQ0Usc0RBQUE7RUE4REY7RUE1REE7SUFDRSx3REFBQTtFQThERjtBQUNGIiwiZmlsZSI6ImxvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRkaXI6ICcuLi8uLi9hc3NldHMvZm9udHMvJztcbiRtYXJ2ZWwtZm9udDogTWFydmVsLVJlZ3VsYXI7XG4kcm9ib3RvLXJlZ3VsYXI6IFJvYm90by1SZWd1bGFyO1xuJHJvYm90by1ib2xkOiBSb2JvdG8tQm9sZDtcbiRyb2JvdG8tY29uZGVuc2VkLXJlZ3VsYXI6IFJvYm90by1Db25kZW5zZWQtUmVndWxhcjtcbiRyb2JvdG8tY29uZGVuc2VkLWJvbGQ6IFJvYm90by1Db25kZW5zZWQtQm9sZDtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAkbWFydmVsLWZvbnQ7XG4gIHNyYzogdXJsKCcjeyRkaXJ9L01hcnZlbEZvbnQvTWFydmVsUmVndWxhci1EajgzLnR0ZicpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICRyb2JvdG8tcmVndWxhcjtcbiAgc3JjOiB1cmwoJyN7JGRpcn0vUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZicpO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAkcm9ib3RvLWJvbGQ7XG4gIHNyYzogdXJsKCcjeyRkaXJ9L1JvYm90by9Sb2JvdG8tQm9sZC50dGYnKTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJHJvYm90by1jb25kZW5zZWQtcmVndWxhcjtcbiAgc3JjOiB1cmwoJyN7JGRpcn0vUm9ib3RvQ29uZGVuc2VkL1JvYm90b0NvbmRlbnNlZC1SZWd1bGFyLnR0ZicpO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAkcm9ib3RvLWNvbmRlbnNlZC1ib2xkO1xuICBzcmM6IHVybCgnI3skZGlyfS9Sb2JvdG9Db25kZW5zZWQvUm9ib3RvQ29uZGVuc2VkLUJvbGQudHRmJyk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5cbiIsIkB1c2UgJ2luZGV4JyBhcyAqO1xuLmJveCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgQGluY2x1ZGUgZmxleC1jZW50ZXItY2VudGVyO1xufVxuXG4ubG9hZGVyIHtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwZXJzcGVjdGl2ZTogODAwcHg7XG59XG5cbi5pbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaW5uZXIub25lIHtcbiAgbGVmdDogMCU7XG4gIHRvcDogMCU7XG4gIGFuaW1hdGlvbjogcm90YXRlLW9uZSAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAkbWFydmVsLXJlZDtcbn1cblxuLmlubmVyLnR3byB7XG4gIHJpZ2h0OiAwJTtcbiAgdG9wOiAwJTtcbiAgYW5pbWF0aW9uOiByb3RhdGUtdHdvIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgJG1hcnZlbC1yZWQ7XG59XG5cbi5pbm5lci50aHJlZSB7XG4gIHJpZ2h0OiAwJTtcbiAgYm90dG9tOiAwJTtcbiAgYW5pbWF0aW9uOiByb3RhdGUtdGhyZWUgMXMgbGluZWFyIGluZmluaXRlO1xuICBib3JkZXItdG9wOiA2cHggc29saWQgJG1hcnZlbC1yZWQ7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlLW9uZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMzVkZWcpIHJvdGF0ZVkoLTQ1ZGVnKSByb3RhdGVaKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgzNWRlZykgcm90YXRlWSgtNDVkZWcpIHJvdGF0ZVooMzYwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZS10d28ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDUwZGVnKSByb3RhdGVZKDEwZGVnKSByb3RhdGVaKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCg1MGRlZykgcm90YXRlWSgxMGRlZykgcm90YXRlWigzNjBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlLXRocmVlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgzNWRlZykgcm90YXRlWSg1NWRlZykgcm90YXRlWigwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMzVkZWcpIHJvdGF0ZVkoNTVkZWcpIHJvdGF0ZVooMzYwZGVnKTtcbiAgfVxufVxuIiwiJGZvbnQtc2l6ZS1iYXNlIDogMTZweDtcbiRmb250LXNpemUtdXBwZXIgOiAzNnB4O1xuJGZvbnQtc2l6ZS1kZWMgOiA0cHg7XG5cbiRoZWFkaW5ncyA6IGgxIGgyIGgzIGg0IGg1IGg2O1xuQGVhY2ggJGhlYWRpbmcgaW4gJGhlYWRpbmdze1xuICAjeyRoZWFkaW5nfSB7XG4gICAgZm9udC1zaXplIDogJGZvbnQtc2l6ZS11cHBlcjtcbiAgICBmb250LXNpemUgOiAoJGZvbnQtc2l6ZS11cHBlciAvICRmb250LXNpemUtYmFzZSkgKyByZW07XG4gIH1cbiAgJGZvbnQtc2l6ZS11cHBlciA6ICRmb250LXNpemUtdXBwZXIgLSAkZm9udC1zaXplLWRlYztcbn1cbiIsIkB1c2UgJy4vY29sb3JzJyBhcyBjO1xuQHVzZSAnLi9mb250cycgYXMgZjtcbkB1c2UgJy4vc2l6ZXMnIGFzIHM7XG5cbkBtaXhpbiBtYXJ2ZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjLiRtYXJ2ZWwtcmVkO1xuICBwYWRkaW5nOiAwLjM1cmVtIDAuMXJlbSAwIDAuMXJlbTtcblxuICBzcGFuIHtcbiAgICBjb2xvcjogYy4kbWFydmVsLWZvbnQtd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IGYuJG1hcnZlbC1mb250O1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cblxuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5AbWl4aW4gdzEwMGgxMDAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5AbWl4aW4gZmxleC1jZW50ZXItY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbkBtaXhpbiBjYXJkLXN0eWxlIHtcbiAgcGFkZGluZzogM3JlbSAzcmVtIDNyZW0gMnJlbTtcbiAgYmFja2dyb3VuZDogYy4kd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMCAzcmVtIHJnYmEoYy4kbWFydmVsLWJsYWNrLCAwLjQ1KTtcbiAgYm9yZGVyLWxlZnQ6IDFyZW0gc29saWQgYy4kbWFydmVsLXJlZDtcbn1cblxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3JtKSB7XG4gIHRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gIC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAtbXMtdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAtby10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRkdXJhdGlvbikge1xuICB0cmFuc2l0aW9uOiAkZHVyYXRpb247XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJGR1cmF0aW9uO1xuICAtbW96LXRyYW5zaXRpb246ICRkdXJhdGlvbjtcbiAgLW1zLXRyYW5zaXRpb246ICRkdXJhdGlvbjtcbiAgLW8tdHJhbnNpdGlvbjogJGR1cmF0aW9uO1xufVxuIl19 */"] });


/***/ }),

/***/ "ovkp":
/*!*******************************************************!*\
  !*** ./src/app/components/comics/comics.component.ts ***!
  \*******************************************************/
/*! exports provided: ComicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicsComponent", function() { return ComicsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/data-storage.service */ "is9J");
/* harmony import */ var src_app_service_status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/status.service */ "LYZi");
/* harmony import */ var _service_comic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/comic.service */ "lubP");
/* harmony import */ var _shared_global_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/global.variables */ "5Bsy");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _comic_list_comic_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../comic-list/comic-list.component */ "rQPM");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/loader/loader.component */ "o7am");









function ComicsComponent_option_6_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ALL Years");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ComicsComponent_option_6_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](year_r5);
} }
function ComicsComponent_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ComicsComponent_option_6_p_1_Template, 2, 0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ComicsComponent_option_6_p_2_Template, 2, 1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", year_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("selected", ctx_r0.selectedYear == year_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", year_r5 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", year_r5 != 0);
} }
function ComicsComponent_app_comic_list_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-comic-list", 12);
} }
function ComicsComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
const _c0 = function (a0) { return { "selected-page": a0 }; };
function ComicsComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComicsComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const page_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.changePage(page_r9.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r9 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r4.selectedPage == page_r9.key))("value", page_r9.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r9.key);
} }
class ComicsComponent {
    constructor(dataService, statusService, comicService, globals) {
        this.dataService = dataService;
        this.statusService = statusService;
        this.comicService = comicService;
        this.globals = globals;
        this.startYear = 1949;
        this.endYear = 2021;
        this.yearOptions = [];
        this.selectedYear = 0;
        this.selectedPage = 1;
        this.isLoading = false;
        this.existingPages = 0;
        this.searchField = '';
        this.comicPageMap = null;
    }
    ngOnInit() {
        this.yearOptions.push(0);
        for (let i = this.endYear; i >= this.startYear; i--) {
            this.yearOptions.push(i);
        }
        this.comicPageMapSubscription = this.comicService.getComicPageMap().subscribe((comicMap) => {
            console.log("Comic Map: ", comicMap);
            if (comicMap != null) {
                this.comicPageMap = comicMap;
                this.statusService.getDisplayedComicList().next(comicMap.get(this.selectedPage));
            }
        });
        this.yearSubscription = this.statusService.getSelectedYear().subscribe((year) => {
            this.selectedYear = year;
            this.selectedPage = 1;
            if (this.comicPageMap == null || this.comicPageMap.size === 0) {
                this.dataService.getComics(this.searchField, year, 1, 0); // first page, offset 0 -> new year = new comics
            }
        });
        this.searchSubscription = this.statusService.getSearchField().subscribe((search) => {
            this.searchField = search;
            this.selectedPage = 1;
            if (this.comicPageMap == null || this.comicPageMap.size === 0) {
                this.dataService.getComics(search, this.selectedYear, 1, 0); // first page, offset 0 -> new year = new comics
            }
        });
        this.loadingSubscription = this.statusService.getLoadingStatus().subscribe((loadingState) => {
            this.isLoading = loadingState;
            console.log("loading state: ", this.isLoading);
        });
    }
    changeYear(year) {
        this.comicService.resetComics();
        this.statusService.resetYearStatus(this.selectedYear);
    }
    changeSearchField(searchField) {
        this.comicService.resetComics();
        this.statusService.resetSearchStatus(this.searchField);
    }
    changePage(page) {
        console.info(`[INFO] Page changed from ${this.selectedPage} to ${page}.`);
        this.selectedPage = page;
        if (this.comicPageMap.get(page).length === 0) {
            this.dataService.getComics(this.searchField, this.selectedYear, page, this.globals.API_REQUEST_LIMIT * (page - 1));
        }
        else {
            this.statusService.getDisplayedComicList().next(this.comicPageMap.get(page));
        }
    }
    ngOnDestroy() {
        this.searchSubscription.unsubscribe();
        this.yearSubscription.unsubscribe();
        this.loadingSubscription.unsubscribe();
        this.comicPageMapSubscription.unsubscribe();
    }
}
ComicsComponent.ɵfac = function ComicsComponent_Factory(t) { return new (t || ComicsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_comic_service__WEBPACK_IMPORTED_MODULE_3__["ComicService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_global_variables__WEBPACK_IMPORTED_MODULE_4__["GlobalConstants"])); };
ComicsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComicsComponent, selectors: [["app-comics"]], decls: 17, vars: 8, consts: [[1, "container"], [1, "intro"], [1, "filter-container"], ["name", "year", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "search for comics by name or characters", "name", "searchField", 3, "ngModel", "ngModelChange", "change"], ["listType", "full", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "container", "intro", "btn-group", "page-select"], ["class", "page-btn", "type", "button", 3, "ngClass", "value", "click", 4, "ngFor", "ngForOf"], [3, "value"], [4, "ngIf"], ["listType", "full"], ["type", "button", 1, "page-btn", 3, "ngClass", "value", "click"]], template: function ComicsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ComicsComponent_Template_select_ngModelChange_5_listener($event) { return ctx.selectedYear = $event; })("change", function ComicsComponent_Template_select_change_5_listener($event) { return ctx.changeYear($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ComicsComponent_option_6_Template, 3, 4, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ComicsComponent_Template_input_ngModelChange_7_listener($event) { return ctx.searchField = $event; })("change", function ComicsComponent_Template_input_change_7_listener($event) { return ctx.changeSearchField($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ComicsComponent_app_comic_list_8_Template, 1, 0, "app-comic-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ComicsComponent_ng_template_9_Template, 1, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Pages:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ComicsComponent_button_15_Template, 2, 5, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.yearOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchField);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 6, ctx.comicPageMap));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_z"], _comic_list_comic_list_component__WEBPACK_IMPORTED_MODULE_7__["ComicListComponent"], _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["KeyValuePipe"]], styles: ["@font-face {\n  font-family: Marvel-Regular;\n  src: url('MarvelRegular-Dj83.ttf');\n  font-weight: normal;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Regular;\n  src: url('Roboto-Regular.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Bold;\n  src: url('Roboto-Bold.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Condensed-Regular;\n  src: url('RobotoCondensed-Regular.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Condensed-Bold;\n  src: url('RobotoCondensed-Bold.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-size: 2.25rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-size: 2rem;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-size: 1.75rem;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-size: 1.5rem;\n}\nh5[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-size: 1.25rem;\n}\nh6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-size: 1rem;\n}\n.container[_ngcontent-%COMP%] {\n  padding: 3rem 3rem 0 3rem;\n}\n.intro[_ngcontent-%COMP%] {\n  padding: 3rem 3rem 3rem 2rem;\n  background: #ffffff;\n  box-shadow: 0 0 3rem rgba(32, 32, 32, 0.45);\n  border-left: 1rem solid #E62429;\n}\n.intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n}\n.intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 800;\n  margin-right: 0.5rem;\n}\n.filter-container[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n  max-width: 100%;\n}\n.filter-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(1) {\n  flex: 1 1 20%;\n  max-width: 10rem;\n}\n.filter-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(2) {\n  flex: 1 1 80%;\n}\n.filter-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border-left: 1rem solid #E62429;\n  font-family: Roboto-Condensed-Regular;\n  font-size: 1rem;\n  padding: 0.5rem 1rem;\n}\n.filter-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  -webkit-border-radius: 0px;\n  -moz-border-radius: 0px;\n  -ms-border-radius: 0px;\n  -o-border-radius: 0px;\n  border-width: 0.1rem;\n  width: 33%;\n  height: 33px;\n  padding: 10px;\n}\n.filter-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.2rem;\n}\n.filter-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 100%;\n  background: none;\n  border: 0.1rem solid #202020;\n  cursor: pointer;\n  font-size: 1rem;\n  padding: 0.2rem;\n}\n.filter-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   button.selected-page[_ngcontent-%COMP%] {\n  background: #202020;\n  color: #ffffff;\n}\n.filter-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%] {\n  margin: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX2ZvbnRzLnNjc3MiLCIuLi8uLi8uLi8uLi9jb21pY3MuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL19zaXplcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fbWl4aW5zLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLDJCQVBZO0VBUVosa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDRCxrQ0FBQTtBQ05EO0FEU0E7RUFDRSwyQkFmZTtFQWdCZiw4QkFBQTtFQUNBLG1DQUFBO0VBQ0Qsa0NBQUE7QUNQRDtBRFVBO0VBQ0Usd0JBckJZO0VBc0JaLDJCQUFBO0VBQ0EsbUNBQUE7RUFDRCxrQ0FBQTtBQ1JEO0FEV0E7RUFDRSxxQ0EzQnlCO0VBNEJ6Qix1Q0FBQTtFQUNBLG1DQUFBO0VBQ0Qsa0NBQUE7QUNURDtBRFlBO0VBQ0Usa0NBakNzQjtFQWtDdEIsb0NBQUE7RUFDQSxtQ0FBQTtFQUNELGtDQUFBO0FDVkQ7QUN6QkU7RUFDRSxlQU5lO0VBT2Ysa0JBQUE7QUQyQko7QUM3QkU7RUFDRSxlQUdpQjtFQUZqQixlQUFBO0FEZ0NKO0FDbENFO0VBQ0UsZUFHaUI7RUFGakIsa0JBQUE7QURxQ0o7QUN2Q0U7RUFDRSxlQUdpQjtFQUZqQixpQkFBQTtBRDBDSjtBQzVDRTtFQUNFLGVBR2lCO0VBRmpCLGtCQUFBO0FEK0NKO0FDakRFO0VBQ0UsZUFHaUI7RUFGakIsZUFBQTtBRG9ESjtBQTFEQTtFQUNFLHlCQUFBO0FBNkRGO0FBMURBO0VFNkJFLDRCQUFBO0VBQ0EsbUJDNUJNO0VENkJOLDJDQUFBO0VBQ0EsK0JBQUE7QUZpQ0Y7QUEvREU7RUFDRSxtQkFBQTtBQWlFSjtBQWhFSTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7QUFrRU47QUE3REE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBRUEsZUFBQTtBQStERjtBQTdERTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQStESjtBQTVERTtFQUNFLGFBQUE7QUE4REo7QUEzREU7RUFDRSwrQkFBQTtFQUNBLHFDRGpDdUI7RUNrQ3ZCLGVBQUE7RUFFQSxvQkFBQTtBQTRESjtBQXpERTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFFQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQTBESjtBQXZERTtFQUNFLFlBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQXdESjtBQXRESTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBd0ROO0FBdERNO0VBQ0UsbUJHcEVNO0VIcUVOLGNHbEVBO0FIMEhSO0FBdERNO0VBQ0UsV0FBQTtBQXdEUiIsImZpbGUiOiJjb21pY3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZGlyOiAnLi4vLi4vYXNzZXRzL2ZvbnRzLyc7XG4kbWFydmVsLWZvbnQ6IE1hcnZlbC1SZWd1bGFyO1xuJHJvYm90by1yZWd1bGFyOiBSb2JvdG8tUmVndWxhcjtcbiRyb2JvdG8tYm9sZDogUm9ib3RvLUJvbGQ7XG4kcm9ib3RvLWNvbmRlbnNlZC1yZWd1bGFyOiBSb2JvdG8tQ29uZGVuc2VkLVJlZ3VsYXI7XG4kcm9ib3RvLWNvbmRlbnNlZC1ib2xkOiBSb2JvdG8tQ29uZGVuc2VkLUJvbGQ7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJG1hcnZlbC1mb250O1xuICBzcmM6IHVybCgnI3skZGlyfS9NYXJ2ZWxGb250L01hcnZlbFJlZ3VsYXItRGo4My50dGYnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAkcm9ib3RvLXJlZ3VsYXI7XG4gIHNyYzogdXJsKCcjeyRkaXJ9L1JvYm90by9Sb2JvdG8tUmVndWxhci50dGYnKTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJHJvYm90by1ib2xkO1xuICBzcmM6IHVybCgnI3skZGlyfS9Sb2JvdG8vUm9ib3RvLUJvbGQudHRmJyk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICRyb2JvdG8tY29uZGVuc2VkLXJlZ3VsYXI7XG4gIHNyYzogdXJsKCcjeyRkaXJ9L1JvYm90b0NvbmRlbnNlZC9Sb2JvdG9Db25kZW5zZWQtUmVndWxhci50dGYnKTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJHJvYm90by1jb25kZW5zZWQtYm9sZDtcbiAgc3JjOiB1cmwoJyN7JGRpcn0vUm9ib3RvQ29uZGVuc2VkL1JvYm90b0NvbmRlbnNlZC1Cb2xkLnR0ZicpO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuXG4iLCJAdXNlICdpbmRleCcgYXMgKjtcblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDNyZW0gM3JlbSAwIDNyZW07XG59XG5cbi5pbnRybyB7XG4gIEBpbmNsdWRlIGNhcmQtc3R5bGU7XG4gIHAge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgc3BhbiB7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgfVxuICB9XG59XG5cbi5maWx0ZXItY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDFyZW07XG5cbiAgbWF4LXdpZHRoOiAxMDAlO1xuXG4gICY+KjpudGgtY2hpbGQoMSkge1xuICAgIGZsZXg6IDEgMSAyMCU7XG4gICAgbWF4LXdpZHRoOiAxMHJlbTtcbiAgfVxuXG4gICY+KjpudGgtY2hpbGQoMikge1xuICAgIGZsZXg6IDEgMSA4MCU7XG4gIH1cblxuICBzZWxlY3Qge1xuICAgIGJvcmRlci1sZWZ0OiAxcmVtIHNvbGlkICRtYXJ2ZWwtcmVkO1xuICAgIGZvbnQtZmFtaWx5OiAkcm9ib3RvLWNvbmRlbnNlZC1yZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcblxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICB9XG5cbiAgaW5wdXQge1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAtbXMtYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIC1vLWJvcmRlci1yYWRpdXM6IDBweDtcblxuICAgIGJvcmRlci13aWR0aDogMC4xcmVtO1xuICAgIHdpZHRoOiAzMyU7XG4gICAgaGVpZ2h0OiAzM3B4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICAuYnRuLWdyb3VwIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMC4ycmVtO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAkbWFydmVsLWdyZXk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBwYWRkaW5nOiAwLjJyZW07XG5cbiAgICAgICYuc2VsZWN0ZWQtcGFnZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRtYXJ2ZWwtZ3JleTtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIH1cbiAgICAgIC5wYWdlLWJ0biB7XG4gICAgICAgIG1hcmdpbjogM3B4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiJGZvbnQtc2l6ZS1iYXNlIDogMTZweDtcbiRmb250LXNpemUtdXBwZXIgOiAzNnB4O1xuJGZvbnQtc2l6ZS1kZWMgOiA0cHg7XG5cbiRoZWFkaW5ncyA6IGgxIGgyIGgzIGg0IGg1IGg2O1xuQGVhY2ggJGhlYWRpbmcgaW4gJGhlYWRpbmdze1xuICAjeyRoZWFkaW5nfSB7XG4gICAgZm9udC1zaXplIDogJGZvbnQtc2l6ZS11cHBlcjtcbiAgICBmb250LXNpemUgOiAoJGZvbnQtc2l6ZS11cHBlciAvICRmb250LXNpemUtYmFzZSkgKyByZW07XG4gIH1cbiAgJGZvbnQtc2l6ZS11cHBlciA6ICRmb250LXNpemUtdXBwZXIgLSAkZm9udC1zaXplLWRlYztcbn1cbiIsIkB1c2UgJy4vY29sb3JzJyBhcyBjO1xuQHVzZSAnLi9mb250cycgYXMgZjtcbkB1c2UgJy4vc2l6ZXMnIGFzIHM7XG5cbkBtaXhpbiBtYXJ2ZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjLiRtYXJ2ZWwtcmVkO1xuICBwYWRkaW5nOiAwLjM1cmVtIDAuMXJlbSAwIDAuMXJlbTtcblxuICBzcGFuIHtcbiAgICBjb2xvcjogYy4kbWFydmVsLWZvbnQtd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IGYuJG1hcnZlbC1mb250O1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cblxuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5AbWl4aW4gdzEwMGgxMDAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5AbWl4aW4gZmxleC1jZW50ZXItY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbkBtaXhpbiBjYXJkLXN0eWxlIHtcbiAgcGFkZGluZzogM3JlbSAzcmVtIDNyZW0gMnJlbTtcbiAgYmFja2dyb3VuZDogYy4kd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMCAzcmVtIHJnYmEoYy4kbWFydmVsLWJsYWNrLCAwLjQ1KTtcbiAgYm9yZGVyLWxlZnQ6IDFyZW0gc29saWQgYy4kbWFydmVsLXJlZDtcbn1cblxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3JtKSB7XG4gIHRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gIC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAtbXMtdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAtby10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRkdXJhdGlvbikge1xuICB0cmFuc2l0aW9uOiAkZHVyYXRpb247XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJGR1cmF0aW9uO1xuICAtbW96LXRyYW5zaXRpb246ICRkdXJhdGlvbjtcbiAgLW1zLXRyYW5zaXRpb246ICRkdXJhdGlvbjtcbiAgLW8tdHJhbnNpdGlvbjogJGR1cmF0aW9uO1xufVxuIiwiJG1hcnZlbC1yZWQ6ICNFNjI0Mjk7IC8vIEVDMUQyNFxuJG1hcnZlbC13aGl0ZTogI0RDRENEQztcbiRtYXJ2ZWwtZm9udC13aGl0ZTogI0ZFRkVGRTtcbiRtYXJ2ZWwtYmxhY2s6ICMyMDIwMjA7XG5cbiRtYXJ2ZWwtZ3JleTogIzIwMjAyMDtcbiRtYXJ2ZWwtZGFyay1ncmV5OiAjMTUxNTE1O1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4iXX0= */"] });


/***/ }),

/***/ "qXBG":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/user.model */ "UbF0");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_global_variables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/global.variables */ "5Bsy");
/* harmony import */ var _service_comic_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/comic.service */ "lubP");









class AuthService {
    constructor(http, router, globals, comicService) {
        this.http = http;
        this.router = router;
        this.globals = globals;
        this.comicService = comicService;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    signup(email, password) {
        console.table(this.globals);
        const url = this.globals.GOOGLE_SIGNUP_URL + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].GOOGLE_API_KEY;
        const payload = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        console.info("POST | SIGN UP URL: " + url, payload);
        return this.http
            .post(url, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(resData => {
            this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    }
    login(email, password) {
        return this.http
            .post(this.globals.GOOGLE_VERIFY_URL + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].GOOGLE_API_KEY, {
            email: email,
            password: password,
            returnSecureToken: true
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(resData => {
            this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    }
    autoLogin() {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return;
        }
        const loadedUser = new _model_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
        if (loadedUser.token) {
            this.user.next(loadedUser);
            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() -
                new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }
    logout() {
        this.user.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
        this.comicService.resetFavorites();
    }
    autoLogout(expirationDuration) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, expirationDuration);
    }
    handleAuthentication(email, userId, token, expiresIn) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new _model_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](email, userId, token, expirationDate);
        this.user.next(user);
        this.autoLogout(expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
    }
    handleError(errorRes) {
        let errorMessage = 'An unknown error occurred!';
        if (!errorRes.error || !errorRes.error.error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exist.';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'This password is not correct.';
                break;
            case 'PASSWORDS_NOT_MATCHING':
                errorMessage = 'Your password must match with the retyped password.';
                break;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared_global_variables__WEBPACK_IMPORTED_MODULE_7__["GlobalConstants"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_service_comic_service__WEBPACK_IMPORTED_MODULE_8__["ComicService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "rQPM":
/*!***************************************************************!*\
  !*** ./src/app/components/comic-list/comic-list.component.ts ***!
  \***************************************************************/
/*! exports provided: ComicListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicListComponent", function() { return ComicListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_status_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/status.service */ "LYZi");
/* harmony import */ var _service_comic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/comic.service */ "lubP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ComicListComponent_div_0_a_1_figcaption_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figcaption", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\uD83C\uDF1F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ComicListComponent_div_0_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComicListComponent_div_0_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const comic_r4 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.selectComic(comic_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "figcaption");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ComicListComponent_div_0_a_1_figcaption_5_Template, 2, 0, "figcaption", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comic_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", comic_r4.thumbnailURI, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Cover of ", comic_r4.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comic_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.validateId(comic_r4));
} }
function ComicListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ComicListComponent_div_0_a_1_Template, 6, 4, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.comicList);
} }
function ComicListComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sorry, no comics available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ComicListComponent {
    constructor(statusService, comicService, router) {
        this.statusService = statusService;
        this.comicService = comicService;
        this.router = router;
    }
    ngOnInit() {
        switch (this.listType) {
            case "full":
                this.displayedComicsSubscription = this.statusService.getDisplayedComicList().subscribe((comics = []) => {
                    this.comicList = comics;
                });
                this.favoriteSubscription = this.comicService.getFavoritesSubject().subscribe(favs => {
                    this.favoriteComics = favs;
                });
                break;
            case "favorites":
                break;
        }
    }
    selectComic(comic) {
        this.statusService.getSelectedComic().next(comic);
        this.router.navigate(['comics', 'comic', comic.id]);
    }
    validateId(comic) {
        return this.favoriteComics.find(x => x.id === comic.id);
    }
    ngOnDestroy() {
        if (this.displayedComicsSubscription) {
            this.displayedComicsSubscription.unsubscribe();
        }
    }
}
ComicListComponent.ɵfac = function ComicListComponent_Factory(t) { return new (t || ComicListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_status_service__WEBPACK_IMPORTED_MODULE_1__["StatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_comic_service__WEBPACK_IMPORTED_MODULE_2__["ComicService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ComicListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComicListComponent, selectors: [["app-comic-list"]], inputs: { listType: "listType", comicList: "comicList", favoriteComics: "favoriteComics" }, decls: 3, vars: 2, consts: [["class", "comic-list cards", 4, "ngIf", "ngIfElse"], ["noComics", ""], [1, "comic-list", "cards"], ["class", "comic-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "comic-item", 3, "click"], [1, "card"], [3, "src", "alt"], ["class", "faved", 4, "ngIf"], [1, "faved"]], template: function ComicListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ComicListComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ComicListComponent_ng_template_1_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comicList.length > 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@font-face {\n  font-family: Marvel-Regular;\n  src: url('MarvelRegular-Dj83.ttf');\n  font-weight: normal;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Regular;\n  src: url('Roboto-Regular.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Bold;\n  src: url('Roboto-Bold.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Condensed-Regular;\n  src: url('RobotoCondensed-Regular.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@font-face {\n  font-family: Roboto-Condensed-Bold;\n  src: url('RobotoCondensed-Bold.ttf');\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-size: 2.25rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-size: 2rem;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-size: 1.75rem;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-size: 1.5rem;\n}\nh5[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-size: 1.25rem;\n}\nh6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-size: 1rem;\n}\n.cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  gap: 1rem;\n  padding: 3rem 1rem;\n}\n.cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 180px;\n  height: 270px;\n  overflow: hidden;\n  box-shadow: 0 5px 10px rgba(32, 32, 32, 0.8);\n  transform-origin: center top;\n  transform-style: preserve-3d;\n  transform: translateZ(0);\n  -webkit-transform: translateZ(0);\n  -moz-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  -o-transform: translateZ(0);\n  transition: 0.3s;\n  -webkit-transition: 0.3s;\n  -moz-transition: 0.3s;\n  -ms-transition: 0.3s;\n  -o-transition: 0.3s;\n  box-shadow: 0 8px 16px 3px rgba(32, 32, 32, 0.6);\n}\n.cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100%;\n}\n.cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 0.5rem;\n  font-size: 1.2rem;\n  background: rgba(32, 32, 32, 0.7);\n  color: #ffffff;\n}\n.cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .faved[_ngcontent-%COMP%] {\n  left: initial;\n  top: 0;\n  color: yellow;\n  font-size: 3.3rem;\n  display: table;\n  background: unset;\n}\n.cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  z-index: 10;\n  width: 200%;\n  height: 100%;\n  top: -90%;\n  left: -20px;\n  opacity: 0.5;\n  background: linear-gradient(to top, transparent, #ffffff 15%, rgba(255, 255, 255, 0.5));\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n  transition: 0.3s;\n  -webkit-transition: 0.3s;\n  -moz-transition: 0.3s;\n  -ms-transition: 0.3s;\n  -o-transition: 0.3s;\n}\n.cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover, .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:focus, .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:active {\n  transform: translateY(-3px) scale(1.05) rotateX(15deg);\n  -webkit-transform: translateY(-3px) scale(1.05) rotateX(15deg);\n  -moz-transform: translateY(-3px) scale(1.05) rotateX(15deg);\n  -ms-transform: translateY(-3px) scale(1.05) rotateX(15deg);\n  -o-transform: translateY(-3px) scale(1.05) rotateX(15deg);\n}\n.cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   figcaption[_ngcontent-%COMP%], .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:focus   figcaption[_ngcontent-%COMP%], .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:active   figcaption[_ngcontent-%COMP%] {\n  transform: none;\n  -webkit-transform: none;\n  -moz-transform: none;\n  -ms-transform: none;\n  -o-transform: none;\n}\n.cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover::after, .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:focus::after, .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:active::after {\n  transform: rotate(25deg);\n  -webkit-transform: rotate(25deg);\n  -moz-transform: rotate(25deg);\n  -ms-transform: rotate(25deg);\n  -o-transform: rotate(25deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX2ZvbnRzLnNjc3MiLCIuLi8uLi8uLi8uLi9jb21pYy1saXN0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fc2l6ZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX21peGlucy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSwyQkFQWTtFQVFaLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0Qsa0NBQUE7QUNORDtBRFNBO0VBQ0UsMkJBZmU7RUFnQmYsOEJBQUE7RUFDQSxtQ0FBQTtFQUNELGtDQUFBO0FDUEQ7QURVQTtFQUNFLHdCQXJCWTtFQXNCWiwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Qsa0NBQUE7QUNSRDtBRFdBO0VBQ0UscUNBM0J5QjtFQTRCekIsdUNBQUE7RUFDQSxtQ0FBQTtFQUNELGtDQUFBO0FDVEQ7QURZQTtFQUNFLGtDQWpDc0I7RUFrQ3RCLG9DQUFBO0VBQ0EsbUNBQUE7RUFDRCxrQ0FBQTtBQ1ZEO0FDekJFO0VBQ0UsZUFOZTtFQU9mLGtCQUFBO0FEMkJKO0FDN0JFO0VBQ0UsZUFHaUI7RUFGakIsZUFBQTtBRGdDSjtBQ2xDRTtFQUNFLGVBR2lCO0VBRmpCLGtCQUFBO0FEcUNKO0FDdkNFO0VBQ0UsZUFHaUI7RUFGakIsaUJBQUE7QUQwQ0o7QUM1Q0U7RUFDRSxlQUdpQjtFQUZqQixrQkFBQTtBRCtDSjtBQ2pERTtFQUNFLGVBR2lCO0VBRmpCLGVBQUE7QURvREo7QUF6REE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFFQSxrQkFBQTtBQTJERjtBQXpERTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFRXdCRix3QkZ2QnFCO0VFd0JyQixnQ0Z4QnFCO0VFeUJyQiw2QkZ6QnFCO0VFMEJyQiw0QkYxQnFCO0VFMkJyQiwyQkYzQnFCO0VFK0JyQixnQkY5QnNCO0VFK0J0Qix3QkYvQnNCO0VFZ0N0QixxQkZoQ3NCO0VFaUN0QixvQkZqQ3NCO0VFa0N0QixtQkZsQ3NCO0VBd0NwQixnREFBQTtBQTRCSjtBQWxFSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQW9FTjtBQWpFSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxjRzNCRTtBSDhGUjtBQWpFSTtFQUNFLGFBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBbUVOO0FBaEVJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUZBQUE7RUViSix3QkZjdUI7RUVidkIsZ0NGYXVCO0VFWnZCLDZCRll1QjtFRVh2Qiw0QkZXdUI7RUVWdkIsMkJGVXVCO0VFTnZCLGdCRk93QjtFRU54Qix3QkZNd0I7RUVMeEIscUJGS3dCO0VFSnhCLG9CRkl3QjtFRUh4QixtQkZHd0I7QUEwRTFCO0FBckVJO0VFcEJGLHNERnFCdUI7RUVwQnZCLDhERm9CdUI7RUVuQnZCLDJERm1CdUI7RUVsQnZCLDBERmtCdUI7RUVqQnZCLHlERmlCdUI7QUEyRXpCO0FBekVNO0VFdkJKLGVGd0J5QjtFRXZCekIsdUJGdUJ5QjtFRXRCekIsb0JGc0J5QjtFRXJCekIsbUJGcUJ5QjtFRXBCekIsa0JGb0J5QjtBQStFM0I7QUE1RU07RUUzQkosd0JGNEJ5QjtFRTNCekIsZ0NGMkJ5QjtFRTFCekIsNkJGMEJ5QjtFRXpCekIsNEJGeUJ5QjtFRXhCekIsMkJGd0J5QjtBQWtGM0IiLCJmaWxlIjoiY29taWMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRkaXI6ICcuLi8uLi9hc3NldHMvZm9udHMvJztcbiRtYXJ2ZWwtZm9udDogTWFydmVsLVJlZ3VsYXI7XG4kcm9ib3RvLXJlZ3VsYXI6IFJvYm90by1SZWd1bGFyO1xuJHJvYm90by1ib2xkOiBSb2JvdG8tQm9sZDtcbiRyb2JvdG8tY29uZGVuc2VkLXJlZ3VsYXI6IFJvYm90by1Db25kZW5zZWQtUmVndWxhcjtcbiRyb2JvdG8tY29uZGVuc2VkLWJvbGQ6IFJvYm90by1Db25kZW5zZWQtQm9sZDtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAkbWFydmVsLWZvbnQ7XG4gIHNyYzogdXJsKCcjeyRkaXJ9L01hcnZlbEZvbnQvTWFydmVsUmVndWxhci1EajgzLnR0ZicpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICRyb2JvdG8tcmVndWxhcjtcbiAgc3JjOiB1cmwoJyN7JGRpcn0vUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZicpO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAkcm9ib3RvLWJvbGQ7XG4gIHNyYzogdXJsKCcjeyRkaXJ9L1JvYm90by9Sb2JvdG8tQm9sZC50dGYnKTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJHJvYm90by1jb25kZW5zZWQtcmVndWxhcjtcbiAgc3JjOiB1cmwoJyN7JGRpcn0vUm9ib3RvQ29uZGVuc2VkL1JvYm90b0NvbmRlbnNlZC1SZWd1bGFyLnR0ZicpO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAkcm9ib3RvLWNvbmRlbnNlZC1ib2xkO1xuICBzcmM6IHVybCgnI3skZGlyfS9Sb2JvdG9Db25kZW5zZWQvUm9ib3RvQ29uZGVuc2VkLUJvbGQudHRmJyk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5cbiIsIkB1c2UgJ2luZGV4JyBhcyAqO1xuXG4vLyByZWZlcmVuY2U6IGh0dHBzOi8vY29kZXBlbi5pby9tclJlaWhhL3Blbi9Sd1BnTGVNXG4uY2FyZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuXG4gIHBhZGRpbmc6IDNyZW0gMXJlbTtcblxuICAuY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDI3MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKCRtYXJ2ZWwtYmxhY2ssIC44KTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgdG9wO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVooMCkpO1xuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oLjNzKTtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgZmlnY2FwdGlvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoJG1hcnZlbC1ibGFjaywgMC43KTtcbiAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgfVxuICAgIC5mYXZlZCB7XG4gICAgICBsZWZ0OiBpbml0aWFsO1xuICAgICAgdG9wOiAwO1xuICAgICAgY29sb3I6IHllbGxvdztcbiAgICAgIGZvbnQtc2l6ZTogMy4zcmVtO1xuICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICBiYWNrZ3JvdW5kOiB1bnNldDtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgd2lkdGg6IDIwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB0b3A6IC05MCU7XG4gICAgICBsZWZ0OiAtMjBweDtcbiAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQsICR3aGl0ZSAxNSUsIHJnYmEoJHdoaXRlLCAuNSkpO1xuICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHJvdGF0ZSg0NWRlZykpO1xuICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbiguM3MpO1xuICAgIH1cblxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggM3B4IHJnYmEoICRtYXJ2ZWwtYmxhY2ssIC42ICk7XG5cbiAgICAmOmhvdmVyLCAmOmZvY3VzLCAmOmFjdGl2ZSB7XG4gICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSgtM3B4KSBzY2FsZSgxLjA1KSByb3RhdGVYKDE1ZGVnKSk7XG5cbiAgICAgIGZpZ2NhcHRpb24ge1xuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0obm9uZSk7XG4gICAgICB9XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHJvdGF0ZSgyNWRlZykpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4iLCIkZm9udC1zaXplLWJhc2UgOiAxNnB4O1xuJGZvbnQtc2l6ZS11cHBlciA6IDM2cHg7XG4kZm9udC1zaXplLWRlYyA6IDRweDtcblxuJGhlYWRpbmdzIDogaDEgaDIgaDMgaDQgaDUgaDY7XG5AZWFjaCAkaGVhZGluZyBpbiAkaGVhZGluZ3N7XG4gICN7JGhlYWRpbmd9IHtcbiAgICBmb250LXNpemUgOiAkZm9udC1zaXplLXVwcGVyO1xuICAgIGZvbnQtc2l6ZSA6ICgkZm9udC1zaXplLXVwcGVyIC8gJGZvbnQtc2l6ZS1iYXNlKSArIHJlbTtcbiAgfVxuICAkZm9udC1zaXplLXVwcGVyIDogJGZvbnQtc2l6ZS11cHBlciAtICRmb250LXNpemUtZGVjO1xufVxuIiwiQHVzZSAnLi9jb2xvcnMnIGFzIGM7XG5AdXNlICcuL2ZvbnRzJyBhcyBmO1xuQHVzZSAnLi9zaXplcycgYXMgcztcblxuQG1peGluIG1hcnZlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGMuJG1hcnZlbC1yZWQ7XG4gIHBhZGRpbmc6IDAuMzVyZW0gMC4xcmVtIDAgMC4xcmVtO1xuXG4gIHNwYW4ge1xuICAgIGNvbG9yOiBjLiRtYXJ2ZWwtZm9udC13aGl0ZTtcbiAgICBmb250LWZhbWlseTogZi4kbWFydmVsLWZvbnQ7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuXG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbkBtaXhpbiB3MTAwaDEwMCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbkBtaXhpbiBmbGV4LWNlbnRlci1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuQG1peGluIGNhcmQtc3R5bGUge1xuICBwYWRkaW5nOiAzcmVtIDNyZW0gM3JlbSAycmVtO1xuICBiYWNrZ3JvdW5kOiBjLiR3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDNyZW0gcmdiYShjLiRtYXJ2ZWwtYmxhY2ssIDAuNDUpO1xuICBib3JkZXItbGVmdDogMXJlbSBzb2xpZCBjLiRtYXJ2ZWwtcmVkO1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm0pIHtcbiAgdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgLW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gIC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gIC1vLXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbn1cblxuQG1peGluIHRyYW5zaXRpb24oJGR1cmF0aW9uKSB7XG4gIHRyYW5zaXRpb246ICRkdXJhdGlvbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkZHVyYXRpb247XG4gIC1tb3otdHJhbnNpdGlvbjogJGR1cmF0aW9uO1xuICAtbXMtdHJhbnNpdGlvbjogJGR1cmF0aW9uO1xuICAtby10cmFuc2l0aW9uOiAkZHVyYXRpb247XG59XG4iLCIkbWFydmVsLXJlZDogI0U2MjQyOTsgLy8gRUMxRDI0XG4kbWFydmVsLXdoaXRlOiAjRENEQ0RDO1xuJG1hcnZlbC1mb250LXdoaXRlOiAjRkVGRUZFO1xuJG1hcnZlbC1ibGFjazogIzIwMjAyMDtcblxuJG1hcnZlbC1ncmV5OiAjMjAyMDIwO1xuJG1hcnZlbC1kYXJrLWdyZXk6ICMxNTE1MTU7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_comic_detail_comic_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/comic-detail/comic-detail.component */ "HKC/");
/* harmony import */ var _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/favorites/favorites.component */ "W3fu");
/* harmony import */ var _components_comics_comics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/comics/comics.component */ "ovkp");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.component */ "LS6v");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.guard */ "P+IX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: '', redirectTo: '/comics', pathMatch: 'full' },
    { path: 'comics', children: [
            { path: '', component: _components_comics_comics_component__WEBPACK_IMPORTED_MODULE_3__["ComicsComponent"] },
            { path: 'comic/:id', component: _components_comic_detail_comic_detail_component__WEBPACK_IMPORTED_MODULE_1__["ComicDetailComponent"] }
        ] },
    { path: 'favorites', component: _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_2__["FavoritesComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'login', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"] },
    { path: 'signup', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"] },
    { path: '**', redirectTo: '/comics' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map