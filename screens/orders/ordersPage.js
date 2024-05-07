import { View, ScrollView, StyleSheet, TouchableOpacity ,Text} from "react-native";
import React, { useState, useEffect, useRef, useCallback, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { palette, screenHeightPx, windowHeightPx, windowWidthPx } from "../config";
import Order from "./order";
import SvgMaker from "../components/SvgMaker";
import Sidebar from "../components/Sidebar";
import Contexter from "../contexter";
import OrderPopup from "./orderPopup";

export default function OrdersPage({ navigation }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const context = useContext(Contexter)
    
    const handleOrderPress = (day) => {
        context.bottomPopup.setBottomBarOpen(true);
          context.bottomPopup.setBottomBarContent({
            height: 200,
            components: <OrderPopup order={data[0]}/>,
          });
        
      };
  return (
    <View style={{height:screenHeightPx}}>
      <TouchableOpacity style={styles.sidebarButton} onPress={() => setSidebarOpen(!sidebarOpen)}>
        <SvgMaker source="barsSolid" fill={palette.dark} width={30} height={30}/>
      </TouchableOpacity>
      <ScrollView
        style={{ height: windowHeightPx - 100 }}
        contentContainerStyle={{flexGrow: 1,paddingBottom: 100,alignItems: "center",
        }}
      >
        {data.map((d) => {
          return <Order handleOrderPress={handleOrderPress} key={d.key} gig={d}></Order>;
        })}
      </ScrollView>
      <Sidebar selectedPage={"Orders"} isOpen={sidebarOpen} turnOffSidebar={setSidebarOpen}/>
      <StatusBar hidden={true}/>

    </View>
  );
}
let data = [
  {
    key: 0,
    category: "Electricien",
    title: "#11abff",
    price: 200,
    image: null,
    status: "Published",
  },
  {
    key: 1,
    category: "Lavage",
    title: "#4f3021",
    price: 200,
    image: null,
    status: "Inactif",
  },
  {
    key: 2,
    category: "Mechanicien",
    title: "#de6c1f",
    price: 200,
    image: null,
    status: "Published",
  },
  {
    key: 10,
    category: "Electricien",
    title: "#11abff",
    price: 200,
    image: null,
    status: "Inactif",
  },
  {
    key: 11,
    category: "Lavage",
    title: "#4f3021",
    price: 200,
    image: null,
    status: "Inactif",
  },
  {
    key: 12,
    category: "Mechanicien",
    title: "#de6c1f",
    price: 200,
    image: null,
    status: "Published",
  },
  {
    key: 20,
    category: "Electricien",
    title: "#11abff",
    price: 200,
    image: null,
    status: "Inactif",
  },
  {
    key: 21,
    category: "Lavage",
    title: "#4f3021",
    price: 200,
    image: null,
    status: "Published",
  },
  {
    key: 22,
    category: "Mechanicien",
    title: "#de6c1f",
    price: 200,
    image: null,
    status: "Inactif",
  },
  {
    key: 30,
    category: "Electricien",
    title: "#11abff",
    price: 200,
    image: null,
    status: "Inactif",
  },
  {
    key: 31,
    category: "Lavage",
    title: "#4f3021",
    price: 200,
    image: null,
    status: "Inactif",
  },
  {
    key: 32,
    category: "Mechanicien",
    title: "#de6c1f",
    price: 200,
    image: null,
    status: "Published",
  },
  {
    key: 33,
    category: "Mechanicien",
    title: "#1e6c1f",
    price: 200,
    image: null,
    status: "Inactif",
  },
  {
    key: 42,
    category: "Mechanicien",
    title: "#444444",
    price: 200,
    image: null,
    status: "Inactif",
  },
  {
    key: 43,
    category: "Mechanicien",
    title: "#1e2c1f",
    price: 200,
    image: null,
    status: "Published",
  },
];

const styles = StyleSheet.create({
  sidebarButton: {
    justifyContent: "center",
    borderBottomColor:palette.dark,
    borderBottomWidth:1,
    height: 50,
    paddingLeft: 10,
  },
});
