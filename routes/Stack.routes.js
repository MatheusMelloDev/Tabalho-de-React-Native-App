import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "../Screens/HomeScreen";
import PaginaLogin from '../Screens/PaginaLogin';
import AfterLogin from '../Screens/AfterLogin';
import Perfil from '../Screens/Perfil';

const { Navigator, Screen } = createStackNavigator();

export  function Stack() {
    return (
        <Navigator initialRouteName='Página Inicial'>
            <Screen
                name='Página Inicial'
                component={HomeScreen}
                options={{
                    title: '',
                    headerTransparent:true,
                    headerShown:false
                  }}
        />
            <Screen
                name='Pagina de Login'
                component={PaginaLogin}
                options={{
                    title: '',
                    headerTransparent:true,
                    headerShown:false
                  }}
                 
            />
           
         
             <Screen
                name='Tela de Usuario'
                component={AfterLogin}
                options={{
                    title: '',
                    headerTransparent:true,
                    headerShown:false
                  }}
              
            />
             <Screen
                name='Perfil'
                component={Perfil}
                options={{
                    title: '',  
                    headerTransparent:true,
                    headerShown:false
                  }}
            />
        </Navigator>
    )
}