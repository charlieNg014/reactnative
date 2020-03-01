// import React from 'react'
// import { View, Text } from 'react-native'
// import { Card, ListItem, Button, Icon } from 'react-native-elements';
// import {ScrollView, StyleSheet,Image, TouchableOpacity} from 'react-native';
// import FlatList from 'flatlist-react';



// const Testing = () => {
//      //define array
//      const productList = [
//         {name: "Plants", numberOfProducts: "10", icon: ""},
//         {name: "Seeds", numberOfProducts: "16", icon: ""},
//         {name: "Flowers", numberOfProducts: "63", icon: ""},
//         {name: "Sprayers", numberOfProducts: "17", icon: ""},
//         {name: "Pots", numberOfProducts: "47", icon: ""},
//         {name: "Fertilizers", numberOfProducts: "9", icon: ""}
//     ]
//     return (
//         <View>
//             {/* <FlatList style={{margin:5}}
//                 data={productList}
//                 numColumns={2}  */}
//                 {/* <ul> */}
//                     <FlatList 
//                         list={[3, 7, -1, 2, 0]} 
//                         renderItem={(number, index) => <li><b>{index + 1}</b> - {number}</li>}
//                         sort
//                     />
//                 {/* </ul> */}
//         </View>
//     )
// }

// export default Testing

// import React from 'react'
// import { Card, ListItem, Button, Icon } from 'react-native-elements';
// import {ScrollView, StyleSheet, Text,Image, TouchableOpacity, View} from 'react-native';
// import { Ionicons, AntDesign } from '@expo/vector-icons';
// import FlatList from 'flatlist-react';

// class Testing extends React.Component{
// render(){
//              //define array
//              const productList = [
//                 {name: "Plants", numberOfProducts: "10", icon: ""},
//                 {name: "Seeds", numberOfProducts: "16", icon: ""},
//                 {name: "Flowers", numberOfProducts: "63", icon: ""},
//                 {name: "Sprayers", numberOfProducts: "17", icon: ""},
//                 {name: "Pots", numberOfProducts: "47", icon: ""},
//                 {name: "Fertilizers", numberOfProducts: "9", icon: ""}
//             ]
//         return(
//             // <ScrollView>
//             // <View style = {styles.container}> 
//                 // {item.map((item) => {
//                 //     return (
//                 //         <>
//                 //         <View style={{flexDirection: 'column'}}>
//                 //             <View style={{flexDirection: 'row'}}>
//                 //                 <Card style={{flex:1}}>
//                 //                     <Text style={{marginBottom: 10, fontWeight:"bold", flexDirection:'row', justifyContent:'flex-start'}}>
//                 //                         {item.name}
//                 //                     </Text>
//                 //                     <AntDesign style={{flexDirection:'row', justifyContent:'flex-end'}} name="hearto" size={30} color="black" />
//                 //                     <Text>
//                 //                         {item.numberOfProducts}
//                 //                     </Text>
//                 //                 </Card>
//                 //             </View>
//                 //         </View>
//                 //         </>
//                 //     )
//                 // })} */}
//                 /* <Card
//                     image={{uri:('https://www.mrmunro.co.uk/wp-content/uploads/2018/08/Cavani-Tommy-Three-Piece-Suit-Worn.jpg')}} style ={styles.item}>
//                     <Text style={{marginBottom: 10, fontWeight:"bold", flexDirection:'row', justifyContent:'flex-start'}}>
//                         $299.99
//                     </Text>
//                     <AntDesign style={{flexDirection:'row', justifyContent:'flex-end'}} name="hearto" size={30} color="black" />
//                     <Text>
//                         Grey Suit
//                     </Text>
//                 </Card>
//                 <Card
//                     image={{uri:('https://simages.ericdress.com/Upload/Image/2018/14/watermark/99e027f5-1e4f-4b77-93d2-827e0c2db2e7.jpg')}} style ={styles.item}>
//                     <Text style={{marginBottom: 10, fontWeight:"bold", flexDirection:'row', justifyContent:'flex-start'}}>
//                         $299.99
//                     </Text>
//                     <AntDesign style={{flexDirection:'row',justifyContent:'flex-end'}} name="hearto" size={30} color="black" />
//                     <Text>
//                         Grey Suit
//                     </Text>
//                 </Card>
//                 <Card
//                     image={{uri:('https://simages.ericdress.com/Upload/Image/2018/14/watermark/99e027f5-1e4f-4b77-93d2-827e0c2db2e7.jpg')}} style ={styles.item}>
//                     <Text style={{marginBottom: 10, fontWeight:"bold", flexDirection:'row', justifyContent:'flex-start'}}>
//                         $299.99
//                     </Text>
//                     <AntDesign style={{flexDirection:'row',justifyContent:'flex-end'}} name="hearto" size={30} color="black" />
//                     <Text>
//                         Grey Suit
//                     </Text>
//                 </Card> */
//                 /* </View> */
//             // </ScrollView>
//                  <View style={styles.view}>
//                   <FlatList
//                     data={productList}
//                     // numColumns={4}
//                     renderItem={({ item }) => (
//                         <Text>{item}</Text>
//                     )}
//                   />
//                  </View>
//                 );
//     }

// }



// // const styles = StyleSheet.create({
// //     container:{
// //           flexDirection: 'row',
// //           alignContent:'stretch',

// //     },
// //     item:{

// //       width: '50%'
// //     }
// // })

// const styles = StyleSheet.create({
//     view: {
//      paddingTop: 30,
//     },
//     text: {
//      flex: 1,
//      fontSize: 40,
//      textAlign: 'center'
//     },
//     separator: {
//      flex: 1, 
//      borderWidth: 1, 
//      borderColor: 'red'
//     },
//    });
//    export default Testing;



import React, { useState } from 'react'
import {View, StyleSheet, Text, FlatList} from 'react-native'
export default function Testing () {
    const [product] = useState([
        {name: 'a', id:'1'}, 
        {name: 'b', id:'2'}, 
        {name: 'c', id:'3'}, 
        {name: 'd', id:'4'}
    ]);

    return (
        <View style={styles.view}>
            <Text>
                Testing
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
     paddingTop: 30,
    },
    text: {
     flex: 1,
     fontSize: 40,
     textAlign: 'center'
    },
    separator: {
     flex: 1, 
     borderWidth: 1, 
     borderColor: 'red'
    },
   });