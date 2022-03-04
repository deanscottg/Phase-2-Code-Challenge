import React from "react";
import BotCard from "./BotCard";
function BotCollection({botCollection, moveMyBot,deleteMyBot}) {
  const bots = botCollection.map((bot)=> {
  return <BotCard key={bot.id} bot={bot} onButton={moveMyBot} deleteMyBot={deleteMyBot} />
  })
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
