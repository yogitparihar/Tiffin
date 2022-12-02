import { View } from "react-native";
import AppLogo from "../../component/AppLogo";
import LoginContainer from "../../container/LoginContainer";
import { AppStyle } from "../../utils/commonstyle";
import { useNavigation } from "@react-navigation/native";
function Login(){
    const Navigation=useNavigation()
    return(
        <View style={AppStyle.mainContainer}>
            <AppLogo/>
            <LoginContainer navigation={Navigation}/>
        </View>
    )
}
export default Login;