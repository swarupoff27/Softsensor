import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar ,ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount(){

    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })  
    });
  }


  render() {

    var {isLoaded, items} = this.state;

   
    if(!isLoaded){
      return (
        <View style={styles.container}>
          <StatusBar/>
          <Text style={styles.header}>Soft<Text style={styles.heading}>sensor.ai</Text> Market</Text>
          <ActivityIndicator size="large" color="white" />
        </View>
      );
    }

    else {
      return (
        
        <View style={styles.scrollbackground}>
          <Text style={styles.header}>Soft<Text style={styles.heading}>sensor.ai</Text> Market</Text>
        
          
            <ScrollView >
              
                  <Text>
                      
                    {items.map(item => (
                      
                        <View key ={item.id}>

                          <View style={styles.itemcard}>  
                              {/* <Text>{item.id}</Text> */}
                              <Text style={styles.title}>{item.title}</Text>

                              <View style={styles.descriptionview}>
                                <Text style={styles.description}>{item.description}</Text>
                              </View>

                              <View style={styles.imageprice}>

                                  <View style={styles.imageview}>  
                                      <Image 
                                          style={{ width: 180, height: 200, resizeMode: 'contain', }}
                                          source={{uri:item.image}}
                                        />
                                  </View>  

                                
                                  <View style={styles.priceview}> 


                                  <View style={styles.ratecountview}>
                                    <Text style={styles.ratecount}>Ratings: {item.rating.rate}/5</Text> 
                                    <Text style={styles.ratecount}>Count: {item.rating.count}</Text> 
                                  </View>

                                  <Text style={styles.price}>₹ {item.price}</Text>



                                  <View style={styles.buttonview}>
                                      <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Cart')}>
                                        <Text style={styles.buttontext}>Add to Cart</Text>
                                      </TouchableOpacity> 
                                  </View>


                                </View>  

                                   

                              </View>
                              

                                  
                          </View>
                        </View> 
                         
                    ))};
                  </Text>   
               
            </ScrollView>
          </View>
          
      );


    }

   
  }

  
}

const styles = StyleSheet.create({
  test:{
    
  },
  container: {
    flex: 1,
    backgroundColor: '#02112d', // opening screen color
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  header: {
    paddingVertical: 10,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: '#23bef0',         // light blue
    backgroundColor:'#02112d', //dark blue

    
  },

  heading:{
    color: 'white',            //white
    
   
  },

  scrollbackground:{
    flex: 1,
    backgroundColor:'#02112d',
    //backgroundColor:'#646d83',  //grey
    
  },

  itemcard: {
    flex: 1,
    //alignItems: 'flex-start',
    //justifyContent: 'space-around',
    margin: 10,
    padding: 10,
    backgroundColor:'white', //inside items' cards
    width: 370,
    height: 520,
    resizeMode: 'contain',
    borderRadius:10,
    
    

  },

  title:{
    fontWeight: 'bold',
    fontSize: 18,
  },

  imageview:{
    
    alignItems:'center',
    justifyContent: 'center',
    //backgroundColor:'yellow',
    
  },

  price:{
    fontSize: 27,
    fontWeight: 'bold',
    paddingBottom: 20,
    
  },

  priceview:{
    flex: 1,
    padding: 10,
    //backgroundColor: '#646d83',  
    justifyContent: 'flex-end'
  },

  imageprice:{
    flex: 3,
    flexDirection: 'row',
    
  },
  description:{
    color: '#808080',    //light grey
  },
  descriptionview:{
    margin:5,
    //backgroundColor: 'yellow',
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    width:150,
    paddingVertical:15,
    borderRadius:10,
    backgroundColor:'#23bef0',
    
  },
  buttontext:{
    fontWeight: 'bold',
  },

  buttonview:{
    //backgroundColor: 'yellow',
  },

  ratecount:{
    color:'#808080',
  },
  
  ratecountview:{
    
    //backgroundColor: 'yellow'
  }
 
});

export default App;