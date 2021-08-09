import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Touchable} from 'react-native';
import ResultsDetails from './ResultsDetails';
import { withNavigation } from 'react-navigation';

const ResultsList = ({navigation, title, results}) =>{

    if(!results.length){
        return null;
    }
    
    return(
        <View style ={{marginBottom:10}}>
            <Text style = {styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
                data = {results}
                keyExtractor = {(results) =>results.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress = {( )=> navigation.navigate('Result', {id: item.id})}>
                            <ResultsDetails result ={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle:{
        fontSize:22,
        fontWeight: "bold",
        marginLeft:15,
        marginBottom:5
    }
});

export default withNavigation(ResultsList);