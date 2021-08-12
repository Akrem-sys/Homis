import React from "react";
import { View, Text, Image } from "react-native";
import { Colors } from "../assets/colors/Colors";
import * as Anim from "react-native-animatable";
export const Signin = () => {
  return (
    <View style={{ flex: 1 }}>
      <Anim.View
        animation="fadeInDownBig"
        style={{
          backgroundColor: Colors.Primarycolor,
          paddingTop: 40,
          borderBottomLeftRadius: 100,
        }}
      >
        <Anim.Image
          animation="bounceIn"
          source={require("../assets/images/Logo.png")}
          style={{
            alignContent: "center",
            alignSelf: "center",
          }}
        />
      </Anim.View>
    </View>
  );
};
