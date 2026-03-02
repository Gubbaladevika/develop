import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { create } from "framer-motion/m";

const Users=[
  
  {
    "id": 1,
    "username": "devika01",
    "email": "devika01@gmail.com",
    "password": "Devika@123",
    "role": "admin",
    "status": "active"
  },
  {
    "id": 2,
    "username": "rahul_dev",
    "email": "rahul.dev@gmail.com",
    "password": "Rahul@456",
    "role": "user",
    "status": "inactive"
  },
  {
    "id": 3,
    "username": "priya_codes",
    "email": "priya.codes@gmail.com",
    "password": "Priya@789",
    "role": "user",
    "status": "active"
  },
  {
    "id": 4,
    "username": "arjun_mca",
    "email": "arjun.mca@gmail.com",
    "password": "Arjun@321",
    "role": "manager",
    "status": "active"
  },
  {
    "id": 5,
    "username": "sneha_java",
    "email": "sneha.java@gmail.com",
    "password": "Sneha@654",
    "role": "user",
    "status": "blocked"
  },
  {
    "id": 6,
    "username": "kiran_sql",
    "email": "kiran.sql@gmail.com",
    "password": "Kiran@987",
    "role": "editor",
    "status": "active"
  },
  {
    "id": 7,
    "username": "anil_react",
    "email": "anil.react@gmail.com",
    "password": "Anil@159",
    "role": "user",
    "status": "inactive"
  },
  {
    "id": 8,
    "username": "meena_node",
    "email": "meena.node@gmail.com",
    "password": "Meena@753",
    "role": "editor",
    "status": "active"
  },
  {
    "id": 9,
    "username": "varun_mongo",
    "email": "varun.mongo@gmail.com",
    "password": "Varun@852",
    "role": "user",
    "status": "blocked"
  },
  {
    "id": 10,
    "username": "kavya_web",
    "email": "kavya.web@gmail.com",
    "password": "Kavya@147",
    "role": "user",
    "status": "active"
  }
]



 export const userlogin = createAsyncThunk("auth/login", async ({email, password}, {rejectWithValue}) => {
    try{
        const finduser = Users.find(user => {
            return user.email === email && user.password === password
        })

        if(finduser){
            return finduser;
        } else {
            return rejectWithValue("Invalid Details");
        }
    } catch(error){
       return error
    }
  })


export const authSlice = createSlice({
  name: "authentication",
  initialState: {
    error: null,
    loading: null,
    user: null,
 }, 
    reducers: {
        logout: (state) => {
            state.error = null;
            state.loading = null;
            state.user = null;
        }
    },

    extraReducers: (builder) => {
        builder
           .addCase(userlogin.pending, (state, action) => {
            state.loading = true;
           
        })
        .addCase(userlogin.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        })
        .addCase(userlogin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
       })
    }
})

export const { logout } = authSlice.actions;    
export default authSlice.reducer;