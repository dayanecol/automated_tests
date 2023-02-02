# Automated Tests
This is an exercise about automated tests.

## Technologies

<div align="center">
  <img src="https://img.shields.io/badge/JavaScript-FFFF00?style=for-the-badge&logo=javaScript&logoColor=black" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" height="30px"/>
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

## How to run tests locally

1 - Clone this repository:

```bash
  git clone 
```

2 - Install all dependencies:

```bash
  npm install
```

3- To test application:

```bash
  npm run test
```
## Tests

```
  GET:/fruits
    ✓ Deve retornar a lista de todas as frutas (42 ms)
    ✓ Deve retornar um array vazio (4 ms)
  GET:/fruits/:id
    ✓ Deve retornar o objeto fruit de id solicitado (3 ms)
    ✓ Deve retornar status 404 (37 ms)
  POST:/fruits
    ✓ Deve retornar status 201 (17 ms)
    ✓ Deve retornar status 422 (4 ms)
    ✓ Deve retornar status 201 (14 ms)

Test Suites: 1 passed, 1 total
Tests:       7 passed, 7 total
```
