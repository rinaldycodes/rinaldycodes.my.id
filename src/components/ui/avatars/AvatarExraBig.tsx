import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface AvatarExtraBigProps {
    uri: string;
}

export default function AvatarExtraBig({ uri }: AvatarExtraBigProps) {
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
        width: 35 * 4,
        height: 35 * 4,
        borderRadius: 999,
    }
})