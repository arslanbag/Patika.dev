import React, { JSXElementConstructor, ReactElement } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
} from 'react-native';
import Header from './src/components/Header';
import Search from './src/components/Search';
import ProductCard from './src/components/ProductCard';
import ProductsData from './data/ProductsData';


function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Header headerText={"Patika Store"}/>
      <Search />
      <FlatList 
          contentContainerStyle={{ paddingBottom: 150 }}
          keyExtractor={item=>item.id.toString()}
          data={ProductsData}
          renderItem={({item}) => <ProductCard product={item} />}
          numColumns={2}
      />
       <Search />
       <Search />
       
    </SafeAreaView>
  )
}

export default App;
