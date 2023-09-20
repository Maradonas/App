import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const ListaDeDesejos = () => {
  const [inputText, setInputText] = useState('');
  const [listaDesejos, setListaDesejos] = useState([]);

  const adicionarItem = () => {
    if (inputText.trim() !== '') {
      setListaDesejos([...listaDesejos, inputText]);
      setInputText('');
    }
  };

  const removerItem = (item) => {
    const novaLista = listaDesejos.filter((desejo) => desejo !== item);
    setListaDesejos(novaLista);
  };

  return (
    <View>
      <Text>Minha Lista de Desejos:</Text>
      <TextInput
        placeholder="Digite um desejo"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />
      <Button title="Adicionar" onPress={adicionarItem} />
      <FlatList
        data={listaDesejos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item}</Text>
            <Button title="Remover" onPress={() => removerItem(item)} />
          </View>
        )}
      />
    </View>
  );
};

export default ListaDeDesejos;
