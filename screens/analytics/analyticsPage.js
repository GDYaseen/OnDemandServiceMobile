import { StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated,ScrollView} from 'react-native';
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

import {commonStyles,palette,screenHeightPx,windowHeightPx,windowWidthPx} from '../config';
import Sidebar from '../components/Sidebar';
import SvgMaker from '../components/SvgMaker'

import { LineChart } from 'react-native-chart-kit';

export default function AnalyticsPage({navigation}){
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, visible: false, value: 0 ,color:'white'});
    const [tooltipPos2, setTooltip2Pos] = useState({ x: 0, y: 0, visible: false, value: 0 ,color:'white'});

    return(
        <ScrollView contentContainerStyle={{flexGrow:1,
        paddingBottom:50}}>
            <TouchableOpacity style={styles.sidebarButton} onPress={() => setSidebarOpen(!sidebarOpen)}>
                    <SvgMaker source='barsSolid' fill={palette.dark} width={30} height={30}/>
            </TouchableOpacity>
            <View style={styles.topContainer}>
                <View style={styles.row}>
                    <View style={styles.row.element}>
                        <Text style={styles.row.element.title}>Earnings in {new Date().toLocaleString('default', { month: 'long' })}</Text>
                        <Text style={styles.row.element.value}>1150 DH</Text>
                    </View>
                    <View style={styles.row.element}>
                        <Text style={styles.row.element.title}>Earnings This week</Text>
                        <Text style={styles.row.element.value}>150 DH</Text>
                    </View>
                </View>
                
                <View style={styles.row}>
                    <View style={styles.row.element}>
                        <Text style={styles.row.element.title}>Orders in {new Date().toLocaleString('default', { month: 'long' })}</Text>
                        <Text style={styles.row.element.value}>11 <Text style={{fontFamily:'Montserrat-Regular',color:'#ff8888'}}>(0 Canceled)</Text></Text>
                    </View>
                    <View style={styles.row.element}>
                        <Text style={styles.row.element.title}>Orders This week</Text>
                        <Text style={styles.row.element.value}>1 <Text style={{fontFamily:'Montserrat-Regular',color:'#ff8888'}}>(0 Canceled)</Text></Text>
                    </View>
                </View>
                
                <View style={styles.row}>
                    <View style={styles.row.element}>
                        <Text style={styles.row.element.title}>Current Balance</Text>
                        <Text style={[styles.row.element.value,{color:'lightgreen'}]}>2114 DH</Text>
                    </View>
                    {/* <View style={styles.row.element}> */}
                        {/* <Text style={styles.row.element.title}>Available to withdraw</Text> */}
                        {/* <Text style={styles.row.element.value}>1045 DH</Text> */}
                    {/* </View> */}
                </View>
            </View>
                {/* <TouchableOpacity style={styles.withdraw}> */}
                    {/* <Text style={{color:'white',fontSize:20,fontFamily:'Raleway-Regular'}}>Withdraw</Text></TouchableOpacity> */}
            
            
            <View style={[styles.sectionBar,{justifyContent:'space-between'}]}>
                    <Text style={styles.sectionBar.title}>Orders</Text>
                    <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>{}}>
                    <Text style={{color:palette.primary,fontFamily:'Raleway-Regular'}}>This week</Text></TouchableOpacity>
            </View>
            <View style={{width:windowWidthPx*0.9,alignSelf:'center',marginTop:20}}>
            {/* <TouchableOpacity activeOpacity={1} onPress={handlePress}> */}
                <LineChart onDataPointClick={({x,y,value, dataset, getColor}) => setTooltipPos({x: x,y: y,visible: true,value: value,color:getColor()})
            } fromZero verticalLabelRotation={10} AxisInterval={1} data={ordersData} width={windowWidthPx*0.9}
                     height={200} chartConfig={ordersChartConfig}/>
            {/* </TouchableOpacity> */}
            {tooltipPos.visible && (
        <View style={{position: 'absolute',left: tooltipPos.x - 15, top: tooltipPos.y - 30,  
          backgroundColor: 'white', paddingLeft: 4,paddingRight:4,
          borderRadius: 10,borderColor:tooltipPos.color,borderWidth:1
        }}>
          <Text style={{color:tooltipPos.color}}>{tooltipPos.value}</Text>
        </View>)}
            </View>
                <View style={[styles.sectionBar,{justifyContent:'space-between'}]}>
                    <Text style={styles.sectionBar.title}>Earnings</Text>
                    <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>{}}>
                    <Text style={{color:palette.primary,fontFamily:'Raleway-Regular'}}>Past 6 months</Text></TouchableOpacity>
                </View>        
            <View style={{width:windowWidthPx*0.9,alignSelf:'center',marginTop:20}}>
                <LineChart onDataPointClick={({x,y,value, dataset, getColor}) => setTooltip2Pos({x: x,y: y,visible: true,value: value,color:getColor()})}
                 data={earningsData} width={windowWidthPx*0.9} 
                    withDots={true} height={220} chartConfig={earningsChartConfig}/>
                {tooltipPos2.visible && (
        <View style={{position: 'absolute', left: tooltipPos2.x - 15,top: tooltipPos2.y - 30,
          backgroundColor: 'white',paddingLeft: 4,paddingRight:4,
          borderRadius: 10,borderColor:tooltipPos2.color,borderWidth:1
        }}>
          <Text style={{color:tooltipPos2.color}}>{tooltipPos.value}</Text>
        </View>)}
            </View>


            <Sidebar selectedPage={"Analytics"} isOpen={sidebarOpen} turnOffSidebar={setSidebarOpen}/>
            <StatusBar hidden={true}/>
            
        </ScrollView>
    )
}
const earningsData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 400, 43],
        color: (opacity = 1) => '#009843', // optional
        strokeWidth: 2 // optional
      }
    ],
    // legend: ["Earnings"] // optional
  };
const ordersData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
    datasets: [
      {
        data: [2, 1, 2, 1, 3, 400,1],
        color: (opacity = 1) => '#f92672', // optional
        strokeWidth: 2 // optional
      }
    ],
    // legend: ["Orders"] // optional
  };
  const earningsChartConfig = {
    backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => "gray",//`rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};
const ordersChartConfig = {
    backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => "gray",//`rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.15,
  useShadowColorFromDataset: false, // optional
  decimalPlaces: 0,
};
const styles = StyleSheet.create({
    sectionBar:{
        width:windowWidthPx,
        alignSelf:'flex-start',
        paddingTop:10,
        paddingLeft:10,
        paddingRight:10,
        flexDirection:'row',
        paddingBottom:5,
        title:{
            color:palette.dark,
            alignSelf:'center',
            marginLeft:5,
            fontSize:17,
            fontFamily:'Montserrat-SemiBold'
        }
    },
    row:{
        flexDirection:'row',
        element:{
            margin:10,
            width:'45%',
            title:{
                color:'white',
                fontFamily:'Raleway-Regular'
            },
            value:{
                color:'white',
                fontFamily:'Montserrat-SemiBold',
                fontSize:18
            }
        },
    },
    topContainer:{
        backgroundColor:palette.dark,
        marginTop:50,
        width:windowWidthPx*0.9,
        alignSelf:'center',
        borderRadius:10,
    },
        sidebarButton:{
            position:'absolute',
            top:0,
            left:0,
            justifyContent:'center',
            alignItems:'center',
            width:50,
            height:50,
            marginLeft:10,
            marginRight:10
        },
    
})