import  { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import { Ionicons }  from '@expo/vector-icons';

export default function PaginaLogin({navigation}) {
  const [CelularouEmail, setCelularouEmail] = useState('');
  const [Senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleNovaConta = () => {
    Alert.alert('Cadastrou');
  };

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const verificarTipo = () => {
    if (CelularouEmail.includes('@')) {
      navigation.navigate('Tela de Usuario');
    } else if (/^\d+$/.test(CelularouEmail)) {
      Alert.alert('Telefone válido');
    } else {
      Alert.alert('Insira os caracteres corretos');
    }
  };

   return(
     <View style={styles.container}><Text style={styles.text1}>Facebook</Text>
     <View style={styles.linha}></View>
     <Text>Número de Celular ou Email</Text>
       <TextInput  
                 value={CelularouEmail}
                 onChangeText={setCelularouEmail}
                 style={[styles.Input,{borderColor:'#A7BBEC'} ]}
                 
             />
             <Text>Senha</Text>
      <View>
        <TextInput
          value={Senha}
          onChangeText={setSenha}
          secureTextEntry={!mostrarSenha}
          style={styles.Input}
        />
        <TouchableOpacity onPress={toggleMostrarSenha} style={styles.eyeIcon}>
          <Ionicons name={mostrarSenha ? 'eye-off' : 'eye'} size={24} color="black" /> 
        </TouchableOpacity>
      </View>
              
   <Button
   title='Entrar'
   onPress={verificarTipo}
  
   />
 <Text style={styles.text2}>Esqueceu a senha?</Text>
    <View style={styles.containerLinhas}>
    <View style={styles.linha2}></View>
    <Text style={styles.text3}>ou</Text>
    <View style={styles.linha3}></View>
    </View>
<View style={styles.botaoCadastro}>
    <TouchableOpacity
        onPress={handleNovaConta}
        style={[styles.button, styles.botaoPequeno]}
      >
        <Text style={styles.textoBotao}>Criar nova conta</Text>
      </TouchableOpacity>
      </View>
     <View style={styles.textosFinais}><Text style={styles.text4}>Português(Brasil)</Text>
      <Text style={styles.text5}>Mais idiomas...</Text>
      </View>
     </View>)
    
 }
  
 const styles = StyleSheet.create({
  Input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    borderColor:'#94CBE7'
    
  },

  container: {
    width:'100%',
  
  },
  text1: {
textAlign:'center',
marginTop:'-1%',
marginBottom:'3%'
  },
  linha: {
 backgroundColor:'gray',
  width:'100%',
  height:1
   
},
text2: {
color:'#2B8EC0'
},
containerLinhas: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
linha2: {
backgroundColor:'gray',
  width:'35%',
  height:1,
  marginTop:'10%',
 

},
linha3: {
    backgroundColor:'gray',
      width:'35%',
      height:1,
      marginTop:'10%',
     
    
    },
text3: {
marginTop:'8%',
marginHorizontal:'2%'
},
botaoCadastro: {
marginTop: 20, 
alignItems: 'center',


    },
    
button: {
    backgroundColor:'#3CBB30',
   
},

botaoPequeno: {
    width: '45%',
    height: 40,

},
textoBotao: {
textAlign: 'center',
color:'white',
fontSize:20,
padding:5
},

textosFinais: {
marginTop:'2%',
padding:'2%'
},
text4: {
color:'black',
marginLeft:'5%'
},
text5: {
color:'#2B8EC0',
marginTop:'5%'
},

  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: '50%', 
    transform: [{ translateY: -12 }], 
  },

});