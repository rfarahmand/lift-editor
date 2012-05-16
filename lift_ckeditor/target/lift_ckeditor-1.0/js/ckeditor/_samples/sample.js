;
if(window.CKEDITOR){(function(){var A=function(){var F=CKEDITOR.env;
var E="<p><strong>Your browser is not compatible with CKEditor.</strong>";
var C={gecko:"Firefox 2.0",ie:"Internet Explorer 6.0",opera:"Opera 9.5",webkit:"Safari 3.0"};
var H="";
for(var D in F){if(C[D]){if(F[D]){E+=" CKEditor is compatible with "+C[D]+" or higher."
}else{H+=C[D]+"+, "
}}}H=H.replace(/\+,([^,]+), $/,"+ and $1");
E+=" It is also compatible with "+H+".";
E+="</p><p>With non compatible browsers, you should still be able to see and edit the contents (HTML) in a plain text field.</p>";
var G=document.getElementById("alerts");
G&&(G.innerHTML=E)
};
var B=function(){if(!CKEDITOR.env.isCompatible){A()
}};
if(window.addEventListener){window.addEventListener("load",B,false)
}else{if(window.attachEvent){window.attachEvent("onload",B)
}}})()
};