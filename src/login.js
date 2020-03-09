/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import axios from 'axios';
import Header from './header';
import Footer from './footer';
import urlPath from './urlPath';
import './register.css';

class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      username: '',
      password: '',
    };
    this.userName=this.userName.bind(this);
    this.passWord=this.passWord.bind(this);
    this.changeRegister=this.changeRegister.bind(this);
    this.loginButton=this.loginButton.bind(this);
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
  changeRegister(){
    this.props.history.push('/register');
  }
  loginButton(){
    const logindata={
      username: this.state.username,
      password: this.state.password
    };
    axios.post(urlPath+'/user_login',logindata)
      .then(res => {
        if(res.data.code===0){
          alert('恭喜你登录成功！');
          this.props.history.push('/');
        }
      });
  }
  render(){
    return (
      <div>
        <Header props={this.props} />
        <div className="main-page-register-login">
          <div className="login-or-register">
            <div className="user-login">用户登录</div>
            <div onClick={this.changeRegister} className="user-register">用户注册</div>
          </div>
          <div className="register-body">
            <h2>登录</h2>
            <div className="user-name">
              <div className="user-name-word">用户名：</div>
              <input className="user-name-input" 
                onChange={this.userName} 
                value={this.state.username} />
            </div>
            <div className="password">
              <div className="password-word">密码：</div>
              <input className="password-input"
                type="password"
                value={this.state.password}
                onChange={this.passWord}/>
            </div>
            <button className="register-button"
              onClick={this.loginButton}
            >立即登录</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
