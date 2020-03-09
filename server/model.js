const mongoose = require('mongoose');
// 链接mongo
const DB_URL = 'mongodb://localhost:27017/user_shouzhuan';
mongoose.connect(DB_URL);

const models = {
  user_shouzhuan: {
    'name': {type: String, require: true},
    'password': {type: String, require: true},
    'emailaddress': {type: String, require: true},
    'comments': {type: Array, require: true},
    'atricles': {type: Array, require: true}
  }
};

for(let m in models){
  mongoose.model(m, new mongoose.Schema(models[m]));
}

// eslint-disable-next-line no-unused-vars
const UserShouZhuan = mongoose.model('user_shouzhuan');

// 清除数据库内容
// UserShouZhuan.remove({}, function(err, doc){

// })

module.exports = {
  getModel: function(name){
    return mongoose.model(name);
  }
};