#!/bin/sh
echo "[etracsorg] build..."
docker rmi -f ramesesinc/etracsorg:1.0.0
docker build -t ramesesinc/etracsorg:1.0.0 --rm .
echo ""
echo "[etracsorg] done..."
