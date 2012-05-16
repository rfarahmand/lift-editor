;
CKEDITOR.plugins.add("htmlwriter");
CKEDITOR.htmlWriter=CKEDITOR.tools.createClass({base:CKEDITOR.htmlParser.basicWriter,$:function(){this.base();
this.indentationChars="\t";
this.selfClosingEnd=" />";
this.lineBreakChars="\n";
this.forceSimpleAmpersand=0;
this.sortAttributes=1;
this._.indent=0;
this._.indentation="";
this._.inPre=0;
this._.rules={};
var A=CKEDITOR.dtd;
for(var B in CKEDITOR.tools.extend({},A.$nonBodyContent,A.$block,A.$listItem,A.$tableContent)){this.setRules(B,{indent:1,breakBeforeOpen:1,breakAfterOpen:1,breakBeforeClose:!A[B]["#"],breakAfterClose:1})
}this.setRules("br",{breakAfterOpen:1});
this.setRules("title",{indent:0,breakAfterOpen:0});
this.setRules("style",{indent:0,breakBeforeClose:1});
this.setRules("pre",{indent:0})
},proto:{openTag:function(B,A){var C=this._.rules[B];
if(this._.indent){this.indentation()
}else{if(C&&C.breakBeforeOpen){this.lineBreak();
this.indentation()
}}this._.output.push("<",B)
},openTagClose:function(A,B){var C=this._.rules[A];
if(B){this._.output.push(this.selfClosingEnd)
}else{this._.output.push(">");
if(C&&C.indent){this._.indentation+=this.indentationChars
}}if(C&&C.breakAfterOpen){this.lineBreak()
}A=="pre"&&(this._.inPre=1)
},attribute:function(B,A){if(typeof A=="string"){this.forceSimpleAmpersand&&(A=A.replace(/&amp;/g,"&"));
A=CKEDITOR.tools.htmlEncodeAttr(A)
}this._.output.push(" ",B,'="',A,'"')
},closeTag:function(A){var B=this._.rules[A];
if(B&&B.indent){this._.indentation=this._.indentation.substr(this.indentationChars.length)
}if(this._.indent){this.indentation()
}else{if(B&&B.breakBeforeClose){this.lineBreak();
this.indentation()
}}this._.output.push("</",A,">");
A=="pre"&&(this._.inPre=0);
if(B&&B.breakAfterClose){this.lineBreak()
}},text:function(A){if(this._.indent){this.indentation();
!this._.inPre&&(A=CKEDITOR.tools.ltrim(A))
}this._.output.push(A)
},comment:function(A){if(this._.indent){this.indentation()
}this._.output.push("<!--",A,"-->")
},lineBreak:function(){if(!this._.inPre&&this._.output.length>0){this._.output.push(this.lineBreakChars)
}this._.indent=1
},indentation:function(){if(!this._.inPre){this._.output.push(this._.indentation)
}this._.indent=0
},setRules:function(A,C){var B=this._.rules[A];
if(B){CKEDITOR.tools.extend(B,C,true)
}else{this._.rules[A]=C
}}}});