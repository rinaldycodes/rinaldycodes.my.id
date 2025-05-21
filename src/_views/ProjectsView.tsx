import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ScrollView, useWindowDimensions } from 'react-native';
import Column from '../components/ui/boostrap/Column';
import Row from '../components/ui/boostrap/Row';
import ProjectTechnologiesLabel from '../components/features/project/ProjectTechnologiesLabel';
import ProjectTechnologyList from '../components/features/project/ProjectTechnologyList';
import ProjectFeatureList from '../components/features/project/ProjectFeatureList';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import ScreenWrapper from '../components/ui/wrapper/ScreenWrapper';
import ProjectItem from '../components/features/project/ProjectItem';
import useProjects from '../hooks/useProjects';
import LoadingScreen from '../components/ui/loaders/LoadingScreen';

// const projects = [
//     {
//         id: '1',
//         title: 'E-commerce Platform',
//         description: 'A full-stack e-commerce platform with a responsive frontend and a secure backend. It allows users to browse products, make purchases, and track orders.',
//         technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
//         features: ['User Authentication', 'Product Catalog', 'Shopping Cart', 'Order Management', 'Payment Integration'],
//         repoLink: 'https://github.com/username/ecommerce-platform',
//         liveDemoLink: 'https://ecommerce-platform.com',
//         imageUrl: 'https://example.com/ecommerce-screenshot.png',
//     },
//     {
//         id: '2',
//         title: 'Task Management App',
//         description: 'A task management application with real-time collaboration. It allows teams to track and manage tasks in a shared environment.',
//         technologies: ['Vue.js', 'Node.js', 'Socket.io', 'MySQL'],
//         features: ['Real-Time Task Updates', 'User Roles & Permissions', 'Task Notifications', 'Team Collaboration'],
//         repoLink: 'https://github.com/username/task-management-app',
//         liveDemoLink: 'https://task-management-app.com',
//         imageUrl: 'https://example.com/task-management-screenshot.png',
//     },
// ];

export default function ProjectsView() {
    const { data: projects, isLoading } = useProjects();

    if (isLoading) {
        return (
            <LoadingScreen />
        )
    }
    return (
        <ScreenWrapper>
            <ScrollView style={styles.container}>
                <Row>
                    {projects && projects.map((project: any, index: number) => {
                        return (
                            <Column key={index.toString()} sm={12} md={6} xl={4} >
                                <ProjectItem key={index.toString()} project={project} />
                            </Column>
                        )

                    })}
                </Row>
            </ScrollView >
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    projectCard: {
        marginBottom: 25,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 15,
        elevation: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    projectTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    projectDescription: {
        fontSize: 16,
        color: '#555',
        marginVertical: 10,
        lineHeight: 22,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 5,
    },
    technologiesContainer: {
        marginBottom: 15,
    },
    technology: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    featuresContainer: {
        marginBottom: 15,
    },
    feature: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    projectImage: {
        width: '100%',
        height: 250,
        borderRadius: 10,
        marginTop: 15,
        marginBottom: 20,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    linksContainer: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    linkButton: {
        flexDirection: 'row',
        gap: 10,
        backgroundColor: '#0066cc',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginRight: 10,
        marginLeft: 0,
    },
    link: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '500',
    },
    linkButtonLast: {
        marginRight: 0,
    }
});
