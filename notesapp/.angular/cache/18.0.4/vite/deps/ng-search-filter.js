import {
  Injectable,
  NgModule,
  Pipe,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵsetNgModuleScope
} from "./chunk-VJ52UD7S.js";
import "./chunk-MOY5LPCH.js";
import "./chunk-MJQNUHK2.js";
import "./chunk-SAI3DHVA.js";
import "./chunk-J4B6MK7R.js";

// node_modules/ng-search-filter/fesm2015/ng-search-filter.js
var NgSearchFilterService = class {
  constructor() {
  }
  get defaultLang() {
    return this._defaultLang || "tr";
  }
  set defaultLang(defaultLang) {
    this._defaultLang = defaultLang;
  }
  getDefaultLang() {
    return this.defaultLang;
  }
  setDefaultLang(defaultLang) {
    this.defaultLang = defaultLang;
  }
};
NgSearchFilterService.ɵfac = function NgSearchFilterService_Factory(t) {
  return new (t || NgSearchFilterService)();
};
NgSearchFilterService.ɵprov = ɵɵdefineInjectable({ token: NgSearchFilterService, factory: NgSearchFilterService.ɵfac, providedIn: "root" });
(function() {
  setClassMetadata(NgSearchFilterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var NgSearchFilterPipe = class _NgSearchFilterPipe {
  constructor(_ngSearchFilterService) {
    this._ngSearchFilterService = _ngSearchFilterService;
    this._lang = this._ngSearchFilterService.getDefaultLang();
  }
  /**
   * @param items object from array
   * @param term term's search
   * @param excludes array of strings which will ignored during search
   */
  transform(items, term, excludes = []) {
    if (!term || !items)
      return items;
    return _NgSearchFilterPipe.filter(items, term, excludes, this._lang);
  }
  /**
   *
   * @param items List of items to filter
   * @param term  a string term to compare with every property of the list
   * @param excludes List of keys which will be ignored during search
   *
   */
  static filter(items, term, excludes, lang) {
    const toCompare = term.toLocaleLowerCase(lang);
    function checkInside(item, term2) {
      if (typeof item === "string" && item.toString().toLocaleLowerCase(lang).includes(toCompare)) {
        return true;
      }
      for (let property in item) {
        if (item[property] === null || item[property] == void 0 || excludes.includes(property)) {
          continue;
        }
        if (typeof item[property] === "object") {
          if (checkInside(item[property], term2)) {
            return true;
          }
        } else if (item[property].toString().toLocaleLowerCase(lang).includes(toCompare)) {
          return true;
        }
      }
      return false;
    }
    return items.filter(function(item) {
      return checkInside(item, term);
    });
  }
};
NgSearchFilterPipe.ɵfac = function NgSearchFilterPipe_Factory(t) {
  return new (t || NgSearchFilterPipe)(ɵɵdirectiveInject(NgSearchFilterService));
};
NgSearchFilterPipe.ɵpipe = ɵɵdefinePipe({ name: "filter", type: NgSearchFilterPipe, pure: false });
NgSearchFilterPipe.ɵprov = ɵɵdefineInjectable({ token: NgSearchFilterPipe, factory: NgSearchFilterPipe.ɵfac });
(function() {
  setClassMetadata(NgSearchFilterPipe, [{
    type: Pipe,
    args: [{
      name: "filter",
      pure: false
    }]
  }, {
    type: Injectable
  }], function() {
    return [{ type: NgSearchFilterService }];
  }, null);
})();
var NgSearchFilterModule = class {
};
NgSearchFilterModule.ɵmod = ɵɵdefineNgModule({ type: NgSearchFilterModule });
NgSearchFilterModule.ɵinj = ɵɵdefineInjector({ factory: function NgSearchFilterModule_Factory(t) {
  return new (t || NgSearchFilterModule)();
} });
(function() {
  (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgSearchFilterModule, { declarations: [NgSearchFilterPipe], exports: [NgSearchFilterPipe] });
})();
(function() {
  setClassMetadata(NgSearchFilterModule, [{
    type: NgModule,
    args: [{
      declarations: [NgSearchFilterPipe],
      exports: [NgSearchFilterPipe]
    }]
  }], null, null);
})();
export {
  NgSearchFilterModule,
  NgSearchFilterPipe,
  NgSearchFilterService
};
//# sourceMappingURL=ng-search-filter.js.map
