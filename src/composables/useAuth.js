import { useHttp } from './useHttp'
import { useForm } from "vee-validate";
import { ref } from 'vue';
import * as yup from "yup";
const { errors, values, meta, handleSubmit, defineInputBinds } = useForm({

    validationSchema: yup.object({
        username: yup.string().email().required(),
        password: yup.string().required(),
    }),
});

export const useAuth = () => {
    const { post } = useHttp()
    const errorMessage = ref("")
    /**
    * Methods for authentication user
    */
    const auth = handleSubmit(async (values) => {
        try {
            await post("/login", values);
            router.push("/home");
        } catch (error) {
            const {
                response: {
                    data: { message },
                },
            } = error;
            errorMessage.value = message;
        }
    });

    return {
        auth, errors, meta, defineInputBinds, errorMessage
    }
}