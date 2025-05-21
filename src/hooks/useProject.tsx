import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProjectModel from '../_models/ProjectModel';

export default function useProject(projectId: string) {
    const [data, setData] = useState<null | any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchData();
    }, [projectId]);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const project = await ProjectModel.findById(projectId);

            setIsLoading(false);
            setData(project);
        } catch (error) {
            console.log("error: ", error);

            setError("Something went error at fetch project");
            setIsLoading(false);
        }
    }

    return {
        data,
        error,
        isLoading
    }
}