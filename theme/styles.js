import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "#101010",
    flex: 1,
  },
  homeHeaderButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  homeHeaderLogoContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  homeHeaderLogo: {
    height: 40,
    width: 40,
  },
  homeHeaderText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  homeHeaderButtons: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  homeCategoryContainer: {
    flex: 1,
    marginTop: 5,
  },
  homeCategories: {
    paddingLeft: 10,
  },
  homeCategoriesScrollView: {
    padding: 5,
    paddingBottom: 10,
  },
  homeShortsContainer: {
    padding: 5,
    paddingLeft: 15,
    maxHeight: 600,
  },
  homeShortsFormatting: {
    flexDirection: "row",
    alignItems: "center",
  },
  homeShortsImages: {
    height: 25,
    width: 20,
  },
  homeShortsText: {
    color: "white",
    fontSize: 20,
    paddingLeft: 5,
    fontWeight: "bold",
    padding: 10,
  },
  homeShortsMap: {
    flexDirection: "column",
    flexWrap: "wrap",
  },

  // shorts UI

  shortsImage: {
    height: "100%",
    width: "100%",
  },
  shortsHeaderContainer: {
    flexDirection: "row",
    position: "absolute",
    paddingTop: windowHeight - 920,
    paddingLeft: windowWidth - 340,
  },
  shortsButtonsContainer: {
    flexDirection: "column",
    position: "absolute",
    paddingLeft: windowWidth - 45,
    paddingTop: windowHeight - 420,
  },
  shortsButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
  shortsSoundImage: {
    position: "absolute",
    paddingLeft: windowWidth - 50,
    paddingTop: windowHeight - 100,
  },
  shortsDescriptionUserImage: {
    position: "absolute",
    paddingTop: windowHeight - 145,
    paddingLeft: windowWidth - 435,
  },
  shortsDescriptionUser: {
    position: "absolute",
    paddingTop: windowHeight - 140,
    paddingLeft: windowWidth - 400,
  },
  shortsSubscribeButtonStyling: {
    backgroundColor: "white",
    borderRadius: 20,
    height: 30,
    width: 90,
    alignItems: "center",
  },
  shortsDescriptionSubscribeButton: {
    position: "absolute",
    paddingTop: windowHeight - 145,
    paddingLeft: windowWidth - 310,
  },
  shortsDescription: {
    position: "absolute",
    paddingTop: windowHeight - 110,
    paddingLeft: windowWidth - 430,
  },
  shortsSoundImage: {
    position: "absolute",
    paddingTop: windowHeight - 85,
    paddingLeft: windowWidth - 430,
    flexDirection: "row",
  },
  shortsSoundText: {
    position: "absolute",
    paddingTop: windowHeight - 80,
    paddingLeft: windowWidth - 400,
    color: "white",
  },

  // subsUI

  container: {
    flex: 1,
    backgroundColor: "#101010",
  },
  header: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  userItem: {
    marginRight: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  userPhoto: {
    width: 65,
    height: 65,
    borderRadius: 30,
  },
  userName: {
    marginTop: 5,
    textAlign: "center",
    color: "white",
  },
  selectedUserName: {
    marginTop: 5,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  statusPhoto: {
    width: windowWidth,
    height: windowHeight,
  },
});
