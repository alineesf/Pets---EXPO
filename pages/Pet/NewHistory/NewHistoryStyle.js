import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: '245%',
  },
    header: {
      top: -35,
      width: 550,
      height: '7%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#490092',
      elevation: 100,
      shadowColor: 'black'
  },
  headerText: {
      fontSize: 40,
      color: 'white',
      marginTop: 50
  },
  backIcon: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 10,
    paddingLeft: 15
},
backIconView: {
    alignItems: 'flex-start',
    paddingLeft: 15
},
profileAvatar: {
    marginTop:-40,
    width: 230,
    height: 230,
    borderRadius: 999,
    marginBottom: 25
  },
  input: {
    width: '85%',
    height: 52,
    borderRadius: 13,
    marginBottom: 10,
    paddingHorizontal: 20,
    backgroundColor: '#e3f2fd',
    marginTop: 10,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 17,
    marginTop: 20,
    color: '#d0d0d0',
    paddingLeft: '9%'
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  inputContainer: {
    flex: 1,
    marginRight: 0,
    alignItems: 'center'
  },
  inputDuo: {
    width: '70%',
    height: 52,
    paddingHorizontal: 20,
    borderRadius: 13,
    marginBottom: 10,
    backgroundColor: '#e3f2fd',
    marginTop: 10,
  },
  labelDuo: {
    alignSelf: 'flex-start',
    fontSize: 17,
    marginTop: 20,
    color: '#d0d0d0',
    paddingLeft: '16%'
  },
  inputPicker: {
    alignSelf: 'center',
    width: '84%',
    height: 52,
    borderRadius: 13,
    marginBottom: 10,
    paddingHorizontal: 20,
    backgroundColor: '#e3f2fd',
    marginTop: 10,
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    paddingLeft: 48,
    marginTop: 45

  },
  checkboxText: {
    fontSize: 20,
    color: 'white',
    paddingRight: 50

  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    borderRadius: 999,
    width: 250,
    height: 60,
    backgroundColor: 'white',
    marginTop: 70,
  },
  addText:{
    fontSize: 30,
    color: '#490092',
  },
  sectionMainTitle: {
    fontSize : 40,
    textAlign: "center",
    paddingVertical : 0,
    color : "#1D0024",
    marginTop: 20,
    marginBottom: 10,
},
  inputOBS: {
    width: '85%',
    height: '10%',
    borderRadius: 13,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 0,
    backgroundColor: '#e3f2fd',
    marginTop: 10,
    textAlignVertical: 'top',
  },
  labelOBS: {
    alignSelf: 'flex-start',
    fontSize: 21,
    marginTop: 20,
    color: '#d0d0d0',
    paddingLeft: '9%'
  },
  checkboxContainerOBS: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    paddingLeft: 48,
    marginTop: 20,
    marginBottom: 20,

  },
  ButtonOptions: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    borderRadius: 999,
    width: '70%',
    height: 60,
    backgroundColor: 'white',
    marginTop: 50,
  },
  inputContainerTelephone: {
    width: '85%',
    height: '3%', // Ajuste conforme necessário
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative', // Para posicionamento absoluto do ícone
    borderRadius: 13,
    backgroundColor: '#e3f2fd',
    marginBottom: 10,
    paddingHorizontal: 15,
    marginTop: 10,
},
inputTelephone: {
    flex: 1, // Ocupar o espaço restante no container
    height: '100%',
    paddingRight: 40, // Adicionar espaço para o ícone
    borderRadius: 13,
    backgroundColor: '#e3f2fd',
  
},
icon: {
    position: 'absolute',
    right: 15, // Posição à direita
    height: 28,
    width: 28,
},
  labelTelephone: {
    alignSelf: 'flex-start',
    fontSize: 17,
    marginTop: 20,
    color: '#d0d0d0',
    bottom: 16,
    paddingLeft: '0%'
  },
  AddContainerOptions: {
    width: '60%',
    marginBottom: 10,
    marginTop: 10,
},
AddOptions: {
    flexDirection: 'row', // Alinhar ícone e texto em linha
    alignItems: 'center',
    justifyContent: 'space-between', // Distribuir o texto e ícone
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#e3f2fd',
    borderRadius: 13,
    height: 60,
    borderRadius: 999,
    marginTop: 10
},
optionText: {
    fontSize: 16,
    color: '#333',
    marginLeft: '20%',
},
iconOptions: {
  position: 'absolute',
  right: 15, // Posição à direita
  height: 30,
  width: 30,
  marginRight: '2%'
},
})

export default styles;