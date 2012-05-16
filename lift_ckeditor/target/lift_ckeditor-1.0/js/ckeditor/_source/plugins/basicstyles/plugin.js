;
CKEDITOR.plugins.add("basicstyles",{requires:["styles","button"],init:function(B){var C=function(F,I,G,E){var H=new CKEDITOR.style(E);
B.attachStyleStateChange(H,function(J){!B.readOnly&&B.getCommand(G).setState(J)
});
B.addCommand(G,new CKEDITOR.styleCommand(H));
B.ui.addButton(F,{label:I,command:G})
};
var A=B.config,D=B.lang;
C("Bold",D.bold,"bold",A.coreStyles_bold);
C("Italic",D.italic,"italic",A.coreStyles_italic);
C("Underline",D.underline,"underline",A.coreStyles_underline);
C("Strike",D.strike,"strike",A.coreStyles_strike);
C("Subscript",D.subscript,"subscript",A.coreStyles_subscript);
C("Superscript",D.superscript,"superscript",A.coreStyles_superscript)
}});
CKEDITOR.config.coreStyles_bold={element:"strong",overrides:"b"};
CKEDITOR.config.coreStyles_italic={element:"em",overrides:"i"};
CKEDITOR.config.coreStyles_underline={element:"u"};
CKEDITOR.config.coreStyles_strike={element:"strike"};
CKEDITOR.config.coreStyles_subscript={element:"sub"};
CKEDITOR.config.coreStyles_superscript={element:"sup"};