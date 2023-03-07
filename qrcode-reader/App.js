import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { FlatList } from 'react-native';

export default function App() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [scan, setScan] = useState(false);
  let perm = Camera.getCameraPermissionsAsync();
  let [dataScanned, setDataScanned] = useState([]);
  let returnScan = true;

  // requestPermission();
  // console.log(perm);

  // if (!perm) 
  //   requestPermission();


  // if (!perm.granted) 
  //   requestPermission();

  // console.log(getAvailablePictureSizesAsync(ratio))

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  function scanned(type, data) {
    console.log(type, data);
    setDataScanned([data, ...dataScanned]);
    console.log(JSON.stringify(dataScanned))
    returnScan = false;
    setScan(true);

  }

  if (!scan || returnScan) {
    return (
      <View style={styles.container}>
        <Camera autoFocus style={styles.camera} type={type}
          barCodeScannerSettings={{
            barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
          }}

          onBarCodeScanned={({ type, data }) => { scanned(type, data) }}
        >
        </Camera>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  if(!returnScan){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Scanned Data</Text>
        <FlatList
          data={dataScanned}
          renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
        />
        <Button title="Scan Again" onPress={() => { returnScan }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    flex: 0.7,
    width: '100%',
    // height: '100%',
  },
  buttonContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,

    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
}); 