import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from './Context/AuthContext';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const val = useContext(AuthContext);


    return (
        <View style={styles.LoginScreenWrapper}>
            <View style={styles.LoginScreen}>
                <Text>{val}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="User E-mail"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="User Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}

                    secureTextEntry
                />

                <Button title="Login" />

                <View style={styles.dontTextWrapper}>
                    <Text style={styles.dontText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.register}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    LoginScreenWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    LoginScreen: {
        width: "80%"
    },
    input: {
        borderWidth: 1,
        borderColor: "#C0C0C0",
        borderRadius: 3,
        marginBottom: 16,
        padding: 8,
        paddingHorizontal: 16,
    },
    dontTextWrapper: {
        flexDirection: 'row',
        marginTop: 20,
    },
    dontText: {

    },
    register: {
        color: '#007acc',
    },
})