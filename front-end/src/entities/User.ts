interface User {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  permissions?: string;
}

export type { User };
