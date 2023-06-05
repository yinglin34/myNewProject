import React, {useEffect, useState} from 'react'
import db from '../../api/firebaseconfig'
import {collection, onSnapshot} from "firebase/firestore"
import {View, FlatList, Text} from 'react-native'

const Account = () => {
    const [data, setData] = useState()
    useEffect(() => {
        const getDocuments = () => {
        const dbRef = collection(db, 'testCollection')
        onSnapshot(dbRef, (docsSnap) => {
        var docsArr = []
        docsSnap.forEach(doc => {
        docsArr.push(doc.data())
        setData(docsArr)
        })
        })
        }
        return getDocuments()
        },[])
    return (
        <View>
            <FlatList
            data={data}
            renderItem={({ item }) => <Text>{item.title}</Text>}
            />
        </View>
    )
}

export default Account