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
	console.log('请求user_register端口')
	const {username, nickname, password, emailaddress} = req.body
	console.log(username, nickname, password, emailaddress)
	UserShouZhuan.findOne({name: username}, function(err, doc){
		if(doc){
			return res.json({code: 1, msg: "用户名重复"})
		}
		const userModel=new UserShouZhuan({name: username, password, comments: [], atricles: []})
		userModel.save(function(err,doc){
			if(err){
				return res.json({code:1,msg:'后端出错了'})
			}
			const {name, _id} = doc
			return res.json({code:0,data:{name,_id}})
		})
	})
})
server.listen(9093,function(){
  console.log("Node app start at port 9093")
})

