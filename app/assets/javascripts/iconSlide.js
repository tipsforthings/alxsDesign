/* ALXS Design - Frontpage jQuery */
/* Written by Alex Scott aka ALXS */
/* Started on Thursday 2 Apr 2015 */

/********* v.0.0.1.beta1 **********/
$(".sidebarLink").hover(
   function() {
      $(this).children("a").children(".fa").fadeIn();
   },
   function() {
      $(this).children("a").children(".fa").fadeOut("fast");
   }
);
