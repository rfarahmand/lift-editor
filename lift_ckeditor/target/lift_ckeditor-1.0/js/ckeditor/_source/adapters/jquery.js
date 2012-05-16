(function(){CKEDITOR.config.jqueryOverrideVal=typeof CKEDITOR.config.jqueryOverrideVal=="undefined"?true:CKEDITOR.config.jqueryOverrideVal;
var A=window.jQuery;
if(typeof A=="undefined"){return 
}A.extend(A.fn,{ckeditorGet:function(){var B=this.eq(0).data("ckeditorInstance");
if(!B){throw"CKEditor not yet initialized, use ckeditor() with callback."
}return B
},ckeditor:function(D,B){if(!CKEDITOR.env.isCompatible){return this
}if(!A.isFunction(D)){var C=B;
B=D;
D=C
}B=B||{};
this.filter("textarea, div, p").each(function(){var E=A(this),H=E.data("ckeditorInstance"),F=E.data("_ckeditorInstanceLock"),G=this;
if(H&&!F){if(D){D.apply(H,[this])
}}else{if(!F){if(B.autoUpdateElement||(typeof B.autoUpdateElement=="undefined"&&CKEDITOR.config.autoUpdateElement)){B.autoUpdateElementJquery=true
}B.autoUpdateElement=false;
E.data("_ckeditorInstanceLock",true);
H=CKEDITOR.replace(G,B);
E.data("ckeditorInstance",H);
H.on("instanceReady",function(J){var I=J.editor;
setTimeout(function(){if(!I.element){setTimeout(arguments.callee,100);
return 
}J.removeListener("instanceReady",this.callee);
I.on("dataReady",function(){E.trigger("setData.ckeditor",[I])
});
I.on("getData",function(L){E.trigger("getData.ckeditor",[I,L.data])
},999);
I.on("destroy",function(){E.trigger("destroy.ckeditor",[I])
});
if(I.config.autoUpdateElementJquery&&E.is("textarea")&&E.parents("form").length){var K=function(){E.ckeditor(function(){I.updateElement()
})
};
E.parents("form").submit(K);
E.parents("form").bind("form-pre-serialize",K);
E.bind("destroy.ckeditor",function(){E.parents("form").unbind("submit",K);
E.parents("form").unbind("form-pre-serialize",K)
})
}I.on("destroy",function(){E.data("ckeditorInstance",null)
});
E.data("_ckeditorInstanceLock",null);
E.trigger("instanceReady.ckeditor",[I]);
if(D){D.apply(I,[G])
}},0)
},null,null,9999)
}else{CKEDITOR.on("instanceReady",function(J){var I=J.editor;
setTimeout(function(){if(!I.element){setTimeout(arguments.callee,100);
return 
}if(I.element.$==G){if(D){D.apply(I,[G])
}}},0)
},null,null,9999)
}}});
return this
}});
if(CKEDITOR.config.jqueryOverrideVal){A.fn.val=CKEDITOR.tools.override(A.fn.val,function(B){return function(E,F){var D=typeof E!="undefined",C;
this.each(function(){var H=A(this),G=H.data("ckeditorInstance");
if(!F&&H.is("textarea")&&G){if(D){G.setData(E)
}else{C=G.getData();
return null
}}else{if(D){B.call(H,E)
}else{C=B.call(H);
return null
}}return true
});
return D?this:C
}
})
}})();