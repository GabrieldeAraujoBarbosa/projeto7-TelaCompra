import { StyleSheet, Text, View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Face1(){
    return(
        <View style={styles.container}>
           
            <View style={styles.container2}>
              <Text style={styles.texto1}>Bob</Text>
              <Text style={styles.texto2}>Studio</Text>
            </View>

            <View style={styles.icone1}>
            <Feather name="menu" size={36} color="white"/>
            </View>
            
            <View style={styles.icone2}>
            <FontAwesome name="search" size={32} color="white" />
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#292525',
        width: 430,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 870,
        position: 'absolute,'
    },
    container2:{
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 8,
        position: 'absolute',
    },
    texto1:{
        color: '#FDFCFC',
        fontFamily: 'Roboto-bold',
        fontSize: 40,
        marginRight: -2,
        marginTop: -3,
    },
    texto2:{
        color: '#76DC4F',
        fontSize: 32,
        fontStyle: 'italic',
    },
    icone1:{
        marginRight: 350,
        marginBottom: -8,
        position: 'absolute',
    },
    icone2:{
        marginLeft: 350,
        marginBottom: -8,
        position: 'absolute',
    },
})