import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import ReportElement from './reportelement';
import './indexpage.css';

class IndexPage extends Component{
	constructor(props){
		super(props);
		this.state={
			elements: [1,2,3,4,5],
			reports: [1,2,3],
			downloadImages: [1,2,3,4,5,6]
		}
	}
	render(){
		return (
			<div className="App">
				<Header />
				<div className="content-body">
					<div className="the-big-first-picture">第一张图片，1160px*196px</div>
					<div className="the-big-second-picture">第二张图片，1160px*196px</div>
					<div className="ten-recommend">
						<div className="top-five-recommend">
							{this.state.elements.map(() => 
								<div className="every-one-recommend">
									<div className="top-word-recommend">推荐</div>
									<div className='top-title-red-word'>好多个群啊</div>
									<div className="middle-title-word">如何加入360官方社群？</div>
									<div className="two-bar">
										<span className="left-bar">qq群</span>
										<span className="right-bar">交流问答</span>
									</div>
								</div>
							)}
						</div>
						<div className="bottom-five-recommend">
							{this.state.elements.map(() => 
									<div className="every-one-recommend">
										<div className="top-word-recommend">推荐</div>
										<div className='top-title-red-word'>好多个群啊</div>
										<div className="middle-title-word">如何加入360官方社群？</div>
										<div className="two-bar">
											<span className="left-bar">qq群</span>
											<span className="right-bar">交流问答</span>
										</div>
									</div>
								)}
						</div>
					</div>
					<div className="latest-updates-and-popular-articles">
						<div className="lastest-update">
							最新更新
						</div>
						{this.state.reports.map(() => 
							<div className="report-element-two">
								<ReportElement />
								<ReportElement />
							</div>	
						)}
					</div>
				</div>
				<div className="download-area">
					{this.state.downloadImages.map(() => 
						<div className="six-images-container">
							{this.state.downloadImages.map((e, index) => 
								<div className="every-six-image" key={index}>标题{e}</div>
							)}
						</div>
					)}
				</div>
				<Footer />
			</div>
		);
	}
  
}

export default IndexPage;

