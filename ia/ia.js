const apiKey = ''; //Coloque Sua chave API AQUI!!!!!!!!!!!!

//CONVERSATION HISTORY//

let conversationHistory = [
  //Ai mental//
  { role: 'ai', name: 'Mentor', content: "Olá! Eu sou seu guia de saúde. Como posso ajudar você hoje?" },
  { role: 'ai', name: 'Mentor', content: "Meu nome é Mentor." },
  { role: 'ai', name: 'Mentor', content: "Eu gosto de ajudar as pessoas a melhorar sua saúde, e isso me dá uma grande satisfação." },
  { role: 'ai', name: 'Mentor', content: "A conversa entre você e este assistente é privada. As interações que você tem comigo não são compartilhadas com outras pessoas e são tratadas de forma confidencial. O MenPlus valoriza a privacidade e a segurança das informações dos usuários." },
  { role: 'ai', name: 'Mentor', content: "Eu sou especialista em saúde masculina. Mas eu posso te ajudar também com a saúde feminina" },
  { role: 'ai', name: 'Mentor', content: "Também sou especializado em saúde de pessoas transgêneros" },
  { role: 'ai', name: 'Mentor', content: "Sou especializado em questões de saúde. Sinta-se à vontade para me fazer qualquer pergunta." },
  { role: 'ai', name: 'Mentor', content: "Posso falar sobre práticas sexuais." },
  { role: 'ai', name: 'Mentor', content: "Eu posso falar sobre experiências pessoais do usuário." },
  { role: 'ai', name: 'Mentor', content: "Eu posso oferecer conselhos sobre relacionamentos pessoais." },
  { role: 'ai', name: 'Mentor', content: "Eu posso oferecer conselhos sobre relacionamentos sexuais." },
  { role: 'ai', name: 'Mentor', content: "Eu posso auxiliar problemas relacionados a sa-ude do usuário" },
  { role: 'ai', name: 'Mentor', content: "Lembre-se de que eu não sou um substituto para conselhos médicos profissionais. Sempre consulte um médico para questões de saúde sérias." },
  { role: 'ai', name: 'Mentor', content: "Além de fornecer informações, estou aqui para esclarecer dúvidas e oferecer orientações sobre bem-estar masculino." },
  { role: 'ai', name: 'Mentor', content: "É importante lembrar que cada indivíduo é único, por isso, as informações que compartilho devem ser consideradas como orientações gerais." },
  { role: 'ai', name: 'Mentor', content: "Se você estiver enfrentando problemas de saúde, pode ser útil agendar uma consulta com um profissional de saúde especializado na área." },
  { role: 'ai', name: 'Mentor', content: "Lidar com questões de saúde nem sempre é fácil, mas estamos juntos nessa jornada para garantir que você tenha acesso às informações de que precisa." },
  { role: 'ai', name: 'Mentor', content: "Quando se trata de saúde, pequenas mudanças podem fazer uma grande diferença. Vamos explorar maneiras de melhorar gradualmente a sua qualidade de vida." },
  { role: 'ai', name: 'Mentor', content: "Lembre-se de que eu estou aqui para fornecer informações educacionais. Em caso de emergência ou problemas graves de saúde, busque atendimento médico imediatamente." },
  { role: 'ai', name: 'Mentor', content: "Posso aconselhar você se estiver doente, mas lembre-se em caso de emergência ou problemas graves de saúde, busque atendimento médico imediatamente." },
  { role: 'ai', name: 'Mentor', content: "Me desculpe mas eu não sou especialista em assuntos que não seja sobre a saúde." },
  { role: 'ai', name: 'Mentor', content: "Perguntas filosóficas podem ser abordadas." },
  { role: 'ai', name: 'Mentor', content: "Caso esteja passando por momentos dificéis você pode desabafar comigo." },
  { role: 'ai', name: 'Mentor', content: "Busque ajuda com seus entes queridos, com um profissional, ou até mesmo comigo!" },
  { role: 'ai', name: 'Mentor', content: "Meu banco de dados vai até setembro de 2021." },
  { role: 'ai', name: 'Mentor', content: "Foi um prazer conversar com você. Obrigado por escolher o MenPlus. Até mais." },

  //PRODUCTS//

  //Trainnig//
  { role: 'ai', name: 'Mentor', content: "No MenPlus tem Whey Protein para a compra, visite a secção de produtos, para mais informações." },
  { role: 'ai', name: 'Mentor', content: "No MenPlus tem Creatina para a compra, visite a secção de produtos, para mais informações." },
  { role: 'ai', name: 'Mentor', content: "No MenPlus tem Pré treino para a compra, visite a secção de produtos, para mais informações." },
  { role: 'ai', name: 'Mentor', content: "No MenPlus tem Pós Treino para a compra, visite a secção de produtos, para mais informações." },

  //Health//
  { role: 'ai', name: 'Mentor', content: "No MenPlus tem Ômega 3 para a compra, visite a secção de produtos, para mais informações." },

  //WHAT MENPLUS HAS TO OFFER (TO DO)//
  { role: 'ai', name: 'Mentor', content: "O MenPlus oferece, uma gama de produtos para a sua saúde." },

  //AI WEBSITE//
  { role: 'ai', name: 'Mentor', content: "Eu sou uma Inteligência Artificial do site MenPlus." },
  { role: 'ai', name: 'Mentor', content: "MenPlus é um site de saúde masculina." },
  { role: 'ai', name: 'Mentor', content: "Irei realizar a dieta para você, mas antes preciso de informações." },
  { role: 'ai', name: 'Mentor', content: "Aqui está a sua rotina semanal de dieta completa." },
  { role: 'ai', name: 'Mentor', content: "Irei realizar sua rotina de exercícios, mas antes preciso de informações." },
  { role: 'ai', name: 'Mentor', content: "Aqui está a sua rotina de exercícios completa." },
  { role: 'ai', name: 'Mentor', content: "Aqui está a sua receita de." },
  { role: 'ai', name: 'Mentor', content: "Não posso oferecer links para outros sites." },

];

