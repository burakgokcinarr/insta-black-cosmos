import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, FlatList, Platform } from 'react-native'
import React, { useState } from 'react';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { MenuButton, StoryCard, CardFeed } from '../components';
import { FeedsData, StoryData } from '../data/FakeData'

export default function Feed() {

  const [storyData, setStoryData] = useState(StoryData);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.leftMenuView}>
        <FontAwesome5 name="instagram-square" size={35} color="orange" />
        <Image resizeMode='cover' style={styles.profile} source={{uri: 'https://randomuser.me/api/portraits/men/7.jpg'}}></Image>
        <View style={styles.menuButton}>
          <MenuButton title={"Feeds"}/>
          <MenuButton title={"Explore"}/>
          <MenuButton title={"Top Post"}/>
          <MenuButton title={"People"}/>
          <MenuButton title={"Trending Tags"}/>
        </View>
        <Entypo name="dots-three-horizontal" size={30} color="white"/>
      </View>
      <View style={styles.storyView}>
        <Text style={styles.bigTitle}>Featured Stories</Text>
        <View>
          <FlatList
            data={storyData}
            horizontal
            renderItem={({item, index}) => <StoryCard storyItem={item} index={index}/>}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.storyView}>
          <FlatList
            data={FeedsData}
            renderItem={({item, index}) => <CardFeed mainItem={item} index={index}/>}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: Platform.OS == "android" ? 22 : 5
  },
  leftMenuView: {
    //flex: 1,
    justifyContent: 'flex-start',
    paddingVertical: 25,
    //width: '15%',
    maxWidth: '15%',
    height: '100%',
    backgroundColor: '#242423',
    borderTopRightRadius: 100,
    alignItems: 'center',
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#464646',
    marginTop: 15
  },
  menuButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  storyView: {
    flex: 1,
  },
  bigTitle: {
    color: 'white', 
    fontSize: 30
  }
})