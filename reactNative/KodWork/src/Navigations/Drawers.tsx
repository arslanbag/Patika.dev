import { createDrawerNavigator } from '@react-navigation/drawer';

import MyFavoriteJobsScreen from '../Screens/MyFavoriteJobsScreen'; 
import JobsScreen from '../Screens/JobsScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();

export default function Drawers() {
  const FavoritedIcon = ({ color } : any) => <Icon name="bookmark-multiple-outline" size={24}  color={color}/>
  const JobsIcon = ({ color } : any) => <Icon name="briefcase" size={24}   color={color} />
  
  return (
    <Drawer.Navigator
    screenOptions={{
    drawerActiveBackgroundColor: '#fdeaea', 
    drawerActiveTintColor:'#ef5350', 
    headerTitleStyle : {color: '#ef5350'}, 
    headerTintColor : "#ef5350"
  }}
    >
      <Drawer.Screen options={{title: "Jobs", drawerIcon:((props)=> JobsIcon(props) )}} name="JobsDrawer"  component={JobsScreen} />
      <Drawer.Screen options={{title: "Favorited Jobs" , drawerIcon : ((props)=> FavoritedIcon(props))}} name="MyFavoriteJobsScreen" component={MyFavoriteJobsScreen} />
  </Drawer.Navigator>
  )
}
