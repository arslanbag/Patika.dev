import React, { useState } from 'react'
import { Pressable, Text, TouchableOpacity, View } from 'react-native'
import style from './JobCard.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function JobCard({ item, toJobDetails, removeFavorite = null }: any) {
    const { categories, company, locations, levels, id, name }: any = item

    let categoriesName: string = ''
    {
        categories.map((category: any, i: number) =>
            categoriesName += category.name
        )
    }

    return (
        <TouchableOpacity
            style={style.container}
            onPress={() => toJobDetails({ id, categoriesName })}
        >
            <View style={style.titleView}>
                <Text style={style.title}>{name} </Text>
            </View >
            <View style={style.companyView} >
                <Text style={style.company}>{company.name}</Text>
            </View>

            <View style={style.locationView}>
                {locations.map((location: any, i: number) => (
                    <Text key={i} style={style.location}>{location.name} </Text>
                ))}
            </View>

            <View style={style.jobLevelView}>
                <Text style={style.jobLevel}>
                    {levels.map((level: any, i: number) =>
                        level.name
                    )}
                </Text>
            </View>
            {removeFavorite != null &&
                <View style={style.buttonsView}>
                    <Pressable style={style.buttonsButton}
                        onPress={() => removeFavorite(item)}
                    >
                        <Icon name={"bookmark-remove"} size={20} color="white" />
                        <Text style={style.buttonsButtonText}>Remove Favorite</Text>
                    </Pressable>
                </View>
            }
        </TouchableOpacity>
    )
}

export default JobCard