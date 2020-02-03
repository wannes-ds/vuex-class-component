"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
var UserSettings = /** @class */ (function (_super) {
    __extends(UserSettings, _super);
    function UserSettings() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cookieConsent = false;
        return _this;
    }
    UserSettings.prototype.changeConsent = function (consent) {
        this.cookieConsent = consent;
    };
    __decorate([
        src_1.getter,
        __metadata("design:type", Object)
    ], UserSettings.prototype, "cookieConsent", void 0);
    __decorate([
        src_1.mutation,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], UserSettings.prototype, "changeConsent", null);
    UserSettings = __decorate([
        src_1.Module()
    ], UserSettings);
    return UserSettings;
}(src_1.VuexModule));
var UserStore = /** @class */ (function (_super) {
    __extends(UserStore, _super);
    function UserStore() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.settings = UserSettings.CreateSubModule(UserSettings);
        _this.firstname = 'Michael';
        _this.lastname = 'Olofinjana';
        _this.speciality = 'JavaScript'; // The @getter decorator automatically exposes a defined state as a getter.
        _this.occupation = 'Developer';
        return _this;
    }
    UserStore.prototype.changeName = function (_a) {
        var firstname = _a.firstname, lastname = _a.lastname;
        this.firstname = firstname;
        this.lastname = lastname;
    };
    UserStore.prototype.doSomethingAsync = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, 20];
        }); });
    };
    UserStore.prototype.doAnotherAsyncStuff = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var number;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.doSomethingAsync()];
                    case 1:
                        number = _a.sent();
                        this.changeName({ firstname: 'John', lastname: 'Doe' });
                        return [2 /*return*/, payload + this.fullName];
                }
            });
        });
    };
    Object.defineProperty(UserStore.prototype, "fullName", {
        // Explicitly define a vuex getter using class getters.
        get: function () {
            return this.firstname + ' ' + this.lastname;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        src_1.getter,
        __metadata("design:type", Object)
    ], UserStore.prototype, "speciality", void 0);
    __decorate([
        src_1.getter,
        __metadata("design:type", Object)
    ], UserStore.prototype, "occupation", void 0);
    __decorate([
        src_1.mutation,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UserStore.prototype, "changeName", null);
    __decorate([
        src_1.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], UserStore.prototype, "doSomethingAsync", null);
    __decorate([
        src_1.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], UserStore.prototype, "doAnotherAsyncStuff", null);
    UserStore = __decorate([
        src_1.Module({ namespacedPath: 'user/' })
    ], UserStore);
    return UserStore;
}(src_1.VuexModule));
var NuxtUserStore = /** @class */ (function (_super) {
    __extends(NuxtUserStore, _super);
    function NuxtUserStore() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.settings = UserSettings.CreateSubModule(UserSettings);
        _this.firstname = 'Michael';
        _this.lastname = 'Olofinjana';
        _this.speciality = 'JavaScript'; // The @getter decorator automatically exposes a defined state as a getter.
        _this.occupation = 'Developer';
        return _this;
    }
    NuxtUserStore.prototype.changeName = function (_a) {
        var firstname = _a.firstname, lastname = _a.lastname;
        this.firstname = firstname;
        this.lastname = lastname;
    };
    NuxtUserStore.prototype.doSomethingAsync = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, 20];
        }); });
    };
    NuxtUserStore.prototype.doAnotherAsyncStuff = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var number;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.doSomethingAsync()];
                    case 1:
                        number = _a.sent();
                        this.changeName({ firstname: 'John', lastname: 'Doe' });
                        return [2 /*return*/, payload + this.fullName];
                }
            });
        });
    };
    Object.defineProperty(NuxtUserStore.prototype, "fullName", {
        // Explicitly define a vuex getter using class getters.
        get: function () {
            return this.firstname + ' ' + this.lastname;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        src_1.getter,
        __metadata("design:type", Object)
    ], NuxtUserStore.prototype, "speciality", void 0);
    __decorate([
        src_1.getter,
        __metadata("design:type", Object)
    ], NuxtUserStore.prototype, "occupation", void 0);
    __decorate([
        src_1.mutation,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NuxtUserStore.prototype, "changeName", null);
    __decorate([
        src_1.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], NuxtUserStore.prototype, "doSomethingAsync", null);
    __decorate([
        src_1.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], NuxtUserStore.prototype, "doAnotherAsyncStuff", null);
    NuxtUserStore = __decorate([
        src_1.Module({ namespacedPath: 'user/', target: "nuxt" })
    ], NuxtUserStore);
    return NuxtUserStore;
}(src_1.VuexModule));
describe('ExtractVuexModule', function () {
    it('should extract all properties as state', function () {
        var state = UserStore.ExtractVuexModule(UserStore).state;
        expect(state).toEqual({
            firstname: 'Michael',
            lastname: 'Olofinjana',
            speciality: 'JavaScript',
            occupation: 'Developer'
        });
        expect(state).not.toHaveProperty('settings');
    });
    it('should extract all properties as state in a function for NuxtUserStore', function () {
        var state = NuxtUserStore.ExtractVuexModule(NuxtUserStore).state;
        expect(typeof state).toBe("function");
        // @ts-ignore
        expect(state()).toEqual({
            firstname: "Michael",
            lastname: "Olofinjana",
            speciality: "JavaScript",
            occupation: "Developer"
        });
        expect(state).not.toHaveProperty("settings");
    });
    it('should extract all getters', function () {
        var getters = UserStore.ExtractVuexModule(UserStore).getters;
        // Note all states are automatically accessible as getters.
        // This makes th `@getter` decorator redundant. But we have it for backwards compatibility.
        expect(Object.keys(getters)).toEqual(['fullName', "__" + UserStore.name.toLowerCase() + "_internal_getter__"]);
    });
    it('should extract all actions', function () {
        var actions = UserStore.ExtractVuexModule(UserStore).actions;
        expect(Object.keys(actions)).toEqual(['doSomethingAsync', 'doAnotherAsyncStuff', "__" + UserStore.name.toLowerCase() + "_internal_action__"]);
    });
    it('should extract all mutations', function () {
        var mutations = UserStore.ExtractVuexModule(UserStore).mutations;
        expect(Object.keys(mutations)).toEqual(['changeName', "__" + UserStore.name.toLowerCase() + "_internal_mutator__"]);
    });
    it('should extract if module is namespaced or not', function () {
        expect(UserStore.ExtractVuexModule(UserStore)).toHaveProperty('namespaced', true);
        expect(UserSettings.ExtractVuexModule(UserSettings)).toHaveProperty('namespaced', false);
    });
    it('should extract submodules', function () {
        var modules = UserStore.ExtractVuexModule(UserStore).modules;
        expect(Object.keys(modules)).toEqual(['settings']);
    });
});
