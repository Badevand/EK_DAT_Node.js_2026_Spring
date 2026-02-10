# REST API Design - Beers

## API Endpoints

GET    /beers           - Get all beers
GET    /beers/{id}      - Get specific beer
POST   /beers           - Create new beer
PUT    /beers/{id}      - Update specific beer 
DELETE /beers/{id}      - Delete specific beer

## Designovervejelser og konventioner

### 1. HTTP Metoder
- **GET** - Henter data (læser)
- **POST** - Opretter ny ressource
- **PUT** - Opdaterer eksisterende ressource
- **DELETE** - Sletter ressource

### 2. Rækkefølge af endpoints
Standard rækkefølge: GET all → GET specific → POST → PUT → DELETE

### 3. Endpoint navngivning
- Brug **flertal** (/beers ikke /beer) - endpoints repræsenterer collections
- Brug **navneord** ikke udsagnsord (/beers ikke /getBeer)
- Brug **lowercase** og **bindestreg** for flere ord (/beer-styles ikke /beerStyles)

### 4. CRUD princippet
- **C**reate = POST /beers
- **R**ead = GET /beers og GET /beers/{id}
- **U**pdate = PUT /beers/{id}
- **D**elete = DELETE /beers/{id}

### 5. ID i URL
- Brug `{id}` når du refererer til specifik ressource
- Kun GET all bruger ingen ID