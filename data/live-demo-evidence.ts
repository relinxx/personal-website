export const liveDemoEvidence = {
  "qa": {
    "purchase": {
      "title": "Approve equipment purchase",
      "goal": "Approve the pending equipment purchase.",
      "target": "status",
      "expected": "Approved",
      "steps": [
        {
          "action": "assert_text",
          "target": "status",
          "value": "Awaiting review"
        },
        {
          "action": "click",
          "target": "approve",
          "value": ""
        },
        {
          "action": "assert_text",
          "target": "status",
          "value": "Approved"
        }
      ],
      "quality": {
        "repeatable": true,
        "detected": 2,
        "total": 2,
        "scope": "Two seeded UI defects in one isolated fixture. This is not coverage of an entire application."
      },
      "startedAt": "2026-10-15T19:52:29.604Z",
      "results": [
        {
          "variant": "healthy",
          "status": "passed",
          "duration": 2314,
          "failedStep": "",
          "expected": "Approved",
          "received": "Approved"
        },
        {
          "variant": "repeat",
          "status": "passed",
          "duration": 1502,
          "failedStep": "",
          "expected": "Approved",
          "received": "Approved"
        },
        {
          "variant": "broken",
          "status": "failed",
          "duration": 3901,
          "failedStep": "3. assert_text status",
          "expected": "Approved",
          "received": "Awaiting review"
        },
        {
          "variant": "wrong-state",
          "status": "failed",
          "duration": 4002,
          "failedStep": "3. assert_text status",
          "expected": "Approved",
          "received": "Rejected"
        }
      ]
    },
    "lead": {
      "title": "Create CRM Lead",
      "goal": "Enter Alex Morgan and alex@example.test, then create a CRM lead.",
      "target": "status",
      "expected": "Lead created: Alex Morgan",
      "steps": [
        {
          "action": "assert_text",
          "target": "status",
          "value": "No lead created"
        },
        {
          "action": "fill",
          "target": "lead-name",
          "value": "Alex Morgan"
        },
        {
          "action": "fill",
          "target": "lead-email",
          "value": "alex@example.test"
        },
        {
          "action": "click",
          "target": "create-lead",
          "value": ""
        },
        {
          "action": "assert_text",
          "target": "status",
          "value": "Lead created: Alex Morgan"
        }
      ],
      "quality": {
        "repeatable": true,
        "detected": 2,
        "total": 2,
        "scope": "Two seeded UI defects in one isolated fixture. This is not coverage of an entire application."
      },
      "startedAt": "2026-10-15T19:57:23.036Z",
      "results": [
        {
          "variant": "healthy",
          "status": "passed",
          "duration": 1480,
          "failedStep": "",
          "expected": "Lead created: Alex Morgan",
          "received": "Lead created: Alex Morgan"
        },
        {
          "variant": "repeat",
          "status": "passed",
          "duration": 1432,
          "failedStep": "",
          "expected": "Lead created: Alex Morgan",
          "received": "Lead created: Alex Morgan"
        },
        {
          "variant": "broken",
          "status": "failed",
          "duration": 3886,
          "failedStep": "5. assert_text status",
          "expected": "Lead created: Alex Morgan",
          "received": "No lead created"
        },
        {
          "variant": "wrong-state",
          "status": "failed",
          "duration": 3991,
          "failedStep": "5. assert_text status",
          "expected": "Lead created: Alex Morgan",
          "received": "Lead queued"
        }
      ]
    }
  },
  "sentinel": {
    "source": "Synthetic pump episode · seed 73 · severity 0.80 · 1 Hz",
    "model": "Logistic regression",
    "predicted": "BEARING_WEAR",
    "predictionSet": [
      "BEARING_WEAR"
    ],
    "accepted": true,
    "needsReview": true,
    "probabilities": {
      "HEALTHY": 2.3293994229171833e-13,
      "CAVITATION": 1.303825598597541e-7,
      "BEARING_WEAR": 0.9999997615814209,
      "SEAL_LEAK": 1.099047892694216e-7
    },
    "inferenceMs": 2.53,
    "threshold": 0.5,
    "window": [
      60,
      32
    ],
    "sampleCount": 360,
    "totalSamples": 360,
    "trace": [
      {
        "second": 0,
        "discharge_pressure": 5.9674,
        "suction_pressure": 0.7749,
        "flow_rate": 116.8604,
        "motor_current": 45.648,
        "vibration_rms": 2.0124,
        "bearing_temp": 69.4625
      },
      {
        "second": 1,
        "discharge_pressure": 6.1226,
        "suction_pressure": 0.7879,
        "flow_rate": 119.1951,
        "motor_current": 42.9246,
        "vibration_rms": 1.9058,
        "bearing_temp": 68.0422
      },
      {
        "second": 2,
        "discharge_pressure": 6.0622,
        "suction_pressure": 0.7864,
        "flow_rate": 121.7939,
        "motor_current": 44.6629,
        "vibration_rms": 1.7515,
        "bearing_temp": 68.6529
      },
      {
        "second": 3,
        "discharge_pressure": 6.0587,
        "suction_pressure": 0.7887,
        "flow_rate": 117.6786,
        "motor_current": 45.1113,
        "vibration_rms": 0.9936,
        "bearing_temp": 68.5253
      },
      {
        "second": 4,
        "discharge_pressure": 6.0026,
        "suction_pressure": 0.7686,
        "flow_rate": 122.055,
        "motor_current": 45.1846,
        "vibration_rms": 1.2111,
        "bearing_temp": 69.9344
      },
      {
        "second": 5,
        "discharge_pressure": 5.976,
        "suction_pressure": 0.7775,
        "flow_rate": 121.4881,
        "motor_current": 44.3111,
        "vibration_rms": 1.1725,
        "bearing_temp": 68.512
      },
      {
        "second": 6,
        "discharge_pressure": 6.0229,
        "suction_pressure": 0.7637,
        "flow_rate": 119.1089,
        "motor_current": 44.4243,
        "vibration_rms": 1.2159,
        "bearing_temp": 69.9125
      },
      {
        "second": 7,
        "discharge_pressure": 5.9654,
        "suction_pressure": 0.8034,
        "flow_rate": 115.9244,
        "motor_current": 45.2092,
        "vibration_rms": 1.2095,
        "bearing_temp": 66.5898
      },
      {
        "second": 8,
        "discharge_pressure": 5.8681,
        "suction_pressure": 0.7821,
        "flow_rate": 119.0009,
        "motor_current": 44.9682,
        "vibration_rms": 1.2768,
        "bearing_temp": 66.8012
      },
      {
        "second": 9,
        "discharge_pressure": 6.2107,
        "suction_pressure": 0.8189,
        "flow_rate": 122.6245,
        "motor_current": 44.1644,
        "vibration_rms": 1.1395,
        "bearing_temp": 68.6334
      },
      {
        "second": 10,
        "discharge_pressure": 6.0831,
        "suction_pressure": 0.793,
        "flow_rate": 121.3323,
        "motor_current": 44.8361,
        "vibration_rms": 1.1827,
        "bearing_temp": 68.1966
      },
      {
        "second": 11,
        "discharge_pressure": 6.0363,
        "suction_pressure": 0.8175,
        "flow_rate": 119.6461,
        "motor_current": 43.515,
        "vibration_rms": 1.1691,
        "bearing_temp": 68.919
      },
      {
        "second": 12,
        "discharge_pressure": 6.0557,
        "suction_pressure": 0.7701,
        "flow_rate": 119.9381,
        "motor_current": 46.5152,
        "vibration_rms": 1.1371,
        "bearing_temp": 69.2391
      },
      {
        "second": 13,
        "discharge_pressure": 6.047,
        "suction_pressure": 0.8052,
        "flow_rate": 119.6005,
        "motor_current": 44.4787,
        "vibration_rms": 1.2264,
        "bearing_temp": 68.2668
      },
      {
        "second": 14,
        "discharge_pressure": 6.0179,
        "suction_pressure": 0.7824,
        "flow_rate": 119.0823,
        "motor_current": 45.5334,
        "vibration_rms": 1.0069,
        "bearing_temp": 69.0841
      },
      {
        "second": 15,
        "discharge_pressure": 5.781,
        "suction_pressure": 0.8094,
        "flow_rate": 118.4408,
        "motor_current": 43.6356,
        "vibration_rms": 1.0751,
        "bearing_temp": 68.7367
      },
      {
        "second": 16,
        "discharge_pressure": 5.9214,
        "suction_pressure": 0.7814,
        "flow_rate": 115.8405,
        "motor_current": 44.4159,
        "vibration_rms": 1.0861,
        "bearing_temp": 70.6015
      },
      {
        "second": 17,
        "discharge_pressure": 5.8574,
        "suction_pressure": 0.7867,
        "flow_rate": 118.2693,
        "motor_current": 45.4067,
        "vibration_rms": 0.9723,
        "bearing_temp": 70.2733
      },
      {
        "second": 18,
        "discharge_pressure": 6.1603,
        "suction_pressure": 0.7714,
        "flow_rate": 120.1955,
        "motor_current": 43.9641,
        "vibration_rms": 1.209,
        "bearing_temp": 69.3804
      },
      {
        "second": 19,
        "discharge_pressure": 5.9778,
        "suction_pressure": 0.7563,
        "flow_rate": 123.1971,
        "motor_current": 44.008,
        "vibration_rms": 1.3817,
        "bearing_temp": 67.8883
      },
      {
        "second": 20,
        "discharge_pressure": 5.7419,
        "suction_pressure": 0.7767,
        "flow_rate": 117.2815,
        "motor_current": 45.0645,
        "vibration_rms": 1.0151,
        "bearing_temp": 66.9404
      },
      {
        "second": 21,
        "discharge_pressure": 6.0723,
        "suction_pressure": 0.7763,
        "flow_rate": 122.996,
        "motor_current": 44.2943,
        "vibration_rms": 1.3158,
        "bearing_temp": 68.029
      },
      {
        "second": 22,
        "discharge_pressure": 5.986,
        "suction_pressure": 0.7671,
        "flow_rate": 122.9924,
        "motor_current": 45.0208,
        "vibration_rms": 1.1369,
        "bearing_temp": 66.8547
      },
      {
        "second": 23,
        "discharge_pressure": 5.7628,
        "suction_pressure": 0.7682,
        "flow_rate": 121.7338,
        "motor_current": 45.3194,
        "vibration_rms": 1.1017,
        "bearing_temp": 66.424
      },
      {
        "second": 24,
        "discharge_pressure": 5.9566,
        "suction_pressure": 0.7639,
        "flow_rate": 117.5758,
        "motor_current": 44.963,
        "vibration_rms": 1.1015,
        "bearing_temp": 66.5755
      },
      {
        "second": 25,
        "discharge_pressure": 5.9865,
        "suction_pressure": 0.7946,
        "flow_rate": 122.1919,
        "motor_current": 45.679,
        "vibration_rms": 1.1504,
        "bearing_temp": 68.6171
      },
      {
        "second": 26,
        "discharge_pressure": 5.8313,
        "suction_pressure": 0.7495,
        "flow_rate": 119.3123,
        "motor_current": 44.3118,
        "vibration_rms": 1.234,
        "bearing_temp": 68.3735
      },
      {
        "second": 27,
        "discharge_pressure": 6.0181,
        "suction_pressure": 0.7658,
        "flow_rate": 118.5724,
        "motor_current": 44.8543,
        "vibration_rms": 1.2303,
        "bearing_temp": 67.5615
      },
      {
        "second": 28,
        "discharge_pressure": 5.9997,
        "suction_pressure": 0.7769,
        "flow_rate": 121.2791,
        "motor_current": 47.051,
        "vibration_rms": 1.2908,
        "bearing_temp": 68.4517
      },
      {
        "second": 29,
        "discharge_pressure": 5.9105,
        "suction_pressure": 0.7729,
        "flow_rate": 117.1317,
        "motor_current": 45.4544,
        "vibration_rms": 1.1988,
        "bearing_temp": 68.224
      },
      {
        "second": 30,
        "discharge_pressure": 5.8262,
        "suction_pressure": 0.7872,
        "flow_rate": 118.6628,
        "motor_current": 43.1608,
        "vibration_rms": 1.0977,
        "bearing_temp": 70.2073
      },
      {
        "second": 31,
        "discharge_pressure": 5.9278,
        "suction_pressure": 0.7629,
        "flow_rate": 122.1414,
        "motor_current": 44.3869,
        "vibration_rms": 1.1432,
        "bearing_temp": 66.4517
      },
      {
        "second": 32,
        "discharge_pressure": 5.9402,
        "suction_pressure": 0.7908,
        "flow_rate": 119.3955,
        "motor_current": 45.6163,
        "vibration_rms": 1.0535,
        "bearing_temp": 69.049
      },
      {
        "second": 33,
        "discharge_pressure": 5.8503,
        "suction_pressure": 0.8092,
        "flow_rate": 121.8056,
        "motor_current": 42.2107,
        "vibration_rms": 1.0592,
        "bearing_temp": 69.3915
      },
      {
        "second": 34,
        "discharge_pressure": 6.0796,
        "suction_pressure": 0.7771,
        "flow_rate": 118.4315,
        "motor_current": 44.1208,
        "vibration_rms": 1.1211,
        "bearing_temp": 69.5309
      },
      {
        "second": 35,
        "discharge_pressure": 5.8179,
        "suction_pressure": 0.7936,
        "flow_rate": 119.2361,
        "motor_current": 45.4178,
        "vibration_rms": 1.0609,
        "bearing_temp": 69.3829
      },
      {
        "second": 36,
        "discharge_pressure": 6.0333,
        "suction_pressure": 0.7856,
        "flow_rate": 124.1339,
        "motor_current": 45.1919,
        "vibration_rms": 1.2376,
        "bearing_temp": 70.1256
      },
      {
        "second": 37,
        "discharge_pressure": 6.1314,
        "suction_pressure": 0.7917,
        "flow_rate": 118.19,
        "motor_current": 46.7665,
        "vibration_rms": 1.171,
        "bearing_temp": 71.0227
      },
      {
        "second": 38,
        "discharge_pressure": 5.8724,
        "suction_pressure": 0.7956,
        "flow_rate": 121.8349,
        "motor_current": 45.5112,
        "vibration_rms": 1.4033,
        "bearing_temp": 69.8215
      },
      {
        "second": 39,
        "discharge_pressure": 6.1468,
        "suction_pressure": 0.7957,
        "flow_rate": 121.6568,
        "motor_current": 44.4433,
        "vibration_rms": 1.1861,
        "bearing_temp": 66.7796
      },
      {
        "second": 40,
        "discharge_pressure": 6.3515,
        "suction_pressure": 0.8073,
        "flow_rate": 122.16,
        "motor_current": 44.1808,
        "vibration_rms": 1.3333,
        "bearing_temp": 68.5466
      },
      {
        "second": 41,
        "discharge_pressure": 6.1685,
        "suction_pressure": 0.8012,
        "flow_rate": 122.6077,
        "motor_current": 45.1151,
        "vibration_rms": 1.3957,
        "bearing_temp": 65.2913
      },
      {
        "second": 42,
        "discharge_pressure": 5.8232,
        "suction_pressure": 0.7719,
        "flow_rate": 121.7381,
        "motor_current": 42.6017,
        "vibration_rms": 1.2465,
        "bearing_temp": 70.4741
      },
      {
        "second": 43,
        "discharge_pressure": 6.0021,
        "suction_pressure": 0.7595,
        "flow_rate": 114.7871,
        "motor_current": 45.8657,
        "vibration_rms": 1.3118,
        "bearing_temp": 66.8398
      },
      {
        "second": 44,
        "discharge_pressure": 5.7943,
        "suction_pressure": 0.7853,
        "flow_rate": 115.4045,
        "motor_current": 43.8432,
        "vibration_rms": 1.4317,
        "bearing_temp": 72.4261
      },
      {
        "second": 45,
        "discharge_pressure": 5.8986,
        "suction_pressure": 0.8016,
        "flow_rate": 119.3571,
        "motor_current": 44.9677,
        "vibration_rms": 1.3218,
        "bearing_temp": 68.745
      },
      {
        "second": 46,
        "discharge_pressure": 5.7742,
        "suction_pressure": 0.7831,
        "flow_rate": 119.8768,
        "motor_current": 44.4274,
        "vibration_rms": 1.2413,
        "bearing_temp": 71.6373
      },
      {
        "second": 47,
        "discharge_pressure": 5.9783,
        "suction_pressure": 0.7869,
        "flow_rate": 120.8576,
        "motor_current": 45.4946,
        "vibration_rms": 1.2909,
        "bearing_temp": 70.0809
      },
      {
        "second": 48,
        "discharge_pressure": 5.8949,
        "suction_pressure": 0.7699,
        "flow_rate": 122.1703,
        "motor_current": 46.4353,
        "vibration_rms": 1.2314,
        "bearing_temp": 67.6559
      },
      {
        "second": 49,
        "discharge_pressure": 5.7679,
        "suction_pressure": 0.7913,
        "flow_rate": 116.5019,
        "motor_current": 45.8178,
        "vibration_rms": 1.3667,
        "bearing_temp": 65.635
      },
      {
        "second": 50,
        "discharge_pressure": 6.228,
        "suction_pressure": 0.7721,
        "flow_rate": 120.8288,
        "motor_current": 47.1189,
        "vibration_rms": 1.1279,
        "bearing_temp": 69.9359
      },
      {
        "second": 51,
        "discharge_pressure": 6.0427,
        "suction_pressure": 0.7623,
        "flow_rate": 116.7016,
        "motor_current": 42.7358,
        "vibration_rms": 1.2691,
        "bearing_temp": 68.621
      },
      {
        "second": 52,
        "discharge_pressure": 5.8936,
        "suction_pressure": 0.7631,
        "flow_rate": 123.1337,
        "motor_current": 44.7738,
        "vibration_rms": 1.2505,
        "bearing_temp": 72.3484
      },
      {
        "second": 53,
        "discharge_pressure": 6.0212,
        "suction_pressure": 0.7856,
        "flow_rate": 117.2775,
        "motor_current": 44.8282,
        "vibration_rms": 1.5183,
        "bearing_temp": 72.1651
      },
      {
        "second": 54,
        "discharge_pressure": 5.9658,
        "suction_pressure": 0.7861,
        "flow_rate": 116.0782,
        "motor_current": 46.8481,
        "vibration_rms": 1.3244,
        "bearing_temp": 68.7312
      },
      {
        "second": 55,
        "discharge_pressure": 5.8118,
        "suction_pressure": 0.7828,
        "flow_rate": 119.0581,
        "motor_current": 44.1985,
        "vibration_rms": 1.4161,
        "bearing_temp": 68.4619
      },
      {
        "second": 56,
        "discharge_pressure": 5.9283,
        "suction_pressure": 0.7914,
        "flow_rate": 119.9925,
        "motor_current": 42.5311,
        "vibration_rms": 1.4023,
        "bearing_temp": 68.6533
      },
      {
        "second": 57,
        "discharge_pressure": 5.8846,
        "suction_pressure": 0.8066,
        "flow_rate": 120.6264,
        "motor_current": 44.6168,
        "vibration_rms": 1.3699,
        "bearing_temp": 71.8482
      },
      {
        "second": 58,
        "discharge_pressure": 6.0337,
        "suction_pressure": 0.7896,
        "flow_rate": 120.6976,
        "motor_current": 45.5915,
        "vibration_rms": 1.3321,
        "bearing_temp": 71.1477
      },
      {
        "second": 59,
        "discharge_pressure": 5.8684,
        "suction_pressure": 0.7783,
        "flow_rate": 118.4025,
        "motor_current": 44.3821,
        "vibration_rms": 1.3737,
        "bearing_temp": 71.1169
      },
      {
        "second": 60,
        "discharge_pressure": 5.928,
        "suction_pressure": 0.7973,
        "flow_rate": 119.1305,
        "motor_current": 45.6554,
        "vibration_rms": 2.0426,
        "bearing_temp": 68.2518
      },
      {
        "second": 61,
        "discharge_pressure": 5.7662,
        "suction_pressure": 0.7979,
        "flow_rate": 118.3372,
        "motor_current": 45.0766,
        "vibration_rms": 2.0789,
        "bearing_temp": 70.0091
      },
      {
        "second": 62,
        "discharge_pressure": 5.918,
        "suction_pressure": 0.7701,
        "flow_rate": 116.9406,
        "motor_current": 45.2099,
        "vibration_rms": 1.8011,
        "bearing_temp": 71.0976
      },
      {
        "second": 63,
        "discharge_pressure": 5.9851,
        "suction_pressure": 0.7874,
        "flow_rate": 118.8907,
        "motor_current": 45.2934,
        "vibration_rms": 1.3656,
        "bearing_temp": 69.927
      },
      {
        "second": 64,
        "discharge_pressure": 5.93,
        "suction_pressure": 0.7806,
        "flow_rate": 119.7091,
        "motor_current": 46.0422,
        "vibration_rms": 1.3637,
        "bearing_temp": 70.8502
      },
      {
        "second": 65,
        "discharge_pressure": 5.813,
        "suction_pressure": 0.7798,
        "flow_rate": 113.9603,
        "motor_current": 46.0009,
        "vibration_rms": 1.3076,
        "bearing_temp": 68.7414
      },
      {
        "second": 66,
        "discharge_pressure": 5.9647,
        "suction_pressure": 0.7827,
        "flow_rate": 116.2028,
        "motor_current": 44.9436,
        "vibration_rms": 1.2023,
        "bearing_temp": 70.0885
      },
      {
        "second": 67,
        "discharge_pressure": 5.928,
        "suction_pressure": 0.792,
        "flow_rate": 121.2146,
        "motor_current": 43.4559,
        "vibration_rms": 1.3753,
        "bearing_temp": 69.0527
      },
      {
        "second": 68,
        "discharge_pressure": 6.0365,
        "suction_pressure": 0.7913,
        "flow_rate": 124.0838,
        "motor_current": 45.1446,
        "vibration_rms": 1.4892,
        "bearing_temp": 71.0679
      },
      {
        "second": 69,
        "discharge_pressure": 5.9555,
        "suction_pressure": 0.7884,
        "flow_rate": 119.0783,
        "motor_current": 45.2601,
        "vibration_rms": 1.5054,
        "bearing_temp": 71.0491
      },
      {
        "second": 70,
        "discharge_pressure": 6.0217,
        "suction_pressure": 0.7604,
        "flow_rate": 118.9526,
        "motor_current": 46.4909,
        "vibration_rms": 1.4145,
        "bearing_temp": 69.459
      },
      {
        "second": 71,
        "discharge_pressure": 6.0692,
        "suction_pressure": 0.7877,
        "flow_rate": 117.1708,
        "motor_current": 44.7579,
        "vibration_rms": 1.5213,
        "bearing_temp": 69.8453
      },
      {
        "second": 72,
        "discharge_pressure": 6.0254,
        "suction_pressure": 0.7893,
        "flow_rate": 117.6552,
        "motor_current": 46.7586,
        "vibration_rms": 1.4259,
        "bearing_temp": 70.0573
      },
      {
        "second": 73,
        "discharge_pressure": 5.9161,
        "suction_pressure": 0.78,
        "flow_rate": 117.0916,
        "motor_current": 44.0507,
        "vibration_rms": 1.4269,
        "bearing_temp": 70.802
      },
      {
        "second": 74,
        "discharge_pressure": 6.0064,
        "suction_pressure": 0.7875,
        "flow_rate": 120.987,
        "motor_current": 46.401,
        "vibration_rms": 1.4032,
        "bearing_temp": 69.3962
      },
      {
        "second": 75,
        "discharge_pressure": 5.8839,
        "suction_pressure": 0.8088,
        "flow_rate": 118.1941,
        "motor_current": 45.4613,
        "vibration_rms": 1.7089,
        "bearing_temp": 70.2859
      },
      {
        "second": 76,
        "discharge_pressure": 5.9246,
        "suction_pressure": 0.789,
        "flow_rate": 117.4496,
        "motor_current": 44.8809,
        "vibration_rms": 1.4672,
        "bearing_temp": 69.7097
      },
      {
        "second": 77,
        "discharge_pressure": 5.8067,
        "suction_pressure": 0.779,
        "flow_rate": 119.7305,
        "motor_current": 44.095,
        "vibration_rms": 1.4165,
        "bearing_temp": 74.3716
      },
      {
        "second": 78,
        "discharge_pressure": 6.1301,
        "suction_pressure": 0.7705,
        "flow_rate": 121.131,
        "motor_current": 47.3369,
        "vibration_rms": 1.5202,
        "bearing_temp": 71.0894
      },
      {
        "second": 79,
        "discharge_pressure": 5.9136,
        "suction_pressure": 0.7816,
        "flow_rate": 117.9885,
        "motor_current": 44.9703,
        "vibration_rms": 1.5133,
        "bearing_temp": 71.7683
      },
      {
        "second": 80,
        "discharge_pressure": 5.9023,
        "suction_pressure": 0.7923,
        "flow_rate": 118.6257,
        "motor_current": 45.7754,
        "vibration_rms": 1.5259,
        "bearing_temp": 73.0127
      },
      {
        "second": 81,
        "discharge_pressure": 5.8959,
        "suction_pressure": 0.8076,
        "flow_rate": 119.261,
        "motor_current": 45.2231,
        "vibration_rms": 1.629,
        "bearing_temp": 71.1458
      },
      {
        "second": 82,
        "discharge_pressure": 6.1018,
        "suction_pressure": 0.7749,
        "flow_rate": 115.0079,
        "motor_current": 44.9454,
        "vibration_rms": 1.7787,
        "bearing_temp": 73.7923
      },
      {
        "second": 83,
        "discharge_pressure": 6.0549,
        "suction_pressure": 0.7767,
        "flow_rate": 122.0143,
        "motor_current": 46.3768,
        "vibration_rms": 1.5049,
        "bearing_temp": 71.1464
      },
      {
        "second": 84,
        "discharge_pressure": 5.8745,
        "suction_pressure": 0.794,
        "flow_rate": 117.6878,
        "motor_current": 44.8665,
        "vibration_rms": 1.6575,
        "bearing_temp": 70.4995
      },
      {
        "second": 85,
        "discharge_pressure": 5.9844,
        "suction_pressure": 0.7763,
        "flow_rate": 118.5991,
        "motor_current": 45.494,
        "vibration_rms": 1.671,
        "bearing_temp": 74.5518
      },
      {
        "second": 86,
        "discharge_pressure": 5.9866,
        "suction_pressure": 0.8108,
        "flow_rate": 115.8427,
        "motor_current": 45.6774,
        "vibration_rms": 1.5368,
        "bearing_temp": 72.1355
      },
      {
        "second": 87,
        "discharge_pressure": 6.0097,
        "suction_pressure": 0.7979,
        "flow_rate": 113.7679,
        "motor_current": 46.229,
        "vibration_rms": 1.6159,
        "bearing_temp": 72.2674
      },
      {
        "second": 88,
        "discharge_pressure": 6.0094,
        "suction_pressure": 0.8018,
        "flow_rate": 119.0483,
        "motor_current": 47.3458,
        "vibration_rms": 1.668,
        "bearing_temp": 73.9667
      },
      {
        "second": 89,
        "discharge_pressure": 5.94,
        "suction_pressure": 0.7799,
        "flow_rate": 115.7104,
        "motor_current": 45.8785,
        "vibration_rms": 1.5982,
        "bearing_temp": 73.1542
      },
      {
        "second": 90,
        "discharge_pressure": 5.9164,
        "suction_pressure": 0.793,
        "flow_rate": 114.3331,
        "motor_current": 46.5664,
        "vibration_rms": 1.6962,
        "bearing_temp": 72.7163
      },
      {
        "second": 91,
        "discharge_pressure": 5.894,
        "suction_pressure": 0.7793,
        "flow_rate": 120.4466,
        "motor_current": 46.773,
        "vibration_rms": 1.8717,
        "bearing_temp": 73.6881
      },
      {
        "second": 92,
        "discharge_pressure": 5.9039,
        "suction_pressure": 0.7829,
        "flow_rate": 115.6838,
        "motor_current": 45.1996,
        "vibration_rms": 1.792,
        "bearing_temp": 72.169
      },
      {
        "second": 93,
        "discharge_pressure": 5.989,
        "suction_pressure": 0.7937,
        "flow_rate": 118.3302,
        "motor_current": 45.6326,
        "vibration_rms": 1.5965,
        "bearing_temp": 74.8287
      },
      {
        "second": 94,
        "discharge_pressure": 5.9238,
        "suction_pressure": 0.7745,
        "flow_rate": 117.7147,
        "motor_current": 46.4264,
        "vibration_rms": 2.0668,
        "bearing_temp": 73.125
      },
      {
        "second": 95,
        "discharge_pressure": 5.8071,
        "suction_pressure": 0.8112,
        "flow_rate": 116.401,
        "motor_current": 46.2957,
        "vibration_rms": 1.6454,
        "bearing_temp": 75.5242
      },
      {
        "second": 96,
        "discharge_pressure": 5.9291,
        "suction_pressure": 0.8051,
        "flow_rate": 121.0001,
        "motor_current": 44.8793,
        "vibration_rms": 1.8027,
        "bearing_temp": 71.4339
      },
      {
        "second": 97,
        "discharge_pressure": 5.8537,
        "suction_pressure": 0.7905,
        "flow_rate": 124.3043,
        "motor_current": 45.6843,
        "vibration_rms": 1.9841,
        "bearing_temp": 73.6758
      },
      {
        "second": 98,
        "discharge_pressure": 5.7831,
        "suction_pressure": 0.7807,
        "flow_rate": 117.4173,
        "motor_current": 45.3115,
        "vibration_rms": 1.6464,
        "bearing_temp": 71.9111
      },
      {
        "second": 99,
        "discharge_pressure": 5.9217,
        "suction_pressure": 0.7712,
        "flow_rate": 119.2383,
        "motor_current": 44.98,
        "vibration_rms": 1.9417,
        "bearing_temp": 75.2088
      },
      {
        "second": 100,
        "discharge_pressure": 5.8182,
        "suction_pressure": 0.8104,
        "flow_rate": 120.6707,
        "motor_current": 45.9643,
        "vibration_rms": 1.7392,
        "bearing_temp": 73.0681
      },
      {
        "second": 101,
        "discharge_pressure": 5.8608,
        "suction_pressure": 0.7949,
        "flow_rate": 114.1902,
        "motor_current": 46.8676,
        "vibration_rms": 1.8477,
        "bearing_temp": 76.5937
      },
      {
        "second": 102,
        "discharge_pressure": 5.8098,
        "suction_pressure": 0.7736,
        "flow_rate": 120.8857,
        "motor_current": 46.386,
        "vibration_rms": 1.921,
        "bearing_temp": 72.1212
      },
      {
        "second": 103,
        "discharge_pressure": 5.9082,
        "suction_pressure": 0.7855,
        "flow_rate": 119.4631,
        "motor_current": 45.7875,
        "vibration_rms": 1.9465,
        "bearing_temp": 73.9537
      },
      {
        "second": 104,
        "discharge_pressure": 5.8649,
        "suction_pressure": 0.77,
        "flow_rate": 118.1969,
        "motor_current": 47.4271,
        "vibration_rms": 1.9359,
        "bearing_temp": 73.4904
      },
      {
        "second": 105,
        "discharge_pressure": 6.0978,
        "suction_pressure": 0.8036,
        "flow_rate": 116.3025,
        "motor_current": 47.075,
        "vibration_rms": 1.8152,
        "bearing_temp": 74.3102
      },
      {
        "second": 106,
        "discharge_pressure": 5.8264,
        "suction_pressure": 0.8028,
        "flow_rate": 115.3932,
        "motor_current": 46.2325,
        "vibration_rms": 1.9068,
        "bearing_temp": 74.0089
      },
      {
        "second": 107,
        "discharge_pressure": 5.8512,
        "suction_pressure": 0.7851,
        "flow_rate": 117.0359,
        "motor_current": 46.0672,
        "vibration_rms": 1.8541,
        "bearing_temp": 74.0033
      },
      {
        "second": 108,
        "discharge_pressure": 6.0042,
        "suction_pressure": 0.8013,
        "flow_rate": 114.1909,
        "motor_current": 46.9839,
        "vibration_rms": 1.9103,
        "bearing_temp": 74.5288
      },
      {
        "second": 109,
        "discharge_pressure": 5.9403,
        "suction_pressure": 0.8,
        "flow_rate": 117.6181,
        "motor_current": 46.238,
        "vibration_rms": 1.8195,
        "bearing_temp": 78.4027
      },
      {
        "second": 110,
        "discharge_pressure": 5.9251,
        "suction_pressure": 0.7843,
        "flow_rate": 117.7662,
        "motor_current": 46.1163,
        "vibration_rms": 2.0179,
        "bearing_temp": 73.8487
      },
      {
        "second": 111,
        "discharge_pressure": 5.896,
        "suction_pressure": 0.7932,
        "flow_rate": 114.8434,
        "motor_current": 46.9542,
        "vibration_rms": 1.9039,
        "bearing_temp": 71.1797
      },
      {
        "second": 112,
        "discharge_pressure": 6.1162,
        "suction_pressure": 0.7909,
        "flow_rate": 116.0556,
        "motor_current": 48.1362,
        "vibration_rms": 2.1005,
        "bearing_temp": 75.9792
      },
      {
        "second": 113,
        "discharge_pressure": 5.8193,
        "suction_pressure": 0.8148,
        "flow_rate": 120.1918,
        "motor_current": 45.3442,
        "vibration_rms": 2.1008,
        "bearing_temp": 74.3658
      },
      {
        "second": 114,
        "discharge_pressure": 5.93,
        "suction_pressure": 0.7714,
        "flow_rate": 117.1607,
        "motor_current": 45.5447,
        "vibration_rms": 2.1076,
        "bearing_temp": 75.2052
      },
      {
        "second": 115,
        "discharge_pressure": 5.8747,
        "suction_pressure": 0.7515,
        "flow_rate": 116.0453,
        "motor_current": 46.3289,
        "vibration_rms": 2.2289,
        "bearing_temp": 77.3757
      },
      {
        "second": 116,
        "discharge_pressure": 5.9725,
        "suction_pressure": 0.798,
        "flow_rate": 114.7557,
        "motor_current": 46.5259,
        "vibration_rms": 2.1682,
        "bearing_temp": 77.546
      },
      {
        "second": 117,
        "discharge_pressure": 5.8265,
        "suction_pressure": 0.8013,
        "flow_rate": 116.54,
        "motor_current": 47.2319,
        "vibration_rms": 2.1842,
        "bearing_temp": 74.3332
      },
      {
        "second": 118,
        "discharge_pressure": 6.0677,
        "suction_pressure": 0.7968,
        "flow_rate": 120.4246,
        "motor_current": 47.2915,
        "vibration_rms": 2.1498,
        "bearing_temp": 73.2698
      },
      {
        "second": 119,
        "discharge_pressure": 5.8106,
        "suction_pressure": 0.778,
        "flow_rate": 117.2068,
        "motor_current": 46.5159,
        "vibration_rms": 2.047,
        "bearing_temp": 75.2096
      },
      {
        "second": 120,
        "discharge_pressure": 5.858,
        "suction_pressure": 0.8263,
        "flow_rate": 116.5072,
        "motor_current": 46.4852,
        "vibration_rms": 2.8857,
        "bearing_temp": 78.1551
      },
      {
        "second": 121,
        "discharge_pressure": 5.9403,
        "suction_pressure": 0.7717,
        "flow_rate": 116.0285,
        "motor_current": 46.8015,
        "vibration_rms": 2.706,
        "bearing_temp": 77.1832
      },
      {
        "second": 122,
        "discharge_pressure": 5.8577,
        "suction_pressure": 0.7776,
        "flow_rate": 112.3781,
        "motor_current": 46.1044,
        "vibration_rms": 2.8514,
        "bearing_temp": 77.4828
      },
      {
        "second": 123,
        "discharge_pressure": 5.8478,
        "suction_pressure": 0.8173,
        "flow_rate": 118.9112,
        "motor_current": 47.4661,
        "vibration_rms": 2.1092,
        "bearing_temp": 78.8068
      },
      {
        "second": 124,
        "discharge_pressure": 5.9485,
        "suction_pressure": 0.8184,
        "flow_rate": 115.017,
        "motor_current": 48.3181,
        "vibration_rms": 2.1738,
        "bearing_temp": 77.5254
      },
      {
        "second": 125,
        "discharge_pressure": 6.0678,
        "suction_pressure": 0.7985,
        "flow_rate": 117.7953,
        "motor_current": 47.7127,
        "vibration_rms": 2.2589,
        "bearing_temp": 76.3148
      },
      {
        "second": 126,
        "discharge_pressure": 5.9225,
        "suction_pressure": 0.7867,
        "flow_rate": 121.93,
        "motor_current": 47.6997,
        "vibration_rms": 2.1225,
        "bearing_temp": 77.3784
      },
      {
        "second": 127,
        "discharge_pressure": 5.9813,
        "suction_pressure": 0.7663,
        "flow_rate": 118.2602,
        "motor_current": 46.9325,
        "vibration_rms": 2.3865,
        "bearing_temp": 77.2678
      },
      {
        "second": 128,
        "discharge_pressure": 5.9217,
        "suction_pressure": 0.7775,
        "flow_rate": 113.3116,
        "motor_current": 47.8508,
        "vibration_rms": 2.2317,
        "bearing_temp": 75.517
      },
      {
        "second": 129,
        "discharge_pressure": 6.0708,
        "suction_pressure": 0.7763,
        "flow_rate": 115.4111,
        "motor_current": 48.3474,
        "vibration_rms": 2.2902,
        "bearing_temp": 78.0093
      },
      {
        "second": 130,
        "discharge_pressure": 5.8287,
        "suction_pressure": 0.7715,
        "flow_rate": 111.8823,
        "motor_current": 47.9055,
        "vibration_rms": 2.3377,
        "bearing_temp": 77.199
      },
      {
        "second": 131,
        "discharge_pressure": 5.9457,
        "suction_pressure": 0.773,
        "flow_rate": 115.5838,
        "motor_current": 47.328,
        "vibration_rms": 2.3485,
        "bearing_temp": 78.9455
      },
      {
        "second": 132,
        "discharge_pressure": 5.7871,
        "suction_pressure": 0.8158,
        "flow_rate": 112.9571,
        "motor_current": 49.1158,
        "vibration_rms": 2.3157,
        "bearing_temp": 76.7021
      },
      {
        "second": 133,
        "discharge_pressure": 5.8543,
        "suction_pressure": 0.8012,
        "flow_rate": 115.766,
        "motor_current": 47.5901,
        "vibration_rms": 2.3612,
        "bearing_temp": 79.7475
      },
      {
        "second": 134,
        "discharge_pressure": 5.8753,
        "suction_pressure": 0.7873,
        "flow_rate": 114.9064,
        "motor_current": 48.6361,
        "vibration_rms": 2.4441,
        "bearing_temp": 80.0009
      },
      {
        "second": 135,
        "discharge_pressure": 5.93,
        "suction_pressure": 0.7979,
        "flow_rate": 118.1131,
        "motor_current": 46.4486,
        "vibration_rms": 2.4652,
        "bearing_temp": 75.1235
      },
      {
        "second": 136,
        "discharge_pressure": 5.8944,
        "suction_pressure": 0.7957,
        "flow_rate": 114.2723,
        "motor_current": 46.9083,
        "vibration_rms": 2.5192,
        "bearing_temp": 79.5161
      },
      {
        "second": 137,
        "discharge_pressure": 5.8556,
        "suction_pressure": 0.8015,
        "flow_rate": 113.3761,
        "motor_current": 47.4382,
        "vibration_rms": 2.4797,
        "bearing_temp": 76.8368
      },
      {
        "second": 138,
        "discharge_pressure": 5.7105,
        "suction_pressure": 0.8346,
        "flow_rate": 121.4192,
        "motor_current": 47.938,
        "vibration_rms": 2.6021,
        "bearing_temp": 77.79
      },
      {
        "second": 139,
        "discharge_pressure": 6.0625,
        "suction_pressure": 0.8137,
        "flow_rate": 120.9226,
        "motor_current": 47.1719,
        "vibration_rms": 2.4132,
        "bearing_temp": 76.7258
      },
      {
        "second": 140,
        "discharge_pressure": 5.9582,
        "suction_pressure": 0.7953,
        "flow_rate": 118.0136,
        "motor_current": 47.4241,
        "vibration_rms": 2.6755,
        "bearing_temp": 78.8912
      },
      {
        "second": 141,
        "discharge_pressure": 5.8734,
        "suction_pressure": 0.7844,
        "flow_rate": 113.7383,
        "motor_current": 48.1403,
        "vibration_rms": 2.629,
        "bearing_temp": 77.0934
      },
      {
        "second": 142,
        "discharge_pressure": 5.8796,
        "suction_pressure": 0.7958,
        "flow_rate": 115.2303,
        "motor_current": 48.555,
        "vibration_rms": 2.3978,
        "bearing_temp": 78.2679
      },
      {
        "second": 143,
        "discharge_pressure": 6.0047,
        "suction_pressure": 0.8199,
        "flow_rate": 120.578,
        "motor_current": 48.5062,
        "vibration_rms": 2.5139,
        "bearing_temp": 81.0526
      },
      {
        "second": 144,
        "discharge_pressure": 6.0782,
        "suction_pressure": 0.8067,
        "flow_rate": 117.6065,
        "motor_current": 46.8678,
        "vibration_rms": 2.4049,
        "bearing_temp": 79.8508
      },
      {
        "second": 145,
        "discharge_pressure": 5.9742,
        "suction_pressure": 0.7856,
        "flow_rate": 117.0772,
        "motor_current": 49.0956,
        "vibration_rms": 2.2664,
        "bearing_temp": 78.1625
      },
      {
        "second": 146,
        "discharge_pressure": 5.7434,
        "suction_pressure": 0.798,
        "flow_rate": 119.5972,
        "motor_current": 49.249,
        "vibration_rms": 2.4842,
        "bearing_temp": 81.8747
      },
      {
        "second": 147,
        "discharge_pressure": 6.0538,
        "suction_pressure": 0.7605,
        "flow_rate": 113.5952,
        "motor_current": 46.4113,
        "vibration_rms": 2.587,
        "bearing_temp": 79.7399
      },
      {
        "second": 148,
        "discharge_pressure": 5.6771,
        "suction_pressure": 0.7859,
        "flow_rate": 113.5231,
        "motor_current": 48.8726,
        "vibration_rms": 2.5701,
        "bearing_temp": 79.5701
      },
      {
        "second": 149,
        "discharge_pressure": 5.9418,
        "suction_pressure": 0.7613,
        "flow_rate": 110.9548,
        "motor_current": 47.8299,
        "vibration_rms": 2.5222,
        "bearing_temp": 81.3353
      },
      {
        "second": 150,
        "discharge_pressure": 5.9932,
        "suction_pressure": 0.8187,
        "flow_rate": 113.6181,
        "motor_current": 47.1881,
        "vibration_rms": 2.4751,
        "bearing_temp": 75.8658
      },
      {
        "second": 151,
        "discharge_pressure": 6.0833,
        "suction_pressure": 0.7948,
        "flow_rate": 117.9966,
        "motor_current": 49.5414,
        "vibration_rms": 2.466,
        "bearing_temp": 79.448
      },
      {
        "second": 152,
        "discharge_pressure": 5.7096,
        "suction_pressure": 0.7935,
        "flow_rate": 116.4452,
        "motor_current": 48.9943,
        "vibration_rms": 2.403,
        "bearing_temp": 80.6396
      },
      {
        "second": 153,
        "discharge_pressure": 5.7799,
        "suction_pressure": 0.7578,
        "flow_rate": 111.0826,
        "motor_current": 46.7027,
        "vibration_rms": 2.5969,
        "bearing_temp": 80.3626
      },
      {
        "second": 154,
        "discharge_pressure": 5.9537,
        "suction_pressure": 0.7915,
        "flow_rate": 114.1682,
        "motor_current": 48.7698,
        "vibration_rms": 2.5954,
        "bearing_temp": 79.1402
      },
      {
        "second": 155,
        "discharge_pressure": 6.0471,
        "suction_pressure": 0.7894,
        "flow_rate": 115.2418,
        "motor_current": 47.7497,
        "vibration_rms": 2.7223,
        "bearing_temp": 79.8448
      },
      {
        "second": 156,
        "discharge_pressure": 5.8297,
        "suction_pressure": 0.7938,
        "flow_rate": 112.629,
        "motor_current": 49.5563,
        "vibration_rms": 2.7162,
        "bearing_temp": 82.4041
      },
      {
        "second": 157,
        "discharge_pressure": 5.8618,
        "suction_pressure": 0.7753,
        "flow_rate": 114.0594,
        "motor_current": 48.5718,
        "vibration_rms": 2.5678,
        "bearing_temp": 79.3604
      },
      {
        "second": 158,
        "discharge_pressure": 5.8476,
        "suction_pressure": 0.7938,
        "flow_rate": 115.5537,
        "motor_current": 48.6248,
        "vibration_rms": 2.78,
        "bearing_temp": 77.8767
      },
      {
        "second": 159,
        "discharge_pressure": 6.1986,
        "suction_pressure": 0.7913,
        "flow_rate": 111.6425,
        "motor_current": 47.0928,
        "vibration_rms": 2.7044,
        "bearing_temp": 81.4485
      },
      {
        "second": 160,
        "discharge_pressure": 5.9687,
        "suction_pressure": 0.8127,
        "flow_rate": 117.8035,
        "motor_current": 47.6129,
        "vibration_rms": 2.3918,
        "bearing_temp": 80.1176
      },
      {
        "second": 161,
        "discharge_pressure": 5.6951,
        "suction_pressure": 0.7795,
        "flow_rate": 113.7355,
        "motor_current": 47.5533,
        "vibration_rms": 2.673,
        "bearing_temp": 79.2607
      },
      {
        "second": 162,
        "discharge_pressure": 5.6587,
        "suction_pressure": 0.7782,
        "flow_rate": 117.6717,
        "motor_current": 49.7067,
        "vibration_rms": 2.6206,
        "bearing_temp": 81.3151
      },
      {
        "second": 163,
        "discharge_pressure": 5.9454,
        "suction_pressure": 0.7797,
        "flow_rate": 117.061,
        "motor_current": 48.1104,
        "vibration_rms": 2.7216,
        "bearing_temp": 78.7767
      },
      {
        "second": 164,
        "discharge_pressure": 5.7668,
        "suction_pressure": 0.7987,
        "flow_rate": 119.6736,
        "motor_current": 48.642,
        "vibration_rms": 2.6398,
        "bearing_temp": 82.2758
      },
      {
        "second": 165,
        "discharge_pressure": 5.7168,
        "suction_pressure": 0.7813,
        "flow_rate": 114.5763,
        "motor_current": 49.6074,
        "vibration_rms": 2.6808,
        "bearing_temp": 80.6418
      },
      {
        "second": 166,
        "discharge_pressure": 5.9879,
        "suction_pressure": 0.7765,
        "flow_rate": 117.3213,
        "motor_current": 48.2986,
        "vibration_rms": 2.7524,
        "bearing_temp": 78.1233
      },
      {
        "second": 167,
        "discharge_pressure": 5.7156,
        "suction_pressure": 0.8035,
        "flow_rate": 110.5531,
        "motor_current": 48.5332,
        "vibration_rms": 2.6459,
        "bearing_temp": 82.6902
      },
      {
        "second": 168,
        "discharge_pressure": 6.0999,
        "suction_pressure": 0.7906,
        "flow_rate": 118.6526,
        "motor_current": 46.4154,
        "vibration_rms": 2.7796,
        "bearing_temp": 80.5278
      },
      {
        "second": 169,
        "discharge_pressure": 5.8707,
        "suction_pressure": 0.8045,
        "flow_rate": 113.0824,
        "motor_current": 48.4018,
        "vibration_rms": 2.7546,
        "bearing_temp": 79.9897
      },
      {
        "second": 170,
        "discharge_pressure": 5.7687,
        "suction_pressure": 0.8111,
        "flow_rate": 112.3775,
        "motor_current": 47.7367,
        "vibration_rms": 2.8245,
        "bearing_temp": 81.9764
      },
      {
        "second": 171,
        "discharge_pressure": 5.8074,
        "suction_pressure": 0.8053,
        "flow_rate": 116.2919,
        "motor_current": 47.4278,
        "vibration_rms": 2.8724,
        "bearing_temp": 82.1035
      },
      {
        "second": 172,
        "discharge_pressure": 6.0099,
        "suction_pressure": 0.8054,
        "flow_rate": 113.7155,
        "motor_current": 47.3137,
        "vibration_rms": 2.6692,
        "bearing_temp": 81.2048
      },
      {
        "second": 173,
        "discharge_pressure": 5.9595,
        "suction_pressure": 0.7815,
        "flow_rate": 116.2191,
        "motor_current": 48.0211,
        "vibration_rms": 2.7822,
        "bearing_temp": 78.6318
      },
      {
        "second": 174,
        "discharge_pressure": 5.8327,
        "suction_pressure": 0.8026,
        "flow_rate": 114.1457,
        "motor_current": 49.0052,
        "vibration_rms": 2.6909,
        "bearing_temp": 81.8821
      },
      {
        "second": 175,
        "discharge_pressure": 5.9552,
        "suction_pressure": 0.7853,
        "flow_rate": 119.1031,
        "motor_current": 48.2216,
        "vibration_rms": 2.7476,
        "bearing_temp": 81.6114
      },
      {
        "second": 176,
        "discharge_pressure": 5.836,
        "suction_pressure": 0.7898,
        "flow_rate": 116.1299,
        "motor_current": 49.1299,
        "vibration_rms": 2.6188,
        "bearing_temp": 82.2735
      },
      {
        "second": 177,
        "discharge_pressure": 5.9772,
        "suction_pressure": 0.7958,
        "flow_rate": 114.1425,
        "motor_current": 48.7865,
        "vibration_rms": 2.4996,
        "bearing_temp": 80.1726
      },
      {
        "second": 178,
        "discharge_pressure": 5.8366,
        "suction_pressure": 0.8013,
        "flow_rate": 115.0787,
        "motor_current": 47.8485,
        "vibration_rms": 2.7238,
        "bearing_temp": 81.7961
      },
      {
        "second": 179,
        "discharge_pressure": 5.9116,
        "suction_pressure": 0.7995,
        "flow_rate": 116.3845,
        "motor_current": 48.6994,
        "vibration_rms": 2.6215,
        "bearing_temp": 81.5206
      },
      {
        "second": 180,
        "discharge_pressure": 5.8414,
        "suction_pressure": 0.8054,
        "flow_rate": 111.8625,
        "motor_current": 49.2845,
        "vibration_rms": 3.5256,
        "bearing_temp": 80.0422
      },
      {
        "second": 181,
        "discharge_pressure": 5.9686,
        "suction_pressure": 0.7723,
        "flow_rate": 113.8654,
        "motor_current": 46.6186,
        "vibration_rms": 3.2906,
        "bearing_temp": 80.1144
      },
      {
        "second": 182,
        "discharge_pressure": 5.6636,
        "suction_pressure": 0.7876,
        "flow_rate": 117.365,
        "motor_current": 47.8118,
        "vibration_rms": 3.4442,
        "bearing_temp": 80.2847
      },
      {
        "second": 183,
        "discharge_pressure": 5.8442,
        "suction_pressure": 0.7948,
        "flow_rate": 115.9864,
        "motor_current": 50.0133,
        "vibration_rms": 2.7244,
        "bearing_temp": 83.5584
      },
      {
        "second": 184,
        "discharge_pressure": 5.9592,
        "suction_pressure": 0.791,
        "flow_rate": 112.1056,
        "motor_current": 48.7945,
        "vibration_rms": 2.6742,
        "bearing_temp": 80.3169
      },
      {
        "second": 185,
        "discharge_pressure": 5.8149,
        "suction_pressure": 0.7872,
        "flow_rate": 116.705,
        "motor_current": 47.7612,
        "vibration_rms": 2.5964,
        "bearing_temp": 82.4663
      },
      {
        "second": 186,
        "discharge_pressure": 5.9182,
        "suction_pressure": 0.7793,
        "flow_rate": 115.1277,
        "motor_current": 48.8336,
        "vibration_rms": 2.8029,
        "bearing_temp": 80.0674
      },
      {
        "second": 187,
        "discharge_pressure": 5.897,
        "suction_pressure": 0.8188,
        "flow_rate": 118.1275,
        "motor_current": 47.7044,
        "vibration_rms": 2.5661,
        "bearing_temp": 80.4384
      },
      {
        "second": 188,
        "discharge_pressure": 5.9821,
        "suction_pressure": 0.7821,
        "flow_rate": 114.6967,
        "motor_current": 47.4969,
        "vibration_rms": 2.7202,
        "bearing_temp": 82.3411
      },
      {
        "second": 189,
        "discharge_pressure": 5.808,
        "suction_pressure": 0.792,
        "flow_rate": 114.2192,
        "motor_current": 49.248,
        "vibration_rms": 2.639,
        "bearing_temp": 81.4111
      },
      {
        "second": 190,
        "discharge_pressure": 5.7093,
        "suction_pressure": 0.8042,
        "flow_rate": 114.5814,
        "motor_current": 46.7538,
        "vibration_rms": 2.6804,
        "bearing_temp": 81.0501
      },
      {
        "second": 191,
        "discharge_pressure": 5.8412,
        "suction_pressure": 0.8225,
        "flow_rate": 115.8716,
        "motor_current": 46.7872,
        "vibration_rms": 2.8119,
        "bearing_temp": 81.8705
      },
      {
        "second": 192,
        "discharge_pressure": 5.7361,
        "suction_pressure": 0.8132,
        "flow_rate": 110.3148,
        "motor_current": 48.2081,
        "vibration_rms": 2.6975,
        "bearing_temp": 78.7296
      },
      {
        "second": 193,
        "discharge_pressure": 5.6553,
        "suction_pressure": 0.8322,
        "flow_rate": 115.4331,
        "motor_current": 49.8353,
        "vibration_rms": 2.8748,
        "bearing_temp": 80.1144
      },
      {
        "second": 194,
        "discharge_pressure": 5.9552,
        "suction_pressure": 0.8192,
        "flow_rate": 114.7027,
        "motor_current": 47.6792,
        "vibration_rms": 2.8468,
        "bearing_temp": 81.635
      },
      {
        "second": 195,
        "discharge_pressure": 5.9207,
        "suction_pressure": 0.8099,
        "flow_rate": 116.2365,
        "motor_current": 48.1335,
        "vibration_rms": 2.6861,
        "bearing_temp": 81.0511
      },
      {
        "second": 196,
        "discharge_pressure": 5.7411,
        "suction_pressure": 0.7848,
        "flow_rate": 111.404,
        "motor_current": 48.5844,
        "vibration_rms": 2.5627,
        "bearing_temp": 81.381
      },
      {
        "second": 197,
        "discharge_pressure": 5.7808,
        "suction_pressure": 0.7647,
        "flow_rate": 114.8585,
        "motor_current": 49.5176,
        "vibration_rms": 2.5608,
        "bearing_temp": 83.1503
      },
      {
        "second": 198,
        "discharge_pressure": 5.8306,
        "suction_pressure": 0.8068,
        "flow_rate": 113.2288,
        "motor_current": 47.7068,
        "vibration_rms": 2.7139,
        "bearing_temp": 78.6397
      },
      {
        "second": 199,
        "discharge_pressure": 6.018,
        "suction_pressure": 0.7821,
        "flow_rate": 114.5003,
        "motor_current": 48.2158,
        "vibration_rms": 2.7401,
        "bearing_temp": 83.5546
      },
      {
        "second": 200,
        "discharge_pressure": 5.8183,
        "suction_pressure": 0.793,
        "flow_rate": 114.0295,
        "motor_current": 49.0985,
        "vibration_rms": 2.5891,
        "bearing_temp": 81.5484
      },
      {
        "second": 201,
        "discharge_pressure": 5.9813,
        "suction_pressure": 0.7746,
        "flow_rate": 118.459,
        "motor_current": 48.3058,
        "vibration_rms": 2.674,
        "bearing_temp": 77.4187
      },
      {
        "second": 202,
        "discharge_pressure": 5.7895,
        "suction_pressure": 0.8,
        "flow_rate": 111.3103,
        "motor_current": 47.9564,
        "vibration_rms": 2.6941,
        "bearing_temp": 83.3332
      },
      {
        "second": 203,
        "discharge_pressure": 5.6881,
        "suction_pressure": 0.7935,
        "flow_rate": 111.2682,
        "motor_current": 48.4036,
        "vibration_rms": 2.6102,
        "bearing_temp": 81.1558
      },
      {
        "second": 204,
        "discharge_pressure": 5.8488,
        "suction_pressure": 0.7855,
        "flow_rate": 116.5325,
        "motor_current": 48.9643,
        "vibration_rms": 2.6928,
        "bearing_temp": 82.6462
      },
      {
        "second": 205,
        "discharge_pressure": 5.6905,
        "suction_pressure": 0.8096,
        "flow_rate": 116.166,
        "motor_current": 47.2792,
        "vibration_rms": 2.7377,
        "bearing_temp": 82.556
      },
      {
        "second": 206,
        "discharge_pressure": 5.7912,
        "suction_pressure": 0.7918,
        "flow_rate": 112.0183,
        "motor_current": 47.8562,
        "vibration_rms": 2.7361,
        "bearing_temp": 83.3873
      },
      {
        "second": 207,
        "discharge_pressure": 6.0948,
        "suction_pressure": 0.7859,
        "flow_rate": 113.7865,
        "motor_current": 48.8618,
        "vibration_rms": 2.7731,
        "bearing_temp": 81.6439
      },
      {
        "second": 208,
        "discharge_pressure": 5.8298,
        "suction_pressure": 0.7692,
        "flow_rate": 115.8704,
        "motor_current": 48.9182,
        "vibration_rms": 2.5789,
        "bearing_temp": 80.0715
      },
      {
        "second": 209,
        "discharge_pressure": 5.8717,
        "suction_pressure": 0.7935,
        "flow_rate": 112.1948,
        "motor_current": 47.9501,
        "vibration_rms": 2.9109,
        "bearing_temp": 82.0108
      },
      {
        "second": 210,
        "discharge_pressure": 5.7809,
        "suction_pressure": 0.8138,
        "flow_rate": 112.071,
        "motor_current": 48.2836,
        "vibration_rms": 2.8294,
        "bearing_temp": 82.6235
      },
      {
        "second": 211,
        "discharge_pressure": 6.046,
        "suction_pressure": 0.7912,
        "flow_rate": 116.347,
        "motor_current": 49.4671,
        "vibration_rms": 2.9098,
        "bearing_temp": 82.2895
      },
      {
        "second": 212,
        "discharge_pressure": 5.8138,
        "suction_pressure": 0.7961,
        "flow_rate": 117.0408,
        "motor_current": 49.471,
        "vibration_rms": 2.676,
        "bearing_temp": 82.9852
      },
      {
        "second": 213,
        "discharge_pressure": 6.216,
        "suction_pressure": 0.7714,
        "flow_rate": 114.937,
        "motor_current": 49.5707,
        "vibration_rms": 2.9853,
        "bearing_temp": 85.2875
      },
      {
        "second": 214,
        "discharge_pressure": 5.7222,
        "suction_pressure": 0.8076,
        "flow_rate": 112.9413,
        "motor_current": 48.5333,
        "vibration_rms": 2.6532,
        "bearing_temp": 83.2777
      },
      {
        "second": 215,
        "discharge_pressure": 5.795,
        "suction_pressure": 0.795,
        "flow_rate": 114.3062,
        "motor_current": 48.5811,
        "vibration_rms": 2.8364,
        "bearing_temp": 83.2638
      },
      {
        "second": 216,
        "discharge_pressure": 6.0199,
        "suction_pressure": 0.8063,
        "flow_rate": 115.6307,
        "motor_current": 48.4592,
        "vibration_rms": 2.704,
        "bearing_temp": 82.0006
      },
      {
        "second": 217,
        "discharge_pressure": 6.1938,
        "suction_pressure": 0.7785,
        "flow_rate": 112.1537,
        "motor_current": 49.7788,
        "vibration_rms": 2.8577,
        "bearing_temp": 81.653
      },
      {
        "second": 218,
        "discharge_pressure": 5.9086,
        "suction_pressure": 0.7713,
        "flow_rate": 118.3826,
        "motor_current": 47.6387,
        "vibration_rms": 2.8299,
        "bearing_temp": 80.7882
      },
      {
        "second": 219,
        "discharge_pressure": 5.7063,
        "suction_pressure": 0.8072,
        "flow_rate": 117.467,
        "motor_current": 47.3409,
        "vibration_rms": 2.9836,
        "bearing_temp": 78.382
      },
      {
        "second": 220,
        "discharge_pressure": 5.8334,
        "suction_pressure": 0.7905,
        "flow_rate": 112.3207,
        "motor_current": 47.8956,
        "vibration_rms": 2.8753,
        "bearing_temp": 81.9512
      },
      {
        "second": 221,
        "discharge_pressure": 5.8408,
        "suction_pressure": 0.8025,
        "flow_rate": 114.4402,
        "motor_current": 48.5938,
        "vibration_rms": 2.5949,
        "bearing_temp": 83.2963
      },
      {
        "second": 222,
        "discharge_pressure": 5.7899,
        "suction_pressure": 0.7908,
        "flow_rate": 112.5423,
        "motor_current": 49.6958,
        "vibration_rms": 2.9134,
        "bearing_temp": 83.9537
      },
      {
        "second": 223,
        "discharge_pressure": 5.852,
        "suction_pressure": 0.805,
        "flow_rate": 118.1637,
        "motor_current": 48.8631,
        "vibration_rms": 2.7799,
        "bearing_temp": 80.5961
      },
      {
        "second": 224,
        "discharge_pressure": 5.6978,
        "suction_pressure": 0.7816,
        "flow_rate": 115.5517,
        "motor_current": 47.3158,
        "vibration_rms": 2.7678,
        "bearing_temp": 83.4483
      },
      {
        "second": 225,
        "discharge_pressure": 5.7037,
        "suction_pressure": 0.7984,
        "flow_rate": 115.7517,
        "motor_current": 48.8789,
        "vibration_rms": 2.7936,
        "bearing_temp": 82.5004
      },
      {
        "second": 226,
        "discharge_pressure": 5.7294,
        "suction_pressure": 0.7995,
        "flow_rate": 117.7441,
        "motor_current": 49.3243,
        "vibration_rms": 2.889,
        "bearing_temp": 80.4676
      },
      {
        "second": 227,
        "discharge_pressure": 5.88,
        "suction_pressure": 0.7845,
        "flow_rate": 111.5926,
        "motor_current": 49.2704,
        "vibration_rms": 2.5935,
        "bearing_temp": 82.5036
      },
      {
        "second": 228,
        "discharge_pressure": 5.9344,
        "suction_pressure": 0.7986,
        "flow_rate": 114.4778,
        "motor_current": 46.8869,
        "vibration_rms": 2.8132,
        "bearing_temp": 82.1655
      },
      {
        "second": 229,
        "discharge_pressure": 6.0086,
        "suction_pressure": 0.7758,
        "flow_rate": 115.318,
        "motor_current": 49.6289,
        "vibration_rms": 2.6703,
        "bearing_temp": 82.0108
      },
      {
        "second": 230,
        "discharge_pressure": 5.5993,
        "suction_pressure": 0.7935,
        "flow_rate": 112.2569,
        "motor_current": 47.8854,
        "vibration_rms": 2.7547,
        "bearing_temp": 81.215
      },
      {
        "second": 231,
        "discharge_pressure": 5.7588,
        "suction_pressure": 0.8162,
        "flow_rate": 114.1905,
        "motor_current": 49.9588,
        "vibration_rms": 2.8484,
        "bearing_temp": 82.4132
      },
      {
        "second": 232,
        "discharge_pressure": 5.8828,
        "suction_pressure": 0.779,
        "flow_rate": 122.5588,
        "motor_current": 46.6091,
        "vibration_rms": 2.8233,
        "bearing_temp": 81.7509
      },
      {
        "second": 233,
        "discharge_pressure": 5.8394,
        "suction_pressure": 0.8104,
        "flow_rate": 114.3215,
        "motor_current": 47.5215,
        "vibration_rms": 2.7424,
        "bearing_temp": 80.9548
      },
      {
        "second": 234,
        "discharge_pressure": 5.8941,
        "suction_pressure": 0.7834,
        "flow_rate": 115.0379,
        "motor_current": 48.7712,
        "vibration_rms": 2.8811,
        "bearing_temp": 80.5286
      },
      {
        "second": 235,
        "discharge_pressure": 5.8641,
        "suction_pressure": 0.8118,
        "flow_rate": 115.7858,
        "motor_current": 49.9162,
        "vibration_rms": 2.7869,
        "bearing_temp": 83.7173
      },
      {
        "second": 236,
        "discharge_pressure": 5.8161,
        "suction_pressure": 0.7986,
        "flow_rate": 114.4381,
        "motor_current": 49.9107,
        "vibration_rms": 2.8792,
        "bearing_temp": 81.1019
      },
      {
        "second": 237,
        "discharge_pressure": 5.6858,
        "suction_pressure": 0.7987,
        "flow_rate": 117.4447,
        "motor_current": 48.7501,
        "vibration_rms": 2.8745,
        "bearing_temp": 79.6939
      },
      {
        "second": 238,
        "discharge_pressure": 5.7749,
        "suction_pressure": 0.7877,
        "flow_rate": 113.1295,
        "motor_current": 48.3651,
        "vibration_rms": 2.7215,
        "bearing_temp": 82.445
      },
      {
        "second": 239,
        "discharge_pressure": 5.744,
        "suction_pressure": 0.7965,
        "flow_rate": 113.8344,
        "motor_current": 49.7405,
        "vibration_rms": 2.7939,
        "bearing_temp": 82.5331
      },
      {
        "second": 240,
        "discharge_pressure": 5.7277,
        "suction_pressure": 0.8064,
        "flow_rate": 118.0733,
        "motor_current": 48.7267,
        "vibration_rms": 3.2945,
        "bearing_temp": 80.7767
      },
      {
        "second": 241,
        "discharge_pressure": 5.8652,
        "suction_pressure": 0.8059,
        "flow_rate": 114.5543,
        "motor_current": 48.5996,
        "vibration_rms": 3.3994,
        "bearing_temp": 79.6069
      },
      {
        "second": 242,
        "discharge_pressure": 5.8879,
        "suction_pressure": 0.783,
        "flow_rate": 117.2147,
        "motor_current": 48.5434,
        "vibration_rms": 3.3655,
        "bearing_temp": 81.6288
      },
      {
        "second": 243,
        "discharge_pressure": 6.0279,
        "suction_pressure": 0.778,
        "flow_rate": 118.3394,
        "motor_current": 47.0512,
        "vibration_rms": 2.7627,
        "bearing_temp": 81.1207
      },
      {
        "second": 244,
        "discharge_pressure": 5.7741,
        "suction_pressure": 0.8037,
        "flow_rate": 118.1156,
        "motor_current": 47.3224,
        "vibration_rms": 2.9321,
        "bearing_temp": 83.9012
      },
      {
        "second": 245,
        "discharge_pressure": 5.7788,
        "suction_pressure": 0.7836,
        "flow_rate": 119.3876,
        "motor_current": 50.9027,
        "vibration_rms": 2.7242,
        "bearing_temp": 82.1648
      },
      {
        "second": 246,
        "discharge_pressure": 5.8441,
        "suction_pressure": 0.7971,
        "flow_rate": 116.2265,
        "motor_current": 48.7812,
        "vibration_rms": 2.7857,
        "bearing_temp": 84.1451
      },
      {
        "second": 247,
        "discharge_pressure": 5.9654,
        "suction_pressure": 0.7818,
        "flow_rate": 109.6071,
        "motor_current": 48.431,
        "vibration_rms": 2.7001,
        "bearing_temp": 82.5345
      },
      {
        "second": 248,
        "discharge_pressure": 5.868,
        "suction_pressure": 0.791,
        "flow_rate": 116.4841,
        "motor_current": 47.9912,
        "vibration_rms": 2.661,
        "bearing_temp": 80.9672
      },
      {
        "second": 249,
        "discharge_pressure": 6.0176,
        "suction_pressure": 0.7904,
        "flow_rate": 112.0874,
        "motor_current": 49.0037,
        "vibration_rms": 2.8633,
        "bearing_temp": 82.3273
      },
      {
        "second": 250,
        "discharge_pressure": 5.9698,
        "suction_pressure": 0.7944,
        "flow_rate": 111.2035,
        "motor_current": 50.5833,
        "vibration_rms": 2.7848,
        "bearing_temp": 82.9819
      },
      {
        "second": 251,
        "discharge_pressure": 5.7768,
        "suction_pressure": 0.7834,
        "flow_rate": 120.5887,
        "motor_current": 47.284,
        "vibration_rms": 2.8391,
        "bearing_temp": 83.8687
      },
      {
        "second": 252,
        "discharge_pressure": 5.9883,
        "suction_pressure": 0.806,
        "flow_rate": 115.7367,
        "motor_current": 49.8902,
        "vibration_rms": 2.6319,
        "bearing_temp": 82.0828
      },
      {
        "second": 253,
        "discharge_pressure": 5.6864,
        "suction_pressure": 0.8024,
        "flow_rate": 114.0196,
        "motor_current": 49.5288,
        "vibration_rms": 2.7414,
        "bearing_temp": 82.6812
      },
      {
        "second": 254,
        "discharge_pressure": 5.6606,
        "suction_pressure": 0.8064,
        "flow_rate": 112.7508,
        "motor_current": 49.0734,
        "vibration_rms": 2.7624,
        "bearing_temp": 82.1888
      },
      {
        "second": 255,
        "discharge_pressure": 6.0132,
        "suction_pressure": 0.8151,
        "flow_rate": 117.5764,
        "motor_current": 48.1741,
        "vibration_rms": 2.7687,
        "bearing_temp": 82.1117
      },
      {
        "second": 256,
        "discharge_pressure": 5.9719,
        "suction_pressure": 0.7894,
        "flow_rate": 113.4374,
        "motor_current": 48.2068,
        "vibration_rms": 2.7249,
        "bearing_temp": 82.9177
      },
      {
        "second": 257,
        "discharge_pressure": 5.9003,
        "suction_pressure": 0.8095,
        "flow_rate": 118.2698,
        "motor_current": 49.2999,
        "vibration_rms": 2.7092,
        "bearing_temp": 82.3626
      },
      {
        "second": 258,
        "discharge_pressure": 5.8206,
        "suction_pressure": 0.8038,
        "flow_rate": 114.3975,
        "motor_current": 49.181,
        "vibration_rms": 2.6396,
        "bearing_temp": 81.0796
      },
      {
        "second": 259,
        "discharge_pressure": 6.049,
        "suction_pressure": 0.8113,
        "flow_rate": 114.0466,
        "motor_current": 49.6247,
        "vibration_rms": 2.9515,
        "bearing_temp": 83.1752
      },
      {
        "second": 260,
        "discharge_pressure": 5.8998,
        "suction_pressure": 0.7805,
        "flow_rate": 115.0484,
        "motor_current": 48.8755,
        "vibration_rms": 2.7557,
        "bearing_temp": 78.9969
      },
      {
        "second": 261,
        "discharge_pressure": 5.8959,
        "suction_pressure": 0.7808,
        "flow_rate": 111.6673,
        "motor_current": 47.3218,
        "vibration_rms": 2.6673,
        "bearing_temp": 83.6042
      },
      {
        "second": 262,
        "discharge_pressure": 6.0732,
        "suction_pressure": 0.7805,
        "flow_rate": 113.4776,
        "motor_current": 48.7219,
        "vibration_rms": 2.7626,
        "bearing_temp": 81.9887
      },
      {
        "second": 263,
        "discharge_pressure": 5.6573,
        "suction_pressure": 0.8201,
        "flow_rate": 118.3412,
        "motor_current": 48.6617,
        "vibration_rms": 2.6116,
        "bearing_temp": 83.1271
      },
      {
        "second": 264,
        "discharge_pressure": 5.9278,
        "suction_pressure": 0.7849,
        "flow_rate": 117.3654,
        "motor_current": 46.979,
        "vibration_rms": 2.6375,
        "bearing_temp": 82.1015
      },
      {
        "second": 265,
        "discharge_pressure": 5.7826,
        "suction_pressure": 0.7914,
        "flow_rate": 113.2362,
        "motor_current": 50.102,
        "vibration_rms": 2.6682,
        "bearing_temp": 80.6906
      },
      {
        "second": 266,
        "discharge_pressure": 5.698,
        "suction_pressure": 0.7982,
        "flow_rate": 115.0748,
        "motor_current": 48.1853,
        "vibration_rms": 2.7501,
        "bearing_temp": 78.9118
      },
      {
        "second": 267,
        "discharge_pressure": 5.7587,
        "suction_pressure": 0.8108,
        "flow_rate": 114.8877,
        "motor_current": 47.6221,
        "vibration_rms": 2.9046,
        "bearing_temp": 82.4393
      },
      {
        "second": 268,
        "discharge_pressure": 6.0463,
        "suction_pressure": 0.8035,
        "flow_rate": 119.6142,
        "motor_current": 50.5126,
        "vibration_rms": 2.6155,
        "bearing_temp": 82.1446
      },
      {
        "second": 269,
        "discharge_pressure": 5.8913,
        "suction_pressure": 0.8061,
        "flow_rate": 110.2957,
        "motor_current": 48.2214,
        "vibration_rms": 2.8449,
        "bearing_temp": 81.2442
      },
      {
        "second": 270,
        "discharge_pressure": 5.8682,
        "suction_pressure": 0.7989,
        "flow_rate": 116.2588,
        "motor_current": 45.9699,
        "vibration_rms": 2.7766,
        "bearing_temp": 82.2353
      },
      {
        "second": 271,
        "discharge_pressure": 5.9946,
        "suction_pressure": 0.8016,
        "flow_rate": 115.1415,
        "motor_current": 49.1537,
        "vibration_rms": 2.9194,
        "bearing_temp": 81.5934
      },
      {
        "second": 272,
        "discharge_pressure": 5.6726,
        "suction_pressure": 0.7838,
        "flow_rate": 114.4507,
        "motor_current": 49.9853,
        "vibration_rms": 2.7954,
        "bearing_temp": 83.6812
      },
      {
        "second": 273,
        "discharge_pressure": 5.8772,
        "suction_pressure": 0.8042,
        "flow_rate": 114.0358,
        "motor_current": 48.5692,
        "vibration_rms": 2.6737,
        "bearing_temp": 81.4533
      },
      {
        "second": 274,
        "discharge_pressure": 5.7177,
        "suction_pressure": 0.7909,
        "flow_rate": 116.9399,
        "motor_current": 48.5886,
        "vibration_rms": 2.8317,
        "bearing_temp": 82.1082
      },
      {
        "second": 275,
        "discharge_pressure": 5.8574,
        "suction_pressure": 0.791,
        "flow_rate": 115.8386,
        "motor_current": 48.1286,
        "vibration_rms": 2.7331,
        "bearing_temp": 80.8242
      },
      {
        "second": 276,
        "discharge_pressure": 6.0393,
        "suction_pressure": 0.7799,
        "flow_rate": 115.1556,
        "motor_current": 48.8998,
        "vibration_rms": 2.8327,
        "bearing_temp": 81.053
      },
      {
        "second": 277,
        "discharge_pressure": 5.8731,
        "suction_pressure": 0.7891,
        "flow_rate": 113.8168,
        "motor_current": 48.6395,
        "vibration_rms": 2.9082,
        "bearing_temp": 82.1799
      },
      {
        "second": 278,
        "discharge_pressure": 5.8052,
        "suction_pressure": 0.7996,
        "flow_rate": 117.2048,
        "motor_current": 49.5013,
        "vibration_rms": 2.8437,
        "bearing_temp": 81.9045
      },
      {
        "second": 279,
        "discharge_pressure": 5.9493,
        "suction_pressure": 0.7831,
        "flow_rate": 111.6476,
        "motor_current": 48.5227,
        "vibration_rms": 2.7895,
        "bearing_temp": 81.1365
      },
      {
        "second": 280,
        "discharge_pressure": 6.0894,
        "suction_pressure": 0.7739,
        "flow_rate": 112.8924,
        "motor_current": 48.7764,
        "vibration_rms": 2.6355,
        "bearing_temp": 82.7174
      },
      {
        "second": 281,
        "discharge_pressure": 5.9704,
        "suction_pressure": 0.7814,
        "flow_rate": 115.5937,
        "motor_current": 48.7998,
        "vibration_rms": 2.8208,
        "bearing_temp": 83.77
      },
      {
        "second": 282,
        "discharge_pressure": 5.7351,
        "suction_pressure": 0.7895,
        "flow_rate": 115.8648,
        "motor_current": 47.8014,
        "vibration_rms": 2.8583,
        "bearing_temp": 83.1912
      },
      {
        "second": 283,
        "discharge_pressure": 5.9121,
        "suction_pressure": 0.7877,
        "flow_rate": 111.7259,
        "motor_current": 48.3684,
        "vibration_rms": 2.728,
        "bearing_temp": 81.4773
      },
      {
        "second": 284,
        "discharge_pressure": 5.8849,
        "suction_pressure": 0.8063,
        "flow_rate": 115.9297,
        "motor_current": 47.9077,
        "vibration_rms": 2.8893,
        "bearing_temp": 83.5068
      },
      {
        "second": 285,
        "discharge_pressure": 5.8187,
        "suction_pressure": 0.7793,
        "flow_rate": 115.3736,
        "motor_current": 48.4588,
        "vibration_rms": 2.8784,
        "bearing_temp": 81.5302
      },
      {
        "second": 286,
        "discharge_pressure": 5.8596,
        "suction_pressure": 0.7825,
        "flow_rate": 114.6345,
        "motor_current": 48.5407,
        "vibration_rms": 2.8291,
        "bearing_temp": 82.0949
      },
      {
        "second": 287,
        "discharge_pressure": 5.8612,
        "suction_pressure": 0.8035,
        "flow_rate": 116.1716,
        "motor_current": 49.6169,
        "vibration_rms": 2.5795,
        "bearing_temp": 83.7488
      },
      {
        "second": 288,
        "discharge_pressure": 5.7744,
        "suction_pressure": 0.7981,
        "flow_rate": 112.7342,
        "motor_current": 49.9377,
        "vibration_rms": 2.8744,
        "bearing_temp": 81.4002
      },
      {
        "second": 289,
        "discharge_pressure": 5.7977,
        "suction_pressure": 0.7998,
        "flow_rate": 110.7029,
        "motor_current": 46.339,
        "vibration_rms": 3.0021,
        "bearing_temp": 83.4956
      },
      {
        "second": 290,
        "discharge_pressure": 5.8044,
        "suction_pressure": 0.8047,
        "flow_rate": 117.6307,
        "motor_current": 48.7145,
        "vibration_rms": 2.7559,
        "bearing_temp": 82.7169
      },
      {
        "second": 291,
        "discharge_pressure": 5.796,
        "suction_pressure": 0.7825,
        "flow_rate": 114.4884,
        "motor_current": 49.5338,
        "vibration_rms": 2.8393,
        "bearing_temp": 82.3883
      },
      {
        "second": 292,
        "discharge_pressure": 5.9399,
        "suction_pressure": 0.8216,
        "flow_rate": 117.9227,
        "motor_current": 47.7522,
        "vibration_rms": 2.7451,
        "bearing_temp": 80.832
      },
      {
        "second": 293,
        "discharge_pressure": 5.9335,
        "suction_pressure": 0.7961,
        "flow_rate": 111.6329,
        "motor_current": 47.5883,
        "vibration_rms": 2.7407,
        "bearing_temp": 79.8925
      },
      {
        "second": 294,
        "discharge_pressure": 5.9348,
        "suction_pressure": 0.8076,
        "flow_rate": 116.0858,
        "motor_current": 47.7927,
        "vibration_rms": 2.5868,
        "bearing_temp": 82.0075
      },
      {
        "second": 295,
        "discharge_pressure": 5.9002,
        "suction_pressure": 0.798,
        "flow_rate": 112.0614,
        "motor_current": 48.0806,
        "vibration_rms": 2.8692,
        "bearing_temp": 83.4728
      },
      {
        "second": 296,
        "discharge_pressure": 5.7064,
        "suction_pressure": 0.7941,
        "flow_rate": 116.9279,
        "motor_current": 48.7054,
        "vibration_rms": 2.7666,
        "bearing_temp": 83.0858
      },
      {
        "second": 297,
        "discharge_pressure": 6.0169,
        "suction_pressure": 0.7779,
        "flow_rate": 114.861,
        "motor_current": 49.1683,
        "vibration_rms": 2.6371,
        "bearing_temp": 81.6429
      },
      {
        "second": 298,
        "discharge_pressure": 5.7732,
        "suction_pressure": 0.7884,
        "flow_rate": 118.2035,
        "motor_current": 47.6777,
        "vibration_rms": 2.8052,
        "bearing_temp": 81.6133
      },
      {
        "second": 299,
        "discharge_pressure": 5.7899,
        "suction_pressure": 0.8087,
        "flow_rate": 113.3625,
        "motor_current": 50.1365,
        "vibration_rms": 2.9867,
        "bearing_temp": 80.8758
      },
      {
        "second": 300,
        "discharge_pressure": 6.0399,
        "suction_pressure": 0.7911,
        "flow_rate": 118.946,
        "motor_current": 48.5059,
        "vibration_rms": 3.3303,
        "bearing_temp": 82.9845
      },
      {
        "second": 301,
        "discharge_pressure": 6.1399,
        "suction_pressure": 0.7983,
        "flow_rate": 114.8766,
        "motor_current": 46.7459,
        "vibration_rms": 3.7111,
        "bearing_temp": 83.5034
      },
      {
        "second": 302,
        "discharge_pressure": 5.8023,
        "suction_pressure": 0.8201,
        "flow_rate": 114.8258,
        "motor_current": 49.3879,
        "vibration_rms": 3.3164,
        "bearing_temp": 81.5796
      },
      {
        "second": 303,
        "discharge_pressure": 5.6032,
        "suction_pressure": 0.8284,
        "flow_rate": 114.9484,
        "motor_current": 48.0981,
        "vibration_rms": 2.8385,
        "bearing_temp": 80.086
      },
      {
        "second": 304,
        "discharge_pressure": 5.9679,
        "suction_pressure": 0.7794,
        "flow_rate": 116.1533,
        "motor_current": 48.1972,
        "vibration_rms": 3.0098,
        "bearing_temp": 80.9836
      },
      {
        "second": 305,
        "discharge_pressure": 5.8166,
        "suction_pressure": 0.826,
        "flow_rate": 116.6532,
        "motor_current": 50.0093,
        "vibration_rms": 2.7671,
        "bearing_temp": 80.8071
      },
      {
        "second": 306,
        "discharge_pressure": 5.7167,
        "suction_pressure": 0.7915,
        "flow_rate": 114.9846,
        "motor_current": 49.9025,
        "vibration_rms": 2.8003,
        "bearing_temp": 78.4241
      },
      {
        "second": 307,
        "discharge_pressure": 5.8645,
        "suction_pressure": 0.7858,
        "flow_rate": 115.8579,
        "motor_current": 48.6239,
        "vibration_rms": 2.7716,
        "bearing_temp": 82.1369
      },
      {
        "second": 308,
        "discharge_pressure": 5.8186,
        "suction_pressure": 0.7809,
        "flow_rate": 114.6916,
        "motor_current": 47.9773,
        "vibration_rms": 2.737,
        "bearing_temp": 80.864
      },
      {
        "second": 309,
        "discharge_pressure": 5.8299,
        "suction_pressure": 0.8032,
        "flow_rate": 117.2206,
        "motor_current": 48.2912,
        "vibration_rms": 2.759,
        "bearing_temp": 82.5294
      },
      {
        "second": 310,
        "discharge_pressure": 5.5944,
        "suction_pressure": 0.7908,
        "flow_rate": 111.5752,
        "motor_current": 47.8195,
        "vibration_rms": 2.9399,
        "bearing_temp": 82.142
      },
      {
        "second": 311,
        "discharge_pressure": 5.7879,
        "suction_pressure": 0.7787,
        "flow_rate": 116.4419,
        "motor_current": 48.4087,
        "vibration_rms": 3.0549,
        "bearing_temp": 81.5002
      },
      {
        "second": 312,
        "discharge_pressure": 5.7342,
        "suction_pressure": 0.7896,
        "flow_rate": 114.0643,
        "motor_current": 48.4216,
        "vibration_rms": 2.8473,
        "bearing_temp": 81.8912
      },
      {
        "second": 313,
        "discharge_pressure": 5.8495,
        "suction_pressure": 0.8083,
        "flow_rate": 118.6455,
        "motor_current": 49.7936,
        "vibration_rms": 2.6541,
        "bearing_temp": 83.1689
      },
      {
        "second": 314,
        "discharge_pressure": 6.0589,
        "suction_pressure": 0.7721,
        "flow_rate": 114.1158,
        "motor_current": 48.1382,
        "vibration_rms": 2.7289,
        "bearing_temp": 82.123
      },
      {
        "second": 315,
        "discharge_pressure": 5.7642,
        "suction_pressure": 0.8155,
        "flow_rate": 120.2863,
        "motor_current": 48.7529,
        "vibration_rms": 2.7232,
        "bearing_temp": 81.2806
      },
      {
        "second": 316,
        "discharge_pressure": 5.8049,
        "suction_pressure": 0.7967,
        "flow_rate": 114.4706,
        "motor_current": 48.6011,
        "vibration_rms": 2.6827,
        "bearing_temp": 82.8251
      },
      {
        "second": 317,
        "discharge_pressure": 6.0991,
        "suction_pressure": 0.8063,
        "flow_rate": 114.4088,
        "motor_current": 50.1522,
        "vibration_rms": 2.7845,
        "bearing_temp": 84.0458
      },
      {
        "second": 318,
        "discharge_pressure": 5.9228,
        "suction_pressure": 0.7975,
        "flow_rate": 116.4364,
        "motor_current": 49.164,
        "vibration_rms": 2.8159,
        "bearing_temp": 78.2444
      },
      {
        "second": 319,
        "discharge_pressure": 5.815,
        "suction_pressure": 0.7817,
        "flow_rate": 113.8628,
        "motor_current": 46.8036,
        "vibration_rms": 2.5961,
        "bearing_temp": 79.8247
      },
      {
        "second": 320,
        "discharge_pressure": 6.0671,
        "suction_pressure": 0.7824,
        "flow_rate": 111.7541,
        "motor_current": 49.4775,
        "vibration_rms": 3.0055,
        "bearing_temp": 83.3291
      },
      {
        "second": 321,
        "discharge_pressure": 5.7883,
        "suction_pressure": 0.8052,
        "flow_rate": 116.5841,
        "motor_current": 48.4489,
        "vibration_rms": 2.7372,
        "bearing_temp": 83.3416
      },
      {
        "second": 322,
        "discharge_pressure": 5.6607,
        "suction_pressure": 0.7818,
        "flow_rate": 117.8258,
        "motor_current": 48.0545,
        "vibration_rms": 2.8533,
        "bearing_temp": 80.6435
      },
      {
        "second": 323,
        "discharge_pressure": 5.8696,
        "suction_pressure": 0.8086,
        "flow_rate": 116.6934,
        "motor_current": 48.6416,
        "vibration_rms": 2.88,
        "bearing_temp": 82.7418
      },
      {
        "second": 324,
        "discharge_pressure": 5.8026,
        "suction_pressure": 0.7677,
        "flow_rate": 113.1468,
        "motor_current": 49.0484,
        "vibration_rms": 2.7634,
        "bearing_temp": 81.618
      },
      {
        "second": 325,
        "discharge_pressure": 5.7368,
        "suction_pressure": 0.8098,
        "flow_rate": 115.2896,
        "motor_current": 48.9538,
        "vibration_rms": 2.7633,
        "bearing_temp": 81.519
      },
      {
        "second": 326,
        "discharge_pressure": 5.8097,
        "suction_pressure": 0.786,
        "flow_rate": 110.5412,
        "motor_current": 46.8647,
        "vibration_rms": 2.7831,
        "bearing_temp": 82.4044
      },
      {
        "second": 327,
        "discharge_pressure": 5.6767,
        "suction_pressure": 0.8121,
        "flow_rate": 113.056,
        "motor_current": 47.1092,
        "vibration_rms": 2.9315,
        "bearing_temp": 83.4095
      },
      {
        "second": 328,
        "discharge_pressure": 5.7862,
        "suction_pressure": 0.8046,
        "flow_rate": 116.9993,
        "motor_current": 50.5696,
        "vibration_rms": 2.9614,
        "bearing_temp": 83.7795
      },
      {
        "second": 329,
        "discharge_pressure": 5.7783,
        "suction_pressure": 0.7893,
        "flow_rate": 113.6454,
        "motor_current": 47.392,
        "vibration_rms": 2.7991,
        "bearing_temp": 81.0876
      },
      {
        "second": 330,
        "discharge_pressure": 5.9291,
        "suction_pressure": 0.7839,
        "flow_rate": 112.8855,
        "motor_current": 46.8778,
        "vibration_rms": 2.828,
        "bearing_temp": 79.0021
      },
      {
        "second": 331,
        "discharge_pressure": 6.0082,
        "suction_pressure": 0.7886,
        "flow_rate": 111.855,
        "motor_current": 48.963,
        "vibration_rms": 2.9291,
        "bearing_temp": 81.029
      },
      {
        "second": 332,
        "discharge_pressure": 5.8245,
        "suction_pressure": 0.7738,
        "flow_rate": 110.738,
        "motor_current": 50.6815,
        "vibration_rms": 2.7387,
        "bearing_temp": 81.2993
      },
      {
        "second": 333,
        "discharge_pressure": 6.0128,
        "suction_pressure": 0.7919,
        "flow_rate": 114.804,
        "motor_current": 50.3142,
        "vibration_rms": 2.7396,
        "bearing_temp": 80.4059
      },
      {
        "second": 334,
        "discharge_pressure": 5.8356,
        "suction_pressure": 0.7955,
        "flow_rate": 111.4349,
        "motor_current": 47.7123,
        "vibration_rms": 2.9781,
        "bearing_temp": 80.6197
      },
      {
        "second": 335,
        "discharge_pressure": 5.8839,
        "suction_pressure": 0.7863,
        "flow_rate": 119.3203,
        "motor_current": 47.6402,
        "vibration_rms": 2.7624,
        "bearing_temp": 80.5474
      },
      {
        "second": 336,
        "discharge_pressure": 5.9781,
        "suction_pressure": 0.7837,
        "flow_rate": 115.8914,
        "motor_current": 49.2258,
        "vibration_rms": 2.8143,
        "bearing_temp": 85.0983
      },
      {
        "second": 337,
        "discharge_pressure": 5.8507,
        "suction_pressure": 0.7903,
        "flow_rate": 114.6976,
        "motor_current": 47.7973,
        "vibration_rms": 2.6643,
        "bearing_temp": 84.0225
      },
      {
        "second": 338,
        "discharge_pressure": 5.8441,
        "suction_pressure": 0.7903,
        "flow_rate": 117.729,
        "motor_current": 49.0916,
        "vibration_rms": 2.7552,
        "bearing_temp": 81.8701
      },
      {
        "second": 339,
        "discharge_pressure": 5.7243,
        "suction_pressure": 0.7887,
        "flow_rate": 110.0145,
        "motor_current": 49.425,
        "vibration_rms": 2.9245,
        "bearing_temp": 83.5405
      },
      {
        "second": 340,
        "discharge_pressure": 5.9589,
        "suction_pressure": 0.7919,
        "flow_rate": 116.8278,
        "motor_current": 49.0259,
        "vibration_rms": 2.7409,
        "bearing_temp": 82.3718
      },
      {
        "second": 341,
        "discharge_pressure": 5.7808,
        "suction_pressure": 0.8208,
        "flow_rate": 112.8729,
        "motor_current": 48.1168,
        "vibration_rms": 2.6178,
        "bearing_temp": 83.3413
      },
      {
        "second": 342,
        "discharge_pressure": 5.7431,
        "suction_pressure": 0.7984,
        "flow_rate": 116.8627,
        "motor_current": 48.5427,
        "vibration_rms": 3.0044,
        "bearing_temp": 83.5282
      },
      {
        "second": 343,
        "discharge_pressure": 5.9517,
        "suction_pressure": 0.8015,
        "flow_rate": 117.7796,
        "motor_current": 48.0627,
        "vibration_rms": 2.8143,
        "bearing_temp": 82.8774
      },
      {
        "second": 344,
        "discharge_pressure": 5.7925,
        "suction_pressure": 0.7777,
        "flow_rate": 117.657,
        "motor_current": 48.1674,
        "vibration_rms": 2.7569,
        "bearing_temp": 83.3019
      },
      {
        "second": 345,
        "discharge_pressure": 5.8431,
        "suction_pressure": 0.8093,
        "flow_rate": 113.5493,
        "motor_current": 47.9134,
        "vibration_rms": 2.8888,
        "bearing_temp": 82.2617
      },
      {
        "second": 346,
        "discharge_pressure": 5.8714,
        "suction_pressure": 0.7908,
        "flow_rate": 116.5582,
        "motor_current": 48.5572,
        "vibration_rms": 2.7172,
        "bearing_temp": 83.8796
      },
      {
        "second": 347,
        "discharge_pressure": 5.9047,
        "suction_pressure": 0.8035,
        "flow_rate": 112.5375,
        "motor_current": 46.9482,
        "vibration_rms": 2.7976,
        "bearing_temp": 82.5338
      },
      {
        "second": 348,
        "discharge_pressure": 6.0077,
        "suction_pressure": 0.8093,
        "flow_rate": 117.9339,
        "motor_current": 49.2934,
        "vibration_rms": 2.7763,
        "bearing_temp": 80.8774
      },
      {
        "second": 349,
        "discharge_pressure": 5.9894,
        "suction_pressure": 0.8021,
        "flow_rate": 112.4532,
        "motor_current": 48.4932,
        "vibration_rms": 2.7839,
        "bearing_temp": 80.5841
      },
      {
        "second": 350,
        "discharge_pressure": 5.9233,
        "suction_pressure": 0.8024,
        "flow_rate": 114.615,
        "motor_current": 47.3687,
        "vibration_rms": 2.6936,
        "bearing_temp": 80.6653
      },
      {
        "second": 351,
        "discharge_pressure": 5.9084,
        "suction_pressure": 0.8079,
        "flow_rate": 113.1108,
        "motor_current": 48.325,
        "vibration_rms": 2.7258,
        "bearing_temp": 83.7921
      },
      {
        "second": 352,
        "discharge_pressure": 5.9035,
        "suction_pressure": 0.7699,
        "flow_rate": 115.8903,
        "motor_current": 48.5909,
        "vibration_rms": 2.7823,
        "bearing_temp": 81.071
      },
      {
        "second": 353,
        "discharge_pressure": 5.9833,
        "suction_pressure": 0.802,
        "flow_rate": 114.4881,
        "motor_current": 48.1942,
        "vibration_rms": 2.976,
        "bearing_temp": 82.9961
      },
      {
        "second": 354,
        "discharge_pressure": 5.7815,
        "suction_pressure": 0.7734,
        "flow_rate": 114.6291,
        "motor_current": 48.5713,
        "vibration_rms": 2.7112,
        "bearing_temp": 80.7359
      },
      {
        "second": 355,
        "discharge_pressure": 5.8735,
        "suction_pressure": 0.7867,
        "flow_rate": 114.2828,
        "motor_current": 49.7088,
        "vibration_rms": 2.864,
        "bearing_temp": 82.1525
      },
      {
        "second": 356,
        "discharge_pressure": 5.9557,
        "suction_pressure": 0.7853,
        "flow_rate": 113.1515,
        "motor_current": 49.2109,
        "vibration_rms": 2.7657,
        "bearing_temp": 79.0239
      },
      {
        "second": 357,
        "discharge_pressure": 5.9866,
        "suction_pressure": 0.7923,
        "flow_rate": 119.7241,
        "motor_current": 47.9471,
        "vibration_rms": 2.6135,
        "bearing_temp": 80.5217
      },
      {
        "second": 358,
        "discharge_pressure": 6.0035,
        "suction_pressure": 0.7991,
        "flow_rate": 112.4592,
        "motor_current": 49.0519,
        "vibration_rms": 2.7711,
        "bearing_temp": 84.6067
      },
      {
        "second": 359,
        "discharge_pressure": 6.0208,
        "suction_pressure": 0.7865,
        "flow_rate": 117.0595,
        "motor_current": 48.4017,
        "vibration_rms": 2.7765,
        "bearing_temp": 80.543
      }
    ],
    "timeline": [
      {
        "second": 59,
        "candidate": "BEARING_WEAR",
        "probabilities": {
          "HEALTHY": 0.010548368096470093,
          "CAVITATION": 0.0000036739792851821917,
          "BEARING_WEAR": 0.9891586542073948,
          "SEAL_LEAK": 0.00028930371684984986
        },
        "accepted": false,
        "anomaly_score": 0.9894516319035299
      },
      {
        "second": 89,
        "candidate": "BEARING_WEAR",
        "probabilities": {
          "HEALTHY": 8.786009858170671e-7,
          "CAVITATION": 1.3061907579326434e-8,
          "BEARING_WEAR": 0.9999982253351524,
          "SEAL_LEAK": 8.830019543151445e-7
        },
        "accepted": false,
        "anomaly_score": 0.9999991213990141
      },
      {
        "second": 119,
        "candidate": "BEARING_WEAR",
        "probabilities": {
          "HEALTHY": 2.96347308376157e-11,
          "CAVITATION": 1.427466607240617e-10,
          "BEARING_WEAR": 0.9999999966274812,
          "SEAL_LEAK": 3.200137478994635e-9
        },
        "accepted": false,
        "anomaly_score": 0.9999999999703653
      },
      {
        "second": 149,
        "candidate": "BEARING_WEAR",
        "probabilities": {
          "HEALTHY": 1.389495512491239e-13,
          "CAVITATION": 6.31907956680005e-13,
          "BEARING_WEAR": 0.9999999999973289,
          "SEAL_LEAK": 1.900260732078138e-12
        },
        "accepted": false,
        "anomaly_score": 0.999999999999861
      },
      {
        "second": 179,
        "candidate": "BEARING_WEAR",
        "probabilities": {
          "HEALTHY": 1.3895030195520412e-13,
          "CAVITATION": 3.432229492230918e-9,
          "BEARING_WEAR": 0.9999999859942484,
          "SEAL_LEAK": 1.0573383112728011e-8
        },
        "accepted": false,
        "anomaly_score": 0.999999999999861
      },
      {
        "second": 209,
        "candidate": "BEARING_WEAR",
        "probabilities": {
          "HEALTHY": 1.3895044007241142e-13,
          "CAVITATION": 4.809802801828529e-9,
          "BEARING_WEAR": 0.9999999823388981,
          "SEAL_LEAK": 1.2851160109229445e-8
        },
        "accepted": false,
        "anomaly_score": 0.999999999999861
      },
      {
        "second": 239,
        "candidate": "BEARING_WEAR",
        "probabilities": {
          "HEALTHY": 1.389521540019676e-13,
          "CAVITATION": 3.2390608088313636e-8,
          "BEARING_WEAR": 0.9999999202769395,
          "SEAL_LEAK": 4.733231344415616e-8
        },
        "accepted": true,
        "anomaly_score": 0.999999999999861
      },
      {
        "second": 269,
        "candidate": "BEARING_WEAR",
        "probabilities": {
          "HEALTHY": 1.7984322927832306e-13,
          "CAVITATION": 9.557496641875787e-8,
          "BEARING_WEAR": 0.9999997140308458,
          "SEAL_LEAK": 1.9039400793943146e-7
        },
        "accepted": true,
        "anomaly_score": 0.9999999999998201
      },
      {
        "second": 299,
        "candidate": "BEARING_WEAR",
        "probabilities": {
          "HEALTHY": 1.771482899929731e-13,
          "CAVITATION": 5.68766095783049e-8,
          "BEARING_WEAR": 0.9999997686972029,
          "SEAL_LEAK": 1.7442601034528466e-7
        },
        "accepted": true,
        "anomaly_score": 0.9999999999998228
      },
      {
        "second": 329,
        "candidate": "BEARING_WEAR",
        "probabilities": {
          "HEALTHY": 1.389506926343696e-13,
          "CAVITATION": 9.442482500651313e-9,
          "BEARING_WEAR": 0.9999999753842683,
          "SEAL_LEAK": 1.5173110250598994e-8
        },
        "accepted": true,
        "anomaly_score": 0.999999999999861
      },
      {
        "second": 359,
        "candidate": "BEARING_WEAR",
        "probabilities": {
          "HEALTHY": 2.329406101067766e-13,
          "CAVITATION": 1.3038304619956257e-7,
          "BEARING_WEAR": 0.9999997597115525,
          "SEAL_LEAK": 1.0990516830837091e-7
        },
        "accepted": true,
        "anomaly_score": 0.9999999999997671
      }
    ],
    "explanations": [
      {
        "feature": "vibration_rms_std",
        "contribution": 2.83
      },
      {
        "feature": "bearing_temp_mean",
        "contribution": 2.274
      },
      {
        "feature": "bearing_temp_q10",
        "contribution": 2.261
      },
      {
        "feature": "bearing_temp_q90",
        "contribution": 2.181
      },
      {
        "feature": "vibration_rms_trend",
        "contribution": -0.902
      }
    ],
    "limitations": [
      "Synthetic benchmark only; no real-pump diagnostic validation.",
      "Calibrated probabilities and prediction sets apply to exchangeable benchmark episodes.",
      "Mixed faults and early onset are not certified; uncertain outputs require review.",
      "Feature contributions explain model log-odds, not physical causation."
    ],
    "benchmark": {
      "episodes": 500,
      "classes": 4,
      "macroF1": 1,
      "accepted": 454,
      "abstained": 46,
      "coverage": 0.908,
      "scope": "Independent simulated centrifugal pump histories. No real-equipment validation."
    }
  },
  "geo": {
    "source": "Synthetic comparison · no planning authority",
    "riskWeight": 65,
    "areaWeight": 35,
    "parcels": [
      {
        "id": "SAMPLE-01",
        "area": 4200,
        "risk": 0.16,
        "zone": "Mixed use",
        "flags": [],
        "coordinates": [
          [
            0,
            0
          ],
          [
            4,
            0
          ],
          [
            4,
            3
          ],
          [
            1,
            4
          ],
          [
            0,
            0
          ]
        ]
      },
      {
        "id": "SAMPLE-02",
        "area": 7600,
        "risk": 0.52,
        "zone": "Commercial",
        "flags": [
          "has_flood"
        ],
        "coordinates": [
          [
            5,
            0
          ],
          [
            10,
            0
          ],
          [
            10,
            4
          ],
          [
            6,
            3
          ],
          [
            5,
            0
          ]
        ]
      },
      {
        "id": "SAMPLE-03",
        "area": 5100,
        "risk": null,
        "zone": "Not established",
        "flags": [],
        "coordinates": [
          [
            2,
            5
          ],
          [
            7,
            5
          ],
          [
            8,
            8
          ],
          [
            3,
            9
          ],
          [
            2,
            5
          ]
        ]
      }
    ],
    "limitations": [
      "Exploratory shortlist, not planning approval.",
      "Area score is relative to the largest selected parcel.",
      "Geometry is shown as a normalized outline, not a georeferenced map.",
      "Missing risk or area prevents ranking.",
      "Review history is stored in this browser only."
    ]
  }
} as const;
