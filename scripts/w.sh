#!/usr/bin/env bash

# Command line arguments
PACKAGE=$1
shift

COMMAND=$1
shift

# Derived variables
PACKAGE_DIR="./packages/@hox.io/${PACKAGE}"

if [ "${COMMAND}" == "add" ]; then
  # Change to the package directory
  cd "${PACKAGE_DIR}"
  # Install
  pnpm add "${@}"
else
  # Run command
  pnpm run -C "${PACKAGE_DIR}" "${COMMAND}" "${@}"
fi