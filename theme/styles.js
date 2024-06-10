import { StyleSheet } from "react-native";

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
    paddingTop: 20,
    paddingLeft: 10,
  },
  shortsButtonsContainer: {
    flexDirection: "column",
    position: "absolute",
    paddingLeft: 335,
    paddingTop: 300,
  },
});
