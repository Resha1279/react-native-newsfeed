import EStyleSheet, { absoluteFill } from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'$primaryBackgroundColor',
    margin:10,
    borderWidth:2,
    borderRadius:8,
    borderColor:'$borderColor',
    height: 240,
    overflow: 'hidden',
  },
  bookmark:{
    position:'absolute',
    top:-5,
    right:5,
    height:40,
    width:40,
    borderWidth:1,
    zIndex:10,
  },
  loadingContainer:{
    backgroundColor:'$primaryBackgroundColor',

  },
  textContainer:{
    marginTop:-140,
    height:140,
    backgroundColor:'$primaryTransparentBlack',
    overflow: 'hidden'
  },
  bottom:{
    //flex:1,
    height:40,
    flexDirection:'row',
    position:'absolute',
    bottom:0,
    zIndex:5,
    backgroundColor:'$primaryLightBackground',
    width:'100%',
    justifyContent:'space-between',
    paddingRight:10,

    //alignItems:'center'
  },
  primaryText: {
    fontWeight: 'bold',
    fontSize:16,
    color: '$primaryDarkText',
    textShadowColor: '$textShadow',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  secondaryText: {
    color: '$primaryText',
    fontSize:14,
    lineHeight:20,
    textShadowColor: '$textShadow',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  tertiaryText:{
    color: '$primaryFaintText',
    fontSize:14,
    lineHeight:20,
    textShadowColor: '$textShadow',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  feedImageContainer:{
    // width: '$deviceWidth-24',
    // height: 240,
    // //margin:8,
    // borderWidth:2,
    // borderColor:'$borderColor',
    // // borderRadius:6,
    // // resizeMode:'contain',
  },
  feedImage: {
    width: '100%',
    height: '100%',
    //margin:8,
   // borderWidth:2,
    //borderColor:'$borderColor',
    borderRadius:6,
    resizeMode:'cover',
   // overflow: 'hidden'
  },
  separator: {
    height:10,
    backgroundColor: '$primaryBackgroundColor',
    width:'$deviceWidth',
    elevation:1,
  },
  title: {
    paddingLeft: 10,
    marginVertical: 10,
  },
  description: {
    paddingLeft: 10,
    overflow:'hidden',
  },
  footer:{
    height:200,
    backgroundColor: '$primaryBackgroundColor',
    width:'$deviceWidth',
    elevation:1,
    alignItems:'center',
    marginLeft:-5,
    paddingTop:20,
  }
});
