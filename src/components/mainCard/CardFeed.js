import React from 'react';
import { View, ScrollView, StyleSheet, Image, TextInput } from 'react-native';
import { Text, Card, Button, Icon, Avatar } from '@rneui/themed';
import { styles } from './Card_style';
import { Entypo } from '@expo/vector-icons';

export default  CardFeed = ({ mainItem }) => {
    return (
        <Card containerStyle={styles.container}>
            <View style={styles.cardHeader}>
              <Avatar
                size={35}
                rounded
                source={{uri: 'https://randomuser.me/api/portraits/men/7.jpg'}}
              />
              <View style={styles.nameGroup}>
                <Text style={styles.text}>{ mainItem.name + ' ' + mainItem.surname }</Text>
                <Text style={[styles.text, { fontWeight: '100' }]}>{ mainItem.username }</Text>
              </View>
              <Entypo name="dots-three-vertical" size={25} color="white" />
            </View>
          <Card.Divider />
          <Card.Image style={{ padding: 0, borderRadius: 10, width: '100%', height:250 }}
            source={{
              uri:
              mainItem.story_uri,
            }}
            resizeMode='cover'
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View style={styles.button}>
              <Entypo name="heart-outlined" size={22} color="orange" />
              <Text style={[styles.text, { fontWeight: '300' }]}>500</Text>
            </View>
            <View style={styles.button}>
              <Entypo name="message" size={22} color="orange" />
              <Text style={[styles.text, { fontWeight: '300' }]}>250</Text>
            </View>
            <View style={styles.button}>
              <Entypo name="share" size={22} color="orange" />
              <Text style={[styles.text, { fontWeight: '300' }]}>3 days</Text>
            </View>
          </View>
          <Text style={{ margin: 5, color: 'white' }} numberOfLines={3}>{mainItem.description}</Text>
          <TextInput
            placeholder='Add Commends'
            style={styles.input}
            placeholderTextColor={'gray'}
          />
        </Card>
    )
}