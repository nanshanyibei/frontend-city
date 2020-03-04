import React, { Component } from 'react';
import './header.css';

class Header extends Component{
  constructor(props){
		super(props);
		this.state={

		}
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
								<div className='login'>登录</div>
								<div className='register'>注册</div>
							</div>
						</div>
						<div className="top-header-body">
							<div className="menu-main">
								<span>首页</span>
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
			</div>
		)
	}
}

export default Header
