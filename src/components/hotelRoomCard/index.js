
/**React native components imports */
import React from 'react';
import {
    View,
    ImageBackground,
    Text,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/**Import Style Sheet */
import styles from '../../styles';

/**import color values */
import Colors from '../../styles/colors'

/**Imports of actions  */
import { storeData, retrieveData } from '../../actions/storage';


/**Hotel Room Card Component */
export default class HotelRoomCardComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bookmarkIconName: 'bookmark-o',
            loveIconName: 'heart-o'
        }
    }

    componentDidMount() {
        this.checkState();
    }

    checkState() {
        this.checkForBookmarkOrFav('bookmark', 'bookmarkIconName', 'bookmark', this.props.roomDetail.postId);
        this.checkForBookmarkOrFav('fav', 'loveIconName', 'heart', this.props.roomDetail.postId)
    }

    /**check if this room is in he bookmark or favorite  */
    checkForBookmarkOrFav(key, iconName, iconOn, postId) {

        retrieveData(key).then((value) => {
            let bookmark = JSON.parse(value);
            if (bookmark.includes(postId)) {
                this.setState({ [iconName]: iconOn })
            }
        })
    }
    /**event handler for adding or removing at the bookmark or favorite list */
    addToBookMarkOrFav(key, postId, iconName, IconValueOn, IconValueOff) {
        retrieveData(key).then((value) => {
            let arrayName = JSON.parse(value);

            if (!arrayName) {
                arrayName = []
                arrayName.push(postId);
                updateList.call(this, key, arrayName, iconName, IconValueOn)
            }
            else {
                if (arrayName.includes(postId)) {
                    arrayName.pop(postId);
                    updateList.call(this, key, arrayName, iconName, IconValueOff)
                }
                else {
                    arrayName.push(postId);
                    updateList.call(this, key, arrayName, iconName, IconValueOn)
                }
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <TouchableOpacity onPress={() => { this.props.nav('HotelRoomDetailsScreen', { roomDetail: this.props.roomDetail }) }}>
                <View style={styles.cardContainer}>
                    <ImageBackground
                        source={{ uri: this.props.roomDetail.imageUrl }}
                        style={[styles.cardCoverImageSize, styles.shadowBox]}
                        imageStyle={styles.cardCoverImageStyle}>
                        <View style={styles.bookmarkIconConatiner}>
                            <TouchableOpacity onPress={() => { this.addToBookMarkOrFav('bookmark', this.props.roomDetail.postId, 'bookmarkIconName', 'bookmark', 'bookmark-o') }}>
                                <Icon
                                    name={this.state.bookmarkIconName}
                                    size={30}
                                    color={Colors.white} />

                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                    <View style={[styles.miniDetailsCard, styles.shadowBox]}>
                        <View style={styles.row}>
                            <Text style={styles.cityName}>{this.props.roomDetail.cityName}</Text>
                            <Text style={styles.price}>{this.props.roomDetail.price}</Text>
                        </View>
                        <Text style={styles.HotelRoomAddress}>{this.props.roomDetail.address}</Text>
                        <View style={styles.row}>
                            <Text style={styles.hotelRoomDetails}>{this.props.roomDetail.nobed} bed   {this.props.roomDetail.noBath} bath</Text>
                            <TouchableOpacity onPress={() => { this.addToBookMarkOrFav('fav', this.props.roomDetail.postId, 'loveIconName', 'heart', 'heart-o') }}>
                                <Icon
                                    name={this.state.loveIconName}
                                    size={25}
                                    color={Colors.black} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </TouchableOpacity>
        );
    };
}
/**End of the Hotel Room Card Component */

/**update fav or bookmark list in the storage and change icons function */
function updateList(key, arrayName, iconName, IconValue) {
    storeData(key, JSON.stringify(arrayName)).then(() => {
        this.setState({ [iconName]: IconValue })
    })
}




