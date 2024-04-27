import { Button, View } from "react-native";
import DrawerRoutes from "../routes/drawer.routes";

export function Form() {
    return (
        <View>
            <Button
                title="Logar"
            
            onPress={DrawerRoutes}
            />
        </View>
    )
}