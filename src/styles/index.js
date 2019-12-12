
import { StyleSheet } from 'react-native';
import Colors from './colors';
import Values from './values';


export default styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.white,
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'column',
        margin: 15
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
        marginLeft: 10
    },
    searchQueryInput: {
        marginBottom: 10,
        height: Values.inputHeight,
    },
    priceFiltersInput: {
        flex: 3,
        marginLeft: 0
    }


});