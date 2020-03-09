/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import './header.css';
import { Redirect } from 'react-router';

class Header extends Component{
  constructor(props){
    super(props);
    this.state={

    };
    this.backToIndex=this.backToIndex.bind(this);
    this.toRegister=this.toRegister.bind(this);
    this.toLogin=this.toLogin.bind(this);
  }
  backToIndex(){
    this.props.props.history.push('/');
  }
  toRegister(){
    this.props.props.history.push('/register');
  }
  toLogin(){
    this.props.props.history.push('/login');
  }
  render(){
    return (
      <div>
        <div className="top-header-top">
          <div className='left-picture'>logo,240px*120px</div>
          <div className="right-content">
            <div className="right-top-search-login">
              <div className="search-bar-container">
                <div className='choose-option'>资讯</div>
                <input className='input-area' placeholder="精品应用，海量搜索！" />
              </div>
              <div className='login-register'>
                <div onClick={this.toLogin} className='login'>登录</div>
                <div onClick={this.toRegister} className='register'>注册</div>
              </div>
            </div>
            <div className="top-header-body">
              <div className="menu-main">
                <span onClick={this.backToIndex}>首页</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>关于</span>
                <span>免责声明</span>
              </div>
            </div>
          </div>
        </div>
        <div className="the-big-first-picture">第一张图片，1160px*196px</div>
      </div>
    );
  }
}

export default Header;
