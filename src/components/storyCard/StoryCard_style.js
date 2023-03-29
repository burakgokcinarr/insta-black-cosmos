import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        flex: 1, 
        width: 100, 
        height: 150, 
        backgroundColor: 'black', 
        margin: 5, 
        borderRadius: 15
    },
    userView: {
        position: 'absolute',
        zIndex: 1,
        backgroundColor: 'black',
        opacity: 0.7,
        width: '100%',
        alignItems: 'center',
        padding: 2,
        borderRadius: 15
    },
    textTitle: {
        flex: 1,
        color: 'white',
        fontSize: 16,
    },
    storyImage: {
        flex: 1, 
        borderRadius: 15
    },
    plusIcon: {
        position: 'absolute',
        zIndex: 1,
        bottom: -2,
        right: -2,
        backgroundColor: 'white',
        borderRadius: 15,
    },
});