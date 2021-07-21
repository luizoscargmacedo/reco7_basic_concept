import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import moment from 'moment';
import 'moment/locale/en-gb';
import {ProgressBar} from '@react-native-community/progress-bar-android';

import ChallengeImages from '../../assets/images/challengeHand';
import Colors from '../../assets/ColorConfig/colors';

class MenuScreen extends React.Component {
  state = {position: 0.0};

  constructor(props) {
    super(props);
    let imageList = ChallengeImages;
    const currentDate = moment();
    let results = {
      accuracy: 0,
      time: currentDate,
      challenge: 'Hand Challenge',
      date: currentDate,
      totalCorrect: 0,
      totalQuestions: 3333, // game rule (confidential)
    };
    imageList = imageList.sort(() => Math.random() - 0.5);
    this.state = {imageList, results, imageIndex: 0, position: 0.0};
  }

  onPressAnyButton = side => {
    const {imageList, results, imageIndex} = this.state;
    let newResults = results;
    if (side === imageList[imageIndex]// game rule (confidential)
      ) {
      newResults.totalCorrect += 1;
    }
    this.setState(state => {
      if (imageIndex < imageList.exercise - 1) {
        return {
          ...state,
          imageIndex: state.imageIndex + 1,
          results: newResults,
          position: state.position + 0.038,
        };
      }
      return state;
    });
    if (imageIndex === imageList.exercise - 1) {
      const endTime = moment();
      newResults.time = endTime.diff(newResults.time);
      this.props.navigation.navigate('Results', {results: newResults});
    }
  };

  render() {
    const {imageList, imageIndex} = this.state;
    const position = this.state.position;

    return (
      <View style={styles.BoxFlex1}>
        <View style={styles.container}>
          <View style={styles.progressGame}>
            <ProgressBar
              styleAttr="Horizontal"
              indeterminate={false}
              progress={position}
            />
          </View>
          <View style={styles.buttonSpace}>
            <View style={{}}>
              <Pressable onPress={() => this.props.navigation.navigate('Menu')}>
                <View style={styles.button6}>
                  <Text style={styles.textoPrincipal2}>Return to menu</Text>
                </View>
              </Pressable>
            </View>
          </View>
          <Image source={imageList[imageIndex].image} style={styles.img} />
          <View style={styles.buttonSpace2}>
            <View style={{}}>
              <Pressable onPress={() => this.onPressAnyButton(true)}>
                <View style={styles.button4}>
                  <Text style={styles.textoPrincipal1}> Left </Text>
                </View>
              </Pressable>
            </View>
            <View style={{}}>
              <Pressable onPress={() => this.onPressAnyButton(false)}>
                <View style={styles.button5}>
                  <Text style={styles.textoPrincipal2}> Right </Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '92%',
    backgroundColor: Colors.borderDef,
    width: '92%',
    borderRadius: 14,
  },
  img: {
    marginTop: '2%',
    width: '100%',
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
  buttonSpace2: {
    marginTop: '44%',
    height: '25%',
    backgroundColor: Colors.primary,
    width: '100%',
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressGame: {
    color: Colors.progressColor,
    marginVertical: 5,
    margin: '7%',
  },
  button4: {
    width: 93,
    height: 93,
    marginTop: '8%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: Colors.button22,
    borderColor: 'black',
    borderWidth: 3,
  },
  button5: {
    width: 93,
    height: 93,
    marginTop: '8%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: Colors.button22,
    borderColor: 'black',
    borderWidth: 3,
  },
  button6: {
    alignItems: 'center',
    margin: '12%',
    marginTop: '4%',
    backgroundColor: Colors.buttonChangeLanguageGame,
    borderColor: Colors.borderDef,
    borderWidth: 1,
    width: '76%',
    height: 38,
    borderRadius: 9,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  textoPrincipal1: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  textoPrincipal2: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
  },
});

export default MenuScreen;
