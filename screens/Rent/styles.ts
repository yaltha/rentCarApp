import { Dimensions, StatusBar, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    rentContainer:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight
    },
    scrollViewContainer:{
        
    },
    subTitleText:{
        textTransform: 'uppercase',
        alignSelf: 'flex-start',
        fontWeight: 'bold',
    },
    selectCarContainer:{
        width: Dimensions.get('window').width - 30,
        height: 400,
        backgroundColor: '#e5e5e5',
        borderRadius: 10,
        marginVertical:10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gearTransmisionContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: Dimensions.get('window').width - 30,
        backgroundColor: 'transparent',
        borderWidth: 3,
        borderColor: '#ffc100',
        marginVertical:20
    },
    manualStyle:{
        width: (Dimensions.get('window').width - 50)/2,
        backgroundColor: '#ffc100',
        padding: 20,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gearText:{
        textTransform: 'uppercase',
        color: '#fffccc'
    },
    autoMaticStyle:{
        width: (Dimensions.get('window').width - 50)/2,
        backgroundColor:'#adadad',
        padding: 20,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pickDateContainer:{
        width: Dimensions.get('window').width - 40,
    },
    startDate:{
        marginTop: 10,
        backgroundColor: 'wheat',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
    },
    endDate:{
        marginTop: 10,
        backgroundColor: 'wheat',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
    },
    pickDate:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ctaBtn:{
        backgroundColor: '#ffc100',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 20,
        padding: 20,
        borderRadius: 50,
    },
    ctaBtnText:{
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginLeft: 10
    }
}) 