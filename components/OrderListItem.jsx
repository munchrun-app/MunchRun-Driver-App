import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const OrderListItem = ({ order, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <Text style={styles.restaurantName}>{order.restaurant}</Text>
      <Text style={styles.address}>{order.customerAddress}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 14,
    color: 'gray',
  },
});

export default OrderListItem;