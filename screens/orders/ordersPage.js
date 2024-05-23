import { View, ScrollView, StyleSheet, TouchableOpacity ,Text} from "react-native";
import React, { useState, useEffect, useRef, useCallback, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { callApi, palette, screenHeightPx, windowHeightPx, windowWidthPx } from "../config";
import Order from "./order";
import SvgMaker from "../components/SvgMaker";
import Sidebar from "../components/Sidebar";
import Contexter from "../contexter";
import OrderPopup from "./orderPopup";
import Loading from "../components/loading";

export default function OrdersPage({ navigation }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const [orderStatusType,setOrderStatusType] = useState("completed")

    const context = useContext(Contexter)
    
    const handleOrderPress = (d) => {
        context.bottomPopup.setBottomBarOpen(true);
          context.bottomPopup.setBottomBarContent({
            height: 200,
            components: <OrderPopup order={d}/>,
          });
        
      };

      useEffect(() => {
        async function getOrders(){
            try {
                const response = await callApi(`/${context.userType}/orders`,"get",{},{Authorization: `Bearer ${context.token}`})
                if(response.status==200) {
                    setOrders(response.data.orders)
                }else{
                    alert("No results found maybe")
                    console.log(response.data)
                }
              } 
              catch (error) {
                console.log('Failed to fetch data',error);
            }
        }
        getOrders()
      }, []);
  return orders?.length!=0?(
    <View style={{height:screenHeightPx}}>
      <TouchableOpacity style={styles.sidebarButton} onPress={() => setSidebarOpen(!sidebarOpen)}>
        <SvgMaker source="barsSolid" fill={palette.dark} width={30} height={30}/>
      </TouchableOpacity>
      <View style={styles.orderStatusTypeContainer}>
            <TouchableOpacity style={[styles.orderStatusTypeContainer.type,{backgroundColor:orderStatusType=="completed"?palette.primary:'transparent'}]} 
                  onPress={() => setOrderStatusType("completed")} >
              <Text style={{fontFamily:'Montserrat-Regular',color:orderStatusType=="completed"?'white':palette.primary}}>Completed</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.orderStatusTypeContainer.type,{backgroundColor:orderStatusType=="canceled"?palette.primary:'transparent'}]} 
                  onPress={() => setOrderStatusType("canceled")} >
              <Text style={{fontFamily:'Montserrat-Regular',color:orderStatusType=="canceled"?'white':palette.primary}}>Canceled</Text>
            </TouchableOpacity>
                      </View>
      <ScrollView
        style={{ height: windowHeightPx - 100 }}
        contentContainerStyle={{flexGrow: 1,paddingBottom: 100,alignItems: "center",
        }}
      >
        {orders.filter((o)=>o.status==orderStatusType).map((d) => {
          return <Order handleOrderPress={()=>handleOrderPress(d)} key={d.key} gig={d}></Order>;
        })}
      </ScrollView>
      <Sidebar selectedPage={"Orders"} isOpen={sidebarOpen} turnOffSidebar={setSidebarOpen}/>
      <StatusBar hidden={true}/>

    </View>
  ):(<Loading.LoadingSpinner></Loading.LoadingSpinner>)
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
  }
];

const styles = StyleSheet.create({
  sidebarButton: {
    justifyContent: "center",
    borderBottomColor:palette.dark,
    borderBottomWidth:1,
    height: 50,
    paddingLeft: 10,
  },
  orderStatusTypeContainer:{
    flexDirection:'row',
    alignItems:'space-between',
    width:windowWidthPx,
    type:{
        height:30,
        padding:5,
        borderWidth:1,
        borderRadius:15,
        borderColor:palette.primary,
        width:100,
        alignItems:'center',
        margin:10
    }
  }
});
