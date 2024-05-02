
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function HomeScreen({navigation}) {


    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Facebook</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pagina de Login')}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4267B2',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%'
    },
    logo: {
        fontSize: 50,
        color: '#fff',
        marginBottom: 50,
    },
    button: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#4267B2',
    },
});

