
let path = require('path')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')



module.exports = {
	devServer:{
		port:3000,
		hot:true
	},
	outputDir:'./dist',
	configureWebpack: {
		plugins: [
			new MiniCssExtractPlugin({
	         filename:'../css/main.css'  //css的输出路径
	      })
		]
	},
	
}