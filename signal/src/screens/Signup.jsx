import { Text, SafeAreaView, View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from "react-native";
import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";


function SignUpScreen ({ navigation }) {

    const[username, setUsername] = useState('')
    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
    const[password1, setPassword1] = useState('')
    const[password2, setPassword2] = useState('')

    const[usernameError, setUsernameError] = useState('')
    const[firstNameError, setFirstNameError] = useState('')
    const[lastNameError, setLastNameError] = useState('')
    const[password1Error, setPassword1Error] = useState('')
    const[password2Error, setPassword2Error] = useState('')

    function onSignUp() {
        console.log('onSign UUPP')

        const failUsername = !username || username.length < 5
        if (failUsername) {
            setUsernameError('username must be >= 5 chracters')
        }

        const failFirstName = !firstName
        if (failUsername) {
            setFirstNameError('First Name was not provided')
        }

        const failLastName = !lastName
        if (failLastName) {
            setLastNameError('Last Name was not provided')
        }

        const failPassword1 = !password1 || password1 <8
        if (failPassword1) {
            setPassword1Error('Password is too short')
        }

        const failPassword2 = !password1 !== password2
        if (failPassword2) {
            setPassword2Error('Passwords don\'t match')
        }
        if (failUsername || failFirstName || failLastName || failPassword1|| failPassword2) {
            return
        }
    }
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView behavior="height" style={{flex: 1}}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 16 }}>
                        <Text style={{textAlign: 'center', marginBottom: 24, fontSize: 36, fontWeight: 'bold'}}>Sign Up</Text>
                        <Input title='Username' value={username} setValue={setUsername} error={usernameError} setError={setUsernameError}/>
                        <Input title='First Name' value={firstName} setValue={setFirstName} error={firstNameError} setError={setFirstNameError}/>
                        <Input title='Last Name' value={lastName} setValue={setLastName} error={lastNameError} setError={setLastNameError}/>
                        <Input title='Password' secureTextEntry={true} value={password1} setValue={setPassword1} error={password1Error} setError={setPassword1Error}/>
                        <Input title='Confirm Password' secureTextEntry={true} value={password2} setValue={setPassword2} error={password2Error} setError={setPassword2Error}/>

                        <Button title='Sign Up' onPress={onSignUp}/>

                        <Text style={{textAlign: 'center', marginTop: 40}}>Already Have An Account? <Text style={{color: 'blue'}} onPress={() => navigation.goBack()}>Sign In</Text></Text>
                    </View> 
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default SignUpScreen