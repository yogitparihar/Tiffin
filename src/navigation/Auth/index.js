import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import Login from "../../screens/Login";
import SignUp from "../../screens/signup";
const Stack = createNativeStackNavigator();
function AuthNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AuthNavigation;