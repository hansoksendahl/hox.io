#!/bin/bash

ARTICLES_PATH="./src/articles"

DATE_YEAR=$(date +'%Y')
DATE_MONTH=$(date +'%m')
DATE_DAY=$(date +'%d')

ARTICLE_PATH="${ARTICLES_PATH}/${DATE_YEAR}/${DATE_MONTH}/${DATE_DAY}"

if [ ! -d "$DIRECTORY" ]; then
  mkdir -p "${ARTICLE_PATH}"

  cd "${ARTICLE_PATH}"

  touch entry.md

  touch meta.json
fi
