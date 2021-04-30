import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 40,
    height: "100%",
    width: "100%",
  },
  greeting: {
    color: "#0f0f0f",
    fontSize: 35,
    fontWeight: 'bold'
  },
  iconContainer:{
    backgroundColor: '#ffc100', 
    padding: 10,
    borderRadius: 50
  },
  button:{
    backgroundColor: '#ffc100',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 30,
    borderRadius: 5,
    
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOpacity: 0.5,
    shadowOffset: { height: 2, width: 0 },
  }
});

export default styles;
