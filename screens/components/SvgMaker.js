import React, { useState, useEffect } from 'react';
import { readAsStringAsync } from 'expo-file-system';
import { Asset } from 'expo-asset';
import { SvgXml } from 'react-native-svg';


export default SvgMaker = ({source,width,height,fill}) => {
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    (async () => {
      const asset = Asset.fromModule(SVG_MAP[source]);
      await asset.downloadAsync();
      const svgText = await readAsStringAsync(asset.localUri);
      setSvgContent(svgText);
    })();
  }, [source]);

  return (<SvgXml xml={svgContent} width={width} fill={fill} height={height} />);
};
//keys names must be _ , 0-9 , a-z
const SVG_MAP = {
  barsSolid: require('../../assets/images/bars-solid.svg'),
  services: require('../../assets/images/services.svg'),
  wrench: require('../../assets/images/wrench.svg'),
  calendar: require('../../assets/images/calendar.svg'),
  thumbsUp: require('../../assets/images/thumbs-up.svg'),
  };
