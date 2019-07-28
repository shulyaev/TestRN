import "react-native";
import React from "react";
import { Footer, ShowList, ShowSummary } from "../src/components";
import renderer from "react-test-renderer";

const shows = require("./testDataSample.json");

test("SANPSHOT TEST - Footer", () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("SANPSHOT TEST - ShowCard", () => {
  const tree = renderer
    .create(<ShowList shows={shows} onPress={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("SANPSHOT TEST - ShowSummary", () => {
  const tree = renderer.create(<ShowSummary show={shows[0]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
