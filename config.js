require.config({
	baseUrl:'js',
	paths:{
		"jquery":'lib/jquery-1.11.3',
		"swiper": 'plug/swiper-3.4.2.min',
		"echarts":'plug/echarts',
		"jquery.cookie": "plug/jquery.cookie",
		"template":'plug/template',
		"layer":'plug/layer/layer',
		"banner":'js/banner',
		"hot":'js/hot',
		"lou1":'js/lou1'
	},
	shim:{
		"swiper":["jquery"],
		"jquery.cookie":["jquery"],
		"template":["jquery"],
		"layer":["jquery"]
	}

})