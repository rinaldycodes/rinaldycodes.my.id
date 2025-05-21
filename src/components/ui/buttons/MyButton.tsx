import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type Variant = 'solid' | 'outline' | 'gradient';
type Color =
    | 'primary'
    | 'secondary'
    | 'edit'
    | 'info'
    | 'danger'
    | 'error'
    | 'success';

interface MyButtonProps {
    title: string;
    variant?: Variant;
    color?: Color;
    onPress?: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

const COLORS: Record<Color, string> = {
    primary: '#007bff',
    secondary: '#6c757d',
    edit: '#17a2b8',
    info: '#0dcaf0',
    danger: '#dc3545',
    error: '#e74c3c',
    success: '#28a745',
};

const GRADIENTS: Record<Color, string[]> = {
    primary: ['#007bff', '#0056b3'],
    secondary: ['#6c757d', '#495057'],
    edit: ['#17a2b8', '#138496'],
    info: ['#0dcaf0', '#0bbce0'],
    danger: ['#dc3545', '#c82333'],
    error: ['#e74c3c', '#c0392b'],
    success: ['#28a745', '#218838'],
};

export const MyButton: React.FC<MyButtonProps> = ({
    title,
    variant = 'solid',
    color = 'primary',
    onPress,
    style,
    textStyle,
}) => {
    const baseStyle: ViewStyle = {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    };

    const textBaseStyle: TextStyle = {
        fontWeight: '600',
        color: variant === 'solid' || variant === 'gradient' ? '#fff' : COLORS[color],
    };

    const getVariantStyle = (): ViewStyle => {
        switch (variant) {
            case 'solid':
                return { backgroundColor: COLORS[color] };
            case 'outline':
                return {
                    borderWidth: 2,
                    borderColor: COLORS[color],
                    backgroundColor: 'transparent',
                };
            case 'gradient':
                return {};
            default:
                return {};
        }
    };

    if (variant === 'gradient') {
        return (
            <TouchableOpacity onPress={onPress} style={style}>
                <LinearGradient
                    colors={GRADIENTS[color]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={[baseStyle, style]}
                >
                    <Text style={[textBaseStyle, textStyle]}>{title}</Text>
                </LinearGradient>
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[baseStyle, getVariantStyle(), style]}
        >
            <Text style={[textBaseStyle, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};
