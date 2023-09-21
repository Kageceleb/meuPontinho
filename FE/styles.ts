import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map:{
      flex: 1,
      width:'100%'
    },
    info:{
      flexDirection:'column',
      width:'100%',
      height:75,
      alignItems:'center',
      textAlign:'center',
      fontWeight: 'bold',
      textAlignVertical:'bottom',
      backgroundColor:'#6a5acd',
      fontSize:25,
    },
    text:{
      flexDirection:'column',
      width:'100%',
      height:35,
      alignItems:'center',
      textAlign:'center',
      fontWeight: 'bold',
      textAlignVertical:'bottom',
      backgroundColor:'#708090',
      fontSize:20,
    },
  });
  