import { SafeAreaView, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { useTheme } from '@/src/providers/ThemeProvider';

interface ScreenWrapperProps {
    children: ReactNode;
    style?: ViewStyle;
}

export default function ScreenWrapper({ children }: ScreenWrapperProps) {
    const { theme } = useTheme();
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gainsboro'
    }
})