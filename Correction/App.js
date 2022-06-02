import React, { useEffect, useState } from 'react'
import { FlatList, LogBox, StatusBar, View } from 'react-native'
import Card from './src/components/Card'
import SearchBar from './src/components/SearchBar'
import PRODUITS from './src/datas/data'

export default function App() {
  const [search, setSearch] = useState([])

  const searchText = (text) => {
    let data = []
    PRODUITS.forEach((item) => {
      if(item.title.indexOf(text) != -1 || item.brand.indexOf(text) != -1){
        data.push(item)
      }
    })
    setSearch(data)
    }
  
  
   useEffect(() => {
    setSearch(PRODUITS)
  }, [])


  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <SearchBar searchText={(text) => searchText(text)}/>
      <FlatList
        numColumns={2}
        renderItem={Card}
        data={search}
        keyExtractor={search.id}
      />
    </View>
  );
}

