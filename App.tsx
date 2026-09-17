import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
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

        </View>


      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
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
    fontWeight: "800",
    color: "#2f2d2c"
  },

  headerSubtitle: {
    fontSize: 14,
    color: "#9b9b9b",
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
    fontWeight: "800",
    color: "#1e1e1e"
  },

  greetingSubTitle: {
    fontSize: 15,
    fontWeight: "400",
    color: "#6c757d"
  }
})
