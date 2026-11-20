export interface MenuItem {
     label: string;
     route: string;
     icon: string;
}

export interface Post {
     userId: number,
     id: number,
     title: string,
     body: string
}

export interface User {
     name: string,
     email: string,
     password: string,
     isChecked: boolean
}