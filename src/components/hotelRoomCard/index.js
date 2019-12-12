
/**React native components imports */
import React from 'react';
import {
    View,
    ImageBackground,
    Text,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/**Import Style Sheet */
import styles from '../../styles';

/**import color values */
import Colors from '../../styles/colors'
import { TouchableOpacity } from 'react-native-gesture-handler';

/**Hotel Room Card Component */
export default class HotelRoomCardComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bookmarkIconName: 'bookmark-o'
        }
    }

    render() {
        return (
            <View style={styles.cardContainer}>
                <ImageBackground
                    source={{ uri: this.props.image }}
                    style={styles.cardCoverImageSize}
                    imageStyle={styles.cardCoverImageStyle}>
                    <View style={styles.bookmarkIconConatiner}>
                        <TouchableOpacity onPress={() => { this.setState({ bookmarkIconName: 'bookmark' }) }}>
                            <Icon
                                name={this.state.bookmarkIconName}
                                size={30}
                                color={Colors.white} />

                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <View style={styles.miniDetailsCard}>
                    <View style={styles.row}>
                        <Text style={styles.cityName}>{this.props.cityName}</Text>
                        <Text style={styles.price}>{this.props.price}</Text>
                    </View>
                </View>
            </View>
        );
    };
}
/**End of the Hotel Room Card Component */