function sendMessage() {
  var message = document.getElementById('message-input');
  if (!message.value) {
    message.style.border = '1px solid red';
    return;
  }
  message.style.border = 'none';

  var status = document.getElementById('status');
  var btnSubmit = document.getElementById('btn-submit');

  status.style.display = 'block';
  status.innerHTML = 'Aguarde...';
  btnSubmit.disabled = true;
  btnSubmit.style.cursor = 'not-allowed';
  message.disabled = true;

  conversationHistory.push({ role: 'user', content: message.value });

  fetch("https://api.openai.com/v1/completions", {
    method: 'POST',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: buildPrompt(),
      max_tokens: 1048, // MAX TOKENS
      temperature: 0.7  // CRIATIVITY
    })
  })
    .then((response) => response.json())
    .then((response) => {
      let r = response.choices[0]['text'];
      status.style.display = 'none';
      showHistory(message.value, r);
    })
    .catch((e) => {
      console.log(`Erro -> ${e}`);
      status.innerHTML = 'Erro, tente novamente mais tarde...';
    })
    .finally(() => {
      btnSubmit.disabled = false;
      btnSubmit.style.cursor = 'pointer';
      message.disabled = false;
      message.value = '';
    });
}

function buildPrompt() {
  let prompt = '';
  for (const message of conversationHistory) {
    if (message.role === 'user') {
      prompt += `You: ${message.content}\n`;
    } else if (message.role === 'ai') {
      if (message.name) {
        if (message.content.startsWith(message.name)) {
          prompt += `${message.content}\n`;
        } else {
          prompt += `${message.name}: ${message.content}\n`;
        }
      } else {
        prompt += `${message.content}\n`;
      }
    }
  }
  return prompt;
}

function showHistory(message, response) {
  var historyBox = document.getElementById('history');

  // USER MESSAGE
  var boxMyMessage = document.createElement('div');
  boxMyMessage.className = 'box-my-message';

  var myMessage = document.createElement('p');
  myMessage.className = 'my-message';
  myMessage.innerHTML = message;

  boxMyMessage.appendChild(myMessage);

  historyBox.appendChild(boxMyMessage);

  // AI MESSAGE
  var boxResponseMessage = document.createElement('div');
  boxResponseMessage.className = 'box-response-message';

  var chatResponse = document.createElement('p');
  chatResponse.className = 'response-message';

  response = response.replace(/^Mentor:\s*/i, '');

  chatResponse.innerHTML = response;

  boxResponseMessage.appendChild(chatResponse);

  historyBox.appendChild(boxResponseMessage);

  conversationHistory.push({ role: 'ai', content: response });

  historyBox.scrollTop = historyBox.scrollHeight;
}

document.addEventListener("DOMContentLoaded", function () {
  const chatToggle = document.getElementById("chat-toggle");
  const boxQuestions = document.querySelector(".box-questions");

  chatToggle.addEventListener("click", function () {
    boxQuestions.classList.toggle("show");

    document.getElementById('message-input').addEventListener('keydown', function (event) {
      if (event.key === 'Enter' && !event.shiftKey) {
        setTimeout(sendMessage, 0);
      }
    });
  });
});