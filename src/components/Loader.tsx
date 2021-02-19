import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Configs } from '../root/Configs'
import { Colors } from '../theme'

export default function Loader() {
    return <ActivityIndicator color={Colors.primary} size={Configs.strings.loaderSize} style={{ marginTop: '100%' }} />    
}
