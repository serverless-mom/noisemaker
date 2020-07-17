
//TODO: break apart connector and closer
let verb = ['enable', 'abilify', 'empower', 'migrate', 'kludge', 'deliver', 'create', 'engineer', 'accelerate', 'measure', 'lift and shift'];
let techAdjective = ['serverless', 'containerized', 'observable', 'big data', 'low-latency', 'clustered', 'no-code', 'low-code', 'noSQL', 'high-cardinality'];
let techNoun = ['databases', 'solutions', 'deliverables', 'metrics', 'products', 'microservices', 'containers', 'data warehouses', 'dashboards', 'chaos engineering', 'test-driven development'];
let connector = ['all while', 'while your team is', 'while everyone else is', 'and prevent black hats from', 'and obfuscate', 'and empower', 'and prioritize', 'and de-monetize', 'and monetize', 'and stop you from', 'and stop your team from', 'while never', 'while always', 'and deliver the best tools for', 'and disable', 'even though the Oracle lawsuit prevents us from ever', 'while never losing sight of', 'in spite of every obstacle to', 'all without', 'because now is the time for']
let closer = ['getting close to the metal', 'working close to the metal', 'lifting and shifting', 'migrating your databases', 'testing on prod', 'accelerating enablement', 'deploying on a friday', 'enabling acceleration', 'getting far from the metal', 'testing in production', 'settling out of court', 'delivering less that 12 nines', 'dropping a single packet', 'destroying your monolith', 'replacing everything with microservices', 'replacing all your microserves with one huge Lambda', 'replacing your monolith with another, bigger monolith', 'enabling the future', 'accelerating enablement']
const AWS = require("aws-sdk");
const crypto = require("crypto");
const documentClient = new AWS.DynamoDB.DocumentClient();
let status = {run:false, stage:0}


// Generate unique id with no external dependencies
const generateUUID = () => crypto.randomBytes(16).toString("hex");


function randomWord(items) {
  let item = items[Math.floor(Math.random() * items.length)];
  return item;
}

module.exports.hello = async event => {
  // TODO log out the event
  const message = `We ${randomWord(verb)} ${randomWord(techAdjective)} ${randomWord(techNoun)}, ${randomWord(connector)} ${randomWord(closer)}.`;

  const params = {
    TableName: "mottoes", // The name of my DynamoDB table, switch to an env value soon
    Item: { // Creating an Item with a unique id
      mottoID: generateUUID(),
      motto: message
    }
  };

  try {
    // Utilising the put method to insert an item into the table (https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.03.html#GettingStarted.NodeJs.03.01)
    const data = await documentClient.put(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: message
        },
        null,
        2
      ),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify(e)
    };
  }


};
