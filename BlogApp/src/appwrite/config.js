import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    return await this.databases.createDocument(
      conf.appWriteDatabaseId,
      conf.appWriteCollectionId,
      slug,
      { title, content, featuredImage, status, userId }
    );
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    return await this.databases.updateDocument(
      conf.appWriteDatabaseId,
      conf.appWriteCollectionId,
      slug,
      { title, content, featuredImage, status }
    );
  }

  async deletePost(slug) {
    return await this.databases.deleteDocument(
      conf.appWriteDatabaseId,
      conf.appWriteCollectionId,
      slug
    );
  }

  async getPost(slug) {
    return await this.databases.getDocument(
      conf.appWriteDatabaseId,
      conf.appWriteCollectionId,
      slug
    );
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    return await this.databases.listDocuments(
      conf.appWriteDatabaseId,
      conf.appWriteCollectionId,
      queries
    );
  }

  async uploadFile(file) {
    return await this.bucket.createFile(
      conf.appWriteBuckettId,
      ID.unique(),
      file
    );
  }

  async deleteFile(fileId)
  {
    return await this.bucket.deleteFile(conf.appWriteBuckettId , fileId);
  }

}

const service = new Service();

export default service;
