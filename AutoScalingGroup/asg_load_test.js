//https://grafana.com/docs/k6/latest/get-started/running-k6/
//to run : k6 run asg_load_test.js
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 200 },
    { duration: '1m', target: 300 },
    { duration: '1m', target: 400 },
    { duration: '1m', target: 500 },
    { duration: '1m', target: 600 },
    { duration: '1m', target: 700 },
    { duration: '1m', target: 800 },
    { duration: '1m', target: 900 },
    { duration: '1m', target: 1000 },
  ],
};

export default function () {
  const res = http.get('https://httpbin.test.k6.io/');
  sleep(1);
}