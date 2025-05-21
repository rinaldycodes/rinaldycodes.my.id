import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/src/providers/ThemeProvider'

interface LoadingScreenProps {
    text?: string
}

export default function LoadingScreen({ text }: LoadingScreenProps) {
    const { theme } = useTheme();
    return (
        <View style={styles.container}>
            <ActivityIndicator color={theme.primary} size="large" />
            {text && (<Text style={{ color: theme.primary, marginTop: 16  }}>{text}</Text>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})