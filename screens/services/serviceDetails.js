import React, { useState, useRef, useContext, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Animated, TouchableOpacity, Image, Touchable } from 'react-native';


import placeholderImage from '../../assets/images/placeholderImage.png'
import SvgMaker from '../components/SvgMaker';
import profilePng from '../../assets/images/account.png'
import { callApi, palette,windowWidthPx } from '../config';
import Review from '../reviews/review';
import Popup from '../components/Popup';
import MakeOrder from './makeOrder';
import Contexter from '../contexter';
import Loading from '../components/loading';
export default function ServiceDetails({navigation,route}) {
  const { id,_service } = route.params;
  
  const context = useContext(Contexter);
  const [loadingActive, setLoadingActive] = useState(true);
  const [service,setService] = useState(_service)
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    async function getService() {
    try {
        console.log("searching service details");
        const response = await callApi(`/${context.userType}/services/`+id,"get",{},{Authorization: `Bearer ${context.token}`})
        
        if(response.status==200) {
          setService(response.data.service)
      }
      else {
        alert("Couldn't get service, it may have been blocked by the provider")
        navigation.goBack()
      }
      }
      catch (error) {
        alert('Failed to fetch data',error);
        navigation.goBack()
      }
    } 
    if (!service) {
      getService()
    }
   
  }, []);
  if (!service) {
    return <Loading.LoadingScreen isActive={true} />;
  }

  function hire(){
    setModalVisible(true)
    
  }
  return (
    <ScrollView>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.back} >
      <SvgMaker  source={'back'} width={20} height={20} fill={"#fff"} />
      </TouchableOpacity>

      <Image source={placeholderImage} resizeMode="contain" style={{height:200,backgroundColor:'lightgray',width:windowWidthPx}}/>
      <TouchableOpacity onPress={()=>navigation.navigate("ProviderDetails",{provider:service.provider,service:service})} style={styles.profile}>
        <Image source={profilePng} style={styles.profile.image} />
        <Text style={styles.profile.sellerName}>{service.provider.first_name} {service.provider.last_name}</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.content.title}>{service.name}</Text>
        <Text style={styles.content.description}>{service.description}</Text>
        <TouchableOpacity style={styles.content.hireButton} onPress={hire}><Text style={styles.content.hireButton.text}>Continue {service.price} DH</Text></TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={{flexDirection:'row',justifyContent:"space-between"}}>
          <Text style={[styles.content.stars,styles.content.sectionTitle]}>⭐ {(service.feedbacks_sum_stars/service.feedbacks_count).toFixed(1)}</Text>
          <Text style={[styles.content.sectionTitle,{color:palette.secondary}]}>{service.orders_count} orders</Text>
        </View>
        <Text style={[styles.content.sectionTitle]}>{service.feedbacks_count} Reviews</Text>
        <ScrollView style={styles.content.reviews} horizontal={true} contentContainerStyle={{padding:5,flexGrow: 1 }}>
          {service?.feedbacks.slice(0, 10).map((r)=>{
                return (<Review review={r} navigation={navigation}/>)})}
        </ScrollView>
      </View>
      <Popup visible={modalVisible} setModalVisible={setModalVisible} content={<MakeOrder/>}/>
    </ScrollView>
  )
}
let styles = StyleSheet.create({
  back:{
    width:50,
    height:50,
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    shadowColor:"#000",
    elevation: 20,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 1,
    shadowRadius: 3,
    zIndex:1,
  },
  profile:{
    backgroundColor:palette.dark+'0f',
    borderBottomLeftRadius:10,borderBottomRightRadius:10,
    flexDirection:'row',
    alignItems:'center',
    image:{
      width:50,
      height:50,
      borderRadius:25,
      margin:5,
      borderColor:palette.primary,
      borderWidth:1
    },
    sellerName:{
      marginLeft:10,
      fontFamily:'Montserrat-Medium',
      fontSize:16,
      color:'black'
    }
  },
  content:{
    padding:10,
    borderBottomWidth:1,
    borderColor:'lightgray',
    overflow: 'visible',
    title:{
      fontFamily:'Montserrat-Bold',
      fontSize:25,
    },
    description:{
      textAlign:'justify',
      fontSize:14,
      fontFamily:'Raleway-Light'
    },
    hireButton:{
      text:{
        color:'white',
        fontSize:20,
        fontFamily:'Montserrat-Regular'
      },
      backgroundColor:palette.secondary,
      height:50,
      borderRadius:5,
      justifyContent:'center',alignItems:'center',
      marginTop:15,
      marginBottom:10
    },
    stars:{
      fontSize:23,
    },
    sectionTitle:{
      fontFamily:'Montserrat-Medium',
      fontSize:17,
      margin:10
    },
    reviews:{
      flexDirection:'row',
      overflow: 'visible',
    },
  },
})
const lorem="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
let r = {
  id:123,
  username:"Someone",
  stars:4.1,
  date:"3 February 2024",
  image:null,
  description:lorem,
}