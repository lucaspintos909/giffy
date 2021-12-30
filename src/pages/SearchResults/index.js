import React from "react";
import ListOfGifs from "../../components/ListOfGifs";

export default function SearchResults({params}) {
  return(<ListOfGifs props={params}/>)
}