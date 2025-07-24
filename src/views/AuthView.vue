


<script setup>
import axios from 'axios';
import { reactive } from 'vue';


const loginForm = reactive({
    name: '',
    password: '',
})


const registerForm = reactive({
    name: '',
    email: '',
    password: '',
})


const handleRegister = async () => {
    const newUser = {
        name: registerForm.name,
        email: registerForm.email,
        password: registerForm.password
    }

    try{
        await axios.post('/api/user/register', newUser)
        console.log('Cadastro realizado com successo!')
    }catch(error){
        console.error('Error registering user: ', error)
    }
}

const handleLogin = async () => {
    const loginUser = {
        name: loginForm.name,
        password: loginForm.password
    }

    try{
        const response = await axios.post('/api/user/login', loginUser);
        localStorage.token = response.data.token;
    }catch(error){
        console.error('Error logging user: ', error)
    }
}

</script>

<style scoped>
@import "@/assets/css/pages/auth.css";

</style>

<template>
    <main class="auth-main">

        
        <div class="login-box">
            <div class="layout">
                <p class="auth-title">Fazer Login</p>
                <form @submit.prevent="handleLogin" class="form-inputs" >
                    <div class="auth-inputs">

                         <label for="name">Nome</label>
                         <input v-model="loginForm.name" class="auth-input" id="name" placeholder="Nome">
         
                         <label for="password">Senha</label>
                         <input v-model="loginForm.password" type="password" class="auth-input" id="password" placeholder="Senha">
     
                    </div>

                    <button>Login</button>
                </form>
            </div>
        </div>
        <div class="register-box">
            <div class="layout">
                <p class="auth-title">Criar Conta</p>
                <form @submit.prevent="handleRegister" class="form-inputs" >
                    <div class="auth-inputs">
                        <label for="name">Nome</label>
                        <input v-model="registerForm.name" class="auth-input" id="name" placeholder="Nome">
                        <label for="email">Email</label>
                        <input v-model="registerForm.email"
                        class="auth-input" id="email"placeholder="Email">
                        <label for="password">Senha</label>
                        <input  v-model="registerForm.password" 
                        type="password" class="auth-input" id="password" placeholder="Senha">
                    </div>

                    <button>Cadastrar-se</button>
                </form>
            </div>
        </div>
    </main>

</template>