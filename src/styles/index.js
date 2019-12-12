
import { StyleSheet } from 'react-native';
import Colors from './colors';
import Values from './values';


export default styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.white,
        padding:Values.margin2
    },
    row:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'red'
    },  
    searchContainer: {
        flex: 1,
        flexDirection: 'column',
        margin: Values.margin1,
        marginBottom:0
    },
    InputStyle: {
        borderColor: Colors.gray,
        borderWidth: Values.inputBorderWidth,
        borderRadius: Values.inputborderRadius,
    },
    searchFiltersInputsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    searchFiltersInput: {
        flex: 2,
        height: Values.inputHeight,
        marginLeft: Values.margin2
    },
    searchQueryInput: {
        marginBottom: Values.margin2,
        height: Values.inputHeight,
    },
    priceFiltersInput: {
        flex: 3,
        marginLeft: 0
    },
    cardContainer: {
        flex: 1,
        margin: Values.margin1
    },
    cardCoverImageSize: {
        width: '100%',
        height: 225,
    },
    cardCoverImageStyle: {
        borderRadius: Values.cardCoverImageContainerBorderRadius
    },
    bookmarkIconConatiner: { 
        width: 70, 
        alignSelf: 'flex-end',
        alignItems:'flex-end',
        paddingTop:Values.margin1,
        paddingRight:Values.margin1
    },
    miniDetailsCard:{
        margin:Values.margin2,
        padding:Values.margin2,
        borderRadius:Values.cardCoverImageContainerBorderRadius,
        backgroundColor:Colors.white,
        position:'absolute',
        bottom:5,
        left:0,
        right:0
    },
    cityName:{
        backgroundColor:Colors.green,
        color:Colors.white,
        alignSelf:'flex-start',
        padding:5,
        borderRadius:Values.inputborderRadius,
    },
    price:{
       justifyContent:'flex-end'
    }

});