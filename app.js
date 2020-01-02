const MePic = props => {
  return <img id='mePic' alt='me' src='images/me.jpg' />;
};

/*
class Frame0 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      init: true
    };
  }

  render() {
    return (
      <div className='frames'>
        <p className={`framesText ${this.state.init && 'framesTextUpLeft'}`}>Projects</p>
      </div>
    );
  }
}
*/
const Frame0 = props => {
  return (
    <div className={`frames ${props.frameStatus}`} onClick={props.onClick}>
      <p className={`framesText ${props.textStatus}`}>Projects</p>
    </div>
  );
};

const Frame1 = props => {
  return (
    <div className={`frames ${props.frameStatus}`} onClick={props.onClick}>
      <p className={`framesText ${props.textStatus}`}>About me</p>
    </div>
  );
};

const Frame2 = props => {
  return (
    <div className={`frames ${props.frameStatus}`} onClick={props.onClick}>
      <p className={`framesText ${props.textStatus}`}>CV</p>
    </div>
  );
};

const Frame3 = props => {
  return <div className='frames'>Get in Touch</div>;
};

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };

    this.clickControl = this.clickControl.bind(this);
  }

  clickControl(fr) {
    this.setState({
      clicked: fr
    });
  }

  render() {
    if (!this.state.clicked) {
      return (
        <div className='main'>
          <MePic />
          <Frame0 onClick={() => this.clickControl('framesClicked0')} textStatus={'framesTextUpLeft'} />
          <Frame1 onClick={() => this.clickControl('framesClicked1')} textStatus={'framesTextUpRight'} />
          <Frame2 onClick={() => this.clickControl('framesClicked2')} textStatus={'framesTextDownLeft'} />
        </div>
      );
    }

    if (this.state.clicked === 'framesClicked0') {
      return (
        <div className='main'>
          <Frame0 frameStatus={this.state.clicked} textStatus={'framesText0Move'} />
          <div onClick={() => this.clickControl(false)} className='backBtn'>
            Back
          </div>
        </div>
      );
    }

    if (this.state.clicked === 'framesClicked1') {
      return (
        <div className='main'>
          <Frame1 frameStatus={this.state.clicked} textStatus={'framesText0Move'} />
          <div onClick={() => this.clickControl(false)} className='backBtn'>
            Back
          </div>
        </div>
      );
    }

    if (this.state.clicked === 'framesClicked2') {
      return (
        <div className='main'>
          <Frame2 frameStatus={this.state.clicked} textStatus={'framesText1Move'} />
          <div onClick={() => this.clickControl(false)} className='backBtn'>
            Back
          </div>
        </div>
      );
    }
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Container />, domContainer);
