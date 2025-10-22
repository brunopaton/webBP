// api/contact.ts


import formData from "form-data";
import Mailgun from "mailgun.js";

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;

export default async function (req: any, res: any) { // Use 'any' se não instalar @vercel/node
    
    //  VERIFICAÇÃO DE SEGURANÇA 
    if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
        console.error("ERRO: Chaves ou Domínio do Mailgun faltando nas variáveis de ambiente!");
        return res.status(500).json({ message: "Configuração do servidor incompleta. Entre em contato com o suporte." });
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ message: "Método não permitido." });
    }
    
    // Inicialização do Mailgun APÓS a verificação da chave
    const mailgun = new Mailgun(formData);
    const client = mailgun.client({
        username: "api",
        key: MAILGUN_API_KEY, 
    });

    try {
        
        const data = req.body;
        const { name, company, email, phone, message } = data;

        if (!name || !email || !message) {
             return res.status(400).json({ message: "Por favor, preencha os campos obrigatórios." });
        }

        await client.messages.create(MAILGUN_DOMAIN, {
            from: `BP Host Contact <${email}>`, 
            to: "bruno.paton@gmail.com", 
            subject: `[Contato - Site] Novo contato de ${name}`,
            text: `
                Nome: ${name}
                Empresa: ${company || 'N/A'}
                E-mail: ${email}
                Telefone: ${phone || 'N/A'}
                Mensagem: ${message}
            `,
        });

        return res.status(200).json({ success: true, message: "Mensagem enviada com sucesso!" });

    } catch (error) {
        console.error("ERRO DO MAILGUN:", error);
        
        return res.status(500).json({ 
            message: "Falha ao enviar mensagem.", 
            detail: (error as Error).message 
        });
    }
}