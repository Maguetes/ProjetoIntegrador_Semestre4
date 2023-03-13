// Código javascript de autenticação de login no Google pelo Firebase, salvando os dados no banco de dados Firebase
// Exemplo de como fazer a autenticação de login no Google usando o Firebase em JavaScript e salvar os dados do usuário autenticado no banco de dados Firebase Realtime:  (javascript)

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Cria uma instância do provedor de autenticação do Google
var provider = new firebase.auth.GoogleAuthProvider();

// Executa a autenticação de login no Google
firebase.auth().signInWithPopup(provider).then(function(result) {
  // Autenticação de login bem sucedida
  var user = result.user;
  saveUserData(user);
}).catch(function(error) {
  // Tratamento de erro
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode + ": " + errorMessage);
});

// Função para salvar os dados do usuário autenticado no Firebase Realtime Database
function saveUserData(user) {
  // Cria uma referência para o nó "users" no Firebase Realtime Database
  var usersRef = firebase.database().ref("users");

  // Cria uma referência para o subnó do usuário autenticado, utilizando o UID como chave
  var userRef = usersRef.child(user.uid);

  // Armazena os dados relevantes do usuário no subnó criado
  userRef.update({
    name: user.displayName,
    email: user.email,
    photoUrl: user.photoURL
  });
}


// Este exemplo demonstra como fazer a autenticação de login no Google usando o Firebase em JavaScript, salvando os dados do usuário autenticado no Firebase Realtime Database.

// No método saveUserData(), criamos uma referência para o nó "users" no Firebase Realtime Database e, em seguida, criamos uma subreferência para o usuário autenticado usando o UID como chave.

// Em seguida, utilizamos o método update() para salvar os dados relevantes do usuário no subnó criado. Neste exemplo, estamos salvando o nome, o email e a URL da foto do perfil do usuário, mas você pode salvar outras informações, como o número de telefone, o endereço, entre outras, de acordo com as necessidades do seu aplicativo.

// Lembre-se de que este é apenas um exemplo básico de como fazer a autenticação de login no Google usando o Firebase em JavaScript e salvar os dados do usuário autenticado no Firebase Realtime Database. Certifique-se de que os dados sejam armazenados de forma segura e que apenas as informações necessárias sejam coletadas e armazenadas.