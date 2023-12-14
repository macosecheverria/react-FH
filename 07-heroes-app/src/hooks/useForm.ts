import { ChangeEvent, useState } from "react";

interface StateValue {
    searchText: string
}

const useForm = (initialState:StateValue) => {
const [formState, setFormState] = useState<StateValue>(initialState);

const onInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = target;

    setFormState(formState => ({
        ...formState,
        [name]: value
    }))
}

const onResetForm = () => {
    setFormState(initialState);
}

return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
}
}

export default useForm;