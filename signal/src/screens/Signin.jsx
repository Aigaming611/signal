import { Text, SafeAreaView, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from "react-native";
import Title from "../common/Title";
import Input from "../common/Input";
import Button from "../common/Button";
import { useState } from "react";
import api from "../core/api";
import utils from "../core/utils";

function SignInScreen ({ navigation }) {

    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

    const[usernameError, setUsernameError] = useState('')
    const[passwordError, setPasswordError] = useState('')

    function onSignIn() {
        console.log('onSignIn', username, password)

        const failUsername = !username
        if (failUsername) {
            setUsernameError('Username not provided')
        }

        const failPassword = !password
        if (failPassword) {
            setPasswordError('Password not provided')
        }

        if(failUsername || failPassword) {
            return
        }

        api({
            method: 'POST',
            url: '/chat/signin/',
            data: {
                username: username,
                password: password
            }
        })
        .then(response => {
            utils.log('Sign In:', response.data)
        })
        .catch(error => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {

                console.log(error.request);
              } else {

                console.log('Error', error.message);
              }
              console.log(error.config);
        })
    }
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView behavior="height" style={{flex: 1}}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ flex:1, justifyContent: 'center', paddingHorizontal: 20 }}>
                        <Title text='Signal' color='black' />

                        <Input title='Username' value= {username} setValue={setUsername} error={usernameError} setError={setUsernameError}/>
                        <Input title='Password' secureTextEntry={true} value= {password} setValue={setPassword} error={passwordError} setError={setPasswordError}/>

                        <Button title='Sign In' onPress={onSignIn}/>
                        <Text style={{textAlign: 'center', marginTop: 40}}>Don't Have An Account? <Text style={{color: 'blue'}} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text></Text>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default SignInScreen