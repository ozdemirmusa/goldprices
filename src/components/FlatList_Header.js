import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

export default function FlatList_Header() {
  return (
    <View style={styles.container}>
      <View style={styles.piece}>
        <Text style={styles.text}>BANKA</Text>
      </View>

      <View style={styles.piece}>
        <Text style={styles.text}>ALIŞ</Text>
      </View>
      <View style={styles.piece}>
        <Text style={styles.text}>SATIŞ</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    backgroundColor: '#00B8D4',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  piece: {
    alignItems: 'center',
    width: Dimensions.get('screen').width / 3,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight:'bold'
  },
});
