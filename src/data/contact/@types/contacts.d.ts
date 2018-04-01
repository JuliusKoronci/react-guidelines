interface IContact {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  website: string;
}

type Contacts = IContact[];
