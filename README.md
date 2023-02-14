# Example repo to reproduce nx bug

# Steps to reproduce
- npx nx build is-uuid
- The built package.json in dist/packages/is-uuid contains a dependency from a spec file:
    ```
    "dependencies": {
      "uuid": "9.0.0"
    },
    ```
