/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import axios from 'axios';
import Header from './header';
import Footer from './footer';
import urlPath from './urlPath';
import './register.css';

class Register extends Component{
  constructor(props){
    super(props);
    this.state={
      username: '',
      password: '',
      insurepassword: '',
      emailaddress: ''
    };
    this.userName=this.userName.bind(this);
    this.passWord=this.passWord.bind(this);
    this.insurePassword=this.insurePassword.bind(this);
    this.emailInput=this.emailInput.bind(this);
    this.registerButton=this.registerButton.bind(this);
    this.changeLogin=this.changeLogin.bind(this);
  }
  userName(e) {
    this.setState({
      username: e.target.value
    });
  }
  passWord(e){
    this.setState({
      password: e.target.value
    });
  }
  insurePassword(e){
    this.setState({
      insurepassword: e.target.value
    });
  }
  emailInput(e){
    this.setState({
      emailaddress: e.target.value
    });
  }
  emailBlur(){
    // eslint-disable-next-line no-useless-escape
    const reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
    if(!this.state.emailaddress.test(reg)){
      alert('您输入的邮箱不合法，请输入合法邮箱');
    }
  }
  registerButton(){
    const registerdata = {
      username: this.state.username,
      password: this.state.password,
      insurepassword: this.state.insurepassword,
      emailaddress: this.state.emailaddress
    };
    axios.post(urlPath+'/user_register',registerdata)
      .then(res => {
        console.log(res);
        if(res.data.code==0){
          alert('恭喜注册成功！');
          this.props.history.push('/login');
        }
      });
  }
  changeLogin(){
    this.setState({registerOrLogin: false});
    this.props.history.push('/login');
  }
  render(){
    return (
      <div>
        <Header props={this.props} />
        <div className="main-page-register-login">
          <div className="login-or-register">
            <div onClick={this.changeLogin} className="user-login">用户登录</div>
            <div className="user-register">用户注册</div>
          </div>
          <div className="register-body">
            <h2>用户注册</h2>
            <div className="user-name">
              <div className="user-name-word">用户名：</div>
              <input className="user-name-input" 
                onChange={this.userName} 
                value={this.state.username} />
              <span className="user-name-prompt">12位以内英文字母、数字或下划线</span>
            </div>
            <div className="password">
              <div className="password-word">密码：</div>
              <input className="password-input"
                type="password"
                value={this.state.password}
                onChange={this.passWord}/>
            </div>
            <div className="insure-password">
              <div className="insure-password-word">确认密码：</div>
              <input className="insure-password-input"
                type="password"
                value={this.state.insurepassword} 
                onChange={this.insurePassword} />
            </div>
            <div className="email-address">
              <div className="email-address-word">邮件地址：</div>	
              <input className="email-input"
                onChange={this.emailInput} 
                value={this.state.emailaddress}
                onBlur={this.emailBlur} />
              <span className="email-input-prompt">输入常用邮箱</span>
            </div>
            <button className="register-button"
              onClick={this.registerButton}
            >立即注册</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Register;
