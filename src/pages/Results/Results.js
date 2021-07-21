import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Image,
} from 'react-native';
import moment from 'moment';
import 'moment/locale/en-gb';

import Colors from '../../assets/ColorConfig/colors';
import PerfImage from '../../assets/images/Reco271perf.png';
import CongratImage from '../../assets/images/congratulations.png';

export default class HomeScreen extends Component {
  render() {
    const {route = {}} = this.props;
    const {results = {}} = route.params;
    const ms = moment.duration(results.time);
    const finalTime =
      Math.floor(ms.asHours()) + moment.utc(results.time).format(':mm:ss');
    let accuracyResult = (results.totalCorrect / results.totalQuestions) * 100;
    let accuracyFinal = accuracyResult.toFixed(0);

    return (
      <View style={styles.BoxFlex1}>
        <View style={styles.container}>
          <Image source={PerfImage} style={styles.img} />
          <Image source={CongratImage} style={styles.img2} />
          <View style={styles.titleResult}>
            <Text style={styles.textoPrincipal1}>
              Type: {results.challenge}
            </Text>
            <Text style={styles.textoPrincipal1}>
              Accuracy: {accuracyFinal}%
            </Text>
            <Text style={styles.textoPrincipal1}>Total Time: {finalTime}</Text>
            <Text style={styles.textoPrincipal1}>
              Date: {results.date.format('MMMM Do YYYY')}
            </Text>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate('Menu')}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.button}>
                <Text style={styles.textoPrincipal}> Return to menu </Text>
              </View>
            </TouchableNativeFeedback>
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
    margin: '5%',
    marginTop: '3%',
    width: '88%',
    height: '27%',
  },
  img2: {
    margin: '5%',
    marginTop: '1%',
    width: '90%',
    height: '32%',
  },
  BoxFlex1: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'column',
  },
  button: {
    alignItems: 'center',
    marginLeft: '11%',
    margin: '9%',
    backgroundColor: Colors.button,
    borderColor: Colors.borderDef,
    borderWidth: 2,
    marginBottom: '5%',
    width: '94%',
    height: 42,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  titleResult: {
    alignItems: 'center',
    margin: '3%',
    marginTop: '3%',
    width: '93%',
    height: 48,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  textoPrincipal: {
    fontSize: 15,
    backgroundColor: Colors.button,
    color: Colors.text,
    fontWeight: 'bold',
  },
  textoPrincipal1: {
    fontSize: 15,
    color: Colors.borderDef,
    fontWeight: 'bold',
  },
});
