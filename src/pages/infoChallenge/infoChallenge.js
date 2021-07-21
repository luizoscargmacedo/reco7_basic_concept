import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Image,
} from 'react-native';

import ChallengeImage1 from '../../assets/images/ChallengeImage1.png';
import Colors from '../../assets/ColorConfig/colors';

class DocScreen extends React.Component {
  render() {
    return (
      <View style={styles.BoxFlex1}>
        <View style={styles.container}>
          <Image source={ChallengeImage1} style={styles.img} />
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
  img: {
    marginTop: '3%',
    margin: '3%',
    width: '94%',
    height: '42%',
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
  button: {
    alignItems: 'center',
    margin: '8%',
    backgroundColor: Colors.button,
    borderColor: Colors.borderDef,
    borderWidth: 2,
    marginTop: '3%',
    width: '93%',
    height: 42,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 80,
  },
  textoPrincipal: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: 'bold',
  },
});

export default DocScreen;
