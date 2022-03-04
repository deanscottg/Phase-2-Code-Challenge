import React from "react";
import BotCard from "./BotCard";
function YourBotArmy({myBotCollection, moveMyBot, removeMyBot, deleteMyBot}) {
  //your bot army code here...
  const bots = myBotCollection.map((bot)=> {
    return <BotCard key={bot.id} bot={bot} onButton={removeMyBot} deleteMyBot={deleteMyBot}/>
    })
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
