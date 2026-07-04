#!/bin/bash
# mainframe pass condition - committed into the PR so reviewers see it
# as code and CI can re-run it (M-CELL-CODE-01).
# kind: test, source: thread
set -o pipefail
test -f PLAN_DEMO.md && grep -qx 'plan-first commission mode works' PLAN_DEMO.md
