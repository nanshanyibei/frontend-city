import React, {Component} from 'react';
import './reportelement.css';

class ReportElement extends Component{
  constructor(props){
		super(props);
		this.state={
			elements: [1,2,3,4,5]
		}
	}
	render(){
		return (
			<div className="every-block-report">
				<div className="title-name">
					羊毛线报
				</div>
				{this.state.elements.map(() => 
					<div className="report-body-element">
						<span className="report-body-content">恐龙世空法师结婚发惊世毒妃发射机繁花似锦阿轲发哈舒服界怎么赚钱？恐龙有钱模式不锁。。</span>
						<span className="report-body-time">03-02</span>
					</div>
				)}
			</div>
		)
	}
}

export default ReportElement
