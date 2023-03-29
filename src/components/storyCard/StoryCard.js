import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './StoryCard_style';
import { Ionicons } from '@expo/vector-icons';

export default function StoryCard({ storyItem, index }) {
    return (
        <View style={styles.card}>
            <View style={styles.userView}>
                <Text style={styles.textTitle}>{storyItem.name}</Text>
            </View>
            <Image source={{uri: storyItem.story_uri}} resizeMode="cover" style={styles.storyImage}/>
            {
                index === 0 && (
                    <View style={styles.plusIcon}>
                        <Ionicons name="ios-add-circle" size={30} color="red"/>
                    </View>
                )
            }
        </View>
    )
}