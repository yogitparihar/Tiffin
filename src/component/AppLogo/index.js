import { View,Image} from "react-native";
import { styles } from "./index.style";
function AppLogo(){
    return(
    <View style={styles.imageStyle}>
        <Image
            source={require('../../assets/applogo.png')}
        />
    </View>
    )
}
export default AppLogo;