import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 16,
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
        padding: 10,
        borderRadius: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    switchText: {
        fontSize: 20,
        color: '#bdbebd',
        flex: 1,
        marginRight: 10,
    }
})

export default styles;