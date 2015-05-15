#!/bin/sh

tempDir=".build"

rm -rf ${tempDir}
mkdir -p ${tempDir}
cd ${tempDir}
git clone https://github.com/softwaretailoring/wheelnav
cd wheelnav
rm -rf ../../lib/*
cp -r ./css ../../lib/
cp -r ./js ../../lib/
cd -
cd -
echo "Remove 'var' from lib/js/required/raphael.icons.js"
