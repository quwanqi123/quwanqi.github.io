require(['../../config'],function(){

	//加载需要用到的模块
	require(['jquery','template','jquery.cookie'],function($,template){
	/*
 	详情页面js
	
	0、渲染颜色分类(读取数据)
 	1、颜色的切换
 	2、增加数量
 	3、减少数量
 	4、直接修改input
 	5、加入购物车
	*/
	/*++++++++++++++商品区加入购物车++++++++++++++++*/
		var detail = {
			data: {},
			init: function(){
				var _this = this;
				//读取商品数据 (如果json文件格式错误，获取失败)
				$.getJSON('./json/details.json',function(result){
					//保留数据
					_this.data = result;
					var list = template('type-list',result);
					$('#maguo-content').html( list );

					//选中第一个
					var first = $('#maguo-content li:first');
					first.addClass('active');
					//获取第一个分类的编号
					var id = first.data('id');
					$('.price .goods-price').html( result.color[id].sale_price );
					$('.kucun').html( +result.color[id].stock );
				});

				//颜色切换
				this.typeSwitch();
				//增加
				this.add();
				this.reduce();
				this.input();
				this.addToCart();

			},
			typeSwitch: function(){
				var _this = this;
				$('#maguo-content').on('click','.tb-con-item',function(){
					$(this).addClass('active').siblings().removeClass('active');
					var id = $(this).data('id');
					$('.price .goods-price').html( _this.data.color[id].sale_price );
					$('.kucun').html(_this.data.color[id].stock);
				});
			},
			add: function(){
			$('.amount #add').click(function(){
				//拿到当前的数量
				var amount = parseInt( $(this).prev().val() );
				//获取库存
				var stock = $('.kucun').html();
				//判断与库存的关系
				if(amount >= stock) return;
				amount++;
				$(this).prev().val( amount );
			});
			},
			//数量减少
			reduce: function(){
				$('.amount #reduce').click(function(){
					//拿到当前的数量
					var amount = parseInt( $(this).next().val() );
					if(amount <= 1) return;
					amount--;
					$(this).next().val(amount);
				});
			},
			input: function(){
				$('.amount #buy-num').on('input',function(){
					var amount = $(this).val();
					if(amount === '') return;
					// 3d  => 3  parseInt()
					amount = parseInt(amount);
					if( isNaN(amount) ){
						amount = 1;
					}

					//判断库存
					var stock = $('.kucun').html();
					if(amount >= stock){
						amount = stock;
					}
					$(this).val(amount);
				});
				//失焦之后，如果内容为空，更改为1
				$('.amount #buy-num').blur(function(){
					var amount = $(this).val();
					if(amount === ''){
						 $(this).val(1);
					}
				});
			},
			addToCart: function(){
				$('#putCart').click(function(){
					var goods = $('.tb-con-item.active');
					var id = goods.data('id');
					var amount = parseInt( $('.amount #buy-num').val() );

					//读取cookie  做兼容
					var cart = $.cookie('tm-cart') || '{}';
					cart = JSON.parse(cart);
					
					//判断是否已经存在当前商品
					if(!cart[id]){
						//不存在
						cart[id] = {
							id: id,
							amount: amount
						};
					}else{
						cart[id].amount += amount;
					}

					alert('加入成功');

					//重写cookie
					$.cookie('tm-cart',JSON.stringify(cart),{expires: 365,path: '/'});

					console.log( JSON.parse($.cookie('tm-cart')) );

				});
			}
		};	
		detail.init();
		/*+++++++++++++++++放大镜++++++++++++++++++++*/
		$('.imgworp li a').mouseenter(function(){
			$(this).addClass('active').parent().siblings().find('a').removeClass('active');
			var src=$(this).find('img').attr("src");
			$('.l-t img').attr({src:src});
			$('.big img').attr({src:src});
		});

		$('.b-left .l-t').mouseenter(function(){
			$('.filter').show();
			$('.big').show();
			var offset=$(this).offset();
			var l=offset.left;
			var t=offset.top;
			
			$('body').mousemove(function(e){
				e = e || window.event;
				var x=e.clientX-l-100;
				var y=e.clientY-t-100;
				x=x<14?14:(x>214?214:x);
				y=y<14?14:(y>214?214:y);
				$('.filter').css({left:x,top:y});
				$('.big img').css({left:((-2*x)+56),top:((-2*y)+28)});
			});
		});
		$('.b-left .l-t').mouseleave(function(){
			$('.filter').hide();
			$('.big').hide();
		});






	});

});		