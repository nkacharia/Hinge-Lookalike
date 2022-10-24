import {View, Text, StyleSheet, Image, ImageBackground} from "react-native";

const Body = () => {
  return <View style={styles.container}>
    <ImageBackground
      source={require("../assets/Profiles/mtl.jpg")}
      style={styles.image}>
      <Text style= {styles.textOne}>MTL</Text>
      <Text style= {styles.textTwo}>2 miles away</Text>
    </ImageBackground>
    <View style={styles.boxtwo}>
      <Text style={{fontWeight: 'bolder'}, {fontSize: 20}}>My hottest take</Text>
      <View style={styles.icon}>
        <Image source={require("../assets/Icons/player_light.png")} style = {styles.player}/>
        <Image source={require("../assets/Icons/audio_waveform_light.png")} style = {styles.waveform}/>
      </View>
    </View>

  </View>
}
export default Body

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  image: {
    marginLeft: 100,
    marginRight: 100,
    borderRadius: 40,
    height: 375,
    width: 300,
  },
  textOne: {
    color: 'white',
    fontWeight: '600',
    fontSize: 32,
    margin: 20,
  },
  textTwo: {
    color: 'white',
    fontSize: 18,
    marginTop: 260,
    marginLeft: 20,
  },

  boxtwo: {
    marginTop: 50,
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 75,
    marginRight: 75,
    borderRadius: 10,
  },
  player: {
    height: 40,
    width: 40,
    marginRight: 20,
  },
  waveform: {
    height: 40,
    width: 200,
  },
  icon: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
