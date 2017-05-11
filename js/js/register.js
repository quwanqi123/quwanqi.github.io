require(['../../config'],function(){

	//加载需要用到的模块
	require(['jquery'],function($){

		//注册处理

		//定义各个注册信息的状态  默认都是false
		var  regStatus = {
			uname: false,
			psw: false,
			cfpsw: false,
			phone: false
		};

		//定义需要用到的变量
		var unameInput = $('.box-item #uname'),
			pswInput = $('.box-item #password'),
			cfpswInput = $('.box-item #cfpassword'),
			phoneInput = $('.box-item #phone'),
			yzBtn = $('.box-item #yzbtn'),
			regBtn = $('.box-now');


		//账号验证 (失焦验证  1、用户名是否合法  2、用户名是否已经存在)
		var regUname = /^[a-zA-Z_]\w{3,30}$/;
		unameInput.blur(function(){
			var uname = unameInput.val();
			var n_yes1 = $('.box-item .name-yes1');
			var tips1 = $('.box .tips1');
			//判断用户名是否合法
			if(!regUname.test(uname)){
				tips1.css({"display":"block"});
				n_yes1.css({"display":"none"});
				regStatus.uname = false;
				return;
			}else{
				tips1.css({"display":"none"});
				regStatus.uname = true;
			}
			
			//判断用户名是否已被注册
			$.ajax({
				url: 'http://10.9.151.199/PC-Project-Admin/checkAccount.php',
				data: {
					account: uname
				},
				dataType: 'jsonp',
				success: function(result){
					
					if(result.status){
						// alert('用户名可用');
						n_yes1.css({"display":"block"})
					}else{
						n_yes1.css({"display":"none"})
						regStatus.uname = false;
					}
				}
			});

		});

		//密码验证
		var regPsw = /^[\w!@#$%^&*_+]{6,16}$/; 
		pswInput.on('input',function(){
			var ruo = $('.it-psd .ruo');
			var zhong = $('.it-psd .zhong');
			var n_yes2 = $('.box-item .name-yes2');
			var psw = pswInput.val();
			if(!regUname.test(psw)){
				ruo.css({"background-color":"red"});
				zhong.css({"background-color":"#ddd"});
				n_yes2.css({"display":"none"});
			}else{
				regStatus.psw = true;
				zhong.css({"background-color":"red"});
				ruo.css({"background-color":"#ddd"});
				n_yes2.css({"display":"block"});
			};
		});

		//确认密码验证 
		cfpswInput.on('input',function(){
			var psw = pswInput.val();
			var cfpsw = cfpswInput.val();
			var n_yes3 = $('.box-item .name-yes3');
			if(cfpsw==psw){
				n_yes3.css({"display":"block"});
				regStatus.cfpsw = true;
			}else{
				n_yes3.css({"display":"none"});
				regStatus.cfpsw = false;
			}
		});
		cfpswInput.blur(function(){
			var psw = pswInput.val();
			var cfpsw = cfpswInput.val();
			var tips2 = $('.box .tips2');
			if(cfpsw==psw){
				regStatus.cfpsw = true;
				tips2.css({"display":"none"});
			}else{
				tips2.css({"display":"block"});
				regStatus.cfpsw = false;
			}

		})

		//手机号验证
		var regPhone = /^1[3578]\d{9}$/; 
		phoneInput.on('input',function(){
			var phone = phoneInput.val();
			var n_yes4 = $('.box-item .name-yes4');
			if(regPhone.test(phone)){
				n_yes4.css({"display":"block"});
				regStatus.phone = true;
			}else{
				n_yes4.css({"display":"none"});
				regStatus.phone = false;
			}
			
		});
		phoneInput.blur(function(){
			var phone = phoneInput.val();
			var tips3 = $('.box .tips3');
			if(!regPhone.test(phone)){
				tips3.css({"display":"block"});
				regStatus.phone = false;
			}else{
				tips3.css({"display":"none"});
				regStatus.phone = true;
			}
		});
		// 随机生成6位验证码
		yzBtn.click(function(){
			var yzm = $('.box-item #dxyzm')
			var charactors="0123456789abcdefghijklmnopqrstuvwsyz";
			var value='',i;
			for(j=1;j<=6;j++){
				i = parseInt(35*Math.random()); 　
				value = value + charactors.charAt(i);
			}
			yzm.val(value);
			
		});
		


		//点击登录
		regBtn.click(function(){

			//判断所有的信息状态，如果有不合法的，不能注册
			for(var i in regStatus){
				//如果找到某个输入不合法，做出相应的提示并返回
				if(!regStatus[i]){
					alert('注册失败,请检查有无填写错误');
					return;
				}
			}

			//通过ajax提交表单数据
			$.ajax({
				type: 'post',
				url: 'http://10.9.151.199/PC-Project-Admin/register.php',
				data: {
					account: unameInput.val(),
					password: pswInput.val()
				},
				dataType: 'jsonp',
				success: function(result){
					if(result.status){
						alert('注册成功');
					}else{
						alert('注册失败');
					}
				}
			});
		});


	});

});