import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ArticleDetailView from '@/src/_views/ArticleDetailView'
import Drawer from 'expo-router/drawer'
import useArticle from '@/src/hooks/useArticle'
import { useLocalSearchParams } from 'expo-router'

export default function App() {
  return (
    <>
      <ArticleDetailView />
    </>
  )
}

const styles = StyleSheet.create({})