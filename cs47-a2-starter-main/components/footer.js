import {View, Text, StyleSheet, Image} from "react-native"

const Footer = () => {
  return <View style={styles.container}>
    <View>
      <Image source={require("../assets/Icons/discover_light.png")} style = {styles.icons}/>
      <Text style={styles.text}> Discovery </Text>
    </View>

    <View>
      <Image source={require("../assets/Icons/heart_light.png")} style = {styles.icons}/>
      <Text style={styles.text}> Matches </Text>
    </View>
    <View>
      <Image source={require("../assets/Icons/messages_light.png")} style = {styles.icons}/>
      <Text style={styles.text}> DMs </Text>
    </View>
  </View>
}
export default Footer

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 40,
    paddingTop: 20,
    paddingRight: 50,
    paddingLeft: 50,
  },
  icons: {
    height: 40,
    width: 40,
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 4,
    color: 'white',
  }
});
