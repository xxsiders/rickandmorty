import React from 'react'
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native'
import { Loader } from '../../../components'
import { Configs } from '../../../root/Configs'
import { Character } from '../../../root/Types'
import theme from './style'

type ListItem = {
    item: Character,
    index: number
}

export default function index(props: any) {
    const styles = theme()

    if (props.loading) return <Loader />

    const renderItem = ({ item }: ListItem) => {
        return <View key={item.id} style={[styles.card, item.status != Configs.strings.characterStatus && styles.dead]}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
        </View>
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={props.data} keyExtractor={(item: Character) => item.id.toString()} renderItem={renderItem} />
        </SafeAreaView>
    )
}
