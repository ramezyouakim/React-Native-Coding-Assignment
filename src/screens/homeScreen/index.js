
/**React native components imports */
import React from 'react';
import {
  StatusBar,
  FlatList,
  View,
  ActivityIndicator
} from 'react-native';

/**Import Style Sheet */
import styles from '../../styles'

/**Imports of Components */
import SearchComponent from '../../components/search';
import HotelRoomCard from '../../components/hotelRoomCard';

/**Imports of actions */
import makeCall from '../../actions/network/apiCalls'


/**HomeScreen Component */
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: '',
      priceRange: '',
      noBr: '',
      noBh: '',
      loading: true,
      hotelRoomsList: [],
      apiEndPiont: "https://jsonstorage.net/api/items/32244f09-e944-44df-b76f-32a49933f993"
    }
  }

  onFilterSearchStateItemChange(key, value) {
    this.setState({
      [key]: value
    })

  }

  componentWillMount() {
    this.fetchApi()
  }

  fetchApi() {
    makeCall(this.state.apiEndPiont)
      .then((res) => {
        this.setState({
          hotelRoomsList: res,
          loading: false
        })
      }).catch((err) => {
        console.log(err);
        this.setState({
          loading: false
        })
      })
  }
  render() {
    if (this.state.loading) return <ActivityIndicator style={{ flex: 1 }} size="large" color="#00ff00" />

    return (
      <>
        <StatusBar barStyle="dark-content" />

        <View
          style={styles.mainView}>
          <SearchComponent
            searchQuery={this.state.searchQuery}
            noBh={this.state.noBh}
            noBr={this.state.noBr}
            priceRange={this.state.priceRange}
            onStateChange={this.onFilterSearchStateItemChange.bind(this)}
          />
          <FlatList
            data={this.state.hotelRoomsList}
            renderItem={({ item }) => (
              //we can pass each prop individual but we will need the other info to pass it down to the details screen so i gonna  pass the whole obj  to avoid passing the whole obj and the individual prop so that will be sending it twice
              <HotelRoomCard
                roomDetail={item}
                nav={this.props.navigation.navigate}
              />
            )}
            keyExtractor={item => item.postId}
          />
        </View>

      </>
    );
  };
}
/**End of the HomeScreen Component */




