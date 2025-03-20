import { db } from "@/config/firebase";
import { ApplicationFormData } from "@/types/application";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export const createApplication = async (
  userId: string,
  applicationData: ApplicationFormData
) => {
  try {
    const userApplicationsRef = collection(db, `users/${userId}/applications`);

    const newApplication = {
      ...applicationData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    const docRef = await addDoc(userApplicationsRef, newApplication);
    return { id: docRef.id, ...newApplication };
  } catch (error) {
    if (error instanceof TypeError) {
      return { error: "tipe data salah" };
    } else {
      return { error: "Gagal menambahkan aplikasi" };
    }
  }
};
