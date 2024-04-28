import { StyleSheet } from "react-native";
import { red } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      fontSize: 22,
      fontWeight: 'bold'
    },
    form:{
      flex:1,
      alignContent:"center",
      justifyContent:"center",
    },
    field:{
      width:300,
      height:40,
      margin:12,
      borderWidth:1,
      padding: 10,
    },
    map:{
      flex: 1,
      width: '100%'
    }
  });