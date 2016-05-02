System.register(['angular2/core', './test.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, test_component_1;
    var MyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            }],
        execute: function() {
            MyComponent = (function () {
                function MyComponent() {
                }
                MyComponent.prototype.ngOnInit = function () {
                    this.name = "Akasan";
                };
                MyComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "Hi, <span [style.color] =\"inputElement.value === 'yes' ? 'red' : ''\"> {{name}}!</span>\n<br>\nThis my very first Angular2 Component.\n<br>\n<br>\n\n<span [class.is-awsome]=\"inputElement.value === 'yes'\"> You are awsome. <span>\n<br>\n<br>\nAre you awsome?\n<input type=\"text\" #inputElement (keyup)=\"0\">\n<button [disabled]=\"inputElement.value !== 'yes'\">Only enabled if 'yes' was entered </button>\n<test></test>",
                        styleUrls: ['src/css/mycomponent.css'],
                        directives: [test_component_1.TestComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponent);
                return MyComponent;
            }());
            exports_1("MyComponent", MyComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBQUE7Z0JBTUEsQ0FBQztnQkFIQSw4QkFBUSxHQUFSO29CQUNHLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO2dCQUN4QixDQUFDO2dCQXhCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNYLFFBQVEsRUFBQyxjQUFjO3dCQUN2QixRQUFRLEVBQUUsd2FBWUk7d0JBQ2QsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7d0JBQ3RDLFVBQVUsRUFBRSxDQUFDLDhCQUFhLENBQUM7cUJBQzFCLENBQUM7OytCQUFBO2dCQVFGLGtCQUFDO1lBQUQsQ0FOQSxBQU1DLElBQUE7WUFORCxxQ0FNQyxDQUFBIiwiZmlsZSI6Im15LWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Rlc3RDb21wb25lbnR9IGZyb20gJy4vdGVzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuc2VsZWN0b3I6J215LWNvbXBvbmVudCcsXG50ZW1wbGF0ZTogYEhpLCA8c3BhbiBbc3R5bGUuY29sb3JdID1cImlucHV0RWxlbWVudC52YWx1ZSA9PT0gJ3llcycgPyAncmVkJyA6ICcnXCI+IHt7bmFtZX19ITwvc3Bhbj5cbjxicj5cblRoaXMgbXkgdmVyeSBmaXJzdCBBbmd1bGFyMiBDb21wb25lbnQuXG48YnI+XG48YnI+XG5cbjxzcGFuIFtjbGFzcy5pcy1hd3NvbWVdPVwiaW5wdXRFbGVtZW50LnZhbHVlID09PSAneWVzJ1wiPiBZb3UgYXJlIGF3c29tZS4gPHNwYW4+XG48YnI+XG48YnI+XG5BcmUgeW91IGF3c29tZT9cbjxpbnB1dCB0eXBlPVwidGV4dFwiICNpbnB1dEVsZW1lbnQgKGtleXVwKT1cIjBcIj5cbjxidXR0b24gW2Rpc2FibGVkXT1cImlucHV0RWxlbWVudC52YWx1ZSAhPT0gJ3llcydcIj5Pbmx5IGVuYWJsZWQgaWYgJ3llcycgd2FzIGVudGVyZWQgPC9idXR0b24+XG48dGVzdD48L3Rlc3Q+YCxcbnN0eWxlVXJsczogWydzcmMvY3NzL215Y29tcG9uZW50LmNzcyddLFxuZGlyZWN0aXZlczogW1Rlc3RDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgTXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuIG5hbWU6IHN0cmluZztcblxuIG5nT25Jbml0KCkgOmFueSB7XG4gICAgdGhpcy5uYW1lID0gXCJBa2FzYW5cIjtcbiB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
