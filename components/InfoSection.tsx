import React from 'react';

export const InfoSection: React.FC = () => {
  return (
    <div className="mt-16 max-w-4xl mx-auto space-y-12 text-gray-700 leading-relaxed">
      
      {/* Introduction / How to Use */}
      <section className="bg-white p-8 rounded-xl shadow-sm border border-[#00bd56]/20">
        <h2 className="text-2xl font-bold text-[#00bd56] mb-6 border-b border-[#00bd56]/20 pb-4">
          Como utilizar o Simulador
        </h2>
        <div className="space-y-4">
          <p>
            Entender o poder dos juros sobre juros nunca foi tão simples. Nossa ferramenta foi desenhada para facilitar seu planejamento financeiro em poucos cliques.
          </p>
          <ul className="space-y-3 mt-4">
            <li className="flex items-start">
              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#00bd56]/10 text-[#00bd56] font-bold text-xs mr-3 mt-1">1</span>
              <span><strong>Valor Inicial:</strong> Insira o montante que você já possui guardado para começar o investimento.</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#00bd56]/10 text-[#00bd56] font-bold text-xs mr-3 mt-1">2</span>
              <span><strong>Aporte Mensal:</strong> Defina quanto você consegue poupar e investir todos os meses.</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#00bd56]/10 text-[#00bd56] font-bold text-xs mr-3 mt-1">3</span>
              <span><strong>Taxa de Juros:</strong> Informe a rentabilidade esperada (ex: Poupança, CDB, Tesouro Direto). Você pode escolher entre taxa mensal ou anual.</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#00bd56]/10 text-[#00bd56] font-bold text-xs mr-3 mt-1">4</span>
              <span><strong>Tempo:</strong> Por quanto tempo você pretende manter o dinheiro investido?</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Formula Explanation */}
      <section>
        <h2 className="text-2xl font-bold text-[#00bd56] mb-4">A Matemática dos Juros Compostos</h2>
        <p className="mb-4">
          Diferente dos juros simples, onde o rendimento é calculado apenas sobre o valor principal, nos juros compostos o rendimento é calculado sobre o montante acumulado (principal + juros passados). É o famoso "juros sobre juros".
        </p>
        <div className="bg-[#00bd56] text-white p-6 rounded-lg font-mono text-center my-6 shadow-lg">
          <p className="text-lg">M = C (1 + i)<sup>t</sup></p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-[#00bd56]">
            <strong>M:</strong> Montante final acumulado.
          </div>
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-[#00bd56]/50">
            <strong>C:</strong> Capital inicial investido.
          </div>
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-[#00bd56]/50">
            <strong>i:</strong> Taxa de juros (na forma decimal).
          </div>
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-[#00bd56]/50">
            <strong>t:</strong> Tempo da aplicação.
          </div>
        </div>
      </section>

      {/* Comparisons */}
      <section className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-[#00bd56] mb-3">Juros Simples</h3>
          <p className="text-gray-600 mb-4">
            Crescimento linear. O valor do rendimento é sempre igual todos os meses, pois a base de cálculo é sempre o valor inicial.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
             <li>Crescimento em linha reta.</li>
             <li>Usado em operações de curto prazo ou descontos simples.</li>
             <li>Menos vantajoso para investimentos de longo prazo.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#00bd56] mb-3">Juros Compostos</h3>
          <p className="text-gray-600 mb-4">
            Crescimento exponencial. A cada mês, o rendimento aumenta, pois a base de cálculo cresce.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
             <li>Curva de crescimento ascendente ("Bola de Neve").</li>
             <li>Base do sistema financeiro, investimentos e financiamentos.</li>
             <li>O tempo é o fator multiplicador mais poderoso.</li>
          </ul>
        </div>
      </section>

      {/* Contexts */}
      <section className="bg-[#00bd56]/5 p-8 rounded-xl border border-[#00bd56]/20">
        <h2 className="text-2xl font-bold text-[#00bd56] mb-4">Onde eles estão presentes?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-[#00bd56]/20">
            <h4 className="font-bold text-[#00bd56] mb-2">Investimentos</h4>
            <p className="text-sm">
              Tesouro Direto, CDBs, Fundos Imobiliários e Ações (via reinvestimento de dividendos) utilizam a lógica dos juros compostos para multiplicar seu patrimônio.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm border border-[#00bd56]/20">
             <h4 className="font-bold text-[#00bd56] mb-2">Dívidas</h4>
             <p className="text-sm">
               Cartão de crédito rotativo e cheque especial são os vilões. Neles, os juros compostos trabalham contra você, aumentando a dívida rapidamente.
             </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm border border-[#00bd56]/20">
             <h4 className="font-bold text-[#00bd56] mb-2">Financiamentos</h4>
             <p className="text-sm">
               Em financiamentos imobiliários ou de veículos, os sistemas de amortização (como Tabela Price) utilizam cálculos complexos baseados em juros compostos.
             </p>
          </div>
        </div>
      </section>

    </div>
  );
};
