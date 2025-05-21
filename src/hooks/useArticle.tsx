import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DataArticle } from '../utils/dummies/DataArticle';
import ArticleModel from '../_models/ArticleModel';

export default function useArticle(slug: string) {
    const [data, setData] = useState<null | any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchData();

    }, [slug]);

    const fetchData = () => {
        setIsLoading(true);
        try {
            const data = ArticleModel.findBySlug(slug);
            setData(data)

            setTimeout( () => {
                setIsLoading(false);
            }, 3000)

        } catch (error) {
            console.log("useArticle error: ", error);
            setError("Unpreditect error when fetching article");
            setIsLoading(false);
        }
    }

    return {
        data,
        error,
        isLoading,
        fetchData,
    }
}

const styles = StyleSheet.create({})