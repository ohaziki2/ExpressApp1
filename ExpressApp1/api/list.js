// const CosmosClient = require('@azure/cosmos').CosmosClient;

// async function getLogs() {
//   const endpoint = 'https://bigbrother.documents.azure.com/';
//   const key = 'TEa0iSj24m68YiPLnCVYSMKxwMRPpBRFfONcr24zt00wc7Z0VeW6smbXFInwO20VD7USNnSUzF2IACDbJaek2w';
//   const databaseId = 'your-database-id';
//   const containerId = 'your-container-id';

//   const client = new CosmosClient({ endpoint, key });

//   const querySpec = {
//     query: 'SELECT * FROM c WHERE c.type = "log"',
//     parameters: [],
//     options: {
//       maxItemCount: 10, 
//     },
//   };

//   const { resources: logs } = await client
//     .database(databaseId)
//     .container(containerId)
//     .items.query(querySpec)
//     .fetchAll();


//   return logs;
// }
// getLogs().then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.error(error);
// });
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    console.log(req.query)
    res.send('This is sample api call success.'); 
});

module.exports = router;