import { StyleSheet, Text, View } from 'react-native';

export default function Content() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Shift the overall look and feel by adding these wonderful touches to 
                forniture in your home
            </Text>
            <Text style={styles.text}>
                Ever been in a room and felt like something was missing? Perhaps it
                felt slightly bare and uninviting. I've got some simple tips to help you
                make any room feel complete.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 32,
        width: 260,
    },
    title: {
        lineHeight: 23,
        fontWeight: '500',
        fontSize: 17,
        color: 'rgba(0,0,0,0.8)',
    },
    text: {
        lineHeight: 20,
        paddingTop: 13,
        color: 'rgba(0,0,0,0.6)',
        fontSize: 13.5,
    }
})