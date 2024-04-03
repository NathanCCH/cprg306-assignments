import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function getItems(userId) {
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const itemsSnapshot = await getDocs(query(itemsRef));
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
    const itemsRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsRef, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
  }
}