import React from 'react';
import {View, FlatList, Text,Image,Button} from 'react-native' 
import {queryAllBookmarkLists,deleteBookmark} from '../../../database/data'

class Bookmarks extends React.Component{

    constructor(props){
        super(props);

        this.state={
            BookmarkLists:''
        }
    }



    componentDidMount(){
        this.getBookmarks()
    }

    getBookmarks = () => {
        queryAllBookmarkLists().then((BookmarkLists) => {
            this.setState({ BookmarkLists });
            alert(`Bookmarks: ${this.state.BookmarkLists}`)
        }).catch((error) => {
            this.setState({ BookmarkLists: [] });
            alert(`Bookmarks error: ${error}`)
        });
    
    }

    onDeleteBookmark = () => {
        deleteBookmark(id).then().catch(error => {
            alert(`Failed to delete bookmark with id = ${id}, error=${error}`);
        });
    }

    renderBookmarksList=(item)=>{
        console.log('item from bookmarks',item);
        return(
            <View>
        

                <View>
                <Text>source.com</Text>
                </View>
                <View>
                    <Text>{item.title}</Text>
                </View>
                <View  style={{marginBottom:20}}>
                    <Text>{item.created_at}</Text>
                </View>
    <Image source={{uri: item.image_url}} />

                <View style={{marginTop:20}}>
        <Text>
            {item.description}
        </Text>
    </View>
    <View>
            </View>

                <View>
                    <Button title={'Delete'} onPress={this.onDeleteBookmark}/>
                </View>
            </View>
        )
    }

    render(){
        return(
            <View>
                 <FlatList
                    data={this.state.BookmarkLists}
                    renderItem={({item})=>(this.renderBookmarksList(item))}
                    keyExtractor={item => (item.id).toString()}
                    removeClippedSubview={true}/>
            </View>
        )
    }
}

export default Bookmarks;