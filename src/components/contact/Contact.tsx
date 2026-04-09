'use client';
 
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Send } from 'lucide-react';
 
import Input from './Input';
import IconGitHub from '@/assets/icons/redes/icon-github.svg';
import IconLinkedin from '@/assets/icons/redes/icon-linkedin.svg';
import IconInstagram from '@/assets/icons/redes/icon-instagram.svg';
 
const REDES = [
  { nome: 'linkedIn', href: 'https://www.linkedin.com/in/gabriel-evangelista-5a1a5a2aa/', src: IconLinkedin },
  { nome: 'github', href: 'https://github.com/Gabb83', src: IconGitHub },
  { nome: 'instagram', href: 'https://www.instagram.com/ev.gabrieel/', src: IconInstagram },
];
 
const STATUS_STYLE: Record<string, string> = {
  '': '',
  'Enviando...': 'text-gray-400',
  'Mensagem enviada ✅': 'text-green-500',
  'Preencha todos os campos': 'text-yellow-500',
  'Erro ao enviar ❌': 'text-red-500',
  'Erro de conexão ❌': 'text-red-500',
};
 
export default function Contact() {
  const [form, setForm] = useState({ nome: '', email: '', assunto: '', mensagem: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async () => {
    if (!form.nome || !form.email || !form.assunto || !form.mensagem) {
      setStatus('Preencha todos os campos');
      return;
    }
 
    setLoading(true);
    setStatus('Enviando...');
 
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
 
      if (res.ok) {
        setStatus('Mensagem enviada ✅');
        setForm({ nome: '', email: '', assunto: '', mensagem: '' });
      } else {
        setStatus('Erro ao enviar ❌');
      }
    } catch (err) {
      console.error(err);
      setStatus('Erro de conexão ❌');
    } finally {
      setLoading(false);
    }
  };
 
  const inputs = [
    { label: 'Nome', name: 'nome', value: form.nome },
    { label: 'E-mail', name: 'email', value: form.email },
    { label: 'Assunto', name: 'assunto', value: form.assunto },
  ];
 
  return (
    <section
      id="contact"
      className="py-16 px-6 lg:px-0 bg-[var(--contato-bg-light)] dark:bg-[var(--contato-bg-dark)]"
    >
      {/* Título */}
      <div className="text-center mb-12">
        <p className="text-xs font-semibold tracking-[0.2em] text-green-600 uppercase mb-2">
          Vamos conversar
        </p>
        <h2 className="text-3xl font-bold">Contato</h2>
        <div className="w-10 h-[2px] bg-green-600 rounded-full mx-auto mt-3" />
      </div>
 
      {/* Layout */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-12 max-w-4xl mx-auto">
 
        {/* Coluna esquerda */}
        <div className="w-full md:w-[280px] flex-shrink-0">
          <h3 className="text-xl font-semibold mb-2">Conecte-se comigo</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            Quer discutir oportunidades ou projetos?{' '}
            <span className="font-semibold text-gray-700 dark:text-gray-200">
              Mande uma mensagem!
            </span>
          </p>
 
          {/* Redes */}
          <div className="flex items-center gap-3">
            {REDES.map(({ nome, href, src }) => (
              <Link
                key={nome}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full
                  bg-gray-100 dark:bg-zinc-800
                  hover:bg-green-600 dark:hover:bg-green-600
                  transition-colors duration-300 group"
              >
                <Image
                  alt={nome}
                  src={src}
                  className="w-[20px] group-hover:brightness-0 group-hover:invert transition-all duration-300"
                />
              </Link>
            ))}
          </div>
 
          {/* Info extra */}
          <div className="mt-8 space-y-2">
            <p className="text-xs text-gray-400 dark:text-gray-500">
              📍 João Pessoa, PB — Brasil
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              ⏱ Respondo em até 24h
            </p>
          </div>
        </div>
 
        {/* Divisor vertical (só desktop) */}
        <div className="hidden md:block w-[0.5px] self-stretch bg-gray-200 dark:bg-zinc-700" />
 
        {/* Formulário */}
        <div className="w-full md:flex-1 flex flex-col gap-4">
          {/* Linha nome + email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {inputs.slice(0, 2).map(({ label, name, value }) => (
              <Input
                key={name}
                label={label}
                name={name}
                value={value}
                onChange={handleChange}
              />
            ))}
          </div>
 
          {/* Assunto full width */}
          <Input
            label={inputs[2].label}
            name={inputs[2].name}
            value={inputs[2].value}
            onChange={handleChange}
          />
 
          {/* Textarea */}
          <textarea
            name="mensagem"
            value={form.mensagem}
            onChange={handleChange}
            placeholder="Escreva sua mensagem..."
            rows={5}
            className="w-full resize-none rounded-md border border-gray-300 dark:border-zinc-600
              bg-transparent p-3 text-sm
              placeholder:text-gray-400 dark:placeholder:text-gray-500
              focus:outline-none focus:border-green-500 dark:focus:border-green-500
              hover:border-gray-400 dark:hover:border-zinc-500
              transition-colors duration-200"
          />
 
          {/* Footer do form */}
          <div className="flex items-center justify-between gap-4">
            {status ? (
              <p className={`text-sm ${STATUS_STYLE[status] ?? 'text-gray-400'}`}>
                {status}
              </p>
            ) : (
              <span />
            )}
 
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium
                text-white bg-green-600 hover:bg-green-700
                disabled:opacity-60 disabled:cursor-not-allowed
                cursor-pointer transition-colors duration-300"
            >
              <Send size={14} />
              {loading ? 'Enviando...' : 'Enviar'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}