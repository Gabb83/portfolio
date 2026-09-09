'use client';
 
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, MapPin, Send, Sparkles } from 'lucide-react';
 
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
      className="relative py-20 px-6 lg:px-0 bg-zinc-50/50 dark:bg-zinc-950/50 overflow-hidden"
    >
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-green-500/10 dark:bg-green-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Título */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs font-semibold mb-3">
          <span>Vamos conversar</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Entre em Contato
        </h2>
        <div className="w-12 h-[2.5px] bg-gradient-to-r from-green-500 to-emerald-400 rounded-full mx-auto mt-4" />
      </div>

      {/* Container Principal */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Coluna Esquerda - Info Card */}
        <div className="md:col-span-5 flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-white/70 dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-md shadow-xl shadow-black/5 h-full">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
              Conecte-se comigo
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
              Quer discutir uma oportunidade, novo projeto ou apenas trocar uma ideia?{' '}
              <span className="font-semibold text-zinc-900 dark:text-zinc-200">
                Mande uma mensagem!
              </span>
            </p>

            <div className="flex items-center gap-3 mb-8">
              {REDES.map(({ nome, href, src }) => (
                <Link
                  key={nome}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700/60 hover:bg-green-600 dark:hover:bg-green-600 hover:border-green-600 dark:hover:border-green-600 hover:scale-105 active:scale-95 transition-all duration-300 group shadow-sm"
                >
                  <Image
                    alt={nome}
                    src={src}
                    className="w-5 h-5 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800/80 space-y-3">
            <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/50 dark:border-zinc-800/50 text-xs font-medium text-zinc-600 dark:text-zinc-300">
              <MapPin size={16} className="text-green-500 flex-shrink-0" />
              <span>João Pessoa, PB — Brasil</span>
            </div>
            <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/50 dark:border-zinc-800/50 text-xs font-medium text-zinc-600 dark:text-zinc-300">
              <Clock size={16} className="text-green-500 flex-shrink-0" />
              <span>Respondo em até 24 horas</span>
            </div>
          </div>
        </div>

        {/* Coluna Direita - Formulário */}
        <div className="md:col-span-7 p-6 md:p-8 rounded-2xl bg-white/70 dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-md shadow-xl shadow-black/5">
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

            <Input
              label={inputs[2].label}
              name={inputs[2].name}
              value={inputs[2].value}
              onChange={handleChange}
            />

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Mensagem
              </label>
              <textarea
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                placeholder="Escreva sua mensagem..."
                rows={4}
                className="w-full resize-none rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/30 p-3.5 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-green-500 dark:focus:border-green-500 focus:ring-2 focus:ring-green-500/20 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200"
              />
            </div>

            <div className="flex items-center justify-between gap-4 pt-2">
              {status ? (
                <p className={`text-xs font-medium ${STATUS_STYLE[status] ?? 'text-zinc-400'}`}>
                  {status}
                </p>
              ) : (
                <span />
              )}

              <button
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-green-500/20 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden ml-auto cursor-pointer"
              >
                <Send size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                <span>{loading ? 'Enviando...' : 'Enviar Mensagem'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}