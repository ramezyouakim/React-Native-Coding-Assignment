
import { StyleSheet } from 'react-native';
import Colors from './colors';
import Values from './values';


export default styles = StyleSheet.create({
    mainView: {
        backgroundColor: Colors.white,
        padding: Values.margin2,
        paddingBottom:0,
        flex:1,
        
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        marginRight: Values.margin3,
        justifyContent: 'space-between'
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'column',
        margin: Values.margin1,
        marginBottom: 110
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
        marginLeft: 0,
    },
    cardContainer: {
        flex: 1,
        paddingBottom: 50,
        margin: Values.margin1,
        marginBottom:Values.margin4,
        backgroundColor: Colors.white

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
        alignItems: 'flex-end',
        paddingTop: Values.margin1,
        paddingRight: Values.margin1
    },
    miniDetailsCard: {
        margin: Values.margin2,
        padding: Values.margin2,
        borderRadius: Values.inputborderRadius,
        backgroundColor: Colors.white,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,

        borderWidth: 1,
        borderColor: 'lightgray'

    },
    cityName: {
        backgroundColor: Colors.green,
        color: Colors.white,
        padding: 5,
        borderRadius: Values.inputborderRadius,
    },
    price: {
        alignSelf: 'center',
        fontSize: Values.priceFontSize,
        fontWeight: Values.priceFontWeight,
    },
    HotelRoomAddress: {
        fontSize: Values.priceFontSize,
        marginLeft: Values.margin1,
        marginTop: Values.margin3,
    },
    hotelRoomDetails: {
        marginLeft: Values.margin1,
        color: Colors.darkGray,
        marginTop: Values.margin4,
        marginBottom: Values.margin4,
        fontSize: Values.detailsFontSize
    },
    shadowBox: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    detailsContainer:{
        flex:1,
        backgroundColor:Colors.gray
    },
    detailsInfoContainer:{
        margin: Values.margin1,
     
        height:150,
        marginTop: Values.margin4,
        marginBottom: 0,
  
    }
});