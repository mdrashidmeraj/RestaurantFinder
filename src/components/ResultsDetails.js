import React from 'react';
import { Image, View, Text, StyleSheet} from 'react-native';


const ResultsDetails = ({result}) =>{
    return(
        <View style = {styles.container}>
            <Image style = {styles.imageStyle} source ={{uri:result.image_url}}/>
            <Text style = {styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:15,
        
    },
    imageStyle:{
        width:250,
        height: 120,
        borderRadius:5,
        marginBottom:5
    },
    nameStyle:{
        fontWeight: 'bold',
        fontSize:16
    }
});

export default ResultsDetails;