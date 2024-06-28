import {
  BrnDialogComponent,
  BrnDialogContentDirective,
  BrnDialogDescriptionDirective,
  BrnDialogOverlayComponent,
  BrnDialogTitleDirective,
  BrnDialogTriggerDirective
} from "./chunk-467ZURTU.js";
import "./chunk-RLQFD3N7.js";
import {
  provideCustomClassSettableExisting,
  provideExposesStateProviderExisting
} from "./chunk-NV5AUCJU.js";
import "./chunk-TTCURWDP.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Input,
  NgModule,
  ViewEncapsulation$1,
  forwardRef,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-VJ52UD7S.js";
import "./chunk-MOY5LPCH.js";
import "./chunk-MJQNUHK2.js";
import "./chunk-SAI3DHVA.js";
import "./chunk-J4B6MK7R.js";

// node_modules/@spartan-ng/ui-alertdialog-brain/fesm2022/spartan-ng-ui-alertdialog-brain.mjs
var _c0 = ["*"];
var _BrnAlertDialogContentDirective = class _BrnAlertDialogContentDirective extends BrnDialogContentDirective {
};
_BrnAlertDialogContentDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵBrnAlertDialogContentDirective_BaseFactory;
  return function BrnAlertDialogContentDirective_Factory(t) {
    return (ɵBrnAlertDialogContentDirective_BaseFactory || (ɵBrnAlertDialogContentDirective_BaseFactory = ɵɵgetInheritedFactory(_BrnAlertDialogContentDirective)))(t || _BrnAlertDialogContentDirective);
  };
})();
_BrnAlertDialogContentDirective.ɵdir = ɵɵdefineDirective({
  type: _BrnAlertDialogContentDirective,
  selectors: [["", "brnAlertDialogContent", ""]],
  standalone: true,
  features: [ɵɵProvidersFeature([provideExposesStateProviderExisting(() => _BrnAlertDialogContentDirective)]), ɵɵInheritDefinitionFeature]
});
var BrnAlertDialogContentDirective = _BrnAlertDialogContentDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnAlertDialogContentDirective, [{
    type: Directive,
    args: [{
      selector: "[brnAlertDialogContent]",
      standalone: true,
      providers: [provideExposesStateProviderExisting(() => BrnAlertDialogContentDirective)]
    }]
  }], null, null);
})();
var _BrnAlertDialogDescriptionDirective = class _BrnAlertDialogDescriptionDirective extends BrnDialogDescriptionDirective {
};
_BrnAlertDialogDescriptionDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵBrnAlertDialogDescriptionDirective_BaseFactory;
  return function BrnAlertDialogDescriptionDirective_Factory(t) {
    return (ɵBrnAlertDialogDescriptionDirective_BaseFactory || (ɵBrnAlertDialogDescriptionDirective_BaseFactory = ɵɵgetInheritedFactory(_BrnAlertDialogDescriptionDirective)))(t || _BrnAlertDialogDescriptionDirective);
  };
})();
_BrnAlertDialogDescriptionDirective.ɵdir = ɵɵdefineDirective({
  type: _BrnAlertDialogDescriptionDirective,
  selectors: [["", "brnAlertDialogDescription", ""]],
  hostVars: 1,
  hostBindings: function BrnAlertDialogDescriptionDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵhostProperty("id", ctx._id());
    }
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature]
});
var BrnAlertDialogDescriptionDirective = _BrnAlertDialogDescriptionDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnAlertDialogDescriptionDirective, [{
    type: Directive,
    args: [{
      selector: "[brnAlertDialogDescription]",
      standalone: true,
      host: {
        "[id]": "_id()"
      }
    }]
  }], null, null);
})();
var _BrnAlertDialogOverlayComponent = class _BrnAlertDialogOverlayComponent extends BrnDialogOverlayComponent {
};
_BrnAlertDialogOverlayComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵBrnAlertDialogOverlayComponent_BaseFactory;
  return function BrnAlertDialogOverlayComponent_Factory(t) {
    return (ɵBrnAlertDialogOverlayComponent_BaseFactory || (ɵBrnAlertDialogOverlayComponent_BaseFactory = ɵɵgetInheritedFactory(_BrnAlertDialogOverlayComponent)))(t || _BrnAlertDialogOverlayComponent);
  };
})();
_BrnAlertDialogOverlayComponent.ɵcmp = ɵɵdefineComponent({
  type: _BrnAlertDialogOverlayComponent,
  selectors: [["brn-alert-dialog-overlay"]],
  standalone: true,
  features: [ɵɵProvidersFeature([provideCustomClassSettableExisting(() => _BrnAlertDialogOverlayComponent)]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function BrnAlertDialogOverlayComponent_Template(rf, ctx) {
  },
  encapsulation: 2,
  changeDetection: 0
});
var BrnAlertDialogOverlayComponent = _BrnAlertDialogOverlayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnAlertDialogOverlayComponent, [{
    type: Component,
    args: [{
      selector: "brn-alert-dialog-overlay",
      standalone: true,
      providers: [provideCustomClassSettableExisting(() => BrnAlertDialogOverlayComponent)],
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], null, null);
})();
var _BrnAlertDialogTitleDirective = class _BrnAlertDialogTitleDirective extends BrnDialogTitleDirective {
};
_BrnAlertDialogTitleDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵBrnAlertDialogTitleDirective_BaseFactory;
  return function BrnAlertDialogTitleDirective_Factory(t) {
    return (ɵBrnAlertDialogTitleDirective_BaseFactory || (ɵBrnAlertDialogTitleDirective_BaseFactory = ɵɵgetInheritedFactory(_BrnAlertDialogTitleDirective)))(t || _BrnAlertDialogTitleDirective);
  };
})();
_BrnAlertDialogTitleDirective.ɵdir = ɵɵdefineDirective({
  type: _BrnAlertDialogTitleDirective,
  selectors: [["", "brnAlertDialogTitle", ""]],
  hostVars: 1,
  hostBindings: function BrnAlertDialogTitleDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵhostProperty("id", ctx._id());
    }
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature]
});
var BrnAlertDialogTitleDirective = _BrnAlertDialogTitleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnAlertDialogTitleDirective, [{
    type: Directive,
    args: [{
      selector: "[brnAlertDialogTitle]",
      standalone: true,
      host: {
        "[id]": "_id()"
      }
    }]
  }], null, null);
})();
var _BrnAlertDialogTriggerDirective = class _BrnAlertDialogTriggerDirective extends BrnDialogTriggerDirective {
  set brnAlertDialogTriggerFor(brnDialog) {
    super.brnDialogTriggerFor = brnDialog;
  }
};
_BrnAlertDialogTriggerDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵBrnAlertDialogTriggerDirective_BaseFactory;
  return function BrnAlertDialogTriggerDirective_Factory(t) {
    return (ɵBrnAlertDialogTriggerDirective_BaseFactory || (ɵBrnAlertDialogTriggerDirective_BaseFactory = ɵɵgetInheritedFactory(_BrnAlertDialogTriggerDirective)))(t || _BrnAlertDialogTriggerDirective);
  };
})();
_BrnAlertDialogTriggerDirective.ɵdir = ɵɵdefineDirective({
  type: _BrnAlertDialogTriggerDirective,
  selectors: [["button", "brnAlertDialogTrigger", ""], ["button", "brnAlertDialogTriggerFor", ""]],
  hostAttrs: ["aria-haspopup", "dialog"],
  hostVars: 4,
  hostBindings: function BrnAlertDialogTriggerDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵhostProperty("id", ctx.id());
      ɵɵattribute("aria-expanded", ctx.state() === "open" ? "true" : "false")("data-state", ctx.state())("aria-controls", ctx.dialogId);
    }
  },
  inputs: {
    brnAlertDialogTriggerFor: "brnAlertDialogTriggerFor"
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature]
});
var BrnAlertDialogTriggerDirective = _BrnAlertDialogTriggerDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnAlertDialogTriggerDirective, [{
    type: Directive,
    args: [{
      selector: "button[brnAlertDialogTrigger],button[brnAlertDialogTriggerFor]",
      standalone: true,
      host: {
        "[id]": "id()",
        "aria-haspopup": "dialog",
        "[attr.aria-expanded]": "state() === 'open' ? 'true': 'false'",
        "[attr.data-state]": "state()",
        "[attr.aria-controls]": "dialogId"
      }
    }]
  }], null, {
    brnAlertDialogTriggerFor: [{
      type: Input
    }]
  });
})();
var _BrnAlertDialogComponent = class _BrnAlertDialogComponent extends BrnDialogComponent {
  constructor() {
    super();
    this._options.role = "alertdialog";
    this._options.closeOnBackdropClick = false;
    this._options.closeOnOutsidePointerEvents = false;
  }
};
_BrnAlertDialogComponent.ɵfac = function BrnAlertDialogComponent_Factory(t) {
  return new (t || _BrnAlertDialogComponent)();
};
_BrnAlertDialogComponent.ɵcmp = ɵɵdefineComponent({
  type: _BrnAlertDialogComponent,
  selectors: [["brn-alert-dialog"]],
  exportAs: ["brnAlertDialog"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: BrnDialogComponent,
    useExisting: forwardRef(() => _BrnAlertDialogComponent)
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function BrnAlertDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var BrnAlertDialogComponent = _BrnAlertDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnAlertDialogComponent, [{
    type: Component,
    args: [{
      selector: "brn-alert-dialog",
      standalone: true,
      template: `
		<ng-content />
	`,
      providers: [{
        provide: BrnDialogComponent,
        useExisting: forwardRef(() => BrnAlertDialogComponent)
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "brnAlertDialog"
    }]
  }], () => [], null);
})();
var BrnAlertDialogImports = [BrnAlertDialogComponent, BrnAlertDialogOverlayComponent, BrnAlertDialogTriggerDirective, BrnAlertDialogContentDirective, BrnAlertDialogTitleDirective, BrnAlertDialogDescriptionDirective];
var _BrnAlertDialogModule = class _BrnAlertDialogModule {
};
_BrnAlertDialogModule.ɵfac = function BrnAlertDialogModule_Factory(t) {
  return new (t || _BrnAlertDialogModule)();
};
_BrnAlertDialogModule.ɵmod = ɵɵdefineNgModule({
  type: _BrnAlertDialogModule,
  imports: [BrnAlertDialogComponent, BrnAlertDialogOverlayComponent, BrnAlertDialogTriggerDirective, BrnAlertDialogContentDirective, BrnAlertDialogTitleDirective, BrnAlertDialogDescriptionDirective],
  exports: [BrnAlertDialogComponent, BrnAlertDialogOverlayComponent, BrnAlertDialogTriggerDirective, BrnAlertDialogContentDirective, BrnAlertDialogTitleDirective, BrnAlertDialogDescriptionDirective]
});
_BrnAlertDialogModule.ɵinj = ɵɵdefineInjector({});
var BrnAlertDialogModule = _BrnAlertDialogModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnAlertDialogModule, [{
    type: NgModule,
    args: [{
      imports: [...BrnAlertDialogImports],
      exports: [...BrnAlertDialogImports]
    }]
  }], null, null);
})();
export {
  BrnAlertDialogComponent,
  BrnAlertDialogContentDirective,
  BrnAlertDialogDescriptionDirective,
  BrnAlertDialogImports,
  BrnAlertDialogModule,
  BrnAlertDialogOverlayComponent,
  BrnAlertDialogTitleDirective,
  BrnAlertDialogTriggerDirective
};
//# sourceMappingURL=@spartan-ng_ui-alertdialog-brain.js.map
