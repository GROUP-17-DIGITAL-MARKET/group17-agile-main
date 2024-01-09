import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
  
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { FontAwesome5 } from '@expo/vector-icons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { fruitsAndvegetables } from '../utils/Data';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Redux/CartSlice';

export default function FruitsAndVegetables() {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.CartSlice);
  const nav = useNavigation();

  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = fruitsAndvegetables.filter((item) => {
    return (
      (filter === 'all' || item.name.toLowerCase().includes(filter.toLowerCase())) &&
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <View style={styles.container}>
      <Text style={{fontSize:24, color:"#141414", marginVertical:10, fontWeight:"bold"}}>Fruits And Vegetables</Text>
      <View style={styles.filterContainer}>
        <Picker
          selectedValue={filter}
          onValueChange={(itemValue) => setFilter(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="All" value="all" />
          <Picker.Item label="Apple" value="apple" />
          <Picker.Item label="Banana" value="banana" />
          <Picker.Item label="Orange" value="orange" />
          {/* Add more items as needed */}
        </Picker>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={filteredData}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              nav.navigate('Details', {
                main: item,
              })
            }
            style={{
              height: responsiveHeight(23),
              borderWidth: 2,
              borderColor: '#e3e3e3',
              width: responsiveWidth(45),
              borderRadius: 15,
              marginHorizontal: 10,
              paddingBottom: 5,
            }}
          >
            <Image style={{ height: 125, resizeMode: 'contain' }} source={ item.img} />
            <View style={{ paddingHorizontal: 10, gap: 5 }}>
              <Text style={{ fontSize: 17, fontWeight: 600, color: '#008000' }}>
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Text>

              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ color: '#808080' }}>{item.pieces}</Text>
                {storeData.some((value) => value.name == item.name) ? (
                  <FontAwesome5
                    name="minus-circle"
                    size={30}
                    color="#008000"
                    onPress={() => {
                      dispatch(addToCart(item));
                    }}
                  />
                ) : (
                  <FontAwesome5
                    name="plus-circle"
                    size={30}
                    color="#008000"
                    onPress={() => {
                      dispatch(addToCart(item));
                    }}
                  />
                )}
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 10,
    marginBottom: 30,
  },
  picker: {
    flex: 1,
    height: 40,
    marginRight: 10,
  },
  searchInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#e3e3e3',
    borderRadius: 8,
    paddingLeft: 10,
    width:330
    
  },
});
