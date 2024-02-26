import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#000',
      height:'100%',
    
    },
    header :{
      width:'100%',
      justifyContent:'flex-end',
      marginTop: 40,
    },
    imageLogo : {
      marginLeft:10,
      width:100,
      height: 40,
    },
    wrapswitch : {
      flexDirection : 'row',
      alignItems : 'center',
      marginTop:20,
      marginLeft:10,
    },
    wrapform : {
      alignItems:'center',
      marginBottom:10,
    },
    content : {
      padding:20,
      alignItems:'center',
      backgroundColor:'rgba(0,0,0)',
      borderTopLeftRadius:40,
      borderTopRightRadius:40,
      height:'100%',
    },
    wrapnumber : {
      alignItems:'center',
      justifyContent:'center',
      width:200,
      height:200,
      borderRadius: 100,
      borderColor:'#242C54',
      borderWidth:10,
    },
    wrapcolor : {
      width:'100%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      gap:10,
    },
    circlegroup : {
      width: 125,
      height: 125,
      borderWidth : 10,
      borderColor: '#ddd',
      borderRadius: 62.5,
      alignItems:'center',
      justifyContent:'center',
    }
  })

  export default styles;