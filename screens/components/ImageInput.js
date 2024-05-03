import React, { useState } from 'react';
import { Button, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import placeholderImage from '../../assets/images/placeholderImage.png'
import profilePng from '../../assets/images/account.png'
import { palette } from '../config';
import SvgMaker from './SvgMaker';
const ImageInput = ({aspect,type,image,setImage,style}) => {

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync(aspect?{
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: aspect,
      quality: 1,
    }:{
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  function decideDefault(){
    return type=='profile'?profilePng:placeholderImage
  }
  return (
        <TouchableOpacity onPress={pickImage} style={style}>
            {image?<TouchableOpacity onPress={()=>setImage(null)} style={{position:'absolute',right:0,top:10,
                    backgroundColor:palette.dark+'7f',width:40,height:40,zIndex:2,
                    borderTopLeftRadius:8,borderBottomLeftRadius:8,justifyContent:'center',alignItems:'center'
                    }}><SvgMaker source={'delete'} width={20} height={20} fill={"white"}/></TouchableOpacity>:null}
            <Image resizeMode="contain" source={image?{ uri: image }:decideDefault()} style={style} />
        </TouchableOpacity>
  );
};

export default ImageInput;
