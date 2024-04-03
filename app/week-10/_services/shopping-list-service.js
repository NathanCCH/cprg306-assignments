import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function getItems(userId) {
  try {
    const userRef = doc(db, 'users', userId);
    const itemsQuery = query(collection(userRef, 'items'));
    const itemsSnapshot = await getDocs(itemsQuery);
    const items = [];

    itemsSnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return items;
  } catch (error) {
    console.error("Error getting items:", error);
  }
}

async function addItem(userId, item) {
  try {
    const userRef = doc(db, 'users', userId);
    const itemsCollection = collection(userRef, 'items');
    const docRef = await addDoc(itemsCollection, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
  }
}