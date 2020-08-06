import React from 'react';
import {Button, View,TouchableWithoutFeedback} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Feed from './src/screens/feed/screen/feedScreen';
import NewsDetails from './src/screens/newsDetails/screen/newsDetailsScreen'
import { StackNavigatorHelper } from 'react-navigation-helper';
import Settings from './src/screens/settings/settingsScreen';
import Bookmarks from './src/screens/bookmarks/bookmarksScreen'
import Icon from './src/components/icon';
import Touchable from './src/basicUIElements/touchable';
import { BookmarksListSchema } from './database/data';

//const color = EStyleSheet.value('$primaryColor');

const Routes = createStackNavigator({
    Feed: {
        screen: StackNavigatorHelper.setInitParamsToProps(Feed),
        navigationOptions: ({ navigation }) => ({
            title:'NewsApp',
            headerTitleStyle: {
                fontWeight: 'bold',
                color: '#ffffff'
            },
            headerRight: () => (
                <View  style={{
                    alignItems:'center',
                    justifyContent:'center',
                    width:40,
                    height:40,
                    borderRadius:25,
                    margin:10,
                    overflow:'hidden'
                }}>
                <Touchable  onPress={()=>{navigation.navigate('Settings')}}
                       style={{
                           alignItems:'center',
                           justifyContent:'center',
                           width:40,
                           height:40,
                           margin:10}}>
                    <Icon name={'settings'}

                          viewBox = "0 0 20 20"
                          height={25}
                          width={25}
                          fill={EStyleSheet.value('$white')}/>
                </Touchable>
                </View>

            ),
        }),
    },
    Settings:{
        screen:  StackNavigatorHelper.paramsToProps(Settings),
    },
    NewsDetails: {
        screen: StackNavigatorHelper.paramsToProps(NewsDetails),
    },
    Bookmarks: {
        screen: StackNavigatorHelper.paramsToProps(Bookmarks)
    }

},
{
    initialRouteName: 'Feed',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: "#88A0A8",
            elevation: 0,
            shadowOpacity: 0
        },
       headerTintColor: '#333333',
        headerTitleStyle: {
            fontWeight: 'bold',
            color:  "#fff"
        },
        transitionConfig: () =>
				StackNavigatorHelper.transitionConfig({
					Settings: 'push',
					NewsDetails: 'push'
				})
    }

});

export default createAppContainer(Routes);

