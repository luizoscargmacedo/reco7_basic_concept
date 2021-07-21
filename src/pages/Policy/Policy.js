import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';

import Colors from '../../assets/ColorConfig/colors';

class DocScreen extends React.Component {
  render() {
    return (
      <View style={styles.BoxFlex1}>
        <View style={styles.container}>
          <View style={styles.buttonSpace}>
            <View style={styles.BoxFlex2}>
              <TouchableNativeFeedback
                onPress={() => this.props.navigation.navigate('FrenReport')}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={styles.button6}>
                  <Text style={styles.textoPrincipal2}>Français</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
          <Text style={styles.textoBase1}> RECO7 PRIVACY POLICY</Text>
          <ScrollView>
            <Text style={styles.textoBase2}>
              {' '}
              This privacy policy governs your use of the software application
              RECO7 for mobile devices that was created by Luiz Oscar Guabiraba
              de Macedo. The Application is a Left/Right Recognition Test. The
              focus of this app is the discrimination of hand and feet’s side
              between right and left. This is the first stage of the GMI (Graded
              Motor Imagery) to treat patients with CRPS (Complex Regional Pain
              Syndrome) or patients with body image pain. This app has three
              levels of difficulty, that will randomly increase the images. The
              aim of this exercise is to improve the brain’s capacity to
              recognise the affect body extremity.{' '}
            </Text>
            <Text style={styles.textoBase2}>
              {' '}
              RECO7 does not collect any of your Personal Info.{' '}
            </Text>
            <Text style={styles.textoBase3}>Security</Text>
            <Text style={styles.textoBase2}>
              {' '}
              RECO7 does not collect any of your Personal Info. We don’t collect
              your geo-location or associate geo-location information with a
              particular user.{' '}
            </Text>
            <Text style={styles.textoBase2}>
              {' '}
              This Application does not collect information about the location
              of your mobile device. {' '}
            </Text>
            <Text style={styles.textoBase3}>Contact us</Text>
            <Text style={styles.textoBase2}>
              {' '}
              If you have any questions regarding privacy while using the
              Application, or have questions about our practices, please contact
              us via email at reco7app@protonmail.com{' '}
            </Text>
          </ScrollView>
        </View>
        <View style={styles.BoxFlex2}>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('Menu')}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.button}>
              <Text style={styles.textoPrincipal}> Return to menu </Text>
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
    marginTop: '3%',
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
  textoPrincipal2: {
    fontSize: 13,
    color: Colors.text,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  textoBase1: {
    marginTop: '8%',
    fontSize: 19,
    textAlign: 'center',
    margin: '2%',
    fontWeight: 'bold',
    color: Colors.buttonChangeGame3,
  },
  textoBase2: {
    fontSize: 12,
    textAlign: 'justify',
    margin: '2%',
    marginTop: '1%',
  },
  textoBase3: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: '4%',
    fontWeight: 'bold',
    marginBottom: '1%',
  },
});

export default DocScreen;
