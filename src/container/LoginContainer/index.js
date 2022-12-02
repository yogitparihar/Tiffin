import { Text, TouchableOpacity, View } from "react-native";
import AppText from "../../component/ApptextInput";
import { styles } from "./index.style";
import { Ionicons,Entypo} from '@expo/vector-icons';
import Checkbox from "expo-checkbox";
import AppButton from "../../component/AppButton";
import {useState} from "react"
function LoginContainer(props){
    const [isCheck,setIsCheck] = useState(false);
    const [email,setEmail] = useState('');
    console.log(email,password)
    const [passwordSecure, setPasswordSecure]=useState(true);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const checkValidation=()=>{
        if(email.trim().length<1){
            setError("please enter email")
        }else if(password===" "){
            setError("please enter password")
        } else
        alert("Successful")
    }
    return(
        <View style={styles.contianer}>
            <Text style={styles.titleStyle}>Login Here</Text>
            <View style={styles.innerContainer}>
                <Text>{error}</Text>
                <AppText
                    DefaultValue={email}
                    icons={<Entypo style={styles.iconstyle} name="email" size={24} color="black" />}
                    placeHolder={'Email '}
                    KeyBoardType={'email-address'}
                    AutoCapitalize={'none'}
                    Onchange={(text)=>setEmail(text)}
                />
                <AppText
                    icons={<Entypo style={styles.iconstyle} name="lock" size={24} color="black" />}
                    placeHolder={'Password'}
                    KeyBoardType={'number-pad'}
                    Length={10}
                    DefaultValue={password}
                    SecureText={passwordSecure}
                    Onchange={(value)=>setPassword(value)}
                    eyeicon={<Ionicons style={styles.eyeicon} name={passwordSecure?'eye-off':'eye'} size={24}
                    color="black" onPress={()=>passwordSecure?setPasswordSecure(false):setPasswordSecure(true)}/>}
                />
                <View style={styles.bottomcontainer}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Checkbox
                        value={isCheck}
                        onValueChange={setIsCheck}
                        />
                        <Text style={{left:10}}>Remember Me?</Text>
                    </View>
                    <View style={{left:60}}>
                        <TouchableOpacity>
                            <Text style={{textDecorationLine:'underline'}}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <AppButton title={'LOGIN'} onPress={checkValidation}/>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <Text>I don't have an account?</Text>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('SignUp')}>
                        <Text style={{left:10,color:'red'}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default LoginContainer;

