import { Linking, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import useProject from '../hooks/useProject';
import LoadingScreen from '../components/ui/loaders/LoadingScreen';
import ProjectNotFoundView from './ProjectNotFoundView';
import ScreenWrapper from '../components/ui/wrapper/ScreenWrapper';
import ProjectImageList from '../components/features/project/ProjectImageList';
import ProjectTechnologyList from '../components/features/project/ProjectTechnologyList';
import ProjectFeatureList from '../components/features/project/ProjectFeatureList';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import MyText from '../components/ui/texts/MyText';
import ProjectDetailImageList from '../components/features/project/ProjectDetailImageList';

export default function ProjectDetailView() {
    const { projectId }: { projectId: string } = useLocalSearchParams();
    const { data: project, isLoading } = useProject(projectId);

    if (isLoading) {
        return (
            <LoadingScreen />
        )
    }

    if (!project) {
        return <ProjectNotFoundView />
    }

    return (
        <ScreenWrapper>
            <ScrollView style={{ flex: 1, }} >
                <View key={project.id} style={styles.projectCard} >
                    {/* <Image source={{ uri: project.imageUrl }} style={styles.projectImage} /> */}
                    <ProjectDetailImageList data={[project.imageUrl]} />

                    <MyText style={styles.projectTitle}>{project.title}</MyText>
                    <MyText style={styles.projectDescription}>{project.description}</MyText>

                    <View style={styles.technologiesContainer}>
                        <MyText style={styles.subtitle}>Technologies</MyText>
                        <ProjectTechnologyList data={project.technologies} />
                    </View>

                    <View style={styles.featuresContainer}>
                        <MyText style={styles.subtitle}>Key Features:</MyText>
                        <ProjectFeatureList data={project.features} />
                    </View>


                    <View style={styles.linksContainer}>
                        <TouchableOpacity onPress={() => Linking.openURL(project.repoLink)} style={styles.linkButton}>
                            <AntDesign name="github" size={24} color="white" />
                            <Text style={styles.link}>GitHub</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL(project.liveDemoLink)} style={styles.linkButton}>
                            <MaterialIcons name="live-tv" size={24} color="white" />
                            <Text style={styles.link}>Demo</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </ScreenWrapper>
    )
}

const styles = StyleSheet.create({
    projectCard: {
        marginBottom: 25,
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 15,
        elevation: 10,
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

})