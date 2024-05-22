import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Face3(){
    return(
        <View style={styles.container}>
           <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 34, fontWeight: -10, marginTop: -900}}>Harman/Kardon BT</Text>

             <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 5}}>
               <Text style={{color: '#76DC4F', fontSize: 13}}>HEADPHONES</Text>
               <Text style={{fontSize: 13, fontStyle: 'italic'}}>by</Text>
               <Text style={{color: '#76DC4F', fontSize: 13}}>HARMAN/KARDON</Text>
             </View>
             
             <View>
               
             </View>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex: 1
    }
})