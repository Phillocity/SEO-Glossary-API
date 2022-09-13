# SEO Glossary API

A glossary API for SEO terms compiled from Moz and Ahref glossaries, created with Express, Node, MongoDB and TypeScript.

## API Reference
https://seo-glossary-api.herokuapp.com/
#### Get all items

```http
  GET /terms
```

#### Get all that matches

```http
  GET /terms/${seo_term_name} e.g "301 redirect" matches 2 terms
```

#### Adds your new term into the database

```http
  POST /terms
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `term` | `string` | **Required**. Your SEO Term name |
| `description` | `string` | **Required**. Your SEO Term description |

#### Deletes all terms

```http
  DELETE /terms
```

#### Update a specific term at as a whole both term name and description

```http
  PUT /terms/${seo_term_name}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `term` | `string` | Your SEO Term name |
| `description` | `string` |  Your SEO Term description |

#### Update a specific term at a specific section whether the term name or description

```http
  PATCH /terms/${seo_term_name}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `term` | `string` | Your SEO Term name |
| `description` | `string` |  Your SEO Term description |

#### Deletes a specific term

```http
  DELETE /terms/${seo_term_name}
```

#### Mannual database reset to default values

```http
  Get /reset
```
