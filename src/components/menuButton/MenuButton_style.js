import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    buttonHover: {
        transform: [{ rotate: '-90deg'}],
        width: 90,
        height: 40,
        borderRadius:20,
        shadowColor: 'gray',
        shadowOpacity: 1.5,
        elevation: 8,
        shadowRadius: 5 ,
        backgroundColor: 'black',
        color: '#FFFFFF',
        justifyContent: 'center',
    },
    textTitle: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center'
    }
});