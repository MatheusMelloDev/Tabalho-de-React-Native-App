import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Feather } from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';


export default function AfterLogin({navigation}) {
    const [pesquisa, setPesquisa] = useState('');


    return (
        <GestureHandlerRootView style={styles.container}>
            {/* Menu superior */}
            <View style={styles.menuSuperior}>
                <Text style={styles.text1}>facebook</Text>
                <FontAwesomeIcon name="plus" size={30} color="#4267B2" style={{ marginLeft: '40%', marginRight:'3%' }} />
                <FontAwesomeIcon name="search" size={30} color="#4267B2"  style={{ marginRight:'2%' }} />
                <FontAwesomeIcon name="bars" size={30} color="#4267B2" />
            </View>
            {/* Ícones de navegação */}
            <View style={styles.iconContainer}>
                <FontAwesomeIcon name="home" size={30} color="#4267B2" />
                <MaterialIcons name="people" size={30} color="gray" />
                <Feather name="message-circle" size={30}   color="gray"/>
                <FontAwesomeIcon name='bell' size={30} color='gray'/>
                <FontAwesomeIcon name='tv' size={30} color='gray'/>
                <FontAwesomeIcon name="users" size={30}   color="gray"/>
            </View>
            <View style={styles.linha1}></View>
            {/* Campo de pesquisa e ícone do usuário */}
            <View style={styles.containerNaveg}>
                <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                    <FontAwesomeIcon name="user" size={30}   color="gray"/>
                </TouchableOpacity>
                <TextInput
                    value={pesquisa}
                    onChangeText={setPesquisa}
                    style={[styles.botaoDePesquisa,{borderColor:'#A7BBEC'} ]}
                />
                <View style={styles.fotoContainer}>
                    <FontAwesomeIcon name="camera" size={30} color="gray" style={styles.icon}/>
                    <Text style={styles.iconLabel}>Foto</Text>
                </View>
            </View>
            {/* Espaços para imagens */}
            <View style={styles.postContainer}>
                <View style={styles.imageArea}>
                    <FontAwesomeIcon name="plus" size={30} color="gray" style={styles.icon}/>
                    <Text style={styles.iconLabel}>Adicionar ao Story</Text>
                </View>
                <View style={styles.imageArea}>
                   
                    <Image source={{ uri: 'https://i.pinimg.com/564x/17/6a/db/176adb9bf0b293e5957339c3ed4e89c2.jpg' }} style={styles.postImage} />
                </View>
            </View>
            {/* Publicação */}
            <View style={styles.postContent}>
    <Text style={styles.postTitle}>AdoroCinema</Text>
    <Image source={{ uri: 'https://lumiere-a.akamaihd.net/v1/images/encanto_ka_bpo_pay1_ee2c2e0c.jpeg?region=0%2C0%2C1080%2C1350' }} style={styles.postImage} />
</View>

        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#F0F2F5',
    },
    menuSuperior: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    text1: {
        color: '#4267B2',
        fontSize: 25,
        fontWeight: 'bold',
        flex: 1,
    },
    iconContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    linha1: {
        width:'100%',
        height:8,
        backgroundColor:'#F0F2F5',
    },
    containerNaveg: {
        marginTop:'3%',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    botaoDePesquisa: {
        flex: 1,
        height: 40,
        borderColor: '#A7BBEC',
        borderWidth: 1,
        borderRadius: 20,
        paddingLeft: 10,
        marginLeft: 10,
    },
    fotoContainer: {
        alignItems: 'center', 
    },
    iconLabel: {
        fontSize: 10,
        color: 'gray',
    },
    icon: {
        marginHorizontal: 5, 
    },
    postContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#fff',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    imageArea: {
        width: '45%',
        height: 200, 
        backgroundColor: '#e9ecef', 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    postImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', 
        borderRadius: 10,
    },
    postContent: {
        marginTop: 10,
        backgroundColor: '#fff',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    postTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    postText: {
        fontSize: 14,
    },
});
