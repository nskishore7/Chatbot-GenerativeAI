const Groq = require("groq-sdk")
const readline = require("readline-sync")
require("dotenv").config()



const groq= new Groq({
    "apiKey":process.env.Groq_api_key

})

async function chat(){
    console.log("🖥 Groq-AI Chatbot(type exit to stop)")
    while(true){
        const userinput = readline.question("you:")

        if(userinput.toLowerCase()==="exit"){
            break
        }

        const response = await groq.chat.completions.create({
            model:"llama-3.1-8b-instant",
            messages:[
                {role:"user",content:userinput}
            ]
        })

        console.log("AI",response.choices[0].message.content)
    }
}
chat()