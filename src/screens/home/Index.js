import { StyleSheet, View, Text, FlatList } from "react-native";
import Listitme from "../../component/List";
const DATA =[
    {
        id:'1',
        name:'yogit',
        age:22,
        branch:'IT'
    },
    {
        id:'2',
        name:'Rohit',
        age:23,
        branch:'Agriculture'
    },
    {
        id:'3',
        name:'Rahul',
        age:24,
        branch:'Bio'
    },
    {
        id:'4',
        name:'Deepak',
        age:25,
        branch:'Science'
    },
    {
        id:'5',
        name:'yogit',
        age:22,
        branch:'IT'
    },
    {
        id:'6',
        name:'Nimish',
        age:21,
        branch:'IT'
    },
    {
        id:'7',
        name:'ANkit',
        age:22,
        branch:'Mathematics'
    }
]
const uniquedata = DATA.filter(({id},i,arr)=>arr.findIndex((value)=>value.name==='yogit')===i);
console.log(uniquedata)
const renderelement=({id,item})=>{
    return(
        <Listitme
        id={item.id}
        title={item.name}
        />
    )
}
const HomeScreen = () => {
    return (
            <FlatList
            data={uniquedata}
            renderItem={renderelement}
            keyExtractor={item=>item.id}
            />
    )
}
export default HomeScreen;