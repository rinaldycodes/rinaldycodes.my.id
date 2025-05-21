import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import { useTheme } from '@/src/providers/ThemeProvider';

interface CardProps {
    children: ReactNode;
    onPress: () => void;
    style?: ViewStyle
}

export default function Card({ children, onPress, style }: CardProps) {
    const { theme } = useTheme();
    return (
        <Pressable style={[styles.card, { backgroundColor: theme.surface}, style]} onPress={onPress}>
            {children}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        // backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gainsboro',
        borderRadius: 8,         // Rounded corners
        // margin: 16,              // Margin around the card
        shadowColor: '#000',     // Shadow color for iOS
        shadowOffset: { width: 0, height: 4 }, // Shadow direction
        shadowOpacity: 0.1,      // Shadow opacity for iOS
        shadowRadius: 6,         // Shadow blur for iOS
        elevation: 5,            // Shadow for Android
    },
});
