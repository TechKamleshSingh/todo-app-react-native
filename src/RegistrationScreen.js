import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from './Context/AuthContext';

const RegistrationScreen = ({ navigation }) => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const { register } = useContext(AuthContext);

    return (
        <View style={styles.RegistrationScreenWrapper}>
            <View style={styles.RegistrationScreen}>
                <TextInput
                    style={styles.input}
                    placeholder="User Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />

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

                <Button title="Register" onPress={() => {
                    register(name, email, password)
                }} />

                <View style={styles.dontTextWrapper}>
                    <Text style={styles.dontText}>Already have account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.register}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default RegistrationScreen

const styles = StyleSheet.create({
    RegistrationScreenWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    RegistrationScreen: {
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