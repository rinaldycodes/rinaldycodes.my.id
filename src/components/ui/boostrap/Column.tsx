import React from 'react';
import { View, StyleSheet, ViewStyle, Dimensions, useWindowDimensions } from 'react-native';

interface ColumnProps {
    children?: React.ReactNode;
    span?: number;  // Default span (used when no breakpoint props are provided)
    sm?: number;    // Span for small screens (mobile)
    md?: number;    // Span for medium screens (tablet)
    lg?: number;    // Span for large screens (laptop)
    xl?: number;    // Span for extra-large screens (desktop)
    style?: ViewStyle;
}

// const screenWidth = Dimensions.get('window').width;

// Helper function to determine the span based on screen size
// const getSpanForScreenSize = (span: number | undefined, sm?: number, md?: number, lg?: number, xl?: number) => {
//     // Breakpoints similar to Bootstrap
//     if (screenWidth >= 1200 && xl !== undefined) return xl;  // Extra large screens (1200px and above)
//     if (screenWidth >= 992 && lg !== undefined) return lg;  // Large screens (992px and above)
//     if (screenWidth >= 768 && md !== undefined) return md;  // Medium screens (768px and above)
//     if (screenWidth >= 576 && sm !== undefined) return sm;  // Small screens (576px and above)
//     return span; // Default span if no specific breakpoints are provided
// };

export default function Column({
    children,
    span = 12,
    sm,
    md,
    lg,
    xl,
    style,
}: ColumnProps) {

    const { width: screenWidth } = useWindowDimensions();
    const getSpanForScreenSize = (span: number | undefined, sm?: number, md?: number, lg?: number, xl?: number) => {
        // Breakpoints similar to Bootstrap
        if (screenWidth >= 1200 && xl !== undefined) return xl;  // Extra large screens (1200px and above)
        if (screenWidth >= 992 && lg !== undefined) return lg;  // Large screens (992px and above)
        if (screenWidth >= 768 && md !== undefined) return md;  // Medium screens (768px and above)
        if (screenWidth >= 576 && sm !== undefined) return sm;  // Small screens (576px and above)
        return span; // Default span if no specific breakpoints are provided
    };

    // Get the appropriate span based on screen size and props
    const columnSpan = getSpanForScreenSize(span, sm, md, lg, xl);

    // Calculate the flexBasis percentage based on the span prop (12 columns system)
    const flexBasis = (columnSpan / 12) * 100;

    return (
        <View style={[styles.col, { flexBasis: `${flexBasis}%` }, style]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    col: {
        padding: 8,  // Optional: you can add padding or margins here for spacing
    },
});
