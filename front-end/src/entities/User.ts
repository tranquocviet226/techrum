interface User {
  id?: number;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  permissions?: string;
}

export type { User };
