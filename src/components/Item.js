import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

export default function Item({item}) {
  return (
    <View style={styles.container}>
      <View style={styles.piece}>
        {item.bank != null ? (
          <Text style={styles.text}>{item.bank}</Text>
        ) : (
          <Text style={styles.text2}>Gram Altın</Text>
        )}
      </View>
      {item.bank != null ? (
        <View style={styles.piece}>
          <Text style={styles.text}>{item.buying.toFixed(3)}</Text>
        </View>
      ) : (
        <View style={styles.piece2}>
          <Text style={styles.text2}>{item.buying.toFixed(3)}</Text>
        </View>
      )}
      {item.bank != null ? (
        <View style={styles.piece}>
          <Text style={styles.text}>{item.selling.toFixed(3)}</Text>
        </View>
      ) : null}
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
  piece2: {
    height: Dimensions.get('screen').height / 13,
    alignItems: 'center',
    width: (Dimensions.get('screen').width / 3) * 2,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  text2: {
    color: 'red',
    fontSize: 20,
    fontWeight:'bold'
  },
});
