;
CKEDITOR.plugins.add("smiley",{requires:["dialog"],init:function(A){A.config.smiley_path=A.config.smiley_path||(this.path+"images/");
A.addCommand("smiley",new CKEDITOR.dialogCommand("smiley"));
A.ui.addButton("Smiley",{label:A.lang.smiley.toolbar,command:"smiley"});
CKEDITOR.dialog.add("smiley",this.path+"dialogs/smiley.js")
}});
CKEDITOR.config.smiley_images=["regular_smile.gif","sad_smile.gif","wink_smile.gif","teeth_smile.gif","confused_smile.gif","tounge_smile.gif","embaressed_smile.gif","omg_smile.gif","whatchutalkingabout_smile.gif","angry_smile.gif","angel_smile.gif","shades_smile.gif","devil_smile.gif","cry_smile.gif","lightbulb.gif","thumbs_down.gif","thumbs_up.gif","heart.gif","broken_heart.gif","kiss.gif","envelope.gif"];
CKEDITOR.config.smiley_descriptions=["smiley","sad","wink","laugh","frown","cheeky","blush","surprise","indecision","angry","angel","cool","devil","crying","enlightened","no","yes","heart","broken heart","kiss","mail"];