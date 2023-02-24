import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { FontAwesome } from "react-native-vector-icons";
import { AntDesign } from "react-native-vector-icons";
import AllApi from "../Api/AllApi";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function NameCard({ name, id, date }) {
  const navigation = useNavigation();

  const [isliked, setIsliked] = useState(false);
  return (
    <View
      style={{
        height: 1 / 2.2 * height,
        width: width - 10,
        alignItems: "center",
        borderColor: "black",
        borderWidth: 2,
        marginTop: 5,
        marginBottom: 5,
      }}
    >
      <View style={{ width: width - 10, alignItems: 'center', flexDirection: 'row' }}>
        <FontAwesome name="user-circle" size={30} color="#0E8F61" style={{ marginTop: 8, marginLeft: 8 }} />
        <View>
          <Text style={{ fontSize: 15, fontWeight: '800', marginTop: 8, marginLeft: 8, color: '#0E8F61' }}>
            {name}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome name="globe" size={15} color="#575757" style={{ marginLeft: 8 }} />
            <Text style={{ fontSize: 12, fontWeight: '800', marginLeft: 5 ,color:'#575757'}}>
              Send At {date}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: 1 / 3.3 * height,
          width: width - 20,
          alignItems: "center",
          justifyContent: "center",
          borderColor: "black",
          borderWidth: 2,
          margin: 15,
        }}
      >
        <Image
          source={require("../../assets/ALL_iMAGE/AVIDA_SHOP2.jpg")}
          style={{ height: 1 / 3.5 * height, width: width - 35 }}
        />
      </View>
      <View
        style={{ width: width - 10, justifyContent: "center", }}
      >
        {isliked ? (
          <AntDesign
            name="heart"
            size={25}
            color="#D2042D"
            style={{ justifyContent: "center", marginLeft: 15 }}
            onPress={() => {
              setIsliked(false);
            }}
          />
        ) : (
          <AntDesign
            name="hearto"
            size={25}
            color="#D2042D"
            style={{ justifyContent: "center", marginLeft: 15 }}
            onPress={() => {
              setIsliked(true);
            }}
          />
        )}
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({});
