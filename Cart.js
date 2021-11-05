import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';

export default function Cart( {navigation} ) {
  return (
  
      <View >
            
            
            <View style={styles.head}>
            
              <Text style={styles.header}>Soft<Text style={styles.header1}>sensor.ai</Text> Cart</Text>
            </View>

                                  <View style={styles.buttonview}>
                                      <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Home')}>
                                        <Text style={styles.buttontext}>Go Back</Text>
                                      </TouchableOpacity> 
                                  </View>
      </View>
      
    );
  }

const styles = StyleSheet.create({
  
  head:{
    
    backgroundColor:'#02112d', //dark blue
  },

  header: {
    paddingVertical: 10,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: '#23bef0',         // light blue
  },

  header1:{
    color: 'white',            //white
  },

  button:{
    marginTop:350,
    alignItems: 'center',
    width:150,
    paddingVertical:15,
    borderRadius:10,
    backgroundColor:'#23bef0',
    
    
  },
  buttontext:{
    fontWeight: 'bold',
    fontSize:20,
  },

  buttonview:{
    
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'yellow',
  },

  
});
