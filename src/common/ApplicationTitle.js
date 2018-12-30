import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const ApplicationTitle = () => {
    return(
    <View style={titleContainer}>
        <Text style={titleText}>
        <Image source={require('../imgs/bat1.png')} style={styles.batStyle}></Image>
            Scoreit
        </Text>
    </View>
    )
}

    const styles = StyleSheet.create({
        titleContainer: {
          display: "flex",
          alignItems: "center",
        },
        titleText: {
          fontWeight: "bold",
          fontSize: 30,
          marginTop: 170
        },
        batStyle: {
            width:'30%',
            height:'30%'
        }
      })
    const { titleContainer, titleText } = styles;
export default ApplicationTitle;