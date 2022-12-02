import { Text, TouchableOpacity, View } from "react-native"
import { AppStyle } from "../../utils/commonstyle";

const AppButton=(props)=>{
    return(
            <TouchableOpacity style={AppStyle.buttonstyle} onPress={props.onPress}>
                <Text style={AppStyle.buttontext}>{props.title}</Text>
            </TouchableOpacity>
    )
}
export default AppButton;
