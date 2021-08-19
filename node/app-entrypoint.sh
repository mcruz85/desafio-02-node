#!/bin/bash
dockerize -wait tcp://db:3306 -timeout 30s
node index.js