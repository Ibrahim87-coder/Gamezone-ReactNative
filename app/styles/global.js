import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: 'white'
  },
  titleText: {
    fontSize: 18,
    color: '#333'
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center'
  }
});

export const images = {
  ratings: {
    '1': require('../assets/images/rating_1.png'),
    '2': require('../assets/images/rating_2.png'),
    '3': require('../assets/images/rating_3.png'),
    '4': require('../assets/images/rating_4.png'),
    '5': require('../assets/images/rating_5.png')
  }
}