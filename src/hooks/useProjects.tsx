import React, { useEffect, useState } from 'react'
import ProjectModel from '../_models/ProjectModel';

export default function useProjects() {
    const [data, setData] = useState<null | any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const projects = await ProjectModel.getAll();

            setIsLoading(false);
            setData(projects);
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