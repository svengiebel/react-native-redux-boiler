import React from 'react-native';
import { Icon } from 'react-native-icons';

import Colors from '../constants/colors';

const {
  StyleSheet,
  Navigator,
  StatusBarIOS,
  Dimensions,
  PropTypes,
  View,
  TouchableOpacity,
  Text,
} = React;

const deviceWidth = Dimensions.get('window').width;

import MainContainer from './MainContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    let Component = route.component;

    return (
      <View>
        <View style={styles.navbar}>
          <TouchableOpacity>
            <View style={styles.navbarLeftButton}>
    
            </View>
          </TouchableOpacity>

          <View style={styles.navbarCenter}>
            <Text style={styles.navbarTitle}>{ route.name }</Text>
          </View>

          <TouchableOpacity>
            <View style={styles.navbarLeftButton}>

            </View>
          </TouchableOpacity>

        </View>
        <Component navigator={navigator} route={route} />
      </View>
    )
  }

  componentDidMount() {
    StatusBarIOS.setStyle(1);
  }

  handleSidebar() {
  }

  render() {
    return (
      <Navigator
        ref='navigator'
        style={styles.navigator}
        configureScene={this.configureScene}
        renderScene={this.renderScene.bind(this)}
        initialRoute={{
          component: MainContainer,
          name: 'MyApp'
        }}
      />
    )
  }
}

let styles = StyleSheet.create({
  navigator: {
    flex: 1
  },
  navbar: {
    height: 70,
    overflow: 'hidden',
    flexDirection: 'row',
    backgroundColor: Colors.navBarBg,
    borderBottomWidth: 1,
    borderBottomColor: Colors.navBarShadow
  },
  navbarTitle: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 25,
    color: 'white',
  },
  navbarCenter: {
    width: deviceWidth - 140,
  },
  menuIcon: {
    flex: 1,
    marginTop: 16,
    marginLeft: -10
  },
  userIcon: {
    flex: 1,
    marginTop: 16,
    marginLeft: 15,
  },
  navbarLeftButton: {
    width: 70,
    height: 69,
  }
})

export default App
