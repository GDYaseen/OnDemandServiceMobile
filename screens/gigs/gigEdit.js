import React, { useState, useRef, useContext } from 'react';
import {Modal,FlatList, View, Text,TextInput, ScrollView, StyleSheet, Animated, TouchableOpacity, Image, Touchable } from 'react-native';


import placeholderImage from '../../assets/images/placeholderImage.png'
import SvgMaker from '../components/SvgMaker';

import { palette,windowWidthPx } from '../config';
import DropdownList from '../components/dropdownList';
import ImageInput from '../components/ImageInput';
import Contexter from '../contexter';

export default function GigEdit({navigation,route}) {
  const { gig } = route.params;
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({label:'Select item'});
  const items = [{ id: 1, label: 'Item 1' }, { id: 2, label: 'Item 2' }, { id: 3, label: 'Item 3' }];
  
  const [image, setImage] = useState(gig.images[0])
  return (
    <ScrollView stickyHeaderIndices={[0]} contentContainerStyle={{flexGrow:1,paddingBottom:20}}>
        <View style={{width:windowWidthPx,height:50,backgroundColor:palette.dark}}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.back} >
            <SvgMaker  source={'back'} width={20} height={20} fill={"#fff"} />
            </TouchableOpacity>
        </View>
        
        <Text style={[styles.inputTitle,{marginLeft:10}]}>Image:</Text>
        {/* <Image source={placeholderImage} resizeMode="contain" /> */}
        <ImageInput image={image} setImage={setImage} style={{height:150,backgroundColor:'lightgray',width:windowWidthPx}} ></ImageInput>
      <View style={styles.content}>
        <Text style={styles.inputTitle}>Title:</Text>
        <TextInput style={styles.content.input} value={gig.name} />
        <Text style={styles.inputTitle}>Category:</Text>
        <View>
        <TouchableOpacity style={[styles.content.input,{flexDirection:'row',justifyContent:'space-between'}]} onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.content.category}>
                {selectedItem.label}</Text>
                <Text>⌄</Text>
      </TouchableOpacity>
      <DropdownList items={items} setSelected={setSelectedItem} isOpen={isOpen} setIsOpen={setIsOpen} ListItemComponent={CategoryListItemComponent}></DropdownList>
        </View>


        <Text style={styles.inputTitle}>Price:</Text>
        <TextInput style={styles.content.input} value={gig.price} />
        <Text style={styles.inputTitle}>Desciption:</Text>
        <TextInput multiline={true} style={styles.content.input} value={gig.description} />
      </View>
      <View style={styles.content}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <TouchableOpacity style={[styles.content.button,{backgroundColor:palette.dark+'8f'}]}>
                            <Text style={styles.content.button.text}>Preview</Text></TouchableOpacity>

        <TouchableOpacity style={[styles.content.button,{backgroundColor:palette.primary}]}>
                            <Text style={styles.content.button.text}>Save</Text></TouchableOpacity>
        </View>
        
      </View>
    </ScrollView>
  )
}

const CategoryListItemComponent = ({ item }) => {
  return <Text style={{fontFamily: 'Montserrat-Light' }}>{item.label}</Text>;
};

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
    inputTitle:{
        marginTop:10,
        marginBottom:5,
        fontFamily:'Montserrat-SemiBold',
        fontSize:15,
      },
  content:{
    padding:10,
    borderBottomWidth:1,
    borderColor:'lightgray',
    overflow: 'visible',
    input:{
        paddingLeft:5,
        paddingRight:5,
      textAlign:'justify',
      fontSize:12,
      backgroundColor:'white',
      fontFamily:'Montserrat-Light',
      borderRadius:5,
      borderWidth:1,
    },
    category:{
        textAlign:'justify',
        fontSize:12,
        backgroundColor:'white',
        marginVertical:5,
        fontFamily:'Montserrat-Light'
    },
    price:{
      text:{
        color:'white',
        fontSize:14,
        fontFamily:'Montserrat-Regular',
      }, 
      position:'absolute',
      paddingRight:5,
      paddingLeft:5,
      justifyContent:'center',
      height:30,
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      backgroundColor:palette.dark,
      top:-30,
      right:5
    },
    button:{
        width:windowWidthPx*0.45,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        text:{
            fontSize:15,
            fontFamily:'Montserrat-Regular',
            color:'white'
        }
    }
  },
})