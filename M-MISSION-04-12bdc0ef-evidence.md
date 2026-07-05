# M-MISSION-04 template proof 12bdc0ef — launch evidence

## Validator checklist

- [x] Repository inspected (`index.js`, `package.json`, `README.md`).
- [x] Required project-memory marker file created (`mainframe-mem01-memory-gpt.txt`).
- [x] Test command configured in `package.json` (`"test": "node test/test.js"`).
- [x] Minimal test suite added under `test/test.js` covering:
  - missing `acquire.json` throws
  - unmapped module lookup throws a named error
- [x] Configured checks pass (`npm test` exits 0).

## Check output

```
> acquire@0.0.1 test
> node test/test.js

all tests passed
```

## PR gate readiness

No pull request was opened; changes remain in the working tree behind the normal commit/push gate, per proof requirements.

## Proof id

12bdc0ef
