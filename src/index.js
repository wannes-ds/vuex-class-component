"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var module_1 = require("./module");
exports.extractVuexModule = module_1.extractVuexModule;
exports.createModule = module_1.createModule;
var submodule_1 = require("./submodule");
exports.createSubModule = submodule_1.createSubModule;
var proxy_1 = require("./proxy");
exports.createProxy = proxy_1.createProxy;
exports.clearProxyCache = proxy_1.clearProxyCache;
var actions_1 = require("./actions");
exports.action = actions_1.action;
exports.getRawActionContext = actions_1.getRawActionContext;
var mutations_1 = require("./mutations");
exports.mutation = mutations_1.mutation;
var module_legacy_1 = require("./module.legacy");
exports.Module = module_legacy_1.Module;
exports.VuexModule = module_legacy_1.LegacyVuexModule;
var getters_legacy_1 = require("./getters.legacy");
exports.getter = getters_legacy_1.getter;
