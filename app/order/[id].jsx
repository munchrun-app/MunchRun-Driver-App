import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

const OrderDetailsScreen = () => {
  const { id: orderId } = useLocalSearchParams(); // Get orderId from URL params
  const router = useRouter();
  // Placeholder order details (replace with API call)
  const orderDetails = {
    id: orderId,
    restaurant: 'Local Burgers',
    customerName: 'John Doe',
    customerAddress: '123 Main St',
    items: ['Burger x 2', 'Fries x 1', 'Drink x 1'],
    status: 'Assigned',
  };

  const handleAcceptOrder = () => {
    console.log('Accept Order:', orderId);
    // API call to accept order
    orderDetails.status = 'Accepted';
    alert(`Order ${orderId} Accepted!`);
    router.back(); // Use router.back() to go back to previous screen (Home)
  };

  const handlePickupOrder = () => {
    console.log('Pickup Order:', orderId);
    // API call for pickup
    orderDetails.status = 'Picked Up';
    alert(`Order ${orderId} Picked Up!`);
  };

  const handleDeliverOrder = () => {
    console.log('Deliver Order:', orderId);
    // API call for delivery
    orderDetails.status = 'Delivered';
    alert(`Order ${orderId} Delivered!`);
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Details</Text>
      <Text>Order ID: {orderDetails.id}</Text>
      <Text>Restaurant: {orderDetails.restaurant}</Text>
      <Text>Customer: {orderDetails.customerName}</Text>
      <Text>Address: {orderDetails.customerAddress}</Text>
      <Text style={styles.boldText}>Items:</Text>
      {orderDetails.items.map((item, index) => (
        <Text key={index} style={styles.listItem}>{item}</Text>
      ))}
      <Text>Status: {orderDetails.status}</Text>

      <View style={styles.buttonContainer}>
        {orderDetails.status === 'Assigned' && (
          <Button title="Accept Order" onPress={handleAcceptOrder} />
        )}
        {orderDetails.status === 'Accepted' && (
          <Button title="Picked Up" onPress={handlePickupOrder} />
        )}
        {orderDetails.status === 'Picked Up' && (
          <Button title="Delivered" onPress={handleDeliverOrder} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({ // Same styles as before
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  listItem: {
    marginLeft: 15,
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default OrderDetailsScreen;