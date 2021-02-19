import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../theme";

const styles = () => {
    return StyleSheet.create({
        container: {
            backgroundColor: Colors.white,
            flex: 1,
        },
        card: {
            alignItems: 'center',
            backgroundColor: Colors.card,
            marginVertical: '2%',
            height: 200,
            width: '50%',
            alignSelf: 'center',
            borderRadius: 20,
            overflow: 'hidden'
        },
        dead: {
            backgroundColor: Colors.gray,
            opacity: 0.75,
        },
        image: {
            width: '100%',
            flex: 1
        },
        name: {
            fontSize: Fonts.size.h5,
            fontFamily: Fonts.type.mdeium,
            marginVertical: 10
        },
    })
}

export default styles