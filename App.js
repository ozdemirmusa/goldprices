import {View, Text, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Gold from './src/pages/Gold';


export default function App() {
  /*
  const [a, setA] = useState([]);

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
        setA(json.response.banks);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  }, []);

  const renderItem = ({item}) => (
    <View style={{flexDirection: 'row'}}>
      <Text>{item.bank}</Text>
      <Text>------</Text>
      <Text>{item.buying.toFixed(3)}</Text>
      <Text>------</Text>
      <Text>{item.selling.toFixed(3)}</Text>
    </View>
  );
*/
  return (
    <View>
      <Gold/>
    </View>
  );
}
