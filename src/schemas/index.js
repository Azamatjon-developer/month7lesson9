import * as yup from 'yup'

export const LoginValidation = () => {
  const data = yup.object().shape({
    userName: yup.string().required('Ism kiritish majburiy !'),
    userEmail: yup.string().required('Email kiritish majburiy!'),
    Passsword: yup
      .string()
      .min(8)
      .max(16)
      .required('Password kiritish majburiy!'),
  })
  return data
}
