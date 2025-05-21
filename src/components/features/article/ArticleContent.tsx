import React from 'react';
import { StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import RenderHTML from 'react-native-render-html';

type ArticleContentProps = {
    htmlContent: string;
};

const ArticleContent: React.FC<ArticleContentProps> = ({ htmlContent }) => {
    const { width } = useWindowDimensions();

    return (
        <RenderHTML
            contentWidth={width}
            source={{ html: htmlContent }}
            tagsStyles={styles.tagsStyles} // Tambahkan styling khusus
        />
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#ffffff',
    },
    tagsStyles: {
        p: {
            color: '#333333',
            fontSize: 16,
            lineHeight: 24,
        },
        h1: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#222222',
            marginBottom: 10,
        },
        h2: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#333333',
            marginBottom: 8,
        },
        a: {
            color: '#1e90ff',
            textDecorationLine: 'underline',
        },
    },
});

export default ArticleContent;
