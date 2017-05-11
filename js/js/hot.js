define(['jquery'],function($){
		var hua = $('.hot1-t #hua');
			var index = 1;
			var cont1 = $('.hot1 .disp1');
			var cont2 = $('.hot1 .disp2')
			hua.click(function(){
				index++;
				if(index>=2){index==0}
				if(index%2==1){
					cont1.css({"display":"none"});
					cont2.css({"display":"block"});

				}else{
					cont1.css({"display":"block"});
					cont2.css({"display":"none"});
				}
				
			})
			
			$.ajax({
				url: "./json/hot.json",
				dataType: 'json',
				success: function(r){
					var content = $('.disp1 .hot1-b-r');
					var con = '';
					for(var i=0,len=r.length; i<len; i++){
						con += `<div class="item">
									<h2>${r[i].name}</h2>
									<div class="tips">${r[i].fname}</div>
									<b>${r[i].price}</b>
									<a href="###">点击购买&gt;</a>
									<img src="${r[i].url}">
								</div>`;
					}
					content.html(con);
				}
			});
			$.ajax({
				url: "./json/hot1.json",
				dataType: 'json',
				success: function(r){
					var content = $('.disp2 .hot1-b-r');
					var con2 = '';
					for(var i=0,len=r.length; i<len; i++){
						con2 += `<div class="item">
									<h2>${r[i].name}</h2>
									<div class="tips">${r[i].fname}</div>
									<b>${r[i].price}</b>
									<a href="###">点击购买&gt;</a>
									<img src="${r[i].url}">
								</div>`;
					}
					content.html(con2);
				}
			});
		
});	