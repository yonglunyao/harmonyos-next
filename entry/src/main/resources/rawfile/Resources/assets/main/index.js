System.register("chunks:///_virtual/main",["./my_script.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/my_script.ts",["cc"],(function(c){var o,t,e;return{setters:[function(c){o=c.cclegacy,t=c.Component,e=c._decorator}],execute:function(){var s;o._RF.push({},"3a859opp95AKoK+H1+fi+FK","my_script",void 0);const{ccclass:r,property:n}=e;c("my_script",r("my_script")(s=class extends t{start(){console.log("hello cocos demo")}update(c){console.log("update cocos demo")}})||s);o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});