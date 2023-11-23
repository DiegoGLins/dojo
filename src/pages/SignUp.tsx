
import { Alert, Button, Grid, Snackbar, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ContainerImage from "../components/ContainerImage";
import { useState } from "react";
import imageCadastro from '/image-cadastro.jpg'
import Title from "../components/Title";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { createUser } from "../store/modules/usersSlice/usersSlice";
import { v4 as generateId } from 'uuid'
import AlertLoginStyled from "../components/AlertLoginStyled";

export const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>('')
  const [openAlert, setOpenAlert] = useState<boolean>(false)
  const [checkSucess, setCheckSucess] = useState<boolean>(false)
  const [alert, setAlert] = useState('')

  const usersRedux = useAppSelector(state => state.users)

  const id = generateId()

  const validateUser = usersRedux.find(item => item.email === email)

  const handleAlert = () => {
    setOpenAlert(true)
  }

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]{3,}@(gmail|outlook|hotmail)\.com$/

    if (!emailRegex.test(email)) {
      setAlert("Insira um email válido e que tenha no mínino 3 caracteres antes do @");
      handleAlert()
      return false;
    }
    return true;
  }

  const validatePassword = (password: string): boolean => {
    if (password !== repeatPassword) {
      setAlert("Senhas não são iguais");
      handleAlert()
      return false;
    }

    if (password.length < 5) {
      setAlert("A senha deve ter pelo menos 5 caracteres");
      handleAlert()
      return false;
    }

    const sequentialRegex = /(123|234|345|456|567|678|789|012)/;

    if (sequentialRegex.test(password)) {
      setAlert("A senha não pode ser uma sequência numérica");
      handleAlert()
      return false;
    }
    return true;
  }

  const handleRegister = () => {
    if (validateUser) {
      setAlert("Email já cadastrado")
      return handleAlert()
    }
    if (!validateEmail(email) || !validatePassword(password)) {
      return
    }

    const user = {
      id: id,
      email: email,
      password: password,
      repeatPassword: repeatPassword
    }
    setCheckSucess(true)
    dispatch(createUser(user))
    setAlert("Cadastro realizado com sucesso")
    handleAlert()
    setTimeout(() => {
      navigate('/')
    }, 900)
  }


  return (

    <Grid container sx={{ height: '100vh' }}>
      <ContainerImage image={imageCadastro} />
      <Grid item xs={4} md={4} sx={{ display: "flex", alignItems: 'center', flexDirection: 'column', marginTop: '100px', padding: '0px 50px 0px 50px' }}>
        <Title icon={<VerifiedUserIcon />} color={'#4caf50'} title='Sign Up' />
        <Grid item>
          <TextField style={{ padding: '8px 0px 8px 0px' }}
            type="email"
            id='email'
            fullWidth
            placeholder={"E-mail"}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField style={{ padding: '8px 0px 8px 0px' }}
            fullWidth
            required
            id='password'
            type="password"
            placeholder={"Password"}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <TextField style={{ padding: '8px 0px 8px 0px' }}
            fullWidth
            required
            id='repeatPassword'
            type='password'
            placeholder={"Repeat Password"}
            value={repeatPassword}
            onChange={e => setRepeatPassword(e.target.value)}
          />
        </Grid>
        <Button onClick={handleRegister} sx={{ marginTop: '20px' }} fullWidth variant="contained" color={'success'}>Criar conta</Button>
        <Grid container sx={{ justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
          <div>Já possui conta ?</div>
          <Link style={{ display: 'flex', margin: '10px 0px 10px 10px' }} to={"/"} >Vá para Login</Link>
        </Grid>
        <Grid item sx={{ display: 'flex' }} justifyContent={'center'}>
          <p>Copyright {'\u00A9\uFE0F'} create by Diego Lins in 2023</p>
        </Grid>
        <AlertLoginStyled>
          <Snackbar open={openAlert} autoHideDuration={2000} onClose={() => setOpenAlert(false)}>
            <Alert variant='standard' color={checkSucess ? 'success' : 'warning'} onClose={() => setOpenAlert(false)} severity="success">
              {[alert, checkSucess]}
            </Alert>
          </Snackbar>
        </AlertLoginStyled>
      </Grid>
    </Grid>
  )
};
