import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, Text, View, Image, ActivityIndicator, TextInput, Switch, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './src/Global';
import verifyColorNameGroup from './src/Group';

export default function App() {

  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [numberFiber, setNumberFiber] = useState(1)

  if (numberFiber > 144) {
    setNumberFiber(144);
  }

  numberFiber < 1 ? setNumberFiber(1) : numberFiber;

  function verifyGroup(val) {
    if (val <= 12) {
      return 1
    } else if (val > 12 && val <= 24) {
      return 2
    } else if (val > 24 && val <= 36) {
      return 3
    } else if (val > 36 && val <= 48) {
      return 4
    } else if (val > 48 && val <= 60) {
      return 5
    } else if (val > 60 && val <= 72) {
      return 6
    } else if (val > 72 && val <= 84) {
      return 7
    } else if (val > 84 && val <= 96) {
      return 8
    } else if (val > 96 && val <= 108) {
      return 9
    } else if (val > 108 && val <= 120) {
      return 10
    } else if (val > 120 && val <= 132) {
      return 11
    } else if (val > 132 && val <= 144) {
      return 12
    }
  }


  const fiberColorHexa = [
    '#00B050',
    '#FFFF00',
    '#FFFFFF',
    '#00A7E4',
    '#F22300',
    '#692E98',
    '#916130',
    '#F23091',
    '#000000',
    '#797979',
    '#F29101',
    '#01F0F2'
  ]

  const fiberColorHexaWithName = [
    'Verde',
    'Amarelo',
    'Branco',
    'Azul',
    'Vermelho',
    'Violeta',
    'Marrom',
    'Rosa',
    'Preto',
    'Cinza',
    'Laranja',
    'Acqua'
  ]

  //verify fiber color
  function verifyFiber(val) {
    if (val <= 12) {
      return fiberColorHexa[val - 1]
    } else if (val > 12 && val <= 24) {
      return fiberColorHexa[val - 13]
    } else if (val > 24 && val <= 36) {
      return fiberColorHexa[val - 25]
    } else if (val > 36 && val <= 48) {
      return fiberColorHexa[val - 37]
    } else if (val > 48 && val <= 60) {
      return fiberColorHexa[val - 49]
    } else if (val > 60 && val <= 72) {
      return fiberColorHexa[val - 61]
    } else if (val > 72 && val <= 84) {
      return fiberColorHexa[val - 73]
    } else if (val > 84 && val <= 96) {
      return fiberColorHexa[val - 85]
    } else if (val > 96 && val <= 108) {
      return fiberColorHexa[val - 97]
    } else if (val > 108 && val <= 120) {
      return fiberColorHexa[val - 109]
    } else if (val > 120 && val <= 132) {
      return fiberColorHexa[val - 121]
    } else if (val > 132 && val <= 144) {
      return fiberColorHexa[val - 133]
    } else {
      return "Máximo de fibra é 144"
    }
  }
  //verify fiber name
  function verifyNameFiber(val) {
    if (val <= 12) {
      return fiberColorHexaWithName[val - 1]
    } else if (val > 12 && val <= 24) {
      return fiberColorHexaWithName[val - 13]
    } else if (val > 24 && val <= 36) {
      return fiberColorHexaWithName[val - 25]
    } else if (val > 36 && val <= 48) {
      return fiberColorHexaWithName[val - 37]
    } else if (val > 48 && val <= 60) {
      return fiberColorHexaWithName[val - 49]
    } else if (val > 60 && val <= 72) {
      return fiberColorHexaWithName[val - 61]
    } else if (val > 72 && val <= 84) {
      return fiberColorHexaWithName[val - 73]
    } else if (val > 84 && val <= 96) {
      return fiberColorHexaWithName[val - 85]
    } else if (val > 96 && val <= 108) {
      return fiberColorHexaWithName[val - 97]
    } else if (val > 108 && val <= 120) {
      return fiberColorHexaWithName[val - 109]
    } else if (val > 120 && val <= 132) {
      return fiberColorHexaWithName[val - 121]
    } else if (val > 132 && val <= 144) {
      return fiberColorHexaWithName[val - 133]
    }
  }
  return (
    <KeyboardAvoidingView behavior='position'  enabled>
      <SafeAreaView style={styles.container}>

        <View style={styles.header} >
          <View>
            <Image
              source={require('./assets/cxnetlogo.png')}
              style={styles.imageLogo} />
          </View>
        </View>

        <View style={styles.wrapswitch}>
          <View>
            <Text
              style={{
                color: '#B4B8BF',
                fontSize: 23,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >{isEnabled ? '12' : '06'}
            </Text>
            <Switch
              trackColor={{ false: '#767577', true: '#B4B8BF' }}
              thumbColor={isEnabled ? '#00B050' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        <View style={styles.wrapform}>
          <TextInput
            value={numberFiber}
            onChangeText={setNumberFiber}
            style={{
              fontSize: 90,
              fontWeight: 'bold',
              color: '#B4B8BF',
              width: 200,
              textAlign: 'center',
              borderBottomColor: '#f5f5f5',
              opacity: 0.3,
              borderBottomWidth: 1,

            }}
            editable
            maxLength={3}
            keyboardType='numeric'
          />
        </View>

        <LinearGradient
          colors={['rgba(0,0,0,0.99)', numberFiber == '' ? 'black' : numberFiber > 0 && numberFiber <= 144 ? verifyFiber(numberFiber) : 'black']}
          style={styles.content}
        >
          <Text style={{ fontSize: 24, color: '#fff', marginBottom: 5, }}>Fibra</Text>
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 200,
            height: 200,
            borderRadius: 100,
            borderColor: verifyFiber(numberFiber),
            borderWidth: 10,
          }}>
            <Text style={{ fontSize: 90, color: '#fff', fontWeight: 'bold' }}>{numberFiber ? numberFiber : <ActivityIndicator size="large" color="#00ff00" />}</Text>
          </View>

          <View style={styles.wrapcolor}>
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#fff', fontSize: 18 }}>Fibra: {verifyNameFiber(numberFiber)}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#fff', fontSize: 18 }}>Grupo: {verifyColorNameGroup(numberFiber)[0]}</Text>
              </View>
            </View>

            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: '#fff', marginBottom: 4, fontSize: 18 }}>Grupo</Text>
              <View style={{
                fontSize: 18,
                width: 125,
                height: 125,
                borderWidth: 10,
                borderColor: verifyColorNameGroup(numberFiber)[1],
                borderRadius: 62.5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Text style={{ fontSize: 70, fontWeight: 'bold', color: '#fff' }}>{numberFiber == '' ? <ActivityIndicator size="large" color="#00ff00" /> : verifyGroup(numberFiber)}</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
        <StatusBar style="auto" />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

