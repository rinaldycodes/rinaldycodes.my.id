import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface AvatarMediumProps {
    uri: string;
}

export default function AvatarMedium({ uri }: AvatarMediumProps) {

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
        width: 35 * 2,
        height: 35 * 2,
        borderRadius: 999,
    }
})