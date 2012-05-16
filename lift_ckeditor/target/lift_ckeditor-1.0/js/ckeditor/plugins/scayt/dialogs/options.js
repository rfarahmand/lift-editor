;
CKEDITOR.dialog.add("scaytcheck",function(Y){var X=true,W,V=CKEDITOR.document,U=Y.name,T=CKEDITOR.plugins.scayt.getUiTabs(Y),S,R=[],Q=0,P=["dic_create_"+U+",dic_restore_"+U,"dic_rename_"+U+",dic_delete_"+U],O=["mixedCase","mixedWithDigits","allCaps","ignoreDomainNames"];
function N(){if(typeof document.forms["optionsbar_"+U]!="undefined"){return document.forms["optionsbar_"+U].options
}return[]
}function M(){if(typeof document.forms["languagesbar_"+U]!="undefined"){return document.forms["languagesbar_"+U].scayt_lang
}return[]
}function L(b,Z){if(!b){return 
}var c=b.length;
if(c==undefined){b.checked=b.value==Z.toString();
return 
}for(var a=0;
a<c;
a++){b[a].checked=false;
if(b[a].value==Z.toString()){b[a].checked=true
}}}var K=Y.lang.scayt,J=[{id:"options",label:K.optionsTab,elements:[{type:"html",id:"options",html:'<form name="optionsbar_'+U+'"><div class="inner_options">\t<div class="messagebox"></div>\t<div style="display:none;">\t\t<input type="checkbox" name="options"  id="allCaps_'+U+'" />\t\t<label for="allCaps" id="label_allCaps_'+U+'"></label>\t</div>\t<div style="display:none;">\t\t<input name="options" type="checkbox"  id="ignoreDomainNames_'+U+'" />\t\t<label for="ignoreDomainNames" id="label_ignoreDomainNames_'+U+'"></label>\t</div>\t<div style="display:none;">\t<input name="options" type="checkbox"  id="mixedCase_'+U+'" />\t\t<label for="mixedCase" id="label_mixedCase_'+U+'"></label>\t</div>\t<div style="display:none;">\t\t<input name="options" type="checkbox"  id="mixedWithDigits_'+U+'" />\t\t<label for="mixedWithDigits" id="label_mixedWithDigits_'+U+'"></label>\t</div></div></form>'}]},{id:"langs",label:K.languagesTab,elements:[{type:"html",id:"langs",html:'<form name="languagesbar_'+U+'"><div class="inner_langs">\t<div class="messagebox"></div>\t   <div style="float:left;width:45%;margin-left:5px;" id="scayt_lcol_'+U+'" ></div>   <div style="float:left;width:45%;margin-left:15px;" id="scayt_rcol_'+U+'"></div></div></form>'}]},{id:"dictionaries",label:K.dictionariesTab,elements:[{type:"html",style:"",id:"dictionaries",html:'<form name="dictionarybar_'+U+'"><div class="inner_dictionary" style="text-align:left; white-space:normal; width:320px; overflow: hidden;">\t<div style="margin:5px auto; width:80%;white-space:normal; overflow:hidden;" id="dic_message_'+U+'"> </div>\t<div style="margin:5px auto; width:80%;white-space:normal;">        <span class="cke_dialog_ui_labeled_label" >Dictionary name</span><br>\t\t<span class="cke_dialog_ui_labeled_content" >\t\t\t<div class="cke_dialog_ui_input_text">\t\t\t\t<input id="dic_name_'+U+'" type="text" class="cke_dialog_ui_input_text"/>\t\t</div></span></div>\t\t<div style="margin:5px auto; width:80%;white-space:normal;">\t\t\t<a style="display:none;" class="cke_dialog_ui_button" href="javascript:void(0)" id="dic_create_'+U+'">\t\t\t\t</a>\t\t\t<a  style="display:none;" class="cke_dialog_ui_button" href="javascript:void(0)" id="dic_delete_'+U+'">\t\t\t\t</a>\t\t\t<a  style="display:none;" class="cke_dialog_ui_button" href="javascript:void(0)" id="dic_rename_'+U+'">\t\t\t\t</a>\t\t\t<a  style="display:none;" class="cke_dialog_ui_button" href="javascript:void(0)" id="dic_restore_'+U+'">\t\t\t\t</a>\t\t</div>\t<div style="margin:5px auto; width:95%;white-space:normal;" id="dic_info_'+U+'"></div></div></form>'}]},{id:"about",label:K.aboutTab,elements:[{type:"html",id:"about",style:"margin: 5px 5px;",html:'<div id="scayt_about_'+U+'"></div>'}]}],I={title:K.title,minWidth:360,minHeight:220,onShow:function(){var a=this;
a.data=Y.fire("scaytDialog",{});
a.options=a.data.scayt_control.option();
a.chosed_lang=a.sLang=a.data.scayt_control.sLang;
if(!a.data||!a.data.scayt||!a.data.scayt_control){alert("Error loading application service");
a.hide();
return 
}var Z=0;
if(X){a.data.scayt.getCaption(Y.langCode||"en",function(b){if(Z++>0){return 
}W=b;
G.apply(a);
F.apply(a);
X=false
})
}else{F.apply(a)
}a.selectPage(a.data.tab)
},onOk:function(){var a=this.data.scayt_control;
a.option(this.options);
var Z=this.chosed_lang;
a.setLang(Z);
a.refresh()
},onCancel:function(){var a=N();
for(var Z in a){a[Z].checked=false
}L(M(),"")
},contents:R},H=CKEDITOR.plugins.scayt.getScayt(Y);
for(S=0;
S<T.length;
S++){if(T[S]==1){R[R.length]=J[S]
}}if(T[2]==1){Q=1
}var G=function(){var j=this,t=j.data.scayt.getLangList(),s=["dic_create","dic_delete","dic_rename","dic_restore"],r=[],q=[],p=O,o;
if(Q){for(o=0;
o<s.length;
o++){r[o]=s[o]+"_"+U;
V.getById(r[o]).setHtml('<span class="cke_dialog_ui_button">'+W["button_"+s[o]]+"</span>")
}V.getById("dic_info_"+U).setHtml(W.dic_info)
}if(T[0]==1){for(o in p){var n="label_"+p[o],m=n+"_"+U,l=V.getById(m);
if("undefined"!=typeof l&&"undefined"!=typeof W[n]&&"undefined"!=typeof j.options[p[o]]){l.setHtml(W[n]);
var k=l.getParent();
k.$.style.display="block"
}}}var i='<p><img src="'+window.scayt.getAboutInfo().logoURL+'" /></p><p>'+W.version+window.scayt.getAboutInfo().version.toString()+"</p><p>"+W.about_throwt_copy+"</p>";
V.getById("scayt_about_"+U).setHtml(i);
var h=function(w,v){var u=V.createElement("label");
u.setAttribute("for","cke_option"+w);
u.setHtml(v[w]);
if(j.sLang==w){j.chosed_lang=w
}var y=V.createElement("div"),x=CKEDITOR.dom.element.createFromHtml('<input id="cke_option'+w+'" type="radio" '+(j.sLang==w?'checked="checked"':"")+' value="'+w+'" name="scayt_lang" />');
x.on("click",function(){this.$.checked=true;
j.chosed_lang=w
});
y.append(x);
y.append(u);
return{lang:v[w],code:w,radio:y}
};
if(T[1]==1){for(o in t.rtl){q[q.length]=h(o,t.ltr)
}for(o in t.ltr){q[q.length]=h(o,t.ltr)
}q.sort(function(v,u){return u.lang>v.lang?-1:1
});
var g=V.getById("scayt_lcol_"+U),f=V.getById("scayt_rcol_"+U);
for(o=0;
o<q.length;
o++){var e=o<q.length/2?g:f;
e.append(q[o].radio)
}}var d={};
d.dic_create=function(w,v,u){var z=u[0]+","+u[1],y=W.err_dic_create,x=W.succ_dic_create;
window.scayt.createUserDictionary(v,function(AA){B(z);
C(u[1]);
x=x.replace("%s",AA.dname);
D(x)
},function(AA){y=y.replace("%s",AA.dname);
E(y+"( "+(AA.message||"")+")")
})
};
d.dic_rename=function(w,v){var u=W.err_dic_rename||"",x=W.succ_dic_rename||"";
window.scayt.renameUserDictionary(v,function(y){x=x.replace("%s",y.dname);
A(v);
D(x)
},function(y){u=u.replace("%s",y.dname);
A(v);
E(u+"( "+(y.message||"")+" )")
})
};
d.dic_delete=function(w,v,u){var z=u[0]+","+u[1],y=W.err_dic_delete,x=W.succ_dic_delete;
window.scayt.deleteUserDictionary(function(AA){x=x.replace("%s",AA.dname);
B(z);
C(u[0]);
A("");
D(x)
},function(AA){y=y.replace("%s",AA.dname);
E(y)
})
};
d.dic_restore=j.dic_restore||(function(w,v,u){var z=u[0]+","+u[1],y=W.err_dic_restore,x=W.succ_dic_restore;
window.scayt.restoreUserDictionary(v,function(AA){x=x.replace("%s",AA.dname);
B(z);
C(u[1]);
D(x)
},function(AA){y=y.replace("%s",AA.dname);
E(y)
})
});
function c(w){var v=V.getById("dic_name_"+U).getValue();
if(!v){E(" Dictionary name should not be empty. ");
return false
}try{var u=w.data.getTarget().getParent(),y=/(dic_\w+)_[\w\d]+/.exec(u.getId())[1];
d[y].apply(null,[u,v,P])
}catch(x){E(" Dictionary error. ")
}return true
}var b=(P[0]+","+P[1]).split(","),a;
for(o=0,a=b.length;
o<a;
o+=1){var Z=V.getById(b[o]);
if(Z){Z.on("click",c,this)
}}},F=function(){var e=this;
if(T[0]==1){var Z=N();
for(var f=0,d=Z.length;
f<d;
f++){var c=Z[f].id,b=V.getById(c);
if(b){Z[f].checked=false;
if(e.options[c.split("_")[0]]==1){Z[f].checked=true
}if(X){b.on("click",function(){e.options[this.getId().split("_")[0]]=this.$.checked?1:0
})
}}}}if(T[1]==1){var a=V.getById("cke_option"+e.sLang);
L(a.$,e.sLang)
}if(Q){window.scayt.getNameUserDictionary(function(h){var g=h.dname;
B(P[0]+","+P[1]);
if(g){V.getById("dic_name_"+U).setValue(g);
C(P[1])
}else{C(P[0])
}},function(){V.getById("dic_name_"+U).setValue("")
});
D("")
}};
function E(Z){V.getById("dic_message_"+U).setHtml('<span style="color:red;">'+Z+"</span>")
}function D(Z){V.getById("dic_message_"+U).setHtml('<span style="color:blue;">'+Z+"</span>")
}function C(b){b=String(b);
var Z=b.split(",");
for(var c=0,a=Z.length;
c<a;
c+=1){V.getById(Z[c]).$.style.display="inline"
}}function B(b){b=String(b);
var Z=b.split(",");
for(var c=0,a=Z.length;
c<a;
c+=1){V.getById(Z[c]).$.style.display="none"
}}function A(Z){V.getById("dic_name_"+U).$.value=Z
}return I
});