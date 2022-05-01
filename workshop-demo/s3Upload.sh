#!/bin/bash
pwd
aws s3 sync . s3://workshop-website-demo/ --exclude 'node_modules/*'
