let React = require('react-native')
let {
  StyleSheet,
  View,
  Dimensions,
  Text,
  PropTypes
} = React
import {connect} from 'react-redux/native'

const deviceWidth = Dimensions.get('window').width
import InteractionManager from 'InteractionManager'


class Main extends React.Component {
  constructor (props) {
    super(props)

    this.onActionSelected = this.onActionSelected.bind(this)
  }

  onActionSelected (position) {
    // const { navigator } = this.props
    // InteractionManager.runAfterInteractions(() => {
    //   if (position === 0) {
    //     navigator.push({
    //       component: SearchContainer,
    //       name: 'Search'
    //     })
    //   }
    // })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
})

export default Main
