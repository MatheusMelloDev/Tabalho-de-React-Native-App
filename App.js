import { View,StyleSheet } from 'react-native';
import Rotas from './routes/index'
import  AfterLogin  from './Screens/AfterLogin';
import HomeScreen from './Screens/HomeScreen';
import Perfil from './Screens/Perfil';
import PaginaLogin from './Screens/PaginaLogin';

export default function App() {
  return (

<Rotas />
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '10%',
    alignItems: 'center',
   marginLeft:'1%',
    marginRight:'1%',
  
},
})