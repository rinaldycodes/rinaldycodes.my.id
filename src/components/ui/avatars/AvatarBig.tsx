import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface AvatarBigProps {
    uri: string;
}

export default function AvatarBig({ uri }: AvatarBigProps) {
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
        width: 35 * 3,
        height: 35 * 3,
        borderRadius: 999,
    }
})