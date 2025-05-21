import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'

interface HeaderRightProps {
    children: ReactNode;
}

export default function HeaderRight({ children }: HeaderRightProps) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    }
})