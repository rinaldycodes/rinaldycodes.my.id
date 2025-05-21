import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

export default function Row({ children, style }: { children: React.ReactNode, style?: ViewStyle }) {
    return <View style={[styles.row, style]}>{children}</View>;
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // marginBottom: 16, // Space between rows
        flexWrap: 'wrap',
    },
});
