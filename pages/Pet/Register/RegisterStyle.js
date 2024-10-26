import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 80,
  },
    header: {
      top: -35,
      width: 550,
      height: '13%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#490092',
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
    marginTop: 50,
  },
  addText:{
    fontSize: 30,
    color: '#490092',
  }
})

export default styles;