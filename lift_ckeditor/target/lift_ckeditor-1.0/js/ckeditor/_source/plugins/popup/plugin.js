;
CKEDITOR.plugins.add("popup");
CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{popup:function(B,C,H,I){C=C||"80%";
H=H||"70%";
if(typeof C=="string"&&C.length>1&&C.substr(C.length-1,1)=="%"){C=parseInt(window.screen.width*parseInt(C,10)/100,10)
}if(typeof H=="string"&&H.length>1&&H.substr(H.length-1,1)=="%"){H=parseInt(window.screen.height*parseInt(H,10)/100,10)
}if(C<640){C=640
}if(H<420){H=420
}var G=parseInt((window.screen.height-H)/2,10),D=parseInt((window.screen.width-C)/2,10);
I=(I||"location=no,menubar=no,toolbar=no,dependent=yes,minimizable=no,modal=yes,alwaysRaised=yes,resizable=yes,scrollbars=yes")+",width="+C+",height="+H+",top="+G+",left="+D;
var E=window.open("",null,I,true);
if(!E){return false
}try{var A=navigator.userAgent.toLowerCase();
if(A.indexOf(" chrome/18")==-1){E.moveTo(D,G);
E.resizeTo(C,H)
}E.focus();
E.location.href=B
}catch(F){E=window.open(B,null,I,true)
}return true
}});