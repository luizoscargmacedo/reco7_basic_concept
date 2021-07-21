import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
  Image,
} from 'react-native';

import LogoImage from '../../assets/images/Reco27.png';
import Colors from '../../assets/ColorConfig/colors';

class DocScreen extends React.Component {
  render() {
    return (
      <View style={styles.BoxFlex1}>
        <View style={styles.container}>
          <View style={styles.buttonSpace}>
            <View style={styles.BoxFlex2}>
              <TouchableNativeFeedback
                onPress={() => this.props.navigation.navigate('FrenDoc')}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={styles.button6}>
                  <Text style={styles.textoPrincipal}>Français</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
          <Image source={LogoImage} style={styles.img} />
          <ScrollView>
            <Text style={styles.textoBase3}>
              {' '}
              Left/Right Recognition Program
            </Text>
            <Text style={styles.textoBase2}>
              {' '}
              ReCO 7 Experience is a Left/Right Recognition Test. The focus of
              this app is the discrimination of hand and feet’s side between
              right and left. This is the first stage of the GMI (Graded Motor
              Imagery) to treat patients with CRPS (Complex Regional Pain
              Syndrome) or patients with body image pain.{' '}
            </Text>
            <Text style={styles.textoBase2}>
              {' '}
              Train your brain and test your ability to quickly recognise an
              image!{' '}
            </Text>
            <Text style={styles.textoBase1}>
              {' '}
              Developed by Luiz Oscar Guabiraba de Macedo
            </Text>
          </ScrollView>
        </View>
        <View style={styles.BoxFlex2}>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('Menu')}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.button}>
              <Text style={styles.textoPrincipal}> Start </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: '7%',
    height: '85%',
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
  img: {
    marginTop: '4%',
    margin: '6%',
    width: '87%',
    height: '39%',
  },
  buttonSpace: {
    marginTop: '0%',
    height: '10%',
    backgroundColor: Colors.secondary,
    width: '100%',
    borderRadius: 14,
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    margin: '8%',
    backgroundColor: Colors.button,
    borderColor: Colors.borderDef,
    borderWidth: 2,
    marginTop: '2%',
    width: '93%',
    height: 42,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 80,
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
    fontSize: 16,
    color: Colors.text,
    fontWeight: 'bold',
  },
  textoBase1: {
    marginTop: '8%',
    fontSize: 14,
    textAlign: 'center',
    margin: '2%',
    fontWeight: 'bold',
  },
  textoBase2: {
    fontSize: 15,
    textAlign: 'justify',
    margin: '2%',
    marginTop: '1%',
  },
  textoBase3: {
    fontSize: 18,
    textAlign: 'center',
    margin: '2%',
    fontWeight: 'bold',
    marginBottom: '10%',
  },
});

export default DocScreen;
