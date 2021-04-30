import { StyleSheet, Dimensions, StatusBar } from 'react-native'

const screen = Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        marginTop: StatusBar.currentHeight + 50,
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: '#0F0909'
    },
    account:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    img:{
      width: 50,
      height: 50,
      borderRadius: 50,
      backgroundColor: '#ffc100',
    },
    nameText:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    accountImage:{},
    currentDepositText:{
        fontSize: 18,
        color: '#FFC100'
    },
    depositAmountText:{
        fontSize: 38
    },
    addMoreText:{
        marginBottom: 30
    },
    currentOrderCard:{
        width: screen.width - 40,
        backgroundColor: 'white',
        paddingHorizontal:10,
        paddingVertical: 20,
        marginTop: 10,
        borderRadius: 5,
        
        shadowColor: "#0F0909",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardTitleText:{
        fontSize: 18,
        lineHeight: 30
    },
    nothingText:{
        fontSize:12,
        color: 'grey'
    },
    recentRentingCard:{
        width: screen.width - 40,
        backgroundColor: 'white',
        paddingHorizontal:10,
        paddingVertical: 20,
        marginTop: 10,
        borderRadius: 5,
        
        shadowColor: "#0F0909",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
}) 
    
export default styles