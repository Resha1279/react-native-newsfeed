import React from 'react';
import {View, Text, FlatList,Switch} from 'react-native';
import styles from './settingsStyles'
import Touchable from '../../basicUIElements/touchable'
import { withNavigation } from 'react-navigation';

//const { navigate } = this.props.navigation;


const DATA = [
    {
        key:1,
        title:'Dark Mode',
        iconLeft:'',
        button:'switch',
       // onSwitch:{this.props.toggleTheme}
    },
    {
        key:2,
        title:'Notifications & Sounds',
        iconLeft:'',
        iconRight:'',
        //onPress:this.props.navigation.navigate('Bookmarks')
    },
    {
        key:3,
        title:'Language',
        iconLeft:'',
        iconRight:'',
       // onPress:this.props.navigation.navigate('Bookmarks')
    },
    {
        key:4,
        title:'Bookmarks',
        iconLeft:'',
        iconRight:'',
        //onPress:this.props.navigation.navigate('Bookmarks')
    },
    {
        key:5,
        heading:'Support',
    },
    {
        key:6,
        title:'Feedback',
        iconLeft:'',
        iconRight:'',
        onPress:'Bookmarks'
    },
    {
        key:7,
        title:'Report a Problem',
        iconLeft:'',
        iconRight:'',
       // onPress:this.props.navigation.navigate('Bookmarks')
    },
    {
        key:8,
        title:'Help',
        iconLeft:'',
        iconRight:'',
       // onPress:this.props.navigation.navigate('Bookmarks')
    },
    {
        key:9,
        title:'Legal & Policies',
        iconLeft:'',
        iconRight:'',
       // onPress:this.props.navigation.navigate('Bookmarks')
    },
];


class Settings extends React.Component {

    constructor(props){
        super(props)
    }


    renderSettingsList=(item) =>{
        return (
            <View>
        
                {item.heading ?
                    <Text style={styles.heading}>{item.heading}</Text> :
                    <Touchable onPress={()=>this.props.navigation.navigate('Bookmarks')}>
                    <View  style={styles.item}>
                        <View style={styles.iconContainer}>

                        </View>
                    <Text style={styles.title}>{item.title}</Text>
                {item.button==='switch'?
                    <View style={styles.button}>
                    <Switch 
                      onValueChange = {item.onSwitch}
                      value = {false}/>
                    </View>
                    : null}
                    </View>
                    </Touchable>
                }
            
            </View>
        );
    };

    separator=()=>(
        <View style={styles.separator}/>
        );


    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={DATA}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item})=>(this.renderSettingsList(item))}
                    keyExtractor={item => (item.key).toString()}
                    removeClippedSubview={true}
                    ItemSeparatorComponent={() => (
                        <View style={styles.separator} />
                        )}
                />
            </View>
        );
    }
}

export default withNavigation(Settings);
