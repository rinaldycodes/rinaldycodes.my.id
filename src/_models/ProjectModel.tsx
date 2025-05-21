import { DataProject } from '../utils/dummies/DataProject';

export interface Project {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
    technologies: [];
    features: [];
    repoLink: string;
    liveDemoLink: string;
}

class ProjectModel {
    getAll = async () => {
        try {
            const projects = DataProject;
            return projects;
        } catch (error) {
            console.log("error: ", error);

            throw error;
        }
    }


    findById = async (projectId: string) => {
        try {
            console.log("projectid", projectId);
            const projects = DataProject;
            const project = await projects.find((project) => project.id == projectId);
            return project;
        } catch (error) {
            console.log("error: ", error);
            throw error;
        }
    }
}

export default new ProjectModel();