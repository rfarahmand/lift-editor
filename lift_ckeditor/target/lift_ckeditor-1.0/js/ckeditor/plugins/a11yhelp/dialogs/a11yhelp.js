;
CKEDITOR.dialog.add("a11yHelp",function(I){var H=I.lang.accessibilityHelp,G=CKEDITOR.tools.getNextId(),F={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",17:"CTRL",18:"ALT",19:"PAUSE",20:"CAPSLOCK",27:"ESCAPE",33:"PAGE UP",34:"PAGE DOWN",35:"END",36:"HOME",37:"LEFT ARROW",38:"UP ARROW",39:"RIGHT ARROW",40:"DOWN ARROW",45:"INSERT",46:"DELETE",91:"LEFT WINDOW KEY",92:"RIGHT WINDOW KEY",93:"SELECT KEY",96:"NUMPAD  0",97:"NUMPAD  1",98:"NUMPAD  2",99:"NUMPAD  3",100:"NUMPAD  4",101:"NUMPAD  5",102:"NUMPAD  6",103:"NUMPAD  7",104:"NUMPAD  8",105:"NUMPAD  9",106:"MULTIPLY",107:"ADD",109:"SUBTRACT",110:"DECIMAL POINT",111:"DIVIDE",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NUM LOCK",145:"SCROLL LOCK",186:"SEMI-COLON",187:"EQUAL SIGN",188:"COMMA",189:"DASH",190:"PERIOD",191:"FORWARD SLASH",192:"GRAVE ACCENT",219:"OPEN BRACKET",220:"BACK SLASH",221:"CLOSE BRAKET",222:"SINGLE QUOTE"};
F[CKEDITOR.ALT]="ALT";
F[CKEDITOR.SHIFT]="SHIFT";
F[CKEDITOR.CTRL]="CTRL";
var E=[CKEDITOR.ALT,CKEDITOR.SHIFT,CKEDITOR.CTRL];
function D(M){var L,K,J=[];
for(var N=0;
N<E.length;
N++){K=E[N];
L=M/E[N];
if(L>1&&L<=2){M-=K;
J.push(F[K])
}}J.push(F[M]||String.fromCharCode(M));
return J.join("+")
}var C=/\$\{(.*?)\}/g;
function B(M,L){var K=I.config.keystrokes,J,O=K.length;
for(var N=0;
N<O;
N++){J=K[N];
if(J[1]==L){break
}}return D(J[0])
}function A(){var R='<div class="cke_accessibility_legend" role="document" aria-labelledby="'+G+'_arialbl" tabIndex="-1">%1</div><span id="'+G+'_arialbl" class="cke_voice_label">'+H.contents+" </span>",Q="<h1>%1</h1><dl>%2</dl>",P="<dt>%1</dt><dd>%2</dd>",O=[],N=H.legend,M=N.length;
for(var L=0;
L<M;
L++){var K=N[L],J=[],W=K.items,V=W.length;
for(var U=0;
U<V;
U++){var T=W[U],S;
S=P.replace("%1",T.name).replace("%2",T.legend.replace(C,B));
J.push(S)
}O.push(Q.replace("%1",K.name).replace("%2",J.join("")))
}return R.replace("%1",O.join(""))
}return{title:H.title,minWidth:600,minHeight:400,contents:[{id:"info",label:I.lang.common.generalTab,expand:true,elements:[{type:"html",id:"legends",style:"white-space:normal;",focus:function(){},html:A()+'<style type="text/css">.cke_accessibility_legend{width:600px;height:400px;padding-right:5px;overflow-y:auto;overflow-x:hidden;}.cke_browser_quirks .cke_accessibility_legend,.cke_browser_ie6 .cke_accessibility_legend{height:390px}.cke_accessibility_legend *{white-space:normal;}.cke_accessibility_legend h1{font-size: 20px;border-bottom: 1px solid #AAA;margin: 5px 0px 15px;}.cke_accessibility_legend dl{margin-left: 5px;}.cke_accessibility_legend dt{font-size: 13px;font-weight: bold;}.cke_accessibility_legend dd{margin:10px}</style>'}]}],buttons:[CKEDITOR.dialog.cancelButton]}
});