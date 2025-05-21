import { StyleSheet, Text, TextProps } from 'react-native';
import React, { ReactNode } from 'react';
import { useTheme } from '@/src/providers/ThemeProvider';

interface MyTextProps extends TextProps { // Extend TextProps from react-native
    children: ReactNode; // Add children as a required prop
}

export default function MyText({ children, style, ...rest }: MyTextProps) {
    const { theme } = useTheme(); // Get the theme from context

    return (
        <Text {...rest} style={[{ color: theme.onBackground }, style]}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({});
