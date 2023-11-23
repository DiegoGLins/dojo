/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { Alert, Button, Grid, Snackbar, TextField } from "@mui/material";
import { Link } from 'react-router-dom'
import RememberMe from "../components/RememberMe";
import Title from "../components/Title";
import ContainerImage from "../components/ContainerImage";
import imageLogin from '/image-login.jpg'
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { login } from "../store/modules/userLoginSlice/userLoginSlice";
import AlertLoginStyled from "../components/AlertLoginStyled";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkBox, setCheckBox] = useState(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false)
  const [checkSucess, setCheckSucess] = useState<boolean>(false)
  const [alert, setAlert] = useState('')

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const usersRedux = useAppSelector(state => state.users)
  const validateEmail = usersRedux.find(item => item.email)?.email
  const validatePassword = usersRedux.find(item => item.password)?.password
  console.log(checkBox)

  const handleAlert = () => {
    setOpenAlert(true)
  }

  const validate = validateEmail === email && validatePassword === password
  const handleLogin = () => {
    if (validate) {
      setCheckSucess(true)
      const dataLogged = {
        email: validateEmail,
        password: validatePassword
      }
      dispatch(login(dataLogged))
      setAlert("Login realizado com sucesso")
      handleAlert()
      setTimeout(() => {
        navigate('/home')
      }, 1200)
    }
    else {
      setCheckSucess(false)
      setAlert("Email ou senha incorretos")
      handleAlert()
      return
    }
    if (checkBox) {
      setCheckSucess(true)
      localStorage.setItem("userLogged", JSON.stringify({ email, password }))
      setAlert("Login efetuado com sucesso. Seus dados de login foram salvos")
      handleAlert()
    }
    else {
      localStorage.clear()
    }
  }

  return (
    <Grid container sx={{ height: '100vh' }}>
      <ContainerImage image={imageLogin} />
      <Grid item xs={4} md={4} sx={{ display: "flex", flexDirection: 'column', marginTop: '100px', padding: '0px 50px 0px 50px' }}>
        <Title icon={<LockIcon />} color="#e91e63" title="Sign In" />
        <Grid item >
          <TextField style={{ padding: '8px 0px 8px 0px' }}
            fullWidth
            type='email'
            placeholder={"E-mail"}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField style={{ padding: '8px 0px 8px 0px' }}
            fullWidth
            type='password'
            placeholder={"Password"}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <RememberMe active={(e) => setCheckBox(e)} value={checkBox} />
        </Grid>
        <Button onClick={handleLogin} sx={{ marginTop: '20px' }} fullWidth variant="contained" color="info">Entrar</Button>
        <Grid container sx={{ justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
          <div>Não tem conta ?</div>
          <Link style={{ display: 'flex', margin: '10px 0px 10px 10px' }} to={"/signUp"} >Cadastre-se</Link>
        </Grid>
        <Grid item sx={{ display: 'flex' }} justifyContent={'center'}>
          <p>Copyright {'\u00A9\uFE0F'} create by Diego Lins in 2023</p>
        </Grid>
        <AlertLoginStyled>
          <Snackbar open={openAlert} autoHideDuration={1600} onClose={() => setOpenAlert(false)}>
            <Alert variant='standard' color={checkSucess ? 'success' : 'warning'} onClose={() => setOpenAlert(false)} severity="success">
              {[alert, checkSucess]}
            </Alert>
          </Snackbar>
        </AlertLoginStyled>
      </Grid>
    </Grid>
  );
}
