import { MongoClient } from "mongodb";

if (!process.env.MONGO_DB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGO_DB_URI;
const options = {};

let client;
let mongoClient: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
    let globalWithMongo = global as typeof globalThis & {
        _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
        client = new MongoClient(uri, options);
        globalWithMongo._mongoClientPromise = client.connect();
    }
    mongoClient = globalWithMongo._mongoClientPromise;
} else {
    client = new MongoClient(uri, options);
    mongoClient = client.connect();
}

export default mongoClient;

