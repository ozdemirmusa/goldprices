import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

export default function Item({item}) {
  return (
    <View style={styles.container}>
      <View style={styles.piece}>
        <Text style={styles.text}>{item.bank}</Text>
      </View>
      <View style={styles.piece}>
        <Text style={styles.text}>{item.buying.toFixed(3)}</Text>
      </View>
      <View style={styles.piece}>
        <Text style={styles.text}>{item.selling.toFixed(3)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  piece: {
    height: Dimensions.get('screen').height / 13,
    alignItems: 'center',
    width: Dimensions.get('screen').width / 3,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
