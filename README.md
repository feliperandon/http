# Improving understanding in HTTP

### 1 - Data Fetching

I set up JSON Server, changed the "scripts" in package.json to watch a specific data
**"server": "json-server --watch data/db.json"**

Created a type containing id, name, price

Used useEffect to call the request with async function, then I used useState to save fetch's data. Afterwards I used .map() to iterate the data in TSX
