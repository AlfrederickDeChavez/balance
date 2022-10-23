import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { foodsBarcode } from '../../database/FoodBarcode';

const Scanner = ({setOpenCamera, visible, setVisible, setFoodToAdd}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const [X, setX] = useState(150)
  const [Y, setY] = useState(100)
  const [codeWidth, setCodeWidth] = useState(50)
  const [codeHeight, setCodeHeight] = useState(50)

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const filterBarcode = (data) => {
    
    setScanned(true)
    const food = foodsBarcode.find(food => food.Barcode == data)

    if(food) {
      setFoodToAdd(food)
      setVisible(true)
    } else {
      alert('This product is currently not available on our database.')
    }
    
    setOpenCamera(false)
  }

  const handleBarCodeScanned = ({ bounds, data }) => {

    const {origin, size} = bounds
    setX(origin.x)
    setY(origin.y)
    setCodeWidth(size.width),
    setCodeHeight(size.height)
    filterBarcode(data)
    
  };

  if (hasPermission === null) {
    return <Text style={{color: '#FFF', fontWeight: 'bold'}}>Requesting for camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text style={{color: '#FFF', fontWeight: 'bold'}}>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      >
        <View style={{
            position: 'absolute', 
            top: Y, left: X, 
            width: codeWidth, 
            height: codeHeight, 
            borderColor: 'red',
            borderWidth: 2,
        }}></View>
      </BarCodeScanner>
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '80%',
    }
})
export default Scanner