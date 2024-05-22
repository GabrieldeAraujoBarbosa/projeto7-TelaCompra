import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Face1 from './src/components/face1';
import Face2 from './src/components/face2';
import Face3 from './src/components/face3';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View>
      <Face1/>
      </View>
    
      <View>
      <Face2/>
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Image source={{uri: './img/Imagem1.jpeg'}}
             style={{width: 320, height: 200, position: 'absolute', marginTop: -1300}}      
      />
      </View>
      
      <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 18}}>
      <FontAwesome name="circle" size={11} color="#E8E8E8"
                   style={{marginTop: -1000}}      
      />
      <FontAwesome name="circle" size={17} color="#76DC4F"
                   style={{marginTop: -1000}}      
      />
      <FontAwesome name="circle" size={11} color="#E8E8E8"
                   style={{marginTop: -1000}}      
      />
      <FontAwesome name="circle" size={11} color="#E8E8E8"
                   style={{marginTop: -1000}}      
      />
      <FontAwesome name="circle" size={11} color="#E8E8E8"
                   style={{marginTop: -1000}}      
      />
      </View>

      <View>
        <Face3/>
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{marginTop: -750, fontSize: 15, color: '#CECECE',}}>
          Premium over-ear headphones with our
        </Text>
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{marginTop: -712, fontSize: 15, color: '#CECECE',}}>
          own tecnology with closed loop and
        </Text>
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{marginTop: -675, fontSize: 15, color: '#CECECE',}}>
          digital noise-canceling technology.
        </Text>
      </View>

      <View style={styles.button}>
        <Button
          title="ADD TO CART"
          
          color= {'#76DC4F'}
          />
      </View>
      
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 430,
    position: 'absolute'
  },
});
