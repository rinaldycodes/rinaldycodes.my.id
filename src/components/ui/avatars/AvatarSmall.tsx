import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface AvatarSmallProps {
    uri: string;
}

export default function AvatarSmall({ uri }: AvatarSmallProps) {
    if (typeof uri == 'string') {
        return (
            <Image style={styles.img} source={{ uri }} />
        )
    } else {
        return (
            <Image style={styles.img} source={uri} />
        )
    }
}

const styles = StyleSheet.create({
    img: {
        width: 35,
        height: 35,
        borderRadius: 999,
    }
})