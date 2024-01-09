import React, { useState, useEffect } from 'react'
import NavBarDoc from '../../NavBarDoc'
import SideBarDoc from '../../SideBarDoc'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Style from "../Developing/jsonrpc.css"


export default function JSONRPCAPI() {
  const [isSidebar, setIsSidebar] = useState(false)

  const handleClick = () => {
    console.log(!isSidebar)
    return setIsSidebar(!isSidebar)
  }

  useEffect(() => {
    if (window.innerWidth <= 760) {
      setIsSidebar(true);
    }
  }, [])


  const codeString = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
    {
      "jsonrpc": "2.0",
      "id": 1,
      "method": "getBalance",
      "params": [
        "83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri"
      ]
    }
    '
  `
  const codeString1 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getBalance",
    "params": [
      "83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri",
      {
        "commitment": "finalized"
      }
    ]
  }
  
  '
  `

  const codeString2 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getAccountInfo",
    "params": [
      "vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg",
      {
        "encoding": "base58"
      }
    ]
  }
  '
  `

  const codeString3 = `{
    "jsonrpc": "2.0",
    "result": {
      "context": {
        "slot": 1
      },
      "value": {
        "data": [
          "11116bv5nS2h3y12kD1yUKeMZvGcKLSjQgX6BeV7u1FrjeJcKfsHRTPuR3oZ1EioKtYGiYxpxMG5vpbZLsbcBYBEmZZcMKaSoGx9JZeAuWf",
          "base58"
        ],
        "executable": false,
        "lamports": 1000000000,
        "owner": "11111111111111111111111111111111",
        "rentEpoch": 2
      }
    },
    "id": 1
  }
  '
  `

  const codeString4 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0", "id":1, "method":"getBalance", "params":["83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri"]}
  '
  `
  const codeString5 = `{
    "jsonrpc": "2.0",
    "result": { "context": { "slot": 1 }, "value": 0 },
    "id": 1
  }
  `
  const codeString6 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc": "2.0","id":1,"method":"getBlock","params":[430, {"encoding": "json","transactionDetails":"full","rewards":false}]}
  '
  `
  const codeString7 = `{
    "jsonrpc": "2.0",
    "result": {
      "blockHeight": 428,
      "blockTime": null,
      "blockhash": "3Eq21vXNB5s86c62bVuUfTeaMif1N2kUqRPBmGRJhyTA",
      "parentSlot": 429,
      "previousBlockhash": "mfcyqEXB3DnHXki6KjjmZck6YjmZLvpAByy2fj4nh6B",
      "transactions": [
        {
          "meta": {
            "err": null,
            "fee": 5000,
            "innerInstructions": [],
            "logMessages": [],
            "postBalances": [499998932500, 26858640, 1, 1, 1],
            "postTokenBalances": [],
            "preBalances": [499998937500, 26858640, 1, 1, 1],
            "preTokenBalances": [],
            "status": {
              "Ok": null
            }
          },
          "transaction": {
            "message": {
              "accountKeys": [
                "3UVYmECPPMZSCqWKfENfuoTv51fTDTWicX9xmBD2euKe",
                "AjozzgE83A3x1sHNUR64hfH7zaEBWeMaFuAN9kQgujrc",
                "SysvarS1otHashes111111111111111111111111111",
                "SysvarC1ock11111111111111111111111111111111",
                "Vote111111111111111111111111111111111111111"
              ],
              "header": {
                "numReadonlySignedAccounts": 0,
                "numReadonlyUnsignedAccounts": 3,
                "numRequiredSignatures": 1
              },
              "instructions": [
                {
                  "accounts": [1, 2, 3, 0],
                  "data": "37u9WtQpcm6ULa3WRQHmj49EPs4if7o9f1jSRVZpm2dvihR9C8jY4NqEwXUbLwx15HBSNcP1",
                  "programIdIndex": 4
                }
              ],
              "recentBlockhash": "mfcyqEXB3DnHXki6KjjmZck6YjmZLvpAByy2fj4nh6B"
            },
            "signatures": [
              "2nBhEBYYvfaAe16UMNqRHre4YNSskvuYgx3M6E4JP1oDYvZEJHvoPzyUidNgNX5r9sTyN1J9UxtbCXy2rqYcuyuv"
            ]
          }
        }
      ]
    },
    "id": 1
  }
  `
  const codeString8 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc": "2.0","id":1,"method":"getBlock","params":[430, "base64"]}
  '
  `
  const codeString9 = `{
    "jsonrpc": "2.0",
    "result": {
      "blockHeight": 428,
      "blockTime": null,
      "blockhash": "3Eq21vXNB5s86c62bVuUfTeaMif1N2kUqRPBmGRJhyTA",
      "parentSlot": 429,
      "previousBlockhash": "mfcyqEXB3DnHXki6KjjmZck6YjmZLvpAByy2fj4nh6B",
      "rewards": [],
      "transactions": [
        {
          "meta": {
            "err": null,
            "fee": 5000,
            "innerInstructions": null,
            "logMessages": null,
            "postBalances": [499998932500, 26858640, 1, 1, 1],
            "postTokenBalances": [],
            "preBalances": [499998937500, 26858640, 1, 1, 1],
            "preTokenBalances": [],
            "status": {
              "Ok": null
            }
          },
          "transaction": [
            "AVj7dxHlQ9IrvdYVIjuiRFs1jLaDMHixgrv+qtHBwz51L4/ImLZhszwiyEJDIp7xeBSpm/TX5B7mYzxa+fPOMw0BAAMFJMJVqLw+hJYheizSoYlLm53KzgT82cDVmazarqQKG2GQsLgiqktA+a+FDR4/7xnDX7rsusMwryYVUdixfz1B1Qan1RcZLwqvxvJl4/t3zHragsUp0L47E24tAFUgAAAABqfVFxjHdMkoVmOYaR1etoteuKObS21cc1VbIQAAAAAHYUgdNXR0u3xNdiTr072z2DVec9EQQ/wNo1OAAAAAAAtxOUhPBp2WSjUNJEgfvy70BbxI00fZyEPvFHNfxrtEAQQEAQIDADUCAAAAAQAAAAAAAACtAQAAAAAAAAdUE18R96XTJCe+YfRfUp6WP+YKCy/72ucOL8AoBFSpAA==",
            "base64"
          ]
        }
      ]
    },
    "id": 1
  }
  `
  const codeString10 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0","id":1, "method":"getBlockHeight"}
  '
  `
  const codeString11 = `{ "jsonrpc": "2.0", "result": 1233, "id": 1 }`
  const codeString12 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
    {"jsonrpc":"2.0","id":1, "method":"getBlockProduction"}
  '
  `
  const codeString13 = `{
      "jsonrpc": "2.0",
      "result": {
        "context": {
          "slot": 9887
        },
        "value": {
          "byIdentity": {
            "85iYT5RuzRTDgjyRa3cP8SYhM2j21fj7NhfJ3peu1DPr": [9888, 9886]
          },
          "range": {
            "firstSlot": 0,
            "lastSlot": 9887
          }
        }
      },
      "id": 1
    }`

  const codeString14 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
    {
      "jsonrpc": "2.0",
      "id": 1,
      "method": "getBlockProduction",
      "params": [
        {
          "identity": "85iYT5RuzRTDgjyRa3cP8SYhM2j21fj7NhfJ3peu1DPr",
          "range": {
            "firstSlot": 40,
            "lastSlot": 50
          }
        }
      ]
    }
  '
  '
  `
  const codeString15 = `{
      "jsonrpc": "2.0",
      "result": {
        "context": {
          "slot": 10102
        },
        "value": {
          "byIdentity": {
            "85iYT5RuzRTDgjyRa3cP8SYhM2j21fj7NhfJ3peu1DPr": [11, 11]
          },
          "range": {
            "firstSlot": 50,
            "lastSlot": 40
          }
        }
      },
      "id": 1
    }`
  const codeString16 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
    {"jsonrpc":"2.0","id":1, "method":"getBlockCommitment","params":[5]}
  '
  `
  const codeString17 = `{
      "jsonrpc": "2.0",
      "result": {
        "commitment": [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 10, 32
        ],
        "totalStake": 42
      },
      "id": 1
    }`

  const codeString18 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
    {"jsonrpc": "2.0","id":1,"method":"getBlocks","params":[5, 10]}
  '
  `
  const codeString19 = `{ "jsonrpc": "2.0", "result": [5, 6, 7, 8, 9, 10], "id": 1 }
    `
  const codeString20 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
    {"jsonrpc": "2.0","id":1,"method":"getBlocksWithLimit","params":[5, 3]}
  '
  `
  const codeString21 = `{ "jsonrpc": "2.0", "result": [5, 6, 7], "id": 1 }
    `
  const codeString22 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
    {"jsonrpc":"2.0","id":1, "method":"getBlockTime","params":[5]}
  '
  `
  const codeString23 = `{ "jsonrpc": "2.0", "result": 1574721591, "id": 1 }
    `
  const codeString24 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
    {"jsonrpc":"2.0", "id":1, "method":"getClusterNodes"}
  '
  `
  const codeString25 = `{
      "jsonrpc": "2.0",
      "result": [
        {
          "gossip": "10.239.6.48:8001",
          "pubkey": "9QzsJf7LPLj8GkXbYT3LFDKqsj2hHG7TA3xinJHu8epQ",
          "rpc": "10.239.6.48:8899",
          "tpu": "10.239.6.48:8856",
          "version": "1.0.0 c375ce1f"
        }
      ],
      "id": 1
    }
    `
  const codeString26 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
    {"jsonrpc":"2.0","id":1, "method":"getEpochInfo"}
  '
  `
  const codeString27 = `{
      "jsonrpc": "2.0",
      "result": {
        "absoluteSlot": 166598,
        "blockHeight": 166500,
        "epoch": 27,
        "slotIndex": 2790,
        "slotsInEpoch": 8192,
        "transactionCount": 22661093
      },
      "id": 1
    }
    `
  const codeString28 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
    {"jsonrpc":"2.0","id":1, "method":"getEpochSchedule"}'
  `
  const codeString29 = `{
      "jsonrpc": "2.0",
      "result": {
        "firstNormalEpoch": 8,
        "firstNormalSlot": 8160,
        "leaderScheduleSlotOffset": 8192,
        "slotsPerEpoch": 8192,
        "warmup": true
      },
      "id": 1
    }
    `
  const codeString30 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
    {
      "id":1,
      "jsonrpc":"2.0",
      "method":"getFeeForMessage",
      "params":[
        "AQABAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAA",
        {
          "commitment":"processed"
        }
      ]
    }
    '
  `
  const codeString32 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
    {"jsonrpc":"2.0","id":1, "method":"getFirstAvailableBlock"}
  '`
  const codeString33 = `{ "jsonrpc": "2.0", "result": 250000, "id": 1 }
  `
  const codeString31 = `{
      "jsonrpc": "2.0",
      "result": { "context": { "slot": 5068 }, "value": 5000 },
      "id": 1
    }`
  const codeString34 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
    {"jsonrpc":"2.0","id":1, "method":"getGenesisHash"}
  '`
  const codeString35 = `{
        "jsonrpc": "2.0",
        "result": "GH7ome3EiwEr7tu9JuTh2dpYWBJK3z69Xm1ZE3MEE6JC",
        "id": 1
      }`
  const codeString36 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
      {"jsonrpc":"2.0","id":1, "method":"getHealth"}
    '
      `
  const codeString37 = `{ "jsonrpc": "2.0", "result": "ok", "id": 1 }`
  const codeString38 = `{
          "jsonrpc": "2.0",
          "error": {
            "code": -32005,
            "message": "Node is unhealthy",
            "data": {}
          },
          "id": 1
        }`
  const codeString39 = `{
            "jsonrpc": "2.0",
            "error": {
              "code": -32005,
              "message": "Node is behind by 42 slots",
              "data": {
                "numSlotsBehind": 42
              }
            },
            "id": 1
          }`
  const codeString40 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
          {"jsonrpc":"2.0","id":1,"method":"getHighestSnapshotSlot"}
        '`
  const codeString41 = `{ "jsonrpc": "2.0", "result": { "full": 100, "incremental": 110 }, "id": 1 }`
  const codeString42 = `{
            "jsonrpc": "2.0",
            "error": { "code": -32008, "message": "No snapshot" },
            "id": 1
          }`
  const codeString43 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
          {"jsonrpc":"2.0","id":1, "method":"getIdentity"}
        '`
  const codeString44 = `{
            "jsonrpc": "2.0",
            "result": { "identity": "2r1F4iWqVcb8M1DbAjQuFpebkQHY9hcVU4WuW2DJBppN" },
            "id": 1
          }`
  const codeString45 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
          {"jsonrpc":"2.0","id":1, "method":"getInflationGovernor"}
        '`
  const codeString46 = `{
            "jsonrpc": "2.0",
            "result": {
              "foundation": 0.05,
              "foundationTerm": 7,
              "initial": 0.15,
              "taper": 0.15,
              "terminal": 0.015
            },
            "id": 1
          }`
  const codeString47 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
          {"jsonrpc":"2.0","id":1, "method":"getInflationRate"}
        '`
  const codeString48 = `{
            "jsonrpc": "2.0",
            "result": {
              "epoch": 100,
              "foundation": 0.001,
              "total": 0.149,
              "validator": 0.148
            },
            "id": 1
          }`
  const codeString49 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
          {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "getInflationReward",
            "params": [
               ["6dmNQ5jwLeLk5REvio1JcMshcbvkYMwy26sJ8pbkvStu", "BGsqMegLpV6n6Ve146sSX2dTjUMj3M92HnU8BbNRMhF2"], {"epoch": 2}
            ]
          }
        '`
  const codeString50 = `{
            "jsonrpc": "2.0",
            "result": [
              {
                "amount": 2500,
                "effectiveSlot": 224,
                "epoch": 2,
                "postBalance": 499999442500
              },
              null
            ],
            "id": 1
          }`
  const codeString51 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
          {"jsonrpc":"2.0","id":1, "method":"getLargestAccounts"}
        '`
  const codeString52 = `{
            "jsonrpc": "2.0",
            "result": {
              "context": {
                "slot": 54
              },
              "value": [
                {
                  "lamports": 999974,
                  "address": "99P8ZgtJYe1buSK8JXkvpLh8xPsCFuLYhz9hQFNw93WJ"
                },
                {
                  "lamports": 42,
                  "address": "uPwWLo16MVehpyWqsLkK3Ka8nLowWvAHbBChqv2FZeL"
                },
                {
                  "lamports": 42,
                  "address": "aYJCgU7REfu3XF8b3QhkqgqQvLizx8zxuLBHA25PzDS"
                },
                {
                  "lamports": 42,
                  "address": "CTvHVtQ4gd4gUcw3bdVgZJJqApXE9nCbbbP4VTS5wE1D"
                },
                {
                  "lamports": 20,
                  "address": "4fq3xJ6kfrh9RkJQsmVd5gNMvJbuSHfErywvEjNQDPxu"
                },
                {
                  "lamports": 4,
                  "address": "AXJADheGVp9cruP8WYu46oNkRbeASngN5fPCMVGQqNHa"
                },
                {
                  "lamports": 2,
                  "address": "8NT8yS6LiwNprgW4yM1jPPow7CwRUotddBVkrkWgYp24"
                },
                {
                  "lamports": 1,
                  "address": "SysvarEpochSchedu1e111111111111111111111111"
                },
                {
                  "lamports": 1,
                  "address": "11111111111111111111111111111111"
                },
                {
                  "lamports": 1,
                  "address": "Stake11111111111111111111111111111111111111"
                },
                {
                  "lamports": 1,
                  "address": "SysvarC1ock11111111111111111111111111111111"
                },
                {
                  "lamports": 1,
                  "address": "StakeConfig11111111111111111111111111111111"
                },
                {
                  "lamports": 1,
                  "address": "SysvarRent111111111111111111111111111111111"
                },
                {
                  "lamports": 1,
                  "address": "Config1111111111111111111111111111111111111"
                },
                {
                  "lamports": 1,
                  "address": "SysvarStakeHistory1111111111111111111111111"
                },
                {
                  "lamports": 1,
                  "address": "SysvarRecentB1ockHashes11111111111111111111"
                },
                {
                  "lamports": 1,
                  "address": "SysvarFees111111111111111111111111111111111"
                },
                {
                  "lamports": 1,
                  "address": "Vote111111111111111111111111111111111111111"
                }
              ]
            },
            "id": 1
          }`
  const codeString53 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
          {
            "id":1,
            "jsonrpc":"2.0",
            "method":"getLatestBlockhash",
            "params":[
              {
                "commitment":"processed"
              }
            ]
          }
        '`
  const codeString54 = `{
            "jsonrpc": "2.0",
            "result": {
              "context": {
                "slot": 2792
              },
              "value": {
                "blockhash": "EkSnNWid2cvwEVnVx9aBqawnmiCNiDgp3gUdkDPTKN1N",
                "lastValidBlockHeight": 3090
              }
            },
            "id": 1
          }`
  const codeString55 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
          {"jsonrpc":"2.0","id":1, "method":"getLeaderSchedule"}
        '`
  const codeString56 = `{
      "jsonrpc": "2.0",
      "result": {
        "4Qkev8aNZcqFNSRhQzwyLMFSsi94jHqE8WNVTJzTP99F": [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
          39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
          57, 58, 59, 60, 61, 62, 63
        ]
      },
      "id": 1
    }`
  const codeString57 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
    {
      "jsonrpc": "2.0",
      "id": 1,
      "method": "getLeaderSchedule",
      "params": [
        null,
        {
          "identity": "4Qkev8aNZcqFNSRhQzwyLMFSsi94jHqE8WNVTJzTP99F"
        }
      ]
    }
  '`
  const codeString58 = `{
    "jsonrpc": "2.0",
    "result": {
      "4Qkev8aNZcqFNSRhQzwyLMFSsi94jHqE8WNVTJzTP99F": [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
        57, 58, 59, 60, 61, 62, 63
      ]
    },
    "id": 1
  }`
  const codeString59 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0","id":1, "method":"getMaxRetransmitSlot"}
  '`
  const codeString60 = `{ "jsonrpc": "2.0", "result": 1234, "id": 1 }`
  const codeString61 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0","id":1, "method":"getMaxShredInsertSlot"}
  '`
  const codeString62 = `{ "jsonrpc": "2.0", "result": 1234, "id": 1 }`
  const codeString63 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0", "id":1, "method":"getMinimumBalanceForRentExemption", "params":[50]}
  '`
  const codeString64 = `{ "jsonrpc": "2.0", "result": 500, "id": 1 }`
  const codeString65 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getMultipleAccounts",
    "params": [
      [
        "vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg",
        "4fYNw3dojWmQ4dXtSGE9epjRGy9pFSx62YypT7avPYvA"
      ],
      {
        "dataSlice": {
          "offset": 0,
          "length": 0
        }
      }
    ]
  }
  '`
  const codeString66 = `{
    "jsonrpc": "2.0",
    "result": {
      "context": {
        "slot": 1
      },
      "value": [
        {
          "data": ["AAAAAAEAAAACtzNsyJrW0g==", "base64"],
          "executable": false,
          "lamports": 1000000000,
          "owner": "11111111111111111111111111111111",
          "rentEpoch": 2
        },
        {
          "data": ["", "base64"],
          "executable": false,
          "lamports": 5000000000,
          "owner": "11111111111111111111111111111111",
          "rentEpoch": 2
        }
      ]
    },
    "id": 1
  }`
  const codeString67 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getMultipleAccounts",
    "params": [
      [
        "vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg",
        "4fYNw3dojWmQ4dXtSGE9epjRGy9pFSx62YypT7avPYvA"
      ],
      {
        "encoding": "base58"
      }
    ]
  }
  '`
  const codeString68 = `{
    "jsonrpc": "2.0",
    "result": {
      "context": {
        "slot": 1
      },
      "value": [
        {
          "data": [
            "11116bv5nS2h3y12kD1yUKeMZvGcKLSjQgX6BeV7u1FrjeJcKfsHRTPuR3oZ1EioKtYGiYxpxMG5vpbZLsbcBYBEmZZcMKaSoGx9JZeAuWf",
            "base58"
          ],
          "executable": false,
          "lamports": 1000000000,
          "owner": "11111111111111111111111111111111",
          "rentEpoch": 2
        },
        {
          "data": ["", "base58"],
          "executable": false,
          "lamports": 5000000000,
          "owner": "11111111111111111111111111111111",
          "rentEpoch": 2
        }
      ]
    },
    "id": 1
  }`
  const codeString69 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0", "id":1, "method":"getProgramAccounts", "params":["4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T"]}
  '`
  const codeString70 = `{
    "jsonrpc": "2.0",
    "result": [
      {
        "account": {
          "data": "2R9jLfiAQ9bgdcw6h8s44439",
          "executable": false,
          "lamports": 15298080,
          "owner": "4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",
          "rentEpoch": 28
        },
        "pubkey": "CxELquR1gPP8wHe33gZ4QxqGB3sZ9RSwsJ2KshVewkFY"
      }
    ],
    "id": 1
  }`
  const codeString71 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getProgramAccounts",
    "params": [
      "4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",
      {
        "filters": [
          {
            "dataSize": 17
          },
          {
            "memcmp": {
              "offset": 4,
              "bytes": "3Mc6vR"
            }
          }
        ]
      }
    ]
  }
  '`
  const codeString72 = `{
    "jsonrpc": "2.0",
    "result": [
      {
        "account": {
          "data": "2R9jLfiAQ9bgdcw6h8s44439",
          "executable": false,
          "lamports": 15298080,
          "owner": "4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",
          "rentEpoch": 28
        },
        "pubkey": "CxELquR1gPP8wHe33gZ4QxqGB3sZ9RSwsJ2KshVewkFY"
      }
    ],
    "id": 1
  }`
  const codeString73 = `// Request
  curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
    {"jsonrpc":"2.0", "id":1, "method":"getRecentPerformanceSamples", "params": [4]}
  '`
  const codeString74 = `{
      "jsonrpc": "2.0",
      "result": [
        {
          "numSlots": 126,
          "numTransactions": 126,
          "samplePeriodSecs": 60,
          "slot": 348125
        },
        {
          "numSlots": 126,
          "numTransactions": 126,
          "samplePeriodSecs": 60,
          "slot": 347999
        },
        {
          "numSlots": 125,
          "numTransactions": 125,
          "samplePeriodSecs": 60,
          "slot": 347873
        },
        {
          "numSlots": 125,
          "numTransactions": 125,
          "samplePeriodSecs": 60,
          "slot": 347748
        }
      ],
      "id": 1
    }`
  const codeString75 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
    {
      "jsonrpc": "2.0",
      "id": 1,
      "method": "getSignaturesForAddress",
      "params": [
        "Vote111111111111111111111111111111111111111",
        {
          "limit": 1
        }
      ]
    }
  '`
  const codeString76 = `{
        "jsonrpc": "2.0",
        "result": [
          {
            "err": null,
            "memo": null,
            "signature": "5h6xBEauJ3PK6SWCZ1PGjBvj8vDdWG3KpwATGy1ARAXFSDwt8GFXM7W5Ncn16wmqokgpiKRLuS83KUxyZyv2sUYv",
            "slot": 114,
            "blockTime": null
          }
        ],
        "id": 1
      }`
  const codeString77 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
      {
        "jsonrpc": "2.0",
        "id": 1,
        "method": "getSignatureStatuses",
        "params": [
          [
            "5VERv8NMvzbJMEkV8xnrLkEaWRtSz9CosKDYjCJjBRnbJLgp8uirBgmQpjKhoR4tjF3ZpRzrFmBV6UjKdiSZkQUW",
            "5j7s6NiJS3JAkvgkoc18WVAsiSaci2pxB2A6ueCJP4tprA2TFg9wSyTLeYouxPBJEMzJinENTkpA52YStRW5Dia7"
          ]
        ]
      }
    '`
  const codeString78 = `{
        "jsonrpc": "2.0",
        "result": {
          "context": {
            "slot": 82
          },
          "value": [
            {
              "slot": 72,
              "confirmations": 10,
              "err": null,
              "status": {
                "Ok": null
              },
              "confirmationStatus": "confirmed"
            },
            null
          ]
        },
        "id": 1
      }`
  const codeString79 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
      {
        "jsonrpc": "2.0",
        "id": 1,
        "method": "getSignatureStatuses",
        "params": [
          [
            "5VERv8NMvzbJMEkV8xnrLkEaWRtSz9CosKDYjCJjBRnbJLgp8uirBgmQpjKhoR4tjF3ZpRzrFmBV6UjKdiSZkQUW"
          ],
          {
            "searchTransactionHistory": true
          }
        ]
      }
    '`
  const codeString80 = `{
        "jsonrpc": "2.0",
        "result": {
          "context": {
            "slot": 82
          },
          "value": [
            {
              "slot": 48,
              "confirmations": null,
              "err": null,
              "status": {
                "Ok": null
              },
              "confirmationStatus": "finalized"
            },
            null
          ]
        },
        "id": 1
      }`
  const codeString81 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
      {"jsonrpc":"2.0","id":1, "method":"getSlot"}
    '`
  const codeString82 = `{ "jsonrpc": "2.0", "result": 1234, "id": 1 }`
  const codeString83 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
      {"jsonrpc":"2.0","id":1, "method":"getSlotLeader"}
    '`
  const codeString84 = `{
        "jsonrpc": "2.0",
        "result": "ENvAW7JScgYq6o4zKZwewtkzzJgDzuJAFxYasvmEQdpS",
        "id": 1
      }`
  const codeString85 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
      {"jsonrpc":"2.0","id":1, "method":"getSlotLeaders", "params":[100, 10]}
    '`
  const codeString86 = `{
        "jsonrpc": "2.0",
        "result": [
          "ChorusmmK7i1AxXeiTtQgQZhQNiXYU84ULeaYF1EH15n",
          "ChorusmmK7i1AxXeiTtQgQZhQNiXYU84ULeaYF1EH15n",
          "ChorusmmK7i1AxXeiTtQgQZhQNiXYU84ULeaYF1EH15n",
          "ChorusmmK7i1AxXeiTtQgQZhQNiXYU84ULeaYF1EH15n",
          "Awes4Tr6TX8JDzEhCZY2QVNimT6iD1zWHzf1vNyGvpLM",
          "Awes4Tr6TX8JDzEhCZY2QVNimT6iD1zWHzf1vNyGvpLM",
          "Awes4Tr6TX8JDzEhCZY2QVNimT6iD1zWHzf1vNyGvpLM",
          "Awes4Tr6TX8JDzEhCZY2QVNimT6iD1zWHzf1vNyGvpLM",
          "DWvDTSh3qfn88UoQTEKRV2JnLt5jtJAVoiCo3ivtMwXP",
          "DWvDTSh3qfn88UoQTEKRV2JnLt5jtJAVoiCo3ivtMwXP"
        ],
        "id": 1
      }`
  const codeString87 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
      {"jsonrpc":"2.0","id":1, "method":"getStakeActivation", "params": ["CYRJWqiSjLitBAcRxPvWpgX3s5TvmN2SuRY3eEYypFvT"]}
    '`
  const codeString88 = `{
        "jsonrpc": "2.0",
        "result": { "active": 197717120, "inactive": 0, "state": "active" },
        "id": 1
      }`
  const codeString89 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
      {
        "jsonrpc": "2.0",
        "id": 1,
        "method": "getStakeActivation",
        "params": [
          "CYRJWqiSjLitBAcRxPvWpgX3s5TvmN2SuRY3eEYypFvT",
          {
            "epoch": 4
          }
        ]
      }
    '`
  const codeString90 = `{
        "jsonrpc": "2.0",
        "result": {
          "active": 124429280,
          "inactive": 73287840,
          "state": "activating"
        },
        "id": 1
      }`
  const codeString91 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
      {"jsonrpc":"2.0", "id":1, "method":"getSupply"}
    '`
  const codeString92 = `{
        "jsonrpc": "2.0",
        "result": {
          "context": {
            "slot": 1114
          },
          "value": {
            "circulating": 16000,
            "nonCirculating": 1000000,
            "nonCirculatingAccounts": [
              "FEy8pTbP5fEoqMV1GdTz83byuA8EKByqYat1PKDgVAq5",
              "9huDUZfxoJ7wGMTffUE7vh1xePqef7gyrLJu9NApncqA",
              "3mi1GmwEE3zo2jmfDuzvjSX9ovRXsDUKHvsntpkhuLJ9",
              "BYxEJTDerkaRWBem3XgnVcdhppktBXa2HbkHPKj2Ui4Z"
            ],
            "total": 1016000
          }
        },
        "id": 1
      }`
  const codeString93 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
      {"jsonrpc":"2.0", "id":1, "method":"getTokenAccountBalance", "params": ["7fUAJdStEuGbc3sM84cKRL6yYaaSstyLSU4ve5oovLS7"]}
    '`
  const codeString94 = `{
        "jsonrpc": "2.0",
        "result": {
          "context": {
            "slot": 1114
          },
          "value": {
            "amount": "9864",
            "decimals": 2,
            "uiAmount": 98.64,
            "uiAmountString": "98.64"
          },
          "id": 1
        }
      }`
  const codeString95 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
      {
        "jsonrpc": "2.0",
        "id": 1,
        "method": "getTokenAccountsByDelegate",
        "params": [
          "4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",
          {
            "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
          },
          {
            "encoding": "jsonParsed"
          }
        ]
      }
    '`
  const codeString96 = `{
        "jsonrpc": "2.0",
        "result": {
          "context": {
            "slot": 1114
          },
          "value": [
            {
              "account": {
                "data": {
                  "program": "spl-token",
                  "parsed": {
                    "info": {
                      "tokenAmount": {
                        "amount": "1",
                        "decimals": 1,
                        "uiAmount": 0.1,
                        "uiAmountString": "0.1"
                      },
                      "delegate": "4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",
                      "delegatedAmount": {
                        "amount": "1",
                        "decimals": 1,
                        "uiAmount": 0.1,
                        "uiAmountString": "0.1"
                      },
                      "state": "initialized",
                      "isNative": false,
                      "mint": "3wyAj7Rt1TWVPZVteFJPLa26JmLvdb1CAKEFZm3NY75E",
                      "owner": "CnPoSPKXu7wJqxe59Fs72tkBeALovhsCxYeFwPCQH9TD"
                    },
                    "type": "account"
                  },
                  "space": 165
                },
                "executable": false,
                "lamports": 1726080,
                "owner": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                "rentEpoch": 4
              },
              "pubkey": "28YTZEwqtMHWrhWcvv34se7pjS7wctgqzCPB3gReCFKp"
            }
          ]
        },
        "id": 1
      }`
  const codeString97 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
      {
        "jsonrpc": "2.0",
        "id": 1,
        "method": "getTokenAccountsByOwner",
        "params": [
          "4Qkev8aNZcqFNSRhQzwyLMFSsi94jHqE8WNVTJzTP99F",
          {
            "mint": "3wyAj7Rt1TWVPZVteFJPLa26JmLvdb1CAKEFZm3NY75E"
          },
          {
            "encoding": "jsonParsed"
          }
        ]
      }
    '`
  const codeString98 = `{
        "jsonrpc": "2.0",
        "result": {
          "context": {
            "slot": 1114
          },
          "value": [
            {
              "account": {
                "data": {
                  "program": "spl-token",
                  "parsed": {
                    "accountType": "account",
                    "info": {
                      "tokenAmount": {
                        "amount": "1",
                        "decimals": 1,
                        "uiAmount": 0.1,
                        "uiAmountString": "0.1"
                      },
                      "delegate": "4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",
                      "delegatedAmount": {
                        "amount": "1",
                        "decimals": 1,
                        "uiAmount": 0.1,
                        "uiAmountString": "0.1"
                      },
                      "state": "initialized",
                      "isNative": false,
                      "mint": "3wyAj7Rt1TWVPZVteFJPLa26JmLvdb1CAKEFZm3NY75E",
                      "owner": "4Qkev8aNZcqFNSRhQzwyLMFSsi94jHqE8WNVTJzTP99F"
                    },
                    "type": "account"
                  },
                  "space": 165
                },
                "executable": false,
                "lamports": 1726080,
                "owner": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                "rentEpoch": 4
              },
              "pubkey": "C2gJg6tKpQs41PRS1nC8aw3ZKNZK3HQQZGVrDFDup5nx"
            }
          ]
        },
        "id": 1
      }`
  const codeString99 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
      {"jsonrpc":"2.0", "id":1, "method":"getTokenLargestAccounts", "params": ["3wyAj7Rt1TWVPZVteFJPLa26JmLvdb1CAKEFZm3NY75E"]}
    '`
  const codeString100 = `{
        "jsonrpc": "2.0",
        "result": {
          "context": {
            "slot": 1114
          },
          "value": [
            {
              "address": "FYjHNoFtSQ5uijKrZFyYAxvEr87hsKXkXcxkcmkBAf4r",
              "amount": "771",
              "decimals": 2,
              "uiAmount": 7.71,
              "uiAmountString": "7.71"
            },
            {
              "address": "BnsywxTcaYeNUtzrPxQUvzAWxfzZe3ZLUJ4wMMuLESnu",
              "amount": "229",
              "decimals": 2,
              "uiAmount": 2.29,
              "uiAmountString": "2.29"
            }
          ]
        },
        "id": 1
      }`
  const codeString101 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
      {"jsonrpc":"2.0", "id":1, "method":"getTokenSupply", "params": ["3wyAj7Rt1TWVPZVteFJPLa26JmLvdb1CAKEFZm3NY75E"]}
    '`
  const codeString102 = `{
        "jsonrpc": "2.0",
        "result": {
          "context": {
            "slot": 1114
          },
          "value": {
            "amount": "100000",
            "decimals": 2,
            "uiAmount": 1000,
            "uiAmountString": "1000"
          }
        },
        "id": 1
      }`
  const codeString103 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
      {
        "jsonrpc": "2.0",
        "id": 1,
        "method": "getTransaction",
        "params": [
          "2nBhEBYYvfaAe16UMNqRHre4YNSskvuYgx3M6E4JP1oDYvZEJHvoPzyUidNgNX5r9sTyN1J9UxtbCXy2rqYcuyuv",
          "json"
        ]
      }
    '`
  const codeString104 = `{
        "jsonrpc": "2.0",
        "result": {
          "meta": {
            "err": null,
            "fee": 5000,
            "innerInstructions": [],
            "postBalances": [499998932500, 26858640, 1, 1, 1],
            "postTokenBalances": [],
            "preBalances": [499998937500, 26858640, 1, 1, 1],
            "preTokenBalances": [],
            "status": {
              "Ok": null
            }
          },
          "slot": 430,
          "transaction": {
            "message": {
              "accountKeys": [
                "3UVYmECPPMZSCqWKfENfuoTv51fTDTWicX9xmBD2euKe",
                "AjozzgE83A3x1sHNUR64hfH7zaEBWeMaFuAN9kQgujrc",
                "SysvarS1otHashes111111111111111111111111111",
                "SysvarC1ock11111111111111111111111111111111",
                "Vote111111111111111111111111111111111111111"
              ],
              "header": {
                "numReadonlySignedAccounts": 0,
                "numReadonlyUnsignedAccounts": 3,
                "numRequiredSignatures": 1
              },
              "instructions": [
                {
                  "accounts": [1, 2, 3, 0],
                  "data": "37u9WtQpcm6ULa3WRQHmj49EPs4if7o9f1jSRVZpm2dvihR9C8jY4NqEwXUbLwx15HBSNcP1",
                  "programIdIndex": 4
                }
              ],
              "recentBlockhash": "mfcyqEXB3DnHXki6KjjmZck6YjmZLvpAByy2fj4nh6B"
            },
            "signatures": [
              "2nBhEBYYvfaAe16UMNqRHre4YNSskvuYgx3M6E4JP1oDYvZEJHvoPzyUidNgNX5r9sTyN1J9UxtbCXy2rqYcuyuv"
            ]
          }
        },
        "blockTime": null,
        "id": 1
      }`
  const codeString105 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
      {
        "jsonrpc": "2.0",
        "id": 1,
        "method": "getTransaction",
        "params": [
          "2nBhEBYYvfaAe16UMNqRHre4YNSskvuYgx3M6E4JP1oDYvZEJHvoPzyUidNgNX5r9sTyN1J9UxtbCXy2rqYcuyuv",
          "base64"
        ]
      }
    '`
  const codeString106 = `{
        "jsonrpc": "2.0",
        "result": {
          "meta": {
            "err": null,
            "fee": 5000,
            "innerInstructions": [],
            "postBalances": [499998932500, 26858640, 1, 1, 1],
            "postTokenBalances": [],
            "preBalances": [499998937500, 26858640, 1, 1, 1],
            "preTokenBalances": [],
            "status": {
              "Ok": null
            }
          },
          "slot": 430,
          "transaction": [
            "AVj7dxHlQ9IrvdYVIjuiRFs1jLaDMHixgrv+qtHBwz51L4/ImLZhszwiyEJDIp7xeBSpm/TX5B7mYzxa+fPOMw0BAAMFJMJVqLw+hJYheizSoYlLm53KzgT82cDVmazarqQKG2GQsLgiqktA+a+FDR4/7xnDX7rsusMwryYVUdixfz1B1Qan1RcZLwqvxvJl4/t3zHragsUp0L47E24tAFUgAAAABqfVFxjHdMkoVmOYaR1etoteuKObS21cc1VbIQAAAAAHYUgdNXR0u3xNdiTr072z2DVec9EQQ/wNo1OAAAAAAAtxOUhPBp2WSjUNJEgfvy70BbxI00fZyEPvFHNfxrtEAQQEAQIDADUCAAAAAQAAAAAAAACtAQAAAAAAAAdUE18R96XTJCe+YfRfUp6WP+YKCy/72ucOL8AoBFSpAA==",
            "base64"
          ]
        },
        "id": 1
      }`
  const codeString107 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
      {"jsonrpc":"2.0","id":1, "method":"getTransactionCount"}
    '
    `
  const codeString108 = `{ "jsonrpc": "2.0", "result": 268, "id": 1 }`
  const codeString109 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
      {"jsonrpc":"2.0","id":1, "method":"getVersion"}
    '
    `
  const codeString110 = `{ "jsonrpc": "2.0", "result": { "En Comt-core": "1.10.31" }, "id": 1 }`
  const codeString111 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
      {"jsonrpc":"2.0","id":1, "method":"getVoteAccounts"}
    '
    `
  const codeString112 = `{
        "jsonrpc": "2.0",
        "result": {
          "current": [
            {
              "commission": 0,
              "epochVoteAccount": true,
              "epochCredits": [
                [1, 64, 0],
                [2, 192, 64]
              ],
              "nodePubkey": "B97CCUW3AEZFGy6uUg6zUdnNYvnVq5VG8PUtb2HayTDD",
              "lastVote": 147,
              "activatedStake": 42,
              "votePubkey": "3ZT31jkAGhUaw8jsy4bTknwBMP8i4Eueh52By4zXcsVw"
            }
          ],
          "delinquent": [
            {
              "commission": 127,
              "epochVoteAccount": false,
              "epochCredits": [],
              "nodePubkey": "6ZPxeQaDo4bkZLRsdNrCzchNQr5LN9QMc9sipXv9Kw8f",
              "lastVote": 0,
              "activatedStake": 0,
              "votePubkey": "CmgCk4aMS7KW1SHX3s9K5tBJ6Yng2LBaC8MFov4wx9sm"
            }
          ]
        },
        "id": 1
      }`
  const codeString113 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
      {
        "jsonrpc": "2.0",
        "id": 1,
        "method": "getVoteAccounts",
        "params": [
          {
            "votePubkey": "3ZT31jkAGhUaw8jsy4bTknwBMP8i4Eueh52By4zXcsVw"
          }
        ]
      }
    '
    `
  const codeString114 = `{
        "jsonrpc": "2.0",
        "result": {
          "current": [
            {
              "commission": 0,
              "epochVoteAccount": true,
              "epochCredits": [
                [1, 64, 0],
                [2, 192, 64]
              ],
              "nodePubkey": "B97CCUW3AEZFGy6uUg6zUdnNYvnVq5VG8PUtb2HayTDD",
              "lastVote": 147,
              "activatedStake": 42,
              "votePubkey": "3ZT31jkAGhUaw8jsy4bTknwBMP8i4Eueh52By4zXcsVw"
            }
          ],
          "delinquent": []
        },
        "id": 1
      }`
  const codeString115 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
      {
        "id":45,
        "jsonrpc":"2.0",
        "method":"isBlockhashValid",
        "params":[
          "J7rBdM6AecPDEZp8aPq5iPSNKVkU5Q76F3oAV4eW5wsW",
          {"commitment":"processed"}
        ]
      }
    '
    `
  const codeString116 = `{
        "jsonrpc": "2.0",
        "result": {
          "context": {
            "slot": 2483
          },
          "value": false
        },
        "id": 1
      }`
  const codeString117 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
      {"jsonrpc":"2.0","id":1, "method":"minimumLedgerSlot"}
    '
    
    `
  const codeString118 = `{ "jsonrpc": "2.0", "result": 1234, "id": 1 }`
  const codeString119 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
      {"jsonrpc":"2.0","id":1, "method":"requestAirdrop", "params":["83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri", 1000000000]}
    ' `
  const codeString120 = `{
        "jsonrpc": "2.0",
        "result": "5VERv8NMvzbJMEkV8xnrLkEaWRtSz9CosKDYjCJjBRnbJLgp8uirBgmQpjKhoR4tjF3ZpRzrFmBV6UjKdiSZkQUW",
        "id": 1
      }`
  const codeString121 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
      {
        "jsonrpc": "2.0",
        "id": 1,
        "method": "sendTransaction",
        "params": [
          "4hXTCkRzt9WyecNzV1XPgCDfGAZzQKNxLXgynz5QDuWWPSAZBZSHptvWRL3BjCvzUXRdKvHL2b7yGrRQcWyaqsaBCncVG7BFggS8w9snUts67BSh3EqKpXLUm5UMHfD7ZBe9GhARjbNQMLJ1QD3Spr6oMTBU6EhdB4RD8CP2xUxr2u3d6fos36PD98XS6oX8TQjLpsMwncs5DAMiD4nNnR8NBfyghGCWvCVifVwvA8B8TJxE1aiyiv2L429BCWfyzAme5sZW8rDb14NeCQHhZbtNqfXhcp2tAnaAT"
        ]
      }
    '
     `
  const codeString122 = `{
        "jsonrpc": "2.0",
        "result": "2id3YC2jK9G5Wo2phDx4gJVAew8DcY5NAojnVuao8rkxwPYPe8cSwE5GzhEgJA2y8fVjDEo6iR6ykBvDxrTQrtpb",
        "id": 1
      }`
  const codeString123 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
      {
        "jsonrpc": "2.0",
        "id": 1,
        "method": "simulateTransaction",
        "params": [
          "4hXTCkRzt9WyecNzV1XPgCDfGAZzQKNxLXgynz5QDuWWPSAZBZSHptvWRL3BjCvzUXRdKvHL2b7yGrRQcWyaqsaBCncVG7BFggS8w9snUts67BSh3EqKpXLUm5UMHfD7ZBe9GhARjbNQMLJ1QD3Spr6oMTBU6EhdB4RD8CP2xUxr2u3d6fos36PD98XS6oX8TQjLpsMwncs5DAMiD4nNnR8NBfyghGCWvCVifVwvA8B8TJxE1aiyiv2L429BCWfyzAme5sZW8rDb14NeCQHhZbtNqfXhcp2tAnaAT"
        ]
      }
    '
     `
  const codeString124 = `{
      "jsonrpc": "2.0",
      "result": {
        "context": {
          "slot": 218
        },
        "value": {
          "err": null,
          "accounts": null,
          "logs": [
            "BPF program 83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri success"
          ]
        }
      },
      "id": 1
    }`
  const codeString125 = `{
      "jsonrpc": "2.0",
      "id": 1,
      "method": "accountSubscribe",
      "params": [
        "CM78CPUeXjn8o3yroDHxUtKsZZgoy4GPkPPXfouKNH12",
        {
          "encoding": "base64",
          "commitment": "finalized"
        }
      ]
    }
    {
      "jsonrpc": "2.0",
      "id": 1,
      "method": "accountSubscribe",
      "params": [
        "CM78CPUeXjn8o3yroDHxUtKsZZgoy4GPkPPXfouKNH12",
        {
          "encoding": "jsonParsed"
        }
      ]
    }
   `
  const codeString126 = `{ "jsonrpc": "2.0", "result": 23784, "id": 1 }`
  const codeString127 = `{
    "jsonrpc": "2.0",
    "method": "accountNotification",
    "params": {
      "result": {
        "context": {
          "slot": 5199307
        },
        "value": {
          "data": [
            "11116bv5nS2h3y12kD1yUKeMZvGcKLSjQgX6BeV7u1FrjeJcKfsHPXHRDEHrBesJhZyqnnq9qJeUuF7WHxiuLuL5twc38w2TXNLxnDbjmuR",
            "base58"
          ],
          "executable": false,
          "lamports": 33594,
          "owner": "11111111111111111111111111111111",
          "rentEpoch": 635
        }
      },
      "subscription": 23784
    }
  }
  `
  const codeString128 = `{
    "jsonrpc": "2.0",
    "method": "accountNotification",
    "params": {
      "result": {
        "context": {
          "slot": 5199307
        },
        "value": {
          "data": {
            "program": "nonce",
            "parsed": {
              "type": "initialized",
              "info": {
                "authority": "Bbqg1M4YVVfbhEzwA9SpC9FhsaG83YMTYoR4a8oTDLX",
                "blockhash": "LUaQTmM7WbMRiATdMMHaRGakPtCkc2GHtH57STKXs6k",
                "feeCalculator": {
                  "lamportsPerSignature": 5000
                }
              }
            }
          },
          "executable": false,
          "lamports": 33594,
          "owner": "11111111111111111111111111111111",
          "rentEpoch": 635
        }
      },
      "subscription": 23784
    }
  }`
  const codeString129 = `{ "jsonrpc": "2.0", "id": 1, "method": "accountUnsubscribe", "params": [0] }
  `
  const codeString130 = `{ "jsonrpc": "2.0", "result": true, "id": 1 }`

  const codeString131 = `{ "jsonrpc": "2.0", "id": "1", "method": "blockSubscribe", "params": ["all"] }`
  const codeString132 = `{
    "jsonrpc": "2.0",
    "id": "1",
    "method": "blockSubscribe",
    "params": [
      {
        "mentionsAccountOrProgram": "LieKvPRE8XeX3Y2xVNHjKlpAScD12lYySBVQ4HqoJ5op"
      },
      {
        "commitment": "confirmed",
        "encoding": "base64",
        "showRewards": true,
        "transactionDetails": "full"
      }
    ]
  }
  `
  const codeString133 = `{ "jsonrpc": "2.0", "result": 0, "id": 1 }`
  const codeString134 = `{
    "jsonrpc": "2.0",
    "method": "blockNotification",
    "params": {
      "result": {
        "context": {
          "slot": 112301554
        },
        "value": {
          "slot": 112301554,
          "block": {
            "previousBlockhash": "GJp125YAN4ufCSUvZJVdCyWQJ7RPWMmwxoyUQySydZA",
            "blockhash": "6ojMHjctdqfB55JDpEpqfHnP96fiaHEcvzEQ2NNcxzHP",
            "parentSlot": 112301553,
            "transactions": [
              {
                "transaction": [
                  "OpltwoUvWxYi1P2U8vbIdE/aPntjYo5Aa0VQ2JJyeJE2g9Vvxk8dDGgFMruYfDu8/IfUWb0REppTe7IpAuuLRgIBAAkWnj4KHRpEWWW7gvO1c0BHy06wZi2g7/DLqpEtkRsThAXIdBbhXCLvltw50ZnjDx2hzw74NVn49kmpYj2VZHQJoeJoYJqaKcvuxCi/2i4yywedcVNDWkM84Iuw+cEn9/ROCrXY4qBFI9dveEERQ1c4kdU46xjxj9Vi+QXkb2Kx45QFVkG4Y7HHsoS6WNUiw2m4ffnMNnOVdF9tJht7oeuEfDMuUEaO7l9JeUxppCvrGk3CP45saO51gkwVYEgKzhpKjCx3rgsYxNR81fY4hnUQXSbbc2Y55FkwgRBpVvQK7/+clR4Gjhd3L4y+OtPl7QF93Akg1LaU9wRMs5nvfDFlggqI9PqJl+IvVWrNRdBbPS8LIIhcwbRTkSbqlJQWxYg3Bo2CTVbw7rt1ZubuHWWp0mD/UJpLXGm2JprWTePNULzHu67sfqaWF99LwmwjTyYEkqkRt1T0Je5VzHgJs0N5jY4iIU9K3lMqvrKOIn/2zEMZ+ol2gdgjshx+sphIyhw65F3J/Dbzk04LLkK+CULmN571Y+hFlXF2ke0BIuUG6AUF+4214Cu7FXnqo3rkxEHDZAk0lRrAJ8X/Z+iwuwI5cgbd9uHXZaGT2cvhRs7reawctIXtX1s3kTqM9YV+/wCpDLAp8axcEkaQkLDKRoWxqp8XLNZSKial7Rk+ELAVVKWoWLRXRZ+OIggu0OzMExvVLE5VHqy71FNHq4gGitkiKYNFWSLIE4qGfdFLZXy/6hwS+wq9ewjikCpd//C9BcCL7Wl0iQdUslxNVCBZHnCoPYih9JXvGefOb9WWnjGy14sG9j70+RSVx6BlkFELWwFvIlWR/tHn3EhHAuL0inS2pwX7ZQTAU6gDVaoqbR2EiJ47cKoPycBNvHLoKxoY9AZaBjPl6q8SKQJSFyFd9n44opAgI6zMTjYF/8Ok4VpXEESp3QaoUyTI9sOJ6oFP6f4dwnvQelgXS+AEfAsHsKXxGAIUDQENAgMEBQAGBwgIDg8IBJCER3QXl1AVDBADCQoOAAQLERITDAjb7ugh3gOuTy==",
                  "base64"
                ],
                "meta": {
                  "err": null,
                  "status": {
                    "Ok": null
                  },
                  "fee": 5000,
                  "preBalances": [
                    1758510880, 2067120, 1566000, 1461600, 2039280, 2039280,
                    1900080, 1865280, 0, 3680844220, 2039280
                  ],
                  "postBalances": [
                    1758505880, 2067120, 1566000, 1461600, 2039280, 2039280,
                    1900080, 1865280, 0, 3680844220, 2039280
                  ],
                  "innerInstructions": [
                    {
                      "index": 0,
                      "instructions": [
                        {
                          "programIdIndex": 13,
                          "accounts": [1, 15, 3, 4, 2, 14],
                          "data": "21TeLgZXNbtHXVBzCaiRmH"
                        },
                        {
                          "programIdIndex": 14,
                          "accounts": [3, 4, 1],
                          "data": "6qfC8ic7Aq99"
                        },
                        {
                          "programIdIndex": 13,
                          "accounts": [1, 15, 3, 5, 2, 14],
                          "data": "21TeLgZXNbsn4QEpaSEr3q"
                        },
                        {
                          "programIdIndex": 14,
                          "accounts": [3, 5, 1],
                          "data": "6LC7BYyxhFRh"
                        }
                      ]
                    },
                    {
                      "index": 1,
                      "instructions": [
                        {
                          "programIdIndex": 14,
                          "accounts": [4, 3, 0],
                          "data": "7aUiLHFjSVdZ"
                        },
                        {
                          "programIdIndex": 19,
                          "accounts": [17, 18, 16, 9, 11, 12, 14],
                          "data": "8kvZyjATKQWYxaKR1qD53V"
                        },
                        {
                          "programIdIndex": 14,
                          "accounts": [9, 11, 18],
                          "data": "6qfC8ic7Aq99"
                        }
                      ]
                    }
                  ],
                  "logMessages": [
                    "Program QMNeHCGYnLVDn1icRAfQZpjPLBNkfGbSKRB83G5d8KB invoke [1]",
                    "Program QMWoBmAyJLAsA1Lh9ugMTw2gciTihncciphzdNzdZYV invoke [2]"
                  ],
                  "preTokenBalances": [
                    {
                      "accountIndex": 4,
                      "mint": "iouQcQBAiEXe6cKLS85zmZxUqaCqBdeHFpqKoSz615u",
                      "uiTokenAmount": {
                        "uiAmount": null,
                        "decimals": 6,
                        "amount": "0",
                        "uiAmountString": "0"
                      },
                      "owner": "LieKvPRE8XeX3Y2xVNHjKlpAScD12lYySBVQ4HqoJ5op",
                      "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                    },
                    {
                      "accountIndex": 5,
                      "mint": "iouQcQBAiEXe6cKLS85zmZxUqaCqBdeHFpqKoSz615u",
                      "uiTokenAmount": {
                        "uiAmount": 11513.0679,
                        "decimals": 6,
                        "amount": "11513067900",
                        "uiAmountString": "11513.0679"
                      },
                      "owner": "rXhAofQCT7NN9TUqigyEAUzV1uLL4boeD8CRkNBSkYk",
                      "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                    },
                    {
                      "accountIndex": 10,
                      "mint": "Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1",
                      "uiTokenAmount": {
                        "uiAmount": null,
                        "decimals": 6,
                        "amount": "0",
                        "uiAmountString": "0"
                      },
                      "owner": "CL9wkGFT3SZRRNa9dgaovuRV7jrVVigBUZ6DjcgySsCU",
                      "programId": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
                    },
                    {
                      "accountIndex": 11,
                      "mint": "Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1",
                      "uiTokenAmount": {
                        "uiAmount": 15138.514093,
                        "decimals": 6,
                        "amount": "15138514093",
                        "uiAmountString": "15138.514093"
                      },
                      "owner": "LieKvPRE8XeX3Y2xVNHjKlpAScD12lYySBVQ4HqoJ5op",
                      "programId": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
                    }
                  ],
                  "postTokenBalances": [
                    {
                      "accountIndex": 4,
                      "mint": "iouQcQBAiEXe6cKLS85zmZxUqaCqBdeHFpqKoSz615u",
                      "uiTokenAmount": {
                        "uiAmount": null,
                        "decimals": 6,
                        "amount": "0",
                        "uiAmountString": "0"
                      },
                      "owner": "LieKvPRE8XeX3Y2xVNHjKlpAScD12lYySBVQ4HqoJ5op",
                      "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                    },
                    {
                      "accountIndex": 5,
                      "mint": "iouQcQBAiEXe6cKLS85zmZxUqaCqBdeHFpqKoSz615u",
                      "uiTokenAmount": {
                        "uiAmount": 11513.103028,
                        "decimals": 6,
                        "amount": "11513103028",
                        "uiAmountString": "11513.103028"
                      },
                      "owner": "rXhAofQCT7NN9TUqigyEAUzV1uLL4boeD8CRkNBSkYk",
                      "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                    },
                    {
                      "accountIndex": 10,
                      "mint": "Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1",
                      "uiTokenAmount": {
                        "uiAmount": null,
                        "decimals": 6,
                        "amount": "0",
                        "uiAmountString": "0"
                      },
                      "owner": "CL9wkGFT3SZRRNa9dgaovuRV7jrVVigBUZ6DjcgySsCU",
                      "programId": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
                    },
                    {
                      "accountIndex": 11,
                      "mint": "Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1",
                      "uiTokenAmount": {
                        "uiAmount": 15489.767829,
                        "decimals": 6,
                        "amount": "15489767829",
                        "uiAmountString": "15489.767829"
                      },
                      "owner": "BeiHVPRE8XeX3Y2xVNrSsTpAScH94nYySBVQ4HqgN9at",
                      "programId": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
                    }
                  ],
                  "rewards": []
                }
              }
            ],
            "blockTime": 1639926816,
            "blockHeight": 101210751
          },
          "err": null
        }
      },
      "subscription": 14
    }
  }`
  const codeString135 = `{ "jsonrpc": "2.0", "id": 1, "method": "blockUnsubscribe", "params": [0] }`
  const codeString136 = `{ "jsonrpc": "2.0", "result": true, "id": 1 }`
  const codeString137 = `{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "logsSubscribe",
    "params": [
      {
        "mentions": [ "11111111111111111111111111111111" ]
      },
      {
        "commitment": "finalized"
      }
    ]
  }
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "logsSubscribe",
    "params": [ "all" ]
  }`
  const codeString138 = `{ "jsonrpc": "2.0", "result": 24040, "id": 1 }`
  const codeString139 = `{
    "jsonrpc": "2.0",
    "method": "logsNotification",
    "params": {
      "result": {
        "context": {
          "slot": 5208469
        },
        "value": {
          "signature": "5h6xBEauJ3PK6SWCZ1PGjBvj8vDdWG3KpwATGy1ARAXFSDwt8GFXM7W5Ncn16wmqokgpiKRLuS83KUxyZyv2sUYv",
          "err": null,
          "logs": [
            "BPF program 83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri success"
          ]
        }
      },
      "subscription": 24040
    }
  }`
  const codeString140 = `{ "jsonrpc": "2.0", "id": 1, "method": "logsUnsubscribe", "params": [0] }`
  const codeString141 = `{ "jsonrpc": "2.0", "result": true, "id": 1 }`
  const codeString142 = `{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "programSubscribe",
    "params": [
      "11111111111111111111111111111111",
      {
        "encoding": "base64",
        "commitment": "finalized"
      }
    ]
  }
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "programSubscribe",
    "params": [
      "11111111111111111111111111111111",
      {
        "encoding": "jsonParsed"
      }
    ]
  }
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "programSubscribe",
    "params": [
      "11111111111111111111111111111111",
      {
        "encoding": "base64",
        "filters": [
          {
            "dataSize": 80
          }
        ]
      }
    ]
  }`
  const codeString143 = `{ "jsonrpc": "2.0", "result": 24040, "id": 1 }`
  const codeString144 = `{
    "jsonrpc": "2.0",
    "method": "programNotification",
    "params": {
      "result": {
        "context": {
          "slot": 5208469
        },
        "value": {
          "pubkey": "H4vnBqifaSACnKa7acsxstsY1iV1bvJNxsCY7enrd1hq",
          "account": {
            "data": [
              "11116bv5nS2h3y12kD1yUKeMZvGcKLSjQgX6BeV7u1FrjeJcKfsHPXHRDEHrBesJhZyqnnq9qJeUuF7WHxiuLuL5twc38w2TXNLxnDbjmuR",
              "base58"
            ],
            "executable": false,
            "lamports": 33594,
            "owner": "11111111111111111111111111111111",
            "rentEpoch": 636
          }
        }
      },
      "subscription": 24040
    }
  }`
  const codeString145 = `{
    "jsonrpc": "2.0",
    "method": "programNotification",
    "params": {
      "result": {
        "context": {
          "slot": 5208469
        },
        "value": {
          "pubkey": "H4vnBqifaSACnKa7acsxstsY1iV1bvJNxsCY7enrd1hq",
          "account": {
            "data": {
              "program": "nonce",
              "parsed": {
                "type": "initialized",
                "info": {
                  "authority": "Bbqg1M4YVVfbhEzwA9SpC9FhsaG83YMTYoR4a8oTDLX",
                  "blockhash": "LUaQTmM7WbMRiATdMMHaRGakPtCkc2GHtH57STKXs6k",
                  "feeCalculator": {
                    "lamportsPerSignature": 5000
                  }
                }
              }
            },
            "executable": false,
            "lamports": 33594,
            "owner": "11111111111111111111111111111111",
            "rentEpoch": 636
          }
        }
      },
      "subscription": 24040
    }
  }`
  const codeString146 = `{ "jsonrpc": "2.0", "id": 1, "method": "programUnsubscribe", "params": [0] }`
  const codeString147 = `{ "jsonrpc": "2.0", "result": true, "id": 1 }`
  const codeString148 = `{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "signatureSubscribe",
    "params": [
      "2EBVM6cB8vAAD93Ktr6Vd8p67XPbQzCJX47MpReuiCXJAtcjaxpvWpcg9Ege1Nr5Tk3a2GFrByT7WPBjdsTycY9b"
    ]
  }
  
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "signatureSubscribe",
    "params": [
      "2EBVM6cB8vAAD93Ktr6Vd8p67XPbQzCJX47MpReuiCXJAtcjaxpvWpcg9Ege1Nr5Tk3a2GFrByT7WPBjdsTycY9b",
      {
        "commitment": "finalized"
      }
    ]
  }`
  const codeString149 = `{ "jsonrpc": "2.0", "result": 0, "id": 1 }`
  const codeString150 = `{
    "jsonrpc": "2.0",
    "method": "signatureNotification",
    "params": {
      "result": {
        "context": {
          "slot": 5207624
        },
        "value": {
          "err": null
        }
      },
      "subscription": 24006
    }
  }`
  const codeString151 = `{ "jsonrpc": "2.0", "id": 1, "method": "signatureUnsubscribe", "params": [0] }`
  const codeString152 = `{ "jsonrpc": "2.0", "result": true, "id": 1 }`
  const codeString153 = `{ "jsonrpc": "2.0", "id": 1, "method": "slotSubscribe" }`
  const codeString154 = `{ "jsonrpc": "2.0", "result": 0, "id": 1 }`
  const codeString155 = `{
    "jsonrpc": "2.0",
    "method": "slotNotification",
    "params": {
      "result": {
        "parent": 75,
        "root": 44,
        "slot": 76
      },
      "subscription": 0
    }
  }`
  const codeString156 = `{ "jsonrpc": "2.0", "id": 1, "method": "slotUnsubscribe", "params": [0] }`
  const codeString157 = `{ "jsonrpc": "2.0", "result": true, "id": 1 }`
  const codeString158 = `{ "jsonrpc": "2.0", "id": 1, "method": "slotsUpdatesSubscribe" }`
  const codeString159 = `{ "jsonrpc": "2.0", "result": 0, "id": 1 }`
  const codeString160 = `{
    "jsonrpc": "2.0",
    "method": "slotsUpdatesNotification",
    "params": {
      "result": {
        "parent": 75,
        "slot": 76,
        "timestamp": 1625081266243,
        "type": "optimisticConfirmation"
      },
      "subscription": 0
    }
  }`
  const codeString161 = `{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "slotsUpdatesUnsubscribe",
    "params": [0]
  }`
  const codeString162 = `{ "jsonrpc": "2.0", "result": true, "id": 1 }`
  const codeString163 = `{ "jsonrpc": "2.0", "id": 1, "method": "rootSubscribe" }`
  const codeString164 = `{ "jsonrpc": "2.0", "result": 0, "id": 1 }`
  const codeString165 = `{
    "jsonrpc": "2.0",
    "method": "rootNotification",
    "params": {
      "result": 42,
      "subscription": 0
    }
  }`
  const codeString166 = `{ "jsonrpc": "2.0", "id": 1, "method": "rootUnsubscribe", "params": [0] }`
  const codeString167 = `{ "jsonrpc": "2.0", "result": true, "id": 1 }`
  const codeString168 = `{ "jsonrpc": "2.0", "id": 1, "method": "voteSubscribe" }`
  const codeString169 = `{ "jsonrpc": "2.0", "result": 0, "id": 1 }`
  const codeString170 = `{
    "jsonrpc": "2.0",
    "method": "voteNotification",
    "params": {
      "result": {
        "hash": "8Rshv2oMkPu5E4opXTRyuyBeZBqQ4S477VG26wUTFxUM",
        "slots": [1, 2],
        "timestamp": null
      },
      "subscription": 0
    }
  }`
  const codeString171 = `{ "jsonrpc": "2.0", "id": 1, "method": "voteUnsubscribe", "params": [0] }`
  const codeString172 = `{ "jsonrpc": "2.0", "result": true, "id": 1 }`
  const codeString173 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
    {"jsonrpc": "2.0","id":1,"method":"getConfirmedBlock","params":[430, {"encoding": "json","transactionDetails":"full","rewards":false}]}
  '`
  const codeString174 = `{
      "jsonrpc": "2.0",
      "result": {
        "blockTime": null,
        "blockhash": "3Eq21vXNB5s86c62bVuUfTeaMif1N2kUqRPBmGRJhyTA",
        "parentSlot": 429,
        "previousBlockhash": "mfcyqEXB3DnHXki6KjjmZck6YjmZLvpAByy2fj4nh6B",
        "transactions": [
          {
            "meta": {
              "err": null,
              "fee": 5000,
              "innerInstructions": [],
              "logMessages": [],
              "postBalances": [499998932500, 26858640, 1, 1, 1],
              "postTokenBalances": [],
              "preBalances": [499998937500, 26858640, 1, 1, 1],
              "preTokenBalances": [],
              "status": {
                "Ok": null
              }
            },
            "transaction": {
              "message": {
                "accountKeys": [
                  "3UVYmECPPMZSCqWKfENfuoTv51fTDTWicX9xmBD2euKe",
                  "AjozzgE83A3x1sHNUR64hfH7zaEBWeMaFuAN9kQgujrc",
                  "SysvarS1otHashes111111111111111111111111111",
                  "SysvarC1ock11111111111111111111111111111111",
                  "Vote111111111111111111111111111111111111111"
                ],
                "header": {
                  "numReadonlySignedAccounts": 0,
                  "numReadonlyUnsignedAccounts": 3,
                  "numRequiredSignatures": 1
                },
                "instructions": [
                  {
                    "accounts": [1, 2, 3, 0],
                    "data": "37u9WtQpcm6ULa3WRQHmj49EPs4if7o9f1jSRVZpm2dvihR9C8jY4NqEwXUbLwx15HBSNcP1",
                    "programIdIndex": 4
                  }
                ],
                "recentBlockhash": "mfcyqEXB3DnHXki6KjjmZck6YjmZLvpAByy2fj4nh6B"
              },
              "signatures": [
                "2nBhEBYYvfaAe16UMNqRHre4YNSskvuYgx3M6E4JP1oDYvZEJHvoPzyUidNgNX5r9sTyN1J9UxtbCXy2rqYcuyuv"
              ]
            }
          }
        ]
      },
      "id": 1
    }`
  const codeString175 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
    {"jsonrpc": "2.0","id":1,"method":"getConfirmedBlock","params":[430, "base64"]}
  '`
  const codeString176 = `{
      "jsonrpc": "2.0",
      "result": {
        "blockTime": null,
        "blockhash": "3Eq21vXNB5s86c62bVuUfTeaMif1N2kUqRPBmGRJhyTA",
        "parentSlot": 429,
        "previousBlockhash": "mfcyqEXB3DnHXki6KjjmZck6YjmZLvpAByy2fj4nh6B",
        "rewards": [],
        "transactions": [
          {
            "meta": {
              "err": null,
              "fee": 5000,
              "innerInstructions": [],
              "logMessages": [],
              "postBalances": [499998932500, 26858640, 1, 1, 1],
              "postTokenBalances": [],
              "preBalances": [499998937500, 26858640, 1, 1, 1],
              "preTokenBalances": [],
              "status": {
                "Ok": null
              }
            },
            "transaction": [
              "AVj7dxHlQ9IrvdYVIjuiRFs1jLaDMHixgrv+qtHBwz51L4/ImLZhszwiyEJDIp7xeBSpm/TX5B7mYzxa+fPOMw0BAAMFJMJVqLw+hJYheizSoYlLm53KzgT82cDVmazarqQKG2GQsLgiqktA+a+FDR4/7xnDX7rsusMwryYVUdixfz1B1Qan1RcZLwqvxvJl4/t3zHragsUp0L47E24tAFUgAAAABqfVFxjHdMkoVmOYaR1etoteuKObS21cc1VbIQAAAAAHYUgdNXR0u3xNdiTr072z2DVec9EQQ/wNo1OAAAAAAAtxOUhPBp2WSjUNJEgfvy70BbxI00fZyEPvFHNfxrtEAQQEAQIDADUCAAAAAQAAAAAAAACtAQAAAAAAAAdUE18R96XTJCe+YfRfUp6WP+YKCy/72ucOL8AoBFSpAA==",
              "base64"
            ]
          }
        ]
      },
      "id": 1
    }`
  const codeString177 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
    {"jsonrpc": "2.0","id":1,"method":"getConfirmedBlocks","params":[5, 10]}
  '`
  const codeString178 = `{ "jsonrpc": "2.0", "result": [5, 6, 7, 8, 9, 10], "id": 1 }`
  const codeString179 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
    {"jsonrpc": "2.0","id":1,"method":"getConfirmedBlocksWithLimit","params":[5, 3]}
  '`
  const codeString180 = `{ "jsonrpc": "2.0", "result": [5, 6, 7], "id": 1 }`
  const codeString181 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
    {
      "jsonrpc": "2.0",
      "id": 1,
      "method": "getConfirmedSignaturesForAddress2",
      "params": [
        "Vote111111111111111111111111111111111111111",
        {
          "limit": 1
        }
      ]
    }
  '`
  const codeString182 = `{
      "jsonrpc": "2.0",
      "result": [
        {
          "err": null,
          "memo": null,
          "signature": "5h6xBEauJ3PK6SWCZ1PGjBvj8vDdWG3KpwATGy1ARAXFSDwt8GFXM7W5Ncn16wmqokgpiKRLuS83KUxyZyv2sUYv",
          "slot": 114,
          "blockTime": null
        }
      ],
      "id": 1
    }`
  const codeString183 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
    {
      "jsonrpc": "2.0",
      "id": 1,
      "method": "getConfirmedTransaction",
      "params": [
        "2nBhEBYYvfaAe16UMNqRHre4YNSskvuYgx3M6E4JP1oDYvZEJHvoPzyUidNgNX5r9sTyN1J9UxtbCXy2rqYcuyuv",
        "json"
      ]
    }
  '`
  const codeString184 = `{
      "jsonrpc": "2.0",
      "result": {
        "meta": {
          "err": null,
          "fee": 5000,
          "innerInstructions": [],
          "postBalances": [499998932500, 26858640, 1, 1, 1],
          "postTokenBalances": [],
          "preBalances": [499998937500, 26858640, 1, 1, 1],
          "preTokenBalances": [],
          "status": {
            "Ok": null
          }
        },
        "slot": 430,
        "transaction": {
          "message": {
            "accountKeys": [
              "3UVYmECPPMZSCqWKfENfuoTv51fTDTWicX9xmBD2euKe",
              "AjozzgE83A3x1sHNUR64hfH7zaEBWeMaFuAN9kQgujrc",
              "SysvarS1otHashes111111111111111111111111111",
              "SysvarC1ock11111111111111111111111111111111",
              "Vote111111111111111111111111111111111111111"
            ],
            "header": {
              "numReadonlySignedAccounts": 0,
              "numReadonlyUnsignedAccounts": 3,
              "numRequiredSignatures": 1
            },
            "instructions": [
              {
                "accounts": [1, 2, 3, 0],
                "data": "37u9WtQpcm6ULa3WRQHmj49EPs4if7o9f1jSRVZpm2dvihR9C8jY4NqEwXUbLwx15HBSNcP1",
                "programIdIndex": 4
              }
            ],
            "recentBlockhash": "mfcyqEXB3DnHXki6KjjmZck6YjmZLvpAByy2fj4nh6B"
          },
          "signatures": [
            "2nBhEBYYvfaAe16UMNqRHre4YNSskvuYgx3M6E4JP1oDYvZEJHvoPzyUidNgNX5r9sTyN1J9UxtbCXy2rqYcuyuv"
          ]
        }
      },
      "blockTime": null,
      "id": 1
    }`
  const codeString185 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
    {
      "jsonrpc": "2.0",
      "id": 1,
      "method": "getConfirmedTransaction",
      "params": [
        "2nBhEBYYvfaAe16UMNqRHre4YNSskvuYgx3M6E4JP1oDYvZEJHvoPzyUidNgNX5r9sTyN1J9UxtbCXy2rqYcuyuv",
        "base64"
      ]
    }
  '`
  const codeString186 = `{
      "jsonrpc": "2.0",
      "result": {
        "meta": {
          "err": null,
          "fee": 5000,
          "innerInstructions": [],
          "postBalances": [499998932500, 26858640, 1, 1, 1],
          "postTokenBalances": [],
          "preBalances": [499998937500, 26858640, 1, 1, 1],
          "preTokenBalances": [],
          "status": {
            "Ok": null
          }
        },
        "slot": 430,
        "transaction": [
          "AVj7dxHlQ9IrvdYVIjuiRFs1jLaDMHixgrv+qtHBwz51L4/ImLZhszwiyEJDIp7xeBSpm/TX5B7mYzxa+fPOMw0BAAMFJMJVqLw+hJYheizSoYlLm53KzgT82cDVmazarqQKG2GQsLgiqktA+a+FDR4/7xnDX7rsusMwryYVUdixfz1B1Qan1RcZLwqvxvJl4/t3zHragsUp0L47E24tAFUgAAAABqfVFxjHdMkoVmOYaR1etoteuKObS21cc1VbIQAAAAAHYUgdNXR0u3xNdiTr072z2DVec9EQQ/wNo1OAAAAAAAtxOUhPBp2WSjUNJEgfvy70BbxI00fZyEPvFHNfxrtEAQQEAQIDADUCAAAAAQAAAAAAAACtAQAAAAAAAAdUE18R96XTJCe+YfRfUp6WP+YKCy/72ucOL8AoBFSpAA==",
          "base64"
        ]
      },
      "id": 1
    }`
  const codeString187 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
    {
      "jsonrpc": "2.0",
      "id": 1,
      "method": "getFeeCalculatorForBlockhash",
      "params": [
        "GJxqhuxcgfn5Tcj6y3f8X4FeCDd2RQ6SnEMo1AAxrPRZ"
      ]
    }
  '`
  const codeString188 = `{
      "jsonrpc": "2.0",
      "result": {
        "context": {
          "slot": 221
        },
        "value": {
          "feeCalculator": {
            "lamportsPerSignature": 5000
          }
        }
      },
      "id": 1
    }`
  const codeString189 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
    {"jsonrpc":"2.0","id":1, "method":"getFeeRateGovernor"}
  '`
  const codeString190 = `{
      "jsonrpc": "2.0",
      "result": {
        "context": {
          "slot": 54
        },
        "value": {
          "feeRateGovernor": {
            "burnPercent": 50,
            "maxLamportsPerSignature": 100000,
            "minLamportsPerSignature": 5000,
            "targetLamportsPerSignature": 10000,
            "targetSignaturesPerSlot": 20000
          }
        }
      },
      "id": 1
    }`
  const codeString191 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
    {"jsonrpc":"2.0","id":1, "method":"getFees"}
  '`
  const codeString192 = `{
      "jsonrpc": "2.0",
      "result": {
        "context": {
          "slot": 1
        },
        "value": {
          "blockhash": "CSymwgTNX1j3E4qhKfJAUE41nBWEwXufoYryPbkde5RR",
          "feeCalculator": {
            "lamportsPerSignature": 5000
          },
          "lastValidSlot": 297,
          "lastValidBlockHeight": 296
        }
      },
      "id": 1
    }`
  const codeString193 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
    {"jsonrpc":"2.0","id":1, "method":"getRecentBlockhash"}'`
  const codeString194 = `{
      "jsonrpc": "2.0",
      "result": {
        "context": {
          "slot": 1
        },
        "value": {
          "blockhash": "CSymwgTNX1j3E4qhKfJAUE41nBWEwXufoYryPbkde5RR",
          "feeCalculator": {
            "lamportsPerSignature": 5000
          }
        }
      },
      "id": 1
    }`
  const codeString195 = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
    {"jsonrpc":"2.0","id":1, "method":"getSnapshotSlot"}
  '`
  const codeString196 = `{ "jsonrpc": "2.0", "result": 100, "id": 1 }`
  const codeString197 = `{
      "jsonrpc": "2.0",
      "error": { "code": -32008, "message": "No snapshot" },
      "id": 1
    }`


  return (
    <>
      <div className="container-fluid p-0">
        <NavBarDoc handleClick={handleClick} />
        <div className="row justify-content-center m-0" >
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="sidebar-doc" style={{ left: isSidebar ? '-425px' : '0px' }}>
              <SideBarDoc />
            </div>
          </div>
          <div className={isSidebar ? "col-lg-12 col-md-12 col-sm-12 col-xs-12" :
            " col-lg-8 col-md-8 col-sm-12 col-xs-12 "}>
            <div className="container px-lg-5 px-md-5">
              <div className='markdown'>
                <h1 className='docTitle_3a4h'>JSON RPC API</h1>
                <p>En Comt nodes accept HTTP requests using the <a href="" target="_blank" rel="noopener noreferrer">JSON-RPC 2.0</a> specification.</p>
                <p>To interact with a En Comt node inside a JavaScript application, use the
                  <a href="" target="_blank" rel="noopener noreferrer">En Comt-web3.js</a> library, which
                  gives a convenient interface for the RPC methods.</p>
                <h2><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="rpc-http-endpoint"></a>RPC HTTP Endpoint<a className="hash-link" href="" title="Direct link to heading"></a></h2>
                <p><strong>Default port:</strong> 8899 e.g. <a href="" target="_blank" rel="noopener noreferrer">http://localhost:8899</a>, <a href="" target="_blank" rel="noopener noreferrer">http://192.168.1.88:8899</a></p>
                <h2><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="rpc-pubsub-websocket-endpoint"></a>RPC PubSub WebSocket Endpoint<a className="hash-link" href="" title="Direct link to heading"></a></h2>
                <p><strong>Default port:</strong> 8900 e.g. ws://localhost:8900, <a href="" target="_blank" rel="noopener noreferrer">http://192.168.1.88:8900</a></p>
                <h2><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="methods"></a>Methods<a className="hash-link" href="" title="Direct link to heading"></a></h2>
                <ul>
                  <li><a href="#getaccountinfo">getAccountInfo</a></li>
                  <li><a href="#getbalance">getBalance</a></li>
                  <li><a href="#getblock">getBlock</a></li>
                  <li><a href="#getblockheight">getBlockHeight</a></li>
                  <li><a href="#getblockproduction">getBlockProduction</a></li>
                  <li><a href="#getblockcommitment">getBlockCommitment</a></li>
                  <li><a href="#getblocks">getBlocks</a></li>
                  <li><a href="#getblockswithlimit">getBlocksWithLimit</a></li>
                  <li><a href="#getblocktime">getBlockTime</a></li>
                  <li><a href="#getclusternodes">getClusterNodes</a></li>
                  <li><a href="#getepochinfo">getEpochInfo</a></li>
                  <li><a href="#getepochschedule">getEpochSchedule</a></li>
                  <li><a href="#getfeeformessage">getFeeForMessage</a></li>
                  <li><a href="#getfirstavailableblock">getFirstAvailableBlock</a></li>
                  <li><a href="#getgenesishash">getGenesisHash</a></li>
                  <li><a href="#gethealth">getHealth</a></li>
                  <li><a href="#gethighestsnapshotslot">getHighestSnapshotSlot</a></li>
                  <li><a href="#getidentity">getIdentity</a></li>
                  <li><a href="#getinflationgovernor">getInflationGovernor</a></li>
                  <li><a href="3getinflationrate">getInflationRate</a></li>
                  <li><a href="3getinflationreward">getInflationReward</a></li>
                  <li><a href="3getlargestaccounts">getLargestAccounts</a></li>
                  <li><a href="3getlatestblockhash">getLatestBlockhash</a></li>
                  <li><a href="3getleaderschedule">getLeaderSchedule</a></li>
                  <li><a href="3getmaxretransmitslot">getMaxRetransmitSlot</a></li>
                  <li><a href="3getmaxshredinsertslot">getMaxShredInsertSlot</a></li>
                  <li><a href="#getminimumbalanceforrentexemption">getMinimumBalanceForRentExemption</a></li>
                  <li><a href="#getmultipleaccounts">getMultipleAccounts</a></li>
                  <li><a href="#getprogramaccounts">getProgramAccounts</a></li>
                  <li><a href="#getrecentperformancesamples">getRecentPerformanceSamples</a></li>
                  <li><a href="#getsignaturesforaddress">getSignaturesForAddress</a></li>
                  <li><a href="#getsignaturestatuses">getSignatureStatuses</a></li>
                  <li><a href="#getslot">getSlot</a></li>
                  <li><a href="#getslotleader">getSlotLeader</a></li>
                  <li><a href="#getslotleaders">getSlotLeaders</a></li>
                  <li><a href="#getstakeactivation">getStakeActivation</a></li>
                  <li><a href="#getsupply">getSupply</a></li>
                  <li><a href="#gettokenaccountbalance">getTokenAccountBalance</a></li>
                  <li><a href="#gettokenaccountsbydelegate">getTokenAccountsByDelegate</a></li>
                  <li><a href="#gettokenaccountsbyowner">getTokenAccountsByOwner</a></li>
                  <li><a href="#gettokenlargestaccounts">getTokenLargestAccounts</a></li>
                  <li><a href="#gettokensupply">getTokenSupply</a></li><li><a href="#gettransaction">getTransaction</a></li><li><a href="#gettransactioncount">getTransactionCount</a></li><li><a href="#getversion">getVersion</a></li><li><a href="#getvoteaccounts">getVoteAccounts</a></li><li><a href="#isblockhashvalid">isBlockhashValid</a></li><li><a href="#minimumledgerslot">minimumLedgerSlot</a></li><li><a href="#requestairdrop">requestAirdrop</a></li><li><a href="#sendtransaction">sendTransaction</a></li><li><a href="#simulatetransaction">simulateTransaction</a></li><li><a href="#subscription-websocket">Subscription Websocket</a><ul><li><a href="#accountsubscribe">accountSubscribe</a></li><li><a href="#accountunsubscribe">accountUnsubscribe</a></li><li><a href="#logssubscribe">logsSubscribe</a></li><li><a href="#logsunsubscribe">logsUnsubscribe</a></li><li><a href="#programsubscribe">programSubscribe</a></li><li><a href="#programunsubscribe">programUnsubscribe</a></li><li><a href="#signaturesubscribe">signatureSubscribe</a></li><li><a href="#signatureunsubscribe">signatureUnsubscribe</a></li><li><a href="#slotsubscribe">slotSubscribe</a></li><li><a href="#slotunsubscribe">slotUnsubscribe</a></li></ul></li></ul>

                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="unstable-methods"></a>Unstable Methods<a className="hash-link" href="" title="Direct link to heading"></a></h3>
                <p>Unstable methods may see breaking changes in patch releases and may not be supported in perpetuity.</p>

                <ul><li><a href="">blockSubscribe</a></li>
                  <li><a href="">blockUnsubscribe</a></li>
                  <li><a href="">slotsUpdatesSubscribe</a></li>
                  <li><a href="#slotsupdatesunsubscribe">slotsUpdatesUnsubscribe</a></li>
                  <li><a href="">voteSubscribe</a></li>
                  <li><a href="">voteUnsubscribe</a></li></ul>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="deprecated-methods"></a>Deprecated Methods<a className="hash-link" href="" title="Direct link to heading"></a></h3>
                <ul><li><a href="">getConfirmedBlock</a></li>
                  <li><a href="">getConfirmedBlocks</a></li>
                  <li><a href="">getConfirmedBlocksWithLimit</a></li>
                  <li><a href="">getConfirmedSignaturesForAddress2</a></li>
                  <li><a href="">getConfirmedTransaction</a></li>
                  <li><a href="">getFeeCalculatorForBlockhash</a></li>
                  <li><a href="">getFeeRateGovernor</a></li>
                  <li><a href="">getFees</a></li>
                  <li><a href="">getRecentBlockhash</a></li>
                  <li><a href="">getSnapshotSlot</a></li></ul>

                <h2><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="request-formatting"></a>Request Formatting<a className="hash-link" href="" title="Direct link to heading"></a></h2>
                <p>To make a JSON-RPC request, send an HTTP POST request with a <code>Content-Type:
                  application/json</code> header. The JSON request data should contain 4 fields:</p>
                <ul><li><code>jsonrpc: &lt;string&gt;</code>, set to <code>"2.0"</code></li>
                  <li><code>id: &lt;number&gt;</code>, a unique client-generated identifying integer</li>
                  <li><code>method: &lt;string&gt;</code>, a string containing the method to be invoked</li>
                  <li><code>params: &lt;array&gt;</code>, a JSON array of ordered parameter values</li></ul>
                <p>Example using curl:</p>


                <SyntaxHighlighter language="Js"
                  customStyle={{
                    backgroundColor: "BLACK",
                    borderColor: "BLACK",
                    color: "#fff",
                    borderRadius: "0.5rem",
                    textShadow: 'unset !important',
                  }}>
                  {codeString}
                </SyntaxHighlighter>
                <p>The response output will be a JSON object with the following fields:</p>
                <ul><li><code>jsonrpc: &lt;string&gt;</code>, matching the request specification</li><li><code>id: &lt;number&gt;</code>, matching the request identifier</li><li><code>result: &lt;array|number|object|string&gt;</code>, requested data or success confirmation</li></ul>
                <p>Requests can be sent in batches by sending an array of JSON-RPC request objects as the data for a single POST.</p>
                <h2><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="definitions"></a>Definitions<a className="hash-link" href="" title="Direct link to heading"></a></h2>
                <ul><li>Hash: A SHA-256 hash of a chunk of data.</li><li>Pubkey: The public key of a Ed25519 key-pair.</li><li>Transaction: A list of En Comt instructions signed by a client keypair to authorize those actions.</li><li>Signature: An Ed25519 signature of transaction's payload data including instructions. This can be used to identify transactions.</li></ul>
                <h2><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="configuring-state-commitment"></a>Configuring State Commitment<a className="hash-link" href="" title="Direct link to heading"></a></h2>
                <p>For preflight checks and transaction processing, En Comt nodes choose which bank
                  state to query based on a commitment requirement set by the client. The
                  commitment describes how finalized a block is at that point in time. When
                  querying the ledger state, it's recommended to use lower levels of commitment
                  to report progress and higher levels to ensure the state will not be rolled back.</p>
                <p>In descending order of commitment (most finalized to least finalized), clients
                  may specify:</p>
                <ul><li><code>"finalized"</code> - the node will query the most recent block confirmed by supermajority
                  of the cluster as having reached maximum lockout, meaning the cluster has
                  recognized this block as finalized</li><li><code>"confirmed"</code> - the node will query the most recent block that has been voted on by supermajority of the cluster.<ul><li>It incorporates votes from gossip and replay.</li><li>It does not count votes on descendants of a block, only direct votes on that block.</li><li>This confirmation level also upholds "optimistic confirmation" guarantees in
                    release 1.3 and onwards.</li></ul></li><li><code>"processed"</code> - the node will query its most recent block. Note that the block
                      may still be skipped by the cluster.</li></ul>
                <p>For processing many dependent transactions in series, it's recommended to use
                  <code>"confirmed"</code> commitment, which balances speed with rollback safety.
                  For total safety, it's recommended to use<code>"finalized"</code> commitment.</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example"></a>Example<a className="hash-link" href="" title="Direct link to heading"></a></h4>
                <p>The commitment parameter should be included as the last element in the <code>params</code> array:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString1}
                </SyntaxHighlighter>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="default"></a>Default:<a className="hash-link" href="" title="Direct link to heading"></a></h4>
                <p>If commitment configuration is not provided, the node will default to <code>"finalized"</code> commitment</p>
                <p>Only methods that query bank state accept the commitment parameter. They are indicated in the API Reference below.</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="rpcresponse-structure"></a>RpcResponse Structure<a className="hash-link" href="" title="Direct link to heading"></a></h4>
                <p>Many methods that take a commitment parameter return an RpcResponse JSON object comprised of two parts:</p>
                <ul><li><code>context</code> : An RpcResponseContext JSON structure including a <code>slot</code> field at which the operation was evaluated.</li><li><code>value</code> : The value returned by the operation itself.</li></ul>
                <h2><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="health-check"></a>Health Check<a className="hash-link" href="" title="Direct link to heading"></a></h2>
                <p>Although not a JSON RPC API, a <code>GET /health</code> at the RPC HTTP Endpoint provides a
                  health-check mechanism for use by load balancers or other network
                  infrastructure. This request will always return a HTTP 200 OK response with a body of
                  "ok", "behind" or "unknown" based on the following conditions:</p>
                <ol><li>If one or more <code>--known-validator</code> arguments are provided to <code>En Comt-validator</code>, "ok" is returned
                  when the node has within <code>HEALTH_CHECK_SLOT_DISTANCE</code> slots of the highest
                  known validator, otherwise "behind". "unknown" is returned when no slot
                  information from known validators is not yet available.</li><li>"ok" is always returned if no known validators are provided.</li></ol>
                <h2><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="json-rpc-api-reference"></a>JSON RPC API Reference<a className="hash-link" href="" title="Direct link to heading"></a></h2>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getaccountinfo"></a>getAccountInfo<a className="hash-link" href="" title="Direct link to heading"></a></h3>
                <p>Returns all information associated with the account of provided Pubkey</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading"></a></h4>
                <ul><li><code>&lt;string&gt;</code> - Pubkey of account to query, as base-58 encoded string</li><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following fields:<ul><li>(optional) <code>commitment: &lt;string&gt;</code> - <a href="">Commitment</a></li><li>(optional) <code>encoding: &lt;string&gt;</code> - encoding for Account data, either "base58" (<em>slow</em>), "base64", "base64+zstd", or "jsonParsed".
                  "base58" is limited to Account data of less than 129 bytes.
                  "base64" will return base64 encoded data for Account data of any size.
                  "base64+zstd" compresses the Account data using <a href="" target="_blank" rel="noopener noreferrer">Zstandard</a> and base64-encodes the result.
                  "jsonParsed" encoding attempts to use program-specific state parsers to return more human-readable and explicit account state data. If "jsonParsed" is requested but a parser cannot be found, the field falls back to "base64" encoding, detectable when the <code>data</code> field is type <code>&lt;string&gt;</code>.</li>
                  <li>(optional) <code>dataSlice: &lt;object&gt;</code> - limit the returned account data using the provided <code>offset: &lt;usize&gt;</code> and <code>length: &lt;usize&gt;</code> fields; only available for "base58", "base64" or "base64+zstd" encodings.</li>
                  <li>(optional) <code>minContextSlot: &lt;number&gt;</code> - set the minimum slot that the request can be evaluated at.</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results"></a>Results:<a className="hash-link" href="" title="Direct link to heading"></a></h4>
                <p>The result will be an RpcResponse JSON object with <code>value</code> equal to:</p>
                <ul><li><code>&lt;null&gt;</code> - if the requested account doesn't exist</li><li><code>&lt;object&gt;</code> - otherwise, a JSON object containing:<ul><li><code>lamports: &lt;u64&gt;</code>, number of lamports assigned to this account, as a u64</li><li><code>owner: &lt;string&gt;</code>, base-58 encoded Pubkey of the program this account has been assigned to</li><li><code>data: &lt;[string, encoding]|object&gt;</code>, data associated with the account, either as encoded binary data or JSON format <code>lt programgt: &lt;state&gt;</code>, depending on encoding parameter</li>
                  <li><code>executable: &lt;bool&gt;</code>, boolean indicating if the account contains a program (and is strictly read-only)</li><li><code>rentEpoch: &lt;u64&gt;</code>, the epoch at which this account will next owe rent, as u64</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-1"></a>Example:<a className="hash-link" href="" title="Direct link to heading"></a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString2}
                </SyntaxHighlighter>
                <p>Response:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString3}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getbalance"></a>getBalance<a className="hash-link" href="" title="Direct link to heading"></a></h3>
                <p>Returns the balance of the account of provided Pubkey</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-1"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading"></a></h4>
                <ul><li><code>&lt;string&gt;</code> - Pubkey of account to query, as base-58 encoded string</li>
                  <li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following fields:<ul><li>(optional) <code>commitment: &lt;string&gt;</code> - <a href="">Commitment</a></li>
                    <li>(optional) <code>minContextSlot: &lt;number&gt;</code> - set the minimum slot that the request can be evaluated at.</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-1"></a>Results:<a className="hash-link" href="" title="Direct link to heading"></a></h4>
                <ul><li><code>RpcResponse&lt;u64&gt;</code> - RpcResponse JSON object with <code>value</code> field set to the balance</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-3"></a>Example:<a className="hash-link" href="" title="Direct link to heading"></a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString4}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString5}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getblock"></a>getBlock<a className="hash-link" href="" title="Direct link to heading"></a></h3>
                <p>Returns identity and transaction information about a confirmed block in the ledger</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-2"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading"></a></h4>
                <ul><li><code>&lt;u64&gt;</code> - slot, as u64 integer</li><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following optional fields:<ul><li>(optional) <code>encoding: &lt;string&gt;</code> - encoding for each returned Transaction, either "json", "jsonParsed", "base58" (<em>slow</em>), "base64". If parameter not provided, the default encoding is "json".
                  "jsonParsed" encoding attempts to use program-specific instruction parsers to return more human-readable and explicit data in the <code>transaction.message.instructions</code> list. If "jsonParsed" is requested but a parser cannot be found, the instruction falls back to regular JSON encoding (<code>accounts</code>, <code>data</code>, and <code>programIdIndex</code> fields).</li><li>(optional) <code>transactionDetails: &lt;string&gt;</code> - level of transaction detail to return, either "full", "signatures", or "none". If parameter not provided, the default detail level is "full".</li><li>(optional) <code>rewards: bool</code> - whether to populate the <code>rewards</code> array. If parameter not provided, the default includes rewards.</li><li>(optional) <a href="">Commitment</a>; "processed" is not supported. If parameter not provided, the default is "finalized".</li>
                  <li>(optional) <code>maxSupportedTransactionVersion: &lt;number&gt;</code> - set the max transaction version to return in responses. If the requested block contains a transaction with a higher version, an error will be returned.</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-2"></a>Results:<a className="hash-link" href="" title="Direct link to heading"></a></h4>
                <p>The result field will be an object with the following fields:</p>
                <ul><li><code>&lt;null&gt;</code> - if specified block is not confirmed</li><li><code>&lt;object&gt;</code> - if block is confirmed, an object with the following fields:<ul><li><code>blockhash: &lt;string&gt;</code> - the blockhash of this block, as base-58 encoded string</li><li><code>previousBlockhash: &lt;string&gt;</code> - the blockhash of this block's parent, as base-58 encoded string; if the parent block is not available due to ledger cleanup, this field will return "11111111111111111111111111111111"</li><li><code>parentSlot: &lt;u64&gt;</code> - the slot index of this block's parent</li><li><code>transactions: &lt;array&gt;</code> - present if "full" transaction details are requested; an array of JSON objects containing:<ul><li><code>transaction: &lt;object|[string,encoding]&gt;</code> - <a href="">Transaction</a> object, either in JSON format or encoded binary data, depending on encoding parameter</li><li><code>meta: &lt;object&gt;</code> - transaction status metadata object, containing <code>null</code> or:<ul><li><code>err: &lt;object | null&gt;</code> - Error if transaction failed, null if transaction succeeded. <a href="" target="_blank" rel="noopener noreferrer">TransactionError definitions</a></li><li><code>fee: &lt;u64&gt;</code> - fee this transaction was charged, as u64 integer</li><li><code>preBalances: &lt;array&gt;</code> - array of u64 account balances from before the transaction was processed</li><li><code>postBalances: &lt;array&gt;</code> - array of u64 account balances after the transaction was processed</li><li><code>innerInstructions: &lt;array|null&gt;</code> - List of <a href="">inner instructions</a> or <code>null</code> if inner instruction recording was not enabled during this transaction</li><li><code>preTokenBalances: &lt;array|undefined&gt;</code> - List of <a href="">token balances</a> from before the transaction was processed or omitted if token balance recording was not yet enabled during this transaction</li><li><code>postTokenBalances: &lt;array|undefined&gt;</code> - List of <a href="">token balances</a> from after the transaction was processed or omitted if token balance recording was not yet enabled during this transaction</li><li><code>logMessages: &lt;array|null&gt;</code> - array of string log messages or <code>null</code> if log message recording was not enabled during this transaction</li><li>DEPRECATED: <code>status: &lt;object&gt;</code> - Transaction status<ul><li><code>"Ok": &lt;null&gt;</code> - Transaction was successful</li><li><code>"Err": &lt;ERR&gt;</code> - Transaction failed with TransactionError</li></ul></li><li><code>loadedAddresses: &lt;object|undefined&gt;</code> - Transaction addresses loaded from address lookup tables. Undefined if <code>maxSupportedTransactionVersion</code> is not set in request params.<ul><li><code>writable: &lt;array[string]&gt;</code> - Ordered list of base-58 encoded addresses for writable loaded accounts</li><li><code>readonly: &lt;array[string]&gt;</code> - Ordered list of base-58 encoded addresses for readonly loaded accounts</li></ul></li></ul></li><li><code>version: &lt;"legacy"|number|undefined&gt;</code> - Transaction version. Undefined if <code>maxSupportedTransactionVersion</code> is not set in request params.</li></ul></li><li><code>signatures: &lt;array&gt;</code> - present if "signatures" are requested for transaction details; an array of signatures strings, corresponding to the transaction order in the block</li><li><code>rewards: &lt;array&gt;</code> - present if rewards are requested; an array of JSON objects containing:<ul><li><code>pubkey: &lt;string&gt;</code> - The public key, as base-58 encoded string, of the account that received the reward</li><li><code>lamports: &lt;i64&gt;</code>- number of reward lamports credited or debited by the account, as a i64</li><li><code>postBalance: &lt;u64&gt;</code> - account balance in lamports after the reward was applied</li><li><code>rewardType: &lt;string|undefined&gt;</code> - type of reward: "fee", "rent", "voting", "staking"</li><li><code>commission: &lt;u8|undefined&gt;</code> - vote account commission when the reward was credited, only present for voting and staking rewards</li></ul></li><li><code>blockTime: &lt;i64 | null&gt;</code> - estimated production time, as Unix timestamp (seconds since the Unix epoch). null if not available</li><li><code>blockHeight: &lt;u64 | null&gt;</code> - the number of blocks beneath this block</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-4"></a>Example:<a className="hash-link" href="" title="Direct link to heading"></a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString6}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString7}
                </SyntaxHighlighter>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-4"></a>Example:<a className="hash-link" href="" title="Direct link to heading"></a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString8}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString9}
                </SyntaxHighlighter>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="transaction-structure"></a>Transaction Structure<a className="hash-link" href="" title="Direct link to heading"></a></h4>
                <p>Transactions are quite different from those on other blockchains. Be sure to review <a href="">Anatomy of a Transaction</a> to learn about transactions on En Comt.</p>
                <p>The JSON structure of a transaction is defined as follows:</p>
                <ul><li><code>signatures: &lt;array[string]&gt;</code> - A list of base-58 encoded signatures applied to the transaction. The list is always of length <code>message.header.numRequiredSignatures</code> and not empty. The signature at index <code>i</code> corresponds to the public key at index <code>i</code> in <code>message.account_keys</code>. The first one is used as the <a href="">transaction id</a>.</li>
                  <li><code>message: &lt;object&gt;</code> - Defines the content of the transaction.<ul><li><code>accountKeys: &lt;array[string]&gt;</code> - List of base-58 encoded public keys used by the transaction, including by the instructions and for signatures. The first <code>message.header.numRequiredSignatures</code> public keys must sign the transaction.</li><li><code>header: &lt;object&gt;</code> - Details the account types and signatures required by the transaction.<ul><li><code>numRequiredSignatures: &lt;number&gt;</code> - The total number of signatures required to make the transaction valid. The signatures must match the first <code>numRequiredSignatures</code> of <code>message.account_keys</code>.</li><li><code>numReadonlySignedAccounts: &lt;number&gt;</code> - The last <code>numReadonlySignedAccounts</code> of the signed keys are read-only accounts. Programs may process multiple transactions that load read-only accounts within a single PoH entry, but are not permitted to credit or debit lamports or modify account data. Transactions targeting the same read-write account are evaluated sequentially.</li><li><code>numReadonlyUnsignedAccounts: &lt;number&gt;</code> - The last <code>numReadonlyUnsignedAccounts</code> of the unsigned keys are read-only accounts.</li></ul></li><li><code>recentBlockhash: &lt;string&gt;</code> - A base-58 encoded hash of a recent block in the ledger used to prevent transaction duplication and to give transactions lifetimes.</li><li><code>instructions: &lt;array[object]&gt;</code> - List of program instructions that will be executed in sequence and committed in one atomic transaction if all succeed.<ul><li><code>programIdIndex: &lt;number&gt;</code> - Index into the <code>message.accountKeys</code> array indicating the program account that executes this instruction.</li><li><code>accounts: &lt;array[number]&gt;</code> - List of ordered indices into the <code>message.accountKeys</code> array indicating which accounts to pass to the program.</li><li><code>data: &lt;string&gt;</code> - The program input data encoded in a base-58 string.</li></ul></li><li><code>addressTableLookups: &lt;array[object]|undefined&gt;</code> - List of address table lookups used by a transaction to dynamically load addresses from on-chain address lookup tables. Undefined if <code>maxSupportedTransactionVersion</code> is not set.<ul><li><code>accountKey: &lt;string&gt;</code> - base-58 encoded public key for an address lookup table account.</li><li><code>writableIndexes: &lt;array[number]&gt;</code> - List of indices used to load addresses of writable accounts from a lookup table.</li><li><code>readonlyIndexes: &lt;array[number]&gt;</code> - List of indices used to load addresses of readonly accounts from a lookup table.</li></ul></li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="inner-instructions-structure"></a>Inner Instructions Structure<a className="hash-link" href="" title="Direct link to heading"></a></h4>
                <p>The En Comt runtime records the cross-program instructions that are invoked during transaction processing and makes these available for greater transparency of what was executed on-chain per transaction instruction. Invoked instructions are grouped by the originating transaction instruction and are listed in order of processing.</p>
                <p>The JSON structure of inner instructions is defined as a list of objects in the following structure:</p>
                <ul><li><code>index: number</code> - Index of the transaction instruction from which the inner instruction(s) originated</li><li><code>instructions: &lt;array[object]&gt;</code> - Ordered list of inner program instructions that were invoked during a single transaction instruction.<ul><li><code>programIdIndex: &lt;number&gt;</code> - Index into the <code>message.accountKeys</code> array indicating the program account that executes this instruction.</li><li><code>accounts: &lt;array[number]&gt;</code> - List of ordered indices into the <code>message.accountKeys</code> array indicating which accounts to pass to the program.</li><li><code>data: &lt;string&gt;</code> - The program input data encoded in a base-58 string.</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="token-balances-structure"></a>Token Balances Structure<a className="hash-link" href="" title="Direct link to heading"></a></h4>
                <p>The JSON structure of token balances is defined as a list of objects in the following structure:</p>
                <ul><li><code>accountIndex: &lt;number&gt;</code> - Index of the account in which the token balance is provided for.</li><li><code>mint: &lt;string&gt;</code> - Pubkey of the token's mint.</li><li><code>owner: &lt;string | undefined&gt;</code> - Pubkey of token balance's owner.</li><li><code>programId: &lt;string | undefined&gt;</code> - Pubkey of the Token program that owns the account.</li><li><code>uiTokenAmount: &lt;object&gt;</code> -<ul><li><code>amount: &lt;string&gt;</code> - Raw amount of tokens as a string, ignoring decimals.</li><li><code>decimals: &lt;number&gt;</code> - Number of decimals configured for token's mint.</li><li><code>uiAmount: &lt;number | null&gt;</code> - Token amount as a float, accounting for decimals. <strong>DEPRECATED</strong></li><li><code>uiAmountString: &lt;string&gt;</code> - Token amount as a string, accounting for decimals.</li></ul></li></ul>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getblockheight"></a>getBlockHeight<a className="hash-link" href="" title="Direct link to heading"></a></h3>
                <p>Returns the current block height of the node</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-3"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading"></a></h4>
                <ul><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following fields:<ul><li>(optional) <code>commitment: &lt;string&gt;</code> - <a href="">Commitment</a></li><li>(optional) <code>minContextSlot: &lt;number&gt;</code> - set the minimum slot that the request can be evaluated at.</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-3"></a>Results:<a className="hash-link" href="" title="Direct link to heading"></a></h4>
                <ul><li><code>&lt;u64&gt;</code> - Current block height</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-6"></a>Example:<a className="hash-link" href="" title="Direct link to heading"></a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString10}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString11}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getblockproduction"></a>getBlockProduction<a className="hash-link" href="" title="Direct link to heading"></a></h3>
                <p>Returns recent block production information from the current or previous epoch.</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-4"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading"></a></h4>
                <ul><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following optional fields:<ul><li>(optional) <a href="">Commitment</a></li><li>(optional) <code>range: &lt;object&gt;</code> - Slot range to return block production for. If parameter not provided, defaults to current epoch.<ul><li><code>firstSlot: &lt;u64&gt;</code> - first slot to return block production information for (inclusive)</li><li>(optional) <code>lastSlot: &lt;u64&gt;</code> - last slot to return block production information for (inclusive). If parameter not provided, defaults to the highest slot</li></ul></li><li>(optional) <code>identity: &lt;string&gt;</code> - Only return results for this validator identity (base-58 encoded)</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-4"></a>Results:<a className="hash-link" href="" title="Direct link to heading"></a></h4>
                <p>The result will be an RpcResponse JSON object with <code>value</code> equal to:</p>
                <ul><li><code>&lt;object&gt;</code><ul><li><code>byIdentity: &lt;object&gt;</code> - a dictionary of validator identities,
                  as base-58 encoded strings. Value is a two element array containing the
                  number of leader slots and the number of blocks produced.</li><li><code>range: &lt;object&gt;</code> - Block production slot range<ul><li><code>firstSlot: &lt;u64&gt;</code> - first slot of the block production information (inclusive)</li><li><code>lastSlot: &lt;u64&gt;</code> - last slot of block production information (inclusive)</li></ul></li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-7"></a>Example:<a className="hash-link" href="" title="Direct link to heading"></a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString12}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString13}
                </SyntaxHighlighter>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-7"></a>Example:<a className="hash-link" href="" title="Direct link to heading"></a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString14}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString15}
                </SyntaxHighlighter>

                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getblockcommitment"></a>getBlockCommitment<a className="hash-link" href="" title="Direct link to heading"></a></h3>
                <p>Returns commitment for particular block</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-5"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading"></a></h4>
                <ul><li><code>&lt;u64&gt;</code> - block, identified by Slot</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-5"></a>Results:<a className="hash-link" href="" title="Direct link to heading"></a></h4>
                <p>The result field will be a JSON object containing:</p>
                <ul><li><code>commitment</code> - commitment, comprising either:<ul><li><code>&lt;null&gt;</code> - Unknown block</li><li><code>&lt;array&gt;</code> - commitment, array of u64 integers logging the amount of cluster stake in lamports that has voted on the block at each depth from 0 to <code>MAX_LOCKOUT_HISTORY</code> + 1</li></ul></li><li><code>totalStake</code> - total active stake, in lamports, of the current epoch</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-9"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString16}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString17}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getblocks"></a>getBlocks<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns a list of confirmed blocks between two slots</p>
                <h4><a aria-hidden="true" tabindex="-1" class="anchor enhancedAnchor_2LWZ" id="parameters-6"></a>Parameters:<a class="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;u64&gt;</code> - start_slot, as u64 integer</li><li><code>&lt;u64&gt;</code> - (optional) end_slot, as u64 integer</li><li>(optional) <a href="">Commitment</a>; "processed" is not supported. If parameter not provided, the default is "finalized".</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-6"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The result field will be an array of u64 integers listing confirmed blocks
                  between <code>start_slot</code> and either <code>end_slot</code>, if provided, or latest confirmed block,
                  inclusive. Max range allowed is 500,000 slots.</p>


                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-10"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString18}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString19}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getblockswithlimit"></a>getBlocksWithLimit<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns a list of confirmed blocks starting at the given slot</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-7"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;u64&gt;</code> - start_slot, as u64 integer</li><li><code>&lt;u64&gt;</code> - limit, as u64 integer</li><li>(optional) <a href="">Commitment</a>; "processed" is not supported. If parameter not provided, the default is "finalized".</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-7"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The result field will be an array of u64 integers listing confirmed blocks
                  starting at <code>start_slot</code> for up to <code>limit</code> blocks, inclusive.</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-11"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>

                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString20}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString21}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getblocktime"></a>getBlockTime<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns the estimated production time of a block.</p>
                <p>Each validator reports their UTC time to the ledger on a regular interval by
                  intermittently adding a timestamp to a Vote for a particular block. A requested
                  block's time is calculated from the stake-weighted mean of the Vote timestamps
                  in a set of recent blocks recorded on the ledger.</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-8"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;u64&gt;</code> - block, identified by Slot</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-8"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;i64&gt;</code> - estimated production time, as Unix timestamp (seconds since the Unix epoch)</li><li><code>&lt;null&gt;</code> - timestamp is not available for this block</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-12"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString22}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString23}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getclusternodes"></a>getClusterNodes<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns information about all the nodes participating in the cluster</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-9"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>None</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-9"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The result field will be an array of JSON objects, each with the following sub fields:</p>
                <ul><li><code>pubkey: &lt;string&gt;</code> - Node public key, as base-58 encoded string</li><li><code>gossip: &lt;string | null&gt;</code> - Gossip network address for the node</li><li><code>tpu: &lt;string | null&gt;</code> - TPU network address for the node</li><li><code>rpc: &lt;string | null&gt;</code> - JSON RPC network address for the node, or <code>null</code> if the JSON RPC service is not enabled</li><li><code>version: &lt;string | null&gt;</code> - The software version of the node, or <code>null</code> if the version information is not available</li><li><code>featureSet: &lt;u32 | null &gt;</code> - The unique identifier of the node's feature set</li><li><code>shredVersion: &lt;u16 | null&gt;</code> - The shred version the node has been configured to use</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-13"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString24}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString25}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getepochinfo"></a>getEpochInfo<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns information about the current epoch</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-10"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following fields:<ul><li>(optional) <code>commitment: &lt;string&gt;</code> - <a href="">Commitment</a></li><li>(optional) <code>minContextSlot: &lt;number&gt;</code> - set the minimum slot that the request can be evaluated at.</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-10"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The result field will be an object with the following fields:</p>
                <ul><li><code>absoluteSlot: &lt;u64&gt;</code>, the current slot</li><li><code>blockHeight: &lt;u64&gt;</code>, the current block height</li><li><code>epoch: &lt;u64&gt;</code>, the current epoch</li><li><code>slotIndex: &lt;u64&gt;</code>, the current slot relative to the start of the current epoch</li><li><code>slotsInEpoch: &lt;u64&gt;</code>, the number of slots in this epoch</li><li><code>transactionCount: &lt;u64 | null&gt;</code>, total number of transactions processed without error since genesis</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-14"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString26}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString27}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getepochschedule"></a>getEpochSchedule<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns epoch schedule information from this cluster's genesis config</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-11"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>None</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-11"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The result field will be an object with the following fields:</p>
                <ul><li><code>slotsPerEpoch: &lt;u64&gt;</code>, the maximum number of slots in each epoch</li><li><code>leaderScheduleSlotOffset: &lt;u64&gt;</code>, the number of slots before beginning of an epoch to calculate a leader schedule for that epoch</li><li><code>warmup: &lt;bool&gt;</code>, whether epochs start short and grow</li><li><code>firstNormalEpoch: &lt;u64&gt;</code>, first normal-length epoch, log2(slotsPerEpoch) - log2(MINIMUM_SLOTS_PER_EPOCH)</li><li><code>firstNormalSlot: &lt;u64&gt;</code>, MINIMUM_SLOTS_PER_EPOCH * (2.pow(firstNormalEpoch) - 1)</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-15"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString28}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString29}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getfeeformessage"></a>getFeeForMessage<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p><strong>NEW: This method is only available in En Comt-core v1.9 or newer. Please use
                  <a href="">getFees</a> for En Comt-core v1.8</strong></p>
                <p>Get the fee the network will charge for a particular Message</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-12"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>message: &lt;string&gt;</code> - Base-64 encoded Message</li><li><code>&lt;object&gt;</code> - (optional) <a href="">Commitment</a> (used for retrieving blockhash)</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-12"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;u64 | null&gt;</code> - Fee corresponding to the message at the specified blockhash</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-16"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString30}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString31}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getfirstavailableblock"></a>getFirstAvailableBlock<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns the slot of the lowest confirmed block that has not been purged from the ledger</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-13"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>None</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-13"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;u64&gt;</code> - Slot</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-17"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString32}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString33}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getgenesishash"></a>getGenesisHash<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns the genesis hash</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-14"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>None</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-14"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;string&gt;</code> - a Hash as base-58 encoded string</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-18"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString34}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString35}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="gethealth"></a>getHealth<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns the current health of the node.</p>
                <p>If one or more <code>--known-validator</code> arguments are provided to
                  <code>En Comt-validator</code>, "ok" is returned when the node has within
                  <code>HEALTH_CHECK_SLOT_DISTANCE</code> slots of the highest known validator, otherwise
                  an error is returned. "ok" is always returned if no known validators are
                  provided.</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-15"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>None</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-15"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>If the node is healthy: "ok"
                  If the node is unhealthy, a JSON RPC error response is returned. The specifics
                  of the error response are <strong>UNSTABLE</strong> and may change in the future</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-19"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString36}
                </SyntaxHighlighter>
                <p>Healthy Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString37}
                </SyntaxHighlighter>
                <p>Unhealthy Result (generic):</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString38}
                </SyntaxHighlighter>
                <p>Unhealthy Result (if additional information is available)</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString39}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="gethighestsnapshotslot"></a>getHighestSnapshotSlot<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p><strong>NEW: This method is only available in En Comt-core v1.9 or newer. Please use
                  <a href="">getSnapshotSlot</a> for En Comt-core v1.8</strong></p>
                <p>Returns the highest slot information that the node has snapshots for.</p>
                <p>This will find the highest full snapshot slot, and the highest incremental
                  snapshot slot <em>based on</em> the full snapshot slot, if there is one.</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-16"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>None</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-16"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;object&gt;</code><ul><li><code>full: &lt;u64&gt;</code> - Highest full snapshot slot</li><li><code>incremental: &lt;u64 | undefined&gt;</code> - Highest incremental snapshot slot <em>based on</em> <code>full</code></li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-19"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString40}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString41}
                </SyntaxHighlighter>
                <p>Result when the node has no snapshot:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString42}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getidentity"></a>getIdentity<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns the identity pubkey for the current node</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-15"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>None</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-15"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The result field will be a JSON object with the following fields:</p>
                <ul><li><code>identity</code>, the identity pubkey of the current node (as a base-58 encoded string)</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-19"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString43}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString44}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getinflationgovernor"></a>getInflationGovernor<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns the current inflation governor</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-18"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;object&gt;</code> - (optional) <a href="">Commitment</a></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-18"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The result field will be a JSON object with the following fields:</p>
                <ul><li><code>initial: &lt;f64&gt;</code>, the initial inflation percentage from time 0</li><li><code>terminal: &lt;f64&gt;</code>, terminal inflation percentage</li><li><code>taper: &lt;f64&gt;</code>, rate per year at which inflation is lowered.
                  Rate reduction is derived using the target slot time in genesis config</li><li><code>foundation: &lt;f64&gt;</code>, percentage of total inflation allocated to the foundation</li><li><code>foundationTerm: &lt;f64&gt;</code>, duration of foundation pool inflation in years</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-19"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString45}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString46}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getinflationrate"></a>getInflationRate<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns the specific inflation values for the current epoch</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-15"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>None</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-15"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The result field will be a JSON object with the following fields:</p>
                <ul><li><code>total: &lt;f64&gt;</code>, total inflation</li><li><code>validator: &lt;f64&gt;</code>, inflation allocated to validators</li><li><code>foundation: &lt;f64&gt;</code>, inflation allocated to the foundation</li><li><code>epoch: &lt;u64&gt;</code>, epoch for which these values are valid</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-19"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString47}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString48}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getinflationreward"></a>getInflationReward<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns the inflation / staking reward for a list of addresses for an epoch</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-20"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;array&gt;</code> - An array of addresses to query, as base-58 encoded strings</li><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following fields:<ul><li>(optional) <code>commitment: &lt;string&gt;</code> - <a href="">Commitment</a></li><li>(optional) <code>epoch: &lt;u64&gt;</code> - An epoch for which the reward occurs. If omitted, the previous epoch will be used</li><li>(optional) <code>minContextSlot: &lt;number&gt;</code> - set the minimum slot that the request can be evaluated at.</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-20"></a>Results<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The result field will be a JSON array with the following fields:</p>
                <ul><li><code>epoch: &lt;u64&gt;</code>, epoch for which reward occured</li><li><code>effectiveSlot: &lt;u64&gt;</code>, the slot in which the rewards are effective</li><li><code>amount: &lt;u64&gt;</code>, reward amount in lamports</li><li><code>postBalance: &lt;u64&gt;</code>, post balance of the account in lamports</li><li><code>commission: &lt;u8|undefined&gt;</code> - vote account commission when the reward was credited</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-19"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Response:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString49}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString50}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getlargestaccounts"></a>getLargestAccounts<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns the 20 largest accounts, by lamport balance (results may be cached up to two hours)</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-21"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following optional fields:<ul><li>(optional) <a href="">Commitment</a></li><li>(optional) <code>filter: &lt;string&gt;</code> - filter results by account type; currently supported: <code>circulating|nonCirculating</code></li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-21"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The result will be an RpcResponse JSON object with <code>value</code> equal to an array of:</p>
                <ul><li><code>&lt;object&gt;</code> - otherwise, a JSON object containing:<ul><li><code>address: &lt;string&gt;</code>, base-58 encoded address of the account</li><li><code>lamports: &lt;u64&gt;</code>, number of lamports in the account, as a u64</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-19"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString51}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString52}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getlatestblockhash"></a>getLatestBlockhash<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p><strong>NEW: This method is only available in En Comt-core v1.9 or newer. Please use
                  <a href="">getRecentBlockhash</a> for En Comt-core v1.8</strong></p>
                <p>Returns the latest blockhash</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-22"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following fields:<ul><li>(optional) <code>commitment: &lt;string&gt;</code> - <a href="">Commitment</a> (used for retrieving blockhash)</li><li>(optional) <code>minContextSlot: &lt;number&gt;</code> - set the minimum slot that the request can be evaluated at.</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-22"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>RpcResponse&lt;object&gt;</code> - RpcResponse JSON object with <code>value</code> field set to a JSON object including:</li><li><code>blockhash: &lt;string&gt;</code> - a Hash as base-58 encoded string</li><li><code>lastValidBlockHeight: &lt;u64&gt;</code> - last <a href="">block height</a> at which the blockhash will be valid</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-19"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString53}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString54}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getleaderschedule"></a>getLeaderSchedule<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns the leader schedule for an epoch</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-23"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;u64&gt;</code> - (optional) Fetch the leader schedule for the epoch that corresponds to the provided slot.
                  If unspecified, the leader schedule for the current epoch is fetched</li><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following field:<ul><li>(optional) <a href="">Commitment</a></li>
                    <li>(optional) <code>identity: &lt;string&gt;</code> - Only return results for this validator identity (base-58 encoded)</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-23"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;null&gt;</code> - if requested epoch is not found</li><li><code>&lt;object&gt;</code> - otherwise, the result field will be a dictionary of validator identities,
                  as base-58 encoded strings, and their corresponding leader slot indices as values
                  (indices are relative to the first slot in the requested epoch)</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-19"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString55}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString56}
                </SyntaxHighlighter>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-19"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString57}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString58}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getmaxretransmitslot"></a>getMaxRetransmitSlot<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Get the max slot seen from retransmit stage.</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-24"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;u64&gt;</code> - Slot</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-19"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString59}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString60}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getmaxshredinsertslot"></a>getMaxShredInsertSlot<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Get the max slot seen from after shred insert.</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-25"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;u64&gt;</code> - Slot</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-19"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString61}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString62}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getminimumbalanceforrentexemption"></a>getMinimumBalanceForRentExemption<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns minimum balance required to make account rent exempt.</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-24"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;usize&gt;</code> - account data length</li><li><code>&lt;object&gt;</code> - (optional) <a href="">Commitment</a></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-26"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;u64&gt;</code> - minimum lamports required in account</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-19"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString63}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString64}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getmultipleaccounts"></a>getMultipleAccounts<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns the account information for a list of Pubkeys</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-25"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;array&gt;</code> - An array of Pubkeys to query, as base-58 encoded strings (up to a maximum of 100).</li><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following fields:<ul><li>(optional) <code>commitment: &lt;string&gt;</code> - <a href="">Commitment</a></li><li>(optional) <code>encoding: &lt;string&gt;</code> - encoding for Account data, either "base58" (<em>slow</em>), "base64", "base64+zstd", or "jsonParsed".
                  "base58" is limited to Account data of less than 129 bytes.
                  "base64" will return base64 encoded data for Account data of any size.
                  "base64+zstd" compresses the Account data using <a href="" target="_blank" rel="noopener noreferrer">Zstandard</a> and base64-encodes the result.
                  "jsonParsed" encoding attempts to use program-specific state parsers to return more human-readable and explicit account state data. If "jsonParsed" is requested but a parser cannot be found, the field falls back to "base64" encoding, detectable when the <code>data</code> field is type <code>&lt;string&gt;</code>.</li><li>(optional) <code>dataSlice: &lt;object&gt;</code> - limit the returned account data using the provided <code>offset: &lt;usize&gt;</code> and <code>length: &lt;usize&gt;</code> fields; only available for "base58", "base64" or "base64+zstd" encodings.</li><li>(optional) <code>minContextSlot: &lt;number&gt;</code> - set the minimum slot that the request can be evaluated at.</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-27"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The result will be an RpcResponse JSON object with <code>value</code> equal to:</p>
                <p>An array of:</p>
                <ul><li><code>&lt;null&gt;</code> - if the account at that Pubkey doesn't exist</li><li><code>&lt;object&gt;</code> - otherwise, a JSON object containing:<ul><li><code>lamports: &lt;u64&gt;</code>, number of lamports assigned to this account, as a u64</li><li><code>owner: &lt;string&gt;</code>, base-58 encoded Pubkey of the program this account has been assigned to</li><li><code>data: &lt;[string, encoding]|object&gt;</code>, data associated with the account, either as encoded binary data or JSON format <code>lt&program&gt: &lt;state&gt;</code>, depending on encoding parameter</li><li><code>executable: &lt;bool&gt;</code>, boolean indicating if the account contains a program (and is strictly read-only)</li><li><code>rentEpoch: &lt;u64&gt;</code>, the epoch at which this account will next owe rent, as u64</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-19"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString65}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString66}
                </SyntaxHighlighter>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-19"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString67}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString68}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getprogramaccounts"></a>getProgramAccounts<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns all accounts owned by the provided program Pubkey</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-26"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;string&gt;</code> - Pubkey of program, as base-58 encoded string</li><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following fields:<ul><li>(optional) <code>commitment: &lt;string&gt;</code> - <a href="">Commitment</a></li><li>(optional) <code>encoding: &lt;string&gt;</code> - encoding for Account data, either "base58" (<em>slow</em>), "base64", "base64+zstd", or "jsonParsed".
                  "base58" is limited to Account data of less than 129 bytes.
                  "base64" will return base64 encoded data for Account data of any size.
                  "base64+zstd" compresses the Account data using <a href="" target="_blank" rel="noopener noreferrer">Zstandard</a> and base64-encodes the result.
                  "jsonParsed" encoding attempts to use program-specific state parsers to return more human-readable and explicit account state data. If "jsonParsed" is requested but a parser cannot be found, the field falls back to "base64" encoding, detectable when the <code>data</code> field is type <code>&lt;string&gt;</code>.</li><li>(optional) <code>dataSlice: &lt;object&gt;</code> - limit the returned account data using the provided <code>offset: &lt;usize&gt;</code> and <code>length: &lt;usize&gt;</code> fields; only available for "base58", "base64" or "base64+zstd" encodings.</li><li>(optional) <code>filters: &lt;array&gt;</code> - filter results using various <a href="">filter objects</a>; account must meet all filter criteria to be included in results</li><li>(optional) <code>withContext: bool</code> - wrap the result in an RpcResponse JSON object.</li><li>(optional) <code>minContextSlot: &lt;number&gt;</code> - set the minimum slot that the request can be evaluated at.</li></ul></li></ul>
                <h5><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="filters"></a>Filters:<a className="hash-link" href="" title="Direct link to heading">#</a></h5>
                <ul><li><p><code>memcmp: &lt;object&gt;</code> - compares a provided series of bytes with program account data at a particular offset. Fields:</p><ul><li><code>offset: &lt;usize&gt;</code> - offset into program account data to start comparison</li><li><code>bytes: &lt;string&gt;</code> - data to match, as base-58 encoded string and limited to less than 129 bytes</li></ul></li><li><p><code>dataSize: &lt;u64&gt;</code> - compares the program account data length with the provided data size</p></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-28"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>By default the result field will be an array of JSON objects. If <code>withContext</code> flag is set the array will be wrapped in an RpcResponse JSON object.</p>
                <p>The array will contain:</p>
                <ul><li><code>pubkey: &lt;string&gt;</code> - the account Pubkey as base-58 encoded string</li><li><code>account: &lt;object&gt;</code> - a JSON object, with the following sub fields:<ul><li><code>lamports: &lt;u64&gt;</code>, number of lamports assigned to this account, as a u64</li><li><code>owner: &lt;string&gt;</code>, base-58 encoded Pubkey of the program this account has been assigned to</li><li><code>data: &lt;[string,encoding]|object&gt;</code>, data associated with the account, either as encoded binary data or JSON format <code>&lt;program&gt;: &lt;state&gt;</code>, depending on encoding parameter</li><li><code>executable: &lt;bool&gt;</code>, boolean indicating if the account contains a program (and is strictly read-only)</li><li><code>rentEpoch: &lt;u64&gt;</code>, the epoch at which this account will next owe rent, as u64</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-19"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString69}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString70}
                </SyntaxHighlighter>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-19"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString71}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString72}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getrecentperformancesamples"></a>getRecentPerformanceSamples<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns a list of recent performance samples, in reverse slot order. Performance samples are taken every 60 seconds and
                  include the number of transactions and slots that occur in a given time window.</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-27"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>limit: &lt;usize&gt;</code> - (optional) number of samples to return (maximum 720)</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-29"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>An array of:</p>
                <ul><li><code>RpcPerfSample&lt;object&gt;</code><ul><li><code>slot: &lt;u64&gt;</code> - Slot in which sample was taken at</li><li><code>numTransactions: &lt;u64&gt;</code> - Number of transactions in sample</li><li><code>numSlots: &lt;u64&gt;</code> - Number of slots in sample</li><li><code>samplePeriodSecs: &lt;u16&gt;</code> - Number of seconds in a sample window</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-19"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString73}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString74}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getsignaturesforaddress"></a>getSignaturesForAddress<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns signatures for confirmed transactions that include the given address in
                  their <code>accountKeys</code> list. Returns signatures backwards in time from the
                  provided signature or most recent confirmed block</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-28"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;string&gt;</code> - account address as base-58 encoded string</li><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following fields:<ul><li>(optional) <code>limit: &lt;number&gt;</code> - maximum transaction signatures to return (between 1 and 1,000, default: 1,000).</li><li>(optional) <code>before: &lt;string&gt;</code> - start searching backwards from this transaction signature.
                  If not provided the search starts from the top of the highest max confirmed block.</li><li>(optional) <code>until: &lt;string&gt;</code> - search until this transaction signature, if found before limit reached.</li><li>(optional) <code>commitment: &lt;string&gt;</code> - <a href="">Commitment</a></li><li>(optional) <code>minContextSlot: &lt;number&gt;</code> - set the minimum slot that the request can be evaluated at.</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-30"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The result field will be an array of transaction signature information, ordered
                  from newest to oldest transaction:</p>
                <ul><li><code>&lt;object&gt;</code><ul><li><code>signature: &lt;string&gt;</code> - transaction signature as base-58 encoded string</li><li><code>slot: &lt;u64&gt;</code> - The slot that contains the block with the transaction</li><li><code>err: &lt;object | null&gt;</code> - Error if transaction failed, null if transaction succeeded. <a href="" target="_blank" rel="noopener noreferrer">TransactionError definitions</a></li><li><code>memo: &lt;string |null&gt;</code> - Memo associated with the transaction, null if no memo is present</li><li><code>blockTime: &lt;i64 | null&gt;</code> - estimated production time, as Unix timestamp (seconds since the Unix epoch) of when transaction was processed. null if not available.</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-19"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString75}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString76}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getsignaturestatuses"></a>getSignatureStatuses<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns the statuses of a list of signatures. Unless the
                  <code>searchTransactionHistory</code> configuration parameter is included, this method only
                  searches the recent status cache of signatures, which retains statuses for all
                  active slots plus <code>MAX_RECENT_BLOCKHASHES</code> rooted slots.</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-29"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;array&gt;</code> - An array of transaction signatures to confirm, as base-58 encoded strings</li><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following field:<ul><li><code>searchTransactionHistory: &lt;bool&gt;</code> - if true, a En Comt node will search its ledger cache for any signatures not found in the recent status cache</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-31"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>An RpcResponse containing a JSON object consisting of an array of TransactionStatus objects.</p>
                <ul><li><code>RpcResponse&lt;object&gt;</code> - RpcResponse JSON object with <code>value</code> field:</li></ul>
                <p>An array of:</p>
                <ul><li><code>&lt;null&gt;</code> - Unknown transaction</li><li><code>&lt;object&gt;</code><ul><li><code>slot: &lt;u64&gt;</code> - The slot the transaction was processed</li><li><code>confirmations: &lt;usize | null&gt;</code> - Number of blocks since signature confirmation, null if rooted, as well as finalized by a supermajority of the cluster</li><li><code>err: &lt;object | null&gt;</code> - Error if transaction failed, null if transaction succeeded. <a href="" target="_blank" rel="noopener noreferrer">TransactionError definitions</a></li><li><code>confirmationStatus: &lt;string | null&gt;</code> - The transaction's cluster confirmation status; either <code>processed</code>, <code>confirmed</code>, or <code>finalized</code>. See <a href="">Commitment</a> for more on optimistic confirmation.</li><li>DEPRECATED: <code>status: &lt;object&gt;</code> - Transaction status<ul><li><code>"Ok": &lt;null&gt;</code> - Transaction was successful</li><li><code>"Err": &lt;ERR&gt;</code> - Transaction failed with TransactionError</li></ul></li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-19"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString77}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString78}
                </SyntaxHighlighter>

                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-19"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString79}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString80}
                </SyntaxHighlighter>

                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getslot"></a>getSlot<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns the slot that has reached the <a href="">given or default commitment level</a></p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-30"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following fields:<ul><li>(optional) <code>commitment: &lt;string&gt;</code> - <a href="">Commitment</a></li><li>(optional) <code>minContextSlot: &lt;number&gt;</code> - set the minimum slot that the request can be evaluated at.</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-32"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;u64&gt;</code> - Current slot</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-19"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString81}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString82}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getslotleader"></a>getSlotLeader<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns the current slot leader</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-31"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following fields:<ul><li>(optional) <code>commitment: &lt;string&gt;</code> - <a href="">Commitment</a></li><li>(optional) <code>minContextSlot: &lt;number&gt;</code> - set the minimum slot that the request can be evaluated at.</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-33"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;string&gt;</code> - Node identity Pubkey as base-58 encoded string</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-19"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",
                }}>
                  {codeString83}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString84}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getslotleaders"></a>getSlotLeaders<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns the slot leaders for a given slot range</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-32"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;u64&gt;</code> - Start slot, as u64 integer</li><li><code>&lt;u64&gt;</code> - Limit, as u64 integer</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-34"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;array[string]&gt;</code> - Node identity public keys as base-58 encoded strings</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-42"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>If the current slot is #99, query the next 10 leaders with the following request:</p>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString85}
                </SyntaxHighlighter>
                <p>Result:</p>
                <p>The first leader returned is the leader for slot #100:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString86}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getstakeactivation"></a>getStakeActivation<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns epoch activation information for a stake account</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-33"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;string&gt;</code> - Pubkey of stake account to query, as base-58 encoded string</li><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following fields:<ul><li>(optional) <code>commitment: &lt;string&gt;</code> - <a href="">Commitment</a></li><li>(optional) <code>epoch: &lt;u64&gt;</code> - epoch for which to calculate activation details. If parameter not provided, defaults to current epoch.</li><li>(optional) <code>minContextSlot: &lt;number&gt;</code> - set the minimum slot that the request can be evaluated at.</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-35"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The result will be a JSON object with the following fields:</p>
                <ul><li><code>state: &lt;string</code> - the stake account's activation state, one of: <code>active</code>, <code>inactive</code>, <code>activating</code>, <code>deactivating</code></li><li><code>active: &lt;u64&gt;</code> - stake active during the epoch</li><li><code>inactive: &lt;u64&gt;</code> - stake inactive during the epoch</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-42"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString87}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString88}
                </SyntaxHighlighter>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-42"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString89}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString90}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getsupply"></a>getSupply<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns information about the current supply.</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-34"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following optional fields:<ul><li>(optional) <a href="">Commitment</a></li><li>(optional) <code>excludeNonCirculatingAccountsList: &lt;bool&gt;</code> - exclude non circulating accounts list from response</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-36"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The result will be an RpcResponse JSON object with <code>value</code> equal to a JSON object containing:</p>
                <ul><li><code>total: &lt;u64&gt;</code> - Total supply in lamports</li><li><code>circulating: &lt;u64&gt;</code> - Circulating supply in lamports</li><li><code>nonCirculating: &lt;u64&gt;</code> - Non-circulating supply in lamports</li><li><code>nonCirculatingAccounts: &lt;array&gt;</code> - an array of account addresses of non-circulating accounts, as strings. If <code>excludeNonCirculatingAccountsList</code> is enabled, the returned array will be empty.</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-42"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString91}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString92}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="gettokenaccountbalance"></a>getTokenAccountBalance<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns the token balance of an SPL Token account.</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-35"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;string&gt;</code> - Pubkey of Token account to query, as base-58 encoded string</li><li><code>&lt;object&gt;</code> - (optional) <a href="">Commitment</a></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-37"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The result will be an RpcResponse JSON object with <code>value</code> equal to a JSON object containing:</p>
                <ul><li><code>amount: &lt;string&gt;</code> - the raw balance without decimals, a string representation of u64</li><li><code>decimals: &lt;u8&gt;</code> - number of base 10 digits to the right of the decimal place</li><li><code>uiAmount: &lt;number | null&gt;</code> - the balance, using mint-prescribed decimals <strong>DEPRECATED</strong></li><li><code>uiAmountString: &lt;string&gt;</code> - the balance as a string, using mint-prescribed decimals</li></ul>
                <p>For more details on returned data: The
                  <a href="">Token Balances Structure</a> response from <a href="">getBlock</a> follows a similar structure.</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-42"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString93}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString94}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="gettokenaccountsbydelegate"></a>getTokenAccountsByDelegate<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns all SPL Token accounts by approved Delegate.</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-36"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;string&gt;</code> - Pubkey of account delegate to query, as base-58 encoded string</li><li><code>&lt;object&gt;</code> - Either:<ul><li><code>mint: &lt;string&gt;</code> - Pubkey of the specific token Mint to limit accounts to, as base-58 encoded string; or</li><li><code>programId: &lt;string&gt;</code> - Pubkey of the Token program that owns the accounts, as base-58 encoded string</li></ul></li><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following fields:<ul><li>(optional) <code>commitment: &lt;string&gt;</code> - <a href="">Commitment</a></li><li>(optional) <code>encoding: &lt;string&gt;</code> - encoding for Account data, either "base58" (<em>slow</em>), "base64", "base64+zstd", or "jsonParsed".
                  "base58" is limited to Account data of less than 129 bytes.
                  "base64" will return base64 encoded data for Account data of any size.
                  "base64+zstd" compresses the Account data using <a href="" target="_blank" rel="noopener noreferrer">Zstandard</a> and base64-encodes the result.
                  "jsonParsed" encoding attempts to use program-specific state parsers to return more human-readable and explicit account state data. If "jsonParsed" is requested but a parser cannot be found, the field falls back to "base64" encoding, detectable when the <code>data</code> field is type <code>&lt;string&gt;</code>.</li><li>(optional) <code>dataSlice: &lt;object&gt;</code> - limit the returned account data using the provided <code>offset: &lt;usize&gt;</code> and <code>length: &lt;usize&gt;</code> fields; only available for "base58", "base64" or "base64+zstd" encodings.</li><li>(optional) <code>minContextSlot: &lt;number&gt;</code> - set the minimum slot that the request can be evaluated at.</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-38"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The result will be an RpcResponse JSON object with <code>value</code> equal to an array of JSON objects, which will contain:</p>
                <ul><li><code>pubkey: &lt;string&gt;</code> - the account Pubkey as base-58 encoded string</li><li><code>account: &lt;object&gt;</code> - a JSON object, with the following sub fields:<ul><li><code>lamports: &lt;u64&gt;</code>, number of lamports assigned to this account, as a u64</li><li><code>owner: &lt;string&gt;</code>, base-58 encoded Pubkey of the program this account has been assigned to</li><li><code>data: &lt;object&gt;</code>, Token state data associated with the account, either as encoded binary data or in JSON format <code>&lt;program&gt;: &lt;state&gt;</code></li><li><code>executable: &lt;bool&gt;</code>, boolean indicating if the account contains a program (and is strictly read-only)</li><li><code>rentEpoch: &lt;u64&gt;</code>, the epoch at which this account will next owe rent, as u64</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-42"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString95}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString96}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="gettokenaccountsbyowner"></a>getTokenAccountsByOwner<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns all SPL Token accounts by token owner.</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-37"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;string&gt;</code> - Pubkey of account owner to query, as base-58 encoded string</li><li><code>&lt;object&gt;</code> - Either:<ul><li><code>mint: &lt;string&gt;</code> - Pubkey of the specific token Mint to limit accounts to, as base-58 encoded string; or</li><li><code>programId: &lt;string&gt;</code> - Pubkey of the Token program that owns the accounts, as base-58 encoded string</li></ul></li><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following fields:<ul><li>(optional) <code>commitment: &lt;string&gt;</code> - <a href="">Commitment</a></li><li>(optional) <code>encoding: &lt;string&gt;</code> - encoding for Account data, either "base58" (<em>slow</em>), "base64", "base64+zstd", or "jsonParsed".
                  "base58" is limited to Account data of less than 129 bytes.
                  "base64" will return base64 encoded data for Account data of any size.
                  "base64+zstd" compresses the Account data using <a href="" target="_blank" rel="noopener noreferrer">Zstandard</a> and base64-encodes the result.
                  "jsonParsed" encoding attempts to use program-specific state parsers to return more human-readable and explicit account state data. If "jsonParsed" is requested but a parser cannot be found, the field falls back to "base64" encoding, detectable when the <code>data</code> field is type <code>&lt;string&gt;</code>.</li><li>(optional) <code>dataSlice: &lt;object&gt;</code> - limit the returned account data using the provided <code>offset: &lt;usize&gt;</code> and <code>length: &lt;usize&gt;</code> fields; only available for "base58", "base64" or "base64+zstd" encodings.</li><li>(optional) <code>minContextSlot: &lt;number&gt;</code> - set the minimum slot that the request can be evaluated at.</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-39"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The result will be an RpcResponse JSON object with <code>value</code> equal to an array of JSON objects, which will contain:</p>
                <ul><li><code>pubkey: &lt;string&gt;</code> - the account Pubkey as base-58 encoded string</li><li><code>account: &lt;object&gt;</code> - a JSON object, with the following sub fields:<ul><li><code>lamports: &lt;u64&gt;</code>, number of lamports assigned to this account, as a u64</li><li><code>owner: &lt;string&gt;</code>, base-58 encoded Pubkey of the program this account has been assigned to</li><li><code>data: &lt;object&gt;</code>, Token state data associated with the account, either as encoded binary data or in JSON format <code>&lt;program&gt;: &lt;state&gt;</code></li><li><code>executable: &lt;bool&gt;</code>, boolean indicating if the account contains a program (and is strictly read-only)</li><li><code>rentEpoch: &lt;u64&gt;</code>, the epoch at which this account will next owe rent, as u64</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-42"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString97}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString98}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="gettokenlargestaccounts"></a>getTokenLargestAccounts<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns the 20 largest accounts of a particular SPL Token type.</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-38"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;string&gt;</code> - Pubkey of token Mint to query, as base-58 encoded string</li><li><code>&lt;object&gt;</code> - (optional) <a href="">Commitment</a></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-40"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The result will be an RpcResponse JSON object with <code>value</code> equal to an array of JSON objects containing:</p>
                <ul><li><code>address: &lt;string&gt;</code> - the address of the token account</li><li><code>amount: &lt;string&gt;</code> - the raw token account balance without decimals, a string representation of u64</li><li><code>decimals: &lt;u8&gt;</code> - number of base 10 digits to the right of the decimal place</li><li><code>uiAmount: &lt;number | null&gt;</code> - the token account balance, using mint-prescribed decimals <strong>DEPRECATED</strong></li><li><code>uiAmountString: &lt;string&gt;</code> - the token account balance as a string, using mint-prescribed decimals</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-42"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString99}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString100}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="gettokensupply"></a>getTokenSupply<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns the total supply of an SPL Token type.</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-39"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;string&gt;</code> - Pubkey of token Mint to query, as base-58 encoded string</li><li><code>&lt;object&gt;</code> - (optional) <a href="">Commitment</a></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-41"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The result will be an RpcResponse JSON object with <code>value</code> equal to a JSON object containing:</p>
                <ul><li><code>amount: &lt;string&gt;</code> - the raw total token supply without decimals, a string representation of u64</li><li><code>decimals: &lt;u8&gt;</code> - number of base 10 digits to the right of the decimal place</li><li><code>uiAmount: &lt;number | null&gt;</code> - the total token supply, using mint-prescribed decimals <strong>DEPRECATED</strong></li><li><code>uiAmountString: &lt;string&gt;</code> - the total token supply as a string, using mint-prescribed decimals</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-42"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString101}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString102}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="gettransaction"></a>getTransaction<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns transaction details for a confirmed transaction</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-40"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;string&gt;</code> - transaction signature as base-58 encoded string</li><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following optional fields:<ul><li>(optional) <code>encoding: &lt;string&gt;</code> - encoding for each returned Transaction, either "json", "jsonParsed", "base58" (<em>slow</em>), "base64". If parameter not provided, the default encoding is "json".
                  "jsonParsed" encoding attempts to use program-specific instruction parsers to return more human-readable and explicit data in the <code>transaction.message.instructions</code> list. If "jsonParsed" is requested but a parser cannot be found, the instruction falls back to regular JSON encoding (<code>accounts</code>, <code>data</code>, and <code>programIdIndex</code> fields).</li><li>(optional) <a href="">Commitment</a>; "processed" is not supported. If parameter not provided, the default is "finalized".</li><li>(optional) <code>maxSupportedTransactionVersion: &lt;number&gt;</code> - set the max transaction version to return in responses. If the requested transaction is a higher version, an error will be returned.</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-42"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;null&gt;</code> - if transaction is not found or not confirmed</li><li><code>&lt;object&gt;</code> - if transaction is confirmed, an object with the following fields:<ul><li><code>slot: &lt;u64&gt;</code> - the slot this transaction was processed in</li><li><code>transaction: &lt;object|[string,encoding]&gt;</code> - <a href="">Transaction</a> object, either in JSON format or encoded binary data, depending on encoding parameter</li><li><code>blockTime: &lt;i64 | null&gt;</code> - estimated production time, as Unix timestamp (seconds since the Unix epoch) of when the transaction was processed. null if not available</li><li><code>meta: &lt;object | null&gt;</code> - transaction status metadata object:<ul><li><code>err: &lt;object | null&gt;</code> - Error if transaction failed, null if transaction succeeded. <a href="" target="_blank" rel="noopener noreferrer">TransactionError definitions</a></li><li><code>fee: &lt;u64&gt;</code> - fee this transaction was charged, as u64 integer</li><li><code>preBalances: &lt;array&gt;</code> - array of u64 account balances from before the transaction was processed</li><li><code>postBalances: &lt;array&gt;</code> - array of u64 account balances after the transaction was processed</li><li><code>innerInstructions: &lt;array|null&gt;</code> - List of <a href="">inner instructions</a> or <code>null</code> if inner instruction recording was not enabled during this transaction</li><li><code>preTokenBalances: &lt;array|undefined&gt;</code> - List of <a href="">token balances</a> from before the transaction was processed or omitted if token balance recording was not yet enabled during this transaction</li><li><code>postTokenBalances: &lt;array|undefined&gt;</code> - List of <a href="">token balances</a> from after the transaction was processed or omitted if token balance recording was not yet enabled during this transaction</li><li><code>logMessages: &lt;array|null&gt;</code> - array of string log messages or <code>null</code> if log message recording was not enabled during this transaction</li><li>DEPRECATED: <code>status: &lt;object&gt;</code> - Transaction status<ul><li><code>"Ok": &lt;null&gt;</code> - Transaction was successful</li><li><code>"Err": &lt;ERR&gt;</code> - Transaction failed with TransactionError</li></ul></li><li><code>rewards: &lt;array&gt;</code> - present if rewards are requested; an array of JSON objects containing:<ul><li><code>pubkey: &lt;string&gt;</code> - The public key, as base-58 encoded string, of the account that received the reward</li><li><code>lamports: &lt;i64&gt;</code>- number of reward lamports credited or debited by the account, as a i64</li><li><code>postBalance: &lt;u64&gt;</code> - account balance in lamports after the reward was applied</li><li><code>rewardType: &lt;string&gt;</code> - type of reward: currently only "rent", other types may be added in the future</li><li><code>commission: &lt;u8|undefined&gt;</code> - vote account commission when the reward was credited, only present for voting and staking rewards</li></ul></li><li><code>loadedAddresses: &lt;object|undefined&gt;</code> - Transaction addresses loaded from address lookup tables. Undefined if <code>maxSupportedTransactionVersion</code> is not set in request params.<ul><li><code>writable: &lt;array[string]&gt;</code> - Ordered list of base-58 encoded addresses for writable loaded accounts</li><li><code>readonly: &lt;array[string]&gt;</code> - Ordered list of base-58 encoded addresses for readonly loaded accounts</li></ul></li></ul></li><li><code>version: &lt;"legacy"|number|undefined&gt;</code> - Transaction version. Undefined if <code>maxSupportedTransactionVersion</code> is not set in request params.</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-42"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString103}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString104}
                </SyntaxHighlighter>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-42"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString105}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString106}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="gettransactioncount"></a>getTransactionCount<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns the current Transaction count from the ledger</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-41"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following fields:<ul><li>(optional) <code>commitment: &lt;string&gt;</code> - <a href="">Commitment</a></li><li>(optional) <code>minContextSlot: &lt;number&gt;</code> - set the minimum slot that the request can be evaluated at.</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-43"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;u64&gt;</code> - count</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-42"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString107}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString108}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getversion"></a>getVersion<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns the current En Comt versions running on the node</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-42"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>None</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-44"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The result field will be a JSON object with the following fields:</p>
                <ul><li><code>En Comt-core</code>, software version of En Comt-core</li><li><code>feature-set</code>, unique identifier of the current software's feature set</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-42"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString109}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString110}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getvoteaccounts"></a>getVoteAccounts<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns the account info and associated stake for all the voting accounts in the current bank.</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-43"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following field:<ul><li>(optional) <a href="">Commitment</a></li><li>(optional) <code>votePubkey: &lt;string&gt;</code> - Only return results for this validator vote address (base-58 encoded)</li><li>(optional) <code>keepUnstakedDelinquents: &lt;bool&gt;</code> - Do not filter out delinquent validators with no stake</li><li>(optional) <code>delinquentSlotDistance: &lt;u64&gt;</code> - Specify the number of slots behind the tip that a validator must fall to be considered delinquent. <strong>NOTE:</strong> For the sake of consistency between ecosystem products, <em>it is <strong>not</strong> recommended that this argument be specified.</em></li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-45"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The result field will be a JSON object of <code>current</code> and <code>delinquent</code> accounts,
                  each containing an array of JSON objects with the following sub fields:</p>
                <ul><li><code>votePubkey: &lt;string&gt;</code> - Vote account address, as base-58 encoded string</li><li><code>nodePubkey: &lt;string&gt;</code> - Validator identity, as base-58 encoded string</li><li><code>activatedStake: &lt;u64&gt;</code> - the stake, in lamports, delegated to this vote account and active in this epoch</li><li><code>epochVoteAccount: &lt;bool&gt;</code> - bool, whether the vote account is staked for this epoch</li><li><code>commission: &lt;number&gt;</code>, percentage (0-100) of rewards payout owed to the vote account</li><li><code>lastVote: &lt;u64&gt;</code> - Most recent slot voted on by this vote account</li><li><code>epochCredits: &lt;array&gt;</code> - History of how many credits earned by the end of each epoch, as an array of arrays containing: <code>[epoch, credits, previousCredits]</code></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-42"></a>Example:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString111}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString112}
                </SyntaxHighlighter>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString113}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString114}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="isblockhashvalid"></a>isBlockhashValid<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p><strong>NEW: This method is only available in En Comt-core v1.9 or newer. Please use
                  <a href="">getFeeCalculatorForBlockhash</a> for En Comt-core v1.8</strong></p>
                <p>Returns whether a blockhash is still valid or not</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>blockhash: &lt;string&gt;</code> - the blockhash of this block, as base-58 encoded string</li><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following fields:<ul><li>(optional) <code>commitment: &lt;string&gt;</code> - <a href="">Commitment</a> (used for retrieving blockhash)</li><li>(optional) <code>minContextSlot: &lt;number&gt;</code> - set the minimum slot that the request can be evaluated at.</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;bool&gt;</code> - True if the blockhash is still valid</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString115}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString116}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="minimumledgerslot"></a>minimumLedgerSlot<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns the lowest slot that the node has information about in its ledger. This
                  value may increase over time if the node is configured to purge older ledger data</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>None</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>u64</code> - Minimum ledger slot</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>

                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString117}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString118}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="requestairdrop"></a>requestAirdrop<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Requests an airdrop of lamports to a Pubkey</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;string&gt;</code> - Pubkey of account to receive lamports, as base-58 encoded string</li><li><code>&lt;integer&gt;</code> - lamports, as a u64</li><li><code>&lt;object&gt;</code> - (optional) <a href="">Commitment</a> (used for retrieving blockhash and verifying airdrop success)</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;string&gt;</code> - Transaction Signature of airdrop, as base-58 encoded string</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString119}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString120}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="sendtransaction"></a>sendTransaction<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Submits a signed transaction to the cluster for processing.</p>
                <p>This method does not alter the transaction in any way; it relays the
                  transaction created by clients to the node as-is.</p>
                <p>If the node's rpc service receives the transaction, this method immediately
                  succeeds, without waiting for any confirmations. A successful response from
                  this method does not guarantee the transaction is processed or confirmed by the
                  cluster.</p>
                <p>While the rpc service will reasonably retry to submit it, the transaction
                  could be rejected if transaction's <code>recent_blockhash</code> expires before it lands.</p>
                <p>Use <a href=""><code>getSignatureStatuses</code></a> to ensure
                  a transaction is processed and confirmed.</p>
                <p>Before submitting, the following preflight checks are performed:</p>
                <ol><li>The transaction signatures are verified</li><li>The transaction is simulated against the bank slot specified by the preflight
                  commitment. On failure an error will be returned. Preflight checks may be
                  disabled if desired. It is recommended to specify the same commitment and
                  preflight commitment to avoid confusing behavior.</li></ol>
                <p>The returned signature is the first signature in the transaction, which
                  is used to identify the transaction (<a href="">transaction id</a>).
                  This identifier can be easily extracted from the transaction data before
                  submission.</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;string&gt;</code> - fully-signed Transaction, as encoded string</li><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following field:<ul><li><code>skipPreflight: &lt;bool&gt;</code> - if true, skip the preflight transaction checks (default: false)</li><li><code>preflightCommitment: &lt;string&gt;</code> - (optional) <a href="">Commitment</a> level to use for preflight (default: <code>"finalized"</code>).</li><li><code>encoding: &lt;string&gt;</code> - (optional) Encoding used for the transaction data. Either <code>"base58"</code> (<em>slow</em>, <strong>DEPRECATED</strong>), or <code>"base64"</code>. (default: <code>"base58"</code>).</li><li><code>maxRetries: &lt;usize&gt;</code> - (optional) Maximum number of times for the RPC node to retry sending the transaction to the leader.
                  If this parameter not provided, the RPC node will retry the transaction until it is finalized or until the blockhash expires.</li><li>(optional) <code>minContextSlot: &lt;number&gt;</code> - set the minimum slot that the request can be evaluated at.</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;string&gt;</code> - First Transaction Signature embedded in the transaction, as base-58 encoded string (<a href="">transaction id</a>)</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString121}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString122}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="simulatetransaction"></a>simulateTransaction<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Simulate sending a transaction</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;string&gt;</code> - Transaction, as an encoded string. The transaction must have a valid blockhash, but is not required to be signed.</li><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following fields:<ul><li><code>sigVerify: &lt;bool&gt;</code> - if true the transaction signatures will be verified (default: false, conflicts with <code>replaceRecentBlockhash</code>)</li><li><code>commitment: &lt;string&gt;</code> - (optional) <a href="">Commitment</a> level to simulate the transaction at (default: <code>"finalized"</code>).</li><li><code>encoding: &lt;string&gt;</code> - (optional) Encoding used for the transaction data. Either <code>"base58"</code> (<em>slow</em>, <strong>DEPRECATED</strong>), or <code>"base64"</code>. (default: <code>"base58"</code>).</li><li><code>replaceRecentBlockhash: &lt;bool&gt;</code> - (optional) if true the transaction recent blockhash will be replaced with the most recent blockhash.
                  (default: false, conflicts with <code>sigVerify</code>)</li><li><code>accounts: &lt;object&gt;</code> - (optional) Accounts configuration object containing the following fields:<ul><li><code>encoding: &lt;string&gt;</code> - (optional) encoding for returned Account data, either "base64" (default), "base64+zstd" or "jsonParsed".
                    "jsonParsed" encoding attempts to use program-specific state parsers to return more human-readable and explicit account state data. If "jsonParsed" is requested but a parser cannot be found, the field falls back to binary encoding, detectable when the <code>data</code> field is type <code>&lt;string&gt;</code>.</li><li><code>addresses: &lt;array&gt;</code> - An array of accounts to return, as base-58 encoded strings</li></ul></li><li>(optional) <code>minContextSlot: &lt;number&gt;</code> - set the minimum slot that the request can be evaluated at.</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>An RpcResponse containing a TransactionStatus object
                  The result will be an RpcResponse JSON object with <code>value</code> set to a JSON object with the following fields:</p>
                <ul><li><code>err: &lt;object | string | null&gt;</code> - Error if transaction failed, null if transaction succeeded. <a href="" target="_blank" rel="noopener noreferrer">TransactionError definitions</a></li><li><code>logs: &lt;array | null&gt;</code> - Array of log messages the transaction instructions output during execution, null if simulation failed before the transaction was able to execute (for example due to an invalid blockhash or signature verification failure)</li><li><code>accounts: &lt;array&gt; | null&gt;</code> - array of accounts with the same length as the <code>accounts.addresses</code> array in the request
                  <ul><li><code>&lt;null&gt;</code> - if the account doesn't exist or if <code>err</code> is not null</li><li><code>&lt;object&gt;</code> - otherwise, a JSON object containing:<ul><li><code>lamports: &lt;u64&gt;</code>, number of lamports assigned to this account, as a u64</li><li><code>owner: &lt;string&gt;</code>, base-58 encoded Pubkey of the program this account has been assigned to</li><li><code>data: &lt;[string, encoding]|object&gt;</code>, data associated with the account, either as encoded binary data or JSON format <code>&lt;program&gt;: &lt;state&gt;</code>, depending on encoding parameter</li><li><code>executable: &lt;bool&gt;</code>, boolean indicating if the account contains a program (and is strictly read-only)</li><li><code>rentEpoch: &lt;u64&gt;</code>, the epoch at which this account will next owe rent, as u64</li></ul></li></ul></li><li><code>unitsConsumed: &lt;u64 | undefined&gt;</code>, The number of compute budget units consumed during the processing of this transaction</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString123}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString124}
                </SyntaxHighlighter>
                <h2><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="subscription-websocket"></a>Subscription Websocket<a className="hash-link" href="" title="Direct link to heading">#</a></h2>
                <p>After connecting to the RPC PubSub websocket at <code>ws://&lt;ADDRESS&gt;/</code>:</p>
                <ul><li>Submit subscription requests to the websocket using the methods below</li><li>Multiple subscriptions may be active at once</li><li>Many subscriptions take the optional <a href=""><code>commitment</code> parameter</a>, defining how finalized a change should be to trigger a notification. For subscriptions, if commitment is unspecified, the default value is <code>"finalized"</code>.</li></ul>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="accountsubscribe"></a>accountSubscribe<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Subscribe to an account to receive notifications when the lamports or data for a given account public key changes</p>

                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;string&gt;</code> - account Pubkey, as base-58 encoded string</li><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following optional fields:<ul><li><code>&lt;object&gt;</code> - (optional) <a href="">Commitment</a></li><li><code>encoding: &lt;string&gt;</code> - encoding for Account data, either "base58" (<em>slow</em>), "base64", "base64+zstd" or "jsonParsed".
                  "jsonParsed" encoding attempts to use program-specific state parsers to return more human-readable and explicit account state data. If "jsonParsed" is requested but a parser cannot be found, the field falls back to binary encoding, detectable when the <code>data</code> field is type <code>&lt;string&gt;</code>.</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;number&gt;</code> - Subscription id (needed to unsubscribe)</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString125}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString126}
                </SyntaxHighlighter>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="notification-format"></a>Notification Format:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The notification format is the same as seen in the <a href="">getAccountInfo</a> RPC HTTP method.</p>
                <p>Base58 encoding:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString127}
                </SyntaxHighlighter>
                <p>Parsed-JSON encoding:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString128}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="accountunsubscribe"></a>accountUnsubscribe<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Unsubscribe from account change notifications</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;number&gt;</code> - id of account Subscription to cancel</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;bool&gt;</code> - unsubscribe success message</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString129}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString130}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="blocksubscribe---unstable-disabled-by-default"></a>blockSubscribe - Unstable, disabled by default<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p><strong>This subscription is unstable and only available if the validator was started
                  with the <code>--rpc-pubsub-enable-block-subscription</code> flag. The format of this
                  subscription may change in the future</strong></p>
                <p>Subscribe to receive notification anytime a new block is Confirmed or Finalized.</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>filter: &lt;string&gt;|&lt;object&gt;</code> - filter criteria for the logs to receive results by account type; currently supported:<ul><li>"all" - include all transactions in block</li><li><code> "mentionsAccountOrProgram": &lt;string&gt; </code> - return only transactions that mention the provided public key (as base-58 encoded string). If no mentions in a given block, then no notification will be sent.</li></ul></li><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following optional fields:<ul><li>(optional) <a href="">Commitment</a></li><li>(optional) <code>encoding: &lt;string&gt;</code> - encoding for Account data, either "base58" (<em>slow</em>), "base64", "base64+zstd" or "jsonParsed".
                  "jsonParsed" encoding attempts to use program-specific state parsers to return more human-readable and explicit account state data. If "jsonParsed" is requested but a parser cannot be found, the field falls back to base64 encoding, detectable when the <code>data</code> field is type <code>&lt;string&gt;</code>. Default is "base64".</li><li>(optional) <code>transactionDetails: &lt;string&gt;</code> - level of transaction detail to return, either "full", "signatures", or "none". If parameter not provided, the default detail level is "full".</li><li>(optional) <code>showRewards: bool</code> - whether to populate the <code>rewards</code> array. If parameter not provided, the default includes rewards.</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>integer</code> - subscription id (needed to unsubscribe)</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString131}
                </SyntaxHighlighter>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString132}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString133}
                </SyntaxHighlighter>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="notification-format-1"></a>Notification Format:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The notification will be an object with the following fields:</p>
                <p>-<code>slot: &lt;u64&gt;</code> - The corresponding slot.</p>
                <ul><li><code>err: &lt;object | null&gt;</code> - Error if something went wrong publishing the notification otherwise null.</li><li><code>block: &lt;object | null&gt;</code> - A block object as seen in the <a href="">getBlock</a> RPC HTTP method.</li></ul>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString134}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="blockunsubscribe"></a>blockUnsubscribe<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Unsubscribe from block notifications</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;integer&gt;</code> - subscription id to cancel</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;bool&gt;</code> - unsubscribe success message</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString135}
                </SyntaxHighlighter>
                <p>Response:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString136}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="logssubscribe"></a>logsSubscribe<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Subscribe to transaction logging</p>

                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>filter: &lt;string&gt;|&lt;object&gt;</code> - filter criteria for the logs to receive results by account type; currently supported:<ul><li>"all" - subscribe to all transactions except for simple vote transactions</li><li>"allWithVotes" - subscribe to all transactions including simple vote transactions</li><li><code> "mentions": [ &lt;string&gt; ] </code> - subscribe to all transactions that mention the provided Pubkey (as base-58 encoded string)</li></ul></li><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following optional fields:<ul><li>(optional) <a href="">Commitment</a></li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;integer&gt;</code> - Subscription id (needed to unsubscribe)</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString137}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString138}
                </SyntaxHighlighter>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="notification-format-2"></a>Notification Format:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The notification will be an RpcResponse JSON object with value equal to:</p>
                <ul><li><code>signature: &lt;string&gt;</code> - The transaction signature base58 encoded.</li><li><code>err: &lt;object | null&gt;</code> - Error if transaction failed, null if transaction succeeded. <a href="" target="_blank" rel="noopener noreferrer">TransactionError definitions</a></li><li><code>logs: &lt;array | null&gt;</code> - Array of log messages the transaction instructions output during execution, null if simulation failed before the transaction was able to execute (for example due to an invalid blockhash or signature verification failure)</li></ul>
                <p>Example:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString139}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="logsunsubscribe"></a>logsUnsubscribe<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Unsubscribe from transaction logging</p>

                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;integer&gt;</code> - id of subscription to cancel</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;bool&gt;</code> - unsubscribe success message</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString140}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString141}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="programsubscribe"></a>programSubscribe<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Subscribe to a program to receive notifications when the lamports or data for a given account owned by the program changes</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;string&gt;</code> - program_id Pubkey, as base-58 encoded string</li><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following optional fields:<ul><li>(optional) <a href="">Commitment</a></li><li><code>encoding: &lt;string&gt;</code> - encoding for Account data, either "base58" (<em>slow</em>), "base64", "base64+zstd" or "jsonParsed".
                  "jsonParsed" encoding attempts to use program-specific state parsers to return more human-readable and explicit account state data. If "jsonParsed" is requested but a parser cannot be found, the field falls back to base64 encoding, detectable when the <code>data</code> field is type <code>&lt;string&gt;</code>.</li><li>(optional) <code>filters: &lt;array&gt;</code> - filter results using various <a href="">filter objects</a>; account must meet all filter criteria to be included in results</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;integer&gt;</code> - Subscription id (needed to unsubscribe)</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString142}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString143}
                </SyntaxHighlighter>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="notification-format-3"></a>Notification Format:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The notification format is a <b>single</b> program account object as seen in the <a href="">getProgramAccounts</a> RPC HTTP method.</p>
                <p>Base58 encoding:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString144}
                </SyntaxHighlighter>
                <p>Parsed-JSON encoding:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString145}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="programunsubscribe"></a>programUnsubscribe<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Unsubscribe from program-owned account change notifications</p>

                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;integer&gt;</code> - id of account Subscription to cancel</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;bool&gt;</code> - unsubscribe success message</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString146}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString147}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="signaturesubscribe"></a>signatureSubscribe<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Subscribe to a transaction signature to receive notification when the transaction is confirmed On <code>signatureNotification</code>, the subscription is automatically cancelled</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;string&gt;</code> - Transaction Signature, as base-58 encoded string</li><li><code>&lt;object&gt;</code> - (optional) <a href="">Commitment</a></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>integer</code> - subscription id (needed to unsubscribe)</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString148}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString149}
                </SyntaxHighlighter>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="notification-format-4"></a>Notification Format:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The notification will be an RpcResponse JSON object with value containing an object with:</p>
                <ul><li><code>err: &lt;object | null&gt;</code> - Error if transaction failed, null if transaction succeeded. <a href="" target="_blank" rel="noopener noreferrer">TransactionError definitions</a></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>

                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString150}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="signatureunsubscribe"></a>signatureUnsubscribe<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Unsubscribe from signature confirmation notification</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;integer&gt;</code> - subscription id to cancel</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;bool&gt;</code> - unsubscribe success message</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString151}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString152}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="slotsubscribe"></a>slotSubscribe<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Subscribe to receive notification anytime a slot is processed by the validator</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>None</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>integer</code> - subscription id (needed to unsubscribe)</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString153}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString154}
                </SyntaxHighlighter>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="notification-format-5"></a>Notification Format:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The notification will be an object with the following fields:</p>
                <ul><li><code>parent: &lt;u64&gt;</code> - The parent slot</li><li><code>root: &lt;u64&gt;</code> - The current root slot</li><li><code>slot: &lt;u64&gt;</code> - The newly set slot value</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>

                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString155}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="slotunsubscribe"></a>slotUnsubscribe<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Unsubscribe from slot notifications</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;integer&gt;</code> - subscription id to cancel</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;bool&gt;</code> - unsubscribe success message</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString156}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString157}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="slotsupdatessubscribe---unstable"></a>slotsUpdatesSubscribe - Unstable<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p><strong>This subscription is unstable; the format of this subscription may change in
                  the future and it may not always be supported</strong></p>
                <p>Subscribe to receive a notification from the validator on a variety of updates
                  on every slot</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>None</p>

                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>integer</code> - subscription id (needed to unsubscribe)</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString158}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString159}
                </SyntaxHighlighter>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="notification-format-6"></a>Notification Format:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The notification will be an object with the following fields:</p>
                <ul><li><code>parent: &lt;u64&gt;</code> - The parent slot</li><li><code>slot: &lt;u64&gt;</code> - The newly updated slot</li><li><code>timestamp: &lt;i64&gt;</code> - The Unix timestamp of the update</li><li><code>type: &lt;string&gt;</code> - The update type, one of:<ul><li>"firstShredReceived"</li><li>"completed"</li><li>"createdBank"</li><li>"frozen"</li><li>"dead"</li><li>"optimisticConfirmation"</li><li>"root"</li></ul></li></ul>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString160}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="slotsupdatesunsubscribe"></a>slotsUpdatesUnsubscribe<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Unsubscribe from slot-update notifications</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;integer&gt;</code> - subscription id to cancel</li></ul>

                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;bool&gt;</code> - unsubscribe success message</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString161}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString162}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="rootsubscribe"></a>rootSubscribe<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Subscribe to receive notification anytime a new root is set by the validator.</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>None</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>integer</code> - subscription id (needed to unsubscribe)</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString163}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString164}
                </SyntaxHighlighter>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="notification-format-7"></a>Notification Format:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The result is the latest root slot number.</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString165}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="rootunsubscribe"></a>rootUnsubscribe<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Unsubscribe from root notifications</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;integer&gt;</code> - subscription id to cancel</li></ul>

                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;bool&gt;</code> - unsubscribe success message</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString166}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString167}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="votesubscribe---unstable-disabled-by-default"></a>voteSubscribe - Unstable, disabled by default<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p><strong>This subscription is unstable and only available if the validator was started
                  with the <code>--rpc-pubsub-enable-vote-subscription</code> flag. The format of this
                  subscription may change in the future</strong></p>
                <p>Subscribe to receive notification anytime a new vote is observed in gossip.
                  These votes are pre-consensus therefore there is no guarantee these votes will
                  enter the ledger.</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>None</p>

                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>integer</code> - subscription id (needed to unsubscribe)</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString168}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString169}
                </SyntaxHighlighter>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="notification-format-8"></a>Notification Format:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The notification will be an object with the following fields:</p>
                <ul><li><code>hash: &lt;string&gt;</code> - The vote hash</li><li><code>slots: &lt;array&gt;</code> - The slots covered by the vote, as an array of u64 integers</li><li><code>timestamp: &lt;i64 | null&gt;</code> - The timestamp of the vote</li><li><code>signature: &lt;string&gt;</code> - The signature of the transaction that contained this vote</li></ul>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString170}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="voteunsubscribe"></a>voteUnsubscribe<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Unsubscribe from vote notifications</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;integer&gt;</code> - subscription id to cancel</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;bool&gt;</code> - unsubscribe success message</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString171}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString172}
                </SyntaxHighlighter>
                <h2><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="json-rpc-api-deprecated-methods"></a>JSON RPC API Deprecated Methods<a className="hash-link" href="" title="Direct link to heading">#</a></h2>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getconfirmedblock"></a>getConfirmedBlock<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p><strong>DEPRECATED: Please use <a href="">getBlock</a> instead</strong>
                  This method is expected to be removed in En Comt-core v2.0</p>
                <p>Returns identity and transaction information about a confirmed block in the ledger</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;u64&gt;</code> - slot, as u64 integer</li><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following optional fields:<ul><li>(optional) <code>encoding: &lt;string&gt;</code> - encoding for each returned Transaction, either "json", "jsonParsed", "base58" (<em>slow</em>), "base64". If parameter not provided, the default encoding is "json".
                  "jsonParsed" encoding attempts to use program-specific instruction parsers to return more human-readable and explicit data in the <code>transaction.message.instructions</code> list. If "jsonParsed" is requested but a parser cannot be found, the instruction falls back to regular JSON encoding (<code>accounts</code>, <code>data</code>, and <code>programIdIndex</code> fields).</li><li>(optional) <code>transactionDetails: &lt;string&gt;</code> - level of transaction detail to return, either "full", "signatures", or "none". If parameter not provided, the default detail level is "full".</li><li>(optional) <code>rewards: bool</code> - whether to populate the <code>rewards</code> array. If parameter not provided, the default includes rewards.</li><li>(optional) <a href="">Commitment</a>; "processed" is not supported. If parameter not provided, the default is "finalized".</li></ul></li></ul>


                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The result field will be an object with the following fields:</p>
                <ul><li><code>&lt;null&gt;</code> - if specified block is not confirmed</li><li><code>&lt;object&gt;</code> - if block is confirmed, an object with the following fields:<ul><li><code>blockhash: &lt;string&gt;</code> - the blockhash of this block, as base-58 encoded string</li><li><code>previousBlockhash: &lt;string&gt;</code> - the blockhash of this block's parent, as base-58 encoded string; if the parent block is not available due to ledger cleanup, this field will return "11111111111111111111111111111111"</li><li><code>parentSlot: &lt;u64&gt;</code> - the slot index of this block's parent</li><li><code>transactions: &lt;array&gt;</code> - present if "full" transaction details are requested; an array of JSON objects containing:<ul><li><code>transaction: &lt;object|[string,encoding]&gt;</code> - <a href="">Transaction</a> object, either in JSON format or encoded binary data, depending on encoding parameter</li><li><code>meta: &lt;object&gt;</code> - transaction status metadata object, containing <code>null</code> or:<ul><li><code>err: &lt;object | null&gt;</code> - Error if transaction failed, null if transaction succeeded. <a href="" target="_blank" rel="noopener noreferrer">TransactionError definitions</a></li><li><code>fee: &lt;u64&gt;</code> - fee this transaction was charged, as u64 integer</li><li><code>preBalances: &lt;array&gt;</code> - array of u64 account balances from before the transaction was processed</li><li><code>postBalances: &lt;array&gt;</code> - array of u64 account balances after the transaction was processed</li><li><code>innerInstructions: &lt;array|null&gt;</code> - List of <a href="">inner instructions</a> or <code>null</code> if inner instruction recording was not enabled during this transaction</li><li><code>preTokenBalances: &lt;array|undefined&gt;</code> - List of <a href="">token balances</a> from before the transaction was processed or omitted if token balance recording was not yet enabled during this transaction</li><li><code>postTokenBalances: &lt;array|undefined&gt;</code> - List of <a href="">token balances</a> from after the transaction was processed or omitted if token balance recording was not yet enabled during this transaction</li><li><code>logMessages: &lt;array|null&gt;</code> - array of string log messages or <code>null</code> if log message recording was not enabled during this transaction</li><li>DEPRECATED: <code>status: &lt;object&gt;</code> - Transaction status<ul><li><code>"Ok": &lt;null&gt;</code> - Transaction was successful</li><li><code>"Err": &lt;ERR&gt;</code> - Transaction failed with TransactionError</li></ul></li></ul></li></ul></li><li><code>signatures: &lt;array&gt;</code> - present if "signatures" are requested for transaction details; an array of signatures strings, corresponding to the transaction order in the block</li><li><code>rewards: &lt;array&gt;</code> - present if rewards are requested; an array of JSON objects containing:<ul><li><code>pubkey: &lt;string&gt;</code> - The public key, as base-58 encoded string, of the account that received the reward</li><li><code>lamports: &lt;i64&gt;</code>- number of reward lamports credited or debited by the account, as a i64</li><li><code>postBalance: &lt;u64&gt;</code> - account balance in lamports after the reward was applied</li><li><code>rewardType: &lt;string|undefined&gt;</code> - type of reward: "fee", "rent", "voting", "staking"</li><li><code>commission: &lt;u8|undefined&gt;</code> - vote account commission when the reward was credited, only present for voting and staking rewards</li></ul></li><li><code>blockTime: &lt;i64 | null&gt;</code> - estimated production time, as Unix timestamp (seconds since the Unix epoch). null if not available</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString173}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString174}
                </SyntaxHighlighter>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString175}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString176}
                </SyntaxHighlighter>
                <p>For more details on returned data:
                  <a href="">Transaction Structure</a>
                  <a href="">Inner Instructions Structure</a>
                  <a href="">Token Balances Structure</a></p>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getconfirmedblocks"></a>getConfirmedBlocks<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p><strong>DEPRECATED: Please use <a href="">getBlocks</a> instead</strong>
                  This method is expected to be removed in En Comt-core v2.0</p>
                <p>Returns a list of confirmed blocks between two slots</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;u64&gt;</code> - start_slot, as u64 integer</li><li><code>&lt;u64&gt;</code> - (optional) end_slot, as u64 integer</li><li>(optional) <a href="">Commitment</a>; "processed" is not supported. If parameter not provided, the default is "finalized".</li></ul>

                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The result field will be an array of u64 integers listing confirmed blocks
                  between <code>start_slot</code> and either <code>end_slot</code>, if provided, or latest confirmed block,
                  inclusive. Max range allowed is 500,000 slots.</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString177}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString178}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getconfirmedblockswithlimit"></a>getConfirmedBlocksWithLimit<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p><strong>DEPRECATED: Please use <a href="">getBlocksWithLimit</a> instead</strong>
                  This method is expected to be removed in En Comt-core v2.0</p>
                <p>Returns a list of confirmed blocks starting at the given slot</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;u64&gt;</code> - start_slot, as u64 integer</li><li><code>&lt;u64&gt;</code> - limit, as u64 integer</li><li>(optional) <a href="">Commitment</a>; "processed" is not supported. If parameter not provided, the default is "finalized".</li></ul>

                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The result field will be an array of u64 integers listing confirmed blocks
                  starting at <code>start_slot</code> for up to <code>limit</code> blocks, inclusive.</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString179}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString180}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getconfirmedsignaturesforaddress2"></a>getConfirmedSignaturesForAddress2<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p><strong>DEPRECATED: Please use <a href="">getSignaturesForAddress</a> instead</strong>
                  This method is expected to be removed in En Comt-core v2.0</p>
                <p>Returns signatures for confirmed transactions that include the given address in
                  their <code>accountKeys</code> list. Returns signatures backwards in time from the
                  provided signature or most recent confirmed block</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;string&gt;</code> - account address as base-58 encoded string</li><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following fields:<ul><li><code>limit: &lt;number&gt;</code> - (optional) maximum transaction signatures to return (between 1 and 1,000, default: 1,000).</li><li><code>before: &lt;string&gt;</code> - (optional) start searching backwards from this transaction signature.
                  If not provided the search starts from the top of the highest max confirmed block.</li><li><code>until: &lt;string&gt;</code> - (optional) search until this transaction signature, if found before limit reached.</li><li>(optional) <a href="">Commitment</a>; "processed" is not supported. If parameter not provided, the default is "finalized".</li></ul></li></ul>

                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The result field will be an array of transaction signature information, ordered
                  from newest to oldest transaction:</p>
                <ul><li><code>&lt;object&gt;</code><ul><li><code>signature: &lt;string&gt;</code> - transaction signature as base-58 encoded string</li><li><code>slot: &lt;u64&gt;</code> - The slot that contains the block with the transaction</li><li><code>err: &lt;object | null&gt;</code> - Error if transaction failed, null if transaction succeeded. <a href="" target="_blank" rel="noopener noreferrer">TransactionError definitions</a></li><li><code>memo: &lt;string |null&gt;</code> - Memo associated with the transaction, null if no memo is present</li><li><code>blockTime: &lt;i64 | null&gt;</code> - estimated production time, as Unix timestamp (seconds since the Unix epoch) of when transaction was processed. null if not available.</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString181}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString182}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getconfirmedtransaction"></a>getConfirmedTransaction<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p><strong>DEPRECATED: Please use <a href="">getTransaction</a> instead</strong>
                  This method is expected to be removed in En Comt-core v2.0</p>
                <p>Returns transaction details for a confirmed transaction</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;string&gt;</code> - transaction signature as base-58 encoded string</li><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following optional fields:<ul><li>(optional) <code>encoding: &lt;string&gt;</code> - encoding for each returned Transaction, either "json", "jsonParsed", "base58" (<em>slow</em>), "base64". If parameter not provided, the default encoding is "json".
                  "jsonParsed" encoding attempts to use program-specific instruction parsers to return more human-readable and explicit data in the <code>transaction.message.instructions</code> list. If "jsonParsed" is requested but a parser cannot be found, the instruction falls back to regular JSON encoding (<code>accounts</code>, <code>data</code>, and <code>programIdIndex</code> fields).</li><li>(optional) <a href="">Commitment</a>; "processed" is not supported. If parameter not provided, the default is "finalized".</li></ul></li></ul>

                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;null&gt;</code> - if transaction is not found or not confirmed</li><li><code>&lt;object&gt;</code> - if transaction is confirmed, an object with the following fields:<ul><li><code>slot: &lt;u64&gt;</code> - the slot this transaction was processed in</li><li><code>transaction: &lt;object|[string,encoding]&gt;</code> - <a href="">Transaction</a> object, either in JSON format or encoded binary data, depending on encoding parameter</li><li><code>blockTime: &lt;i64 | null&gt;</code> - estimated production time, as Unix timestamp (seconds since the Unix epoch) of when the transaction was processed. null if not available</li><li><code>meta: &lt;object | null&gt;</code> - transaction status metadata object:<ul><li><code>err: &lt;object | null&gt;</code> - Error if transaction failed, null if transaction succeeded. <a href="" target="_blank" rel="noopener noreferrer">TransactionError definitions</a></li><li><code>fee: &lt;u64&gt;</code> - fee this transaction was charged, as u64 integer</li><li><code>preBalances: &lt;array&gt;</code> - array of u64 account balances from before the transaction was processed</li><li><code>postBalances: &lt;array&gt;</code> - array of u64 account balances after the transaction was processed</li><li><code>innerInstructions: &lt;array|null&gt;</code> - List of <a href="">inner instructions</a> or <code>null</code> if inner instruction recording was not enabled during this transaction</li><li><code>preTokenBalances: &lt;array|undefined&gt;</code> - List of <a href="">token balances</a> from before the transaction was processed or omitted if token balance recording was not yet enabled during this transaction</li><li><code>postTokenBalances: &lt;array|undefined&gt;</code> - List of <a href="">token balances</a> from after the transaction was processed or omitted if token balance recording was not yet enabled during this transaction</li><li><code>logMessages: &lt;array|null&gt;</code> - array of string log messages or <code>null</code> if log message recording was not enabled during this transaction</li><li>DEPRECATED: <code>status: &lt;object&gt;</code> - Transaction status<ul><li><code>"Ok": &lt;null&gt;</code> - Transaction was successful</li><li><code>"Err": &lt;ERR&gt;</code> - Transaction failed with TransactionError</li></ul></li></ul></li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString183}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString184}
                </SyntaxHighlighter>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString185}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString186}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getfeecalculatorforblockhash"></a>getFeeCalculatorForBlockhash<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p><strong>DEPRECATED: Please use <a href="">isBlockhashValid</a> or <a href="">getFeeForMessage</a> instead</strong>
                  This method is expected to be removed in En Comt-core v2.0</p>
                <p>Returns the fee calculator associated with the query blockhash, or <code>null</code> if the blockhash has expired</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;string&gt;</code> - query blockhash as a Base58 encoded string</li><li><code>&lt;object&gt;</code> - (optional) Configuration object containing the following fields:<ul><li>(optional) <code>commitment: &lt;string&gt;</code> - <a href="">Commitment</a></li><li>(optional) <code>minContextSlot: &lt;number&gt;</code> - set the minimum slot that the request can be evaluated at.</li></ul></li></ul>

                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The result will be an RpcResponse JSON object with <code>value</code> equal to:</p>
                <ul><li><code>&lt;null&gt;</code> - if the query blockhash has expired</li><li><code>&lt;object&gt;</code> - otherwise, a JSON object containing:<ul><li><code>feeCalculator: &lt;object&gt;</code>, <code>FeeCalculator</code> object describing the cluster fee rate at the queried blockhash</li></ul></li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString187}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString188}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getfeerategovernor"></a>getFeeRateGovernor<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p>Returns the fee rate governor information from the root bank</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>None</p>

                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The <code>result</code> field will be an <code>object</code> with the following fields:</p>
                <ul><li><code>burnPercent: &lt;u8&gt;</code>, Percentage of fees collected to be destroyed</li><li><code>maxLamportsPerSignature: &lt;u64&gt;</code>, Largest value <code>lamportsPerSignature</code> can attain for the next slot</li><li><code>minLamportsPerSignature: &lt;u64&gt;</code>, Smallest value <code>lamportsPerSignature</code> can attain for the next slot</li><li><code>targetLamportsPerSignature: &lt;u64&gt;</code>, Desired fee rate for the cluster</li><li><code>targetSignaturesPerSlot: &lt;u64&gt;</code>, Desired signature rate for the cluster</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString189}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString190}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getfees"></a>getFees<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p><strong>DEPRECATED: Please use <a href="">getFeeForMessage</a> instead</strong>
                  This method is expected to be removed in En Comt-core v2.0</p>
                <p>Returns a recent block hash from the ledger, a fee schedule that can be used to
                  compute the cost of submitting a transaction using it, and the last slot in
                  which the blockhash will be valid.</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;object&gt;</code> - (optional) <a href="">Commitment</a></li></ul>

                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>The result will be an RpcResponse JSON object with <code>value</code> set to a JSON object with the following fields:</p>
                <ul><li><code>blockhash: &lt;string&gt;</code> - a Hash as base-58 encoded string</li><li><code>feeCalculator: &lt;object&gt;</code> - FeeCalculator object, the fee schedule for this block hash</li><li><code>lastValidSlot: &lt;u64&gt;</code> - DEPRECATED - this value is inaccurate and should not be relied upon</li><li><code>lastValidBlockHeight: &lt;u64&gt;</code> - last <a href="">block height</a> at which the blockhash will be valid</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString191}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString192}
                </SyntaxHighlighter>

                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getrecentblockhash"></a>getRecentBlockhash<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p><strong>DEPRECATED: Please use <a href="">getLatestBlockhash</a> instead</strong>
                  This method is expected to be removed in En Comt-core v2.0</p>
                <p>Returns a recent block hash from the ledger, and a fee schedule that can be used to compute the cost of submitting a transaction using it.</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;object&gt;</code> - (optional) <a href="">Commitment</a></li></ul>

                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>An RpcResponse containing a JSON object consisting of a string blockhash and FeeCalculator JSON object.</p>
                <ul><li><code>RpcResponse&lt;object&gt;</code> - RpcResponse JSON object with <code>value</code> field set to a JSON object including:</li><li><code>blockhash: &lt;string&gt;</code> - a Hash as base-58 encoded string</li><li><code>feeCalculator: &lt;object&gt;</code> - FeeCalculator object, the fee schedule for this block hash</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString193}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString194}
                </SyntaxHighlighter>
                <h3><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="getsnapshotslot"></a>getSnapshotSlot<a className="hash-link" href="" title="Direct link to heading">#</a></h3>
                <p><strong>DEPRECATED: Please use <a href="">getHighestSnapshotSlot</a> instead</strong>
                  This method is expected to be removed in En Comt-core v2.0</p>
                <p>Returns the highest slot that the node has a snapshot for</p>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="parameters-44"></a>Parameters:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>None</p>

                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="results-46"></a>Results:<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <ul><li><code>&lt;u64&gt;</code> - Snapshot slot</li></ul>
                <h4><a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ" id="example-restrict-results-to-a-single-validator-vote-account"></a>Example: Restrict results to a single validator vote account<a className="hash-link" href="" title="Direct link to heading">#</a></h4>
                <p>Request:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString195}
                </SyntaxHighlighter>
                <p>Result:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",

                }}>
                  {codeString196}
                </SyntaxHighlighter>
                <p>Result when the node has no snapshot:</p>
                <SyntaxHighlighter language="javascript" customStyle={{
                  backgroundColor: "BLACK",
                  borderColor: "BLACK",

                  color: "#fff",
                  borderRadius: "0.5rem",


                }}>
                  {codeString197}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
