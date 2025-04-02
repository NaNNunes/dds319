import { useForm } from 'react-hook-form';
import style from './forms.module.css'

const NewForms = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log("Dados:", data);
    };

    const onError = (errors) => {
        console.log("Erros:", errors)
    };

    console.log("RENDERIZADO");

    return (
        <div>
            <form className={style.formula} onSubmit={handleSubmit(onSubmit, onError)}>
                <label htmlFor="nome">
                    <div className={style.inputzin}>
                        <span>Nome: </span>
                        <input
                            type="text"
                            name=""
                            id="nome"
                            placeholder='Digite seu nome'
                            {...register("nome", {
                                required: "O nome é obrigatório",
                                minLength: {
                                    value: 2,
                                    message: "Tem que ter 2 caracteres"
                                },
                                maxLength: {
                                    value: 20,
                                    message: `O nome deve ter pelo menos ${0} caracteres`
                                },
                                pattern: {
                                    value: /^[A-Za-zç]+$/i, // apenas letras
                                    message: "Apenas letras por favor"
                                }
                            })}
                        />
                    </div>
                    {errors.nome && <p className={style.error}>{errors.nome.message}</p>}
                </label>

                <label>
                    <span>Email: </span>
                    <input
                        type="email"
                        id="email"
                        placeholder='Digite seu email'
                        {...register("email", {
                            required: "O email é obrigatorio",
                            pattern: {
                                value: /^[A-Za-zç0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i, // user @ dominio
                                message: "Email inválido"
                            },
                            validate: (value) => value.includes("@") || "Email inválido",
                        })}
                    />
                    {errors.email && <p className={style.error}>{errors.email.message}</p>}
                </label>

                <label>
                    <span>Senha: </span>
                    <input
                        type="password"
                        id="senha"
                        placeholder='Digite a senha'
                        {...register("senha", {
                            required: "A senha é obrigatória",
                            minLength: {
                                value: 8,
                                message: "A senha deve ter pelo menos 8 caracteres",
                            },
                            maxLength: {
                                value: 20,
                                message: "A senha deve ter menos de 20 caracteres",
                            },
                            pattern: {
                                value:
                                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message:
                                    "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial",
                            },
                        })}
                    />
                    {errors.senha && <p className={style.error}>{errors.senha.message}</p>}
                </label>
                {/* <label>
                    <span>Confirmar Senha:</span>
                    <input
                        type="password"
                        {...register("confirmarSenha", {
                            required: "A confirmação de senha é obrigatória",
                            validate: (value) =>
                                value === watch("senha") || "As senhas não coincidem",
                        })}
                        placeholder="Confirmar Senha"
                    />
                    {errors.confirmarSenha && (
                        <p className={styles.error}>{errors.confirmarSenha.message}</p>
                    )}
                </label>
                <label>
                    <span>Descrição:</span>
                    <textarea {...register("descricao")} placeholder="Descrição" />
                </label>
                <label>
                    <span>Tipo:</span>
                    <select {...register("tipo")} defaultValue="tipo1">
                        <option value="tipo1">Tipo 1</option>
                        <option value="tipo2">Tipo 2</option>
                    </select>
                </label>
                <label>
                    <span>Data:</span>
                    <input type="date" {...register("data")} />
                </label>
                <label>
                    <span>Hora:</span>
                    <input type="time" {...register("hora")} />
                </label>
                <label>
                    <span>Arquivo:</span>
                    <input type="file" {...register("arquivo")} />
                </label>
                <label>
                    <span>Cor:</span>
                    <input type="color" {...register("cor")} />
                </label>
                <label>
                    <span>URL:</span>
                    <input type="url" {...register("url")} placeholder="URL" />
                </label>
                <label>
                    <span>Telefone:</span>
                    <input type="tel" {...register("telefone")} placeholder="Telefone" />
                </label>

                <label>
                    <span>Range:</span>
                    <input type="range" {...register("range")} min="0" max="100" />
                </label>
                <label>
                    <span>Data e Hora:</span>
                    <input type="datetime-local" {...register("dataHora")} />
                </label>
                <label>
                    <span>Busca:</span>
                    <input type="search" {...register("busca")} placeholder="Busca" />
                </label>
                <label>
                    <span>Concordo com os termos:</span>
                    <input type="checkbox" {...register("checkbox")} />
                </label>
                <button type="submit" className={styles.botao}>
                    Enviar
                </button> */}

                <input type="submit" value="Enviar" className={style.btn} />
            </form>
        </div>
    )
}

export default NewForms