const conf={
    appWriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appWriteProjectId : String(import.meta.env.VITE_APPWRITE_PID),
    appWriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DBID),
    appWriteCollectionId : String(import.meta.env.VITE_APPWRITE_CID),
    appWriteBuckettId : String(import.meta.env.VITE_APPWRITE_BID)
};
export default conf