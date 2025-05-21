import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import { useTheme } from '@/src/providers/ThemeProvider'

interface ProjectTechnologiesLabelProps {
    children: ReactNode
}

export default function ProjectTechnologiesLabel({ children }: ProjectTechnologiesLabelProps) {
    const { theme } = useTheme();
    const styles = StyleSheet.create({
        label: {
            backgroundColor: theme.surface,
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: theme.outline,
            elevation: 5,
        },
        labelText: {
            color: theme.primary
        }
    })

    return (
        <View style={styles.label}>
            <Text style={styles.labelText}>{children}</Text>
        </View>
    )
}

