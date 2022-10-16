import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Item from '../../components/Item';
import styles from './Gold.style';
import FlatList_Header from '../../components/FlatList_Header';

const Gold = () => {
  const [bank, setBank] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url =
      'https://finans.apipara.com/json/v9//gold?bank=1&website=1&code=gram-altin&auid=1';

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            token: '_magic',
          },
        });
        const json = await response.json();
        setLoading(false);
        setBank(json.response.banks);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({item}) => <Item item={item} />;

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <FlatList
          data={bank}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
          ListHeaderComponent={FlatList_Header}
          ListHeaderComponentStyle={{
            borderBottomColor: 'red',
            borderBottomWidth: 5,
          }}
          ItemSeparatorComponent={() => {
            return <View style={{height: 0.5, backgroundColor: 'gray'}} />;
          }}
        />
      )}
    </View>
  );
};

export default Gold;
