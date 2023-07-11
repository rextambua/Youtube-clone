import React, {useState, useEffect} from "react";
import {Stack, Box, Typography} from '@mui/material';
import {Sidebar, Videos} from "./";
import {fetchFromAPI} from "../utils/fetchFromAPI";

const DummyVid = [
    {
    "kind": "youtube#caption",
    "id": "AUieDaZHR-hdtpvJvd_dtt6cuYWaFGFlDocKBzLyQktj",
    "snippet": {
        "videoId": "M7FIvfx5J10",
        "lastUpdated": "2013-11-14T08:09:57.310379Z",
        "trackKind": "standard",
        "language": "bg",
        "name": "",
        "audioTrackType": "unknown",
        "isCC": false,
        "isLarge": false,
        "isEasyReader": false,
        "isDraft": false,
        "isAutoSynced": false,
        "status": "serving"
    }
},
    {
        "kind": "youtube#caption",
        "id": "AUieDaabls5Sj_JBTPLxa9mButbWQUGoslSg8kZ_QABG",
        "snippet": {
            "videoId": "M7FIvfx5J10",
            "lastUpdated": "2013-11-14T08:10:14.31492Z",
            "trackKind": "standard",
            "language": "cs",
            "name": "",
            "audioTrackType": "unknown",
            "isCC": false,
            "isLarge": false,
            "isEasyReader": false,
            "isDraft": false,
            "isAutoSynced": false,
            "status": "serving"
        }
    },
    {
        "kind": "youtube#caption",
        "id": "AUieDaYpu3pSVa1cGYcHqZIUxh9gGngs6-uicZIUpL58",
        "snippet": {
            "videoId": "M7FIvfx5J10",
            "lastUpdated": "2013-11-14T08:07:13.379383Z",
            "trackKind": "standard",
            "language": "da",
            "name": "",
            "audioTrackType": "unknown",
            "isCC": false,
            "isLarge": false,
            "isEasyReader": false,
            "isDraft": false,
            "isAutoSynced": false,
            "status": "serving"
        }
    },
    {
        "kind": "youtube#caption",
        "id": "AUieDaZUoWgikIECdNMeW06L4dlXEsmzLibHuGiVpGNH",
        "snippet": {
            "videoId": "M7FIvfx5J10",
            "lastUpdated": "2013-11-22T10:03:05.314327Z",
            "trackKind": "standard",
            "language": "de",
            "name": "",
            "audioTrackType": "unknown",
            "isCC": false,
            "isLarge": false,
            "isEasyReader": false,
            "isDraft": false,
            "isAutoSynced": false,
            "status": "serving"
        }
    },
    {
        "kind": "youtube#caption",
        "id": "AUieDaapCopU7k8ts1dVMlDpuAPmsvnJwDPF_69fo8du",
        "snippet": {
            "videoId": "M7FIvfx5J10",
            "lastUpdated": "2013-11-14T08:10:31.456401Z",
            "trackKind": "standard",
            "language": "el",
            "name": "",
            "audioTrackType": "unknown",
            "isCC": false,
            "isLarge": false,
            "isEasyReader": false,
            "isDraft": false,
            "isAutoSynced": false,
            "status": "serving"
        }
    },
    {
        "kind": "youtube#caption",
        "id": "AUieDaYnK2OXt0U3XsuTRfAFDs3EDnvGA_5CmrvsfmXM",
        "snippet": {
            "videoId": "M7FIvfx5J10",
            "lastUpdated": "2013-11-14T08:12:52.322594Z",
            "trackKind": "standard",
            "language": "lv",
            "name": "",
            "audioTrackType": "unknown",
            "isCC": false,
            "isLarge": false,
            "isEasyReader": false,
            "isDraft": false,
            "isAutoSynced": false,
            "status": "serving"
        }
    },
    {
        "kind": "youtube#caption",
        "id": "AUieDabCH6Hlajjc_wlbs7KDBkGl82e5IWPs3ne026wH",
        "snippet": {
            "videoId": "M7FIvfx5J10",
            "lastUpdated": "2013-11-14T08:13:24.307402Z",
            "trackKind": "standard",
            "language": "mk",
            "name": "",
            "audioTrackType": "unknown",
            "isCC": false,
            "isLarge": false,
            "isEasyReader": false,
            "isDraft": false,
            "isAutoSynced": false,
            "status": "serving"
        }
    },
    {
        "kind": "youtube#caption",
        "id": "AUieDaav3ERlFMevRQ_TObQFEOU3nvW2J1hAyw13XE9h",
        "snippet": {
            "videoId": "M7FIvfx5J10",
            "lastUpdated": "2013-11-14T08:08:18.257433Z",
            "trackKind": "standard",
            "language": "nl",
            "name": "",
            "audioTrackType": "unknown",
            "isCC": false,
            "isLarge": false,
            "isEasyReader": false,
            "isDraft": false,
            "isAutoSynced": false,
            "status": "serving"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "OD_A7wxaiKY"
        },
        "snippet": {
            "publishedAt": "2023-07-04T03:00:08Z",
            "channelId": "UC0TlpEJDwo4Pj9AMpHTw9uA",
            "title": "Relaxing Jazz | Smooth Background Music and Positive Jazz Suave Music for Work, Study",
            "description": "Relaxing Jazz | Smooth Background Music and Positive Jazz Suave Music for Work, Study #relaxingjazz #jazzsuave #positivejazz ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/OD_A7wxaiKY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/OD_A7wxaiKY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/OD_A7wxaiKY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Jazz Melody",
            "liveBroadcastContent": "none",
            "publishTime": "2023-07-04T03:00:08Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "kI8oweHVxDI"
        },
        "snippet": {
            "publishedAt": "2023-07-04T01:42:35Z",
            "channelId": "UCjPcekpNbZVvsM7zUZjzqvQ",
            "title": "Graphite Gulch Olimar, Battle   Pikmin 2 Music Extended",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/kI8oweHVxDI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/kI8oweHVxDI/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/kI8oweHVxDI/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "gamemusicboss",
            "liveBroadcastContent": "none",
            "publishTime": "2023-07-04T01:42:35Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "R8st7AdVPjw"
        },
        "snippet": {
            "publishedAt": "2023-07-04T01:33:34Z",
            "channelId": "UCGDPhXrv1Pwi8GvPrRgK_JA",
            "title": "Sade - Smooth Operator (Enzo Remix) [Lyrics]",
            "description": "Sade - Smooth Operator (Enzo Remix) [Lyrics] Listen to \"Smooth Operator (Enzo Remix)\" on Spotify: ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/R8st7AdVPjw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/R8st7AdVPjw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/R8st7AdVPjw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Blissful Mind",
            "liveBroadcastContent": "none",
            "publishTime": "2023-07-04T01:33:34Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "Bn6DgzesTOA"
        },
        "snippet": {
            "publishedAt": "2023-07-03T23:00:07Z",
            "channelId": "UCSX5Gk1UvlYWYyjeVZFnp-w",
            "title": "Morning Vibes Music🍀Chill songs to make you feel so good ~ Morning music for positive energy",
            "description": "Morning Vibes Music  Chill songs to make you feel so good ~ Morning music for positive energy Hello everyone!~ Welcome to ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/Bn6DgzesTOA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/Bn6DgzesTOA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/Bn6DgzesTOA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Chill Vibes",
            "liveBroadcastContent": "none",
            "publishTime": "2023-07-03T23:00:07Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "opTXVdH7rbY"
        },
        "snippet": {
            "publishedAt": "2023-07-03T18:34:38Z",
            "channelId": "UC4jjDHIjC-U4I6XdbyIZoTg",
            "title": "Rylo Rodriguez - &quot;You Should&quot; - Official Music Video",
            "description": "Rylo Rodriguez - \"You Should\" - Official Music Video Listen to the \"You Should\" Single: https://rylorodriguez.lnk.to/youshould ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/opTXVdH7rbY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/opTXVdH7rbY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/opTXVdH7rbY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Rylo Rodriguez",
            "liveBroadcastContent": "none",
            "publishTime": "2023-07-03T18:34:38Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "mftERRHclqc"
        },
        "snippet": {
            "publishedAt": "2023-07-03T18:09:26Z",
            "channelId": "UCwobzUc3z-0PrFpoRxNszXQ",
            "title": "🔴 Relaxing Music 24/7, Stress Relief Music, Sleep Music, Meditation Music, Study, Calming Music",
            "description": "Enjoy our latest relaxing music live stream: youtube.com/yellowbrickcinema/live Relaxing Music 24/7, Stress Relief Music, Sleep ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/mftERRHclqc/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/mftERRHclqc/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/mftERRHclqc/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Yellow Brick Cinema - Relaxing Music",
            "liveBroadcastContent": "live",
            "publishTime": "2023-07-03T18:09:26Z"
        }
    }]


const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos, setVideos] = useState(DummyVid)

    useEffect(()=>{
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=>setVideos(data.items));
    }, [])

  return(
      <Stack sx={{flexDirection: {sx:'column', md: "row"}}}>
        <Box sx={{ height: {sx:'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}}}>
          <Sidebar selectedCategory={setSelectedCategory} setSelectedCategory={setSelectedCategory}/>
          <Typography className='copyright'
          variant='body2' sx={{mt :1.5, color: "#fff"}}>
            Copyright 2023 TRT Media
          </Typography>
        </Box>
          <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex:2}}>
              <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: 'white'}}>
                  {selectedCategory} <span style={{color: '#F31503'}}>Videos</span>
              </Typography>
              <Videos videos={ DummyVid }/>
          </Box>
      </Stack>
  )
};

export default Feed;

