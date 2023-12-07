import React, { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

// const vid = [
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#channel",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A"
//         },
//         "snippet": {
//             "publishedAt": "2018-12-25T10:37:24Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "JavaScript Mastery",
//             "description": "Launch your development career with project-based coaching - showcase your skills with practical development experience and ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s88-c-k-c0xffffffff-no-rj-mo"
//                 },
//                 "medium": {
//                     "url": "https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s240-c-k-c0xffffffff-no-rj-mo"
//                 },
//                 "high": {
//                     "url": "https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s800-c-k-c0xffffffff-no-rj-mo"
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2018-12-25T10:37:24Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "986hztrfaSQ"
//         },
//         "snippet": {
//             "publishedAt": "2023-06-24T13:45:22Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy a Full Stack Next.js 13 Application | React, Next JS 13, TypeScript, Tailwind CSS",
//             "description": "Next.js has the potential to revolutionize the industry and forever change the way we develop web applications. You're still early in ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/986hztrfaSQ/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/986hztrfaSQ/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/986hztrfaSQ/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2023-06-24T13:45:22Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "wm5gMKuwSYk"
//         },
//         "snippet": {
//             "publishedAt": "2023-05-05T13:23:15Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Next.js 13 Full Course 2023 | Build and Deploy a Full Stack App Using the Official React Framework",
//             "description": "Next.js recently became the official React framework as outlined in React docs. In this course, you'll learn the most important ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/wm5gMKuwSYk/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/wm5gMKuwSYk/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/wm5gMKuwSYk/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2023-05-05T13:23:15Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "QRrPE9aj3wI"
//         },
//         "snippet": {
//             "publishedAt": "2023-05-20T10:13:04Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy a Responsive Website | Beginner HTML CSS Tutorial on How to Make a Website in 2023",
//             "description": "Are you wondering how to make a website using #HTML and #CSS? Join me today to create a modern, fully responsive HTML ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/QRrPE9aj3wI/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/QRrPE9aj3wI/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/QRrPE9aj3wI/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2023-05-20T10:13:04Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "tllZWCQZ9_0"
//         },
//         "snippet": {
//             "publishedAt": "2023-07-07T10:03:35Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy 4 AI &amp; 3D React Apps and Get Hired as a Web Developer | Full 10-Hour Course",
//             "description": "Welcome to the ultimate course, where you will build apps with advanced AI features, stunning animations, 3D elements, and ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/tllZWCQZ9_0/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/tllZWCQZ9_0/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/tllZWCQZ9_0/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2023-07-07T10:03:35Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "pUNSHPyVryU"
//         },
//         "snippet": {
//             "publishedAt": "2023-06-09T10:21:09Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy a Modern Next.js 13 Application | React, Next JS 13, TypeScript, Tailwind CSS",
//             "description": "The demand for Next.js 13 applications peaked! Now is the perfect time to build a state-of-the-art modern application that utilizes ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/pUNSHPyVryU/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/pUNSHPyVryU/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/pUNSHPyVryU/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2023-06-09T10:21:09Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "vpvtZZi5ZWk"
//         },
//         "snippet": {
//             "publishedAt": "2023-04-21T10:06:01Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy Your Own GPT AI Website with React and Turn it Into a SaaS Business ($$$)",
//             "description": "If you're a solo developer in 2023, you have the power to build robust AI software startups! Watch this 1-hour video and make an ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/vpvtZZi5ZWk/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/vpvtZZi5ZWk/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/vpvtZZi5ZWk/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2023-04-21T10:06:01Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "0fYi8SGA20k"
//         },
//         "snippet": {
//             "publishedAt": "2023-03-03T11:04:36Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy an Amazing 3D Web Developer Portfolio in React JS | Beginner Three.js Tutorial",
//             "description": "The most impressive websites in the world use 3D graphics and animations to bring their content to life. Learn how to build your ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/0fYi8SGA20k/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/0fYi8SGA20k/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/0fYi8SGA20k/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2023-03-03T11:04:36Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "mJ3bGvy0WAY"
//         },
//         "snippet": {
//             "publishedAt": "2023-03-18T12:21:56Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy a React Native App | 2023 React Native Course Tutorial for Beginners",
//             "description": "The existence of React Native makes React one of the most valuable skills to have. Learn to transform 75% of your knowledge ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/mJ3bGvy0WAY/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/mJ3bGvy0WAY/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/mJ3bGvy0WAY/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2023-03-18T12:21:56Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "b9eMGE7QtTk"
//         },
//         "snippet": {
//             "publishedAt": "2022-03-04T11:06:59Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "React JS Full Course 2023 | Build an App and Master React in 1 Hour",
//             "description": "Are you wondering how to become a React developer? Look no further, and get all the info in one video. The first 1000 people to ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/b9eMGE7QtTk/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/b9eMGE7QtTk/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/b9eMGE7QtTk/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2022-03-04T11:06:59Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#playlist",
//             "playlistId": "PL6QREj8te1P6wX9m5KnicnDVEucbOPsqR"
//         },
//         "snippet": {
//             "publishedAt": "2020-04-07T10:56:39Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Master React JS by Building Real Projects",
//             "description": "Series of real-world projects that you can learn React with. Learn React hooks, React API data fetching, React Hooks, proper ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/0fYi8SGA20k/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/0fYi8SGA20k/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/0fYi8SGA20k/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2020-04-07T10:56:39Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "F627pKNUCVQ"
//         },
//         "snippet": {
//             "publishedAt": "2022-11-11T11:26:54Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy 4 Modern React Apps and Get Hired as a Frontend Developer | Full 10-Hour Course",
//             "description": "Welcome to the ultimate course, where you will learn how to take Figma designs, turn them into four modern, responsive, ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/F627pKNUCVQ/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/F627pKNUCVQ/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/F627pKNUCVQ/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2022-11-11T11:26:54Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "EyIvuigqDoA"
//         },
//         "snippet": {
//             "publishedAt": "2023-01-20T11:06:52Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy a Full Stack MERN AI Image Generation App | Midjourney &amp; DALL-E Clone",
//             "description": "MidJourney and DALL-E are taking over social media. Dive into the world of artificial intelligence and build your own version of ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/EyIvuigqDoA/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/EyIvuigqDoA/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/EyIvuigqDoA/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2023-01-20T11:06:52Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "ZqEa8fTxypQ"
//         },
//         "snippet": {
//             "publishedAt": "2023-03-31T12:49:02Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy an AI-Powered 3D Website Using React | 2023 Three JS Course Tutorial for Beginners",
//             "description": "Many large corporations already use 3D graphics to showcase their products. Learn how to build your own ThreeJS 3D product ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/ZqEa8fTxypQ/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/ZqEa8fTxypQ/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/ZqEa8fTxypQ/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2023-03-31T12:49:02Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "g7T23Xzys-A"
//         },
//         "snippet": {
//             "publishedAt": "2021-01-01T16:35:24Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "JavaScript Crash Course 2021 - Master JavaScript in One Video!",
//             "description": "JavaScript is one of the most popular languages of 2021, it is easy to learn and it is extremely powerful. In this video, you will learn ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/g7T23Xzys-A/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/g7T23Xzys-A/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/g7T23Xzys-A/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2021-01-01T16:35:24Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "k4lHXIzCEkM"
//         },
//         "snippet": {
//             "publishedAt": "2023-02-10T11:04:01Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy a Full Stack MERN Application With CRUD, Auth, and Charts Using Refine",
//             "description": "In this one video, learn how to develop a fully functional full-stack MERN dashboard application with complete CRUD ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/k4lHXIzCEkM/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/k4lHXIzCEkM/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/k4lHXIzCEkM/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2023-02-10T11:04:01Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "jx5hdo50a2M"
//         },
//         "snippet": {
//             "publishedAt": "2022-05-20T10:01:37Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy a React Admin Dashboard App With Theming, Tables, Charts, Calendar, Kanban and More",
//             "description": "Every web developer needs to build a React Admin Dashboard Application. Learn how to create the best and most modern one ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/jx5hdo50a2M/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/jx5hdo50a2M/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/jx5hdo50a2M/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2022-05-20T10:01:37Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "ezv5Zkm67D0"
//         },
//         "snippet": {
//             "publishedAt": "2023-04-07T11:11:35Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "ChatGPT Masterclass for Developers | Master AI Prompt Engineering",
//             "description": "ChatGPT will become your biggest threat or your greatest asset. It's up to you how you want to use it. In this video, you'll ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/ezv5Zkm67D0/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/ezv5Zkm67D0/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/ezv5Zkm67D0/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2023-04-07T11:11:35Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "uaWYRL0g1iw"
//         },
//         "snippet": {
//             "publishedAt": "2023-04-30T12:00:29Z",
//             "channelId": "UCcJQ96WlEhJ0Ve0SLmU310Q",
//             "title": "How to MASTER Javascript FAST in 2023",
//             "description": "Try RunJS for FREE - Your Javascript Desktop Playground - https://bit.ly/41OUi7H In this video, I will tell you exactly how I would ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/uaWYRL0g1iw/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/uaWYRL0g1iw/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/uaWYRL0g1iw/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "Internet Made Coder",
//             "liveBroadcastContent": "none",
//             "publishTime": "2023-04-30T12:00:29Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "XxXyfkrP298"
//         },
//         "snippet": {
//             "publishedAt": "2022-10-14T10:44:49Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Modern React Web Development Full Course - 12 Hours | 4 Real Industry Web Applications",
//             "description": "Welcome to the ultimate course, which will help you become a master of Modern Web Development by Building Real Industry ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/XxXyfkrP298/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/XxXyfkrP298/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/XxXyfkrP298/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2022-10-14T10:44:49Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "_oO4Qi5aVZs"
//         },
//         "snippet": {
//             "publishedAt": "2022-08-12T10:04:33Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy a Fully Responsive Website with Modern UI/UX in React JS with Tailwind",
//             "description": "Master modern web development by building a responsive React JS application consisting of a stunning hero section, ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/_oO4Qi5aVZs/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/_oO4Qi5aVZs/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/_oO4Qi5aVZs/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2022-08-12T10:04:33Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#playlist",
//             "playlistId": "PL6QREj8te1P6CkO_4OIK1-nwG5OxCD5tR"
//         },
//         "snippet": {
//             "publishedAt": "2022-03-14T13:18:06Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build Modern UI/UX Websites",
//             "description": "This playlist will teach you how to transform a Figma design into a fully functioning website, improve your CSS skills, and create ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/LMagNcngvcU/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/LMagNcngvcU/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/LMagNcngvcU/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2022-03-14T13:18:06Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "i5TAC9OkK-A"
//         },
//         "snippet": {
//             "publishedAt": "2023-06-02T15:33:04Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "JSM Rewind: Win a FREE 6-Month Developer Bootcamp Giveaway",
//             "description": "Over the last 5 years and 100 videos, more than 600 thousand developers have joined and formed the JavaScript Mastery ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/i5TAC9OkK-A/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/i5TAC9OkK-A/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/i5TAC9OkK-A/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2023-06-02T15:33:04Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "3HNyXCPDQ7Q"
//         },
//         "snippet": {
//             "publishedAt": "2022-02-18T11:45:42Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy a Fullstack Responsive Portfolio Website | ULTIMATE Step By Step Tutorial 2023",
//             "description": "Do you know the best way to show your skills to employers or potential clients? Stand out from the crowd by presenting a ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/3HNyXCPDQ7Q/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/3HNyXCPDQ7Q/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/3HNyXCPDQ7Q/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2022-02-18T11:45:42Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "ugCN_gynFYw"
//         },
//         "snippet": {
//             "publishedAt": "2022-11-25T14:19:16Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy a Modern Next 13 Website With Framer Motion &amp; Tailwind CSS",
//             "description": "Learn how to transform a Figma design into a fully functioning website using Next13, Framer Motion, and Tailwind CSS, build ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/ugCN_gynFYw/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/ugCN_gynFYw/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/ugCN_gynFYw/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2022-11-25T14:19:16Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "FHTbsZEJspU"
//         },
//         "snippet": {
//             "publishedAt": "2022-08-26T12:02:28Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy a Modern YouTube Clone Application in React JS with Material UI 5 | RapidAPI",
//             "description": "Master modern web development by building a responsive React JS application consisting of stunning video sections, custom ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/FHTbsZEJspU/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/FHTbsZEJspU/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/FHTbsZEJspU/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2022-08-26T12:02:28Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "dyFVwXROzZk"
//         },
//         "snippet": {
//             "publishedAt": "2023-01-06T11:02:51Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy 3 Modern React API Applications in 8 Hours - Full Course | RapidAPI",
//             "description": "Welcome to the ultimate course, which will help you become a master of APIs by Building Real Industry Applications. In this ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/dyFVwXROzZk/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/dyFVwXROzZk/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/dyFVwXROzZk/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2023-01-06T11:02:51Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "KBpoBc98BwM"
//         },
//         "snippet": {
//             "publishedAt": "2022-06-11T12:20:39Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy a Modern React 18 Fitness Exercises App With APIs | RapidAPI",
//             "description": "Every web developer needs to know how to use APIs in their applications. Learn how to create the best and most modern Fitness ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/KBpoBc98BwM/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/KBpoBc98BwM/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/KBpoBc98BwM/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2022-06-11T12:20:39Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "4mOkFXyxfsU"
//         },
//         "snippet": {
//             "publishedAt": "2022-04-22T11:26:00Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy a Modern Full Stack ECommerce React Application with Stripe",
//             "description": "Every web developer needs to know how to build an ECommerce website using React. Learn how to build the best and most ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/4mOkFXyxfsU/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/4mOkFXyxfsU/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/4mOkFXyxfsU/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2022-04-22T11:26:00Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#playlist",
//             "playlistId": "PLXzwfq9BiakHtFiwDmSILkzazPzjPmpt4"
//         },
//         "snippet": {
//             "publishedAt": "2020-08-02T09:46:56Z",
//             "channelId": "UC-sJoyVs1fl30ExtwD_n9EQ",
//             "title": "JavaScript Mastery",
//             "description": "",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/vpvtZZi5ZWk/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/vpvtZZi5ZWk/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/vpvtZZi5ZWk/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "Mridul Panda",
//             "liveBroadcastContent": "none",
//             "publishTime": "2020-08-02T09:46:56Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "BDCT6TYLYdI"
//         },
//         "snippet": {
//             "publishedAt": "2022-12-09T12:26:52Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy a Web3 Blockchain Crowdfunding Platform (Kickstarter)",
//             "description": "With a stunning design, connected to the blockchain, metamask pairing, interaction with smart contracts, sending Ethereum ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/BDCT6TYLYdI/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/BDCT6TYLYdI/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/BDCT6TYLYdI/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2022-12-09T12:26:52Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "VsUzmlZfYNg"
//         },
//         "snippet": {
//             "publishedAt": "2022-03-22T13:41:43Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy a Full Stack MERN Social Media App with Auth, Pagination, Comments | MERN Course",
//             "description": "Watch this video to master the MERN stack and build real industry applications. FREE Ultimate MERN Guide: ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/VsUzmlZfYNg/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/VsUzmlZfYNg/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/VsUzmlZfYNg/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2022-03-22T13:41:43Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "chx9Rs41W6g"
//         },
//         "snippet": {
//             "publishedAt": "2021-10-09T03:30:03Z",
//             "channelId": "UCrkQMtWNtuq-1j0q8c2RVeQ",
//             "title": "JavaScript |  Beginning to Mastery Complete Tutorial (Part 1)",
//             "description": "Complete modern javascript/es6 tutorial in Hindi (2021) Source code ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/chx9Rs41W6g/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/chx9Rs41W6g/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/chx9Rs41W6g/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "Harshit vashisth",
//             "liveBroadcastContent": "none",
//             "publishTime": "2021-10-09T03:30:03Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "1RHDhtbqo94"
//         },
//         "snippet": {
//             "publishedAt": "2021-12-21T10:34:02Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy a Modern Full Stack Social Media App | FULL COURSE",
//             "description": "With all advanced Social Media features, such as Google Authentication, create, edit, delete and save posts, like and comment on ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/1RHDhtbqo94/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/1RHDhtbqo94/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/1RHDhtbqo94/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2021-12-21T10:34:02Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "GDa8kZLNhJ4"
//         },
//         "snippet": {
//             "publishedAt": "2022-01-14T11:01:09Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy 5 JavaScript &amp; React API Projects in 10 Hours - Full Course | RapidAPI",
//             "description": "Welcome to the ultimate course, which will help you become a master of APIs by Building Real Industry Applications. In this ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/GDa8kZLNhJ4/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/GDa8kZLNhJ4/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/GDa8kZLNhJ4/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2022-01-14T11:01:09Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "ngc9gnGgUdA"
//         },
//         "snippet": {
//             "publishedAt": "2020-10-30T16:46:58Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Full Stack MERN Project - Build and Deploy an App | React + Redux, Node, Express, MongoDB [Part 1/2]",
//             "description": "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Project - from start to finish. The App is ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/ngc9gnGgUdA/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/ngc9gnGgUdA/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/ngc9gnGgUdA/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2020-10-30T16:46:58Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "xORdz1Hi9Gc"
//         },
//         "snippet": {
//             "publishedAt": "2022-02-11T11:00:19Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Become a Full Stack Web Developer in 2022 | Practical Step by Step Frontend and Backend Guide",
//             "description": "Are you wondering how to become a web developer? Look no further, and get all the info in one video. The first 1000 people to ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/xORdz1Hi9Gc/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/xORdz1Hi9Gc/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/xORdz1Hi9Gc/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2022-02-11T11:00:19Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "2FeymQoKvrk"
//         },
//         "snippet": {
//             "publishedAt": "2022-12-23T10:50:23Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy Your Own ChatGPT AI App in JavaScript | OpenAI, Machine Learning",
//             "description": "With an elegant user interface that resembles the ChatGPT app, communication with advanced GPT3 model API, and most ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/2FeymQoKvrk/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/2FeymQoKvrk/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/2FeymQoKvrk/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2022-12-23T10:50:23Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#playlist",
//             "playlistId": "PLtBKr2xHXZuNXWp9VzQW28U8xdWsl7B7Q"
//         },
//         "snippet": {
//             "publishedAt": "2023-05-21T11:34:23Z",
//             "channelId": "UC1ryLxQzkWeFtply1F1kxwA",
//             "title": "Filmpire – AI-Powered Movie Web Application ( JSMastery Pro )",
//             "description": "Filmpire is an AI-powered movie web application that helps users discover movies within specific categories and genres, view ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/L_JskzCTUqs/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/L_JskzCTUqs/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/L_JskzCTUqs/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "Free Course University",
//             "liveBroadcastContent": "none",
//             "publishTime": "2023-05-21T11:34:23Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "I1cpb0tYV74"
//         },
//         "snippet": {
//             "publishedAt": "2022-09-23T11:43:34Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy a Better Spotify 2.0 Clone Music App with React 18! (Tailwind, Redux, RapidAPI)",
//             "description": "Master modern web development by building an improved version of Spotify. With a modern homepage, fully-fledged music ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/I1cpb0tYV74/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/I1cpb0tYV74/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/I1cpb0tYV74/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2022-09-23T11:43:34Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "l8WPWK9mS5M"
//         },
//         "snippet": {
//             "publishedAt": "2020-07-12T18:41:31Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build a REST API with Node JS and Express | CRUD API Tutorial",
//             "description": "In this video, you'll learn everything you need to know about creating a simple API using Node and Express. Join our ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/l8WPWK9mS5M/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/l8WPWK9mS5M/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/l8WPWK9mS5M/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2020-07-12T18:41:31Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "cYNVVspXUdA"
//         },
//         "snippet": {
//             "publishedAt": "2022-09-03T12:00:31Z",
//             "channelId": "UCcJQ96WlEhJ0Ve0SLmU310Q",
//             "title": "How I Would Learn Javascript FAST in 2023 (from zero)",
//             "description": "Sign up to Morning Brew for free today at https://morningbrewdaily.com/internetmadecoder In this video we learn how to learn ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/cYNVVspXUdA/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/cYNVVspXUdA/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/cYNVVspXUdA/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "Internet Made Coder",
//             "liveBroadcastContent": "none",
//             "publishTime": "2022-09-03T12:00:31Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "xc3a_CJhjCc"
//         },
//         "snippet": {
//             "publishedAt": "2022-11-29T02:43:06Z",
//             "channelId": "UCyFWoLmPTgZ3BkHIKMRSV1g",
//             "title": "JavaScript Mastery Complete Course | JavaScript Tutorial For Beginner to Advanced",
//             "description": "Course Level: Beginner This Specialization is intended for the learner with no previous programming experience or the ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/xc3a_CJhjCc/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/xc3a_CJhjCc/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/xc3a_CJhjCc/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "Nerd's lesson",
//             "liveBroadcastContent": "none",
//             "publishTime": "2022-11-29T02:43:06Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "Wn_Kb3MR_cU"
//         },
//         "snippet": {
//             "publishedAt": "2021-12-28T11:21:14Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy a Modern Web 3.0 Blockchain App | Solidity, Smart Contracts, Crypto",
//             "description": "Web 3.0 has the potential to change the internet as we know it, forever. You're still early in catching the trend right now and ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/Wn_Kb3MR_cU/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/Wn_Kb3MR_cU/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/Wn_Kb3MR_cU/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2021-12-28T11:21:14Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "LMagNcngvcU"
//         },
//         "snippet": {
//             "publishedAt": "2021-11-12T12:33:51Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy a Fully Responsive Modern UI/UX Website in React JS",
//             "description": "This video is perfect for you if you want to learn how to transform a Figma design into a fully functioning website, improve your ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/LMagNcngvcU/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/LMagNcngvcU/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/LMagNcngvcU/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2021-11-12T12:33:51Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "Llsq1y-HWs4"
//         },
//         "snippet": {
//             "publishedAt": "2021-10-18T15:39:58Z",
//             "channelId": "UCrkQMtWNtuq-1j0q8c2RVeQ",
//             "title": "JavaScript Beginning To Mastery Complete Tutorial (Part 2)",
//             "description": "Complete Modern Javascript / es6 Course Part 2 Source Code ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/Llsq1y-HWs4/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/Llsq1y-HWs4/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/Llsq1y-HWs4/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "Harshit vashisth",
//             "liveBroadcastContent": "none",
//             "publishTime": "2021-10-18T15:39:58Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "htznIeWKgg8"
//         },
//         "snippet": {
//             "publishedAt": "2023-06-18T18:00:27Z",
//             "channelId": "UCc7gpqMnnOSbU_F2-5MVVZw",
//             "title": "JavaScript Crash Course: Master the Basics in One Video! Ignite Your Front-End Mastery Series!",
//             "description": "SORRY FOR THE INCONVENIENCE (due to some error last part of the video is removed. here's is the link of remaining part): ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/htznIeWKgg8/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/htznIeWKgg8/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/htznIeWKgg8/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "Sheryians Coding School",
//             "liveBroadcastContent": "none",
//             "publishTime": "2023-06-18T18:00:27Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "_ivIUCSOZ78"
//         },
//         "snippet": {
//             "publishedAt": "2022-04-01T12:29:32Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy Your First Modern React Native App | NFT Marketplace Course - Extremely Easy!",
//             "description": "Master React Native by building a modern NFT Marketplace iOS and Android #ReactNative Application in one video! Alongside ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/_ivIUCSOZ78/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/_ivIUCSOZ78/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/_ivIUCSOZ78/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2022-04-01T12:29:32Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "NDbruK1fzG8"
//         },
//         "snippet": {
//             "publishedAt": "2021-10-19T11:00:26Z",
//             "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
//             "title": "Build and Deploy Google Search 2.0 with React &amp; Tailwind CSS (simple!)",
//             "description": "With the ability to search for up-to-date results, news, images, and videos, modern UI, dark mode, this completely responsive ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/NDbruK1fzG8/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/NDbruK1fzG8/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/NDbruK1fzG8/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "JavaScript Mastery",
//             "liveBroadcastContent": "none",
//             "publishTime": "2021-10-19T11:00:26Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "A7fF6czIxEo"
//         },
//         "snippet": {
//             "publishedAt": "2022-12-02T22:10:59Z",
//             "channelId": "UCu1xbgCV5o48h_BYCQD7KJg",
//             "title": "How Much HTML, CSS, &amp; JavaScript Is Enough? | Realistic Expectations",
//             "description": "Check out the full podcast with Lane Wagner here: https://youtu.be/YPBxQ_7aUTU Get 25% off your first 3 months at ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/A7fF6czIxEo/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/A7fF6czIxEo/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/A7fF6czIxEo/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "Chris Sean",
//             "liveBroadcastContent": "none",
//             "publishTime": "2022-12-02T22:10:59Z"
//         }
//     }
// ]

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 TRT Media
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#FC1503" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
