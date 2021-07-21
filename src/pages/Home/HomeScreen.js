import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Image,
} from 'react-native';

import LogoImage from '../../assets/images/Reco27.png';
import Colors from '../../assets/ColorConfig/colors';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.BoxFlex1}>
        <View style={styles.container}>
          <Image source={LogoImage} style={styles.img} />

          <View style={styles.buttonSpace}>
            <View style={styles.BoxFlex2}>
              <TouchableNativeFeedback
                onPress={() => this.props.navigation.navigate('Doc')}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={styles.button}>
                  <Text style={styles.textoPrincipal}> English </Text>
                </View>
              </TouchableNativeFeedback>
            </View>

            <View style={styles.BoxFlex3}>
              <TouchableNativeFeedback
                onPress={() => this.props.navigation.navigate('FrenDoc')}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={styles.button2}>
                  <Text style={styles.textoPrincipal}> Français </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

//Style
const styles = StyleSheet.create({
  container: {
    height: '92%',
    backgroundColor: Colors.secondary,
    width: '92%',
    borderRadius: 14,
  },
  BoxFlex1: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'column',
  },
  BoxFlex2: {
    flex: 2,
  },
  BoxFlex3: {
    flex: 3,
  },
  buttonSpace: {
    marginTop: '1%',
    height: '40%',
    backgroundColor: Colors.secondary,
    width: '92%',
  },
  img: {
    marginTop: '20%',
    width: '98%',
    height: '42%',
  },
  button: {
    alignItems: 'center',
    margin: '8%',
    backgroundColor: Colors.button,
    borderColor: Colors.borderDef,
    borderWidth: 2,
    marginTop: '3%',
    width: '93%',
    height: 48,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  button2: {
    alignItems: 'center',
    margin: '8%',
    backgroundColor: Colors.button,
    borderColor: Colors.borderDef,
    borderWidth: 2,
    marginTop: '1%',
    width: '93%',
    height: 48,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  textoPrincipal: {
    fontSize: 15,
    backgroundColor: Colors.button,
    color: Colors.text,
    fontWeight: 'bold',
  },
});
