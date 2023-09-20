import React from 'react';
import { FlatList, Text } from 'react-native';

const data = [
  { id: '1', text: 'Item 1' },
  { id: '2', text: 'Item 2' },
  { id: '3', text: 'Item 3' },
  // Adicione mais itens conforme necessário
];

const List = () => {
  const renderItem = ({ item }) => {
    return <Text>{item.text}</Text>;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default List;
