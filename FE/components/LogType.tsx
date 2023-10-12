import { SafeAreaView, View, TouchableOpacity, Text, SectionList } from "react-native"
import { styles } from "../styles"


const DATA = [
    {
        title: 'Entrada',
        data: ["08:00"],
    },
    {
        title: 'saida para o Intervalo',
        data: ["12:00"],
    },
    {
        title: 'retorno do Intervalo',
        data:            ["12:15"],
    },
    {
        title: 'Saída',
        data: ["14:00"],
    },
];

export function LogType({ handleClose }) {

    return (
        <SafeAreaView style={{ flex: 1,  backgroundColor:"#DDD" }}>
            <TouchableOpacity style={{ flex: 1, zIndex: 9, backgroundColor:"#FFF" }} onPress={handleClose}></TouchableOpacity>
            <SectionList
            style={styles.secList}
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.actionButton}
                        onPress={() => { alert("seta o tipo de batida")}}
                    >
                        <Text style={styles.actionText}>{item}</Text>
                    </TouchableOpacity>
                )}

            />
        </SafeAreaView>

    )

}