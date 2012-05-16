import net.liftweb.http.S
import net.liftweb.http.SHtml
import net.liftweb.http.js.{ JE, JsExp }
import net.liftweb.http.js.JsCmds._
import net.liftweb.http.js.JsCmds

package com.rfarahmand {
package snippet {

import _root_.scala.xml.{NodeSeq, Text}
import _root_.net.liftweb.util._
import _root_.net.liftweb.common._
import _root_.java.util.Date
import com.rfarahmand.lib._
import Helpers._

class Create  {

  private val whence = S.referer openOr "/"
  
  def render = {
    var titleText = ""
    var bodyText = ""
    
    "#titleText" #> SHtml.ajaxText(titleText, (a: String) => { titleText = a; Noop }) &
    "#bodyText" #> SHtml.ajaxTextarea(bodyText, (a: String) => { bodyText = a; Noop}) &
    "#submit [onclick]" #> SHtml.ajaxCall(JE.JsRaw("CKEDITOR.instances.bodyText.getData()"),
    													 (x:String) => {
    													  		bodyText = x; 
    													  		println(
    													  		    "titleText="+titleText+"\n"+
    																"bodyText="+bodyText+"\n"
    																);
    																JsCmds.RedirectTo(whence)}
    													) 
    
  }

}



}
}
