import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DataArticle } from '../utils/dummies/DataArticle';

export default function useArticles() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchData();

    }, []);

    const fetchData = () => {
        setIsLoading(true);
        try {
            setData(DataArticle)
            setIsLoading(false);

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