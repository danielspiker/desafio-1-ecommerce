const nomeCadastrado = document.getElementById('nomes')
const emailCadastrado = document.getElementById('emails')
const botaoCadastro = document.getElementById('cadastra')

botaoCadastro.onclick = function () {
  const oNome = nomeCadastrado.value
  const oEmail = emailCadastrado.value
  localStorage.setItem(oNome, oEmail)
  location.reload()
}
