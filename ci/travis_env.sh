#!/bin/bash

travis encrypt NPM_TOKEN=$(sugos-secrets get npm:token -r) --add