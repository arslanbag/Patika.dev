import React, { useState} from 'react';
import {
View,FlatList, Alert
} from 'react-native';
import appStyle from './app.style'
import Header from './src/components/Header';
import ToDoInput from './src/components/ToDoInput';
import ToDoList from './src/components/ToDoList';
import AddToDoButton from './src/components/AddToDoButton';
import ToDoListNotFound from './src/components/ToDoListNotFound';


function App(): React.JSX.Element {

  const [addComponentVisible, setAddComponentVisible] = useState(false);
  const [toDoList, setToDoList] = useState([{id :-1, toDoName: '', check: false}]);
 

  const addComponentVisibleChange = () => {
    setAddComponentVisible(!addComponentVisible)
  }

  const toDoClick = (id: any) => {
    const updateToDoList = toDoList.map(item => {
      if (item.id === id ) {
        return {
          ...item,
          check: !item.check 
        }
      }
      return item;
    })
    setToDoList(updateToDoList)

  }

  const addToDo= (toDo: any) => {
    const newTodo = {id :toDoList.length , toDoName: toDo, check: false}
    const filteredData = toDoList.filter(item => item.toDoName === toDo);
    console.log(filteredData)
    filteredData.length > 0  ? Alert.alert('"'+filteredData[0].toDoName+'"'," #Adlı görev daha önce girilmiş !") : 
      setToDoList(toDoList => [...toDoList, newTodo])
  }

  const toDoRemove= (toDo: any) => {
    const deletedTodo = toDoList.filter(item => item.id !== toDo);
    setToDoList(deletedTodo);
  }


  return (
    <View style={appStyle.viewContainer}>
      <View style={appStyle.viewHeader}>
        <Header style={appStyle.viewContainer} headerText="Görev Listesi" headerToDoCount={toDoList.length-1} />
      </View>
      <View style={appStyle.viewToDoList}>
   
        {toDoList.length > 1 ? (
             <FlatList
             style={appStyle.viewToDoList}
             data={toDoList}
             renderItem={(item) => (<ToDoList  toDo={item} toDoClick = {toDoClick} toDoRemove={toDoRemove}/>)}
           />
        ):
        (<ToDoListNotFound />)
        }
      </View>
      <View style={appStyle.viewToDoInput}>
        {
          addComponentVisible ? 
          (<ToDoInput cancelButtonTouch={addComponentVisibleChange} addButtonTouch={addToDo} />)
          : 
          (<AddToDoButton addToDoButtonTouch={addComponentVisibleChange}/>)
        }
      </View>
    </View>
  );
}



export default App;
