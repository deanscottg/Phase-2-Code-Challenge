import React,{useEffect,useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [botCollection, setBotCollection]= useState([])
  const [myBotCollection, setMyBotCollection]=useState([])

  useEffect(()=>{
    fetch('http://localhost:8002/bots')
    .then(resp => resp.json())
    .then(botData => setBotCollection(botData))
  },[])
  //start here with your code for step one

 function moveMyBot(bot){
   const movedBots = myBotCollection.find((robot)=> bot.id === robot.id)
   if(!movedBots) return setMyBotCollection([...myBotCollection, bot])
 }
  function removeMyBot(bot){
    const removedBot = myBotCollection.filter((robot)=> bot.id !== robot.id)
    return setMyBotCollection(removedBot)
    
  }

  function deleteMyBot(bot){
    removeMyBot(bot)
    const removedBot = botCollection.filter((robot)=> bot.id !== robot.id)
    return setBotCollection(removedBot)

  }
  return (
    <div>
      <YourBotArmy myBotCollection={myBotCollection} moveMyBot={moveMyBot} removeMyBot={removeMyBot} deleteMyBot={deleteMyBot} />
      <BotCollection botCollection={botCollection} moveMyBot={moveMyBot} deleteMyBot={deleteMyBot} />
    </div>
  )
}
  
export default BotsPage;
