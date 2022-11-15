#!/bin/bash

if [[ ! -f ".env" ]]; then
    echo "No .env file found. Copying .env.example to .env"
    cp .env.example .env
fi

npm install
npm run start:dev