import React, {Component} from 'react';
import './footer.css';

class Footer extends Component{
  constructor(props){
    super(props);
    this.state={

    };
  }
  render(){
    return (
      <div className="footer">
        <p className="copy-right">本网站属于合肥星闪亿电子商务有限公司所有，应用作品版权归原作者享有，如无意之中侵犯了您的版 权，请您按照</p>
      </div>
    );
  }
}

export default Footer;
