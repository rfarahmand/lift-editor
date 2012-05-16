;
CKEDITOR.plugins.add("listblock",{requires:["panel"],onLoad:function(){CKEDITOR.ui.panel.prototype.addListBlock=function(A,B){return this.addBlock(A,new CKEDITOR.ui.listBlock(this.getHolderElement(),B))
};
CKEDITOR.ui.listBlock=CKEDITOR.tools.createClass({base:CKEDITOR.ui.panel.block,$:function(A,C){C=C||{};
var D=C.attributes||(C.attributes={});
(this.multiSelect=!!C.multiSelect)&&(D["aria-multiselectable"]=true);
!D.role&&(D.role="listbox");
this.base.apply(this,arguments);
var B=this.keys;
B[40]="next";
B[9]="next";
B[38]="prev";
B[CKEDITOR.SHIFT+9]="prev";
B[32]=CKEDITOR.env.ie?"mouseup":"click";
CKEDITOR.env.ie&&(B[13]="mouseup");
this._.pendingHtml=[];
this._.items={};
this._.groups={}
},_:{close:function(){if(this._.started){this._.pendingHtml.push("</ul>");
delete this._.started
}},getClick:function(){if(!this._.click){this._.click=CKEDITOR.tools.addFunction(function(B){var A=true;
if(this.multiSelect){A=this.toggle(B)
}else{this.mark(B)
}if(this.onClick){this.onClick(B,A)
}},this)
}return this._.click
}},proto:{add:function(C,A,D){var B=this._.pendingHtml,E=CKEDITOR.tools.getNextId();
if(!this._.started){B.push('<ul role="presentation" class=cke_panel_list>');
this._.started=1;
this._.size=this._.size||0
}this._.items[C]=E;
B.push("<li id=",E,' class=cke_panel_listItem role=presentation><a id="',E,'_option" _cke_focus=1 hidefocus=true title="',D||C,'" href="javascript:void(\'',C,"')\" "+(CKEDITOR.env.ie?'onclick="return false;" onmouseup':"onclick")+'="CKEDITOR.tools.callFunction(',this._.getClick(),",'",C,"'); return false;\"",' role="option">',A||C,"</a></li>")
},startGroup:function(A){this._.close();
var B=CKEDITOR.tools.getNextId();
this._.groups[A]=B;
this._.pendingHtml.push('<h1 role="presentation" id=',B," class=cke_panel_grouptitle>",A,"</h1>")
},commit:function(){this._.close();
this.element.appendHtml(this._.pendingHtml.join(""));
delete this._.size;
this._.pendingHtml=[]
},toggle:function(B){var A=this.isMarked(B);
if(A){this.unmark(B)
}else{this.mark(B)
}return !A
},hideGroup:function(A){var C=this.element.getDocument().getById(this._.groups[A]),B=C&&C.getNext();
if(C){C.setStyle("display","none");
if(B&&B.getName()=="ul"){B.setStyle("display","none")
}}},hideItem:function(A){this.element.getDocument().getById(this._.items[A]).setStyle("display","none")
},showAll:function(){var B=this._.items,A=this._.groups,F=this.element.getDocument();
for(var D in B){F.getById(B[D]).setStyle("display","")
}for(var G in A){var E=F.getById(A[G]),C=E.getNext();
E.setStyle("display","");
if(C&&C.getName()=="ul"){C.setStyle("display","")
}}},mark:function(B){if(!this.multiSelect){this.unmarkAll()
}var C=this._.items[B],A=this.element.getDocument().getById(C);
A.addClass("cke_selected");
this.element.getDocument().getById(C+"_option").setAttribute("aria-selected",true);
this.onMark&&this.onMark(A)
},unmark:function(B){var C=this.element.getDocument(),D=this._.items[B],A=C.getById(D);
A.removeClass("cke_selected");
C.getById(D+"_option").removeAttribute("aria-selected");
this.onUnmark&&this.onUnmark(A)
},unmarkAll:function(){var A=this._.items,C=this.element.getDocument();
for(var B in A){var D=A[B];
C.getById(D).removeClass("cke_selected");
C.getById(D+"_option").removeAttribute("aria-selected")
}this.onUnmark&&this.onUnmark()
},isMarked:function(A){return this.element.getDocument().getById(this._.items[A]).hasClass("cke_selected")
},focus:function(E){this._.focusIndex=-1;
if(E){var C=this.element.getDocument().getById(this._.items[E]).getFirst();
var A=this.element.getElementsByTag("a"),D,B=-1;
while((D=A.getItem(++B))){if(D.equals(C)){this._.focusIndex=B;
break
}}setTimeout(function(){C.focus()
},0)
}}}})
}});