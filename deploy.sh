#!/usr/bin/env sh

set -e

yarn build

cd dist


git add -A 
git commit -m "new deployment"
git push -f git@github.com:madhurjyabora1/brandandfame.git main:gh-pages

cd -