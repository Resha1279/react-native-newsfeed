import React from 'react';
import {
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
    View,
} from 'react-native';



const Touchable = (props) => {
    if (Platform.OS === 'android') {
        const {style, children, radius, ...otherProps} = props;
        return (
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.SelectableBackground()}
                style={style}
                {...otherProps}
            >
                {children
                    ? <View style={style}>
                        {children}
                    </View>
                    : null}
            </TouchableNativeFeedback>
        );
    }
    else {
        return (
            <TouchableOpacity>{children}</TouchableOpacity>
        )
    }
};

export default Touchable;
