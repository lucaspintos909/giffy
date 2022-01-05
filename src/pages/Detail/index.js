import React from "react";
import "./Detail.css";

export default function Detail({ params }) {
  const { id } = params;
  return <div>Gif: {id}</div>;
}
