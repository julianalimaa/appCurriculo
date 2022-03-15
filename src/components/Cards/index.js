import React from 'react';
import {View, Text} from 'react-native';
import style from './style';

const Card = ({titulo, children}) => {
  return (
    <>
      <View style={style.card}>
        <View style={style.card_header}>
          <Text style={style.card_header_text}>{titulo}</Text>
        </View>
        <View style={style.card_content}>{children}</View>
      </View>
    </>
  );
};

export default Card;
