import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ArticleModel from '@/src/_models/ArticleModel';
import MyText from '../../ui/texts/MyText';
import { useTheme } from '@/src/providers/ThemeProvider';

interface ArticleDateBarProps {
    date: string | any;
}
export default function ArticleDateBar({ date }: ArticleDateBarProps) {
    const { theme } = useTheme();
    return (
        <View style={[styles.container, { borderColor: theme.outline }]}>
            <MyText style={styles.date}>{ArticleModel.formatDate(date)}</MyText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomWidth: 1,
    },
    date: {
        fontSize: 14,
        fontWeight: '500',
    }
})