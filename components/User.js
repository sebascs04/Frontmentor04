import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import Shared from "./Icons/Shared"
const PlaceholderImage  = require('../assets/images/avatar-michelle.jpg')

export default function User({Compartir}) {
    return  (
        <View style={styles.container}>
            <Image style={styles.image} source={PlaceholderImage}></Image>
            <View style={styles.texts}>
                <Text style={{fontWeight: '600', color: 'rgba(0,0,0,0.8)'}}>Michelle Appleton</Text>
                <Text style={{color: 'rgba(0,0,0,0.5)'}}>28 Jun 2020</Text>
            </View>
            <Pressable onPress={Compartir} style={styles.icon}>
                <Shared fill='#6E8098' />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 29.5,
        width: 260,
        justifyContent: 'space-between'
    },
    image: {
        width: 44,
        height: 44,
        borderRadius: 22,
        marginTop: -15
    },
    icon: {
        backgroundColor:'#E0E9EB',
        width: 32,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    texts: {
        marginLeft: -40,
        paddingBottom: 10
    }
})