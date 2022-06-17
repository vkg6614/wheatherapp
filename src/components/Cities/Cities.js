// import { useSelector } from "react-redux";
// import axios from "axios";

import getFormattedWeatherData from "../../services/WeatherServices";

const Cities = [
  {
    city: "Delhi",
    lat: "28.6600",
    lng: "77.2300",
    country: "India",
    temp: "IN",
    state: "Delhi",
    condition: "Clear",
    population: "29617000",
    population_proper: "16753235",
  },
  {
    city: "Mumbai",
    lat: "18.9667",
    lng: "72.8333",
    country: "India",
    temp: "IN",
    state: "Maharashtra",
    condition: "Clear",
    population: "23355000",
    population_proper: "12478447",
  },
  {
    city: "Kolkata",
    lat: "22.5411",
    lng: "88.3378",
    country: "India",
    temp: "IN",
    state: "West Bengal",
    condition: "Clear",
    population: "17560000",
    population_proper: "4496694",
  },
  {
    city: "Bangalore",
    lat: "12.9699",
    lng: "77.5980",
    country: "India",
    temp: "IN",
    state: "Karnataka",
    condition: "Clear",
    population: "13707000",
    population_proper: "8443675",
  },
  {
    city: "Chennai",
    lat: "13.0825",
    lng: "80.2750",
    country: "India",
    temp: "IN",
    state: "Tamil Nadu",
    condition: "Clear",
    population: "11324000",
    population_proper: "6727000",
  },
  {
    city: "Hyderabad",
    lat: "17.3667",
    lng: "78.4667",
    country: "India",
    temp: "IN",
    state: "Telangana",
    condition: "Clear",
    population: "9746000",
    population_proper: "6993262",
  },
  {
    city: "Pune",
    lat: "18.5196",
    lng: "73.8553",
    country: "India",
    temp: "IN",
    state: "Maharashtra",
    condition: "",
    population: "7764000",
    population_proper: "3124458",
  },
  {
    city: "Ahmadabad",
    lat: "23.0300",
    lng: "72.5800",
    country: "India",
    temp: "IN",
    state: "Gujarat",
    condition: "minor",
    population: "7410000",
    population_proper: "5570585",
  },
  {
    city: "Surat",
    lat: "21.1700",
    lng: "72.8300",
    country: "India",
    temp: "IN",
    state: "Gujarat",
    condition: "",
    population: "5807000",
    population_proper: "4466826",
  },
  {
    city: "Lucknow",
    lat: "26.8470",
    lng: "80.9470",
    country: "India",
    temp: "IN",
    state: "Uttar Pradesh",
    condition: "Clear",
    population: "3382000",
    population_proper: "3382000",
  },
  {
    city: "Jaipur",
    lat: "26.9167",
    lng: "75.8667",
    country: "India",
    temp: "IN",
    state: "Rajasthan",
    condition: "Clear",
    population: "3073350",
    population_proper: "3073350",
  },

  {
    city: "Mirzapur",
    lat: "25.1500",
    lng: "82.5800",
    country: "India",
    temp: "IN",
    state: "Uttar Pradesh",
    condition: "",
    population: "2496970",
    population_proper: "2496970",
  },
  {
    city: "Nagpur",
    lat: "21.1539",
    lng: "79.0831",
    country: "India",
    temp: "IN",
    state: "Maharashtra",
    condition: "",
    population: "2405665",
    population_proper: "2405665",
  },
  {
    city: "Ghaziabad",
    lat: "28.6667",
    lng: "77.4167",
    country: "India",
    temp: "IN",
    state: "Uttar Pradesh",
    condition: "",
    population: "2381452",
    population_proper: "2381452",
  },
  {
    city: "Indore",
    lat: "22.7206",
    lng: "75.8472",
    country: "India",
    temp: "IN",
    state: "Madhya Pradesh",
    condition: "",
    population: "2201927",
    population_proper: "2201927",
  },
  {
    city: "Vadodara",
    lat: "22.3000",
    lng: "73.2000",
    country: "India",
    temp: "IN",
    state: "Gujarat",
    condition: "",
    population: "2065771",
    population_proper: "2065771",
  },
  {
    city: "Vishakhapatnam",
    lat: "17.7333",
    lng: "83.3167",
    country: "India",
    temp: "IN",
    state: "Andhra Pradesh",
    condition: "",
    population: "2035922",
    population_proper: "2035922",
  },
  {
    city: "Bhopal",
    lat: "23.2500",
    lng: "77.4167",
    country: "India",
    temp: "IN",
    state: "Madhya Pradesh",
    condition: "Clear",
    population: "1883381",
    population_proper: "1883381",
  },
  {
    city: "Chinchvad",
    lat: "18.6278",
    lng: "73.8131",
    country: "India",
    temp: "IN",
    state: "Maharashtra",
    condition: "",
    population: "1729320",
    population_proper: "1729320",
  },
  {
    city: "Patna",
    lat: "25.6100",
    lng: "85.1414",
    country: "India",
    temp: "IN",
    state: "Bihar",
    condition: "Clear",
    population: "1684222",
    population_proper: "1684222",
  },
  {
    city: "Ludhiana",
    lat: "30.9083",
    lng: "75.8486",
    country: "India",
    temp: "IN",
    state: "Punjab",
    condition: "",
    population: "1649000",
    population_proper: "1545368",
  },
  {
    city: "\u0100gra",
    lat: "27.1800",
    lng: "78.0200",
    country: "India",
    temp: "IN",
    state: "Uttar Pradesh",
    condition: "",
    population: "1585705",
    population_proper: "1585705",
  },
  {
    city: "Kalyan",
    lat: "19.2502",
    lng: "73.1602",
    country: "India",
    temp: "IN",
    state: "Maharashtra",
    condition: "",
    population: "1576614",
    population_proper: "1576614",
  },
  {
    city: "Madurai",
    lat: "9.9197",
    lng: "78.1194",
    country: "India",
    temp: "IN",
    state: "Tamil Nadu",
    condition: "minor",
    population: "1561129",
    population_proper: "1561129",
  },
  {
    city: "Jamshedpur",
    lat: "22.8000",
    lng: "86.1833",
    country: "India",
    temp: "IN",
    state: "Jharkhand",
    condition: "",
    population: "1558000",
    population_proper: "1558000",
  },
  {
    city: "Nasik",
    lat: "20.0000",
    lng: "73.7833",
    country: "India",
    temp: "IN",
    state: "Maharashtra",
    condition: "",
    population: "1486053",
    population_proper: "1486053",
  },
  {
    city: "Faridabad",
    lat: "28.4333",
    lng: "77.3167",
    country: "India",
    temp: "IN",
    state: "Haryana",
    condition: "",
    population: "1394000",
    population_proper: "1394000",
  },
  {
    city: "Aurangabad",
    lat: "19.8800",
    lng: "75.3200",
    country: "India",
    temp: "IN",
    state: "Maharashtra",
    condition: "",
    population: "1371330",
    population_proper: "1371330",
  },
  {
    city: "Rajkot",
    lat: "22.2969",
    lng: "70.7984",
    country: "India",
    temp: "IN",
    state: "Gujarat",
    condition: "",
    population: "1335397",
    population_proper: "1335397",
  },
  {
    city: "Meerut",
    lat: "28.9900",
    lng: "77.7000",
    country: "India",
    temp: "IN",
    state: "Uttar Pradesh",
    condition: "",
    population: "1305429",
    population_proper: "1305429",
  },
  {
    city: "Jabalpur",
    lat: "23.1667",
    lng: "79.9333",
    country: "India",
    temp: "IN",
    state: "Madhya Pradesh",
    condition: "",
    population: "1267564",
    population_proper: "1267564",
  },
  {
    city: "Thane",
    lat: "19.1800",
    lng: "72.9633",
    country: "India",
    temp: "IN",
    state: "Maharashtra",
    condition: "",
    population: "1261517",
    population_proper: "1261517",
  },
  {
    city: "Dhanbad",
    lat: "23.7928",
    lng: "86.4350",
    country: "India",
    temp: "IN",
    state: "Jharkhand",
    condition: "",
    population: "1246000",
    population_proper: "219636",
  },
  {
    city: "Allahabad",
    lat: "25.4550",
    lng: "81.8400",
    country: "India",
    temp: "IN",
    state: "Uttar Pradesh",
    condition: "",
    population: "1201000",
    population_proper: "1073438",
  },
  {
    city: "Varanasi",
    lat: "25.3189",
    lng: "83.0128",
    country: "India",
    temp: "IN",
    state: "Uttar Pradesh",
    condition: "",
    population: "1198491",
    population_proper: "1198491",
  },
  {
    city: "Srinagar",
    lat: "34.0911",
    lng: "74.8061",
    country: "India",
    temp: "IN",
    state: "Jammu and Kashmir",
    condition: "Clear",
    population: "1180570",
    population_proper: "1180570",
  },
  {
    city: "Amritsar",
    lat: "31.6167",
    lng: "74.8500",
    country: "India",
    temp: "IN",
    state: "Punjab",
    condition: "",
    population: "1132383",
    population_proper: "1132383",
  },
  {
    city: "Aligarh",
    lat: "27.8800",
    lng: "78.0800",
    country: "India",
    temp: "IN",
    state: "Uttar Pradesh",
    condition: "",
    population: "1131160",
    population_proper: "1131160",
  },
  {
    city: "Bhiwandi",
    lat: "19.3000",
    lng: "73.0667",
    country: "India",
    temp: "IN",
    state: "Maharashtra",
    condition: "",
    population: "1125898",
    population_proper: "1125898",
  },
  {
    city: "Gwalior",
    lat: "26.2150",
    lng: "78.1931",
    country: "India",
    temp: "IN",
    state: "Madhya Pradesh",
    condition: "",
    population: "1101981",
    population_proper: "1101981",
  },
  {
    city: "Bhilai",
    lat: "21.2167",
    lng: "81.4333",
    country: "India",
    temp: "IN",
    state: "Chhattisgarh",
    condition: "",
    population: "1097000",
    population_proper: "1097000",
  },
  {
    city: "Haora",
    lat: "22.5900",
    lng: "88.3100",
    country: "India",
    temp: "IN",
    state: "West Bengal",
    condition: "",
    population: "1077075",
    population_proper: "1077075",
  },
  {
    city: "Ranchi",
    lat: "23.3556",
    lng: "85.3347",
    country: "India",
    temp: "IN",
    state: "Jharkhand",
    condition: "Clear",
    population: "1073440",
    population_proper: "1073440",
  },

  {
    city: "Chandigarh",
    lat: "30.7353",
    lng: "76.7911",
    country: "India",
    temp: "IN",
    state: "Chandigarh",
    condition: "Clear",
    population: "1026459",
    population_proper: "1026459",
  },
  {
    city: "Mysore",
    lat: "12.3086",
    lng: "76.6531",
    country: "India",
    temp: "IN",
    state: "Karnataka",
    condition: "",
    population: "1014227",
    population_proper: "1014227",
  },
  {
    city: "Raipur",
    lat: "21.2379",
    lng: "81.6337",
    country: "India",
    temp: "IN",
    state: "Chhattisgarh",
    condition: "Clear",
    population: "1010087",
    population_proper: "1010087",
  },
  {
    city: "Kota",
    lat: "25.1800",
    lng: "75.8300",
    country: "India",
    temp: "IN",
    state: "Rajasthan",
    condition: "",
    population: "1001694",
    population_proper: "1001694",
  },
  {
    city: "Bareilly",
    lat: "28.3640",
    lng: "79.4150",
    country: "India",
    temp: "IN",
    state: "Uttar Pradesh",
    condition: "",
    population: "1000000",
    population_proper: "1000000",
  },
  {
    city: "Jodhpur",
    lat: "26.2918",
    lng: "73.0168",
    country: "India",
    temp: "IN",
    state: "Rajasthan",
    condition: "",
    population: "995000",
    population_proper: "921476",
  },
  {
    city: "Coimbatore",
    lat: "11.0000",
    lng: "76.9667",
    country: "India",
    temp: "IN",
    state: "Tamil Nadu",
    condition: "",
    population: "959823",
    population_proper: "959823",
  },
  {
    city: "Dispur",
    lat: "26.1500",
    lng: "91.7700",
    country: "India",
    temp: "IN",
    state: "Assam",
    condition: "Clear",
    population: "957352",
    population_proper: "957352",
  },
  {
    city: "Guwahati",
    lat: "26.1667",
    lng: "91.7667",
    country: "India",
    temp: "IN",
    state: "Assam",
    condition: "",
    population: "957352",
    population_proper: "957352",
  },
  {
    city: "Solapur",
    lat: "17.6833",
    lng: "75.9167",
    country: "India",
    temp: "IN",
    state: "Maharashtra",
    condition: "",
    population: "951558",
    population_proper: "951558",
  },
  {
    city: "Trichinopoly",
    lat: "10.8269",
    lng: "78.6928",
    country: "India",
    temp: "IN",
    state: "Tamil Nadu",
    condition: "",
    population: "916857",
    population_proper: "916857",
  },
  {
    city: "Hubli",
    lat: "15.3600",
    lng: "75.1250",
    country: "India",
    temp: "IN",
    state: "Karnataka",
    condition: "",
    population: "890000",
    population_proper: "792804",
  },
  {
    city: "Jalandhar",
    lat: "31.3256",
    lng: "75.5792",
    country: "India",
    temp: "IN",
    state: "Punjab",
    condition: "",
    population: "873725",
    population_proper: "873725",
  },
  {
    city: "Bhubaneshwar",
    lat: "20.2644",
    lng: "85.8281",
    country: "India",
    temp: "IN",
    state: "Odisha",
    condition: "Clear",
    population: "837737",
    population_proper: "837737",
  },
  {
    city: "Bhayandar",
    lat: "19.3000",
    lng: "72.8500",
    country: "India",
    temp: "IN",
    state: "Maharashtra",
    condition: "",
    population: "814655",
    population_proper: "814655",
  },
  {
    city: "Moradabad",
    lat: "28.8418",
    lng: "78.7568",
    country: "India",
    temp: "IN",
    state: "Uttar Pradesh",
    condition: "",
    population: "787000",
    population_proper: "721139",
  },
  {
    city: "Kolhapur",
    lat: "16.7000",
    lng: "74.2333",
    country: "India",
    temp: "IN",
    state: "Maharashtra",
    condition: "",
    population: "750000",
    population_proper: "561841",
  },
  {
    city: "Thiruvananthapuram",
    lat: "8.5000",
    lng: "76.8997",
    country: "India",
    temp: "IN",
    state: "Kerala",
    condition: "Clear",
    population: "743691",
    population_proper: "743691",
  },
  {
    city: "Saharanpur",
    lat: "29.9640",
    lng: "77.5460",
    country: "India",
    temp: "IN",
    state: "Uttar Pradesh",
    condition: "",
    population: "705478",
    population_proper: "705478",
  },
  {
    city: "Warangal",
    lat: "17.9756",
    lng: "79.6011",
    country: "India",
    temp: "IN",
    state: "Telangana",
    condition: "",
    population: "704570",
    population_proper: "704570",
  },
  {
    city: "Salem",
    lat: "11.6500",
    lng: "78.1667",
    country: "India",
    temp: "IN",
    state: "Tamil Nadu",
    condition: "",
    population: "693236",
    population_proper: "693236",
  },
  {
    city: "Malegaon",
    lat: "20.5500",
    lng: "74.5500",
    country: "India",
    temp: "IN",
    state: "Maharashtra",
    condition: "",
    population: "690844",
    population_proper: "435362",
  },
  {
    city: "Kochi",
    lat: "9.9667",
    lng: "76.2833",
    country: "India",
    temp: "IN",
    state: "Kerala",
    condition: "",
    population: "677381",
    population_proper: "677381",
  },
  {
    city: "Gorakhpur",
    lat: "26.7611",
    lng: "83.3667",
    country: "India",
    temp: "IN",
    state: "Uttar Pradesh",
    condition: "",
    population: "673446",
    population_proper: "673446",
  },
  {
    city: "Shimoga",
    lat: "13.9304",
    lng: "75.5600",
    country: "India",
    temp: "IN",
    state: "Karnataka",
    condition: "",
    population: "654055",
    population_proper: "319550",
  },
  {
    city: "Tiruppur",
    lat: "11.1075",
    lng: "77.3398",
    country: "India",
    temp: "IN",
    state: "Tamil Nadu",
    condition: "",
    population: "650000",
    population_proper: "444543",
  },
  {
    city: "Guntur",
    lat: "16.3000",
    lng: "80.4500",
    country: "India",
    temp: "IN",
    state: "Andhra Pradesh",
    condition: "",
    population: "647508",
    population_proper: "647508",
  },
  {
    city: "Raurkela",
    lat: "22.2492",
    lng: "84.8828",
    country: "India",
    temp: "IN",
    state: "Odisha",
    condition: "",
    population: "625831",
    population_proper: "483629",
  },
  {
    city: "Mangalore",
    lat: "12.8703",
    lng: "74.8806",
    country: "India",
    temp: "IN",
    state: "Karnataka",
    condition: "",
    population: "623841",
    population_proper: "623841",
  },
  {
    city: "Nanded",
    lat: "19.1500",
    lng: "77.3333",
    country: "India",
    temp: "IN",
    state: "Maharashtra",
    condition: "",
    population: "623708",
    population_proper: "550564",
  },
  {
    city: "Cuttack",
    lat: "20.4500",
    lng: "85.8667",
    country: "India",
    temp: "IN",
    state: "Odisha",
    condition: "",
    population: "606007",
    population_proper: "606007",
  },
  {
    city: "Chanda",
    lat: "19.9500",
    lng: "79.3000",
    country: "India",
    temp: "IN",
    state: "Maharashtra",
    condition: "",
    population: "595118",
    population_proper: "328351",
  },
  {
    city: "Dehra Dun",
    lat: "30.3180",
    lng: "78.0290",
    country: "India",
    temp: "IN",
    state: "Uttarakhand",
    condition: "Clear",
    population: "578420",
    population_proper: "578420",
  },
  {
    city: "Durgapur",
    lat: "23.5500",
    lng: "87.3200",
    country: "India",
    temp: "IN",
    state: "West Bengal",
    condition: "",
    population: "566517",
    population_proper: "566517",
  },
  {
    city: "\u0100sansol",
    lat: "23.6833",
    lng: "86.9667",
    country: "India",
    temp: "IN",
    state: "West Bengal",
    condition: "",
    population: "563917",
    population_proper: "563917",
  },
  {
    city: "Bhavnagar",
    lat: "21.7650",
    lng: "72.1369",
    country: "India",
    temp: "IN",
    state: "Gujarat",
    condition: "",
    population: "554978",
    population_proper: "464602",
  },
  {
    city: "Amravati",
    lat: "20.9333",
    lng: "77.7500",
    country: "India",
    temp: "IN",
    state: "Maharashtra",
    condition: "",
    population: "549370",
    population_proper: "549370",
  },
  {
    city: "Nellore",
    lat: "14.4333",
    lng: "79.9667",
    country: "India",
    temp: "IN",
    state: "Andhra Pradesh",
    condition: "",
    population: "547621",
    population_proper: "547621",
  },
  {
    city: "Ajmer",
    lat: "26.4680",
    lng: "74.6390",
    country: "India",
    temp: "IN",
    state: "Rajasthan",
    condition: "",
    population: "542321",
    population_proper: "542321",
  },
  {
    city: "Tinnevelly",
    lat: "8.7289",
    lng: "77.7081",
    country: "India",
    temp: "IN",
    state: "Tamil Nadu",
    condition: "",
    population: "542200",
    population_proper: "435844",
  },
  {
    city: "Bikaner",
    lat: "28.0181",
    lng: "73.3169",
    country: "India",
    temp: "IN",
    state: "Rajasthan",
    condition: "",
    population: "529007",
    population_proper: "529007",
  },
  {
    city: "Agartala",
    lat: "23.8333",
    lng: "91.2667",
    country: "India",
    temp: "IN",
    state: "Tripura",
    condition: "Clear",
    population: "522613",
    population_proper: "522613",
  },
  {
    city: "Ujjain",
    lat: "23.1828",
    lng: "75.7772",
    country: "India",
    temp: "IN",
    state: "Madhya Pradesh",
    condition: "",
    population: "515215",
    population_proper: "515215",
  },
  {
    city: "Jhansi",
    lat: "25.4486",
    lng: "78.5696",
    country: "India",
    temp: "IN",
    state: "Uttar Pradesh",
    condition: "",
    population: "507000",
    population_proper: "507000",
  },
  {
    city: "Ulhasnagar",
    lat: "19.2167",
    lng: "73.1500",
    country: "India",
    temp: "IN",
    state: "Maharashtra",
    condition: "",
    population: "506098",
    population_proper: "506098",
  },
  {
    city: "Davangere",
    lat: "14.4667",
    lng: "75.9167",
    country: "India",
    temp: "IN",
    state: "Karnataka",
    condition: "",
    population: "503564",
    population_proper: "435125",
  },
  {
    city: "Jammu",
    lat: "32.7333",
    lng: "74.8500",
    country: "India",
    temp: "IN",
    state: "Jammu and Kashmir",
    condition: "",
    population: "502197",
    population_proper: "502197",
  },
  {
    city: "Belgaum",
    lat: "15.8667",
    lng: "74.5000",
    country: "India",
    temp: "IN",
    state: "Karnataka",
    condition: "",
    population: "488157",
    population_proper: "488157",
  },
  {
    city: "Gulbarga",
    lat: "17.3333",
    lng: "76.8333",
    country: "India",
    temp: "IN",
    state: "Karnataka",
    condition: "",
    population: "483615",
    population_proper: "481478",
  },
  {
    city: "Jamnagar",
    lat: "22.4700",
    lng: "70.0700",
    country: "India",
    temp: "IN",
    state: "Gujarat",
    condition: "",
    population: "479920",
    population_proper: "479920",
  },
  {
    city: "Dhulia",
    lat: "20.9000",
    lng: "74.7833",
    country: "India",
    temp: "IN",
    state: "Maharashtra",
    condition: "",
    population: "479073",
    population_proper: "366980",
  },
  {
    city: "Gaya",
    lat: "24.7500",
    lng: "85.0167",
    country: "India",
    temp: "IN",
    state: "Bihar",
    condition: "",
    population: "474093",
    population_proper: "474093",
  },
  {
    city: "Jalgaon",
    lat: "21.0167",
    lng: "75.5667",
    country: "India",
    temp: "IN",
    state: "Maharashtra",
    condition: "",
    population: "460468",
    population_proper: "460468",
  },
  {
    city: "Kurnool",
    lat: "15.8222",
    lng: "78.0350",
    country: "India",
    temp: "IN",
    state: "Andhra Pradesh",
    condition: "",
    population: "457633",
    population_proper: "457633",
  },
  {
    city: "Udaipur",
    lat: "24.5833",
    lng: "73.6833",
    country: "India",
    temp: "IN",
    state: "Rajasthan",
    condition: "",
    population: "451100",
    population_proper: "451100",
  },
  {
    city: "Bellary",
    lat: "15.1500",
    lng: "76.9150",
    country: "India",
    temp: "IN",
    state: "Karnataka",
    condition: "",
    population: "445388",
    population_proper: "336681",
  },
  {
    city: "Sangli",
    lat: "16.8667",
    lng: "74.5667",
    country: "India",
    temp: "IN",
    state: "Maharashtra",
    condition: "",
    population: "436639",
    population_proper: "436639",
  },
  {
    city: "Tuticorin",
    lat: "8.7833",
    lng: "78.1333",
    country: "India",
    temp: "IN",
    state: "Tamil Nadu",
    condition: "",
    population: "436094",
    population_proper: "436094",
  },
  {
    city: "Calicut",
    lat: "11.2500",
    lng: "75.7667",
    country: "India",
    temp: "IN",
    state: "Kerala",
    condition: "minor",
    population: "431560",
    population_proper: "431560",
  },
  {
    city: "Akola",
    lat: "20.7333",
    lng: "77.0000",
    country: "India",
    temp: "IN",
    state: "Maharashtra",
    condition: "",
    population: "425817",
    population_proper: "425817",
  },
  {
    city: "Bhagalpur",
    lat: "25.2500",
    lng: "87.0167",
    country: "India",
    temp: "IN",
    state: "Bihar",
    condition: "",
    population: "410210",
    population_proper: "410210",
  },
  {
    city: "Sikar",
    lat: "27.6119",
    lng: "75.1397",
    country: "India",
    temp: "IN",
    state: "Rajasthan",
    condition: "",
    population: "400000",
    population_proper: "237579",
  },
  {
    city: "Tumkur",
    lat: "13.3300",
    lng: "77.1000",
    country: "India",
    temp: "IN",
    state: "Karnataka",
    condition: "",
    population: "399606",
    population_proper: "307359",
  },
  {
    city: "Quilon",
    lat: "8.8853",
    lng: "76.5864",
    country: "India",
    temp: "IN",
    state: "Kerala",
    condition: "",
    population: "397419",
    population_proper: "397419",
  },
  {
    city: "Muzaffarnagar",
    lat: "29.4708",
    lng: "77.7033",
    country: "India",
    temp: "IN",
    state: "Uttar Pradesh",
    condition: "",
    population: "392451",
    population_proper: "392451",
  },
  {
    city: "Bhilwara",
    lat: "25.3500",
    lng: "74.6333",
    country: "India",
    temp: "IN",
    state: "Rajasthan",
    condition: "",
    population: "389911",
    population_proper: "326431",
  },
  {
    city: "Nizamabad",
    lat: "18.6704",
    lng: "78.1000",
    country: "India",
    temp: "IN",
    state: "Telangana",
    condition: "",
    population: "388505",
    population_proper: "305438",
  },
  {
    city: "Bhatpara",
    lat: "22.8667",
    lng: "88.4167",
    country: "India",
    temp: "IN",
    state: "West Bengal",
    condition: "",
    population: "386019",
    population_proper: "386019",
  },
  {
    city: "Kakinada",
    lat: "16.9333",
    lng: "82.2167",
    country: "India",
    temp: "IN",
    state: "Andhra Pradesh",
    condition: "",
    population: "384182",
    population_proper: "384182",
  },
  {
    city: "Parbhani",
    lat: "19.2704",
    lng: "76.7600",
    country: "India",
    temp: "IN",
    state: "Maharashtra",
    condition: "",
    population: "378326",
    population_proper: "289629",
  },
  {
    city: "Panihati",
    lat: "22.6900",
    lng: "88.3700",
    country: "India",
    temp: "IN",
    state: "West Bengal",
    condition: "",
    population: "377347",
    population_proper: "377347",
  },
  {
    city: "Latur",
    lat: "18.4004",
    lng: "76.5700",
    country: "India",
    temp: "IN",
    state: "Maharashtra",
    condition: "",
    population: "374394",
    population_proper: "348967",
  },
  {
    city: "Rohtak",
    lat: "28.9000",
    lng: "76.5667",
    country: "India",
    temp: "IN",
    state: "Haryana",
    condition: "",
    population: "374292",
    population_proper: "374292",
  },
  {
    city: "Rajapalaiyam",
    lat: "9.4204",
    lng: "77.5800",
    country: "India",
    temp: "IN",
    state: "Tamil Nadu",
    condition: "",
    population: "369991",
    population_proper: "307959",
  },
  {
    city: "Ahmadnagar",
    lat: "19.0833",
    lng: "74.7333",
    country: "India",
    temp: "IN",
    state: "Maharashtra",
    condition: "",
    population: "350859",
    population_proper: "350859",
  },
  {
    city: "Cuddapah",
    lat: "14.4667",
    lng: "78.8167",
    country: "India",
    temp: "IN",
    state: "Andhra Pradesh",
    condition: "",
    population: "344893",
    population_proper: "344893",
  },
  {
    city: "Rajahmundry",
    lat: "16.9833",
    lng: "81.7833",
    country: "India",
    temp: "IN",
    state: "Andhra Pradesh",
    condition: "",
    population: "341831",
    population_proper: "341831",
  },
  {
    city: "Alwar",
    lat: "27.5667",
    lng: "76.6167",
    country: "India",
    temp: "IN",
    state: "Rajasthan",
    condition: "",
    population: "341422",
    population_proper: "341422",
  },
  {
    city: "Muzaffarpur",
    lat: "26.1200",
    lng: "85.3833",
    country: "India",
    temp: "IN",
    state: "Bihar",
    condition: "",
    population: "333200",
    population_proper: "333200",
  },
  {
    city: "Bilaspur",
    lat: "22.1500",
    lng: "82.0167",
    country: "India",
    temp: "IN",
    state: "Chhattisgarh",
    condition: "",
    population: "331030",
    population_proper: "331030",
  },
  {
    city: "Mathura",
    lat: "27.4833",
    lng: "77.6833",
    country: "India",
    temp: "IN",
    state: "Uttar Pradesh",
    condition: "",
    population: "330511",
    population_proper: "330511",
  },
  {
    city: "Kamarhati",
    lat: "22.6700",
    lng: "88.3700",
    country: "India",
    temp: "IN",
    state: "West Bengal",
    condition: "",
    population: "330211",
    population_proper: "330211",
  },
  {
    city: "Patiala",
    lat: "30.3204",
    lng: "76.3850",
    country: "India",
    temp: "IN",
    state: "Punjab",
    condition: "",
    population: "329224",
    population_proper: "329224",
  },
  {
    city: "Saugor",
    lat: "23.8504",
    lng: "78.7500",
    country: "India",
    temp: "IN",
    state: "Madhya Pradesh",
    condition: "",
    population: "328240",
    population_proper: "247333",
  },
  {
    city: "Bijapur",
    lat: "16.8244",
    lng: "75.7154",
    country: "India",
    temp: "IN",
    state: "Karnataka",
    condition: "",
    population: "327427",
    population_proper: "327427",
  },
  {
    city: "Brahmapur",
    lat: "19.3200",
    lng: "84.8000",
    country: "India",
    temp: "IN",
    state: "Odisha",
    condition: "",
    population: "324726",
    population_proper: "324726",
  },
  {
    city: "Shahjanpur",
    lat: "27.8804",
    lng: "79.9050",
    country: "India",
    temp: "IN",
    state: "Uttar Pradesh",
    condition: "",
    population: "320434",
    population_proper: "320434",
  },
  {
    city: "Trichur",
    lat: "10.5200",
    lng: "76.2100",
    country: "India",
    temp: "IN",
    state: "Kerala",
    condition: "",
    population: "315596",
    population_proper: "315596",
  },
  {
    city: "Barddhaman",
    lat: "23.2500",
    lng: "87.8500",
    country: "India",
    temp: "IN",
    state: "West Bengal",
    condition: "",
    population: "314265",
    population_proper: "314265",
  },
  {
    city: "Kulti",
    lat: "23.7300",
    lng: "86.8500",
    country: "India",
    temp: "IN",
    state: "West Bengal",
    condition: "",
    population: "313809",
    population_proper: "313809",
  },
  {
    city: "Sambalpur",
    lat: "21.4704",
    lng: "83.9701",
    country: "India",
    temp: "IN",
    state: "Odisha",
    condition: "",
    population: "310852",
    population_proper: "162887",
  },

  {
    city: "Hisar",
    lat: "29.1489",
    lng: "75.7367",
    country: "India",
    temp: "IN",
    state: "Haryana",
    condition: "",
    population: "307024",
    population_proper: "307024",
  },
  {
    city: "Firozabad",
    lat: "27.1500",
    lng: "78.3949",
    country: "India",
    temp: "IN",
    state: "Uttar Pradesh",
    condition: "",
    population: "306409",
    population_proper: "306409",
  },
  {
    city: "Bidar",
    lat: "17.9229",
    lng: "77.5175",
    country: "India",
    temp: "IN",
    state: "Karnataka",
    condition: "",
    population: "300136",
    population_proper: "204071",
  },
  {
    city: "Rampur",
    lat: "28.8154",
    lng: "79.0250",
    country: "India",
    temp: "IN",
    state: "Uttar Pradesh",
    condition: "",
    population: "296418",
    population_proper: "296418",
  },
  {
    city: "Shiliguri",
    lat: "26.7200",
    lng: "88.4200",
    country: "India",
    temp: "IN",
    state: "West Bengal",
    condition: "",
    population: "294546",
    population_proper: "294546",
  },
  {
    city: "Bali",
    lat: "22.6500",
    lng: "88.3400",
    country: "India",
    temp: "IN",
    state: "West Bengal",
    condition: "",
    population: "293373",
    population_proper: "293373",
  },
  {
    city: "Panipat",
    lat: "29.4004",
    lng: "76.9700",
    country: "India",
    temp: "IN",
    state: "Haryana",
    condition: "",
    population: "292808",
    population_proper: "292808",
  },
  {
    city: "Karimnagar",
    lat: "18.4333",
    lng: "79.1500",
    country: "India",
    temp: "IN",
    state: "Telangana",
    condition: "",
    population: "289821",
    population_proper: "289821",
  },
  {
    city: "Bhuj",
    lat: "23.2504",
    lng: "69.8100",
    country: "India",
    temp: "IN",
    state: "Gujarat",
    condition: "",
    population: "289429",
    population_proper: "289429",
  },
  {
    city: "Ichalkaranji",
    lat: "16.7000",
    lng: "74.4700",
    country: "India",
    temp: "IN",
    state: "Maharashtra",
    condition: "",
    population: "287570",
    population_proper: "287570",
  },
  {
    city: "Tirupati",
    lat: "13.6500",
    lng: "79.4200",
    country: "India",
    temp: "IN",
    state: "Andhra Pradesh",
    condition: "",
    population: "287482",
    population_proper: "287482",
  },
  {
    city: "Hospet",
    lat: "15.2667",
    lng: "76.4000",
    country: "India",
    temp: "IN",
    state: "Karnataka",
    condition: "",
    population: "286007",
    population_proper: "197846",
  },
  {
    city: "\u0100izawl",
    lat: "23.7104",
    lng: "92.7200",
    country: "India",
    temp: "IN",
    state: "Mizoram",
    condition: "Clear",
    population: "283021",
    population_proper: "265331",
  },
  {
    city: "Sannai",
    lat: "24.1600",
    lng: "80.8300",
    country: "India",
    temp: "IN",
    state: "Madhya Pradesh",
    condition: "",
    population: "283004",
    population_proper: "283004",
  },
  {
    city: "Barasat",
    lat: "22.2333",
    lng: "88.4500",
    country: "India",
    temp: "IN",
    state: "West Bengal",
    condition: "",
    population: "278435",
    population_proper: "278435",
  },
  {
    city: "Ratlam",
    lat: "23.3167",
    lng: "75.0667",
    country: "India",
    temp: "IN",
    state: "Madhya Pradesh",
    condition: "",
    population: "273892",
    population_proper: "273892",
  },
  {
    city: "Handwara",
    lat: "34.4000",
    lng: "74.2800",
    country: "India",
    temp: "IN",
    state: "Jammu and Kashmir",
    condition: "",
    population: "269311",
    population_proper: "269311",
  },
  {
    city: "Drug",
    lat: "21.1900",
    lng: "81.2800",
    country: "India",
    temp: "IN",
    state: "Chhattisgarh",
    condition: "",
    population: "268806",
    population_proper: "268806",
  },
  {
    city: "Imphal",
    lat: "24.8200",
    lng: "93.9500",
    country: "India",
    temp: "IN",
    state: "Manipur",
    condition: "Clear",
    population: "268243",
    population_proper: "268243",
  },
  {
    city: "Anantapur",
    lat: "14.6833",
    lng: "77.6000",
    country: "India",
    temp: "IN",
    state: "Andhra Pradesh",
    condition: "",
    population: "267161",
    population_proper: "267161",
  },
  {
    city: "Etawah",
    lat: "26.7855",
    lng: "79.0150",
    country: "India",
    temp: "IN",
    state: "Uttar Pradesh",
    condition: "",
    population: "257448",
    population_proper: "257448",
  },
  {
    city: "Raichur",
    lat: "16.2104",
    lng: "77.3550",
    country: "India",
    temp: "IN",
    state: "Karnataka",
    condition: "",
    population: "255240",
    population_proper: "225962",
  },
  {
    city: "Ongole",
    lat: "15.5000",
    lng: "80.0500",
    country: "India",
    temp: "IN",
    state: "Andhra Pradesh",
    condition: "",
    population: "252739",
    population_proper: "252739",
  },
  {
    city: "Bharatpur",
    lat: "27.2172",
    lng: "77.4900",
    country: "India",
    temp: "IN",
    state: "Rajasthan",
    condition: "",
    population: "252342",
    population_proper: "252342",
  },
  {
    city: "Begusarai",
    lat: "25.4200",
    lng: "86.1300",
    country: "India",
    temp: "IN",
    state: "Bihar",
    condition: "",
    population: "252008",
    population_proper: "252008",
  },
  {
    city: "Sonipat",
    lat: "28.9958",
    lng: "77.0114",
    country: "India",
    temp: "IN",
    state: "Haryana",
    condition: "",
    population: "250521",
    population_proper: "250521",
  },
  {
    city: "Ramgundam",
    lat: "18.8000",
    lng: "79.4500",
    country: "India",
    temp: "IN",
    state: "Telangana",
    condition: "",
    population: "242979",
    population_proper: "242979",
  },
  {
    city: "Hapur",
    lat: "28.7437",
    lng: "77.7628",
    country: "India",
    temp: "IN",
    state: "Uttar Pradesh",
    condition: "",
    population: "242920",
    population_proper: "242920",
  },
  {
    city: "Uluberiya",
    lat: "22.4700",
    lng: "88.1100",
    country: "India",
    temp: "IN",
    state: "West Bengal",
    condition: "",
    population: "235345",
    population_proper: "235345",
  },
  {
    city: "Porbandar",
    lat: "21.6425",
    lng: "69.6047",
    country: "India",
    temp: "IN",
    state: "Gujarat",
    condition: "",
    population: "234684",
    population_proper: "138872",
  },
  {
    city: "Pali",
    lat: "25.7725",
    lng: "73.3233",
    country: "India",
    temp: "IN",
    state: "Rajasthan",
    condition: "",
    population: "229956",
    population_proper: "229956",
  },
  {
    city: "Vizianagaram",
    lat: "18.1167",
    lng: "83.4167",
    country: "India",
    temp: "IN",
    state: "Andhra Pradesh",
    condition: "",
    population: "228720",
    population_proper: "228720",
  },
  {
    city: "Puducherry",
    lat: "11.9300",
    lng: "79.8300",
    country: "India",
    temp: "IN",
    state: "Puducherry",
    condition: "Clear",
    population: "227411",
    population_proper: "227411",
  },
  {
    city: "Karnal",
    lat: "29.6804",
    lng: "76.9700",
    country: "India",
    temp: "IN",
    state: "Haryana",
    condition: "",
    population: "225049",
    population_proper: "225049",
  },
  {
    city: "Nagercoil",
    lat: "8.1700",
    lng: "77.4300",
    country: "India",
    temp: "IN",
    state: "Tamil Nadu",
    condition: "",
    population: "224329",
    population_proper: "213858",
  },
  {
    city: "Tanjore",
    lat: "10.8000",
    lng: "79.1500",
    country: "India",
    temp: "IN",
    state: "Tamil Nadu",
    condition: "",
    population: "222943",
    population_proper: "222943",
  },
  {
    city: "Sambhal",
    lat: "28.5800",
    lng: "78.5500",
    country: "India",
    temp: "IN",
    state: "Uttar Pradesh",
    condition: "",
    population: "220813",
    population_proper: "220813",
  },
  {
    city: "Shimla",
    lat: "31.1033",
    lng: "77.1722",
    country: "India",
    temp: "IN",
    state: "Himachal Pradesh",
    condition: "Clear",
    population: "206575",
    population_proper: "206575",
  },
  {
    city: "Ghandinagar",
    lat: "23.2200",
    lng: "72.6800",
    country: "India",
    temp: "IN",
    state: "Gujarat",
    condition: "Clear",
    population: "195891",
    population_proper: "195891",
  },
  {
    city: "Shillong",
    lat: "25.5744",
    lng: "91.8789",
    country: "India",
    temp: "IN",
    state: "Meghalaya",
    condition: "Clear",
    population: "143229",
    population_proper: "143229",
  },
  {
    city: "New Delhi",
    lat: "28.7000",
    lng: "77.2000",
    country: "India",
    temp: "IN",
    state: "Delhi",
    condition: "",
    population: "142004",
    population_proper: "142004",
  },
  {
    city: "Port Blair",
    lat: "11.6667",
    lng: "92.7500",
    country: "India",
    temp: "IN",
    state: "Andaman and Nicobar Islands",
    condition: "Clear",
    population: "127562",
    population_proper: "112050",
  },
  {
    city: "Gangtok",
    lat: "27.3300",
    lng: "88.6200",
    country: "India",
    temp: "IN",
    state: "Sikkim",
    condition: "Clear",
    population: "100286",
    population_proper: "100286",
  },
  {
    city: "Kohima",
    lat: "25.6667",
    lng: "94.1194",
    country: "India",
    temp: "IN",
    state: "Nagaland",
    condition: "Clear",
    population: "99039",
    population_proper: "99039",
  },
  {
    city: "Itanagar",
    lat: "27.1000",
    lng: "93.6200",
    country: "India",
    temp: "IN",
    state: "Arunachal Pradesh",
    condition: "Clear",
    population: "59490",
    population_proper: "59490",
  },
  {
    city: "Panaji",
    lat: "15.4800",
    lng: "73.8300",
    country: "India",
    temp: "IN",
    state: "Goa",
    condition: "Clear",
    population: "40017",
    population_proper: "40017",
  },
  {
    city: "Daman",
    lat: "20.4170",
    lng: "72.8500",
    country: "India",
    temp: "IN",
    state: "Gujarat",
    condition: "Clear",
    population: "39737",
    population_proper: "39737",
  },
  {
    city: "Kavaratti",
    lat: "10.5626",
    lng: "72.6369",
    country: "India",
    temp: "IN",
    state: "Lakshadweep",
    condition: "Clear",
    population: "10688",
    population_proper: "10688",
  },
  {
    city: "Panchkula",
    lat: "30.6915",
    lng: "76.8537",
    country: "India",
    temp: "IN",
    state: "Haryana",
    condition: "minor",
    population: "",
    population_proper: "",
  },
  {
    city: "Kagaznagar",
    lat: "19.3316",
    lng: "79.4661",
    country: "India",
    temp: "IN",
    state: "Telangana",
    condition: "minor",
    population: "",
    population_proper: "",
  },
];

export default Cities;
