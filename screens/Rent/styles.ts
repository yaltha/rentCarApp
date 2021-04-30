import { Dimensions, StatusBar, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    rentContainer:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight
    },
    subTitleText:{
        textTransform: 'uppercase',
        alignSelf: 'flex-start',
        marginLeft: 15,
        fontWeight: 'bold'
    },
    selectCarContainer:{
        width: Dimensions.get('window').width - 30,
        height: 400,
        backgroundColor: '#e5e5e5',
        // borderWidth: 1,
        // borderColor: 'grey',
        borderRadius: 10,
        marginVertical:10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gearTransmisionContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width - 40,
        backgroundColor: 'transparent',
        borderWidth: 3,
        borderColor: '#ffc100',
        padding: 5
    },
    manualStyle:{
        backgroundColor: '#ffc100',
        padding: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gearText:{
        textTransform: 'uppercase',
        color: '#fffccc'
    },
    autoMaticStyle:{
        backgroundColor:'#adadad',
        padding: 50,
    },
    pickDateContainer:{
        width: Dimensions.get('window').width - 40,
    },
    startDate:{},
    endDate:{}
}) 