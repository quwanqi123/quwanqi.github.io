//加载配置文件
require(['../config'],function(){

	//核心工作
	require(['jquery','banner','hot','lou1','jquery.cookie'],function($,banner,hot,lou1){
		//读取cookie，判断用户是否登录，填充信息
		var userinfo = $.cookie('userinfo');
		
		//如果有用户信息
		if(userinfo){
			//将json字符串转化为json对象
			userinfo = JSON.parse(userinfo);
			//用户处于登录状态,更改信息
			if(userinfo.login_status){
				$('.p3').html( userinfo.account + '<a href="javascript:;" class="logout">退出</a>' );
			}else{
				$('.p3').html( "您好，欢迎来到三江！" + '<a class="delu" href="entry.html">登录</a><a href="register.html">注册</a>' );
			}
		}
		//退出
		$('.logout').click(function(){
			var info = {
				account: userinfo.account,
				login_status: 0
			};
			$.cookie('userinfo',JSON.stringify(info),{expires: 365,path: '/'});
			location.href = "entry.html";
		});
	});

});	