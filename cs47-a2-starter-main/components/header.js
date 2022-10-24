import {View, Text, StyleSheet, Image} from "react-native"

const Header = () => {
  return <View style={styles.container}>
    <Image source={require("../assets/Icons/menu_light.png")} style = {styles.icons}/>
    <Text style={{fontWeight: '300'}, {fontSize: 40}}>Ensom</Text>
    <Image source={require("../assets/Icons/sun.png")} style = {styles.icons}/>
  </View>
}
export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingBottom: 20,
  },
  icons: {
    height: 40,
    width: 40,
    marginLeft: 20,
    marginRight: 20,
  },
});
