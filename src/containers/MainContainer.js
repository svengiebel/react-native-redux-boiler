import React, { View, Component } from 'react-native'

import {connect} from 'react-redux/native'

import Main from '../components/Main'

class MainContainer extends Component {
  render() {
    return (
      <Main {...this.props} />
    )
  }
}

function mapStateToProps(state) {

  return {

  }
}

export default connect(mapStateToProps)(MainContainer)
