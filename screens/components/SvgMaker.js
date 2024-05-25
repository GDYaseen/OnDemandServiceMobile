import React, { useState, useEffect } from 'react';
import { readAsStringAsync } from 'expo-file-system';
import { Asset } from 'expo-asset';
import  * as SVG from 'react-native-svg';
import { Settings } from 'react-native';


export default SvgMaker = ({source,width,height,fill,style,content=""}) => {
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    (async () => {
        try{
      if(content==""){
        const asset = Asset.fromModule(SVG_MAP[source]);
        if (!asset.localUri) {
          await asset.downloadAsync();
        }
        const svgText = await readAsStringAsync(asset.localUri);
        if (svgText) {
          setSvgContent(svgText.replace(/fill="[^"]*"/g, ''));
        }
      }else {
        const matchedContent = content.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
        if (matchedContent && matchedContent[0]) {
          setSvgContent(matchedContent[0]);
        } else {
          console.error("Invalid SVG content provided.");
        }
      }
    }catch (error) {
        console.error("Error loading SVG:", error);
      }
    })();
  }, [source,content]);

  return (<SVG.SvgFromXml style={style} xml={svgContent} fill={fill} width={width} height={height} />);
};
//keys names must be _ , 0-9 , a-z
const SVG_MAP = {
  barsSolid:        require('../../assets/images/bars-solid.svg'),
  services:         require('../../assets/images/services.svg'),
  wrench:           require('../../assets/images/wrench.svg'),
  calendar:         require('../../assets/images/calendar.svg'),
  thumbsUp:         require('../../assets/images/thumbs-up.svg'),
  back:             require('../../assets/images/back.svg'),
  analytics:        require('../../assets/images/analytics.svg'),
  edit:             require('../../assets/images/edit.svg'),
  delete:           require('../../assets/images/delete.svg'),
  profile:          require('../../assets/images/profile.svg'),
  home:             require('../../assets/images/home.svg'),
  settings:         require('../../assets/images/settings.svg'),
  orders:  require('../../assets/images/completedOrders.svg'),
  eye:  require('../../assets/images/eye.svg'),
  };
