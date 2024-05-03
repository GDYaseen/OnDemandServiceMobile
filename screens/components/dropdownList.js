import React, { useState } from 'react';
import {FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function DropdownList({items,setSelected, isOpen, setIsOpen , ListItemComponent}){
    const handleSelectItem = (item) => {
        setSelected(item);
        setIsOpen(false);
    };
    
    if(isOpen)
    return(
        <FlatList
          style={styles.list}
          data={items}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => handleSelectItem(item)}>
              {/* {<Text style={{
        fontFamily:'Montserrat-Light'}}>{item.label}</Text>} */}
                <ListItemComponent item={item}/>
            </TouchableOpacity>
          )}
        />        
    )
    return null
}
const styles = StyleSheet.create({
    list: {
        position:'absolute',
        width: "100%",
        borderBottomWidth:1,
        top:24,
        borderWidth:1,
        borderColor:'darkgray',
        borderBottomLeftRadius:10,borderBottomRightRadius:10,
        backgroundColor:'white',
        zIndex:2,
      },
  item: {
    padding: 10,
  }
})