import Footer from "../src/components/common/footer";
import HeaderGeneric from "../src/components/common/headerGeneric";
import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap'

const Register = () => {
    return <>
        <Head>
            <title>Onebitflix - Registro</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            <script src="https://jsuites.net/v5/jsuites.js"></script>
        </Head>
        <main className={styles.main}>
            <HeaderGeneric logoUrl="/" btnUrl="/login" btnContent="Quero fazer login" />
            <Container className="py-5">
                <p className={styles.formTitle}>Bem-vindo(a) ao OneBitFlix!</p>
                <Form className={styles.form}>
                    <p className="text-center"><strong>Faça a sua conta!</strong></p>
                    <FormGroup>
                        <Label for="firstName" className={styles.label}>NOME:</Label>
                        <Input id="firstName" name="firstName" type="text" placeholder="Qual o seu nome?" required maxLength={35} className={styles.inputName} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName" className={styles.label}>SOBRENOME:</Label>
                        <Input id="lastName" name="lastName" type="text" placeholder="Qual o seu sobrenome?" required maxLength={20} className={styles.inputName} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone" className={styles.label}>WHATSAPP / TELEGRAM:</Label>
                        <Input id="phone" name="phone" type="tel" placeholder="(XX) 9xxxx-xxxx" data-mask="[-]+55 (00) 00000-0000" required maxLength={20} className={styles.input} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email" className={styles.label}>EMAIL:</Label>
                        <Input id="email" name="email" type="email" placeholder="Qual o seu email?" required maxLength={20} className={styles.input} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="birth" className={styles.label}>DATA DE NASCIMENTO:</Label>
                        <Input id="birth" name="birth" type="date" min="1930-01-01" max="2024-12-31" required maxLength={20} className={styles.input} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password" className={styles.label}>SENHA:</Label>
                        <Input id="password" name="password" type="password" placeholder="Digite sua senha" required maxLength={35} minLength={6} className={styles.input} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password" className={styles.label}>CONFIRME SUA SENHA:</Label>
                        <Input id="password" name="password" type="password" placeholder="Confirme a sua senha" required maxLength={35} minLength={6} className={styles.input} />
                    </FormGroup>
                    <Button type="submit" outline className={styles.formBtn}>
                        CADASTRAR
                    </Button>
                </Form>
            </Container>
            <Footer />
        </main>
    </>
}

export default Register