import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JobDetailScreen from '../Screens/JobDetailScreen';

const Stack = createNativeStackNavigator();

export default function Stacks({Drawers} : any) {
  return (
    <Stack.Navigator
    screenOptions={{headerTitleStyle : {color: '#ef5350'}}}
    >
    <Stack.Group 
    screenOptions={{
    headerShown:false,
    }} >
        <Stack.Screen name="Jobs" component={Drawers} />
    </Stack.Group>

  <Stack.Group  >
    <Stack.Screen  options={({ route }:any) => ({ title: "Job" +" # "+ route.params.jobCategories })} name="JobDetailScreen" component={JobDetailScreen} />
  </Stack.Group>
</Stack.Navigator>
  )
}
// options={({ route }:any) => ({ title: route.params.jobCategories })}