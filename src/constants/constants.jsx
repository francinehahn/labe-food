export const BASE_URL= "https://us-central1-missao-newton.cloudfunctions.net/futureEatsA"
export const validateEmail = (email => /[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(email))
export const validatePassword = password => /.{6,}/.test(password)
export const validateCPF = cpf => cpf.length === 11
export const validateName = name => /.{2,}/.test(name)
export const validateStreet = street => /.{2,}/.test(street)
export const validateNumber = number => /.{2,}/.test(number)
export const validateNeighbourhood = neighbourhood => /.{2,}/.test(neighbourhood)
export const validateCity = city => /.{2,}/.test(city)
export const validateState = state => /.{2,}/.test(state)
