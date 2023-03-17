import { Dimensions, StyleSheet } from "react-native";

const mleft = (Dimensions.get("window").width / 2.2 - Dimensions.get("window").width / 2.4) / 2
const window_width=Dimensions.get("window").width
export default StyleSheet.create({
    product_container: {

     
        backgroundColor: "gainsboro",
        borderRadius: 5,
        margin: 8,
        flex: 1,
        flexDirection: "column",
    },
    img: {
        margin: mleft,
        height: Dimensions.get("window").height / 3.7,
        borderRadius:5,
        resizeMode:"contain"

    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        marginLeft: mleft
    },
    price: {
        fontSize: 16,
        marginLeft:mleft
    },
    stock:{
        fontSize:16,
        color:"red",
        margin:5
    }


})