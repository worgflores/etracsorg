// // import { NextApiRequest, NextApiResponse } from 'next';
// // import db from '../../../db';

// // export default async (req: NextApiRequest, res: NextApiResponse) => {
// //   if (req.method === 'POST') {
// //     try {
// //       const { first_name, middle_name, last_name, email, provider, lgu_type, region, province, municipality, city, area_type, barangay } = req.body;

// //       console.log('Received form data:', { first_name, middle_name, last_name, email, provider, lgu_type, region, province, municipality, city, area_type, barangay })

// //       res.status(200).json({ message: 'Form data submitted successfully' });
// //     } 
    
// //     catch (error) {
// //       res.status(500).json({ error: 'An error occurred while processing the form data.' });
// //     }
// //   } 
  
// //   else {
// //     res.status(405).end();
// //   }
// // };

// // pages/api/submitForm.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import fs from 'fs';

// const dataFilePath = '/';

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === 'POST') {
//     try {
//       // Parse the incoming form data from the request body
//       const { first_name, middle_name, last_name, email, provider, lgu_type, region, province, municipality, city, area_type, barangay } = req.body;

//       // Read existing data from the JSON file
//       let jsonData = [];
//       try {
//         const fileData = fs.readFileSync(dataFilePath, 'utf-8');
//         jsonData = JSON.parse(fileData);
//       } catch (error) {
//         // If the file doesn't exist or is empty, jsonData will remain an empty array.
//       }

//       // Add the new form data to the JSON array
//       jsonData.push({ first_name, middle_name, last_name, email, provider, lgu_type, region, province, municipality, city, area_type, barangay });

//       // Write the updated data back to the JSON file
//       fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2), 'utf-8');

//       res.status(200).json({ message: 'Form data submitted successfully' });
//     } catch (error) {
//       res.status(500).json({ error: 'An error occurred while processing the form data.' });
//     }
//   } else {
//     res.status(405).end();
//   }
// };

