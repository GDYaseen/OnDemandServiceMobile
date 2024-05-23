import { StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated,ScrollView} from 'react-native';
import React, {useState,useEffect, useContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import Modal from 'react-native-modal';

import {callApi, commonStyles,palette,screenHeightPx,windowHeightPx,windowWidthPx} from '../config';
import Sidebar from '../components/Sidebar';
import SvgMaker from '../components/SvgMaker'

import { LineChart } from 'react-native-chart-kit';
import Contexter from '../contexter';

export default function AnalyticsPage({navigation}){
    const context = useContext(Contexter)
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, visible: false, value: 0 ,color:'white'});
    const [tooltipPos2, setTooltip2Pos] = useState({ x: 0, y: 0, visible: false, value: 0 ,color:'white'});
    
    const [ordersAnalytics,setOrdersAnalytics] = useState({week:[],week_canceled:[],monthly:[],monthly_canceled:[],past_six_months:[],past_six_months_canceled:[]})
    const [profitAnalytics,setProfitAnalytics] = useState({week:[],week_canceled:[],monthly:[],monthly_canceled:[],past_six_months:[],past_six_months_canceled:[]})
    const [selectedTiming, setSelectedTiming] = useState('This Week');
    const [isModalVisible, setModalVisible] = useState(false);

    const [earningsData, setEarningsData] = useState({labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],datasets: [{
          data: [0, 0, 0, 0, 0,0,0],color: (opacity = 1) => '#f92672', strokeWidth: 2 // optional
        }
      ],});
    const [ordersData, setOrdersData] = useState({labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],datasets: 
          [{data: [0, 0, 0, 0, 0, 0,0],color: (opacity = 1) => '#f92672',strokeWidth: 2 },{data: [0, 0, 0, 0, 0, 0,0],color: (opacity = 1) => '#593632',strokeWidth: 2 }],
          legend: ["Completed","Canceled"] // optional
        });
  


    const timings = ['This Week', 'This Month', 'Past 6 Months'];
    useEffect(() => {
        context.setLoadingActive(true)
        async function getAnalytics(){
            console.log("fetching analytics")
            try{
            const response = await callApi(`/${context.userType}/analytics`,"get",{},{Authorization: `Bearer ${context.token}`})
                if(response.status==200) {
                    
            console.log("got them numbers")
                    setOrdersAnalytics({week:response.data["week"][0],
                                        week_canceled:response.data["week_canceled"][0],
                                        monthly:response.data["monthly"][0],
                                        monthly_canceled:response.data["monthly_canceled"][0],
                                        past_six_months:response.data["past_six_months"][0],
                                        past_six_months_canceled:response.data["past_six_months_canceled"][0]})
                    setProfitAnalytics({week:response.data["week"][1],
                                        week_canceled:response.data["week_canceled"][1],
                                        monthly:response.data["monthly"][1],
                                        monthly_canceled:response.data["monthly_canceled"][1],
                                        past_six_months:response.data["past_six_months"][1],
                                        past_six_months_canceled:response.data["past_six_months_canceled"][1]}) 
                }
                else {alert("Couldn't get categories")}
              } 
              catch (error) {
                console.log('Failed to fetch data',error);
              }finally{
                context.setLoadingActive(false)
              }
          }
          getAnalytics()
      }, []);

      const handleSelectTiming = (timing) => {
        setSelectedTiming(timing);
        // Here you would update your chart data based on the selected timing
        switch(timing){
          case 'This Week':
            setOrdersData({
              labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
              datasets: [{data: ordersAnalytics.week,color: (opacity = 1) => '#f92672',strokeWidth: 2 },{data: ordersAnalytics.week_canceled,color: (opacity = 1) => '#593632',strokeWidth: 2 }],
              legend: ["Completed","Canceled"]
            })
            setEarningsData({
              labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
              datasets: [{data: profitAnalytics.week,color: (opacity = 1) => '#009843',strokeWidth: 2 }]})
            break;
          case 'This Month':
            setOrdersData({
              labels: getDaysInCurrentMonth(),
              datasets: [{data: ordersAnalytics.monthly,color: (opacity = 1) => '#f92672',strokeWidth: 2 },{data: ordersAnalytics.monthly_canceled,color: (opacity = 1) => '#593632',strokeWidth: 2 }],
              legend: ["Completed","Canceled"] // optional
            })
            setEarningsData({
              labels: getDaysInCurrentMonth(),datasets: [{data: profitAnalytics.monthly,color: (opacity = 1) => '#009843',strokeWidth: 2 }]})
            break;
          case 'Past 6 Months':
            console.log(getPastSixMonths())
            setOrdersData({
              labels: getPastSixMonths(),
              datasets: [{data: ordersAnalytics.past_six_months,color: (opacity = 1) => '#f92672',strokeWidth: 2 },{data: ordersAnalytics.past_six_months_canceled,color: (opacity = 1) => '#593632',strokeWidth: 2 }],
              legend: ["Completed","Canceled"] // optional
            })
            setEarningsData({
              labels: getPastSixMonths(),datasets: [{data: profitAnalytics.past_six_months,color: (opacity = 1) => '#009843',strokeWidth: 2 }]})
            break;
        }
      };
      const showChoiceList = () => {
        if (Platform.OS === 'ios') {
          ActionSheetIOS.showActionSheetWithOptions(
            {
              options: [...timings, 'Cancel'],
              cancelButtonIndex: timings.length,
            },
            (buttonIndex) => {
              if (buttonIndex < timings.length) {
                handleSelectTiming(timings[buttonIndex]);
              }
            }
          );
        } else {
          setModalVisible(true);
        }
      };
    return(
      <View>

        <ScrollView contentContainerStyle={{flexGrow:1,
        paddingBottom:50}}>
            <TouchableOpacity style={styles.sidebarButton} onPress={() => setSidebarOpen(!sidebarOpen)}>
                    <SvgMaker source='barsSolid' fill={palette.dark} width={30} height={30}/>
            </TouchableOpacity>
            <View style={styles.topContainer}>
                <View style={styles.row}>
                    <View style={styles.row.element}>
                        <Text style={styles.row.element.title}>Earnings in {new Date().toLocaleString('default', { month: 'long' })}</Text>
                        <Text style={[styles.row.element.value,{color:'lightgreen'}]}>{profitAnalytics.past_six_months[profitAnalytics.past_six_months.length-1]} DH</Text>
                    </View>
                    <View style={styles.row.element}>
                        <Text style={styles.row.element.title}>Earnings This week</Text>
                        <Text style={styles.row.element.value}>{profitAnalytics.week.reduce((acc, current) => acc + current, 0)} DH</Text>
                    </View>
                </View>
                
                <View style={styles.row}>
                    <View style={styles.row.element}>
                        <Text style={styles.row.element.title}>Orders in {new Date().toLocaleString('default', { month: 'long' })}</Text>
                        <Text style={styles.row.element.value}>{ordersAnalytics.past_six_months[ordersAnalytics.past_six_months.length-1]} <Text style={{fontFamily:'Montserrat-Regular',color:'#ff8888'}}>
                                        ({ordersAnalytics.past_six_months_canceled[ordersAnalytics.past_six_months_canceled.length-1]} Canceled)</Text></Text>
                    </View>
                    <View style={styles.row.element}>
                        <Text style={styles.row.element.title}>Orders This week</Text>
                        <Text style={styles.row.element.value}>{ordersAnalytics.week.reduce((acc, current) => acc + current, 0)} <Text style={{fontFamily:'Montserrat-Regular',color:'#ff8888'}}>
                                        ({ordersAnalytics.week_canceled.reduce((acc, current) => acc + current, 0)} Canceled)</Text></Text>
                    </View>
                </View>
            </View>
            
            
                    <TouchableOpacity style={{alignSelf:'flex-end',paddingRight:20,paddingTop:10}} onPress={()=>{showChoiceList()}}>
                    <Text style={{color:palette.primary,fontFamily:'Raleway-Regular'}}>{selectedTiming}</Text></TouchableOpacity>
            <View style={[styles.sectionBar,{justifyContent:'space-between'}]}>
                    <Text style={styles.sectionBar.title}>Orders</Text>
            </View>
            <View style={{width:windowWidthPx,alignSelf:'center',marginTop:20}}>
                <LineChart bezier withVerticalLines={false} onDataPointClick={({x,y,value2, dataset, getColor}) => setTooltipPos({dataset:dataset,x: x,y: y,visible: true,value: value2,color:getColor()})
            } fromZero verticalLabelRotation={10} AxisInterval={1} data={ordersData} width={windowWidthPx*0.95}
                     height={200} chartConfig={ordersChartConfig}/>
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
                </View>        
            <View style={{width:windowWidthPx,alignSelf:'center',marginTop:20}}>
                <LineChart  verticalLabelRotation={10} onDataPointClick={({x,y,value, dataset, getColor}) => setTooltip2Pos({x: x,y: y,visible: true,value: value,color:getColor()})}
                 data={earningsData} width={windowWidthPx*0.95} bezier withVerticalLines={false}
                    withDots={true} height={220} chartConfig={earningsChartConfig}/>
                {tooltipPos2.visible && (
        <View style={{position: 'absolute', left: tooltipPos2.x - 15,top: tooltipPos2.y - 30,
        backgroundColor: 'white',paddingLeft: 4,paddingRight:4,
        borderRadius: 10,borderColor:tooltipPos2.color,borderWidth:1
        }}>
          <Text style={{color:tooltipPos2.color}}>{tooltipPos2.value}</Text>
        </View>)}
            </View>

            {Platform.OS === 'android' && (
        <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            {timings.map((timing, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  handleSelectTiming(timing);
                  setModalVisible(false);
                }}
                style={{ padding: 10 }}
              >
                <Text>{timing}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Modal>
      )}
            <StatusBar hidden={true}/>
            
        </ScrollView>
            <Sidebar selectedPage={"Analytics"} isOpen={sidebarOpen} turnOffSidebar={setSidebarOpen}/>
    </View>
    )
} 

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


function getPastSixMonths() {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const months = [];
  const currentDate = new Date();
  
  for (let i = 0; i < 6; i++) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
    const month = date.getMonth();
    const monthName = monthNames[month];
    months.unshift(monthName);
  }

  return months;
}

function getDaysInCurrentMonth() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return daysArray.map((label, index) => {
    return index % 2 === 0 ? label : ' ';
  });;
}
