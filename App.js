import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './src/Componets/Navigation'
import { AuthProvider } from './src/Context/AuthContext'

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  )
}

export default App

const styles = StyleSheet.create({})