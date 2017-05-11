//加载配置文件
require(['../../config'],function(){

	//加载需要用到的模块
	require(['jquery',"jquery.cookie"],function($){

		$('.btn-entry').click(function(){
			var account = $('.account').val();
			var psw = $('.password').val();
			//判断是否输入为空
			if(account=='' || psw == ''){
				// alert('用户名或者密码不能为空');
				$('.fr .t1').css({"display":"block"});
				$('.fr .t2').css({"display":"none"})
				return;
			}
			console.log(1)
			//使用ajax进行登录
			$.ajax({
				type: 'post',
				url: 'http://10.9.151.199/PC-Project-Admin/login.php',
				data: {
					account: account,
					password: psw
				},
				dataType: 'jsonp',
				success: function(result){
					if(result.status) {
						// alert('登录成功');

						//判断是否需要自动登录
						if( $('#xy1').prop('checked') ){
							var userinfo = {
								account: account,
								login_status: 1
							};
							$.cookie('userinfo',JSON.stringify(userinfo),{expires: 365,path: '/'});
						}

						//大部分会跳转到首页
						location.href = 'index.html';
					}else{
						// alert('登录失败');
						$('.fr .t2').css({"display":"block"})
					}
				}
			});
		});

	});

});