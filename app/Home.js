import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Home = ({ navigation }) => {
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View>
      <ImageBackground
        source={{ uri: "asset:/images/homeback.jpg" }}
        style={styles.background}
      ></ImageBackground>

      <TouchableOpacity style={styles.button} onPress={() => navigateTo("Res")}>
        <Icon name="home" size={25} color="black" alignItems="center" />
        <Text style={styles.buttonText}>Accomodation</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateTo("CampusEvents")}
      >
        <Icon name="calendar" size={25} color="black" />
        <Text style={styles.buttonText}>Campus Events</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigateTo("Res")}>
        <Icon name="wine" size={25} color="black" alignItems="center" />
        <Text style={styles.buttonText}>Local Hotspots</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigateTo("Res")}>
        <Icon name="pizza" size={25} color="black" alignItems="center" />
        <Text style={styles.buttonText}>Matrix Go</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigateTo("Res")}>
        <Icon name="location" size={25} color="black" alignItems="center" />
        <Text style={styles.buttonText}>WITS Map</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    color: "blue",

    resizeMode: "cover",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "white",
    padding: 25,
    margin: 10,
    marginTop: 25,
    marginLeft: 45,
    marginRight: 45,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    marginLeft: 50,
  },
});

export default Home;
