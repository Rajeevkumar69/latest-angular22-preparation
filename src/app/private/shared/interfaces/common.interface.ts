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
export interface DynamicField {
     key: string;
     label: string;
     type: string;
     placeholder?: string;
     defaultValue?: string | number | boolean;
     options?: { label: string; value: string }[];
     validators?: {
          required?: boolean;
          email?: boolean;
          minLength?: number;
          maxLength?: number;
          pattern?: string;
          min?: number;
          max?: number;
     };
}
export interface DynamicFormConfig {
     title: string;
     description: string;
     fields: DynamicField[];
}