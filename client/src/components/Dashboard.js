import React from "react";
import DashList from "./DashList";

export default function Dashboard({ user, forums }) {

  const frms = [...forums];

  const gamingFrms = frms.filter((forum) => forum.subject === "gaming");

  const historyFrms = frms.filter((forum) => forum.subject === "history");

  const cookingFrms = frms.filter((forum) => forum.subject === "cooking");

  const newsFrms = frms.filter((forum) => forum.subject === "news");

  return (
    <div className="Dash">
      <h1 className="my-forums">My Forums</h1>
      <div className="list">
        <h1 className="dash-topics">Recently Viewed</h1>
        <DashList arr={user} />
        <h1 className="dash-topics">Gaming</h1>
        <DashList arr={gamingFrms} />
        <h1 className="dash-topics">History</h1>
        <DashList arr={historyFrms} />
        <h1 className="dash-topics">Cooking</h1>
        <DashList arr={cookingFrms} />
        <h1 className="dash-topics">News</h1>
        <DashList arr={newsFrms} />
      </div>
    </div>
  );
}
