#!/usr/bin/env bash
BUCKET=prodbox-ui
DIR=dist/

aws  s3  sync --region eu-central-1  $DIR s3://$BUCKET
