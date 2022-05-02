#!/bin/bash
aws s3 sync ./build s3://cloud-demo-may02/ --exclude 'node_modules/*'
