
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
import SearchComponent from '../../components/search';
import HotelRoomCard from '../../components/hotelRoomCard';

/**HomeScreen Component */
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: '',
      priceRange: '',
      noBr: '',
      noBh: '',
      hotelRoomsList:{
        postId:'1',
        cityName:'williamsburg',
        address:'14 Dunham PI #3G',
        price:'$1,200',
        nobed:'1',
        noBath:'1',
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSncZLxJJPzxlVpXJcytsHhHIlcJh3A2f2UVf2HLkL-adMgGGcT"
      }
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
          <HotelRoomCard
              postId={this.state.hotelRoomsList.postId}
              cityName={this.state.hotelRoomsList.cityName}
              address={this.state.hotelRoomsList.address}
              price={this.state.hotelRoomsList.price}
              nobed={this.state.hotelRoomsList.nobed}
              noBath={this.state.hotelRoomsList.noBath}
              image={this.state.hotelRoomsList.imageUrl}
          />
         
        </ScrollView>

      </>
    );
  };
}
/**End of the HomeScreen Component */




