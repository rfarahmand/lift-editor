;
CKEDITOR.dialog.add("scaytcheck",function(F){var I=true,B,X=CKEDITOR.document,A=F.name,M=CKEDITOR.plugins.scayt.getUiTabs(F),R,S=[],C=0,D=["dic_create_"+A+",dic_restore_"+A,"dic_rename_"+A+",dic_delete_"+A],L=["mixedCase","mixedWithDigits","allCaps","ignoreDomainNames"];
function U(){if(typeof document.forms["optionsbar_"+A]!="undefined"){return document.forms["optionsbar_"+A]["options"]
}return[]
}function J(){if(typeof document.forms["languagesbar_"+A]!="undefined"){return document.forms["languagesbar_"+A]["scayt_lang"]
}return[]
}function Q(a,c){if(!a){return 
}var b=a.length;
if(b==undefined){a.checked=a.value==c.toString();
return 
}for(var Z=0;
Z<b;
Z++){a[Z].checked=false;
if(a[Z].value==c.toString()){a[Z].checked=true
}}}var Y=F.lang.scayt;
var E=[{id:"options",label:Y.optionsTab,elements:[{type:"html",id:"options",html:'<form name="optionsbar_'+A+'"><div class="inner_options">	<div class="messagebox"></div>	<div style="display:none;">		<input type="checkbox" name="options"  id="allCaps_'+A+'" />		<label for="allCaps" id="label_allCaps_'+A+'"></label>	</div>	<div style="display:none;">		<input name="options" type="checkbox"  id="ignoreDomainNames_'+A+'" />		<label for="ignoreDomainNames" id="label_ignoreDomainNames_'+A+'"></label>	</div>	<div style="display:none;">	<input name="options" type="checkbox"  id="mixedCase_'+A+'" />		<label for="mixedCase" id="label_mixedCase_'+A+'"></label>	</div>	<div style="display:none;">		<input name="options" type="checkbox"  id="mixedWithDigits_'+A+'" />		<label for="mixedWithDigits" id="label_mixedWithDigits_'+A+'"></label>	</div></div></form>'}]},{id:"langs",label:Y.languagesTab,elements:[{type:"html",id:"langs",html:'<form name="languagesbar_'+A+'"><div class="inner_langs">	<div class="messagebox"></div>	   <div style="float:left;width:45%;margin-left:5px;" id="scayt_lcol_'+A+'" ></div>   <div style="float:left;width:45%;margin-left:15px;" id="scayt_rcol_'+A+'"></div></div></form>'}]},{id:"dictionaries",label:Y.dictionariesTab,elements:[{type:"html",style:"",id:"dictionaries",html:'<form name="dictionarybar_'+A+'"><div class="inner_dictionary" style="text-align:left; white-space:normal; width:320px; overflow: hidden;">	<div style="margin:5px auto; width:80%;white-space:normal; overflow:hidden;" id="dic_message_'+A+'"> </div>	<div style="margin:5px auto; width:80%;white-space:normal;">        <span class="cke_dialog_ui_labeled_label" >Dictionary name</span><br>		<span class="cke_dialog_ui_labeled_content" >			<div class="cke_dialog_ui_input_text">				<input id="dic_name_'+A+'" type="text" class="cke_dialog_ui_input_text"/>		</div></span></div>		<div style="margin:5px auto; width:80%;white-space:normal;">			<a style="display:none;" class="cke_dialog_ui_button" href="javascript:void(0)" id="dic_create_'+A+'">				</a>			<a  style="display:none;" class="cke_dialog_ui_button" href="javascript:void(0)" id="dic_delete_'+A+'">				</a>			<a  style="display:none;" class="cke_dialog_ui_button" href="javascript:void(0)" id="dic_rename_'+A+'">				</a>			<a  style="display:none;" class="cke_dialog_ui_button" href="javascript:void(0)" id="dic_restore_'+A+'">				</a>		</div>	<div style="margin:5px auto; width:95%;white-space:normal;" id="dic_info_'+A+'"></div></div></form>'}]},{id:"about",label:Y.aboutTab,elements:[{type:"html",id:"about",style:"margin: 5px 5px;",html:'<div id="scayt_about_'+A+'"></div>'}]}];
var G={title:Y.title,minWidth:360,minHeight:220,onShow:function(){var a=this;
a.data=F.fire("scaytDialog",{});
a.options=a.data.scayt_control.option();
a.chosed_lang=a.sLang=a.data.scayt_control.sLang;
if(!a.data||!a.data.scayt||!a.data.scayt_control){alert("Error loading application service");
a.hide();
return 
}var Z=0;
if(I){a.data.scayt.getCaption(F.langCode||"en",function(b){if(Z++>0){return 
}B=b;
W.apply(a);
P.apply(a);
I=false
})
}else{P.apply(a)
}a.selectPage(a.data.tab)
},onOk:function(){var a=this.data.scayt_control;
a.option(this.options);
var Z=this.chosed_lang;
a.setLang(Z);
a.refresh()
},onCancel:function(){var a=U();
for(var Z in a){a[Z].checked=false
}Q(J(),"")
},contents:S};
var H=CKEDITOR.plugins.scayt.getScayt(F);
for(R=0;
R<M.length;
R++){if(M[R]==1){S[S.length]=E[R]
}}if(M[2]==1){C=1
}var W=function(){var p=this,g=p.data.scayt.getLangList(),h=["dic_create","dic_delete","dic_rename","dic_restore"],b=[],q=[],r=L,o;
if(C){for(o=0;
o<h.length;
o++){b[o]=h[o]+"_"+A;
X.getById(b[o]).setHtml('<span class="cke_dialog_ui_button">'+B["button_"+h[o]]+"</span>")
}X.getById("dic_info_"+A).setHtml(B.dic_info)
}if(M[0]==1){for(o in r){var e="label_"+r[o],s=e+"_"+A,a=X.getById(s);
if("undefined"!=typeof a&&"undefined"!=typeof B[e]&&"undefined"!=typeof p.options[r[o]]){a.setHtml(B[e]);
var t=a.getParent();
t.$.style.display="block"
}}}var c='<p><img src="'+window.scayt.getAboutInfo().logoURL+'" /></p><p>'+B.version+window.scayt.getAboutInfo().version.toString()+"</p><p>"+B.about_throwt_copy+"</p>";
X.getById("scayt_about_"+A).setHtml(c);
var d=function(w,x){var l=X.createElement("label");
l.setAttribute("for","cke_option"+w);
l.setHtml(x[w]);
if(p.sLang==w){p.chosed_lang=w
}var y=X.createElement("div");
var i=CKEDITOR.dom.element.createFromHtml('<input id="cke_option'+w+'" type="radio" '+(p.sLang==w?'checked="checked"':"")+' value="'+w+'" name="scayt_lang" />');
i.on("click",function(){this.$.checked=true;
p.chosed_lang=w
});
y.append(i);
y.append(l);
return{lang:x[w],code:w,radio:y}
};
if(M[1]==1){for(o in g.rtl){q[q.length]=d(o,g.ltr)
}for(o in g.ltr){q[q.length]=d(o,g.ltr)
}q.sort(function(l,i){return(i.lang>l.lang)?-1:1
});
var j=X.getById("scayt_lcol_"+A),f=X.getById("scayt_rcol_"+A);
for(o=0;
o<q.length;
o++){var Z=(o<q.length/2)?j:f;
Z.append(q[o].radio)
}}var v={};
v.dic_create=function(w,y,l){var z=l[0]+","+l[1];
var x=B.err_dic_create;
var i=B.succ_dic_create;
window.scayt.createUserDictionary(y,function(AA){K(z);
T(l[1]);
i=i.replace("%s",AA.dname);
V(i)
},function(AA){x=x.replace("%s",AA.dname);
N(x+"( "+(AA.message||"")+")")
})
};
v.dic_rename=function(l,x){var w=B.err_dic_rename||"";
var i=B.succ_dic_rename||"";
window.scayt.renameUserDictionary(x,function(y){i=i.replace("%s",y.dname);
O(x);
V(i)
},function(y){w=w.replace("%s",y.dname);
O(x);
N(w+"( "+(y.message||"")+" )")
})
};
v.dic_delete=function(w,y,l){var z=l[0]+","+l[1];
var x=B.err_dic_delete;
var i=B.succ_dic_delete;
window.scayt.deleteUserDictionary(function(AA){i=i.replace("%s",AA.dname);
K(z);
T(l[0]);
O("");
V(i)
},function(AA){x=x.replace("%s",AA.dname);
N(x)
})
};
v.dic_restore=p.dic_restore||function(w,y,l){var z=l[0]+","+l[1];
var x=B.err_dic_restore;
var i=B.succ_dic_restore;
window.scayt.restoreUserDictionary(y,function(AA){i=i.replace("%s",AA.dname);
K(z);
T(l[1]);
V(i)
},function(AA){x=x.replace("%s",AA.dname);
N(x)
})
};
function k(w){var x=X.getById("dic_name_"+A).getValue();
if(!x){N(" Dictionary name should not be empty. ");
return false
}try{var i=w.data.getTarget().getParent();
var y=/(dic_\w+)_[\w\d]+/.exec(i.getId())[1];
v[y].apply(null,[i,x,D])
}catch(l){N(" Dictionary error. ")
}return true
}var u=(D[0]+","+D[1]).split(","),m;
for(o=0,m=u.length;
o<m;
o+=1){var n=X.getById(u[o]);
if(n){n.on("click",k,this)
}}};
var P=function(){var c=this;
if(M[0]==1){var f=U();
for(var a=0,Z=f.length;
a<Z;
a++){var b=f[a].id;
var d=X.getById(b);
if(d){f[a].checked=false;
if(c.options[b.split("_")[0]]==1){f[a].checked=true
}if(I){d.on("click",function(){c.options[this.getId().split("_")[0]]=this.$.checked?1:0
})
}}}}if(M[1]==1){var e=X.getById("cke_option"+c.sLang);
Q(e.$,c.sLang)
}if(C){window.scayt.getNameUserDictionary(function(h){var g=h.dname;
K(D[0]+","+D[1]);
if(g){X.getById("dic_name_"+A).setValue(g);
T(D[1])
}else{T(D[0])
}},function(){X.getById("dic_name_"+A).setValue("")
});
V("")
}};
function N(Z){X.getById("dic_message_"+A).setHtml('<span style="color:red;">'+Z+"</span>")
}function V(Z){X.getById("dic_message_"+A).setHtml('<span style="color:blue;">'+Z+"</span>")
}function T(c){c=String(c);
var b=c.split(",");
for(var a=0,Z=b.length;
a<Z;
a+=1){X.getById(b[a]).$.style.display="inline"
}}function K(c){c=String(c);
var b=c.split(",");
for(var a=0,Z=b.length;
a<Z;
a+=1){X.getById(b[a]).$.style.display="none"
}}function O(Z){X.getById("dic_name_"+A).$.value=Z
}return G
});