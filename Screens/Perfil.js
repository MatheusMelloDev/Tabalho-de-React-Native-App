import { View, Text, Image, Linking, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Perfil() {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://media.licdn.com/dms/image/D4E03AQGSaEoeXjb3Zg/profile-displayphoto-shrink_400_400/0/1710421123859?e=1720051200&v=beta&t=pZzj08cXONlncdAOxuCGn8sr0K4otxSOODi2NSIMgAU' }} style={styles.profileImage} />
            <Text style={styles.name}>Matheus Mello</Text>
            <Text style={styles.profession}>Desenvolvedor em Formação Full Stack</Text>
            <Text style={styles.bio}>
                Iniciei minha jornada profissional no Lava Jato Pit Stop, onde desenvolvi habilidades essenciais ao lidar diretamente com o público. Posteriormente, atuei na Luma Service, em uma cervejaria da Bohemia, proporcionando-me valiosa experiência em um ambiente corporativo de grande porte. Na Housekit Casas Pré-Fabricadas, assumi o papel de Auxiliar Administrativo, onde aprendi a ser organizado e eficiente. Embora minha trajetória não tenha incluído experiência profissional em programação, estou dedicado a expandir meus conhecimentos e aplicá-los em desafios futuros. Atualmente, estou cursando um programa Full Stack do Serratec em parceria com o Senac, aprimorando minhas habilidades em desenvolvimento e ampliando meus conhecimentos técnicos. Busco oportunidades que me permitam contribuir para projetos inovadores.
            </Text>
            <View style={styles.linksContainer}>
                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/MatheusMelloDev')}>
                    <FontAwesome name="github" size={30} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/matheus-mello-a864a12a2/')}>
                    <FontAwesome name="linkedin" size={30} color="#0e76a8" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#4267B2',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    profession: {
        fontSize: 18,
        color: '#fff',
        marginTop: 5,
    },
    bio: {
        fontSize: 16,
        color: '#fff',
        marginTop: 10,
        textAlign: 'justify',
    },
    linksContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '40%',
        marginTop: 20,
    },
});
