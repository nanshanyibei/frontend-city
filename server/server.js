const express = require('express');
const path = require('path')
const model = require('./model')
const bodyParser = require('body-parser')

const UserShouZhuan = model.getModel('user_shouzhuan')

const app = express()
//work with express
const server = require('http').Server(app)

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, './public')))
app.get("/",function(req,res){
	res.send("<h1>Hello World</h1>")
})
app.post('/user_register', function(req, res){
	// const userid = req.cookies.userid
	// const { from } = req.body
	// console.log(userid, from)
	// model.update(
	// 	{from, to: userid},
	// 	{'$set': {read: true}},
	// 	{'multi': true},
	// 	function(err, doc){
	// 	console.log(doc)
	// 	if(!err){
	// 		return res.json({code: 0, num: doc.nModified})
	// 	}
	// 	return res.json({code: 1, msg: '修改失败'})
	// })
	console.log('请求user_register端口')
	// const {from} = req.body
	console.log(req.body)
	return res.json({code: 1, msg: '暂时OK'})
})
server.listen(9093,function(){
  console.log("Node app start at port 9093")
})

