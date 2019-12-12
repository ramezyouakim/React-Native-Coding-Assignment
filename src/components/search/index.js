
/**React native components imports */
import React from 'react';
import {
    View,
    TextInput,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

/**Import Style Sheet */
import styles from '../../styles'

/**search Component */
export default class SearchComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            priceRanges: [
                { label: '$0 - $2500', value: '0-2500' },
                { label: '$2500 - $5000', value: '2500-5000' },
                { label: '$5000 - $10000', value: '5000 - 10000' }
            ],
            brRange: [
                { label: '1br', value: '1br' },
                { label: '2br', value: '2br' },
                { label: '3br', value: '3br' }
            ],
            bdRange: [
                { label: '1bh', value: '1bh' },
                { label: '2bh', value: '2bh' },
               
            ]
        }
    }

    render() {
        return (
            <View style={styles.searchContainer}>
                <TextInput
                    style={[styles.InputStyle, styles.searchQueryInput]}
                    onChangeText={text => this.props.onStateChange('searchQuery', text)}
                    value={this.props.searchQuery}
                />
                <View style={styles.searchFiltersInputsContainer}>
                    <View style={[styles.InputStyle, styles.searchFiltersInput, styles.priceFiltersInput]}>
                        <RNPickerSelect
                            onValueChange={(value) => this.props.onStateChange('priceRange', value)}
                            placeholder={{label:'Price Range',value:null}}
                            value={this.props.priceRange}
                            items={this.state.priceRanges} />
                    </View>
                    <View style={[styles.InputStyle, styles.searchFiltersInput]}>
                        <RNPickerSelect
                            onValueChange={(value) => this.props.onStateChange('noBr', value)}
                            placeholder={{label:'No. bed',value:null}}
                            value={this.props.noBr}
                            items={this.state.brRange} />
                    </View>
                    <View style={[styles.InputStyle, styles.searchFiltersInput]}>
                        <RNPickerSelect
                            onValueChange={(value) => this.props.onStateChange('noBh', value)}
                            placeholder={{label:'No. bathroom',value:null}}
                            value={this.props.noBh}
                            items={this.state.bdRange} />
                    </View>
                </View>
            </View>
        );
    };
}
/**End of the search Component */




