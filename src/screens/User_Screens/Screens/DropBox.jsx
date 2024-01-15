import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Dropdown } from '../../../utils/Data';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { GRAY_COLORS } from '../../../utils/Mycolors';


export default function DropBox({ navigation }) {
    const [myIndex, setmyIndex] = useState();
    const [toggle, settoggle] = useState(false);
    return (
        <View>
         <FlatList data={Dropdown} renderItem={({item,index}) =><View> 
            <TouchableOpacity
            onPress={() => {
                setmyIndex(index);
                settoggle(!toggle)
            }}
             style={{
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"space-between",
                borderBottomColor: GRAY_COLORS.MEDIUM_GRAY,
                borderBottomWidth:2,
                marginBottom:10,
                paddingVertical:20

            }}>
                <Text>{item.title}</Text>
                <AntDesign name={myIndex ==index && toggle ? "down" : "right" }size={24} color="black" />


            </TouchableOpacity>

            {myIndex ==index && toggle ? <Text>{item.content}</Text> : null}


         </View>
        }/>

        </View>
    );
}


