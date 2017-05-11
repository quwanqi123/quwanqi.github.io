define(['jquery'],function($){
	$.ajax({
		url: "./json/lou1-c.json",
		dataType: 'json',
		success: function(r){
			var content = $('.lou1-b-c .c-worp');
			var con = '';
			for(var i=0,len=r.length; i<len; i++){
				var l = r[i].con;
				con += "<ul>";
				for(var j = 0; j < l.length; j++){
					con += `<li>
								<a href="details.html"><img src="${l[j].url}"></a>
								<h2>${l[j].name}</h2>
								<div>${l[j].price}</div>
								<img class="gwche" src="img/gwche.jpg">
							</li>`;			
				}
				con += "</ul>";	
			}
			content.html(con);
		}
	});
	$.ajax({
		url: "./json/lou2-c.json",
		dataType: 'json',
		success: function(r){
			var content = $('.lou1-2 .lou1-b-c .c-worp');
			var con = '';
			for(var i=0,len=r.length; i<len; i++){
				var l = r[i].con;
				con += "<ul>";
				for(var j = 0; j < l.length; j++){
					con += `<li>
								<a href="details.html"><img src="${l[j].url}"></a>
								<h2>${l[j].name}</h2>
								<div>${l[j].price}</div>
								<img class="gwche" src="img/gwche.jpg">
							</li>`;			
				}
				con += "</ul>";	
			}
			content.html(con);
		}
	});
	var lou1 = $('.lou1-1');
	var lou2 = $('.lou1-2');
	var lou3 = $('.lou1-3');
	var lou4 = $('.lou1-4');
	var lou5 = $('.lou1-5');
	var lou6 = $('.lou1-6');
	var lou7 = $('.lou1-7');
	var lou8 = $('.lou1-8');
	var lou9 = $('.lou1-9');
	var li1 = lou1.find('.lou1-t .lou1-nav li');
	var content1 = lou1.find('.lou1-b .lou1-b-c .c-worp');
	var li2 = lou2.find('.lou1-t .lou1-nav li');
	var content2 = lou2.find('.lou1-b .lou1-b-c .c-worp');
	var li3 = lou3.find('.lou1-t .lou1-nav li');
	var content3 = lou3.find('.lou1-b .lou1-b-c .c-worp');
	var li4 = lou4.find('.lou1-t .lou1-nav li');
	var content4 = lou4.find('.lou1-b .lou1-b-c .c-worp');
	var li5 = lou5.find('.lou1-t .lou1-nav li');
	var content5 = lou5.find('.lou1-b .lou1-b-c .c-worp');
	var li6 = lou6.find('.lou1-t .lou1-nav li');
	var content6 = lou6.find('.lou1-b .lou1-b-c .c-worp');
	var li7 = lou7.find('.lou1-t .lou1-nav li');
	var content7 = lou7.find('.lou1-b .lou1-b-c .c-worp');
	var li8 = lou8.find('.lou1-t .lou1-nav li');
	var content8 = lou8.find('.lou1-b .lou1-b-c .c-worp');
	var li9 = lou9.find('.lou1-t .lou1-nav li');
	var content9 = lou9.find('.lou1-b .lou1-b-c .c-worp');
	var a = function(x,y){
		x.mouseenter(function(){
			$(this).addClass('active')
			.siblings().removeClass('active');
			var index = $(this).index();
			y.animate({
				'margin-left':-816*index
			})

		})
	}
	a(li1,content1);
	a(li2,content2);
	a(li3,content3);
	a(li4,content4);
	a(li5,content5);
	a(li6,content6);
	a(li7,content7);
	a(li8,content8);
	a(li9,content9);
	var top = $('.fixed-r .b #top');
	var t = $('body').offset().top;
	top.click(function(){
		$('html,body').animate({
						scrollTop: t
					});
	})

	
		
});	

