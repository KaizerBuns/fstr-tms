import { faker } from "@faker-js/faker";

//Default Base MockData

const trip1Start = faker.date.recent();
const trip1End = faker.date.recent();

const trip2Start = faker.date.recent();
const trip2End = faker.date.recent();

let DefaultMockData = {
  users: [
    {
      id: "2e7085769baf11eba8b30242ac130012",
      email: "cesar@fstr.com",
      password: "letmein123",
      firstName: "Cesar",
      lastName: "Gonzalez",
      role: "dispatcher",
      jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50TmFtZSI6IkdvcmRvbiIsImNoYWluQWRkcmVzcyI6IjB4YmY0OTExMjVlOGFmZmU2ZWJjZDA5MWQ2NTg5YzkyMTNkMDgyZjA5OSIsInN1YiI6IjB4YmY0OTExMjVlOGFmZmU2ZWJjZDA5MWQ2NTg5YzkyMTNkMDgyZjA5OSIsInVzZU1vY2tHcmFwaFFMIjp0cnVlLCJvcmdhbml6YXRpb24iOiJhdXRoZW50aWNpdGkiLCJyb2xlIjoiZ29yZG9uIiwiZXhwIjoxNTI5MjQ3MDcyLCJpYXQiOjE1Mjg5ODc4NzIsImlzcyI6ImF1dGhlbnRpY2l0aSJ9.E_pqqlNoLPDpMNClY7YVWe66FX3DNXcVjYG4k7JAw71",
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
    {
      id: "2e7085769baf11eba8b30242ac130013",
      email: "mradul@fstr.com",
      password: "letmein123",
      firstName: "Cesar",
      lastName: "Gonzalez",
      role: "dispatcher",
      jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50TmFtZSI6IkdvcmRvbiIsImNoYWluQWRkcmVzcyI6IjB4YmY0OTExMjVlOGFmZmU2ZWJjZDA5MWQ2NTg5YzkyMTNkMDgyZjA5OSIsInN1YiI6IjB4YmY0OTExMjVlOGFmZmU2ZWJjZDA5MWQ2NTg5YzkyMTNkMDgyZjA5OSIsInVzZU1vY2tHcmFwaFFMIjp0cnVlLCJvcmdhbml6YXRpb24iOiJhdXRoZW50aWNpdGkiLCJyb2xlIjoiZ29yZG9uIiwiZXhwIjoxNTI5MjQ3MDcyLCJpYXQiOjE1Mjg5ODc4NzIsImlzcyI6ImF1dGhlbnRpY2l0aSJ9.E_pqqlNoLPDpMNClY7YVWe66FX3DNXcVjYG4k7JAw72",
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
    {
      id: "2e7085769baf11eba8b30242ac130014",
      email: "bill@fstr.com",
      password: "letmein123",
      firstName: "Bill",
      lastName: "The Machine",
      role: "driver",
      jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50TmFtZSI6IkdvcmRvbiIsImNoYWluQWRkcmVzcyI6IjB4YmY0OTExMjVlOGFmZmU2ZWJjZDA5MWQ2NTg5YzkyMTNkMDgyZjA5OSIsInN1YiI6IjB4YmY0OTExMjVlOGFmZmU2ZWJjZDA5MWQ2NTg5YzkyMTNkMDgyZjA5OSIsInVzZU1vY2tHcmFwaFFMIjp0cnVlLCJvcmdhbml6YXRpb24iOiJhdXRoZW50aWNpdGkiLCJyb2xlIjoiZ29yZG9uIiwiZXhwIjoxNTI5MjQ3MDcyLCJpYXQiOjE1Mjg5ODc4NzIsImlzcyI6ImF1dGhlbnRpY2l0aSJ9.E_pqqlNoLPDpMNClY7YVWe66FX3DNXcVjYG4k7JAw73",
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  ],
  trips: [
    {
      id: "2412",
      tripNumber: "2412",
      driver: "Dave",
      truck: "102",
      trailer: "47010",
      startLocation: "1296 Gyatt Crescent, Oshawa, On, L1K0M4",
      startDate: trip1Start,
      endDate: trip1End,
      dateRange: [trip1Start, trip1End],
      status: "Not Started",
      legs: [
        {
          broker: "MOVER ONE, DAY & ROSS",
          proRate: "USD",
          pickupLocation: "1296 Gyatt Crescent, Oshawa, ON, L1K0M4",
          pickupDate: faker.date.recent(),
          deliveryLocation: "Toronto, ON",
          deliveryDate: faker.date.recent(),
          rate: 200,
          pay: 3000,
          status: "Not Started",
          notes: [
            {
              dateAdded: faker.date.recent({ days: 10 }),
              note: "Pick up at the back of the building",
            },
            {
              dateAdded: faker.date.recent({ days: 9 }),
              note: "Make sure you talk to bob",
            },
            {
              dateAdded: faker.date.recent({ days: 8 }),
              note: "Avoid traffic please",
            },
          ],
        },
        {
          broker: "MOVER ONE, DAY & ROSS",
          proRate: "USD",
          pickupLocation: "1296 Gyatt Crescent, Oshawa, ON, L1K0M4",
          pickupDate: faker.date.recent(),
          deliveryLocation: "Toronto, ON",
          deliveryDate: faker.date.recent(),
          rate: 200,
          pay: 3000,
          status: "Not Started",
          notes: [
            {
              dateAdded: faker.date.recent({ days: 10 }),
              note: "Pick up at the back of the building",
            },
            {
              dateAdded: faker.date.recent({ days: 9 }),
              note: "Make sure you talk to bob",
            },
            {
              dateAdded: faker.date.recent({ days: 8 }),
              note: "Avoid traffic please",
            },
          ],
        },
      ],
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
    {
      id: "2222",
      tripNumber: "2222",
      driver: "Bill",
      truck: "106",
      trailer: "R53306",
      startLocation: "78 Clarkson Crescent, Kanata, ON K2L 4C6, Canada",
      startLocationInfo: { lat: 45.3056765, lng: -75.8783119 },
      startDate: "2023-10-29T04:00:00.000Z",
      endDate: "2023-11-30T05:00:00.000Z",
      dateRange: ["2023-10-29T04:00:00.000Z", "2023-11-30T05:00:00.000Z"],
      legs: [
        {
          broker: "CANAMEX",
          proRate: "USD",
          pickupLocation: "1296 Gyatt Crescent, Oshawa, ON L1K 0M2, Canada",
          pickupLocationInfo: { lat: 43.93767159999999, lng: -78.8292618 },
          pickupDate: "2023-10-29T04:00:00.000Z",
          deliveryLocation: "365 Bloor St E, Toronto, ON M4W 1H7, Canada",
          deliveryLocationInfo: { lat: 43.671966, lng: -79.3780757 },
          deliveryDate: "2023-10-31T04:00:00.000Z",
          rate: 2700,
          pay: 3200,
          status: "Not Started",
          notes: [
            {
              dateAdded: faker.date.recent({ days: 10 }),
              note: "Pick up at the back of the building",
            },
            {
              dateAdded: faker.date.recent({ days: 9 }),
              note: "Make sure you talk to bob",
            },
            {
              dateAdded: faker.date.recent({ days: 8 }),
              note: "Avoid traffic please",
            },
          ],
        },
        {
          broker: "SKYLINE",
          proRate: "CAD",
          pickupLocation: "365 Bloor St E, Toronto, ON M4W 1H7, Canada",
          pickupLocationInfo: { lat: 43.671966, lng: -79.3780757 },
          pickupDate: "2023-10-31T04:00:00.000Z",
          deliveryLocation: "777 Bay St., Toronto, ON M5G 2C8, Canada",
          deliveryLocationInfo: { lat: 43.6604836, lng: -79.38442359999999 },
          deliveryDate: "2023-11-03T04:00:00.000Z",
          rate: 2000,
          pay: 2950,
          status: "Not Started",
          notes: [
            {
              dateAdded: faker.date.recent({ days: 10 }),
              note: "Pick up at the back of the building",
            },
            {
              dateAdded: faker.date.recent({ days: 9 }),
              note: "Make sure you talk to bob",
            },
            {
              dateAdded: faker.date.recent({ days: 8 }),
              note: "Avoid traffic please",
            },
          ],
        },
      ],
      status: "Not Started",
    },
  ],
};

export default DefaultMockData;
