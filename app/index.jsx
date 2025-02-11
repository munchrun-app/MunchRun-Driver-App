import React from 'react';
import { View, StyleSheet, Switch, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// Melbourne initial region - adjust as needed
const initialRegion = {
  latitude: -37.8136,
  longitude: 144.9631,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const orders = [
  { id: 1, restaurant: 'Restaurant A', customerAddress: 'Address A' },
  { id: 2, restaurant: 'Restaurant B', customerAddress: 'Address B' },
  // Add more orders as needed
];

const handleAvailabilityToggle = (value) => {
  // Your availability logic
};

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.availabilityContainer}>
        <Text style={styles.availabilityText}>Available for Orders</Text>
        <Switch
          onValueChange={handleAvailabilityToggle}
          value={true} // Replace with actual state
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={true ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>

      {/* Map View */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={initialRegion}
        >
          {/* Markers for each order (example) */}
          {orders.map(order => (
            <Marker
              key={order.id}
              coordinate={{ latitude: -37.81 + (order.id * 0.01), longitude: 144.96 + (order.id * 0.01) }} // Placeholder coordinates - REPLACE with actual order coordinates
              title={order.restaurant}
              description={order.customerAddress}
            />
          ))}
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  availabilityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  availabilityText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  mapContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Index;