import { TextInput, View } from "react-native";
import { styles } from "./index.style";
const AppText =(props)=>{
    return(
        <View style={styles.textcontainer}>
            {props.icons}
          <TextInput
            style={styles.inputtext}
            placeholder={props.placeHolder}
            maxLength={props.Length}
            keyboardType={props.KeyBoardType}
            autoCapitalize={props.AutoCapitalize}
            secureTextEntry={props.SecureText}
            onChangeText={(text)=>{props.Onchange(text)}}
          />
          {props.eyeicon}
        </View>

    )
}
export default AppText;