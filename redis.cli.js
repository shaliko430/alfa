// const express = require("express");
// const app = express();
// require("dotenv").config();
// const { createClient } = require("redis");

// (async () => {
//     try {
//         // Initialize main Redis client
//         const client = createClient({
//             url: "redis://172.20.10.2:6379"
//         });

//         client.on("error", (err) => console.error("Redis Client Error:", err));

//         await client.connect();  // Connect main client

//         // Duplicate client for subscribing
//         const newClient = client.duplicate();
//         await newClient.connect();

//         // Set up subscription
//         newClient.subscribe("hopar-news", (msg) => {
//             console.log("Message received on 'hopar-news':", msg);
//         });

//         // Redis set and get example
//         await client.set("hopa", "I love Armenia");
//         const value = await client.get("hopa");
//         console.log("Retrieved value:", value);

//     } catch (error) {
//         console.error("Error in Redis operation:", error);
//     }
// })();

// // Express route
// app.get("/", (req, res) => {
//     res.send("Hello Armenia");
// });

// // Start Express server
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log("Listening on port", port);
// });



// const redis = require('redis');
// const client = redis.createClient({
//   url: 'redis://localhost:6379', 
// });

// client.on('error', (err) => console.error('Redis Client Error', err));

// async function getMemoryUsage() {
//   await client.connect();

//   const memoryInfo = await client.info('memory');
//   console.log(memoryInfo);

//   await client.quit();
// }



// const redis = require('redis');

// const client = redis.createClient();

// client.on('error', (err) => console.error('Redis Client Error', err));

// async function connectRedis() {
//   await client.connect();
// }

// connectRedis();

// async function addToList() {
//   try {
//     const user = { name: "Bob", age: "25", city: "GYUMRI" };

//     // Store the user object as a hash
//     await client.hSet('user:2', ...Object.entries(user).flat());
//     console.log('User object stored as hash');

//     // Retrieve object from hash
//     const result = await client.hGetAll('user:2');
//     console.log('Retrieved object from hash:', result); // Expected output: { name: "Bob", age: "25", city: "GYUMRI" }

//   } catch (err) {
//     console.error("Error:", err);
//   }
// }

// addToList();


// function whileLoopPolyfill(conditionFn, actionFn) {
//   // Base case: If the condition is false, stop recursion
//   if (!conditionFn()) {
//     return;
//   }
  
//   // Execute the action
//   actionFn();
  
//   // Recursive call to continue the "loop"
//   whileLoopPolyfill(conditionFn, actionFn);
// }

// let count = 5;

// whileLoopPolyfill(
//   () => count > 0,           // Condition function
//   () => {                    // Action function
//     console.log(count);
//     count--;
//   }
// );

// Output: 5, 4, 3, 2, 1


// const Redis = require('ioredis');
// const redis = new Redis();

// // Example data
// // Store an object using a hash
// const user = { name: "Bob", age: "25", city: "GYUMRI" };
// redis.hmset('user:2', user).then(() => {
//   console.log('User object stored as hash');
// });

// // Retrieve object from hash
// redis.hgetall('user:2').then((result) => {
//   console.log('Retrieved object from hash:', result); // Output: { name: "Bob", age: "25", city: "Springfield" }
// });
// const Redis = require('ioredis');

// // Create separate Redis clients for publisher and subscriber
// const publisher = new Redis();
// const subscriber = new Redis();

// // Setup the subscriber
// async function setupSubscriber() {
//   try {
//     // Subscribe to the 'notifications' channel
//     await subscriber.subscribe('notifications');
//     console.log('Subscribed to "notifications" channel');

//     // Listen for messages on the 'notifications' channel
//     subscriber.on('message', (channel, message) => {
//       console.log(`Received message from ${channel}: ${message}`);
//     });
//   } catch (err) {
//     console.error('Subscription error:', err);
//   }
// }

// // Function to publish a message
// async function publishMessage() {
//   try {
//     const numSubscribers = await publisher.publish('notifications', 'Hello from Pub/Sub!');
//     console.log(`Message published to ${numSubscribers} subscriber(s)`);
//   } catch (err) {
//     console.error('Publish error:', err);
//   }
// }

// // Run the Pub/Sub setup
// async function runPubSub() {
//   await setupSubscriber();

//   // Publish a message every 2 seconds
//   setInterval(() => {
//     publishMessage();
//   }, 2000);
// }

// // Execute the Pub/Sub example
// runPubSub();
