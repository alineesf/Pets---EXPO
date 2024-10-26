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
    sectionMainTitle: {
      fontSize : 40,
      textAlign: "center",
      paddingVertical : 10,
      color: "#1D0024",
      paddingHorizontal: 20
  },
  rectangle: {
    alignItems: 'center',
    width: 400,
    height: "65%",
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#dadada",
    marginTop: 20
  },
  text: {
    marginHorizontal: 35,
    fontSize: 20,
    color: "#eaeaea",
    letterSpacing: 1,

  }
})
export default styles