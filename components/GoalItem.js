import { StyleSheet, View, Text, Pressable } from 'react-native';
const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }} //Only android
        style={({ pressed }) => pressed && styles.pressedItem} //Both androind and ios
        onPress={() => props.onDeleteItem(props.id)}
      >
        <Text style={styles.goaItemText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 10,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goaItemText: {
    color: '#fff',
    padding: 8,
  },
});
