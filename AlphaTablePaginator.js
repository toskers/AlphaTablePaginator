/*
*
* jQuery AlphaTablePaginator plugin
* Author: Sean Toscano
*
* Version 1.0 (06/12/2011)
* Requires jquery 1.2.6 or higher
*
* Usage: $("#table id").AlphaTablePaginator();
*/

(function( $ ){
  $.fn.AlphaTablePaginator = function(){
		
		var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
		var letters = new Array();
		
		return this.each(function() {
		
			$(this).before(CreateLettersHtml()+"<div class='AlphaTablePaginatorError'>No matching entries were found, please click another letter.</div>");
			$(".AlphaTablePaginatorError").hide();

			$(this).find("tr").each(function(index,row){
   
			   var tx = $(this).find("td:eq(0)").text();
			   var letter = tx.substring(0,1).toUpperCase();
			   if(tx.length > 0)
			   {   
					$(this).addClass("ln-ALL ln-"+letter);
					TagLetters(letter);
			   }
			   
			   
			});
			

			function TagLetters(letter)
			{
			   $(".AlphaTablePaginatorNav ."+letter).addClass("ltr-enabled");   
			   
			}

			function CreateLettersHtml()
			{
			   var html = new Array();
			   
			   for(var i = 0; i < alphabet.length; i++)
			   {
					if(html.length == 0)
					{
						html.push('<li><a class="all" href="#">ALL</a></li>');
					}
					
					var HtmlClass = alphabet[i]+' ltr';
					
					if(i == (alphabet.length-1))
						HtmlClass = HtmlClass+' ln-last';
					
					html.push('<li><a class="'+HtmlClass+'" href="#'+alphabet[i]+'">'+alphabet[i]+'</a></li>');
			   }

			   return '<div class="AlphaTablePaginatorNav listNav"><ul class="ln-letters">'+html.join('')+'</ul></div>';
			   
			}
		
			$(".AlphaTablePaginatorNav li a").click(function(){
		
				var letter = "ln-"+$(this).text()+"";

				if($("table.AlphaTablePaginator tbody tr").hasClass(letter))
				{
					$(".AlphaTablePaginatorError").hide();
					$("table.AlphaTablePaginator,table.AlphaTablePaginator tr").show();
					$("table.AlphaTablePaginator tbody tr").not("."+letter).hide();
				}
				else
				{
					$("table.AlphaTablePaginator").hide();
					$(".AlphaTablePaginatorError").show();
				}
			});		
		});
	};
})( jQuery );
