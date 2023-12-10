import { StyleSheet, Dimensions } from "react-native"

const { height } = Dimensions.get('window')
const styles = StyleSheet.create({
  headerView: {
    height: height * 0.084,
    backgroundColor: '#eceff1',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor:'#eceff1',
    borderBottomWidth: 0.7,
    marginBottom:5
  },
  headerText: {
    color: '#800080',
    fontSize: 30,
    height: height * 0.084,
    width:'75%',
    fontWeight: '600',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '3%',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    paddingTop:'3%',
    textTransform: 'uppercase'


  },

});

export default styles