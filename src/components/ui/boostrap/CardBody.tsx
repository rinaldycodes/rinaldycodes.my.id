import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface CardBodyProps {
    children: React.ReactNode,
    style?: ViewStyle
}

export default function CardBody({ children, style }: CardBodyProps) {
    return <View style={[styles.cardBody, style]}>{children}</View>;
}

const styles = StyleSheet.create({
    cardBody: {
        padding: 16
    },
});
