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
  const [gr, setGR] = useState({bank: null, buying: 0, selling: 0.0});
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
        setGR(json.response);
        console.log(json.response.buying.toFixed(2));
        let x = json.response.banks;
        let y = x.pop();
        setBank(x);
        // console.log(json.response.banks[24].buying)
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
    setInterval(() => {
      fetchData();
      //console.log("merhaba")
    }, 10000);
  }, []);

  const renderItem = ({item}) => <Item item={item} />;

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <View>
          <View style={styles.gold}>
            <Item item={gr} />
          </View>
          <View style={styles.list}>
            <FlatList_Header />
            <FlatList
              data={bank}
              renderItem={renderItem}
              keyExtractor={(item, index) => index}
              ItemSeparatorComponent={() => {
                return <View style={{height: 0.5, backgroundColor: 'gray'}} />;
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default Gold;
