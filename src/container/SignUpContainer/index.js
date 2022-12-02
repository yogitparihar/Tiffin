import { View,Text} from "react-native";
import AppButton from "../../component/AppButton";
import AppText from "../../component/ApptextInput";
import { styles } from "./index.style";
import { Ionicons,Entypo} from '@expo/vector-icons';
function SignUpContainer(){
    return(
        <View style={styles.contianer}>
            <Text style={styles.titleStyle}>SignUp Here</Text>
            <View style={styles.innerContainer}>
                <AppText
                placeHolder={'First Name'}
                icons={<Ionicons style={styles.iconstyle} name="person" size={24} color="black" />}
                />
                <AppText
                placeHolder={'Last Name'}
                icons={<Ionicons style={styles.iconstyle} name="person" size={24} color="black" />}
                />
                <AppText
                placeHolder={'Email Address'}
                icons={<Entypo style={styles.iconstyle} name="email" size={24} color="black" />}
                />
                <AppText
                placeHolder={'Password'}
                icons={<Entypo style={styles.iconstyle} name="lock" size={24} color="black" />}
                />
                <AppText
                placeHolder={'Confirm Password'}
                icons={<Entypo style={styles.iconstyle} name="lock" size={24} color="black" />}
                />
                <AppText
                placeHolder={'Phone Number'}
                icons={<Ionicons style={styles.iconstyle} name="ios-call" size={24} color="black" />}
                />
                <AppButton title={"SignUp"}/>
            </View>
        </View>
    )
}
export default SignUpContainer;