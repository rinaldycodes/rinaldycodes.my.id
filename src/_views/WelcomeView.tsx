import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/src/components/ui/wrapper/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { useTheme } from '@/src/providers/ThemeProvider'
import WelcomeHero from '../components/features/welcome/WelcomeHero'
import WelcomeAbout from '../components/features/welcome/WelcomeAbout'
import WelcomeArticle from '../components/features/welcome/WelcomeArticle'
import Column from '../components/ui/boostrap/Column'
import Row from '../components/ui/boostrap/Row'
import WorkCard from '../components/features/work/WorkCard'
import useDeviceScreen from '../hooks/useDeviceScreen'
import WelcomeMain from '../components/features/welcome/WelcomeMain'

export default function WelcomeView() {
    const { isDarkMode } = useTheme();
    const { device } = useDeviceScreen();
    return (
        <ScreenWrapper>
            <StatusBar style={isDarkMode ? 'dark' : 'light'} />
            <ScrollView
                style={{ paddingBottom: 25, }}
            >
                <WelcomeMain />
                <WelcomeArticle />
            </ScrollView>
        </ScreenWrapper>
    )
}

const styles = StyleSheet.create({})