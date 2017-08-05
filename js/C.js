import React, {Component,PureComponent} from 'react';

class C extends Component {
  constructor(props) {
    super(props)
    console.log('C is created')
  }
  componentDidMount() {
    console.log('C componentDidMount')
  }
  componentWillUnmount() {
    console.log('C componentWillUnmount')
  }
  componentDidUpdate() {
     console.log('C componentDidUpdate')
  }

  render () {
    console.log('C render')
    return (
      <div>
        C 
        {this.props.children} 
      </div>
    )
  }
}

export default C;