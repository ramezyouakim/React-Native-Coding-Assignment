

/**React native components imports */
import React from 'react';
import {
    View,
    ImageBackground,
    Text,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialTabs from 'react-native-material-tabs';
import HotelRoomCardComponent from '../../components/hotelRoomCard'

/**Import Style Sheet */
import styles from '../../styles';

/**import color values */
import Colors from '../../styles/colors'

/**Hotel Room details Screen */
export default class HotelRoomDetailsScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            roomDetail: this.props.navigation.state.params.roomDetail,
            bookmarkIconName: 'bookmark-o',
            loveIconName: 'heart-o',
            selectedTab: 0
        }
    }

    componentWillMount(){
        HotelRoomCardComponent.prototype.checkForBookmarkOrFav('bookmark', 'bookmarkIconName', 'bookmark');
        HotelRoomCardComponent.prototype.checkForBookmarkOrFav('fav', 'loveIconName', 'heart');
    }

    renderSwitchDetail(param) {
        switch (param) {
            case 0:
                return <Text>{this.state.roomDetail.info}</Text>;
            case 1:
                return <Text>{this.state.roomDetail.noBath}</Text>;
            case 2:
                return <Text>{this.state.roomDetail.nobed}</Text>;
            default:
                return <Text>{this.state.roomDetail.info}</Text>;
        }
    }

    render() {
        return (
            <View style={styles.detailsContainer}>
                <ImageBackground
                    source={{ uri: this.state.roomDetail.imageUrl }}
                    style={[styles.cardCoverImageSize, { height: 270 }]}
                >
                    <View style={[styles.row, { padding: 20 }]}>
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack(null) }}>
                            <Icon
                                name={'angle-left'}
                                size={35}
                                color={Colors.black} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.state.bookmarkIconName == 'bookmark-o' ? this.setState({ bookmarkIconName: 'bookmark' }) : this.setState({ bookmarkIconName: 'bookmark-o' }) }}>
                            <Icon
                                name={this.state.bookmarkIconName}
                                size={30}
                                color={Colors.white} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <View style={[styles.miniDetailsCard, styles.shadowBox, { margin: 25 }]}>
                    <View style={[styles.row,{padding:10}]}>
                        <Text style={styles.cityName}>{this.state.roomDetail.cityName}</Text>
                        <Text style={styles.price}>{this.state.roomDetail.price}</Text>
                    </View>

                    <View style={[styles.row, { marginTop: 20 }]}>
                        <Text style={styles.HotelRoomAddress}>{this.state.roomDetail.address}</Text>
                        <TouchableOpacity onPress={() => { this.state.loveIconName == 'heart-o' ? this.setState({ loveIconName: 'heart' }) : this.setState({ loveIconName: 'heart-o' }) }}>
                            <Icon
                                style={{ margin:10 }}
                                name={this.state.loveIconName}
                                size={25}
                                color={Colors.black} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.detailsInfoContainer}>
                        {this.renderSwitchDetail(this.state.selectedTab)}
                    </View>

                    <MaterialTabs
                        items={['Details', 'Amenities', 'Rooms']}
                        selectedIndex={this.state.selectedTab}
                        onChange={(i) => { this.setState({ selectedTab: i }) }}
                        barColor="#fff"
                        indicatorColor="#5768F0"
                        activeTextColor="black"
                        inactiveTextColor="black"
                    />
                </View>

            </View>
        );
    };
}

/**End of the Hotel Room details Screen */













