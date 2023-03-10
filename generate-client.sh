#!/bin/bash

set -o errexit
set -o nounset
set -o pipefail

. settings

if [[ -z ${GEN_ROOT:-} ]]; then
    : "${GEN_COMMIT?Need to set GEN_COMMIT to ${GENERATOR_USERNAME}/gen commit}"
    TEMP_FOLDER=$(mktemp -d)
    trap "rm -rf ${TEMP_FOLDER}" EXIT SIGINT

    GEN_ROOT="${TEMP_FOLDER}/gen"
    echo ">>> Cloning gen repo"
    git clone --recursive https://github.com/${GENERATOR_USERNAME}/gen.git "${GEN_ROOT}"
    (cd ${GEN_ROOT} && git checkout ${GEN_COMMIT})
else
    echo ">>> Reusing gen repo at ${GEN_ROOT}"
fi

TYPESCRIPT="${GEN_ROOT}/openapi/typescript-fetch.sh"
echo ">>> Running ${TYPESCRIPT}"
${TYPESCRIPT} src/gen settings
echo ">>> Done."
