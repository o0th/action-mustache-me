<h2 align="center">
o0th/action-mustache-me
</h2>

### Usage

```yaml
name: testing

on:
  push:
    branches:
      - master 

permissions:
  contents: write

jobs:

  testing:
    runs-on: ubuntu-latest

    steps:

      - uses: actions/checkout@v4

      - uses: o0th/action-mustache-me@v0.0.1
        with:
          input-file: testing.md
          output-file: testing.md
          vars: |
            {{name}} = World!
```
