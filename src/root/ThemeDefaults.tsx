import React from 'react'
import * as Font from 'expo-font';

const loadFonts = () => {
    return Font.loadAsync({
        'Montserrat-Bold': require('../assets/Montserrat-Bold.ttf'),
        'Montserrat-Light': require('../assets/Montserrat-Light.ttf'),
        'Montserrat-Regular': require('../assets/Montserrat-Regular.ttf'),
        'Montserrat-SemiBold': require('../assets/Montserrat-SemiBold.ttf'),
    })
}

export default async () =>{
    await Promise.all([
        loadFonts()
    ])
}