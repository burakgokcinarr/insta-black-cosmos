import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './MenuButton_style';

export default function MenuButton({ title, onPress, }) {
    return (
        <TouchableOpacity style={styles.buttonHover} onPress={onPress}>
            <Text style={styles.textTitle}>{title}</Text>
        </TouchableOpacity>
    )
}