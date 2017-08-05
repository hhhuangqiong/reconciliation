import React, { createElement, Component } from 'react';
import {render} from 'react-dom';
import A from './A';
import B from './B';
import C from './C';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {shape: 1 };
    this.renderShape = this.renderShape.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderList = this.renderList.bind(this);
    this.renderListWithKey = this.renderListWithKey.bind(this);
  }

  renderShape() {
    if(this.state.shape) {
      return (
        <A>
          <C />
        </A>
      )
    } else {
      return (
        <B>
          <C />
        </B>
      )
    }
  }

  renderList() {
    if(this.state.shape) {
      return (
        <div>
          <A />
          <B />
        </div>

      )
    } else {
      return (
        <div>
          <A />
          <C />
          <B />
        </div>
      )
    }
  }

  renderListWithKey() {
    if(this.state.shape) {
      return (
        <div>
          <A key='a'/>
          <B key='b'/>
        </div>

      )
    } else {
      return (
        <div>
          <A key='a'/>
          <C key='c'/>
          <B key='b'/>
        </div>
      )
    }

  }

  handleClick() {
    this.setState({ shape: 0 })
  }


  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>Change Shape</h1>
        {this.renderShape()}
        {/*this.renderList()*/}
        {/*this.renderListWithKey()*/}
      </div>
    );
  }
}

render(<Example/>,document.getElementById('main'));


