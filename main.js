
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<script>

$(".page-title").after("<div style='min-width:100px; display: inline-block; margin:0 ; padding: 10px; border:2px solid darkgray; background-color:rgba(251,151,151,0.1)' id='liste'> </div>");

var list = [];
var headers = $("h2, h3, h4, h5, h6");
var i=1;

headers.each(function(){
    
		 var clone= $(this).clone(); 
     var tagName=$(this).prop("tagName")
     clone.attr("title",`${tagName}-${i}`)
     list.push(clone);
     $(this).attr("id",`${tagName}-${i}`);
		 i++;
});


var url=window.location.href;

$(list).each(function(){
   
   if($(this).text().trim() !== ''){$("#liste").append($(this));}
   var href=$(this).attr("title");
   var text=$(this).text();

   $(this).replaceWith(`<a href=${url}#${href}>${text}</a>`);
   
});

$("#liste a").css({"line-height":"1.5", "font-weight":"400", "display":"list-item",  "margin-left":"20px", "color":"rgba(233,102,49,1)"})

$("#liste a").each(function(){

if($(this).attr("href").includes("H3")){
$(this).css("margin-left", "30px")
}

else if ($(this).attr("href").includes("H4")){
$(this).css("margin-left", "40px")

}

else if ($(this).attr("href").includes("H5")){
$(this).css("margin-left", "50px")

}

else if ($(this).attr("href").includes("H6")){
$(this).css("margin-left", "60px")

}


});

</script>
