import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  ListView,
  FlatList
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const gridData = [
  { index: 1, name: "My Info", uri: require("../images/info.png") },
  { index: 2, name: "Payment", uri: require("../images/payment.png") },
  { index: 3, name: "Transfer", uri: require("../images/transfer.png") },
  { index: 4, name: "Credit", uri: require("../images/credit.png") },
  { index: 5, name: "Buy Online", uri: require("../images/buy.png") },
  { index: 6, name: "Bills", uri: require("../images/bills.png") },
  { index: 7, name: "Reports", uri: require("../images/report.png") },
  { index: 8, name: "Save Money", uri: require("../images/savemoney.png") },
  { index: 9, name: "Branches", uri: require("../images/branches.png") }
];
const footer = [
  { name: "Dashboard", icon: "widgets" },
  { name: "Search", icon: "search" },
  { name: "Email", icon: "mail-outline" },
  { name: "Help", icon: "error-outline" }
];
const Main = () => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.header]}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10
          }}
        >
          <View style={[styles.smartBank]}>
            <Image source={require("../images/SmartBank.png")} />
          </View>
          <View style={[styles.notification]}>
            <Icon name="bell" style={styles.iconHeader} />
          </View>
        </View>
        <View style={styles.banner}>
          <Image source={require("../images/banner.png")} />
        </View>
      </View>
      <View style={[styles.content]}>
        <FlatList
          data={gridData}
          numColumns={3}
          renderItem={({ key, item }) => {
            return (
              <View
                style={[
                  styles.itemList,
                  { marginRight: { key } % 3 == 0 ? 0 : 10 }
                ]}
              >
                <Image
                  style={{ height: 30, width: 30 }}
                  source={item.uri}
                  resizeMode="contain"
                />
                <Text style={{ fontSize: 12, color: "#1A75EB", marginTop: 5 }}>
                  {item.name}
                </Text>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.footer}>
        <FlatList
          data={footer}
          numColumns={4}
          renderItem={({ key, item }) => {
            return (
              <View style={[styles.footerItem]}>
                <MaterialIcons name={item.icon} style={{ fontSize: 25 }} />
                <Text style={{ fontSize: 12 }} note>
                  {item.name}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
    width,
    flex: 1,
    backgroundColor:'white'
  },
  header: {
    position: "relative",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    elevation: 1.2
  },
  smartBank: { paddingLeft: 14 },
  iconHeader: { fontSize: 30, paddingRight: 14 },
  banner: { alignItems: "center", paddingBottom: 10 },
  content: {
    flex: 1,
    padding: 10
  },
  itemList: {
    width: (width - 40) / 3,
    borderWidth: 1,
    marginBottom: 10,
    padding: 15,
    alignItems: "center",
    borderColor: "#ddd",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOpacity: 0.7,
    borderBottomWidth: 0,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1
  },
  footer: {
    borderTopWidth: 1,
    padding: 5,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: { width: 1, height: 2 },
  },
  footerItem: {
    width: (width - 12) / 4,
    alignItems: "center"
  }
});

export default Main;
