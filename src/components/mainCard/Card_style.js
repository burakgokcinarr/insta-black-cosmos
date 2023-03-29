import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black', 
        borderWidth: 1, 
        borderColor: 'gray', 
        borderRadius: 15
    },
    cardHeader: {
        flex: 1, 
        flexDirection: 'row', 
        margin: 5, 
        justifyContent: 'space-between'
    },
    text: { 
        color: 'white',
        fontWeight: '300'
    },
    nameGroup: {
        flex: 1, 
        flexDirection: 'column', 
        padding: 5
    },
    input: {
        height: 30,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10, 
        color: 'white', 
        padding: 5, 
        fontSize: 11
    },
    button: {
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 5
    }
});