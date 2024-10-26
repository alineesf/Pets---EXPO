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
        marginTop: 30
    },
    sectionTitle: {
      alignSelf: 'flex-start',
      paddingLeft: 60,
      fontSize: 20,
      letterSpacing: 0.33,
      fontWeight: '500',
      color: 'white',
      marginTop: 30
    },
    accountBox: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 15,
      margin: 20,
      height: 200,
      width: 450,
      justifyContent: 'center'
  },
  lineItem: {
      flexDirection: 'row',
      marginBottom: 14,
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
  },
  lineText: {
      marginLeft: 20,
      fontSize: 16,
      color: '#000',
      fontWeight: 'bold'
  },
  accountBoxSmall: {
    backgroundColor: 'white',
      borderRadius: 10,
      padding: 15,
      margin: 20,
      height: 150,
      width: 450,
      justifyContent: 'center'
  }
})
export default styles