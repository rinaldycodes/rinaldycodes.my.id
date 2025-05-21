import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useTheme } from '@/src/providers/ThemeProvider';

export default function ButtonTheme() {
    const { isDarkMode, theme, toggleTheme } = useTheme();
    return (
        <Pressable onPress={toggleTheme}>
            {
                isDarkMode ? (
                    <Feather name="moon" size={24} color={theme.onPrimary} />
                ) : (
                    <Feather name="sun" size={24} color={theme.onPrimary} />
                )
            }
        </Pressable>
    )
}

const styles = StyleSheet.create({})