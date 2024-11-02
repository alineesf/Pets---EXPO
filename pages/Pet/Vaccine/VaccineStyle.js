import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: '35%',
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
    height: '60%',
    width: '90%',
    margin: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 40,
    borderColor: '#bdbdbd',
    borderWidth: 1,
    alignItems: 'center',
  },
  text: {
    alignSelf: 'flex-start',
    paddingLeft: 40,
    marginTop: 20,
    fontSize: 20,
    color: 'white'
  },
  rectangleVaccine: {
    height: '25%',
    width: '90%',
    margin: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
    borderRadius: 50,
    borderColor: '#bdbdbd',
    borderWidth: 1,
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
},
vaccineImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
},
line: {
    height: 1,
    backgroundColor: '#fff',
    width: '100%',   
    marginTop: 5,       
},
line2: {
    height: 1,
    backgroundColor: '#a0a0a0',
    width: '90%',   
    marginTop: 15,       
},
row: {
    flexDirection: "row",
    alignSelf: 'flex-start',
    marginTop: 20,
},
rectangleVermifuge: {
    height: '14%',
    width: '90%',
    margin: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.15)', 
    borderRadius: 30,
    borderColor: '#bdbdbd',
    borderWidth: 1,
    flexDirection: 'row', 
    alignItems: 'center',
    padding: 10,
    position: 'relative',
},
vermifugeImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
},
textContainer: {
    flex: 1,               
},
textVermifuge: {
    marginBottom: 5, 
    alignSelf: 'flex-start',
    paddingLeft: 40,
    fontSize: 20,
    color: 'white'
},
rectangleVermifuge2: {
    height: '80%',
    width: '40%',
    margin: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
    borderRadius: 50,
    borderColor: '#bdbdbd',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
}
})

export default styles;