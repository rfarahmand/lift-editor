lift-editor
===========

NOTE: There are problems with choosing CKEditor or other WYSIWYGs that do not emit proper XHTML (and/or use document.write that again has something to do with meme type, the XHTML meme type , the Lift default's, puts browsers in a strict mode..). So if you have landed here and have problems loading those editors inside a Lift app, add the following line to your Boot.scala and most of your problems are likely to go away:

 LiftRules.useXhtmlMimeType = false;

It took me some readings of discussions on the forums. So just try it out!

Now if you add that line the emitted page will have text/html meme type and Lift wont complain about non-XHTML content.

WARNING and Disclaimer: I have shared this code with Lift community and David Pollock kindly provided feedback regarding security issues with this way of doing it; I am still figuring out the best way of having a WYSIWYG in lift and fetching html data from an editor in general (things like validation, storage etc..)

https://groups.google.com/group/liftweb/browse_thread/thread/11134e91eef6fdb0



