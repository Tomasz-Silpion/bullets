 /**
  * Simple jQuery snippet to convert lines starting with hyphens into bullets
  * @author Tomasz Gregorczyk (http://github.com/Tomasz-Silpion)
  * @licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php) 
  */
 (function($) {
     $.fn.bullets = function() {
         $(this).each(function(index, element) {
             lines = $(element).html().split('<br>');
             counter = 0;
             $(lines).each(function(index, text) {
                 if (text.substr(0, 3).indexOf('-') > -1) {
                     counter++;
                 }
             });
             if (counter > 2) {
                 $(element).html($(element).html().replace(/- /g, '&#8226; '));
             }
         });

     };
 })(jQuery);
