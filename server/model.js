const mongoose = require('mongoose')
const fs = require('fs')
// 链接mongo
const DB_URL = 'mongodb://localhost:27017/user_shouzhuan'
mongoose.connect(DB_URL)

const models = {
	user_shouzhuan: {
		"name": {type: String, require: true},
		"password": {type: String, require: true},
		"comments": {type: Array, require: true},
		"atricles": {type: Array, require: true}
	}
}

for(let m in models){
	mongoose.model(m, new mongoose.Schema(models[m]))
}

const UserShouZhuan = mongoose.model('user_shouzhuan')

// const mongoSave=new UserShouZhuan({
// 	name: 'gaoxuanxuan',
// 	password: '1234',
// 	comments: [],
// 	atricles: []
// })

// mongoSave.save(function(err, doc){
// 	if(err){
// 		console.log(err, doc)
// 	}else{
// 		console.log('添加成功')
// 	}
// })

// 清除数据库内容
UserShouZhuan.remove({}, function(err, doc){

})

// module.exports = {
// 	UserShouZhuan
// }

// for(let m in models){
// 	mongoose.model(m, new mongoose.Schema(models[m]))
// }

module.exports = {
	getModel: function(name){
		return mongoose.model(name)
	}
}