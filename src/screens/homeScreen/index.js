
/**React native components imports */
import React from 'react';
import {
  
  ScrollView,
  StatusBar,
  View,
  Text
} from 'react-native';

/**Import Style Sheet */
import styles from '../../styles'

/**Imports of Components */
import SearchComponent from '../../components/search'

/**HomeScreen Component */
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: '',
      priceRange: '',
      noBr: '',
      noBh: ''
    }
  }

  onFilterSearchStateItemChange(key, value) {
    this.setState({
      [key]: value
    })
  
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />

        <ScrollView
          style={styles.scrollView}>
          <SearchComponent
            searchQuery={this.state.searchQuery}
            noBh={this.state.noBh}
            noBr={this.state.noBr}
            priceRange={this.state.priceRange}
            onStateChange={this.onFilterSearchStateItemChange.bind(this)}
          />
         
        </ScrollView>

      </>
    );
  };
}
/**End of the HomeScreen Component */




