import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { FontAwesome5 } from "react-native-vector-icons";
import { Ionicons } from "react-native-vector-icons";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function Header({ page }) {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  return (
    <View
      style={{
        backgroundColor: "white",
        width: width,
        justifyContent: "space-between",
        alignItems: 'center',
        shadowOffset: { height: 120, width: 120 },
        shadowColor: "black",
        flexDirection: "row",
      }}
    >
      <View style={{ justifyContent: "center" }}>
        {page === "Home" ? (
          <Text
            style={{
              fontSize: 27,
              fontWeight: "bold",
              color: "#0E8F61",
              marginTop: 30,
              marginLeft: 20,
              marginBottom: 15,
            }}
          >
            Home
          </Text>
        ) : null}
        {page === "Chat" ? (
          <View style={{ width: width, justifyContent: "center" }}>
            <View
              style={{
                width: width,
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontSize: 27,
                  fontWeight: "bold",
                  color: "#0E8F61",
                  marginTop: 30,
                  marginLeft: 20,
                  marginBottom: 15,
                }}
              >
                Chats
              </Text>
              {show ? (
                <TextInput
                  placeholder="Search Here ..."
                  style={{
                    height: 40,
                    width: 250,
                    fontSize: 17,
                    fontWeight: "800",
                    borderBottomWidth: 2,
                    borderBottomColor: '#0E8F61',
                    margin: 15,
                    padding: 7,
                  }}
                />
              ) : (
                <FontAwesome5
                  name="search"
                  size={24}
                  color="#0E8F61"
                  style={{
                    marginTop: 30,
                    marginRight: 20,
                    marginBottom: 15,
                  }}
                  onPress={() => {
                    setShow(true);
                  }}
                />
              )}
            </View>
          </View>
        ) : null}
        {page === "Notification" ? (
          <Text
            style={{
              fontSize: 27,
              fontWeight: "bold",
              color: "#0E8F61",
              marginTop: 30,
              marginLeft: 20,
              marginBottom: 15,
            }}
          >
            Notification
          </Text>
        ) : null}
        {page === "Setting" ? (
          <Text
            style={{
              fontSize: 27,
              fontWeight: "bold",
              color: "#0E8F61",
              marginTop: 30,
              marginLeft: 20,
              marginBottom: 15,
            }}
          >
            Settings
          </Text>
        ) : null}
        {page === "Profile" ? (
          <Text
            style={{
              fontSize: 27,
              fontWeight: "bold",
              color: "#0E8F61",
              marginTop: 30,
              marginLeft: 20,
              marginBottom: 15,
            }}
          >
            My Profile
          </Text>
        ) : null}

        {page === "ChangeDetails" ? (
          <Text
            style={{
              fontSize: 27,
              fontWeight: "bold",
              color: "#0E8F61",
              marginTop: 30,
              marginLeft: 20,
              marginBottom: 15,
            }}
          >
            Change Details
          </Text>
        ) : null}

      </View>
      {page === "Home" ? (
        <Pressable
          style={{
            marginTop: 30,
            marginRight: 15,
            marginBottom: 15,
            // alignItems: "center",
          }}
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <FontAwesome5 name="user-circle" color="#0E8F61" size={25} />
        </Pressable>
      ) : null}
      {page === "Profile" ? (
        <Pressable
          style={{
            marginTop: 30,
            marginRight: 15,
            marginBottom: 15,
            // alignItems: "center",
          }}
          onPress={() => {
            navigation.navigate("Setting");
          }}
        >
          <Ionicons name="settings-sharp" color="#0E8F61" size={30} />
        </Pressable>
      ) : null}

    </View>
  );
}

const styles = StyleSheet.create({});
