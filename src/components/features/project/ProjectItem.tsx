import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import ProjectImageList from './ProjectImageList';
import { router } from 'expo-router';
import MyText from '../../ui/texts/MyText';
import { Project } from '@/src/_models/ProjectModel';



export default function ProjectItem({ project }: { project: Project }) {
    const handleOnPressProject = () => {
        router.push(`/(app)/projects/${project.id}`)
    }

    return (
        <Pressable key={project.id} style={styles.projectCard} onPress={handleOnPressProject}>
            {/* <ProjectImageList data={[project.imageUrl]} /> */}

            <MyText style={styles.projectTitle}>{project.title}</MyText>
            <MyText numberOfLines={3} style={styles.projectDescription}>{project.description}</MyText>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    projectCard: {
        marginBottom: 25,
        // backgroundColor: '#fff',
        // padding: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
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
        marginBottom: 10,
    },
    projectDescription: {
        fontSize: 16,
        marginVertical: 10,
        lineHeight: 22,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '600',
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
