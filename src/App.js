import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import foto from './assets/foto.png';
import Icon from 'react-native-vector-icons/Feather';

const App = () => {
  const handleRedeSocial = rede_social => {
    switch (rede_social) {
      case 'github':
        Alert.alert('Meu GitHub', 'https://github.com/julianalimaa');
        break;
      case 'linkedin':
        Alert.alert(
          'Meu LinkedIn',
          'www.linkedin.com/in/juliana-barros-48884a1a3',
        );
        break;
      case 'instagram':
        Alert.alert('Meu Instagram', 'https://www.instagram.com/ju.bgalvao/');
        break;
    }
  };

  return (
    <>
      <ScrollView>
        <View style={style.page}>
          <View style={style.container_cabecalho}>
            <Image source={foto} style={style.foto} />
            <Text style={style.nome}>JULIANA BARROS</Text>
            <Text style={style.funcao}>Desenvolvedora Front-End</Text>
            <View style={style.redes_sociais}>
              <TouchableOpacity onPress={() => handleRedeSocial('github')}>
                <Icon
                  name="github"
                  size={30}
                  style={style.redes_sociais_item}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon
                  name="linkedin"
                  size={30}
                  style={style.redes_sociais_item}
                  onPress={() => handleRedeSocial('linkedin')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon
                  name="instagram"
                  size={30}
                  style={style.redes_sociais_item}
                  onPress={() => handleRedeSocial('instagram')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.card}>
            <View style={style.card_header}>
              <Text style={style.card_header_text}>
                Experiências Profissionais
              </Text>
            </View>
            <View style={style.card_content}>
              <Text style={style.card_content_text}>ERA - Real State </Text>
              <Text style={style.card_content_text}>Hausz Brasil</Text>
              <Text style={style.card_content_text}>ID-Subsea</Text>
            </View>
          </View>
          <View style={style.card}>
            <View style={style.card_header}>
              <Text style={style.card_header_text}>Formações Acadêmicas</Text>
            </View>
            <View style={style.card_content}>
              <Text style={style.card_content_text}>
                Universidade Anhembi Morumbi
              </Text>
              <Text style={style.card_content_text}>
                FDSM - Faculdade de Direito do Sul de Minas
              </Text>
            </View>
          </View>
        </View>
        <View style={style.copyright}>
          <Text style={style.copyright_text}>
            © Copyright 2022 - Juliana Barros
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#e7e7e7',
    flex: 1,
    alignItems: 'center',
  },

  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  foto: {
    width: 200,
    height: 200,
    borderRadius: 125,
  },

  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },

  funcao: {
    fontSize: 18,
    marginBottom: 10,
    color: '#939393',
  },

  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  redes_sociais_item: {
    marginHorizontal: 20,
    marginVertical: 30,
  },

  card: {
    width: '60%',
    borderWidth: 2,
    borderColor: '#939393',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 10,
    backgroundColor: '#Fefefe',
  },

  card_header: {},

  card_header_text: {
    fontWeight: 'bold',
  },

  card_content: {
    width: '100%',
    marginVertical: 20,
  },

  card_content_text: {
    marginVertical: 5,
    marginHorizontal: 5,
  },

  copyright: {
    alignItems: 'center',
    marginVertical: 10,
  },

  copyright_text: {
    fontSize: 12,
  },
});

export default App;
