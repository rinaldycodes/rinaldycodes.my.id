import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'

export default function MyDrawerItem({
    children,
    style
}: {
    children: ReactNode,
    style?: ViewStyle,
}) {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    }
})