import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      justifyContent: 'flex-start',
      alignItems: 'center',
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
    title: {
        fontSize : 30,
        textTransform : "uppercase",
        textAlign: "center",
        color : "#ffff"
    },
      header: {
        top: -35,
        width: 550,
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#490092',
    },
    headerText: {
        fontSize: 40,
        color: 'white',
        marginTop: 50
    },
    sectionMainTitle: {
        fontSize : 40,
        textAlign: "center",
        paddingVertical : 10,
        color : "#1D0024"
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
    sectionTitle: {
        alignSelf: 'flex-start',
        paddingLeft: 70,
        fontSize: 25,
        letterSpacing: 0.33,
        fontWeight: '500',
        color: 'white',
        marginTop: 30
    },
      switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 0,
        paddingHorizontal: 65,
        borderRadius: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#6a6a6a',
    },
    switchText: {
        fontSize: 20,
        color: '#bdbebd',
        flex: 1,
        marginLeft: -10,
        marginRight: 10,
        marginBottom: 20,
        marginTop: 5
    }
})
export default styles