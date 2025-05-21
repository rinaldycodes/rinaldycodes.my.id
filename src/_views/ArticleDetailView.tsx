import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/ui/wrapper/ScreenWrapper';
import { useLocalSearchParams } from 'expo-router';
import useArticle from '../hooks/useArticle';
import Drawer from 'expo-router/drawer';
import LoadingDialog from '../components/ui/loaders/LoadingDialog';
import ArticleContent from '../components/features/article/ArticleContent';
import Head from 'expo-router/head';
import { MyEnv } from '../utils/MyEnv';
import ArticleModel from '../_models/ArticleModel';
import ArticleMetaTags from '../components/features/article/ArticleMetaTags';
import LoadingScreen from '../components/ui/loaders/LoadingScreen';

export default function ArticleDetailView() {
    const { slug }: { slug: string } = useLocalSearchParams();
    const { data, isLoading }: { data: any; isLoading: boolean } = useArticle(slug);

    if ( isLoading ) {
        return (
            <LoadingScreen />
        )
    }

    return (
        <>
            <Drawer.Screen
                options={{
                    headerTitle: data?.title || 'Loading...',
                    headerShown: !isLoading, // Hide header while loading
                }}
            />

            <ArticleMetaTags data={data} />

            <ScreenWrapper>
                <ScrollView>
                    {data && (
                        <View style={styles.articleContainer}>
                            <Text style={styles.title}>{data.title}</Text>
                            <Text style={styles.date}>{new Date(data.date).toLocaleDateString()}</Text>
                            {/* <Text style={styles.body}>{data.body}</Text> */}
                            <ArticleContent htmlContent={data.body} />
                        </View>
                    )}
                </ScrollView>
            </ScreenWrapper>
        </>
    );
}

const styles = StyleSheet.create({
    articleContainer: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 8,
    },
    date: {
        fontSize: 14,
        color: '#888888',
        marginBottom: 12,
    },
    body: {
        fontSize: 16,
        color: '#444444',
        lineHeight: 24,
    },
    placeholder: {
        textAlign: 'center',
        color: '#888888',
        fontSize: 18,
    },
});
