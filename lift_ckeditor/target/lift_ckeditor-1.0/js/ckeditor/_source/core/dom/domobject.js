;
CKEDITOR.dom.domObject=function(A){if(A){this.$=A
}};
CKEDITOR.dom.domObject.prototype=(function(){var A=function(C,B){return function(D){if(typeof CKEDITOR!="undefined"){C.fire(B,new CKEDITOR.dom.event(D))
}}
};
return{getPrivate:function(){var B;
if(!(B=this.getCustomData("_"))){this.setCustomData("_",(B={}))
}return B
},on:function(B){var D=this.getCustomData("_cke_nativeListeners");
if(!D){D={};
this.setCustomData("_cke_nativeListeners",D)
}if(!D[B]){var C=D[B]=A(this,B);
if(this.$.addEventListener){this.$.addEventListener(B,C,!!CKEDITOR.event.useCapture)
}else{if(this.$.attachEvent){this.$.attachEvent("on"+B,C)
}}}return CKEDITOR.event.prototype.on.apply(this,arguments)
},removeListener:function(B){CKEDITOR.event.prototype.removeListener.apply(this,arguments);
if(!this.hasListeners(B)){var D=this.getCustomData("_cke_nativeListeners");
var C=D&&D[B];
if(C){if(this.$.removeEventListener){this.$.removeEventListener(B,C,false)
}else{if(this.$.detachEvent){this.$.detachEvent("on"+B,C)
}}delete D[B]
}}},removeAllListeners:function(){var D=this.getCustomData("_cke_nativeListeners");
for(var B in D){var C=D[B];
if(this.$.detachEvent){this.$.detachEvent("on"+B,C)
}else{if(this.$.removeEventListener){this.$.removeEventListener(B,C,false)
}}delete D[B]
}}}
})();
(function(A){var B={};
CKEDITOR.on("reset",function(){B={}
});
A.equals=function(C){return(C&&C.$===this.$)
};
A.setCustomData=function(C,F){var D=this.getUniqueId(),E=B[D]||(B[D]={});
E[C]=F;
return this
};
A.getCustomData=function(C){var D=this.$["data-cke-expando"],E=D&&B[D];
return E&&E[C]
};
A.removeCustomData=function(D){var E=this.$["data-cke-expando"],F=E&&B[E],C=F&&F[D];
if(typeof C!="undefined"){delete F[D]
}return C||null
};
A.clearCustomData=function(){this.removeAllListeners();
var C=this.$["data-cke-expando"];
C&&delete B[C]
};
A.getUniqueId=function(){return this.$["data-cke-expando"]||(this.$["data-cke-expando"]=CKEDITOR.tools.getNextNumber())
};
CKEDITOR.event.implementOn(A)
})(CKEDITOR.dom.domObject.prototype);