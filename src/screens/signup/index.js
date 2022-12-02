import SignUpContainer from "../../container/SignUpContainer";
import { styles } from "./index.style";
import { ScrollView, View } from "react-native";
import AppLogo from "../../component/AppLogo";
import { AppStyle } from "../../utils/commonstyle";
const SignUp =()=>{
    return(
        <View style={AppStyle.mainContainer}>
            <AppLogo/>
            <ScrollView>
            <SignUpContainer/>
            </ScrollView>
        </View>
    )
}
export default SignUp;