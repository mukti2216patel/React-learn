import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    const useraccount = await this.account.create(
      ID.unique(),
      email,
      password,
      name
    );

    if (useraccount) {
      return this.login({ email, password });
    }
  }

  async login({ email, password }) {
    return this.account.createEmailPasswordSession(email, password);
  }
  async getCurrentUser() {
    return await this.account.get();
  }
  async logout() {
    return await this.account.deleteSessions();
  }
}

const authService = new AuthService();
export default authService;
