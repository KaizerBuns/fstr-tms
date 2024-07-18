// const fs = require('fs');
// const path = require('path');
// const axios = require('axios');
//
// function addRawTextField(json) {
//   if (!json || !Array.isArray(json)) {
//     throw new Error('Input should be an array of objects.');
//   }
//
//   return json.map(obj => {
//     if (typeof obj === 'object' && obj !== null) {
//       return { ...obj, stringified: JSON.stringify(obj) };
//     }
//
//     return obj;
//   });
// }
//
// async function addEmbeddings(json) {
//   if (!json || !Array.isArray(json)) {
//     throw new Error('Input should be an array of objects.');
//   }
//
//   let results = [];
//   let counter = 0;
//
//   for (const obj of json) {
//     if (typeof obj === 'object' && obj !== null) {
//       const url = 'https://api.openai.com/v1/embeddings';
//       const openai_key = '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'; // Replace with your OpenAI key.
//
//       // Call OpenAI API to get the embeddings.
//       let response = await axios.post(url, {
//         input: obj.stringified,
//         model: "text-embedding-ada-002"
//       }, {
//         headers: {
//           'Authorization': `Bearer ${openai_key}`,
//           'Content-Type': 'application/json'
//         }
//       });
//
//       if(response.status === 200) {
//         results.push({...obj, embeddings: response.data.data[0].embedding});
//         counter++;
//
//         if(counter % 200 === 0) {
//           console.log(`Processed ${counter} items.`);
//         }
//       } else {
//         throw new Error('error')
//       }
//     } else {
//       results.push(obj);
//     }
//   }
//
//   return results;
// }
//
// const filePath = './trips.json';
//
// fs.readFile(filePath, 'utf8', async (err, jsonString) => {
//   if (err) {
//     console.log('File read failed:', err);
//     return;
//   }
//
//   const data = JSON.parse(jsonString);
//   const dataWithRawTextField = addRawTextField(data);
//   const dataWithEmbeddings = await addEmbeddings(dataWithRawTextField);
//
//   const dir = path.dirname(filePath);
//   const ext = path.extname(filePath);
//   const base = path.basename(filePath, ext);
//   const newPath = path.join(dir, `${base}1${ext}`);
//
//   fs.writeFile(newPath, JSON.stringify(dataWithEmbeddings, null, 2), err => {
//     if (err) {
//       console.log('Error writing file', err);
//     } else {
//       console.log('Successfully wrote file');
//     }
//   });
// });
