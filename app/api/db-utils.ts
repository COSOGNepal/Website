import { Collection, Document, ObjectId } from "mongodb";

export const insertDataToDb = async (collection: Collection<Document>, newDocuments: any[]) => {
    try {
        const now = new Date();
        if (!collection) throw new Error(`Invalid collection name`);
        if (newDocuments.length < 1) throw new Error(`Cannot insert empty document`);

        // adding created time
        const finalNewDocs = newDocuments.map((docs) => ({ ...docs, createdAt: now }));
        const { insertedIds } = await collection.insertMany(finalNewDocs);


        // finding the inserted data
        const insertedData = collection.find({
            _id: { $in: Object.values(insertedIds) }
        }).toArray();

        return insertedData;
    }
    catch (e) {
        throw new Error(`Error while inserting documents to ${collection}`);
    }
}
