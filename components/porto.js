import React from 'react';
import {ScrollView, View, TouchableOpacity, Linking, Image, Text} from 'react-native';
const ig = ()=> {
  Linking.openURL('https://instagram.com/ilvpain?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==')
}

const wa = ()=> {
  Linking.openURL('https://wa.me/qr/S7DUQI2UYG47H1')
}
const Porto = () =>{
  return(
    <ScrollView style={{paddingHorizontal:20, backgroundColor:'white'}}>
      <View style={{backgroundColor:'lightgrey', paddingVertical:10}}>
      <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center'}}>
      My Portofolio
    </Text>
      <View style={{height:10}}>
      </View>
<Image
      style={{height:170, width:210, borderRadius:20, alignSelf:'center'}}
      source={require('../assets/dika.jpeg')}
    />
      <View style={{height:10}}>
      </View>
      <Text style={{fontSize:17, fontWeight:'bold', textAlign:'center'}}>
      Fariz Andhika Prasetya
    </Text>
    <Text style={{fontSize:15, textAlign:'center'}}>
      Saya adalah siswa SMK Telkom Purwokerto yang berbakat dalam bidang UI/UX dan ingin menjadi seorang profesional.
    </Text>
      </View>

      <View style={{height:20}}>
      </View>
      <Text style={{fontSize:17, fontWeight:'bold', textAlign:'center'}}>
      Contact Me
    </Text>
      <View style={{height:10}}>
      </View>
      <View style={{flexDirection:'row'}}>

      <TouchableOpacity onPress={ig}>
      <View style={{backgroundColor:'pink',borderRadius:20,padding:10, flexDirection:'row', justifyContent:'center', alignItems:'center', width:140}}>
        <Image
      style={{height:30, width:30, borderRadius:10}}
      source={require('../assets/ig.png')}
    />

        <Text style={{fontWeight:'bold',color:'black', marginLeft:10}}>
        Instagram
        </Text>
      </View>
    </TouchableOpacity>

      
      <View style={{width:10}}>
      </View>
      <TouchableOpacity onPress={wa}>
      <View style={{backgroundColor:'lightgreen',borderRadius:20,padding:10, flexDirection:'row', justifyContent:'center', alignItems:'center', width:140}}>
        <Image
      style={{height:30, width:30, borderRadius:10}}
      source={require('../assets/wa.jpeg')}
    />

        <Text style={{fontWeight:'bold',color:'black', marginLeft:10}}>
        WhatsApp
        </Text>
      </View>
    </TouchableOpacity>
      
      </View>

      <View style={{height:20}}>
      </View>
      <Text style={{fontSize:17, fontWeight:'bold', textAlign:'center'}}>
      Project
    </Text>
      <View style={{height:10}}>
      </View>
      <TouchableOpacity>
      <View style={{height:170, width:230, borderRadius:20, backgroundColor:'lightgrey', alignSelf:'center'}}>
      <Image
      style={{height:160, width:210, borderRadius:20, alignSelf:'center'}}
      source={require('../assets/projek1.png')}
    />
      
      </View>
      </TouchableOpacity>

     

     
      <Text style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>
      UI/UX
    </Text>
    <Text style={{fontSize:15, textAlign:'center'}}>
      Membuat Sebuah UI/UX menggunakan Figma
    </Text>

      <View style={{height:10}}>
      </View>

      <TouchableOpacity>
      <View style={{height:170, width:230, borderRadius:20, backgroundColor:'lightgrey', alignSelf:'center'}}>
      <Image
      style={{height:160, width:210, borderRadius:20, alignSelf:'center'}}
      source={require('../assets/projek2.png')}
    />
      </View>
      </TouchableOpacity>
      

      
     <Text style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>
      UI/UX
    </Text>
    <Text style={{fontSize:15, textAlign:'center'}}>
      Membuat Sebuah UI/UX menggunakan Figma
    </Text>
    </ScrollView>
  )
  
}

export default Porto