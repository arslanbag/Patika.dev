import React, { useState } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'
import style from './JobDeailCard.style'
import { Job } from '../../Models'
import HTMLView from 'react-native-htmlview';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function JobDeailCard({job , handles}: {job : Job, handles : any}) {
const {handleAddFavorite , handleRemoveFavorite, handleAddSubmitList, isFavorite, isSubmit} = handles
const [isFavoriteState , setIsFavoriteState] = useState<boolean>(isFavorite as boolean)
const [isSubmitState , setIsSubmitState] = useState<boolean>(isSubmit as boolean)

function ButtonComponent({text , iconName , click , setState, styleName='default' }: any ){
    let pressableStyle =  style.buttonsButton
    if(styleName == "submitted") {pressableStyle = style.buttonsButtonSubmit} 
    return (
        <Pressable style={pressableStyle} 
        onPress={()=> {click();  setState()}}
    >
        <Icon name={iconName} size={20} color="white" />
        <Text style={style.buttonsButtonText}> {text}</Text>
    </Pressable>
    )
    }

  return (
    <View style={style.container}>
        
        <View style={style.headerView}>
            <View style={style.headerTitleView}>
                <Text style={style.headerTitleText}>     
                    {job.name}
                </Text>
            </View>
            <View style={style.headerSubTitleView}>
                <Text style={style.headerSubTitleTextLeft}>Locations: </Text>
                <Text style={style.headerSubTitleTextRight}>
                    {job.categories &&
                    job.locations.map((location: any, i : number) => 
                        location.name
                    )}
                </Text>
            </View>
            <View style={style.headerSubTitleView}>
                <Text style={style.headerSubTitleTextLeft}>Job Level: </Text>
                <Text style={style.headerSubTitleTextRight}>
                    {job.categories &&
                    job.levels.map((level: any, i : number) => 
                        level.name
                    )}
                    
                </Text>
            </View>
            <View style={style.headerBottomTitleView}>
                <Text style={style.headerBottomTitleText}>Job Detail</Text>
            </View>
        </View>
        <View style={style.containerBottom}>
            <View  style={style.descriptionView}>
                <ScrollView >
                    <HTMLView
                        value={job.contents}
                        />
                </ScrollView>
            </View>
        </View>
        <View style={style.buttonsView}>
            {!isSubmitState ? 
                 <ButtonComponent text={"Submit"}  iconName={"login"}  click={() => handleAddSubmitList()} setState={() => setIsSubmitState(!isSubmitState)} /> :  
                 <ButtonComponent text={"Submitted"}  iconName={"briefcase-check"}  click={() => {}} setState={() => {}} styleName={"submitted"}/>}
             {!isFavoriteState ? 
                 <ButtonComponent text={"Add Favorite"}  iconName={"bookmark-plus"}  click={() => handleAddFavorite()} setState={() => setIsFavoriteState(!isFavoriteState)} /> :  
                 <ButtonComponent text={"Remove Favorite"}  iconName={"bookmark-remove"}  click={() => handleRemoveFavorite()} setState={()=> setIsFavoriteState(!isFavoriteState)} />}
        </View>
    </View>
  )


}

export default JobDeailCard