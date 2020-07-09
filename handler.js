'use strict';
//we deliver serverless solutions, while never getting close to the metal
let verb = ['enable','abilify','empower','electrify','kludge', 'deliver'];
let techAdjective = ['serverless','containerized','observable','big data','low-latency','clustered'];
let techNoun = ['solutions','deliverables','products','microservices','containers','data warehouses','dashboards'];
let connector = ['all while','and stop you from','and stop your team from','while never','and deliver the best tools for','even though the Oracle lawsuit prevents us from ever','while never losing sight of','in spite of every obstacle to','all without','because now is the time for']
let closer = ['getting close to the metal','settling out of court','delivering less that 12 nines','dropping a single packet','destroying your monolith','replacing everything with microservices','replacing all your microserves with one huge Lambda','replacing your monolith with another, bigger monolith','enabling the future','accelerating enablement']

function randomWord(items){
  let item = items[Math.floor(Math.random() * items.length)];
  return item;
}

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `we ${randomWord(verb)}`
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
