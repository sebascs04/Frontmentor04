import { StyleSheet, View, Text, Pressable } from "react-native"
import Facebook from './Icons/Facebook'
import Twitter from './Icons/Twitter'
import Pinterest from './Icons/Pinterest'
import Shared from "./Icons/Shared"


export default function Active({Compartir}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text} >SHARE</Text>
            <View style={styles.subcontainer} >
                <Facebook />
                <Twitter />
                <Pinterest />
            </View>
            <Pressable onPress={Compartir} style={styles.icon}>
                <Shared fill='#FFFFFF' />
            </Pressable>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4E4E5D',
        flexDirection: 'row',
        width: 310,
        marginTop: 22,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subcontainer: {
        display: 'flex',
        flexDirection: 'row',
        width: 90,
        justifyContent: 'space-between'
    },
    text: {
        letterSpacing: 6,
        color: 'rgba(228,228,228,0.5)',
        paddingRight: 20
    },
    icon: {
        marginLeft: 46,
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: '#rgba(164,164,175,0.8)',
        justifyContent: 'center',
        alignItems: 'center'
    }   
})