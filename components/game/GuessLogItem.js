import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function GuessLogItem({ roundNumber, guess }) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        marginVertical: 8,
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: Colors.accent500,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3
    },
    itemText: {
        fontFamily: 'open-sans'
    }
});

export default GuessLogItem;
