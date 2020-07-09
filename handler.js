'use strict';
//TODO: break apart connector and closer
let verb = ['enable','abilify','empower','migrate','kludge', 'deliver','create','engineer','accelerate','measure','lift and shift'];
let techAdjective = ['serverless','containerized','observable','big data','low-latency','clustered','no-code','low-code','noSQL','high-cardinality'];
let techNoun = ['databases','solutions','deliverables','metrics','products','microservices','containers','data warehouses','dashboards','chaos engineering','test-driven development'];
let connector = ['all while','while your team is','while everyone else is','and prevent black hats from','and obfuscate','and de-monetize','and monetize','and stop you from','and stop your team from','while never','while always','and deliver the best tools for','and disable','even though the Oracle lawsuit prevents us from ever','while never losing sight of','in spite of every obstacle to','all without','because now is the time for']
let closer = ['getting close to the metal','lifting and shifting','migrating your databases','testing on prod','accelerating enablement','deploying on a friday','enabling acceleration','getting far from the metal','testing in production','settling out of court','delivering less that 12 nines','dropping a single packet','destroying your monolith','replacing everything with microservices','replacing all your microserves with one huge Lambda','replacing your monolith with another, bigger monolith','enabling the future','accelerating enablement']

function randomWord(items){
  let item = items[Math.floor(Math.random() * items.length)];
  return item;
}

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `We ${randomWord(verb)} ${randomWord(techAdjective)} ${randomWord(techNoun)}, ${randomWord(connector)} ${randomWord(closer)}.`
      },
      null,
      2
    ),
  };

};
