import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#212121",
        // justifyContent: 'center'
    },
    txtInput: {
        color: '#cfd8dc',
        // height: 80,
        // width: '50%',
        textAlign: 'center',
        fontSize: 25,


    },
    txt: {
        color: '#cfd8dc',
        // height: 80,
        // width: '50%',
        textAlign: 'center',
        fontSize: 25,

    },
    txtEqual: {
        color: '#cfd8dc',
        // height: 80,
        // width: '50%',
        textAlign: 'center',
        fontSize: 25,
        marginTop: 24,

    },
    txtDeltaResult: {
        color: 'orange',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,

    },
    cotainerInput: {
        flexDirection: "row",
        backgroundColor: "#484848",
        borderRadius: 4,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#d6d7da',
        marginTop: 24,
        justifyContent: 'center'

    },
    txtBtn: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffffff',
        padding: 30,
    },
    cotainerBtn: {
        backgroundColor: "#9ea7aa",
        borderRadius: 4,
        // alignItems: 'center',
        borderWidth: 2,
        borderColor: '#d6d7da',
        marginTop: 24,
        height: 50,
        width: '100%',
        justifyContent: 'center'

    },

})

export default styles;