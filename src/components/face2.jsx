import { StyleSheet, Text, View, Image } from 'react-native';

export default function Face2(){
    return(
        <View style={styles.container}>

            <View style={styles.container2}>
            <Text style={styles.texto1}>PRICE FOR EACH:</Text>
            <Text style={styles.texto2}>$249.99</Text>
            </View>
        
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
       backgroundColor: '#76DC4F',
       width: 430,
       height: 70,
       alignItems: 'center',
       justifyContent: 'center',
       marginTop: -870,
       position: 'relative',
    },
    container2:{
        flexDirection: 'row',
        alignItems: 'flex-start',
        position: 'absolute',
        gap: 70,
    },
    texto1:{
        color: 'white',
        fontSize: 17,
        marginLeft: 50,
        marginTop: 11,
    },
    texto2:{
        color: 'white',
        fontSize: 35,
        marginRight: 50,
    },
})