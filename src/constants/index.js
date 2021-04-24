const isLocal = window.location.hostname.startsWith("local");

const COVID_DATA_BASE = isLocal ? "https://api.covid19api.com" : "";

export const GET_ALL_COVID_ENDPOINTS = `${COVID_DATA_BASE}`;
export const GET_COVID_SUMMARY = `${COVID_DATA_BASE}/summary`; //A summary of new and total cases per country
