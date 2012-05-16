(function(){CKEDITOR.config.jqueryOverrideVal=typeof CKEDITOR.config.jqueryOverrideVal=="undefined"?true:CKEDITOR.config.jqueryOverrideVal;
var A=window.jQuery;
if(typeof A=="undefined"){return 
}A.extend(A.fn,{ckeditorGet:function(){var B=this.eq(0).data("ckeditorInstance");
if(!B){throw"CKEditor not yet initialized, use ckeditor() with callback."
}return B
},ckeditor:function(B,D){if(!CKEDITOR.env.isCompatible){return this
}if(!A.isFunction(B)){var C=D;
D=B;
B=C
}D=D||{};
this.filter("textarea, div, p").each(function(){var H=A(this),G=H.data("ckeditorInstance"),F=H.data("_ckeditorInstanceLock"),E=this;
if(G&&!F){if(B){B.apply(G,[this])
}}else{if(!F){if(D.autoUpdateElement||typeof D.autoUpdateElement=="undefined"&&CKEDITOR.config.autoUpdateElement){D.autoUpdateElementJquery=true
}D.autoUpdateElement=false;
H.data("_ckeditorInstanceLock",true);
G=CKEDITOR.replace(E,D);
H.data("ckeditorInstance",G);
G.on("instanceReady",function(J){var I=J.editor;
setTimeout(function(){if(!I.element){setTimeout(arguments.callee,100);
return 
}J.removeListener("instanceReady",this.callee);
I.on("dataReady",function(){H.trigger("setData.ckeditor",[I])
});
I.on("getData",function(L){H.trigger("getData.ckeditor",[I,L.data])
},999);
I.on("destroy",function(){H.trigger("destroy.ckeditor",[I])
});
if(I.config.autoUpdateElementJquery&&H.is("textarea")&&H.parents("form").length){var K=function(){H.ckeditor(function(){I.updateElement()
})
};
H.parents("form").submit(K);
H.parents("form").bind("form-pre-serialize",K);
H.bind("destroy.ckeditor",function(){H.parents("form").unbind("submit",K);
H.parents("form").unbind("form-pre-serialize",K)
})
}I.on("destroy",function(){H.data("ckeditorInstance",null)
});
H.data("_ckeditorInstanceLock",null);
H.trigger("instanceReady.ckeditor",[I]);
if(B){B.apply(I,[E])
}},0)
},null,null,9999)
}else{CKEDITOR.on("instanceReady",function(J){var I=J.editor;
setTimeout(function(){if(!I.element){setTimeout(arguments.callee,100);
return 
}if(I.element.$==E){if(B){B.apply(I,[E])
}}},0)
},null,null,9999)
}}});
return this
}});
if(CKEDITOR.config.jqueryOverrideVal){A.fn.val=CKEDITOR.tools.override(A.fn.val,function(B){return function(F,E){var D=typeof F!="undefined",C;
this.each(function(){var H=A(this),G=H.data("ckeditorInstance");
if(!E&&H.is("textarea")&&G){if(D){G.setData(F)
}else{C=G.getData();
return null
}}else{if(D){B.call(H,F)
}else{C=B.call(H);
return null
}}return true
});
return D?this:C
}
})
}})();