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
          <View style={styles.buttonSpace} />
          <Image source={LogoImage} style={styles.img} />

          <View style={styles.BoxFlex2}>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate('itWorks')}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.button}>
                <Text style={styles.textoPrincipal}> How it works </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={styles.BoxFlex3}>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate('infoChallenge')}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.button2}>
                <Text style={styles.textoPrincipal}>
                  {' '}
                  Challenge Information{' '}
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={styles.buttonSpace2}>
            <View style={{}}>
              <TouchableNativeFeedback
                onPress={() => this.props.navigation.navigate('Menu')}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={styles.button4}>
                  <Text style={styles.textoPrincipal2}> Return to menu </Text>
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
    margin: '6%',
    width: '88%',
    height: '37%',
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
  BoxFlex4: {
    flex: 4,
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
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    margin: '3%',
    backgroundColor: Colors.button,
    borderColor: Colors.borderDef,
    borderWidth: 2,
    marginTop: '12%',
    width: '94%',
    height: 49,
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
    marginTop: '12%',
    width: '94%',
    height: 49,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  button4: {
    alignItems: 'center',
    backgroundColor: Colors.buttonJoystick,
    borderColor: Colors.borderDef,
    borderWidth: 2,
    marginTop: '16%',
    width: '100%',
    height: 49,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  textoPrincipal: {
    fontSize: 17,
    color: Colors.text,
    fontWeight: 'bold',
  },
  textoPrincipal2: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
});

export default MenuScreen;
