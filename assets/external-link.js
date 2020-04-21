$(document).ready(function() {

   $("a[href^=http]").each(function(){

      // NEW - excluded domains list
      var excludes = [
         'xienotes.net',
         'xienotes.github.io'
      ];
      for(i=0; i<excludes.length; i++) {
         if(this.href.indexOf(excludes[i]) != -1) {
            return true; // continue each() with next link
         }
      }

      if(this.href.indexOf(location.hostname) == -1) {

           // attach a do-nothing event handler to ensure we can 'trigger' a click on this link
           $(this).click(function() { return true; }); 

           $(this).attr({
               target: "_blank",
               title: "Opens in a new window"
           });

           $(this).click(); // trigger it
      }
   })
});