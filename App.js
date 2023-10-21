import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import Content from './components/Content';
import User from './components/User';
import Active from './components/Active';
import { useEffect, useState } from 'react';

const PlaceholderImage = require('./assets/images/drawers.jpg')

export default function App() {
  const [bool,setBool] = useState(false)

  function Compartir() {
    setBool(!bool)
  }

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Image source={PlaceholderImage} style={styles.image} />
        <Content />
        {
          bool == true ? <Active Compartir={Compartir} /> : <User Compartir={Compartir}  />
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E9EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer: {
    display: 'flex',
    backgroundColor: '#FFFFFF',
    height: 500,
    width: 310,
    borderRadius: 15,
    alignItems: 'center'
  },
  image: {
    height: 200,
    width: 310,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
});
