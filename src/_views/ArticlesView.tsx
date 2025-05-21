import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ui/wrapper/ScreenWrapper';
import ArticleList from '../components/features/article/ArticleList';
import useArticles from '../hooks/useArticles';

interface ArticlesViewProps {
    articles: any;
}

export default function ArticlesView() {
    const { data: articles } = useArticles();
    
    return (
        <ScreenWrapper>
            <ArticleList data={articles} />
        </ScreenWrapper>
    )
}

const styles = StyleSheet.create({})