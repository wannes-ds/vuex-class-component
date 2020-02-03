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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var vuex_1 = __importStar(require("vuex"));
// @ts-ignore
var test_utils_1 = require("@vue/test-utils");
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
        src_1.Module({ namespacedPath: 'user/settings/' })
    ], UserSettings);
    return UserSettings;
}(src_1.VuexModule));
var Something = /** @class */ (function (_super) {
    __extends(Something, _super);
    function Something() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.something = 'nothing';
        return _this;
    }
    Something = __decorate([
        src_1.Module({ namespacedPath: 'user/something/' })
    ], Something);
    return Something;
}(src_1.VuexModule));
var Books = /** @class */ (function (_super) {
    __extends(Books, _super);
    function Books() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.books = [];
        return _this;
    }
    Books.prototype.addBook = function (book) {
        this.books.push(book);
    };
    __decorate([
        src_1.mutation,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Books.prototype, "addBook", null);
    Books = __decorate([
        src_1.Module({ namespacedPath: 'books/' })
    ], Books);
    return Books;
}(src_1.VuexModule));
var UserStore = /** @class */ (function (_super) {
    __extends(UserStore, _super);
    function UserStore() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.settings = UserSettings.CreateSubModule(UserSettings);
        _this.something = Something.CreateSubModule(Something);
        _this.firstname = 'Michael';
        _this.lastname = 'Olofinjana';
        _this.specialty = 'JavaScript'; // The @getter decorator automatically exposes a defined state as a getter.
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
    UserStore.prototype.rawAction = function () {
        return __awaiter(this, void 0, void 0, function () {
            var context;
            return __generator(this, function (_a) {
                context = src_1.getRawActionContext(this);
                context.commit("changeName", { firstname: 'Ola', lastname: 'Nordmann' });
                return [2 /*return*/];
            });
        });
    };
    UserStore.prototype.access$store = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.$store.state.globalValue];
            });
        });
    };
    UserStore.prototype.addBook = function (book) {
        return __awaiter(this, void 0, void 0, function () {
            var booksProxy;
            return __generator(this, function (_a) {
                booksProxy = Books.CreateProxy(this.$store, Books);
                booksProxy.addBook(book);
                return [2 /*return*/];
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
    Object.defineProperty(UserStore.prototype, "valueFrom$store", {
        get: function () {
            return this.$store.state.globalValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserStore.prototype, "getValueFromGetter", {
        get: function () {
            this.fullName; //?
            return 'Fullname is: ' + this.fullName;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        src_1.getter,
        __metadata("design:type", Object)
    ], UserStore.prototype, "specialty", void 0);
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
    __decorate([
        src_1.action({ mode: 'raw' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], UserStore.prototype, "rawAction", null);
    __decorate([
        src_1.action({ mode: 'mutate' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], UserStore.prototype, "access$store", null);
    __decorate([
        src_1.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], UserStore.prototype, "addBook", null);
    UserStore = __decorate([
        src_1.Module({ namespacedPath: 'user/' })
    ], UserStore);
    return UserStore;
}(src_1.VuexModule));
describe('CreateProxy', function () {
    var store;
    var localVue;
    beforeEach(function () {
        localVue = test_utils_1.createLocalVue();
        localVue.use(vuex_1.default);
        store = new vuex_1.Store({
            modules: {
                user: UserStore.ExtractVuexModule(UserStore)
            }
        });
    });
    afterEach(function () {
        UserStore.ClearProxyCache(UserStore);
    });
    it('should proxy getters', function () {
        var user = UserStore.CreateProxy(store, UserStore);
        expect(user.fullName).toEqual('Michael Olofinjana');
        expect(user.specialty).toEqual('JavaScript');
        expect(user.occupation).toEqual('Developer');
    });
    it('should proxy state', function () {
        var user = UserStore.CreateProxy(store, UserStore);
        expect(user.firstname).toEqual('Michael');
        expect(user.lastname).toEqual('Olofinjana');
    });
    it('should proxy actions', function () { return __awaiter(_this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = UserStore.CreateProxy(store, UserStore);
                    return [4 /*yield*/, user.doAnotherAsyncStuff('Something')];
                case 1:
                    _a.sent();
                    expect(user.fullName).toEqual('John Doe');
                    expect(user.firstname).toEqual('John');
                    expect(user.lastname).toEqual('Doe');
                    return [4 /*yield*/, user.rawAction()];
                case 2:
                    _a.sent();
                    expect(user.fullName).toEqual('Ola Nordmann');
                    expect(user.firstname).toEqual('Ola');
                    expect(user.lastname).toEqual('Nordmann');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should proxy mutations', function () { return __awaiter(_this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = UserStore.CreateProxy(store, UserStore);
                    return [4 /*yield*/, user.changeName({ firstname: 'Ola', lastname: 'Nordmann' })];
                case 1:
                    _a.sent();
                    expect(user.fullName).toEqual('Ola Nordmann');
                    expect(user.firstname).toEqual('Ola');
                    expect(user.lastname).toEqual('Nordmann');
                    return [2 /*return*/];
            }
        });
    }); });
});
