import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      justifyContent: 'flex-start',
      paddingBottom: 0,
      flex: 1
    },
    scrollView: {
        flex: 1,
        alignItems: 'center',
        width: 50
      },
      contentContainer: {
        flexGrow: 1,
      },
      header: {
        top: -35,
        width: 550,
        height: '14%',
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
    sectionMainTitle: {
        fontSize : 34,
        textAlign: "center",
        paddingVertical : 20,
        color: "#eaeaea",
        paddingHorizontal: 30,
        marginBottom: 30,
       
        
    },
    sectionText: {
        fontSize: 25,
        textAlign: 'justify',
        color: '#d0d0d0',
        paddingHorizontal: 30,
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
      confirmtext: {
        fontSize : 25,
        textAlign: "center",
        marginTop:40,
        color: '#eaeaea'
      },
      buttonContainer: {
        flexDirection: 'row', // Coloca os itens lado a lado
        justifyContent: 'space-between', // Adiciona espaçamento entre os botões
        paddingHorizontal: 47,
        marginTop: 33
      },
      backButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        borderRadius: 999,
        width: 190,
        height: 60,
        backgroundColor: 'white',
        marginBottom: 0
      },
      backText:{
        fontSize: 30,
        color: '#490092',
      },
      deleteButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        borderRadius: 999,
        width: 190,
        height: 60,
        backgroundColor: 'white',
        marginBottom: 0
      },
      
      deleteText: {
        fontSize: 30,
        color: 'red',
      }

})

export default styles;