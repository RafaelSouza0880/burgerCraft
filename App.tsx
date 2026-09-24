import { Component, useState } from 'react';
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Outfit_400Regular,
  Outfit_700Bold,
  Outfit_800ExtraBold
} from '@expo-google-fonts/outfit';
import Card from './components/Card'

// Mantém a tela de splash visível enquanto as fontes são carregadas
SplashScreen.preventAutoHideAsync();


export default function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSendMessage = () => {
    if (name.trim() === '') {
      setMessage('Por favor, informe seu nome');
      setIsSuccess(false);
    } else {
      setMessage(`Olá, ${name}! Seu pedido foi recebido.`);
      setIsSuccess(true); 
      setName('');
    }
  }

  const [fontsLoaded] = useFonts({
    Outfit_400Regular,
    Outfit_700Bold,
    Outfit_800ExtraBold,
  });

  // Aguarda o carregamento das fontes
  if (!fontsLoaded) {
    return null;
  }

  // Esconde a tela de splash após o carregamento
  SplashScreen.hideAsync();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
      keyboardVerticalOffset={30}
    >
      <ScrollView>

        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Burger Craft</Text>
            <Text style={styles.headerSubtitle}>Sabor artesanal de verdade</Text>
          </View>
          <Image style={styles.profilePicture} source={require('./assets/pfp.jpg')} />
        </View>

        <View style={styles.container}>

          <View style={styles.greeting}>
            <Text style={styles.greetingTitle}>Bateu a fome?</Text>
            <Text style={styles.greetingSubTitle}>Escolha seu burger artesanal de hoje</Text>
          </View>

          <View style={styles.hero}>
            <Image style={styles.imageHero} source={require('./assets/card1.jpg')}></Image>

            <View style={styles.contentHero}>

              <Text style={styles.tagHero}>DESTAQUE DA CASA</Text>
              <Text style={styles.titleHero}>Smash Duplo Cheddar</Text>
              <Text style={styles.descriptionHero}>Dois blends de 100g, queijo cheddar derretido e molho especial</Text>

              <View style={styles.x}>
                <Text style={styles.priceHero}>R$ 34,90</Text>
                <View style={styles.buttonHero}>
                  <Image source={require('./assets/plus.png')}></Image>
                </View>
              </View>
            </View>
          </View>

          <Text style={styles.menuTitle}>Nossos Burguers</Text>

          <View style={styles.menu}>

            <Card img={require('./assets/card2.jpg')} name="Classic Burger" description="Pão brioche, blend 160g e queijo prato" price="R$ 26,00" />
            <Card img={require('./assets/card3.jpg')} name="Bacon Crispy" description="Blend 160g com fatias crocantes de bacon" price="R$ 32,00" />
            <Card img={require('./assets/card4.jpg')} name="Chicken Crunchy" description="Frango empanado com maionese da casa" price="R$ 28,50" />
            <Card img={require('./assets/card5.jpg')} name="Veggie Grill" description="Hambúrguer de grão de bico e cogumelos" price="R$ 29,90" />

          </View>

          <View style={styles.order}>
            <Text style={styles.titleOrder}>Como podemos te chamar?</Text>
            <Text style={styles.subtitleOrder}>Insira seus dados para agilizar sua retirada ou entrega</Text>
            <TextInput
              style={styles.inputOrder}
              placeholder='Digite seu nome'
              value={name}
              onChangeText={setName}
            >
            </TextInput>
            <TouchableOpacity style={styles.buttonOrder} onPress={handleSendMessage}>
              <Text style={styles.buttonOrderText}>Fazer meu pedido</Text>
            </TouchableOpacity>

            {message !== '' && (
              <View style={styles.responseContainer}>
                {isSuccess && (
                  <Image 
                    source={require('./assets/check.png')} // Certifique-se de colocar um check.png na pasta assets
                    style={styles.checkIcon} 
                  />
                )}
                <Text style={styles.messageText}>
                  {message}
                </Text>
              </View>
            )}
          </View>

        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Burger Craft • Sabor artesanal de verdade</Text>
        </View>


      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA'
  },

  header: {
    width: '100%',
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerTitle: {
    fontSize: 22,
    fontFamily: 'Outfit_800ExtraBold',
    color: "#1e1e1e"
  },

  headerSubtitle: {
    fontSize: 14,
    color: "#6C757D",
    marginTop: 4
  },

  profilePicture: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderColor: "#E9ECEF",
    borderWidth: 2
  },

  content: {
    padding: 24
  },

  greeting: {
    paddingHorizontal: 24,
  },

  greetingTitle: {
    fontSize: 32,
    fontFamily: 'Outfit_800ExtraBold',
    color: "#1e1e1e"
  },

  greetingSubTitle: {
    fontSize: 15,
    fontWeight: "400",
    color: "#6C757D"
  },

  hero: {
    margin: 20,
    marginBottom: 32,
    borderRadius: 24,
    backgroundColor: "#ffffffff",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    elevation: 3,
  },

  imageHero: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },

  contentHero: {
    margin: 20
  },

  tagHero: {
    color: "#E65100",
    fontSize: 11,
    fontWeight: 700,
    backgroundColor: "#FFF3E0",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
    alignSelf: "flex-start",
    marginBottom: 8
  },

  titleHero: {
    fontFamily: 'Outfit_800ExtraBold',
    fontSize: 22,
    marginBottom: 8,
    color: "#1e1e1e"
  },

  descriptionHero: {
    color: "#6C757D",
    fontSize: 13,
    fontWeight: 400,
    marginBottom: 20
  },

  x: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  priceHero: {
    fontFamily: 'Outfit_800ExtraBold',
    fontSize: 24,
    color: "#E65100"
  },

  buttonHero: {
    backgroundColor: "#E65100",
    height: 36,
    width: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuTitle: {
    fontFamily: 'Outfit_800ExtraBold',
    fontSize: 20,
    margin: 20,
    marginTop: 0,
  },

  menu: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 14,
    margin: 20,
    marginBottom: 32
  },

  order: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 20,
    margin: 20,
    marginBottom: 36
  },

  titleOrder: {
    fontFamily: 'Outfit_800ExtraBold',
    fontSize:18,
    color: '#1e1e1e'
  },

  subtitleOrder: {
    fontWeight:400,
    fontSize:12,
    color: '#6C757D',
    marginBottom: 16
  },

  inputOrder: {
    backgroundColor: '#E9ECEF',
    padding: 16,
    borderRadius: 12,
    width: '100%',
    height: 48,
    marginBottom: 16
  },

  buttonOrder: {
    backgroundColor: '#E65100',
    width: '100%',
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16
  },

  buttonOrderText: {
    fontSize: 15,
    fontWeight: 700,
    color: '#ffffff',
  },

  responseContainer:{
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#E8F5E9',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12
  },

  checkIcon:{
    width: 20,
    height: 20,
    marginRight: 8
  },

  messageText:{
    color: '#2E7D32',
    fontSize: 13,
    fontWeight: 600
  },

  footer: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom:48
  },

  footerText: {
    color: '#6C757D',
    fontSize: 11,
    fontWeight: 500,
    textAlign: 'center'
  }
})
