import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({

    rowTextStyle: {
        fontSize: 12,
         padding: 5,
        color: '$primaryDarkText',
    },
    dropdownStyle: {
        marginLeft:16,
        marginTop: -1,
        minWidth: 150,
        width: 150,
        maxHeight: '$deviceHeight/2',
        elevation:3,
        backgroundColor:'$primaryLightBackground',
        //opacity:0.97,
    },
    dropdownText: {
        fontSize: 14,
        paddingVertical:10,
        paddingHorizontal: 16,
        color: '$primaryDarkText',
    },
});
