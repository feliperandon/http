# Improving understanding in HTTP

### 1 - Data Fetching

I set up JSON Server, changed the "scripts" in package.json to watch a specific data
**"server": "json-server --watch data/db.json"**

Created a type containing id, name, price

Used useEffect to call the request with async function, then I used useState to save fetch's data. Afterwards I used .map() to iterate the data in TSX

### 2 - Adding Product

I made a form to create new products, then I used POST method to send these products to the database. Still wondering if I am using TypeScript in a correct way

const res: Response = await fetch(url, {
method: "POST", <!-- to send data-->
headers: {
"Content-Type": "application/json", <!-- specifying the type of the data being send->
},
body: JSON.stringify(product), <!-- content being send-->
});

**const [price, setPrice] = useState<number | undefined>(undefined);**
**onChange={(e) => setPrice(Number(e.target.value))}**

e.target.value gives us a string, but in TypeScript, when I type the useState as number, I shouldnt be able to use the event, so I used Number method to convert string to a number.
