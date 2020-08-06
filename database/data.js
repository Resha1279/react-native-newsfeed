import Realm from 'realm'

//export const SETTINGS = "settings";
export const BOOKMARKS = "bookmarks";
export const BOOKMARKS_LIST = "bookmarksList"

// export const SettingsSchema = {
//     name: SETTINGS,
//     primaryKey: 'id',
//     properties:{
//         id:'int',
//         darkmode:{type:'bool',default:false},

//     }
// }

export const BookmarksSchema = {
    name : BOOKMARKS,
    primaryKey: 'id',
    properties:{
        id: 'int',
        title:'string',
        description:'string',
        image_url:'string',
        created_at:'string',
        read: { type: 'bool', default: false }
    }

}

export const BookmarksListSchema = {
    name: BOOKMARKS_LIST,
    primaryKey: 'id',
    properties:{
        id:'int',
        bookmarksList:{ type: 'list', objectType: BOOKMARKS },
    }
}

const databaseOptions={
    path:"NewsFeed.realm",
    schema:[BookmarksListSchema,BookmarksSchema]
}

// export const toggleTheme = toggleTheme => new Promise((resolve,reject)=>{
//      Realm.open(databaseOptions).then(realm=>{
//         realm.write(()=>{
//             SettingsSchema.darkmode=!darkmode;
//             resolve();
//         });
//      }).catch((error)=>reject(error));;
// });

export const createBookmark = newBookmark => new Promise((resolve,reject)=>{
    Realm.open(databaseOptions).then(realm=>{
        realm.write(()=>{
            realm.create(BOOKMARKS_LIST,newBookmark);
            resolve(newBookmark);
        })
    }).catch((error)=>reject(error));;
})

export const deleteBookmark = bookmarkId => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        realm.write(() => {
            let deletingBookmarkList = realm.objectForPrimaryKey(BOOKMARKS_LIST, bookmarkId);
            realm.delete(deletingBookmarkList.bookmarksList);
            realm.delete(deletingBookmarkList);
            resolve();   
        });
    }).catch((error) => reject(error));;
});

export const queryAllBookmarkLists = () => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        let allBookmarkLists = realm.objects(BOOKMARKS_LIST);
        resolve(allBookmarkLists);  
    }).catch((error) => {        
        reject(error);  
    });;
});

export const deleteAllBookmarkLists = () => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        realm.write(() => {
            let allBookmarkLists = realm.objects(BOOKMARKS_LIST);
            for (var index in allBookmarkLists) {
                let eachBookmarkList = allBookmarkLists[index]
                realm.delete(eachBookmarkList.bookmarksList);
            }
            realm.delete(allBookmarkLists);
            resolve();
        });
    }).catch((error) => reject(error));;
});

export const getBookmarksFromBookmarksListId = (bookmarkListId) => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let bookmarkList = realm.objectForPrimaryKey(BOOKMARKS_LIST, bookmarkListId);
        resolve(bookmarkList.bookmarksList);
    }).catch((error) => {
        reject(error);
    });;
});

export default new Realm(databaseOptions);