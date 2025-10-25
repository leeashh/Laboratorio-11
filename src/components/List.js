import React from 'react';
import { View, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function List({ history = [], onSelect = () => {} }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => onSelect(item.uri, item.date)}>
      <Image source={{ uri: item.uri }} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList data={history} horizontal keyExtractor={(_, i) => String(i)} renderItem={renderItem} showsHorizontalScrollIndicator={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: 80, height: 80, justifyContent: 'center' },
  item: { width: 60, height: 60, borderRadius: 12, overflow: 'hidden', backgroundColor: '#333', marginRight: 8 },
  image: { width: '100%', height: '100%' },
});