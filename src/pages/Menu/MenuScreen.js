import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Image,
} from 'react-native';

import LogoImage from '../../assets/images/Reco27.png';
import Colors from '../../assets/ColorConfig/colors';

class MenuScreen extends React.Component {
  render() {
    return (
      <View style={styles.BoxFlex1}>
        <View style={styles.container}>
          <View style={styles.buttonSpace}>
            <View style={styles.BoxFlex2}>
              <TouchableNativeFeedback
                onPress={() => this.props.navigation.navigate('FrenMenu')}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={styles.button6}>
                  <Text style={styles.textoPrincipal}>Français</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
          <Image source={LogoImage} style={styles.img} />

          <View style={styles.BoxFlex2}>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate('Hand')}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.button}>
                <Text style={styles.textoPrincipal}> Hand Challenge </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={styles.BoxFlex2}>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate('Foot')}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.button2}>
                <Text style={styles.textoPrincipal}> Foot Challenge </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={styles.BoxFlex2}>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate('Shoulder')}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.button3}>
                <Text style={styles.textoPrincipal}> Shoulder Challenge </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={styles.buttonSpace2}>
            <View style={{}}>
              <TouchableNativeFeedback
                onPress={() => this.props.navigation.navigate('Guide')}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={styles.button4}>
                  <Text style={styles.textoPrincipal}> Guide </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
            <View style={{}}>
              <TouchableNativeFeedback
                onPress={() => this.props.navigation.navigate('Report')}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={styles.button5}>
                  <Text style={styles.textoPrincipal}>Privacy Policy</Text>
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
  img: {
    marginTop: '0%',
    margin: '3%',
    width: '91%',
    height: '36%',
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
  buttonSpace: {
    marginTop: '0%',
    height: '10%',
    backgroundColor: Colors.secondary,
    width: '100%',
    borderRadius: 14,
    flexDirection: 'row',
  },
  buttonSpace2: {
    marginTop: '0%',
    height: '16%',
    backgroundColor: Colors.primary,
    width: '100%',
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    margin: '3%',
    backgroundColor: Colors.button,
    borderColor: Colors.borderDef,
    borderWidth: 2,
    marginTop: '7%',
    width: '94%',
    height: 44,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  button2: {
    alignItems: 'center',
    margin: '3%',
    backgroundColor: Colors.button,
    borderColor: Colors.borderDef,
    borderWidth: 2,
    marginTop: '11%',
    width: '94%',
    height: 44,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  button3: {
    alignItems: 'center',
    margin: '3%',
    backgroundColor: Colors.button,
    borderColor: Colors.borderDef,
    borderWidth: 2,
    marginTop: '9%',
    width: '94%',
    height: 44,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  button4: {
    width: 105,
    height: 105,
    marginTop: '8%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: Colors.buttonJoystick,
    borderColor: Colors.borderDef,
    borderWidth: 3,
  },
  button5: {
    width: 105,
    height: 105,
    marginTop: '8%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: Colors.buttonJoystick,
    borderColor: Colors.borderDef,
    borderWidth: 3,
  },
  button6: {
    alignItems: 'center',
    margin: '27%',
    marginTop: '1%',
    backgroundColor: Colors.buttonChangeLanguageGame,
    borderColor: Colors.borderDef,
    borderWidth: 1,
    width: '46%',
    height: 39,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  textoPrincipal: {
    fontSize: 15,
    color: Colors.text,
    fontWeight: 'bold',
  },
});

export default MenuScreen;
