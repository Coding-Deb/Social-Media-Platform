import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NameCard from './NameCard'

export default function AllDataCard() {
    const Data = [
        {
            id: 1,
            name: 'User_01',
            date: '27-11-2022'
        },
        {
            id: 2,
            name: 'User_02',
            date: '28-11-2022'
        },
        {
            id: 3,
            name: 'User_03',
            date: '29-11-2022'
        },
        {
            id: 4,
            name: 'User_04',
            date: '30-11-2022'
        },
        {
            id: 5,
            name: 'User_05',
            date: '01-12-2022'
        },
        {
            id: 6,
            name: 'User_06',
            date: '02-12-2022'
        },
    ]
    // console.log(Data);
    return (
        <FlatList
            data={Data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return (
                    <NameCard
                        key={item.id}
                        name={item.name}
                        date={item.date}
                    />
                )
            }}
        />
    )
}

const styles = StyleSheet.create({})