import { MongoClient } from "mongodb";

const URI = process.env.MONGODB_URI;
const options = {}


if (!URI) thow new Error("Falta URI mongo")


let client = new MongoClient(URI, options);
let clientPromise; 



if (process.env.NODE_ENV !== 'production'){
    if (!global._mongoClientPromise){
        global._mongoClientPromise = client.connect()
    }

    clientPromise = global._mongoClientPromise;

} else {
    clientPromise= client.connect()
}


client.connect()

export default clientPromise