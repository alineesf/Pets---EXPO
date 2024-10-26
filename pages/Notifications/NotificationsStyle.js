import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 16,
    },
    title: {
        fontSize : 30,
        textTransform : "uppercase",
        textAlign: "center",
        paddingVertical : 40,
        color : "#ffff"
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 10,
        backgroundColor: '#8D3FE6',
        position: 'absolute',
        bottom: 0,
        width: '110%',
        height: '9%',
      },
      tabIconActive: {
        color: '#490092',
      },
      text: {
        fontSize : 50,
        color: 'white', // Cor do texto
        textAlign: "center",
        top: '15%'
    },
    image: {
      width: 320, // Largura da imagem
      height: 500, // Altura da imagem
      marginBottom: 20, // Espaçamento entre a imagem e o texto
      top: '20%'
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    borderRadius: 20,
    width: 450,
    height: 60,
    backgroundColor: '#490092',
    marginTop: 150,
    elevation: 4,
    shadowColor: '#17C3CE59'
  },
  addText:{
    fontSize: 30,
    color: 'white',
  },
})
export default styles