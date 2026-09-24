import { StyleSheet, Text, View, Image, ImageSourcePropType } from "react-native";
type CardProps = {
    img: ImageSourcePropType;
    name: string;
    description: string;
    price: string;
}

export default function Card({ img, name, description, price }: CardProps) {
    return (
        <View style={styles.card}>
            <Image style={styles.imageCard} source={img} />
            <View style={styles.contentCard}>
                <Text style={styles.titleCard}>{name}</Text>
                <Text style={styles.descriptionCard}>{description}</Text>
                <Text style={styles.priceCard}>{price}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    elevation: 3,
    width: '48%'
  },

  imageCard: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    width: '100%',
    height: 110
  },

  contentCard: {
    padding: 14
  },

  titleCard: {
    fontFamily: 'Outfit_700Bold',
    fontSize: 16,
    color: '#1E1E1E'
  },

  descriptionCard: {
    fontWeight: 400,
    fontSize: 11,
    color: '#6C757D',
    marginBottom: 8
  },

  priceCard: {
    fontFamily: 'Outfit_700Bold',
    fontSize: 15,
    color: '#E65100'
  },

})