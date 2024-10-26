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
      scrollContainer:{
        alignItems: 'center'
      },
      contentContainer: {
        flexGrow: 1,
      },
      header: {
        top: -35,
        width: 550,
        height: '12%',
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
        width: 190,
        height: 190,
        borderRadius: 999,
        marginBottom: 25
      },
      input: {
        width: '80%',
        height: 52,
        borderRadius: 13,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#e3f2fd',
        marginTop: 10,
      },
      label: {
        alignSelf: 'flex-start',
        fontSize: 17,
        marginTop: 20,
        color: 'white',
        paddingLeft: '10%'
      },
      addButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        borderRadius: 999,
        width: 250,
        height: 60,
        backgroundColor: 'white',
        marginBottom: 0
      },
      addText:{
        fontSize: 30,
        color: '#490092',
      },
      deleteButton:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        borderRadius: 0,
        width: "100%",
        height: 70,
        backgroundColor: 'white',
        marginBottom: 100
      },
      deleteText: {
        fontSize: 30,
        color: 'red',
      }
})
export default styles