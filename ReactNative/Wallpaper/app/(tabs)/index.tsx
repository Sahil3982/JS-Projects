import { Link } from 'expo-router'
import React from 'react'
import { SafeAreaView, Text } from 'react-native'

const Foryou = () => {
  return (
<SafeAreaView>
<Text>Foryou</Text>
<Link href={'./suggested'}>Suggested</Link>
<Link href={'./library'}>Library</Link>
<Link href={'./liked'}>Liked</Link>
</SafeAreaView>
  )
}

export default Foryou