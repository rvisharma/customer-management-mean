webpackJsonp([1,4],{649:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(76),a=r(355),i=r(699),c=r(688),s=r(686),f=r(687),u=r(678);r.d(t,"AboutModule",function(){return d});var p=this&&this.__decorate||function(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i},l=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(){function e(){}return e=p([r.i(n.b)({imports:[o.a,a.a,i.a],declarations:[c.a,s.a,f.a],providers:[u.a]}),l("design:paramtypes",[])],e)}()},678:function(e,t,r){"use strict";var n=r(0);r.d(t,"a",function(){return c});var o=this&&this.__decorate||function(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=Promise.resolve([{id:1,name:"Ravi",username:"irvisharma",avatar:"https://pbs.twimg.com/profile_images/461142920679010306/Yl_VT90i.jpeg"},{id:2,name:"CrimeMaster Gogo",username:"nasa",avatar:"https://pbs.twimg.com/profile_images/188302352/nasalogo_twitter.jpg"}]),c=function(){function e(){this.getUsers=function(){return i},this.getUser=function(e){return i.then(function(t){return t.find(function(t){return t.username===e})})}}return e=o([r.i(n.e)(),a("design:paramtypes",[])],e)}()},686:function(e,t,r){"use strict";var n=r(0),o=r(678);r.d(t,"a",function(){return c});var a=this&&this.__decorate||function(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e){this.userService=e}return e.prototype.ngOnInit=function(){var e=this;this.userService.getUsers().then(function(t){return e.users=t})},e=a([r.i(n.g)({selector:"app-about-list",template:r(710),styles:[r(702)]}),i("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.a&&o.a)&&t||Object])],e);var t}()},687:function(e,t,r){"use strict";var n=r(0),o=r(354),a=r(678);r.d(t,"a",function(){return s});var i=this&&this.__decorate||function(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e,t,r){var n=this;this.route=e,this.userService=t,this.router=r,this.goBack=function(){n.router.navigate(["/about"])}}return e.prototype.ngOnInit=function(){var e=this,t=this.route.snapshot.params.username;this.userService.getUser(t).then(function(t){t||e.router.navigate(["about/404"]),e.user=t})},e=i([r.i(n.g)({selector:"app-about-user",template:r(711),styles:[r(703)]}),c("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.c&&o.c)&&t||Object,"function"==typeof(s="undefined"!=typeof a.a&&a.a)&&s||Object,"function"==typeof(f="undefined"!=typeof o.b&&o.b)&&f||Object])],e);var t,s,f}()},688:function(e,t,r){"use strict";var n=r(0);r.d(t,"a",function(){return i});var o=this&&this.__decorate||function(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(){function e(){}return e.prototype.ngOnInit=function(){},e=o([r.i(n.g)({selector:"app-about",template:r(712),styles:[r(704)]}),a("design:paramtypes",[])],e)}()},699:function(e,t,r){"use strict";var n=r(354),o=r(688),a=r(687),i=r(686),c=r(216);r.d(t,"a",function(){return f});var s=[{path:"",component:o.a,children:[{path:"",component:i.a},{path:"404",component:c.a},{path:":username",component:a.a}]}],f=n.a.forChild(s)},702:function(e,t){e.exports=""},703:function(e,t){e.exports="img{max-width:40%;margin:20px auto}\n"},704:function(e,t){e.exports=".profile-card{background:#f3f3f3;border-radius:4px;padding:30px;text-align:center;cursor:pointer}.profile-card img{max-width:50%;margin:15px auto}\n"},710:function(e,t){e.exports='<div class="row">\r\n  <div class="col-sm-4" *ngFor="let user of users">\r\n    <div class="profile-card" [routerLink]="[\'/about\',user.username]">\r\n      <img [src]="user.avatar" class="img-responsive img-circle">\r\n      <h2>{{user.name}}</h2>\r\n      <p><a href="https://twitter.com/{{user.username}}/">{{user.username}}</a></p>\r\n    </div>\r\n  </div>\r\n</div>\r\n'},711:function(e,t){e.exports='<a (click)="goBack()" class="btn btn-sm btn-info">Go Back</a>\r\n<div *ngIf="user" class="jumbotron text-center">\r\n  <h1>{{user.name}} ({{user.username}})</h1>\r\n  <img [src]="user.avatar" class="img-responsive img-circle">\r\n</div>\r\n'},712:function(e,t){e.exports='<div class="row">\r\n  <div class="col-sm-12 text-center">\r\n    <h3>About Section</h3>\r\n  </div>\r\n</div>\r\n<div class="row">\r\n  <div class="col-sm-12">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n'}});
//# sourceMappingURL=1.bundle.map