import { Text } from "react-native";



function Title ({text, color}) {
    return (
        <Text style={{color: color, textAlign: 'center', fontSize: 48, fontFamily: 'LickerliOne-Regular', marginBottom: 40}}>
            {text}
        </Text>
    )
}
export default Title