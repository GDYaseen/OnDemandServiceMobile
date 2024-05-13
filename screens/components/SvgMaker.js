import React, { useState, useEffect } from 'react';
import { readAsStringAsync } from 'expo-file-system';
import { Asset } from 'expo-asset';
import { SvgXml } from 'react-native-svg';
import { Settings } from 'react-native';


export default SvgMaker = ({source,width,height,fill,style,content=""}) => {
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    (async () => {
      if(content==""){
        const asset = Asset.fromModule(SVG_MAP[source]);
        await asset.downloadAsync();
        const svgText = await readAsStringAsync(asset.localUri);
        setSvgContent(svgText.replace(/fill="[^"]*"/g, ''));
      }else{
        setSvgContent(content.match(/<svg[^>]*>([\s\S]*?)<\/svg>/)[0])

      }
    })();
  }, [source]);

  return (<SvgXml style={style} xml={svgContent} width={width} fill={fill} height={height} />);
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
