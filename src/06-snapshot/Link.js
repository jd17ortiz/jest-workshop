import React from 'react';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

export default class Link extends React.Component {
  constructor() {
    super();

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this._onClick = this._onClick.bind(this);

    this.state = {
      class: STATUS.NORMAL,
      msg: null
    };
  }

  _onMouseEnter() {
    this.setState({class: STATUS.HOVERED});
  }

  _onMouseLeave() {
    this.setState({class: STATUS.NORMAL});
  }

  _onClick(){
    this.setState({
      msg: 'already click'
    });
  }

  render() {
    let msg = this.state.msg? (<span>{this.state.msg}</span>): null;
    return (
      <div>
        <a
          className={this.state.class}
          href={this.props.page || '#'}
          onMouseEnter={this._onMouseEnter}
          onMouseLeave={this._onMouseLeave}
          onClick={this._onClick}
        >
        {this.props.children}
        </a>
        {msg}
      </div>
  );
  }
}