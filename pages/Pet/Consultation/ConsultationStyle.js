import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: '40%',
  },
    header: {
      flex: 1,
      top: 0,
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
      marginTop: 50,
      marginBottom: 30
  },
  backIcon: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 30,
    paddingLeft: 15
},
backIconView: {
    alignItems: 'flex-start',
},
rectangle: {
  height: '90%',
  width: '90%',
  margin: 20,
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  borderRadius: 40,
  borderColor: '#bdbdbd',
  borderWidth: 1,
  alignItems: 'center',
},
sectionMainTitle: {
  fontSize : 30,
  textAlign: "center",
  paddingVertical : 10,
  color : "#1D0024",
  marginTop: 20
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
  marginTop: 10,
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
sectionMainTitle2: {
  fontSize : 30,
  textAlign: "center",
  paddingVertical : 10,
  color : "#1D0024",
  marginTop: 20,
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
addButton: {
  alignItems: 'center',
  justifyContent: 'center',
  bottom: 0,
  borderRadius: 999,
  width: 250,
  height: 60,
  backgroundColor: 'white',
  marginTop: 50,
},
addText:{
  fontSize: 30,
  color: '#490092',
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